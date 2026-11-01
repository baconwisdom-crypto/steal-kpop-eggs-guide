import { AdSlot } from "@/components/ad-slot";
import { DismissibleTopAd } from "@/components/dismissible-top-ad";
import { siteConfig } from "@/config/site";
import { adBundleReady } from "@/lib/ad-units";

export function getAdChromeState() {
  const ads = siteConfig.ads;
  // Reserve desktop space only when this domain's full code bundle is ready.
  const visible = Boolean(ads.desktopChrome?.enabled && ads.enabled && adBundleReady);
  return {
    top: visible && Boolean(ads.placements?.["top-sticky"]),
    left: visible && Boolean(ads.placements?.["left-sticky"]),
  };
}

export function AdChrome() {
  const state = getAdChromeState();
  return <>
    {state.top && <DismissibleTopAd />}
    {state.left && <div className="site-left-ad-rail"><AdSlot placement="left-sticky" format="vertical-rail" /></div>}
  </>;
}
