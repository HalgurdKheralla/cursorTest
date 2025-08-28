export function trackScreen(screenName: string, params?: Record<string, any>) {
  // Placeholder: wire to Firebase Analytics / Mixpanel later
  try {
    // eslint-disable-next-line no-console
    console.log('[analytics] screen', screenName, params ?? {});
  } catch {}
}

