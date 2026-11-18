type DownloadTarget = 'darwin-arm64' | 'darwin-x64' | 'win32-x64';

type NavigatorWithHints = Navigator & {
  userAgentData?: {
    platform: string;
    getHighEntropyValues?: (
      hints: string[],
    ) => Promise<{ architecture?: string; bitness?: string }>;
  };
};

function getMacGraphicsArchitecture(): 'arm' | 'x86' | undefined {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    const debug = gl?.getExtension('WEBGL_debug_renderer_info');
    const renderer = debug && gl?.getParameter(debug.UNMASKED_RENDERER_WEBGL);
    gl?.getExtension('WEBGL_lose_context')?.loseContext();

    if (typeof renderer !== 'string') return;
    if (/\bApple M\d+\b/i.test(renderer)) return 'arm';
    if (/\b(?:Intel|AMD|ATI|NVIDIA)\b/i.test(renderer)) return 'x86';
  } catch {
    // Graphics details may be unavailable due to browser privacy settings.
  }
}

export async function getRecommendedDownload(): Promise<
  DownloadTarget | undefined
> {
  const { userAgent, userAgentData, maxTouchPoints } =
    navigator as NavigatorWithHints;
  const platform = userAgentData?.platform || navigator.platform || userAgent;
  const isWindows = /^Win|\bWindows\b/i.test(platform);
  // iPadOS can report itself as a Mac in desktop browsing mode.
  const isMac =
    /\b(?:MacIntel|MacPPC|macOS|Macintosh)\b/i.test(platform) &&
    maxTouchPoints < 2;
  if (!isWindows && !isMac) return;

  const hints = await userAgentData
    ?.getHighEntropyValues?.(['architecture', 'bitness'])
    .catch(() => undefined);

  if (isWindows) {
    if (
      hints?.architecture === 'arm' ||
      hints?.bitness === '32' ||
      /\bARM(?:64)?\b/i.test(userAgent)
    )
      return;
    return 'win32-x64';
  }

  // Browser user-agent strings can report Intel on Apple Silicon.
  const architecture = hints?.architecture || getMacGraphicsArchitecture();
  if (architecture === 'arm') return 'darwin-arm64';
  if (architecture === 'x86') return 'darwin-x64';
}
