// Level 3 — push-size wrapper for the tile chunk. The real chunk is 142KB,
// over the single-argument size cap of the repo write path, so it ships as
// two numbered parts; reassembled here and imported from a blob URL.
// Relative imports are rewritten to this directory (blob modules cannot
// resolve relative specifiers). Re-exports every minified name the bundle
// expects (Rollup renames exports at build time).
const __T3_OWN = new URL('./', import.meta.url).href;
const __T3_PARTS = ['e-maker-tile-Bd1lMgPV.js.p0.js', 'e-maker-tile-Bd1lMgPV.js.p1.js'];
const __T3_TEXTS = await Promise.all(__T3_PARTS.map(p =>
  fetch(__T3_OWN + p).then(r => { if (!r.ok) throw new Error('[tile] part failed: ' + p); return r.text(); })));
const __T3_SRC = __T3_TEXTS.join('').replace(/from"\.\/([A-Za-z0-9_.\-]+\.js)"/g,
  (m, f) => 'from"' + __T3_OWN + f + '"');
const __T3_NS = await import(URL.createObjectURL(new Blob([__T3_SRC], { type: 'text/javascript' })));

export const B = __T3_NS.B;
export const T = __T3_NS.T;
export const a = __T3_NS.a;
export const b = __T3_NS.b;
export const c = __T3_NS.c;
export const d = __T3_NS.d;
export const e = __T3_NS.e;
export const p = __T3_NS.p;
export const v = __T3_NS.v;
