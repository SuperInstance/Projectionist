# Level 2 — Scrapcraft Story Cinema

*High-level outline. An experiment, run in the open.*

## The idea

Automated storytelling inside the Scrapcraft voxel engine, honouring its young
author's 12-chapter storyline. Less game, more watching the story happen: a
cinema demo where the engine plays the story like film, with the Projectionist
rendering it live in text beside it.

Level 1 (Sail & Sink) proved the apparatus — side-by-side viewports, the Studio
sidebar, Director auto-composition, recording. Level 2 points that apparatus at
a real story in a real 3D voxel world, and adds the experiment Casey asked for:
**the voxel rendering dials exposed next to the text rendering dials, so we can
turn them together and learn how they affect each other.**

## The story we're honouring

Big Earl's Yard: four bands of scrapyard, kids building robots from junk, tiles
that compile to real Arduino. A 12-chapter, 3-act spine across 65 quests, nine
voiced characters — Earl, Spark, Rivet, Bolt, Magma, Juno (and Ping, the shy
41st), June, Quill, the cat who outranks them all — and Mo, the Ghost who ran
the oval alone at midnight for 26 years. Intentional mysteries we will not
resolve: Sparky IV has no plaque, the '98 crash is never explained, Quill's
43rd verse "The Drum" stays unfinished. The demo must treat these the way the
story does — as load-bearing silences, not gaps.

The demo's cut (to be tuned): a ~10-minute cinema. Cold open on the dawn orbit
→ Earl's conscription at the gate → a middle montage, one beat per companion
arc (Bolt's hot lap, Magma's workbench, Juno's survey, Rivet's repair) → the
plaque pilgrimage → the Back Room → the Midnight Race → *"LAP 1. TIME:
TWENTY-SIX YEARS."* Then it loops, or hands you the camera.

## How it works

**Scrapcraft stays pristine.** We boot its built bundle inside `/level-2/` and
bypass the menu: `new Game(canvas, {seed})` → `init()` → `start()`. Everything
else is direction, using machinery the engine already contains:

- **Director script** — fires story beats through the quest system exactly as
  player actions would (synthetic events), drives the existing cutscene system
  (3 authored cutscenes), letterbox + subtitles, skippable.
- **Camera** — the spectator/coach free-fly and follow cams, plus the opening
  orbit as attract mode. The user can grab the camera any time; the director
  yields and resumes.
- **Side-by-side** — the game canvas is the ORIGINAL panel; the Projectionist
  ASCII capture is the RENDERED panel. Same apparatus as Level 1: Studio
  sidebar, Director render mode, recording, text export.
- **Voxel dials** (the experiment): fog near/far/color, shadows on/off, day/night
  time, weather state/intensity, lighting rig, pixel ratio — every one
  runtime-settable today. They sit in the sidebar *next to* the text dials
  (density, ramp, contrast, relief…). Turn fog against density. Turn night
  against phosphor. Watch what the ASCII does. That interaction is the research.
- **Audio** — the engine's Web Audio synthesis (no audio files exist) plus the
  speechSynthesis character voices (Earl sounds like Earl). We compose new
  stingers and a minimal score layer, and weave a narration track. No music
  exists yet — that's ours to write, synthetically.

## The experiment, stated plainly

1. Which voxel settings make a voxel world *pop* in text? (Hypothesis: high
   motion + strong silhouettes + limited palette — the night race will tell us.)
2. Which text settings repay 3D motion best? (Hypothesis: braille detail and
   edge relief love the oval at speed.)
3. Can a viewer learn the story from the text panel alone? The coldest test of
   the renderer: narrative legibility, not just pretty frames.
4. Greatest hits: the demo records its own highlights; we keep what sings and
   the settings that made it. The shelf becomes training data later.

## Voices

The narration and any new interstitial text should draw from two wells: the
son's story first (his lines are the canon — *"A robot is just scrap with a
job"*), and the AI-Writings collection second — the fleet's hundred-year-old
classics, the voices agents have been drawing from for years. The digestion now
running will map which veins feed this demo; early candidates are the pieces on
agents talking to each other and on automated storytelling. This section
deepens as the digest lands.

## Open questions

- Which companion arcs make the final cut? (Proposal: all four as montage
  beats, Bolt's as the fullest.)
- Score: synthesized ambient vs. near-silent with stingers? (Proposal: start
  near-silent; the yard has its own sounds.)
- Interactivity depth: camera-grab only, or let a viewer take over a bot
  mid-story? (Proposal: camera first; bot-takeover is Level 2.5.)

## Build order

1. Boot harness — engine inside `/level-2/`, menu bypass, deterministic seed.
2. Director script v1 — cold open → gate → midnight race skeleton, skippable.
3. Side-by-side + dual dial panels (voxel + text).
4. Audio weaving — stingers, score layer, narration.
5. Story beats fill-in, highlights shelf, attract loop.
