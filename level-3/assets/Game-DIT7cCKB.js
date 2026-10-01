// Level 3 — push-size wrapper. The real chunk ships as numbered parts
// (the repo write path caps a single call); reassembled here and
// imported from a blob URL. Static deps resolve to ../level-2/assets/
// only when byte-identical there; everything else ships in this
// directory (the level-3 build's shared chunks carry different hashes
// than level-2's, so cross-referencing 404s — that was the boot failure).
// Re-exports every minified name the bundle expects (Rollup renames
// exports at build time).
const __L3_OWN = new URL('./', import.meta.url).href;
const __L3_L2 = new URL('../../level-2/assets/', import.meta.url).href;
const __L3_LOCAL = new Set(['BackRoomPanel-4OeKS9WN.js', 'Game-DIT7cCKB.js', 'JrShowcase-CYeyQ2Rb.js', 'e-cinema-DihgStp3.js', 'main-CRPEc-5c.js',
  'e-maker-core-a-DZtYiIYv.js', 'e-maker-core-b-o41zpWxu.js', 'e-maker-spark-ChGmX4lN.js',
  'e-onboarding-DCllyPtN.js', 'e-quests-a-DA4pvxuR.js', 'e-quests-b-B5mKFNm_.js',
  'e-companion-a-C6zw3CdO.js', 'e-companion-b-BzVAb1Jb.js', 'e-learning-NzKl5kKr.js',
  'e-maker-tile-Bd1lMgPV.js']);
const __L3_PARTS = ['Game-DIT7cCKB.js.p0.js', 'Game-DIT7cCKB.js.p1.js', 'Game-DIT7cCKB.js.p2.js', 'Game-DIT7cCKB.js.p3.js', 'Game-DIT7cCKB.js.p4.js'];
const __L3_TEXTS = await Promise.all(__L3_PARTS.map(p =>
  fetch(__L3_OWN + p).then(r => { if (!r.ok) throw new Error('[level3] part failed: ' + p); return r.text(); })));
const __L3_SRC = __L3_TEXTS.join('').replace(/__ASSETS__\/([A-Za-z0-9_.\-]+\.js)/g,
  (m, f) => (__L3_LOCAL.has(f) ? __L3_OWN : __L3_L2) + f);
const __L3_NS = await import(URL.createObjectURL(new Blob([__L3_SRC], { type: 'text/javascript' })));

export const G = __L3_NS.G;
export const J = __L3_NS.J;
export const a = __L3_NS.a;
