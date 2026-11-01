"use client";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { bundle, adBundleReady } from "@/lib/ad-units";
import { selectAdFormat } from "@/lib/ad-policy";
import type { AdPlacement } from "@/lib/types";
type Props = { placement: AdPlacement; format: "top-sticky" | "vertical-rail" | "responsive-banner" | "sidebar-square"; className?: string };
function NativeAd() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current;
    const unit = bundle.units.find(item => item.format === "native");
    if (!host || !unit) return;
    const template = document.createElement("template"); template.innerHTML = unit.raw;
    for (const old of template.content.querySelectorAll("script")) {
      const script = document.createElement("script");
      for (const attribute of old.attributes) script.setAttribute(attribute.name, attribute.value);
      script.textContent = old.textContent; old.replaceWith(script);
    }
    host.append(template.content);
    return () => host.replaceChildren();
  }, []);
  return <div ref={ref} className="ad-native" data-ad-format="native" />;
}
export function AdSlot({ placement, format, className }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [width, setWidth] = useState(0);
  const [desktop, setDesktop] = useState(false);
  const enabled = siteConfig.ads.enabled && adBundleReady && siteConfig.ads.placements?.[placement];
  useEffect(() => {
    if (!enabled) return;
    const media = matchMedia("(min-width: 1280px) and (min-height: 700px)");
    const update = () => setDesktop(media.matches);
    update(); media.addEventListener("change", update);
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    if (ref.current) observer.observe(ref.current);
    return () => { media.removeEventListener("change", update); observer.disconnect(); };
  }, [enabled]);
  if (!enabled || (placement === "left-sticky" && format !== "vertical-rail")) return null;
  const native = placement === "article-banner";
  const selected = selectAdFormat(format, width, desktop);
  const unit = bundle.units.find(item => item.format === selected);
  const ready = native ? width > 0 : Boolean(unit);
  return <aside ref={ref} className={["ad-slot", `ad-slot--${format}`, className].filter(Boolean).join(" ")}
    aria-label="Advertisement" data-ad-placement={placement} data-ad-state={ready ? "enabled" : "unavailable"} data-ad-provider="adsterra">
    {ready && <span className="ad-slot__label">Advertisement</span>}
    {native ? ready && <NativeAd /> : unit && <iframe key={unit.format} title={`${unit.format} advertisement`} data-ad-format={unit.format}
      width={unit.width} height={unit.height} scrolling="no" style={{ border: 0, display: "block", flexShrink: 0 }}
      srcDoc={`<!doctype html><html><head><style>html,body{margin:0;padding:0;overflow:hidden}</style></head><body>${unit.raw}</body></html>`} />}
  </aside>;
}
