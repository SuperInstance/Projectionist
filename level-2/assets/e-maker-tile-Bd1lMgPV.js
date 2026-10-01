// Level 2 — push-size wrapper. The real chunk ships as numbered parts
// (the repo write path caps a single call); reassembled here and
// imported from a blob URL. Same export as the original chunk.
const __L2_BASE = new URL('./', import.meta.url).href;
const __L2_PARTS = ["e-maker-tile-Bd1lMgPV.js.p0.js", "e-maker-tile-Bd1lMgPV.js.p1.js"];
const __L2_TEXTS = await Promise.all(__L2_PARTS.map(p =>
  fetch(__L2_BASE + p).then(r => { if (!r.ok) throw new Error('[level2] part failed: ' + p); return r.text(); })));
const __L2_NS = await import(URL.createObjectURL(new Blob(
  [__L2_TEXTS.join('').split('__ASSETS__/').join(__L2_BASE)], { type: 'text/javascript' })));
export const TileEditor = __L2_NS.TileEditor;
