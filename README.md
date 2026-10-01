# Projectionist — demo levels

The living demo stage for **the Projectionist**, the text-frame renderer from
[Patchwork Experts](https://github.com/SuperInstance/Patchwork-experts).

Every level is presented side-by-side: the normal render on the left, the
Projectionist's live text frames on the right — with the full Studio sidebar of
render dials, Director auto-composition that names its own scenes, recording,
and export. The shared apparatus is the point; the levels are what it watches.

## Levels

- **[Level 1 — Sail & Sink](https://superinstance.github.io/Projectionist/level-1/)** —
  a charming physics sailing game turned into a theatre of famous sinkings
  (Titanic, Britannic, Marmalade Run). Take the helm against impossible odds, or
  bear witness while the director camera frames each beat for the text renderer.
  Scenario montage, 1×–8× time, demonstration mode, Greatest Hits shelf.
- **[Level 2 — Scrapcraft Story Cinema](https://superinstance.github.io/Projectionist/level-2/)** —
  automated storytelling inside the Scrapcraft voxel engine, honouring its young
  author's storyline: less game, more watching the story happen, with
  voxel-render and text-render dials to turn together and study how they affect
  each other. Story treatment: [LEVEL2.md](LEVEL2.md).

## The shared apparatus

- **Viewfinder layout** — ORIGINAL / RENDERED panels, auto-fit text sizing, record
  rendered (webm), copy text frame, status narration.
- **Studio sidebar** — the full wall of dials (tone, ramp, grid, image, sculpt,
  colour), every slider live and animated as presets and Director move them.
- **Director mode** — no knobs; it reads the scene, composes from recipe families,
  lerps at ~6%/frame, names the scene, never renders a black frame.
- **URL-is-the-preset** (planned), JSON/HTML export, frozen-frame study,
  `?mock=1` deterministic demo scene for Playwright-style testing.

## Future plans (for the GPU team)

The documented scaling path: replace the rule-based auto-tuner with a learned
policy — scene stats → render settings — trained with supervision on the JSONL
logs plus human preference picks, on bigger machines with real GPUs. The log
schema and the placeholder reward are the contract; the learner just has to
beat them. Adaptive resolution-for-motion is the first policy target; per-region
quality and style transfer are later.
