# Steal KPOP Eggs! Wiki

Independent English Roblox guide for BumClub's Steal KPOP Eggs!.

Production: https://www.stealkpopeggs.wiki
Repository: https://github.com/baconwisdom-crypto/steal-kpop-eggs-guide

## Content

Seven routes cover the first egg, treadmill training, hatch countdowns, photocards, codes status and source policy. Twelve recorded-gameplay images have committed section bindings in content/video-evidence.json. Prices, probabilities, full incubation durations and trade values are included only when verified.

The Sandeoki Pearl Sanctuary Egg screenshot shows 3h 05m remaining. It does not establish full incubation duration.

## Build and deploy

Use Node 22.18.0 and npm. Run npm ci in a clean checkout, then npm run verify. The static output is out. Cloudflare Pages builds main on every Git push with npm run verify. Preview hostnames remain noindex; the production WWW hostname is indexable.

The local dependency junction is an environment-specific optimization. Do not modify shared node_modules. Local builds set GAME_GUIDE_LOCAL_DEPENDENCY_ROOT to I:\游戏站; clean CI uses process.cwd().

## Evidence and acceptance

Publicly needed video bindings are tracked in content. Full research and account receipts stay outside Git under research. The latest local acceptance record is research/acceptance.json, with topic-specific evidence gaps in research/content-gap-comparison.json. See SITE-WORKFLOW.md and FRAMEWORK-LAYERS.md for the inherited framework boundaries.
