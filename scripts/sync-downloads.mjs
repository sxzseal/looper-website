import { readFile, writeFile } from 'node:fs/promises';
const targets = ['darwin-arm64', 'darwin-x64', 'win32-x64'];
const snapshotUrl = new URL('../src/data/downloads.json', import.meta.url);
const snapshot = JSON.parse(await readFile(snapshotUrl, 'utf8'));
const results = await Promise.allSettled(
  targets.map(async (target) => {
    const [platform, arch] = target.split('-');
    const response = await fetch(
      `https://updater.sxlw.ltd/v1/update/${platform}/${arch}?version=0.0.0&channel=stable`,
      { signal: AbortSignal.timeout(25000) },
    );
    if (!response.ok) throw new Error(`${target}: HTTP ${response.status}`);
    const data = await response.json();
    const manifest = JSON.parse(
      Buffer.from(data.signedManifest, 'base64').toString('utf8'),
    );
    const artifact = manifest.artifacts?.[target];
    const url = new URL(artifact?.url);
    if (
      url.protocol !== 'https:' ||
      url.hostname !== 'releases.sxlw.ltd' ||
      url.username ||
      url.password ||
      !/^\d+\.\d+\.\d+$/.test(data.version) ||
      manifest.version !== data.version ||
      manifest.channel !== 'stable' ||
      manifest.platform !== platform ||
      !Number.isSafeInteger(artifact.size) ||
      artifact.size <= 0
    )
      throw new Error(`${target}: invalid metadata`);
    return [
      target,
      { version: data.version, url: url.href, size: artifact.size },
    ];
  }),
);
let refreshed = 0;
for (const [index, result] of results.entries()) {
  if (result.status === 'fulfilled') {
    const [target, data] = result.value;
    snapshot[target] = data;
    refreshed++;
    console.log(`${target}: v${data.version}`);
  } else
    console.warn(
      `${targets[index]}: refresh failed; retaining last known state (${result.reason.message})`,
    );
}
if (!refreshed)
  throw new Error('No platform could be refreshed; snapshot unchanged');
await writeFile(snapshotUrl, JSON.stringify(snapshot, null, 2) + '\n');
