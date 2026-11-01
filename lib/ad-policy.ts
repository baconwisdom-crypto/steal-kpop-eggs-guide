export type AdFormat = "native" | "300x250" | "728x90" | "320x50" | "160x600";
export interface AdUnit { format: AdFormat; raw: string; width?: number; height?: number; }
export interface AdBundle { domain: string; category: string; complete: boolean; units: AdUnit[]; }
const dimensions = { "300x250": [300, 250], "728x90": [728, 90], "320x50": [320, 50], "160x600": [160, 600] } as const;
export function isAdBundleReady(bundle: AdBundle, hostname: string) {
  if (!bundle.complete || bundle.category !== "Social" || bundle.domain !== hostname.replace(/^www\./, "") || bundle.units.length !== 5) return false;
  return (["native", ...Object.keys(dimensions)] as AdFormat[]).every(format => {
    const units = bundle.units.filter(unit => unit.format === format);
    if (units.length !== 1 || !/<script\b/i.test(units[0].raw)) return false;
    if (format === "native") return true;
    const [width, height] = dimensions[format];
    return units[0].width === width && units[0].height === height;
  });
}
export function selectAdFormat(format: string, width: number, desktop: boolean): AdFormat | null {
  // Zoomed layouts can report 319.99px for a declared 320px container.
  width = Math.floor(width + 0.1);
  if (format === "vertical-rail") return desktop ? "160x600" : null;
  if (format === "top-sticky") return width >= 320 ? "320x50" : null;
  if (format === "sidebar-square") return width >= 300 ? "300x250" : null;
  return width >= 728 ? "728x90" : width >= 320 ? "320x50" : width >= 300 ? "300x250" : null;
}
