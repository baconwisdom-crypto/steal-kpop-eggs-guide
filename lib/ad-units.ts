import rawBundle from "@/config/ad-units.json";
import { siteConfig } from "@/config/site";

import { isAdBundleReady, type AdBundle } from "@/lib/ad-policy";
export const bundle = rawBundle as AdBundle;
export const adBundleReady = isAdBundleReady(bundle, new URL(siteConfig.siteUrl).hostname);
