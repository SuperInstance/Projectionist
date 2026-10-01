# Sail & Sink

A charming little physics sailing game — and the living demo stage for
**the Projectionist**, the text-frame renderer from
[Patchwork Experts](https://github.com/SuperInstance/Patchwork-experts).

Sail a tubby cargo boat across a procedurally generated archipelago. The
autopilot plays the game by itself; grab the helm (WASD / arrows) any time.
Pick up crates, deliver them for coins, and mind the physics: crates slide
across your deck on the tilted plane, turn too hard and one goes overboard.
Whirlpools pull, rocks hole your hull, too much water and you sink — with a
sad trombone and a quip, never a punishment.

## The point of this repo

One game, two viewports: the normal render on the left, the Projectionist's
live text frames on the right (glyph and sculpt engines, faithful ports of
`render.py`). A motion-aware auto-tuner breathes the text resolution up and
down — rough seas get fewer columns at higher frame rates, calm water gets
full detail — and says why in plain words.

Every session also feeds the future:

- **Voyage Reel** — auto-captured highlight clips (deliveries, sinkings,
  whirlpool rides) as text-frame animations. Landing-page footage.
- **Training log** — per-second JSONL of render settings, motion, scene stats
  and a *documented heuristic* quality score, downloadable from the Data tab.
  It is explicitly a placeholder reward, not intelligence.

## Run it

Open `index.html` in a browser — no build step, no dependencies, everything
procedural. (GitHub Pages serves it as-is.)

## Current implementation notes

The first build renders with Canvas 2D and a hand-rolled 2.5D projection
rather than WebGL — a deliberate portability call so the game runs anywhere
with zero CDN risk. The scene graph, physics (wave field, buoyancy sampling,
deck-cargo sliding, whirlpool fields, flood level) and the Projectionist
viewport are all in the one file, commented for handoff.

## Future plans (for the GPU team)

The documented scaling path: replace the rule-based auto-tuner with a learned
policy — scene stats → render settings — trained with supervision on the
JSONL logs plus human preference picks, on bigger machines with real GPUs.
The log schema and the placeholder reward are the contract; the learner just
has to beat them. Adaptive resolution-for-motion is the first policy target;
per-region quality and style transfer are later.
