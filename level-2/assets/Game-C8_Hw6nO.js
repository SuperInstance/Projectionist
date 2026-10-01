// Level 2 — push-size wrapper. The real chunk ships as numbered parts
// (the repo write path caps a single call); reassembled here and
// imported from a blob URL. Re-exports every minified name the bundle
// expects (Rollup renames exports at build time).
const __L2_BASE = new URL('./', import.meta.url).href;
const __L2_PARTS = ["Game-C8_Hw6nO.js.p0.js", "Game-C8_Hw6nO.js.p1.js", "Game-C8_Hw6nO.js.p2.js", "Game-C8_Hw6nO.js.p3.js", "Game-C8_Hw6nO.js.p4.js"];
const __L2_TEXTS = await Promise.all(__L2_PARTS.map(p =>
  fetch(__L2_BASE + p).then(r => { if (!r.ok) throw new Error('[level2] part failed: ' + p); return r.text(); })));
const __L2_NS = await import(URL.createObjectURL(new Blob(
  [__L2_TEXTS.join('').split('__ASSETS__/').join(__L2_BASE)], { type: 'text/javascript' })));

export const G = __L2_NS.G;
export const J = __L2_NS.J;
export const a = __L2_NS.a;
