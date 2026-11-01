import type { SiteConfig } from "@/lib/types";
export const siteConfig: SiteConfig = {
  siteName: "Steal KPOP Eggs! Wiki",
  shortName: "KE",
  siteSlug: "steal-kpop-eggs",
  description: {
    en: "Bring eggs back from KPOP mascots, hatch photocards and train your speed for the next run."
  },
  siteUrl: "https://www.stealkpopeggs.wiki",
  searchVisibility: "public",
  architecture: {
    enabled: true,
    templates: [
      "landing"
    ]
  },
  theme: {
    accent: "#c3a2ff",
    accentSoft: "#c3a2ff",
    background: "#10121a",
    panel: "#191d29"
  },
  brandIcon: {
    src: "/images/official-icon.png",
    alt: {
      en: "Official Steal KPOP Eggs! icon"
    },
    sourceId: "official-game"
  },
  navigationIcons: {
    home: "guides",
    start: "guides",
    speed: "guides",
    hatching: "guides",
    cards: "guides",
    codes: "codes",
    about: "guides"
  },
  supportedLocales: [
    "en",
    "de",
    "fr",
    "es",
    "ja"
  ],
  publishedLocales: [
    "en"
  ],
  plannedLocales: [],
  lastVerified: "2026-11-01",
  officialLinks: [
    {
      label: "Play on Roblox",
      url: "https://www.roblox.com/games/109148091959841"
    },
    {
      label: "BumClub community",
      url: "https://www.roblox.com/communities/4467593"
    }
  ],
  heroImage: {
    src: "/images/official-hero.png",
    alt: {
      en: "Official Steal KPOP Eggs! promotional artwork"
    },
    sourceId: "official-game",
    heroMediaType: "official-promotional-image",
    ratio: "video"
  },
  heroVideo: null,
  mediaPresentation: {
    showImageText: false
  },
  analytics: {
    enabled: true,
    measurementId: "G-CX11B2C2WV"
  },
  ads: {
    enabled: true,
    previewPlaceholders: false,
    desktopChrome: {
      enabled: true
    },
    placements: {
      "top-sticky": true,
      "left-sticky": true,
      "home-banner": true,
      "article-banner": true,
      "sidebar-square": true
    }
  },
  evidenceLabels: [
    {
      label: "Official details and gameplay",
      note: {
        en: "Recorded interfaces can change."
      }
    }
  ],
  disclaimer: {
    en: "Independent fan guide. Not affiliated with Roblox or BumClub."
  }
} satisfies SiteConfig;
