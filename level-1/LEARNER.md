# The Learner (experiment)

A 35-line learning loop on top of Sail and Sink. Principle: **variation,
selection, memory.** No watcher, no debt, no ledger — the game's own
telemetry is the teacher.

## Why it can be this small

The game already supplies everything a learner needs:

- **Self-play** — the autopilot sails itself (`startGame(true)`).
- **Reward** — `projection.quality`, scored every frame (0.40 edge band +
  0.35 contrast + 0.25 stability).
- **Telemetry** — `snapshot()` logs settings + quality + scene every second.

The learner just remembers what worked and tries variations. The three
functions are `learnObserve` (selection, 1/sec), `learnApply` (variation,
1/20s), `sceneBucket` (memory key).

## Design decisions

- **9 scene buckets** (3 wave bands × 3 speed bands). Different sea states
  want different settings; one global best would smear them together.
- **Only 8 settings** (toneMix, edgeMix, brightness, gamma, blackPoint,
  whitePoint, zoom, cellAspect). The heuristic auto-tuner owns cols, fps,
  edgeGain, contrast — the two systems don't fight over the same dials.
- **localStorage persistence** (`sailLearn`). Learning survives reloads;
  a second session starts from the first session's buckets.
- **Human outranks learner.** Any manual slider move turns learning off;
  the Learn button re-enables it.
- **Jitter is clamped** per setting so mutation can't break the renderer.

## Playtest results (simulated hour, autopilot, harness in `~/workspace/playtest/learn-proto/`)

| | control (learner off) | learner on |
|---|---|---|
| mean quality | ~0.48, flat all hour | ~0.52–0.56 |
| best remembered | — | 0.86–0.94 (vs 0.51 default) |

- The robust discovery, found on every run: **edgeMix 0 → ~0.14**. The
  default render ignores the edge channel entirely, so the reward's edge
  term scores zero; the learner found the dial. No degenerate
  reward-hacking observed (toneMix stayed 1, no extreme values).
- Honest caveat: the reward is scene-dependent, so recorded peaks are part
  luck. Means move ~15% over baseline; the ~0.9 peaks conflate good
  settings with favorable seas. 8-seed comparison confirmed high
  run-to-run variance — local search on a noisy reward is seed-lucky.
- The harness runs the real game code (loop, physics, projection, reward)
  with only DOM + raw pixels stubbed; the pixel scene drifts slowly so
  buckets genuinely differ.

## A fix that was tried and reverted

An exploit/explore alternation (hold the best on even applies, jitter on
odd) was implemented to stop the live picture wobbling. The 8-seed
comparison showed it added complexity without a clear win — the wobble
was scene noise, not over-exploration. Reverted. Simpler stays.

## Future work (from the Jev decomposition competition)

The Meta-learner's 8 patterns for supervising this loop, in priority order:
1. **Hack sniffer** — quarantine reward-gaming candidates before they
   poison bucket memory.
2. **Crowning jury** — require evidence (readings, low variance) before
   crowning a challenger, so lucky spikes don't become incumbents.
3. **Stagnation referee** — replace the fixed 20s tick with a plateau
   gate: evaluate when stuck, ride when climbing.
4. **Regime-change detector** — on a quality dip, diagnose noise (hold)
   vs scene change (re-seed from the new bucket) before acting.
