/*!
 * Pintura Image Editor Sandbox 8.26.1
 * (c) 2018-2022 PQINA Inc. - All Rights Reserved
 * This version of Pintura Image Editor is for use on pqina.nl only
 * License: https://pqina.nl/pintura/license/
 */
/* eslint-disable */

const t = { 65505: "exif", 65504: "jfif", 65498: "sos" };
var e = (e) => {
  if (65496 !== e.getUint16(0)) return;
  const o = Object.keys(t).map((t) => parseInt(t, 10)),
    i = e.byteLength;
  let n,
    r = 2,
    a = void 0;
  for (; r < i && 255 === e.getUint8(r); ) {
    if (((n = e.getUint16(r)), o.includes(n))) {
      const o = t[n];
      a || (a = {}), a[o] || (a[o] = { offset: r, size: e.getUint16(r + 2) });
    }
    if (65498 === n) break;
    r += 2 + e.getUint16(r + 2);
  }
  return a;
};
var o = (t, o, i) => {
  if (!t) return;
  const n = new DataView(t),
    r = e(n);
  if (!r || !r.exif) return;
  const a = ((t, e) => {
    if (65505 !== t.getUint16(e)) return;
    const o = t.getUint16(e + 2);
    if (((e += 4), 1165519206 !== t.getUint32(e))) return;
    e += 6;
    const i = t.getUint16(e);
    if (18761 !== i && 19789 !== i) return;
    const n = 18761 === i;
    if (((e += 2), 42 !== t.getUint16(e, n))) return;
    e += t.getUint32(e + 2, n);
    const r = (i) => {
      const r = [];
      let a = e;
      const s = e + o - 16;
      for (; a < s; a += 12) {
        const e = a;
        t.getUint16(e, n) === i && r.push(e);
      }
      return r;
    };
    return {
      read: (e) => {
        const o = r(e);
        if (o.length) return t.getUint16(o[0] + 8, n);
      },
      write: (e, o) => {
        const i = r(e);
        return !!i.length && (i.forEach((e) => t.setUint16(e + 8, o, n)), !0);
      },
    };
  })(n, r.exif.offset);
  return a ? (void 0 === i ? a.read(o) : a.write(o, i)) : void 0;
};
var i = (t) =>
    window.__pqina_webapi__ ? window.__pqina_webapi__[t] : window[t],
  n = (...t) => {};
const r = { ArrayBuffer: "readAsArrayBuffer" };
var a = async (t, e = [0, t.size], o) =>
    await ((t, e = n, o = {}) =>
      new Promise((n, a) => {
        const { dataFormat: s = r.ArrayBuffer } = o,
          l = new (i("FileReader"))();
        (l.onload = () => n(l.result)),
          (l.onerror = a),
          (l.onprogress = e),
          l[s](t);
      }))(t.slice(...e), o),
  s = async (t, e) => {
    const i = await a(t, [0, 131072], e);
    return o(i, 274) || 1;
  };
let l = null;
var c = () => (
  null === l &&
    (l = "undefined" != typeof window && void 0 !== window.document),
  l
);
let d = null;
var u = () =>
    new Promise((t) => {
      if (null === d) {
        const e =
          "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wAALCAABAAIBASIA/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=";
        let o = c() ? new Image() : {};
        return (
          (o.onload = () => {
            (d = 1 === o.naturalWidth), (o = void 0), t(d);
          }),
          void (o.src = e)
        );
      }
      return t(d);
    }),
  p = (t) => t.getContext("2d").getImageData(0, 0, t.width, t.height),
  h = (t, e, o = []) => {
    const i = document.createElement(t),
      n = Object.getOwnPropertyDescriptors(i.__proto__);
    for (const t in e)
      "style" === t
        ? (i.style.cssText = e[t])
        : (n[t] && n[t].set) ||
          /textContent|innerHTML/.test(t) ||
          "function" == typeof e[t]
        ? (i[t] = e[t])
        : i.setAttribute(t, e[t]);
    return o.forEach((t) => i.appendChild(t)), i;
  };
const m = {
  1: () => [1, 0, 0, 1, 0, 0],
  2: (t) => [-1, 0, 0, 1, t, 0],
  3: (t, e) => [-1, 0, 0, -1, t, e],
  4: (t, e) => [1, 0, 0, -1, 0, e],
  5: () => [0, 1, 1, 0, 0, 0],
  6: (t, e) => [0, 1, -1, 0, e, 0],
  7: (t, e) => [0, -1, -1, 0, e, t],
  8: (t) => [0, -1, 1, 0, 0, t],
};
var g = (t) => {
    (t.width = 1), (t.height = 1);
    const e = t.getContext("2d");
    e && e.clearRect(0, 0, 1, 1);
  },
  f = (t) => "data" in t,
  $ = async (t, e = 1) => {
    const [o, i] =
        (await u()) || e < 5 ? [t.width, t.height] : [t.height, t.width],
      n = h("canvas", { width: o, height: i }),
      r = n.getContext("2d");
    if (f(t) && !(await u()) && e > 1) {
      const e = h("canvas", { width: t.width, height: t.height });
      e.getContext("2d").putImageData(t, 0, 0), (t = e);
    }
    return (
      !(await u()) &&
        e > 1 &&
        r.transform.apply(
          r,
          ((t, e, o = -1) => (-1 === o && (o = 1), m[o](t, e)))(
            t.width,
            t.height,
            e
          )
        ),
      f(t) ? r.putImageData(t, 0, 0) : r.drawImage(t, 0, 0),
      t instanceof HTMLCanvasElement && g(t),
      n
    );
  },
  y = async (t, e = 1) => (1 === e || (await u()) ? t : p(await $(t, e))),
  b = (t) => "object" == typeof t;
const x = (t) => (b(t) ? v(t) : t),
  v = (t) => {
    let e;
    return (
      Array.isArray(t)
        ? ((e = []),
          t.forEach((t, o) => {
            e[o] = x(t);
          }))
        : ((e = {}),
          Object.keys(t).forEach((o) => {
            const i = t[o];
            e[o] = x(i);
          })),
      e
    );
  };
var w = (t) => "string" == typeof t,
  S = (t) => "function" == typeof t,
  k = (t, e) =>
    new Promise((o, i) => {
      const n = () =>
        o(
          ((t, { width: e, height: o, canvasMemoryLimit: i }) => {
            let n = e || t.naturalWidth,
              r = o || t.naturalHeight;
            n || r || ((n = 300), (r = 150));
            const a = n * r;
            if (i && a > i) {
              const t = Math.sqrt(i) / Math.sqrt(a);
              (n = Math.floor(n * t)), (r = Math.floor(r * t));
            }
            const s = h("canvas");
            return (
              (s.width = n),
              (s.height = r),
              s.getContext("2d").drawImage(t, 0, 0, n, r),
              s
            );
          })(t, e)
        );
      t.complete && t.width ? n() : ((t.onload = n), (t.onerror = i));
    }),
  C = () => "createImageBitmap" in window,
  M = (t) => /svg/.test(t.type),
  T = () => Math.random().toString(36).substr(2, 9);
const P = new Map();
var R = (t, e, o) =>
    new Promise((i, n) => {
      const r = t.toString();
      let a = P.get(r);
      if (!a) {
        const e = ((t) =>
            `function () {self.onmessage = function (message) {(${t.toString()}).apply(null, message.data.content.concat([function (err, response) {\n    response = response || {};\n    const transfer = 'data' in response ? [response.data.buffer] : 'width' in response ? [response] : [];\n    return self.postMessage({ id: message.data.id, content: response, error: err }, transfer);\n}]))}}`)(
            t
          ),
          o = URL.createObjectURL(
            ((t) =>
              new Blob(
                ["(", "function" == typeof t ? t.toString() : t, ")()"],
                { type: "application/javascript" }
              ))(e)
          ),
          i = new Map(),
          n = new Worker(o);
        (a = {
          url: o,
          worker: n,
          messages: i,
          terminationTimeout: void 0,
          terminate: () => {
            clearTimeout(a.terminationTimeout),
              a.worker.terminate(),
              URL.revokeObjectURL(o),
              P.delete(r);
          },
        }),
          (n.onmessage = function (t) {
            const { id: e, content: o, error: n } = t.data;
            if (
              (clearTimeout(a.terminationTimeout),
              (a.terminationTimeout = setTimeout(() => {
                i.size > 0 || a.terminate();
              }, 500)),
              !i.has(e))
            )
              return;
            const r = i.get(e);
            i.delete(e), null != n ? r.reject(n) : r.resolve(o);
          }),
          P.set(r, a);
      }
      const s = T();
      a.messages.set(s, { resolve: i, reject: n }),
        a.worker.postMessage({ id: s, content: e }, o);
    }),
  A = async (t, e) => {
    let o;
    if (C() && !M(t) && "OffscreenCanvas" in window)
      try {
        o = await R(
          (t, e, o) => {
            createImageBitmap(t)
              .then((t) => {
                let i = t.width,
                  n = t.height;
                const r = i * n;
                if (e && r > e) {
                  const t = Math.sqrt(e) / Math.sqrt(r);
                  (i = Math.floor(i * t)), (n = Math.floor(n * t));
                }
                const a = new OffscreenCanvas(i, n),
                  s = a.getContext("2d");
                s.drawImage(t, 0, 0, i, n);
                const l = s.getImageData(0, 0, a.width, a.height);
                o(null, l);
              })
              .catch((t) => {
                o(t);
              });
          },
          [t, e]
        );
      } catch (t) {}
    if (!o || !o.width) {
      const i = await (async (t, e) => {
        const o = h("img", { src: URL.createObjectURL(t) }),
          i = await k(o, { canvasMemoryLimit: e });
        return URL.revokeObjectURL(o.src), i;
      })(t, e);
      (o = p(i)), g(i);
    }
    return o;
  },
  E = (t, e, o) =>
    new Promise((i, n) => {
      try {
        t.toBlob(
          (t) => {
            i(t);
          },
          e,
          o
        );
      } catch (t) {
        n(t);
      }
    }),
  I = async (t, e, o) => {
    const i = await $(t),
      n = await E(i, e, o);
    return g(i), n;
  },
  L = (t) => (t.match(/\/([a-z]+)/) || [])[1],
  F = (t) => t.substr(0, t.lastIndexOf(".")) || t;
const z = /avif|bmp|gif|jpg|jpeg|jpe|jif|jfif|png|svg|tiff|webp/;
var B = (t) => {
    return (
      t &&
      ((e = ((o = t), o.split(".").pop()).toLowerCase()),
      z.test(e)
        ? "image/" +
          (/jfif|jif|jpe|jpg/.test(e) ? "jpeg" : "svg" === e ? "svg+xml" : e)
        : "")
    );
    var e, o;
  },
  O = (t, e, o) => {
    const n = new Date().getTime(),
      r = t.type.length && !/null|text/.test(t.type),
      a = r ? t.type : o,
      s = ((t, e) => {
        const o = B(t);
        if (o === e) return t;
        const i = L(e) || o;
        return `${F(t)}.${i}`;
      })(e, a);
    try {
      return new (i("File"))([t], s, { lastModified: n, type: r ? t.type : a });
    } catch (e) {
      const o = r ? t.slice() : t.slice(0, t.size, a);
      return (o.lastModified = n), (o.name = s), o;
    }
  },
  D = (t, e) => t / e,
  W = (t) => t;
const _ = Math.PI,
  Z = Math.PI / 2,
  V = Z / 2;
var j = (t) => {
  const e = Math.abs(t) % Math.PI;
  return e > V && e < Math.PI - V;
};
const N = (t, e, o) => o + (t - o) * e,
  H = (t) => ({
    x: t.x + 0.5 * t.width,
    y: t.y + 0.5 * t.height,
    rx: 0.5 * t.width,
    ry: 0.5 * t.height,
  }),
  U = () => X(0, 0),
  X = (t, e) => ({ x: t, y: e }),
  Y = (t) => X(t.x, t.y),
  G = (t) => X(t.pageX, t.pageY),
  q = (t) => X(t.x, t.y),
  K = (t) => ((t.x = -t.x), (t.y = -t.y), t),
  J = (t, e, o = U()) => {
    const i = Math.cos(e),
      n = Math.sin(e),
      r = t.x - o.x,
      a = t.y - o.y;
    return (t.x = o.x + i * r - n * a), (t.y = o.y + n * r + i * a), t;
  },
  Q = (t) => Math.sqrt(t.x * t.x + t.y * t.y),
  tt = (t) => {
    const e = Math.sqrt(t.x * t.x + t.y * t.y);
    return 0 === e ? U() : ((t.x /= e), (t.y /= e), t);
  },
  et = (t, e) => Math.atan2(e.y - t.y, e.x - t.x),
  ot = (t, e) => t.x === e.x && t.y === e.y,
  it = (t, e) => ((t.x = e(t.x)), (t.y = e(t.y)), t),
  nt = (t, e) => ((t.x += e.x), (t.y += e.y), t),
  rt = (t, e) => ((t.x -= e.x), (t.y -= e.y), t),
  at = (t, e) => ((t.x *= e), (t.y *= e), t),
  st = (t, e) => t.x * e.x + t.y * e.y,
  lt = (t, e = U()) => {
    const o = t.x - e.x,
      i = t.y - e.y;
    return o * o + i * i;
  },
  ct = (t, e = U()) => Math.sqrt(lt(t, e)),
  dt = (t, e, o) => ((t.x = N(t.x, e, o.x)), (t.y = N(t.y, e, o.y)), t),
  ut = (t) => {
    let e = 0,
      o = 0;
    return (
      t.forEach((t) => {
        (e += t.x), (o += t.y);
      }),
      X(e / t.length, o / t.length)
    );
  },
  pt = (t, e, o, i, n) => (
    t.forEach((t) => {
      (t.x = e ? i - (t.x - i) : t.x), (t.y = o ? n - (t.y - n) : t.y);
    }),
    t
  ),
  ht = (t, e, o, i) => {
    const n = Math.sin(e),
      r = Math.cos(e);
    return (
      t.forEach((t) => {
        (t.x -= o), (t.y -= i);
        const e = t.x * r - t.y * n,
          a = t.x * n + t.y * r;
        (t.x = o + e), (t.y = i + a);
      }),
      t
    );
  },
  mt = (t, e) => ({ width: t, height: e }),
  gt = (t) => mt(t.width, t.height),
  ft = (t) => mt(t.width, t.height),
  $t = (t) => mt(t.width, t.height),
  yt = (t) => mt(t[0], t[1]),
  bt = (t) => {
    return /img/i.test(t.nodeName)
      ? mt((e = t).naturalWidth, e.naturalHeight)
      : ft(t);
    var e;
  },
  xt = (t, e) => mt(t, e),
  vt = (t, e, o = W) =>
    o(t.width) === o(e.width) && o(t.height) === o(e.height),
  wt = (t, e) => ((t.width *= e), (t.height *= e), t),
  St = (t) => X(0.5 * t.width, 0.5 * t.height),
  kt = (t, e) => {
    const o = Math.abs(e),
      i = Math.cos(o),
      n = Math.sin(o),
      r = i * t.width + n * t.height,
      a = n * t.width + i * t.height;
    return (t.width = r), (t.height = a), t;
  },
  Ct = (t, e) => t.width >= e.width && t.height >= e.height,
  Mt = (t, e) => ((t.width = e(t.width)), (t.height = e(t.height)), t),
  Tt = (t, e) => ({ start: t, end: e }),
  Pt = (t) => Tt(q(t.start), q(t.end)),
  Rt = (t, e) => {
    if (0 === e) return t;
    const o = X(t.start.x - t.end.x, t.start.y - t.end.y),
      i = tt(o),
      n = at(i, e);
    return (
      (t.start.x += n.x),
      (t.start.y += n.y),
      (t.end.x -= n.x),
      (t.end.y -= n.y),
      t
    );
  },
  At = [X(-1, -1), X(-1, 1), X(1, 1), X(1, -1)],
  Et = (t, e, o, i) => ({ x: t, y: e, width: o, height: i }),
  It = (t) => Et(t.x, t.y, t.width, t.height),
  Lt = () => Et(0, 0, 0, 0),
  Ft = (t) => Et(0, 0, t.width, t.height),
  zt = (t) => Et(t.x || 0, t.y || 0, t.width || 0, t.height || 0),
  Bt = (t) => {
    let e = t[0].x,
      o = t[0].x,
      i = t[0].y,
      n = t[0].y;
    return (
      t.forEach((t) => {
        (e = Math.min(e, t.x)),
          (o = Math.max(o, t.x)),
          (i = Math.min(i, t.y)),
          (n = Math.max(n, t.y));
      }),
      Et(e, i, o - e, n - i)
    );
  },
  Ot = (t) => Wt(t.x - t.rx, t.y - t.ry, 2 * t.rx, 2 * t.ry),
  Dt = (t, e) =>
    Et(t.x - 0.5 * e.width, t.y - 0.5 * e.height, e.width, e.height),
  Wt = (t, e, o, i) => Et(t, e, o, i),
  _t = (t) => X(t.x + 0.5 * t.width, t.y + 0.5 * t.height),
  Zt = (t, e) => ((t.x += e.x), (t.y += e.y), t),
  Vt = (t, e, o) => (
    (o = o || _t(t)),
    (t.x = e * (t.x - o.x) + o.x),
    (t.y = e * (t.y - o.y) + o.y),
    (t.width = e * t.width),
    (t.height = e * t.height),
    t
  ),
  jt = (t, e) => ((t.x *= e), (t.y *= e), (t.width *= e), (t.height *= e), t),
  Nt = (t, e) => ((t.x /= e), (t.y /= e), (t.width /= e), (t.height /= e), t),
  Ht = (t, e, o = W) =>
    o(t.x) === o(e.x) &&
    o(t.y) === o(e.y) &&
    o(t.width) === o(e.width) &&
    o(t.height) === o(e.height),
  Ut = (t) => D(t.width, t.height),
  Xt = (t, e, o, i, n) => (
    (t.x = e), (t.y = o), (t.width = i), (t.height = n), t
  ),
  Yt = (t, e) => (
    (t.x = e.x), (t.y = e.y), (t.width = e.width), (t.height = e.height), t
  ),
  Gt = (t, e, o) => (o || (o = _t(t)), ee(t).map((t) => J(t, e, o))),
  qt = (t, e) =>
    Et(
      0.5 * t.width - 0.5 * e.width,
      0.5 * t.height - 0.5 * e.height,
      e.width,
      e.height
    ),
  Kt = (t, e) =>
    !(e.x < t.x) &&
    !(e.y < t.y) &&
    !(e.x > t.x + t.width) &&
    !(e.y > t.y + t.height),
  Jt = (t, e, o = U()) => {
    if (0 === t.width || 0 === t.height) return Lt();
    const i = Ut(t);
    e || (e = i);
    let n = t.width,
      r = t.height;
    return (
      e > i ? (n = r * e) : (r = n / e),
      Et(o.x + 0.5 * (t.width - n), o.y + 0.5 * (t.height - r), n, r)
    );
  },
  Qt = (t, e = Ut(t), o = U()) => {
    if (0 === t.width || 0 === t.height) return Lt();
    let i = t.width,
      n = i / e;
    return (
      n > t.height && ((n = t.height), (i = n * e)),
      Et(o.x + 0.5 * (t.width - i), o.y + 0.5 * (t.height - n), i, n)
    );
  },
  te = (t) => [
    Math.min(t.y, t.y + t.height),
    Math.max(t.x, t.x + t.width),
    Math.max(t.y, t.y + t.height),
    Math.min(t.x, t.x + t.width),
  ],
  ee = (t) => [
    X(t.x, t.y),
    X(t.x + t.width, t.y),
    X(t.x + t.width, t.y + t.height),
    X(t.x, t.y + t.height),
  ],
  oe = (t, e) => {
    if (t)
      return (
        (t.x = e(t.x)),
        (t.y = e(t.y)),
        (t.width = e(t.width)),
        (t.height = e(t.height)),
        t
      );
  },
  ie = (t, e, o = _t(t)) =>
    ee(t).map((t, i) => {
      const n = At[i];
      return X(N(t.x, 1 + n.x * e.x, o.x), N(t.y, 1 + n.y * e.y, o.y));
    }),
  ne = (t) => ((t.x = 0), (t.y = 0), t),
  re = (t) => {
    const e = t[0],
      o = t[t.length - 1];
    t = ot(e, o) ? t : [...t, e];
    const i = e.x,
      n = e.y;
    let r,
      a,
      s,
      l = 0,
      c = 0,
      d = 0,
      u = 0;
    const p = t.length;
    for (; c < p; c++)
      (r = t[c]),
        (a = t[c + 1 > p - 1 ? 0 : c + 1]),
        (s = (r.y - n) * (a.x - i) - (a.y - n) * (r.x - i)),
        (l += s),
        (d += (r.x + a.x - 2 * i) * s),
        (u += (r.y + a.y - 2 * n) * s);
    return (s = 3 * l), X(i + d / s, n + u / s);
  },
  ae = (t, e) => se(t.start, t.end, e.start, e.end),
  se = (t, e, o, i) => {
    const n = (i.y - o.y) * (e.x - t.x) - (i.x - o.x) * (e.y - t.y);
    if (0 === n) return;
    const r = ((i.x - o.x) * (t.y - o.y) - (i.y - o.y) * (t.x - o.x)) / n,
      a = ((e.x - t.x) * (t.y - o.y) - (e.y - t.y) * (t.x - o.x)) / n;
    return r < 0 || r > 1 || a < 0 || a > 1
      ? void 0
      : X(t.x + r * (e.x - t.x), t.y + r * (e.y - t.y));
  },
  le = (t, e) => {
    let o = 0,
      i = 0,
      n = !1;
    const r = e.length;
    for (o = 0, i = r - 1; o < r; i = o++)
      e[o].y > t.y != e[i].y > t.y &&
        t.x <
          ((e[i].x - e[o].x) * (t.y - e[o].y)) / (e[i].y - e[o].y) + e[o].x &&
        (n = !n);
    return n;
  },
  ce = (t) => {
    const e = [];
    for (let o = 0; o < t.length; o++) {
      let i = o + 1;
      i === t.length && (i = 0), e.push(Tt(q(t[o]), q(t[i])));
    }
    return e;
  },
  de = (t, e, o, i = 0, n = !1, r = !1, a = 12) => {
    const s = [];
    for (let i = 0; i < a; i++)
      s.push(
        X(
          t.x + e * Math.cos((i * (2 * Math.PI)) / a),
          t.y + o * Math.sin((i * (2 * Math.PI)) / a)
        )
      );
    return (n || r) && pt(s, n, r, t.x, t.y), i && ht(s, i, t.x, t.y), s;
  };
var ue = (t, e) =>
    t instanceof HTMLElement &&
    (!e || new RegExp(`^${e}$`, "i").test(t.nodeName)),
  pe = (t) => t instanceof File,
  he = (t) => t.split("/").pop().split(/\?|\#/).shift();
const me =
    c() && !!Node.prototype.replaceChildren
      ? (t, e) => t.replaceChildren(e)
      : (t, e) => {
          for (; t.lastChild; ) t.removeChild(t.lastChild);
          void 0 !== e && t.append(e);
        },
  ge =
    c() &&
    h("div", {
      class: "PinturaMeasure",
      style:
        "pointer-events:none;left:0;top:0;width:0;height:0;contain:strict;overflow:hidden;position:absolute;",
    });
let fe;
var $e = (t) => (
  me(ge, t),
  ge.parentNode || document.body.append(ge),
  clearTimeout(fe),
  (fe = setTimeout(() => {
    ge.remove();
  }, 500)),
  t
);
let ye = null;
var be = () => (
    null === ye &&
      (ye =
        c() &&
        /^((?!chrome|android).)*(safari|iphone|ipad)/i.test(
          navigator.userAgent
        )),
    ye
  ),
  xe = (t) =>
    new Promise((e, o) => {
      let i = !1;
      !t.parentNode &&
        be() &&
        ((i = !0),
        (t.style.cssText =
          "position:absolute;visibility:hidden;pointer-events:none;left:0;top:0;width:0;height:0;"),
        $e(t));
      const n = () => {
        const o = t.naturalWidth,
          n = t.naturalHeight;
        o &&
          n &&
          (i && t.remove(), clearInterval(r), e({ width: o, height: n }));
      };
      t.onerror = (t) => {
        clearInterval(r), o(t);
      };
      const r = setInterval(n, 1);
      n();
    }),
  ve = async (t) => {
    let e,
      o = t;
    o.src || ((o = new Image()), (o.src = w(t) ? t : URL.createObjectURL(t)));
    try {
      e = await xe(o);
    } finally {
      pe(t) && URL.revokeObjectURL(o.src);
    }
    return e;
  };
var we = async (t) => {
    try {
      const e = await ve(t),
        o = await ((t) =>
          new Promise((e, o) => {
            if (t.complete) return e(t);
            (t.onload = () => e(t)), (t.onerror = o);
          }))(t),
        i = document.createElement("canvas");
      (i.width = e.width), (i.height = e.height);
      i.getContext("2d").drawImage(o, 0, 0);
      const n = await E(i);
      return O(n, he(o.src));
    } catch (t) {
      throw t;
    }
  },
  Se = (t = 0, e = !0) =>
    new (i("ProgressEvent"))("progress", {
      loaded: 100 * t,
      total: 100,
      lengthComputable: e,
    }),
  ke = (t) => /^image/.test(t.type),
  Ce = (t, e, o = (t) => t) =>
    t.getAllResponseHeaders().indexOf(e) >= 0
      ? o(t.getResponseHeader(e))
      : void 0,
  Me = (t) => {
    if (!t) return null;
    const e = t
      .split(/filename=|filename\*=.+''/)
      .splice(1)
      .map((t) => t.trim().replace(/^["']|[;"']{0,2}$/g, ""))
      .filter((t) => t.length);
    return e.length ? decodeURI(e[e.length - 1]) : null;
  };
const Te = "URL_REQUEST";
class Pe extends Error {
  constructor(t, e, o) {
    super(t), (this.name = "EditorError"), (this.code = e), (this.metadata = o);
  }
}
var Re = (t, e) =>
    /^data:/.test(t)
      ? (async (t, e = "data-uri", o = n) => {
          o(Se(0));
          const i = await fetch(t);
          o(Se(0.33));
          const r = await i.blob();
          let a;
          ke(r) || (a = "image/" + (t.includes(",/9j/") ? "jpeg" : "png")),
            o(Se(0.66));
          const s = O(r, e, a);
          return o(Se(1)), s;
        })(t, void 0, e)
      : ((t, e) =>
          new Promise((o, i) => {
            const n = () => i(new Pe("Error fetching image", Te, r)),
              r = new XMLHttpRequest();
            (r.onprogress = e),
              (r.onerror = n),
              (r.onload = () => {
                if (!r.response || r.status >= 300 || r.status < 200)
                  return n();
                const e = Ce(r, "Content-Type"),
                  i = Ce(r, "Content-Disposition", Me) || he(t);
                o(O(r.response, i, e || B(i)));
              }),
              r.open("GET", t),
              (r.responseType = "blob"),
              r.send();
          }))(t, e),
  Ae = async (t, e) => {
    if (pe(t) || ((o = t) instanceof Blob && !(o instanceof File))) return t;
    if (w(t)) return await Re(t, e);
    if (ue(t, "canvas"))
      return await (async (t, e, o) => {
        const i = await E(t, e, o);
        return O(i, "canvas");
      })(t);
    if (ue(t, "img")) return await we(t);
    throw new Pe("Invalid image source", "invalid-image-source");
    var o;
  };
let Ee = null;
var Ie = () => (
    null === Ee && (Ee = c() && /^mac/i.test(navigator.platform)), Ee
  ),
  Le = (t) => (c() ? RegExp(t).test(window.navigator.userAgent) : void 0);
let Fe = null;
var ze = () => (
    null === Fe &&
      (Fe =
        c() &&
        (Le(/iPhone|iPad|iPod/) || (Ie() && navigator.maxTouchPoints >= 1))),
    Fe
  ),
  Be = async (t, e = 1) =>
    (await u()) || ze() || e < 5 ? t : xt(t.height, t.width),
  Oe = (t) => /jpeg/.test(t.type),
  De = (t) => {
    return "object" != typeof (e = t) || e.constructor != Object
      ? t
      : JSON.stringify(t);
    var e;
  },
  We = (t, e = 0, o) => (
    0 === e || (t.translate(o.x, o.y), t.rotate(e), t.translate(-o.x, -o.y)), t
  ),
  _e = async (t, e = {}) => {
    const { flipX: o, flipY: i, rotation: n, crop: r } = e,
      a = ft(t),
      s = o || i,
      l = !!n,
      c = r && (r.x || r.y || r.width || r.height),
      d = c && Ht(r, Ft(a)),
      u = c && !d;
    if (!s && !l && !u) return t;
    let p,
      m = h("canvas", { width: t.width, height: t.height });
    if ((m.getContext("2d").putImageData(t, 0, 0), s)) {
      const t = h("canvas", { width: m.width, height: m.height }).getContext(
        "2d"
      );
      ((t, e, o) => {
        t.scale(e, o);
      })(t, o ? -1 : 1, i ? -1 : 1),
        t.drawImage(m, o ? -m.width : 0, i ? -m.height : 0),
        t.restore(),
        g(m),
        (m = t.canvas);
    }
    if (l) {
      const t = Mt($t(Bt(Gt(zt(m), n))), Math.floor),
        e = h("canvas", { width: r.width, height: r.height }).getContext("2d");
      ((t, e, o) => {
        t.translate(e, o);
      })(e, -r.x, -r.y),
        We(e, n, St(t)),
        e.drawImage(m, 0.5 * (t.width - m.width), 0.5 * (t.height - m.height)),
        e.restore(),
        g(m),
        (m = e.canvas);
    } else if (u) {
      return (
        (p = m.getContext("2d").getImageData(r.x, r.y, r.width, r.height)),
        g(m),
        p
      );
    }
    return (
      (p = m.getContext("2d").getImageData(0, 0, m.width, m.height)), g(m), p
    );
  },
  Ze = (t, e) => {
    const { imageData: o, width: i, height: n } = t,
      r = o.width,
      a = o.height,
      s = Math.round(i),
      l = Math.round(n),
      c = o.data,
      d = new Uint8ClampedArray(s * l * 4),
      u = r / s,
      p = a / l,
      h = Math.ceil(0.5 * u),
      m = Math.ceil(0.5 * p);
    for (let t = 0; t < l; t++)
      for (let e = 0; e < s; e++) {
        const o = 4 * (e + t * s);
        let i = 0,
          n = 0,
          a = 0,
          l = 0,
          g = 0,
          f = 0,
          $ = 0;
        const y = (t + 0.5) * p;
        for (let o = Math.floor(t * p); o < (t + 1) * p; o++) {
          const t = Math.abs(y - (o + 0.5)) / m,
            s = (e + 0.5) * u,
            d = t * t;
          for (let t = Math.floor(e * u); t < (e + 1) * u; t++) {
            let e = Math.abs(s - (t + 0.5)) / h;
            const u = Math.sqrt(d + e * e);
            if (u < -1 || u > 1) continue;
            if (((i = 2 * u * u * u - 3 * u * u + 1), i <= 0)) continue;
            e = 4 * (t + o * r);
            const p = c[e + 3];
            ($ += i * p),
              (a += i),
              p < 255 && (i = (i * p) / 250),
              (l += i * c[e]),
              (g += i * c[e + 1]),
              (f += i * c[e + 2]),
              (n += i);
          }
        }
        (d[o] = l / n),
          (d[o + 1] = g / n),
          (d[o + 2] = f / n),
          (d[o + 3] = $ / a);
      }
    e(null, { data: d, width: s, height: l });
  },
  Ve = (t) => {
    if (t instanceof ImageData) return t;
    let e;
    try {
      e = new ImageData(t.width, t.height);
    } catch (o) {
      e = h("canvas").getContext("2d").createImageData(t.width, t.height);
    }
    return e.data.set(t.data), e;
  },
  je = async (t, e = {}, o) => {
    const { width: i, height: n, fit: r, upscale: a } = e;
    if (!i && !n) return t;
    let s = i,
      l = n;
    if ((i ? n || (l = i) : (s = n), "force" !== r)) {
      const e = s / t.width,
        o = l / t.height;
      let i = 1;
      if (
        ("cover" === r
          ? (i = Math.max(e, o))
          : "contain" === r && (i = Math.min(e, o)),
        i > 1 && !1 === a)
      )
        return t;
      (s = Math.round(t.width * i)), (l = Math.round(t.height * i));
    }
    return (
      (s = Math.max(s, 1)),
      (l = Math.max(l, 1)),
      t.width === s && t.height === l
        ? t
        : o
        ? o(t, s, l)
        : ((t = await R(
            Ze,
            [{ imageData: t, width: s, height: l }],
            [t.data.buffer]
          )),
          Ve(t))
    );
  },
  Ne = (t, e) => {
    const { imageData: o, matrix: i } = t;
    if (!i) return e(null, o);
    const n = new Uint8ClampedArray(o.width * o.height * 4),
      r = o.data,
      a = r.length,
      s = i[0],
      l = i[1],
      c = i[2],
      d = i[3],
      u = i[4],
      p = i[5],
      h = i[6],
      m = i[7],
      g = i[8],
      f = i[9],
      $ = i[10],
      y = i[11],
      b = i[12],
      x = i[13],
      v = i[14],
      w = i[15],
      S = i[16],
      k = i[17],
      C = i[18],
      M = i[19];
    let T = 0,
      P = 0,
      R = 0,
      A = 0,
      E = 0,
      I = 0,
      L = 0,
      F = 0,
      z = 0,
      B = 0,
      O = 0,
      D = 0;
    for (; T < a; T += 4)
      (P = r[T] / 255),
        (R = r[T + 1] / 255),
        (A = r[T + 2] / 255),
        (E = r[T + 3] / 255),
        (I = P * s + R * l + A * c + E * d + u),
        (L = P * p + R * h + A * m + E * g + f),
        (F = P * $ + R * y + A * b + E * x + v),
        (z = P * w + R * S + A * k + E * C + M),
        (B = Math.max(0, I * z) + (1 - z)),
        (O = Math.max(0, L * z) + (1 - z)),
        (D = Math.max(0, F * z) + (1 - z)),
        (n[T] = 255 * Math.max(0, Math.min(1, B))),
        (n[T + 1] = 255 * Math.max(0, Math.min(1, O))),
        (n[T + 2] = 255 * Math.max(0, Math.min(1, D))),
        (n[T + 3] = 255 * E);
    e(null, { data: n, width: o.width, height: o.height });
  },
  He = (t, e) => {
    const { imageData: o, matrix: i } = t;
    if (!i) return e(null, o);
    let n = i.reduce((t, e) => t + e);
    n = n <= 0 ? 1 : n;
    const r = o.width,
      a = o.height,
      s = o.data;
    let l = 0,
      c = 0,
      d = 0;
    const u = Math.round(Math.sqrt(i.length)),
      p = Math.floor(u / 2);
    let h = 0,
      m = 0,
      g = 0,
      f = 0,
      $ = 0,
      y = 0,
      b = 0,
      x = 0,
      v = 0,
      w = 0;
    const S = new Uint8ClampedArray(r * a * 4);
    for (d = 0; d < a; d++)
      for (c = 0; c < r; c++) {
        for (h = 0, m = 0, g = 0, f = 0, y = 0; y < u; y++)
          for ($ = 0; $ < u; $++)
            (b = d + y - p),
              (x = c + $ - p),
              b < 0 && (b = a - 1),
              b >= a && (b = 0),
              x < 0 && (x = r - 1),
              x >= r && (x = 0),
              (v = 4 * (b * r + x)),
              (w = i[y * u + $]),
              (h += s[v] * w),
              (m += s[v + 1] * w),
              (g += s[v + 2] * w),
              (f += s[v + 3] * w);
        (S[l] = h / n),
          (S[l + 1] = m / n),
          (S[l + 2] = g / n),
          (S[l + 3] = f / n),
          (l += 4);
      }
    e(null, { data: S, width: r, height: a });
  },
  Ue = (t, e) => {
    let { imageData: o, strength: i } = t;
    if (!i) return e(null, o);
    const n = new Uint8ClampedArray(o.width * o.height * 4),
      r = o.width,
      a = o.height,
      s = o.data,
      l = (t, e) => ((c = t - w), (d = e - S), Math.sqrt(c * c + d * d));
    let c,
      d,
      u,
      p,
      h,
      m,
      g,
      f,
      $,
      y,
      b,
      x = 0,
      v = 0,
      w = 0.5 * r,
      S = 0.5 * a,
      k = l(0, 0);
    for (
      i > 0
        ? ((u = 0), (p = 0), (h = 0))
        : ((i = Math.abs(i)), (u = 1), (p = 1), (h = 1)),
        v = 0;
      v < a;
      v++
    )
      for (x = 0; x < r; x++)
        (C = 4 * (x + v * r)),
          (M = s),
          (T = n),
          (P = (l(x, v) * i) / k),
          (m = M[C] / 255),
          (g = M[C + 1] / 255),
          (f = M[C + 2] / 255),
          ($ = M[C + 3] / 255),
          (y = 1 - P),
          (b = y * $ + P),
          (T[C] = ((y * $ * m + P * u) / b) * 255),
          (T[C + 1] = ((y * $ * g + P * p) / b) * 255),
          (T[C + 2] = ((y * $ * f + P * h) / b) * 255),
          (T[C + 3] = 255 * b);
    var C, M, T, P;
    e(null, { data: n, width: o.width, height: o.height });
  },
  Xe = (t, e) => {
    const { imageData: o, level: i, monochrome: n = !1 } = t;
    if (!i) return e(null, o);
    const r = new Uint8ClampedArray(o.width * o.height * 4),
      a = o.data,
      s = a.length;
    let l,
      c,
      d,
      u = 0;
    const p = () => 255 * (2 * Math.random() - 1) * i,
      h = n
        ? () => {
            const t = p();
            return [t, t, t];
          }
        : () => [p(), p(), p()];
    for (; u < s; u += 4)
      ([l, c, d] = h()),
        (r[u] = a[u] + l),
        (r[u + 1] = a[u + 1] + c),
        (r[u + 2] = a[u + 2] + d),
        (r[u + 3] = a[u + 3]);
    e(null, { data: r, width: o.width, height: o.height });
  },
  Ye = (t, e) => {
    const { imageData: o, level: i } = t;
    if (!i) return e(null, o);
    const n = new Uint8ClampedArray(o.width * o.height * 4),
      r = o.data,
      a = r.length;
    let s,
      l,
      c,
      d = 0;
    for (; d < a; d += 4)
      (s = r[d] / 255),
        (l = r[d + 1] / 255),
        (c = r[d + 2] / 255),
        (n[d] = 255 * Math.pow(s, i)),
        (n[d + 1] = 255 * Math.pow(l, i)),
        (n[d + 2] = 255 * Math.pow(c, i)),
        (n[d + 3] = r[d + 3]);
    e(null, { data: n, width: o.width, height: o.height });
  },
  Ge = async (t, e = {}) => {
    const {
        colorMatrix: o,
        convolutionMatrix: i,
        gamma: n,
        noise: r,
        vignette: a,
      } = e,
      s = [];
    if (
      (i && s.push([He, { matrix: i.clarity }]),
      n > 0 && s.push([Ye, { level: 1 / n }]),
      o &&
        !((t) => {
          const e = t.length;
          let o;
          const i = e >= 20 ? 6 : e >= 16 ? 5 : 3;
          for (let n = 0; n < e; n++) {
            if (((o = t[n]), 1 === o && n % i != 0)) return !1;
            if (0 !== o && 1 !== o) return !1;
          }
          return !0;
        })(o) &&
        s.push([Ne, { matrix: o }]),
      (r > 0 || r < 0) && s.push([Xe, { level: r }]),
      (a > 0 || a < 0) && s.push([Ue, { strength: a }]),
      !s.length)
    )
      return t;
    const l = (t, e) =>
        `(err, imageData) => {\n            (${t[
          e
        ][0].toString()})(Object.assign({ imageData: imageData }, filterInstructions[${e}]), \n                ${
          t[e + 1] ? l(t, e + 1) : "done"
        })\n        }`,
      c = `function (options, done) {\n        const filterInstructions = options.filterInstructions;\n        const imageData = options.imageData;\n        (${l(
        s,
        0
      )})(null, imageData)\n    }`;
    return (
      (t = await R(
        c,
        [{ imageData: t, filterInstructions: s.map((t) => t[1]) }],
        [t.data.buffer]
      )),
      Ve(t)
    );
  },
  qe = (t) => "number" == typeof t,
  Ke = (t) =>
    w(t) &&
    null !==
      t.match(
        /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g
      ),
  Je = (t, e) => t.hasOwnProperty(e),
  Qe = (t) => Array.isArray(t);
let to = 64,
  eo = 102,
  oo = 112,
  io = !1;
var no = (t, e) => (
    !io &&
      c() &&
      (/^win/i.test(navigator.platform) && (eo = 103),
      (ze() || Ie()) && ((to = 63.5), (eo = 110), (oo = 123)),
      (io = !0)),
    `<svg${
      e ? ` aria-label="${e}"` : ""
    } width="128" height="128" viewBox="0 0 128 128" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg"><text x="${to}" y="${eo}" alignment-baseline="text-top" dominant-baseline="text-top" text-anchor="middle" font-size="${oo}px">${t}</text></svg>`
  ),
  ro = (t) => t instanceof Blob,
  ao = (t, e) => (t / e) * 100 + "%",
  so = (t) =>
    `rgba(${Math.round(255 * t[0])}, ${Math.round(255 * t[1])}, ${Math.round(
      255 * t[2]
    )}, ${qe(t[3]) ? t[3] : 1})`,
  lo = (t) => Object.values(t).join("_");
const co = async (t, e = 0) => {
    const o = h("canvas", { width: 80, height: 80 }).getContext("2d");
    return (
      await ((t = 0) =>
        new Promise((e) => {
          setTimeout(e, t);
        }))(e),
      o.drawImage(t, 0, 0, 80, 80),
      !(
        ((t) =>
          !new Uint32Array(
            t.getImageData(0, 0, t.canvas.width, t.canvas.height).data.buffer
          ).some((t) => 0 !== t))(o) && e <= 256
      ) || (await co(t, e + 16))
    );
  },
  uo = new Map();
var po = (t) =>
    new Promise((e, o) => {
      const i = new FileReader();
      (i.onerror = o), (i.onload = () => e(i.result)), i.readAsDataURL(t);
    }),
  ho = () => {
    let t = [];
    return {
      sub: (e, o) => (
        t.push({ event: e, callback: o }),
        () => (t = t.filter((t) => t.event !== e || t.callback !== o))
      ),
      pub: (e, o) => {
        t.filter((t) => t.event === e).forEach((t) => t.callback(o));
      },
    };
  };
const mo = 32,
  go = ({
    color: t = [0, 0, 0],
    fontSize: e = 16,
    fontFamily: o = "sans-serif",
    fontVariant: i = "normal",
    fontWeight: n = "normal",
    fontStyle: r = "normal",
    textAlign: a = "left",
    lineHeight: s = 20,
  }) =>
    `font-size:${e}px;font-style:${r};font-weight:${n};font-family:${o};font-variant:${i};line-height:${s}px;text-align:${a};color:${so(
      t
    )};`,
  fo = (t) => {
    const { width: e, height: o } = t,
      i = !e,
      n = i ? "normal" : "break-word",
      r = i ? "nowrap" : "pre-line";
    return `max-width:none;min-width:auto;width:${
      i ? "auto" : e + "px"
    };height:${
      o ? o + "px" : "auto"
    };margin-top:0;margin-bottom:0;padding-top:${(({
      fontSize: t = 16,
      lineHeight: e = 20,
    } = {}) => 0.5 * Math.max(0, t - e))(
      t
    )}px;word-break:${n};word-wrap:normal;white-space:${r};overflow:visible;`;
  },
  $o = new Map(),
  yo = new Map(),
  bo = (t = "", e) => {
    const { width: o = 0, height: i = 0 } = e;
    if (o && i) return xt(o, i);
    const {
        fontSize: n,
        fontFamily: r,
        lineHeight: a,
        fontWeight: s,
        fontStyle: l,
        fontVariant: c,
      } = e,
      d = lo({
        text: t,
        fontFamily: r,
        fontWeight: s,
        fontStyle: l,
        fontVariant: c,
        fontSize: n,
        lineHeight: a,
        width: o,
      });
    let u = yo.get(d);
    if (u) return u;
    const p = $e(
      h(
        "pre",
        {
          contenteditable: "true",
          spellcheck: "false",
          style: `pointer-events:none;visibility:hidden;position:absolute;${go(
            e
          )};${fo(e)}"`,
          innerHTML: t,
        },
        [h("span")]
      )
    ).getBoundingClientRect();
    return (u = ft(p)), (u.height += Math.max(0, n - a)), yo.set(d, u), u;
  },
  xo = new Map(),
  vo = (t) =>
    new Promise((e, o) => {
      let i = xo.get(t);
      i ||
        ((i = ((t) => {
          const { sub: e, pub: o } = ho();
          let i, n;
          return (
            fetch(t)
              .then((t) => t.text())
              .then((t) => {
                (i = t), o("load", i);
              })
              .catch((t) => {
                (n = t), o("error", n);
              }),
            {
              sub: (t, o) =>
                "load" === t && i
                  ? o(i)
                  : "error" === t && n
                  ? o(n)
                  : void e(t, o),
            }
          );
        })(t)),
        xo.set(t, i)),
        i.sub("load", e),
        i.sub("error", o);
    }),
  wo = new Map(),
  So = (t) => t.filter((t) => t instanceof CSSFontFaceRule),
  ko = async (t, e = () => !0) => {
    if (wo.has(t.href)) return wo.get(t.href);
    let o;
    try {
      o = So(Array.from(t.cssRules));
    } catch (i) {
      const n = t.href;
      if (!e(n)) return wo.set(n, []), [];
      (o = So(
        await (async (t) => {
          let e;
          try {
            e = await vo(t);
          } catch (t) {
            return [];
          }
          const o = h("style", { innerHTML: e, id: T() });
          document.head.append(o);
          const i = Array.from(document.styleSheets).find(
            (t) => t.ownerNode.id === o.id
          );
          return o.remove(), Array.from(i.cssRules);
        })(n)
      )),
        wo.set(n, o);
    }
    return o;
  },
  Co = (t, e) => t.style.getPropertyValue(e),
  Mo = (t, e) => Co(t, "font-family").replace(/^"|"$/g, "") == e,
  To = async (t, e) => {
    const o = ((t, e) => {
      const o = [];
      for (const i of t) Mo(i, e) && o.push(i);
      return o;
    })(
      await (async (t) => {
        const e = Array.from(document.styleSheets).map((e) => ko(e, t)),
          o = await Promise.all(e),
          i = [];
        return o.forEach((t) => i.push(...t)), i;
      })(e),
      t
    );
    return o.length
      ? o.map((t) => {
          const e = t.parentStyleSheet.href && new URL(t.parentStyleSheet.href),
            o = e
              ? e.origin +
                ((t) => t.pathname.split("/").slice(0, -1).join("/"))(e) +
                "/"
              : "",
            i = t.style.getPropertyValue("src").match(/url\("?(.*?)"?\)/)[1],
            n = Array.from(t.style)
              .filter((t) => "src" != t)
              .reduce((e, o) => (e += o + ":" + Co(t, o) + ";"), "");
          return [/^http/.test(i) ? i : o + i, n];
        })
      : [];
  },
  Po = new Map(),
  Ro = new Map();
var Ao = async (t = "", e) => {
    if (!t.length) return;
    const {
        imageWidth: o = 300,
        imageHeight: i = 150,
        paddingLeft: n = mo,
        paddingRight: r = mo,
        fontFamily: a,
        pixelRatio: s = 1,
        willRequestResource: l,
      } = e,
      c = (o + n + r) * s,
      d = i * s,
      u = go(e),
      p = fo(e),
      h = await (async (t, e) => {
        if (Po.get(t)) return;
        let o = Ro.get(t);
        if (!o) {
          const n = await To(t, e);
          if (!n.length) return void Po.set(t, !0);
          const r = [];
          for (const [t, e] of n) {
            const o = await fetch(t).then((t) => t.blob()),
              n =
                !(i = o.type) || /woff2/.test(i)
                  ? "woff2"
                  : /woff/.test(i)
                  ? "woff"
                  : /ttf|truetype/.test(i)
                  ? "truetype"
                  : /otf|opentype/.test(i)
                  ? "opentype"
                  : /svg/.test(i)
                  ? "svg"
                  : "woff2",
              a = await po(o);
            r.push(
              `@font-face { src:url(${a}) format('${n}');${e};font-display:block; }`
            );
          }
          (o = r.join("")), Ro.set(t, o);
        }
        var i;
        return o;
      })(a, l);
    return ((t, { safariCacheKey: e = "*" } = {}) =>
      new Promise((o, i) => {
        const n = new Image();
        (n.onerror = i),
          (n.onload = () => {
            if (!be() || !t.includes("@font-face") || uo.has(e)) return o(n);
            co(n).then(() => {
              uo.set(e, !0), o(n);
            });
          }),
          (n.src = "data:image/svg+xml," + t);
      }))(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${c}" height="${d}" viewBox="0 0 ${c} ${d}"><foreignObject x="0" y="0" width="${c}" height="${d}"><div xmlns="http://www.w3.org/1999/xhtml" style="transform-origin:0 0;transform:scale(${s})">${
        h ? `<style>${h}</style>` : ""
      }<pre contenteditable="true" spellcheck="false" style="position:absolute;padding-right:${r}px;padding-left:${n}px;${u};${p}">${t
        .replace(/&/g, "&amp;")
        .replace(/#/g, "%23")
        .replace(/<br>/g, "<br/>")
        .replace(/\n/g, "<br/>")}</pre></div></foreignObject></svg>`,
      { safariCacheKey: a }
    );
  },
  Eo = (t, e = 12) => parseFloat(t.toFixed(e));
const Io = (t) => {
    const e = { ...t };
    return v(e);
  },
  Lo = (t, e = {}) => {
    const o = Ut(t);
    let i, n;
    const r = e.width || e.rx,
      a = e.height || e.ry;
    if (r && a) return gt(e);
    if (r || a) {
      (i = parseFloat(r || Number.MAX_SAFE_INTEGER)),
        (n = parseFloat(a || Number.MAX_SAFE_INTEGER));
      const t = Math.min(i, n);
      w(r) || w(a) ? ((i = t + "%"), (n = t * o + "%")) : ((i = t), (n = t));
    } else {
      const t = 10;
      (i = t + "%"), (n = t * o + "%");
    }
    return {
      [(e.width ? "width" : e.rx ? "rx" : void 0) || "width"]: i,
      [(e.width ? "height" : e.rx ? "ry" : void 0) || "height"]: n,
    };
  },
  Fo = (t, e = {}) => {
    return {
      width: void 0,
      height: void 0,
      ...e,
      aspectRatio: 1,
      backgroundImage:
        ((o = no(t)),
        "data:image/svg+xml," + o.replace("<", "%3C").replace(">", "%3E")),
    };
    var o;
  },
  zo = (t, e = {}) => ({
    backgroundColor: [0, 0, 0, 0],
    ...(jo(e) ? {} : { width: void 0, height: void 0, aspectRatio: void 0 }),
    ...e,
    backgroundImage: w(t) ? t : ro(t) ? URL.createObjectURL(t) : t,
  }),
  Bo = (t, e) => {
    let o;
    if (w(t) || ro(t)) {
      const i = { ...Lo(e), backgroundSize: "contain" };
      o = Ke(t) ? Fo(t, i) : zo(t, i);
    } else if (t.src) {
      const i = Lo(e, t.shape || t),
        n = { ...t.shape, ...i };
      if (t.width && t.height && !Je(n, "aspectRatio")) {
        const t = Ci(i, "width", e),
          o = Ci(i, "height", e);
        n.aspectRatio = D(t, o);
      }
      n.backgroundSize ||
        t.shape ||
        (t.width && t.height) ||
        (n.backgroundSize = "contain"),
        (o = Ke(t.src) ? Fo(t.src, n) : zo(t.src, n));
    } else t.shape && (o = Io(t.shape));
    return (
      Je(o, "backgroundImage") &&
        (Je(o, "backgroundColor") || (o.backgroundColor = [0, 0, 0, 0]),
        Je(o, "disableStyle") ||
          (o.disableStyle = ["backgroundColor", "strokeColor", "strokeWidth"]),
        Je(o, "disableFlip") || (o.disableFlip = !0)),
      e ? Si(o, e) : o
    );
  },
  Oo = (t) => X(t.x1, t.y1),
  Do = (t) => X(t.x2, t.y2),
  Wo = (t) => Je(t, "text"),
  _o = (t) => Wo(t) && !(ti(t) || Je(t, "width")),
  Zo = (t) => Wo(t) && (ti(t) || Je(t, "width")),
  Vo = (t) => !Wo(t) && ei(t),
  jo = (t) => Je(t, "rx"),
  No = (t) => Je(t, "x1") && !Ho(t),
  Ho = (t) => Je(t, "x3"),
  Uo = (t) => Je(t, "points"),
  Xo = (t) => Wo(t) && t.isEditing,
  Yo = (t) => !Je(t, "opacity") || t.opacity > 0,
  Go = (t) => t.isSelected,
  qo = (t) => t.isEditing,
  Ko = (t) => t._isDraft,
  Jo = (t) => Je(t, "width") && Je(t, "height"),
  Qo = (t) => {
    const e = Je(t, "right"),
      o = Je(t, "bottom");
    return e || o;
  },
  ti = (t) =>
    ((Je(t, "x") || Je(t, "left")) && Je(t, "right")) ||
    ((Je(t, "y") || Je(t, "top")) && Je(t, "bottom")),
  ei = (t) => Jo(t) || ti(t),
  oi = (t) => ((t._isDraft = !0), t),
  ii = (t, e) =>
    !0 !== t.disableStyle &&
    (!Qe(t.disableStyle) || !e || !t.disableStyle.includes(e)),
  ni = (t) => !0 !== t.disableSelect && !Ho(t),
  ri = (t) => !0 !== t.disableRemove,
  ai = (t) =>
    !t.disableFlip &&
    !Ko(t) &&
    !Qo(t) &&
    ((t) => Je(t, "backgroundImage") || Je(t, "text"))(t),
  si = (t, e) =>
    !!Wo(t) &&
    !0 !== t.disableInput &&
    (S(t.disableInput) ? t.disableInput(null != e ? e : t.text) : e || !0),
  li = (t, e) =>
    !0 !== t.disableTextLayout &&
    (!Qe(t.disableTextLayout) || !e || !t.disableTextLayout.includes(e)),
  ci = (t) => !0 !== t.disableManipulate && !Ko(t) && !Qo(t),
  di = (t) => ci(t) && !0 !== t.disableMove,
  ui = (t) => (delete t.left, delete t.right, delete t.top, delete t.bottom, t),
  pi = (t) => (delete t.rotation, t),
  hi = (t) => (
    (t.strokeWidth = t.strokeWidth || 1),
    (t.strokeColor = t.strokeColor || [0, 0, 0]),
    t
  ),
  mi = (t) => (
    (t.backgroundColor = t.backgroundColor
      ? t.backgroundColor
      : t.strokeWidth || t.backgroundImage
      ? void 0
      : [0, 0, 0]),
    t
  ),
  gi = (t) => (delete t.textAlign, ui(t)),
  fi = (t) => ((t.textAlign = t.textAlign || "left"), t),
  $i = (t) => (
    ((t) => {
      w(t.id) || (t.id = T()),
        Je(t, "rotation") || (t.rotation = 0),
        Je(t, "opacity") || (t.opacity = 1),
        Je(t, "disableErase") || (t.disableErase = !0);
    })(t),
    Wo(t)
      ? ((t) => {
          (t.fontSize = t.fontSize || "4%"),
            (t.fontFamily = t.fontFamily || "sans-serif"),
            (t.fontWeight = t.fontWeight || "normal"),
            (t.fontStyle = t.fontStyle || "normal"),
            (t.fontVariant = t.fontVariant || "normal"),
            (t.lineHeight = t.lineHeight || "120%"),
            (t.color = t.color || [0, 0, 0]),
            _o(t) ? gi(t) : fi(t);
        })(t)
      : Vo(t)
      ? ((t) => {
          (t.cornerRadius = t.cornerRadius || 0),
            (t.strokeWidth = t.strokeWidth || 0),
            (t.strokeColor = t.strokeColor || [0, 0, 0]),
            mi(t);
        })(t)
      : Uo(t)
      ? ((t) => {
          hi(t), pi(t), ui(t);
        })(t)
      : No(t)
      ? ((t) => {
          hi(t),
            (t.lineStart = t.lineStart || void 0),
            (t.lineEnd = t.lineEnd || void 0),
            pi(t),
            ui(t);
        })(t)
      : jo(t)
      ? ((t) => {
          (t.strokeWidth = t.strokeWidth || 0),
            (t.strokeColor = t.strokeColor || [0, 0, 0]),
            mi(t);
        })(t)
      : Ho(t) &&
        ((t) => {
          (t.strokeWidth = t.strokeWidth || 0),
            (t.strokeColor = t.strokeColor || [0, 0, 0]),
            mi(t),
            ui(t);
        })(t),
    t
  ),
  yi = (t) =>
    Wo(t)
      ? "text"
      : Vo(t)
      ? "rectangle"
      : Uo(t)
      ? "path"
      : No(t)
      ? "line"
      : jo(t)
      ? "ellipse"
      : Ho(t)
      ? "triangle"
      : void 0,
  bi = (t, e) => (parseFloat(t) / 100) * e,
  xi = new RegExp(
    /^x|left|right|^width|rx|fontSize|cornerRadius|strokeWidth/,
    "i"
  ),
  vi = new RegExp(/^y|top|bottom|^height|ry/, "i"),
  wi = (t, e) => {
    Object.entries(t).map(([o, i]) => {
      t[o] = ((t, e, { width: o, height: i }) => {
        if (Array.isArray(e))
          return e.map((t) => (b(t) && wi(t, { width: o, height: i }), t));
        if ("string" != typeof e) return e;
        if (!e.endsWith("%")) return e;
        const n = parseFloat(e) / 100;
        return xi.test(t) ? Eo(o * n, 6) : vi.test(t) ? Eo(i * n, 6) : e;
      })(o, i, e);
    });
    const o = t.lineHeight;
    w(o) && (t.lineHeight = Math.round(t.fontSize * (parseFloat(o) / 100)));
  },
  Si = (t, e) => (wi(t, e), Ai(t, e), t),
  ki = (t, e) => {
    let o;
    return (
      /^x|width|rx|fontSize|strokeWidth|cornerRadius/.test(t)
        ? (o = e.width)
        : /^y|height|ry/.test(t) && (o = e.height),
      o
    );
  },
  Ci = (t, e, o) => (w(t[e]) ? bi(t[e], ki(e, o)) : t[e]),
  Mi = (t, e, o) =>
    e.reduce((e, i) => {
      const n = Ci(t, i, o);
      return (e[i] = n), e;
    }, {}),
  Ti = (t, e, o) => (
    Object.keys(e).forEach((i) =>
      ((t, e, o, i) => {
        if (!w(t[e])) return (t[e] = o), t;
        const n = ki(e, i);
        return (t[e] = void 0 === n ? o : ao(o, n)), t;
      })(t, i, e[i], o)
    ),
    t
  ),
  Pi = (t, e) => {
    const o = t
      .filter((t) => t.x < 0 || t.y < 0 || t.x1 < 0 || t.y1 < 0)
      .reduce(
        (t, e) => {
          const [o, i, n, r] = ((t) => {
            const e = Lt(),
              o = t.strokeWidth || 0;
            if (Vo(t))
              (e.x = t.x - 0.5 * o),
                (e.y = t.y - 0.5 * o),
                (e.width = t.width + o),
                (e.height = t.height + o);
            else if (No(t)) {
              const { x1: i, y1: n, x2: r, y2: a } = t,
                s = Math.abs(Math.min(i, r)),
                l = Math.abs(Math.max(i, r)),
                c = Math.abs(Math.min(n, a)),
                d = Math.abs(Math.min(n, a));
              (e.x = s + 0.5 * o),
                (e.y = l + 0.5 * o),
                (e.width = l - s + o),
                (e.height = d - c + o);
            } else
              jo(t) &&
                ((e.x = t.x - t.rx + 0.5 * o),
                (e.y = t.y - t.ry + 0.5 * o),
                (e.width = 2 * t.rx + o),
                (e.height = 2 * t.ry + o));
            return e && Je(t, "rotation") && Gt(e, t.rotation), te(e);
          })(e);
          return (
            (t.top = Math.min(o, t.top)),
            (t.left = Math.min(r, t.left)),
            (t.bottom = Math.max(n, t.bottom)),
            (t.right = Math.max(i, t.right)),
            t
          );
        },
        { top: 0, right: 0, bottom: 0, left: 0 }
      );
    return (
      o.right > 0 && (o.right -= e.width),
      o.bottom > 0 && (o.bottom -= e.height),
      o
    );
  },
  Ri = (t, e, o) => {
    const i = Io(t);
    return Si(i, e), o(i);
  },
  Ai = (t, e) => {
    if ((Je(t, "left") && (t.x = t.left), Je(t, "right") && !w(t.right))) {
      const o = e.width - t.right;
      Je(t, "left")
        ? ((t.x = t.left), (t.width = Math.max(0, o - t.left)))
        : Je(t, "width") && (t.x = o - t.width);
    }
    if ((Je(t, "top") && (t.y = t.top), Je(t, "bottom") && !w(t.bottom))) {
      const o = e.height - t.bottom;
      Je(t, "top")
        ? ((t.y = t.top), (t.height = Math.max(0, o - t.top)))
        : Je(t, "height") && (t.y = o - t.height);
    }
    return t;
  },
  Ei = (t, e) => (
    Uo(t) &&
      t.points
        .filter((t) => qe(t.x))
        .forEach((t) => {
          (t.x *= e), (t.y *= e);
        }),
    Ho(t) &&
      qe(t.x1) &&
      ((t.x1 *= e),
      (t.y1 *= e),
      (t.x2 *= e),
      (t.y2 *= e),
      (t.x3 *= e),
      (t.y3 *= e)),
    No(t) && qe(t.x1) && ((t.x1 *= e), (t.y1 *= e), (t.x2 *= e), (t.y2 *= e)),
    qe(t.x) && qe(t.y) && ((t.x *= e), (t.y *= e)),
    qe(t.width) && qe(t.height) && ((t.width *= e), (t.height *= e)),
    qe(t.rx) && qe(t.ry) && ((t.rx *= e), (t.ry *= e)),
    ((t) => qe(t.strokeWidth) && t.strokeWidth > 0)(t) && (t.strokeWidth *= e),
    Wo(t) &&
      ((t._scale = e),
      qe(t.fontSize) && (t.fontSize *= e),
      qe(t.lineHeight) && (t.lineHeight *= e),
      qe(t.width) && !qe(t.height) && (t.width *= e)),
    Je(t, "cornerRadius") && qe(t.cornerRadius) && (t.cornerRadius *= e),
    t
  );
var Ii = (t) => /canvas/i.test(t.nodeName),
  Li = (t, e) =>
    new Promise((o, i) => {
      let n = t,
        r = !1;
      const a = () => {
        r ||
          ((r = !0),
          S(e) &&
            Promise.resolve().then(() =>
              e(xt(n.naturalWidth, n.naturalHeight))
            ));
      };
      if (
        (n.src ||
          ((n = new Image()),
          w(t) &&
            new URL(t, location.href).origin !== location.origin &&
            (n.crossOrigin = "anonymous"),
          (n.src = w(t) ? t : URL.createObjectURL(t))),
        n.complete)
      )
        return a(), o(n);
      S(e) && xe(n).then(a).catch(i),
        (n.onload = () => {
          a(), o(n);
        }),
        (n.onerror = i);
    });
const Fi = new Map([]),
  zi = (t, e = {}) =>
    new Promise((o, i) => {
      const {
        onMetadata: r = n,
        onLoad: a = o,
        onError: s = i,
        onComplete: l = n,
      } = e;
      let c = Fi.get(t);
      if (
        (c ||
          ((c = {
            loading: !1,
            complete: !1,
            error: !1,
            image: void 0,
            size: void 0,
            bus: ho(),
          }),
          Fi.set(t, c)),
        c.bus.sub("meta", r),
        c.bus.sub("load", a),
        c.bus.sub("error", s),
        c.bus.sub("complete", l),
        Ii(t))
      ) {
        const e = t,
          o = e.cloneNode();
        (c.complete = !0), (c.image = o), (c.size = bt(e));
      }
      if (c.complete)
        return (
          c.bus.pub("meta", { size: c.size }),
          c.error ? c.bus.pub("error", c.error) : c.bus.pub("load", c.image),
          c.bus.pub("complete"),
          void (c.bus = ho())
        );
      c.loading ||
        ((c.loading = !0),
        Li(t, (t) => {
          (c.size = t), c.bus.pub("meta", { size: t });
        })
          .then((t) => {
            (c.image = t), c.bus.pub("load", t);
          })
          .catch((t) => {
            (c.error = t), c.bus.pub("error", t);
          })
          .finally(() => {
            (c.complete = !0),
              (c.loading = !1),
              c.bus.pub("complete"),
              (c.bus = ho());
          }));
    }),
  Bi = (t, e, o, i) =>
    t.drawImage(e, o.x, o.x, o.width, o.height, i.x, i.y, i.width, i.height);
var Oi = async (t, e, o, i, n = Bi) => {
  t.save(), t.clip(), await n(t, e, o, i), t.restore();
};
const Di = (t, e, o, i) => {
    let n = Wt(0, 0, o.width, o.height);
    const r = It(t);
    if (i)
      (n = oe(Bt(i), Eo)),
        (n.x *= o.width),
        (n.width *= o.width),
        (n.y *= o.height),
        (n.height *= o.height);
    else if ("contain" === e) {
      const e = Qt(t, Ut(n));
      (r.width = e.width), (r.height = e.height), (r.x += e.x), (r.y += e.y);
    } else "cover" === e && (n = Qt(Wt(0, 0, n.width, n.height), Ut(r)));
    return { srcRect: n, destRect: r };
  },
  Wi = (t, e) => (
    e.cornerRadius > 0
      ? ((t, e, o, i, n, r) => {
          i < 2 * r && (r = i / 2),
            n < 2 * r && (r = n / 2),
            t.beginPath(),
            t.moveTo(e + r, o),
            t.arcTo(e + i, o, e + i, o + n, r),
            t.arcTo(e + i, o + n, e, o + n, r),
            t.arcTo(e, o + n, e, o, r),
            t.arcTo(e, o, e + i, o, r),
            t.closePath();
        })(t, e.x, e.y, e.width, e.height, e.cornerRadius)
      : t.rect(e.x, e.y, e.width, e.height),
    t
  ),
  _i = (t, e) => (e.backgroundColor && t.fill(), t),
  Zi = (t, e) => (e.strokeWidth && t.stroke(), t);
var Vi = async (t, e, o = {}) =>
    new Promise(async (i, n) => {
      const { drawImage: r } = o;
      if (
        ((t.lineWidth = e.strokeWidth ? e.strokeWidth : 1),
        (t.strokeStyle = e.strokeColor ? so(e.strokeColor) : "none"),
        (t.fillStyle = e.backgroundColor ? so(e.backgroundColor) : "none"),
        (t.globalAlpha = e.opacity),
        e.backgroundImage)
      ) {
        let o;
        try {
          o = Ii(e.backgroundImage)
            ? e.backgroundImage
            : await zi(e.backgroundImage);
        } catch (t) {
          n(t);
        }
        Wi(t, e), _i(t, e);
        const { srcRect: a, destRect: s } = Di(
          e,
          e.backgroundSize,
          bt(o),
          e.backgroundCorners
        );
        await Oi(t, o, a, s, r), Zi(t, e), i([]);
      } else Wi(t, e), _i(t, e), Zi(t, e), i([]);
    }),
  ji = async (t, e, o = {}) =>
    new Promise(async (i, n) => {
      const { drawImage: r } = o;
      if (
        ((t.lineWidth = e.strokeWidth || 1),
        (t.strokeStyle = e.strokeColor ? so(e.strokeColor) : "none"),
        (t.fillStyle = e.backgroundColor ? so(e.backgroundColor) : "none"),
        (t.globalAlpha = e.opacity),
        t.ellipse(e.x, e.y, e.rx, e.ry, 0, 0, 2 * Math.PI),
        e.backgroundColor && t.fill(),
        e.backgroundImage)
      ) {
        let o;
        try {
          o = await zi(e.backgroundImage);
        } catch (t) {
          n(t);
        }
        const a = Wt(e.x - e.rx, e.y - e.ry, 2 * e.rx, 2 * e.ry),
          { srcRect: s, destRect: l } = Di(a, e.backgroundSize, bt(o));
        await Oi(t, o, s, l, r), e.strokeWidth && t.stroke(), i([]);
      } else e.strokeWidth && t.stroke(), i([]);
    }),
  Ni = async (t, e, o) => {
    const i = e.width && e.height ? ft(e) : bo(e.text, e),
      n = { x: e.x, y: e.y, width: i.width, height: i.height };
    if ((Vi(t, { ...e, ...n, options: o }), !e.text.length)) return [];
    const { willRequestResource: r } = o,
      a = await Ao(e.text, {
        ...e,
        ...n,
        imageWidth: n.width,
        imageHeight: n.height,
        willRequestResource: r,
      });
    return t.drawImage(a, e.x - mo, e.y, a.width, a.height), [];
  },
  Hi = async (t, e) =>
    new Promise(async (o) => {
      (t.lineWidth = e.strokeWidth || 1),
        (t.strokeStyle = e.strokeColor ? so(e.strokeColor) : "none"),
        (t.globalAlpha = e.opacity);
      let i = Oo(e),
        n = Do(e);
      t.moveTo(i.x, i.y),
        t.lineTo(n.x, n.y),
        e.strokeWidth && t.stroke(),
        o([]);
    }),
  Ui = async (t, e) =>
    new Promise((o, i) => {
      (t.lineWidth = e.strokeWidth || 1),
        (t.strokeStyle = e.strokeColor ? so(e.strokeColor) : "none"),
        (t.fillStyle = e.backgroundColor ? so(e.backgroundColor) : "none"),
        (t.globalAlpha = e.opacity);
      const { points: n } = e;
      e.pathClose && t.beginPath(), t.moveTo(n[0].x, n[0].y);
      const r = n.length;
      for (let e = 1; e < r; e++) t.lineTo(n[e].x, n[e].y);
      e.pathClose && t.closePath(),
        e.strokeWidth && t.stroke(),
        e.backgroundColor && t.fill(),
        o([]);
    });
const Xi = async (t, e, o) => {
  const i = ((t) => {
    if (Vo(t)) return X(t.x + 0.5 * t.width, t.y + 0.5 * t.height);
    if (jo(t)) return X(t.x, t.y);
    if (Zo(t)) {
      const e = t.height || bo(t.text, t).height;
      return X(t.x + 0.5 * t.width, t.y + 0.5 * e);
    }
    if (_o(t)) {
      const e = bo(t.text, t);
      return X(t.x + 0.5 * e.width, t.y + 0.5 * e.height);
    }
    return Uo(t) ? ut(t.points) : No(t) ? ut([Oo(t), Do(t)]) : void 0;
  })(e);
  let n;
  return (
    We(t, e.rotation, i),
    ((t, e, o, i) => {
      (e || o) &&
        (t.translate(i.x, i.y),
        t.scale(e ? -1 : 1, o ? -1 : 1),
        t.translate(-i.x, -i.y));
    })(t, e.flipX, e.flipY, i),
    Vo(e)
      ? (n = Vi)
      : jo(e)
      ? (n = ji)
      : No(e)
      ? (n = Hi)
      : Uo(e)
      ? (n = Ui)
      : Wo(e) && (n = Ni),
    n ? [e, ...(await Yi(t, await n(t, e, o), o))] : []
  );
};
var Yi = async (t, e, o) => {
    let i = [];
    for (const n of e)
      t.save(),
        t.beginPath(),
        (i = [...i, ...(await Xi(t, n, o))]),
        t.restore();
    return i;
  },
  Gi = async (t, e = {}) => {
    const {
      shapes: o = [],
      contextBounds: i = t,
      transform: r = n,
      drawImage: a,
      willRequestResource: s,
      canvasMemoryLimit: l,
      computeShape: c = W,
      preprocessShape: d = W,
    } = e;
    if (!o.length) return t;
    const u = h("canvas");
    (u.width = i.width), (u.height = i.height);
    const p = u.getContext("2d");
    p.putImageData(t, i.x || 0, i.y || 0);
    const m = o.map(Io).map(c).map(d).flat();
    r(p),
      await Yi(p, m, {
        drawImage: a,
        canvasMemoryLimit: l,
        willRequestResource: s,
      });
    const f = p.getImageData(0, 0, u.width, u.height);
    return g(u), f;
  },
  qi = async (t, e = {}) => {
    const { backgroundColor: o } = e;
    if (!o || (o && 0 === o[3])) return t;
    const i = h("canvas");
    (i.width = t.width), (i.height = t.height);
    const n = i.getContext("2d");
    n.putImageData(t, 0, 0),
      (n.globalCompositeOperation = "destination-over"),
      (n.fillStyle = so(o)),
      n.fillRect(0, 0, i.width, i.height);
    const r = n.getImageData(0, 0, i.width, i.height);
    return g(i), r;
  },
  Ki = (t) =>
    t.length
      ? t.reduce(
          (t, e) =>
            ((t, e) => {
              const o = new Array(20);
              return (
                (o[0] =
                  t[0] * e[0] + t[1] * e[5] + t[2] * e[10] + t[3] * e[15]),
                (o[1] =
                  t[0] * e[1] + t[1] * e[6] + t[2] * e[11] + t[3] * e[16]),
                (o[2] =
                  t[0] * e[2] + t[1] * e[7] + t[2] * e[12] + t[3] * e[17]),
                (o[3] =
                  t[0] * e[3] + t[1] * e[8] + t[2] * e[13] + t[3] * e[18]),
                (o[4] =
                  t[0] * e[4] +
                  t[1] * e[9] +
                  t[2] * e[14] +
                  t[3] * e[19] +
                  t[4]),
                (o[5] =
                  t[5] * e[0] + t[6] * e[5] + t[7] * e[10] + t[8] * e[15]),
                (o[6] =
                  t[5] * e[1] + t[6] * e[6] + t[7] * e[11] + t[8] * e[16]),
                (o[7] =
                  t[5] * e[2] + t[6] * e[7] + t[7] * e[12] + t[8] * e[17]),
                (o[8] =
                  t[5] * e[3] + t[6] * e[8] + t[7] * e[13] + t[8] * e[18]),
                (o[9] =
                  t[5] * e[4] +
                  t[6] * e[9] +
                  t[7] * e[14] +
                  t[8] * e[19] +
                  t[9]),
                (o[10] =
                  t[10] * e[0] + t[11] * e[5] + t[12] * e[10] + t[13] * e[15]),
                (o[11] =
                  t[10] * e[1] + t[11] * e[6] + t[12] * e[11] + t[13] * e[16]),
                (o[12] =
                  t[10] * e[2] + t[11] * e[7] + t[12] * e[12] + t[13] * e[17]),
                (o[13] =
                  t[10] * e[3] + t[11] * e[8] + t[12] * e[13] + t[13] * e[18]),
                (o[14] =
                  t[10] * e[4] +
                  t[11] * e[9] +
                  t[12] * e[14] +
                  t[13] * e[19] +
                  t[14]),
                (o[15] =
                  t[15] * e[0] + t[16] * e[5] + t[17] * e[10] + t[18] * e[15]),
                (o[16] =
                  t[15] * e[1] + t[16] * e[6] + t[17] * e[11] + t[18] * e[16]),
                (o[17] =
                  t[15] * e[2] + t[16] * e[7] + t[17] * e[12] + t[18] * e[17]),
                (o[18] =
                  t[15] * e[3] + t[16] * e[8] + t[17] * e[13] + t[18] * e[18]),
                (o[19] =
                  t[15] * e[4] +
                  t[16] * e[9] +
                  t[17] * e[14] +
                  t[18] * e[19] +
                  t[19]),
                o
              );
            })([...t], e),
          t.shift()
        )
      : [],
  Ji = (t, e) => {
    const o = t.width * t.height,
      i = e.reduce(
        (t, e) => (
          e.width > t.width &&
            e.height > t.height &&
            ((t.width = e.width), (t.height = e.height)),
          t
        ),
        { width: 0, height: 0 }
      ),
      n = i.width * i.height;
    return ((t, e = 2) => Math.round(t * e) / e)(
      Math.max(0.5, 0.5 + (1 - n / o) / 2),
      5
    );
  };
function Qi() {}
const tn = (t) => t;
function en(t, e) {
  for (const o in e) t[o] = e[o];
  return t;
}
function on(t) {
  return t();
}
function nn() {
  return Object.create(null);
}
function rn(t) {
  t.forEach(on);
}
function an(t) {
  return "function" == typeof t;
}
function sn(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && "object" == typeof t) || "function" == typeof t;
}
function ln(t, ...e) {
  if (null == t) return Qi;
  const o = t.subscribe(...e);
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
function cn(t) {
  let e;
  return ln(t, (t) => (e = t))(), e;
}
function dn(t, e, o) {
  t.$$.on_destroy.push(ln(e, o));
}
function un(t, e, o, i) {
  if (t) {
    const n = pn(t, e, o, i);
    return t[0](n);
  }
}
function pn(t, e, o, i) {
  return t[1] && i ? en(o.ctx.slice(), t[1](i(e))) : o.ctx;
}
function hn(t, e, o, i, n, r, a) {
  const s = (function (t, e, o, i) {
    if (t[2] && i) {
      const n = t[2](i(o));
      if (void 0 === e.dirty) return n;
      if ("object" == typeof n) {
        const t = [],
          o = Math.max(e.dirty.length, n.length);
        for (let i = 0; i < o; i += 1) t[i] = e.dirty[i] | n[i];
        return t;
      }
      return e.dirty | n;
    }
    return e.dirty;
  })(e, i, n, r);
  if (s) {
    const n = pn(e, o, i, a);
    t.p(n, s);
  }
}
function mn(t) {
  const e = {};
  for (const o in t) "$" !== o[0] && (e[o] = t[o]);
  return e;
}
function gn(t, e) {
  const o = {};
  e = new Set(e);
  for (const i in t) e.has(i) || "$" === i[0] || (o[i] = t[i]);
  return o;
}
function fn(t, e, o = e) {
  return t.set(o), e;
}
function $n(t) {
  return t && an(t.destroy) ? t.destroy : Qi;
}
const yn = "undefined" != typeof window;
let bn = yn ? () => window.performance.now() : () => Date.now(),
  xn = yn ? (t) => requestAnimationFrame(t) : Qi;
const vn = new Set();
function wn(t) {
  vn.forEach((e) => {
    e.c(t) || (vn.delete(e), e.f());
  }),
    0 !== vn.size && xn(wn);
}
function Sn(t) {
  let e;
  return (
    0 === vn.size && xn(wn),
    {
      promise: new Promise((o) => {
        vn.add((e = { c: t, f: o }));
      }),
      abort() {
        vn.delete(e);
      },
    }
  );
}
function kn(t, e) {
  t.appendChild(e);
}
function Cn(t, e, o) {
  t.insertBefore(e, o || null);
}
function Mn(t) {
  t.parentNode.removeChild(t);
}
function Tn(t) {
  return document.createElement(t);
}
function Pn(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Rn(t) {
  return document.createTextNode(t);
}
function An() {
  return Rn(" ");
}
function En() {
  return Rn("");
}
function In(t, e, o, i) {
  return t.addEventListener(e, o, i), () => t.removeEventListener(e, o, i);
}
function Ln(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function Fn(t) {
  return function (e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function zn(t, e, o) {
  null == o
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== o && t.setAttribute(e, o);
}
function Bn(t, e) {
  const o = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    null == e[i]
      ? t.removeAttribute(i)
      : "style" === i
      ? (t.style.cssText = e[i])
      : "__value" === i
      ? (t.value = t[i] = e[i])
      : o[i] && o[i].set
      ? (t[i] = e[i])
      : zn(t, i, e[i]);
}
function On(t, e) {
  (e = "" + e), t.wholeText !== e && (t.data = e);
}
function Dn(t, e) {
  t.value = null == e ? "" : e;
}
function Wn(t, e) {
  const o = document.createEvent("CustomEvent");
  return o.initCustomEvent(t, !1, !1, e), o;
}
class _n {
  constructor(t = null) {
    (this.a = t), (this.e = this.n = null);
  }
  m(t, e, o = null) {
    this.e || ((this.e = Tn(e.nodeName)), (this.t = e), this.h(t)), this.i(o);
  }
  h(t) {
    (this.e.innerHTML = t), (this.n = Array.from(this.e.childNodes));
  }
  i(t) {
    for (let e = 0; e < this.n.length; e += 1) Cn(this.t, this.n[e], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(Mn);
  }
}
const Zn = new Set();
let Vn,
  jn = 0;
function Nn(t, e, o, i, n, r, a, s = 0) {
  const l = 16.666 / i;
  let c = "{\n";
  for (let t = 0; t <= 1; t += l) {
    const i = e + (o - e) * r(t);
    c += 100 * t + `%{${a(i, 1 - i)}}\n`;
  }
  const d = c + `100% {${a(o, 1 - o)}}\n}`,
    u = `__svelte_${(function (t) {
      let e = 5381,
        o = t.length;
      for (; o--; ) e = ((e << 5) - e) ^ t.charCodeAt(o);
      return e >>> 0;
    })(d)}_${s}`,
    p = t.ownerDocument;
  Zn.add(p);
  const h =
      p.__svelte_stylesheet ||
      (p.__svelte_stylesheet = p.head.appendChild(Tn("style")).sheet),
    m = p.__svelte_rules || (p.__svelte_rules = {});
  m[u] ||
    ((m[u] = !0), h.insertRule(`@keyframes ${u} ${d}`, h.cssRules.length));
  const g = t.style.animation || "";
  return (
    (t.style.animation = `${
      g ? g + ", " : ""
    }${u} ${i}ms linear ${n}ms 1 both`),
    (jn += 1),
    u
  );
}
function Hn(t, e) {
  const o = (t.style.animation || "").split(", "),
    i = o.filter(
      e ? (t) => t.indexOf(e) < 0 : (t) => -1 === t.indexOf("__svelte")
    ),
    n = o.length - i.length;
  n &&
    ((t.style.animation = i.join(", ")),
    (jn -= n),
    jn ||
      xn(() => {
        jn ||
          (Zn.forEach((t) => {
            const e = t.__svelte_stylesheet;
            let o = e.cssRules.length;
            for (; o--; ) e.deleteRule(o);
            t.__svelte_rules = {};
          }),
          Zn.clear());
      }));
}
function Un(t) {
  Vn = t;
}
function Xn() {
  if (!Vn) throw new Error("Function called outside component initialization");
  return Vn;
}
function Yn(t) {
  Xn().$$.on_mount.push(t);
}
function Gn(t) {
  Xn().$$.after_update.push(t);
}
function qn(t) {
  Xn().$$.on_destroy.push(t);
}
function Kn() {
  const t = Xn();
  return (e, o) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const n = Wn(e, o);
      i.slice().forEach((e) => {
        e.call(t, n);
      });
    }
  };
}
function Jn(t, e) {
  Xn().$$.context.set(t, e);
}
function Qn(t) {
  return Xn().$$.context.get(t);
}
function tr(t, e) {
  const o = t.$$.callbacks[e.type];
  o && o.slice().forEach((t) => t(e));
}
const er = [],
  or = [],
  ir = [],
  nr = [],
  rr = Promise.resolve();
let ar = !1;
function sr() {
  ar || ((ar = !0), rr.then(hr));
}
function lr() {
  return sr(), rr;
}
function cr(t) {
  ir.push(t);
}
function dr(t) {
  nr.push(t);
}
let ur = !1;
const pr = new Set();
function hr() {
  if (!ur) {
    ur = !0;
    do {
      for (let t = 0; t < er.length; t += 1) {
        const e = er[t];
        Un(e), mr(e.$$);
      }
      for (Un(null), er.length = 0; or.length; ) or.pop()();
      for (let t = 0; t < ir.length; t += 1) {
        const e = ir[t];
        pr.has(e) || (pr.add(e), e());
      }
      ir.length = 0;
    } while (er.length);
    for (; nr.length; ) nr.pop()();
    (ar = !1), (ur = !1), pr.clear();
  }
}
function mr(t) {
  if (null !== t.fragment) {
    t.update(), rn(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(cr);
  }
}
let gr;
function fr(t, e, o) {
  t.dispatchEvent(Wn(`${e ? "intro" : "outro"}${o}`));
}
const $r = new Set();
let yr;
function br() {
  yr = { r: 0, c: [], p: yr };
}
function xr() {
  yr.r || rn(yr.c), (yr = yr.p);
}
function vr(t, e) {
  t && t.i && ($r.delete(t), t.i(e));
}
function wr(t, e, o, i) {
  if (t && t.o) {
    if ($r.has(t)) return;
    $r.add(t),
      yr.c.push(() => {
        $r.delete(t), i && (o && t.d(1), i());
      }),
      t.o(e);
  }
}
const Sr = { duration: 0 };
function kr(t, e, o, i) {
  let n = e(t, o),
    r = i ? 0 : 1,
    a = null,
    s = null,
    l = null;
  function c() {
    l && Hn(t, l);
  }
  function d(t, e) {
    const o = t.b - r;
    return (
      (e *= Math.abs(o)),
      {
        a: r,
        b: t.b,
        d: o,
        duration: e,
        start: t.start,
        end: t.start + e,
        group: t.group,
      }
    );
  }
  function u(e) {
    const {
        delay: o = 0,
        duration: i = 300,
        easing: u = tn,
        tick: p = Qi,
        css: h,
      } = n || Sr,
      m = { start: bn() + o, b: e };
    e || ((m.group = yr), (yr.r += 1)),
      a || s
        ? (s = m)
        : (h && (c(), (l = Nn(t, r, e, i, o, u, h))),
          e && p(0, 1),
          (a = d(m, i)),
          cr(() => fr(t, e, "start")),
          Sn((e) => {
            if (
              (s &&
                e > s.start &&
                ((a = d(s, i)),
                (s = null),
                fr(t, a.b, "start"),
                h && (c(), (l = Nn(t, r, a.b, a.duration, 0, u, n.css)))),
              a)
            )
              if (e >= a.end)
                p((r = a.b), 1 - r),
                  fr(t, a.b, "end"),
                  s || (a.b ? c() : --a.group.r || rn(a.group.c)),
                  (a = null);
              else if (e >= a.start) {
                const t = e - a.start;
                (r = a.a + a.d * u(t / a.duration)), p(r, 1 - r);
              }
            return !(!a && !s);
          }));
  }
  return {
    run(t) {
      an(n)
        ? (gr ||
            ((gr = Promise.resolve()),
            gr.then(() => {
              gr = null;
            })),
          gr).then(() => {
            (n = n()), u(t);
          })
        : u(t);
    },
    end() {
      c(), (a = s = null);
    },
  };
}
const Cr =
  "undefined" != typeof window
    ? window
    : "undefined" != typeof globalThis
    ? globalThis
    : global;
function Mr(t, e) {
  t.d(1), e.delete(t.key);
}
function Tr(t, e) {
  wr(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Pr(t, e, o, i, n, r, a, s, l, c, d, u) {
  let p = t.length,
    h = r.length,
    m = p;
  const g = {};
  for (; m--; ) g[t[m].key] = m;
  const f = [],
    $ = new Map(),
    y = new Map();
  for (m = h; m--; ) {
    const t = u(n, r, m),
      s = o(t);
    let l = a.get(s);
    l ? i && l.p(t, e) : ((l = c(s, t)), l.c()),
      $.set(s, (f[m] = l)),
      s in g && y.set(s, Math.abs(m - g[s]));
  }
  const b = new Set(),
    x = new Set();
  function v(t) {
    vr(t, 1), t.m(s, d), a.set(t.key, t), (d = t.first), h--;
  }
  for (; p && h; ) {
    const e = f[h - 1],
      o = t[p - 1],
      i = e.key,
      n = o.key;
    e === o
      ? ((d = e.first), p--, h--)
      : $.has(n)
      ? !a.has(i) || b.has(i)
        ? v(e)
        : x.has(n)
        ? p--
        : y.get(i) > y.get(n)
        ? (x.add(i), v(e))
        : (b.add(n), p--)
      : (l(o, a), p--);
  }
  for (; p--; ) {
    const e = t[p];
    $.has(e.key) || l(e, a);
  }
  for (; h; ) v(f[h - 1]);
  return f;
}
function Rr(t, e) {
  const o = {},
    i = {},
    n = { $$scope: 1 };
  let r = t.length;
  for (; r--; ) {
    const a = t[r],
      s = e[r];
    if (s) {
      for (const t in a) t in s || (i[t] = 1);
      for (const t in s) n[t] || ((o[t] = s[t]), (n[t] = 1));
      t[r] = s;
    } else for (const t in a) n[t] = 1;
  }
  for (const t in i) t in o || (o[t] = void 0);
  return o;
}
function Ar(t) {
  return "object" == typeof t && null !== t ? t : {};
}
function Er(t, e, o) {
  const i = t.$$.props[e];
  void 0 !== i && ((t.$$.bound[i] = o), o(t.$$.ctx[i]));
}
function Ir(t) {
  t && t.c();
}
function Lr(t, e, o, i) {
  const { fragment: n, on_mount: r, on_destroy: a, after_update: s } = t.$$;
  n && n.m(e, o),
    i ||
      cr(() => {
        const e = r.map(on).filter(an);
        a ? a.push(...e) : rn(e), (t.$$.on_mount = []);
      }),
    s.forEach(cr);
}
function Fr(t, e) {
  const o = t.$$;
  null !== o.fragment &&
    (rn(o.on_destroy),
    o.fragment && o.fragment.d(e),
    (o.on_destroy = o.fragment = null),
    (o.ctx = []));
}
function zr(t, e, o, i, n, r, a = [-1]) {
  const s = Vn;
  Un(t);
  const l = (t.$$ = {
    fragment: null,
    ctx: null,
    props: r,
    update: Qi,
    not_equal: n,
    bound: nn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(s ? s.$$.context : e.context || []),
    callbacks: nn(),
    dirty: a,
    skip_bound: !1,
  });
  let c = !1;
  if (
    ((l.ctx = o
      ? o(t, e.props || {}, (e, o, ...i) => {
          const r = i.length ? i[0] : o;
          return (
            l.ctx &&
              n(l.ctx[e], (l.ctx[e] = r)) &&
              (!l.skip_bound && l.bound[e] && l.bound[e](r),
              c &&
                (function (t, e) {
                  -1 === t.$$.dirty[0] &&
                    (er.push(t), sr(), t.$$.dirty.fill(0)),
                    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
                })(t, e)),
            o
          );
        })
      : []),
    l.update(),
    (c = !0),
    rn(l.before_update),
    (l.fragment = !!i && i(l.ctx)),
    e.target)
  ) {
    if (e.hydrate) {
      const t = (function (t) {
        return Array.from(t.childNodes);
      })(e.target);
      l.fragment && l.fragment.l(t), t.forEach(Mn);
    } else l.fragment && l.fragment.c();
    e.intro && vr(t.$$.fragment),
      Lr(t, e.target, e.anchor, e.customElement),
      hr();
  }
  Un(s);
}
class Br {
  $destroy() {
    Fr(this, 1), (this.$destroy = Qi);
  }
  $on(t, e) {
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      o.push(e),
      () => {
        const t = o.indexOf(e);
        -1 !== t && o.splice(t, 1);
      }
    );
  }
  $set(t) {
    var e;
    this.$$set &&
      ((e = t), 0 !== Object.keys(e).length) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const Or = [];
function Dr(t, e) {
  return { subscribe: Wr(t, e).subscribe };
}
function Wr(t, e = Qi) {
  let o;
  const i = [];
  function n(e) {
    if (sn(t, e) && ((t = e), o)) {
      const e = !Or.length;
      for (let e = 0; e < i.length; e += 1) {
        const o = i[e];
        o[1](), Or.push(o, t);
      }
      if (e) {
        for (let t = 0; t < Or.length; t += 2) Or[t][0](Or[t + 1]);
        Or.length = 0;
      }
    }
  }
  return {
    set: n,
    update: function (e) {
      n(e(t));
    },
    subscribe: function (r, a = Qi) {
      const s = [r, a];
      return (
        i.push(s),
        1 === i.length && (o = e(n) || Qi),
        r(t),
        () => {
          const t = i.indexOf(s);
          -1 !== t && i.splice(t, 1), 0 === i.length && (o(), (o = null));
        }
      );
    },
  };
}
function _r(t, e, o) {
  const i = !Array.isArray(t),
    n = i ? [t] : t,
    r = e.length < 2;
  return Dr(o, (t) => {
    let o = !1;
    const a = [];
    let s = 0,
      l = Qi;
    const c = () => {
        if (s) return;
        l();
        const o = e(i ? a[0] : a, t);
        r ? t(o) : (l = an(o) ? o : Qi);
      },
      d = n.map((t, e) =>
        ln(
          t,
          (t) => {
            (a[e] = t), (s &= ~(1 << e)), o && c();
          },
          () => {
            s |= 1 << e;
          }
        )
      );
    return (
      (o = !0),
      c(),
      function () {
        rn(d), l();
      }
    );
  });
}
var Zr = (t) => t.reduce((t, e) => Object.assign(t, e), {});
const Vr = (t) => ({ updateValue: t }),
  jr = (t) => ({ defaultValue: t }),
  Nr = (t) => ({ store: (e, o) => _r(...t(o)) }),
  Hr = (t) => ({
    store: (e, o) => {
      const [i, n, r = () => !1] = t(o);
      let a,
        s = !0;
      return _r(i, (t, e) => {
        n(t, (t) => {
          (!s && r(a, t)) || ((a = t), (s = !1), e(t));
        });
      });
    },
  }),
  Ur = (t) => ({
    store: (e, o) => {
      const [i, n = {}, r] = t(o);
      let a = [];
      const s = {},
        l = (t) => i(t, s),
        c = (t) => {
          (a.length || t.length) && ((a = t), d());
        },
        d = () => {
          const t = a.map(l);
          r && t.sort(r), (a = [...t]), p(t);
        };
      Object.entries(n).map(([t, e]) =>
        e.subscribe((e) => {
          (s[t] = e), e && d();
        })
      );
      const { subscribe: u, set: p } = Wr(e || []);
      return { set: c, update: (t) => c(t(a)), subscribe: u };
    },
  });
var Xr = (t) => {
    const e = {},
      o = {};
    return (
      t.forEach(([t, ...i]) => {
        const r = Zr(i),
          a = (e[t] = ((t, e, o) => {
            const {
                store: i = (t) => Wr(t),
                defaultValue: r = n,
                updateValue: a,
              } = o,
              s = i(r(), e, t),
              { subscribe: l, update: c = n } = s;
            let d;
            const u = (t) => {
                let e = !0;
                d && d(),
                  (d = l((o) => {
                    if (e) return (e = !1);
                    t(o), d(), (d = void 0);
                  }));
              },
              p = a ? a(t) : W;
            return (
              (s.set = (t) => c((e) => p(t, e, u))), (s.defaultValue = r), s
            );
          })(o, e, r)),
          s = { get: () => cn(a), set: a.set };
        Object.defineProperty(o, t, s);
      }),
      { stores: e, accessors: o }
    );
  },
  Yr = [
    ["src"],
    ["imageReader"],
    ["imageWriter"],
    ["imageScrambler"],
    ["images", jr(() => [])],
    ["shapePreprocessor"],
    ["willRequestResource"],
  ],
  Gr = (t) => t.charAt(0).toUpperCase() + t.slice(1),
  qr = (t, e) => {
    Object.keys(e).forEach((o) => {
      const i = S(e[o]) ? { value: e[o], writable: !1 } : e[o];
      Object.defineProperty(t, o, i);
    });
  };
const Kr = (t, e) => {
  let o, i, n, r, a, s, l, c, d, u;
  const p = e.length;
  for (o = 0; o < p; o++)
    if (
      ((i = e[o]),
      (n = e[o + 1 > p - 1 ? 0 : o + 1]),
      (r = i.x - t.x),
      (a = i.y - t.y),
      (s = n.x - t.x),
      (l = n.y - t.y),
      (c = r - s),
      (d = a - l),
      (u = c * a - d * r),
      u < -1e-5)
    )
      return !1;
  return !0;
};
var Jr = (t, e) => {
    const o = ce(e),
      i = U();
    ee(t).forEach((t) => {
      nt(t, i),
        Kr(t, e) ||
          o.forEach((e) => {
            const o = Math.atan2(e.start.y - e.end.y, e.start.x - e.end.x),
              n = 1e4 * Math.sin(Math.PI - o),
              r = 1e4 * Math.cos(Math.PI - o),
              a = X(t.x + n, t.y + r),
              s = Rt(Pt(e), 1e4),
              l = ae(Tt(t, a), s);
            l && nt(i, rt(q(l), t));
          });
    });
    const n = It(t);
    nt(n, i);
    return !!ee(n).every((t) => Kr(t, e)) && (Yt(t, n), !0);
  },
  Qr = (t, e) => {
    const o = ee(t),
      i = ce(e).map((t) => Rt(t, 5)),
      n = _t(t),
      r = [];
    o.forEach((t) => {
      const e = ((t, e) => {
        if (0 === e) return t;
        const o = X(t.start.x - t.end.x, t.start.y - t.end.y),
          i = tt(o),
          n = at(i, e);
        return (t.end.x += n.x), (t.end.y += n.y), t;
      })(Tt(q(n), q(t)), 1e6);
      let o = !1;
      i.map(Pt).forEach((t) => {
        const i = ae(e, t);
        i && !o && (r.push(i), (o = !0));
      });
    });
    const a = ct(r[0], r[2]) < ct(r[1], r[3]) ? [r[0], r[2]] : [r[1], r[3]],
      s = Bt(a);
    return s.width < t.width && (Yt(t, s), !0);
  },
  ta = (t, e, o = { x: 0, y: 0 }) => {
    const i = Ft(t),
      n = _t(i),
      r = ie(i, o, n).map((t) => J(t, e, n)),
      a = Bt(r);
    return r.map((t) => rt(t, a));
  },
  ea = (t, e = 0, o = Ut(t)) => {
    let i, n;
    if (0 !== e) {
      const r = Math.atan2(1, o),
        a = Math.sign(e) * e,
        s = a % Math.PI,
        l = a % Z;
      let c, d;
      (d = s > V && s < Z + V ? (l > V ? a : Z - l) : l > V ? Z - l : a),
        (c = Math.min(
          Math.abs(t.height / Math.sin(r + d)),
          Math.abs(t.width / Math.cos(r - d))
        )),
        (i = Math.cos(r) * c),
        (n = i / o);
    } else
      (i = t.width), (n = i / o), n > t.height && ((n = t.height), (i = n * o));
    return xt(i, n);
  },
  oa = (t, e, o, i, n, r, a, s) => {
    const l = gt(a),
      c = gt(s),
      d = Eo(Math.max(e.width / c.width, e.height / c.height)),
      u = Eo(Math.min(e.width / l.width, e.height / l.height)),
      p = It(e);
    if (u < 1 || d > 1) {
      const o = _t(t),
        i = _t(e),
        n = u < 1 ? u : d,
        r = (i.x + o.x) / 2,
        a = (i.y + o.y) / 2,
        s = p.width / n,
        l = p.height / n;
      Xt(p, r - 0.5 * s, a - 0.5 * l, s, l);
    }
    return r
      ? (((t, e, o = 0, i = U(), n) => {
          if ((qe(o) && 0 !== o) || i.x || i.y) {
            const n = Ut(t),
              r = ta(e, o, i),
              a = ea(e, o, n);
            if (!(t.width < a.width && t.height < a.height)) {
              const e = 0.5 * t.width - 0.5 * a.width,
                o = 0.5 * t.height - 0.5 * a.height;
              t.width > a.width && ((t.width = a.width), (t.x += e)),
                t.height > a.height && ((t.height = a.height), (t.y += o));
            }
            Jr(t, r), Qr(t, r) && Jr(t, r);
          } else {
            const o = Ut(t);
            (t.width = Math.min(t.width, e.width)),
              (t.height = Math.min(t.height, e.height)),
              (t.x = Math.max(t.x, 0)),
              t.x + t.width > e.width && (t.x -= t.x + t.width - e.width),
              (t.y = Math.max(t.y, 0)),
              t.y + t.height > e.height && (t.y -= t.y + t.height - e.height);
            const i = _t(t),
              r = Qt(t, o);
            (r.width = Math.max(n.width, r.width)),
              (r.height = Math.max(n.height, r.height)),
              (r.x = i.x - 0.5 * r.width),
              (r.y = i.y - 0.5 * r.height),
              Yt(t, r);
          }
        })(p, o, i, n, l),
        { crop: p })
      : { crop: p };
  },
  ia = (t, e, o) => {
    const i = Ft(t),
      n = _t(i),
      r = Gt(i, o, n),
      a = _t(ne(Bt(r))),
      s = _t(e),
      l = J(s, -o, a),
      c = rt(l, a),
      d = it(nt(n, c), Eo);
    return Wt(d.x - 0.5 * e.width, d.y - 0.5 * e.height, e.width, e.height);
  },
  na = (t, e, o) => Math.max(e, Math.min(t, o));
const ra = [
    "cropLimitToImage",
    "cropMinSize",
    "cropMaxSize",
    "cropAspectRatio",
    "flipX",
    "flipY",
    "rotation",
    "crop",
    "colorMatrix",
    "convolutionMatrix",
    "gamma",
    "vignette",
    "redaction",
    "annotation",
    "decoration",
    "frame",
    "backgroundColor",
    "targetSize",
    "metadata",
  ],
  aa = (t) => (Qe(t) ? t.map(aa) : b(t) ? { ...t } : t),
  sa = (t) =>
    t.map((t) =>
      Object.entries(t).reduce(
        (t, [e, o]) => (e.startsWith("_") || (t[e] = o), t),
        {}
      )
    );
var la = (t, e) => {
  if (t.length !== e.length) return !1;
  for (let o = 0; o < t.length; o++) if (t[o] !== e[o]) return !1;
  return !0;
};
const ca = -V,
  da = V,
  ua = (t, e, o) => {
    const i = it(_t(t), (t) => Eo(t, 8)),
      n = Ft(e),
      r = _t(n),
      a = Gt(n, o, r),
      s = it(St(Bt(a)), (t) => Eo(t, 8)),
      l = Math.abs(s.x - i.x),
      c = Math.abs(s.y - i.y);
    return l < 1 && c < 1;
  },
  pa = (t, e, o, i, n) => {
    if (!n) return [ca, da];
    const r = Math.max(o.width / i.width, o.height / i.height),
      a = xt(i.width * r, i.height * r),
      s = ((l = a), Math.sqrt(l.width * l.width + l.height * l.height));
    var l;
    if (s < Math.min(t.width, t.height)) return [ca, da];
    const c = e ? t.height : t.width,
      d = e ? t.width : t.height,
      u = Math.acos(a.height / s),
      p = u - Math.acos(d / s),
      h = Math.asin(c / s) - u;
    if (Number.isNaN(p) && Number.isNaN(h)) return [ca, da];
    const m = Number.isNaN(p) ? h : Number.isNaN(h) ? p : Math.min(p, h);
    return [Math.max(-m, ca), Math.min(m, da)];
  },
  ha = (t, e) => {
    const { context: o, props: i } = e;
    return (
      t._isFormatted || (((t = $i(t))._isFormatted = !0), Object.assign(t, i)),
      t._isDraft ||
        !ti(t) ||
        (t._context && Ht(o, t._context)) ||
        (Ai(t, o), (t._context = { ...o })),
      t
    );
  };
var ma = [
    ["file"],
    ["size"],
    ["loadState"],
    ["processState"],
    ["aspectRatio", Nr(({ size: t }) => [t, (t) => (t ? Ut(t) : void 0)])],
    ["perspectiveX", jr(() => 0)],
    ["perspectiveY", jr(() => 0)],
    [
      "perspective",
      Nr(({ perspectiveX: t, perspectiveY: e }) => [
        [t, e],
        ([t, e]) => ({ x: t, y: e }),
      ]),
    ],
    [
      "rotation",
      jr(() => 0),
      Vr((t) => (e, o, i) => {
        if (e === o) return e;
        const {
          loadState: n,
          size: r,
          rotationRange: a,
          cropMinSize: s,
          cropMaxSize: l,
          crop: c,
          perspective: d,
          cropLimitToImage: u,
          cropOrigin: p,
        } = t;
        if (!c || !n || !n.beforeComplete) return e;
        const h = ((t, e, o) => {
            const i = ea(e, o, Ut(t));
            return vt(Mt(i, Math.round), Mt(gt(t), Math.round));
          })(c, r, o),
          m = ua(c, r, o),
          g = ((t, e, o, i, n, r, a, s, l, c) => {
            const d = gt(l),
              u = gt(c);
            a &&
              ((u.width = Math.min(c.width, n.width)),
              (u.height = Math.min(c.height, n.height)));
            let p = !1;
            const h = (e, o) => {
                const l = ia(n, i, e),
                  c = Ft(n),
                  m = _t(c),
                  g = ie(c, r, m),
                  f = rt(q(m), re(g)),
                  $ = J(_t(l), o, m),
                  y = rt(q(m), $);
                g.forEach((t) => J(t, o, m));
                const b = Bt(g),
                  x = re(g),
                  v = nt(rt(rt(x, y), b), f),
                  w = Wt(
                    v.x - 0.5 * l.width,
                    v.y - 0.5 * l.height,
                    l.width,
                    l.height
                  );
                if ((s && Vt(w, s.width / w.width), a)) {
                  const t = ta(n, o, r);
                  Qr(w, t);
                }
                const S = Eo(
                    Math.min(w.width / d.width, w.height / d.height),
                    8
                  ),
                  k = Eo(Math.max(w.width / u.width, w.height / u.height), 8);
                return (S < 1 || k > 1) &&
                  Eo(Math.abs(o - e)) === Eo(Math.PI / 2) &&
                  !p
                  ? ((p = !0), h(t, t + Math.sign(o - e) * Math.PI))
                  : { rotation: o, crop: oe(w, (t) => Eo(t, 8)) };
              },
              m = Math.sign(e) * Math.round(Math.abs(e) / Z) * Z,
              g = na(e, m + o[0], m + o[1]);
            return h(t, g);
          })(o, e, a, c, r, d, u, p, s, l);
        if (h && m) {
          const t = ea(r, e, Ut(g.crop));
          (g.crop.x += 0.5 * g.crop.width),
            (g.crop.y += 0.5 * g.crop.height),
            (g.crop.x -= 0.5 * t.width),
            (g.crop.y -= 0.5 * t.height),
            (g.crop.width = t.width),
            (g.crop.height = t.height);
        }
        return (
          i(() => {
            t.crop = oe(g.crop, (t) => Eo(t, 8));
          }),
          g.rotation
        );
      }),
    ],
    ["flipX", jr(() => !1)],
    ["flipY", jr(() => !1)],
    [
      "flip",
      Nr(({ flipX: t, flipY: e }) => [[t, e], ([t, e]) => ({ x: t, y: e })]),
    ],
    [
      "isRotatedSideways",
      Hr(({ rotation: t }) => [[t], ([t], e) => e(j(t)), (t, e) => t !== e]),
    ],
    [
      "crop",
      Vr((t) => (e, o = e) => {
        const {
          loadState: i,
          size: n,
          cropMinSize: r,
          cropMaxSize: a,
          cropLimitToImage: s,
          cropAspectRatio: l,
          rotation: c,
          perspective: d,
        } = t;
        if ((!e && !o) || !i || !i.beforeComplete) return e;
        e || (e = Ft(ea(n, c, l || Ut(n))));
        const u = oa(o, e, n, c, d, s, r, a);
        return oe(u.crop, (t) => Eo(t, 8));
      }),
    ],
    [
      "cropAspectRatio",
      Vr((t) => (e, o) => {
        const {
            loadState: i,
            crop: n,
            size: r,
            rotation: a,
            cropLimitToImage: s,
          } = t,
          l = ((t) => {
            if (t) {
              if (/:/.test(t)) {
                const [e, o] = t.split(":");
                return e / o;
              }
              return parseFloat(t);
            }
          })(e);
        if (!l) return;
        if (!n || !i || !i.beforeComplete) return l;
        const c = o ? Math.abs(e - o) : 1;
        if (ua(n, r, a) && s && c >= 0.1) {
          const o = ((t, e) => {
            const o = t.width,
              i = t.height;
            return j(e) && ((t.width = i), (t.height = o)), t;
          })(gt(r), a);
          t.crop = oe(Qt(Ft(o), e), Eo);
        } else {
          const e = { width: n.height * l, height: n.height },
            o = 0.5 * (n.width - e.width),
            i = 0.5 * (n.height - e.height);
          t.crop = oe(Wt(n.x + o, n.y + i, e.width, e.height), Eo);
        }
        return l;
      }),
    ],
    ["cropOrigin"],
    ["cropMinSize", jr(() => ({ width: 1, height: 1 }))],
    ["cropMaxSize", jr(() => ({ width: 32768, height: 32768 }))],
    [
      "cropLimitToImage",
      jr(() => !0),
      Vr((t) => (e, o, i) => {
        const { crop: n } = t;
        return n ? (!o && e && i(() => (t.crop = It(t.crop))), e) : e;
      }),
    ],
    [
      "cropSize",
      Hr(({ crop: t }) => [
        [t],
        ([t], e) => {
          t && e(xt(t.width, t.height));
        },
        (t, e) => vt(t, e),
      ]),
    ],
    [
      "cropRectAspectRatio",
      Nr(({ cropSize: t }) => [
        [t],
        ([t], e) => {
          t && e(Eo(Ut(t), 5));
        },
      ]),
    ],
    [
      "cropRange",
      Hr(
        ({
          size: t,
          rotation: e,
          cropRectAspectRatio: o,
          cropMinSize: i,
          cropMaxSize: n,
          cropLimitToImage: r,
        }) => [
          [t, e, o, i, n, r],
          ([t, e, o, i, n, r], a) => {
            if (!t) return;
            a(
              ((t, e, o, i, n, r) => {
                const a = gt(i),
                  s = gt(n);
                return r ? [a, Mt(ea(t, e, o), Math.round)] : [a, s];
              })(t, e, o, i, n, r)
            );
          },
          (t, e) => la(t, e),
        ]
      ),
    ],
    [
      "rotationRange",
      Hr(
        ({
          size: t,
          isRotatedSideways: e,
          cropMinSize: o,
          cropSize: i,
          cropLimitToImage: n,
        }) => [
          [t, e, o, i, n],
          ([t, e, o, i, n], r) => {
            if (!t || !i) return;
            r(pa(t, e, o, i, n));
          },
          (t, e) => la(t, e),
        ]
      ),
    ],
    [
      "backgroundColor",
      Vr(
        () => (t) =>
          ((t = [0, 0, 0, 0], e = 1) => (4 === t.length ? t : [...t, e]))(t)
      ),
    ],
    ["targetSize"],
    ["colorMatrix"],
    ["convolutionMatrix"],
    ["gamma"],
    ["noise"],
    ["vignette"],
    ["redaction", Ur(({ size: t }) => [ha, { context: t }])],
    ["annotation", Ur(({ size: t }) => [ha, { context: t }])],
    ["decoration", Ur(({ crop: t }) => [ha, { context: t }])],
    [
      "frame",
      Vr(() => (t) => {
        if (!t) return;
        const e = {
          frameStyle: void 0,
          x: 0,
          y: 0,
          width: "100%",
          height: "100%",
          disableStyle: ["backgroundColor", "strokeColor", "strokeWidth"],
        };
        return w(t) ? (e.frameStyle = t) : Object.assign(e, t), e;
      }),
    ],
    ["metadata"],
    [
      "state",
      ((t) => ({ store: t }))((t, e, o) => {
        const i = ra.map((t) => e[t]);
        let n = !1;
        const r = Wr({}),
          { subscribe: a } = _r([...i, r], (t, e) => {
            if (n) return;
            const o = ra.reduce((e, o, i) => ((e[o] = aa(t[i])), e), {});
            o.crop && oe(o.crop, Math.round),
              (o.redaction = o.redaction && sa(o.redaction)),
              (o.annotation = o.annotation && sa(o.annotation)),
              (o.decoration = o.decoration && sa(o.decoration)),
              e(o);
          }),
          s = (t) => {
            t &&
              ((n = !0),
              (o.cropOrigin = void 0),
              ra
                .filter((e) => Je(t, e))
                .forEach((e) => {
                  o[e] = aa(t[e]);
                }),
              (n = !1),
              r.set({}));
          };
        return { set: s, update: (t) => s(t(null)), subscribe: a };
      }),
    ],
  ],
  ga = async (t, e, o = {}, i) => {
    const { ontaskstart: n, ontaskprogress: r, ontaskend: a, token: s } = i;
    let l = !1;
    s.cancel = () => {
      l = !0;
    };
    for (const [i, s] of e.entries()) {
      if (l) return;
      const [e, c] = s;
      n(i, c);
      try {
        t = await e(t, { ...o }, (t) => r(i, c, t));
      } catch (t) {
        throw ((l = !0), t);
      }
      a(i, c);
    }
    return t;
  };
const fa = [
    "loadstart",
    "loadabort",
    "loaderror",
    "loadprogress",
    "load",
    "processstart",
    "processabort",
    "processerror",
    "processprogress",
    "process",
  ],
  $a = [
    "flip",
    "cropOrigin",
    "isRotatedSideways",
    "perspective",
    "perspectiveX",
    "perspectiveY",
    "cropRange",
  ],
  ya = ["images"],
  ba = ma.map(([t]) => t).filter((t) => !$a.includes(t)),
  xa = (t) => "image" + Gr(t),
  va = (t) => Je(t, "crop");
var wa = () => {
  const { stores: t, accessors: e } = Xr(Yr),
    { sub: o, pub: i } = ho(),
    r = () => (e.images ? e.images[0] : {});
  let a = {};
  const s = {};
  ba.forEach((t) => {
    Object.defineProperty(e, xa(t), {
      get: () => {
        const e = r();
        if (e) return e.accessors[t];
      },
      set: (e) => {
        (a[xa(t)] = e), (s[xa(t)] = e);
        const o = r();
        o && (o.accessors[t] = e);
      },
    });
  });
  const l = () => e.images && e.images[0],
    c = t.src.subscribe((t) => {
      if (!t) return (e.images = []);
      e.imageReader && (e.images.length && (a = {}), u(t));
    }),
    d = t.imageReader.subscribe((t) => {
      t && (e.images.length || (e.src && u(e.src)));
    }),
    u = (t) => {
      Promise.resolve()
        .then(() => h(t, a))
        .catch(() => {});
    };
  let p;
  const h = (t, o = {}) =>
    new Promise((r, c) => {
      let d = l();
      const u = !(
          !1 === o.cropLimitToImage ||
          !1 === o.imageCropLimitToImage ||
          !1 === s.imageCropLmitedToImage
        ),
        h = o.cropMinSize || o.imageCropMinSize || s.imageCropMinSize,
        m = u ? h : d && d.accessors.cropMinSize;
      d && g(),
        (d = (({ minSize: t = { width: 1, height: 1 } } = {}) => {
          const { stores: e, accessors: o } = Xr(ma),
            { pub: i, sub: r } = ho(),
            a = (t, e) => {
              const n = () => o[t] || {},
                r = (e) => (o[t] = { ...n(), ...e, timeStamp: Date.now() }),
                a = () => n().error,
                s = (t) => {
                  a() || (r({ error: t }), i(e + "error", { ...n() }));
                };
              return {
                start() {
                  i(e + "start");
                },
                onabort() {
                  r({ abort: !0 }), i(e + "abort", { ...n() });
                },
                ontaskstart(t, o) {
                  a() ||
                    (r({
                      index: t,
                      task: o,
                      taskProgress: void 0,
                      taskLengthComputable: void 0,
                    }),
                    i(e + "taskstart", { ...n() }));
                },
                ontaskprogress(t, o, s) {
                  a() ||
                    (r({
                      index: t,
                      task: o,
                      taskProgress: s.loaded / s.total,
                      taskLengthComputable: s.lengthComputable,
                    }),
                    i(e + "taskprogress", { ...n() }),
                    i(e + "progress", { ...n() }));
                },
                ontaskend(t, o) {
                  a() ||
                    (r({ index: t, task: o }), i(e + "taskend", { ...n() }));
                },
                ontaskerror(t) {
                  s(t);
                },
                error(t) {
                  s(t);
                },
                beforeComplete(t) {
                  a() || (r({ beforeComplete: !0 }), i("before" + e, t));
                },
                complete(t) {
                  a() || (r({ complete: !0 }), i(e, t));
                },
              };
            };
          return (
            qr(o, {
              read: (e, { reader: i }) => {
                if (!i) return;
                Object.assign(o, {
                  file: void 0,
                  size: void 0,
                  loadState: void 0,
                });
                let r = { cancel: n },
                  s = !1;
                const l = a("loadState", "load"),
                  c = { token: r, ...l },
                  d = { src: e, size: void 0, dest: void 0 },
                  u = {};
                return (
                  Promise.resolve().then(async () => {
                    try {
                      if ((l.start(), s)) return l.onabort();
                      const e = await ga(d, i, u, c);
                      if (s) return l.onabort();
                      const { size: n, dest: a } = e || {};
                      if (!n || !n.width || !n.height)
                        throw new Pe(
                          "Image size missing",
                          "IMAGE_SIZE_MISSING",
                          e
                        );
                      if (n.width < t.width || n.height < t.height)
                        throw new Pe("Image too small", "IMAGE_TOO_SMALL", {
                          ...e,
                          minWidth: t.width,
                          minHeight: t.height,
                        });
                      Object.assign(o, { size: n, file: a }),
                        l.beforeComplete(e),
                        l.complete(e);
                    } catch (t) {
                      l.error(t);
                    } finally {
                      r = void 0;
                    }
                  }),
                  () => {
                    (s = !0), r && r.cancel(), l.onabort();
                  }
                );
              },
              write: (t, e) => {
                if (!o.loadState.complete) return;
                o.processState = void 0;
                const i = a("processState", "process"),
                  r = { src: o.file, imageState: o.state, dest: void 0 };
                if (!t) return i.start(), void i.complete(r);
                let s = { cancel: n },
                  l = !1;
                const c = e,
                  d = { token: s, ...i };
                return (
                  Promise.resolve().then(async () => {
                    try {
                      if ((i.start(), l)) return i.onabort();
                      const e = await ga(r, t, c, d);
                      i.complete(e);
                    } catch (t) {
                      i.error(t);
                    } finally {
                      s = void 0;
                    }
                  }),
                  () => {
                    (l = !0), s && s.cancel();
                  }
                );
              },
              on: r,
            }),
            { accessors: o, stores: e }
          );
        })({ minSize: m })),
        fa.map((t) => {
          return d.accessors.on(t, ((e = t), (t) => i(e, t)));
          var e;
        });
      const f = () => {
          (a = {}), $.forEach((t) => t());
        },
        $ = [];
      $.push(
        d.accessors.on("loaderror", (t) => {
          f(), c(t);
        })
      ),
        $.push(
          d.accessors.on("loadabort", () => {
            f(), c({ name: "AbortError" });
          })
        ),
        $.push(
          d.accessors.on("load", (t) => {
            (p = void 0), f(), r(t);
          })
        ),
        $.push(
          d.accessors.on("beforeload", () =>
            ((t, o) => {
              if (va(o)) return void (e.imageState = o);
              if (!o.imageCrop) {
                const e = t.accessors.size,
                  i = o.imageRotation || 0,
                  n = Ft(kt(gt(e), i)),
                  r =
                    o.imageCropAspectRatio ||
                    (o.imageCropLimitToImage ? Ut(e) : Ut(n)),
                  a = Qt(n, r);
                o.imageCropLimitToImage ||
                  ((a.x = (e.width - a.width) / 2),
                  (a.y = (e.height - a.height) / 2)),
                  (o.imageCrop = a);
              }
              const i = [
                "imageCropLimitToImage",
                "imageCrop",
                "imageCropAspectRatio",
                "imageRotation",
              ];
              i.filter((t) => Je(o, t)).forEach((t) => {
                (e[t] = o[t]), delete o[t];
              });
              const n = Object.keys(o)
                .filter((t) => !i.includes(t))
                .reduce((t, e) => ((t[e] = o[e]), t), {});
              Object.assign(e, n);
            })(d, o)
          )
        ),
        (e.images = [d]),
        o.imageReader && (e.imageReader = o.imageReader),
        o.imageWriter && (e.imageWriter = o.imageWriter),
        (p = d.accessors.read(t, { reader: e.imageReader }));
    });
  let m;
  const g = () => {
    const t = l();
    t && (p && p(), (t.accessors.loadState = void 0), (e.images = []));
  };
  return (
    Object.defineProperty(e, "stores", { get: () => t }),
    qr(e, {
      on: o,
      loadImage: h,
      abortLoadImage: () => {
        p && p(), (e.images = []);
      },
      editImage: (t, o) =>
        new Promise((i, n) => {
          h(t, o)
            .then(() => {
              const { images: t } = e,
                o = t[0],
                r = () => {
                  a(), s();
                },
                a = o.accessors.on("processerror", (t) => {
                  r(), n(t);
                }),
                s = o.accessors.on("process", (t) => {
                  r(), i(t);
                });
            })
            .catch(n);
        }),
      removeImage: g,
      processImage: (t, o) =>
        new Promise((i, n) => {
          try {
            const r = [],
              a = () => {
                (m = void 0), r.forEach((t) => t());
              };
            (async () => {
              ((t) => w(t) || ro(t) || ue(t))(t)
                ? await h(t, o)
                : t && (va(t) ? (e.imageState = t) : Object.assign(e, t));
              const s = l();
              if (!s) return n("no image");
              r.push(
                s.accessors.on("processerror", (t) => {
                  a(), n(t);
                })
              ),
                r.push(
                  s.accessors.on("processabort", () => {
                    a(), n({ name: "AbortError" });
                  })
                ),
                r.push(
                  s.accessors.on("process", (t) => {
                    a(), i(t);
                  })
                ),
                (m = s.accessors.write(e.imageWriter, {
                  shapePreprocessor: e.shapePreprocessor || W,
                  imageScrambler: e.imageScrambler,
                  willRequestResource: e.willRequestResource,
                }));
            })();
          } catch (t) {
            n(t);
          }
        }),
      abortProcessImage: () => {
        const t = l();
        t && (m && m(), (t.accessors.processState = void 0));
      },
      destroy: () => {
        c(), d();
      },
    }),
    e
  );
};
const Sa = (t, e) => {
  const { processImage: o } = wa();
  return o(t, e);
};
var ka = () => {
    if (!be()) return 1 / 0;
    const t = /15_/.test(navigator.userAgent);
    return ze() ? (t ? 14745600 : 16777216) : t ? 16777216 : 1 / 0;
  },
  Ca = (t, e) =>
    Object.keys(t)
      .filter((t) => !e.includes(t))
      .reduce((e, o) => ((e[o] = t[o]), e), {});
const Ma =
    ({ imageDataResizer: t, canvasMemoryLimit: e } = {}) =>
    async (o, i, n, r) => {
      (n.width = Math.max(n.width, 1)),
        (n.height = Math.max(n.height, 1)),
        (r.width = Math.max(r.width, 1)),
        (r.height = Math.max(r.height, 1));
      const { dest: a } = await Sa(i, {
        imageReader: Ja(),
        imageWriter: Qa({
          format: "canvas",
          targetSize: { ...r, upscale: !0 },
          imageDataResizer: t,
          canvasMemoryLimit: e,
        }),
        imageCrop: n,
      });
      o.drawImage(a, r.x, r.y, r.width, r.height), g(a);
    },
  Ta =
    (t, e = (...t) => t, o) =>
    async (i, n, r) => {
      r(Se(0, !1));
      let a = !1;
      const s = await t(
        ...e(i, n, (t) => {
          (a = !0), r(t);
        })
      );
      return o && o(i, s), a || r(Se(1, !1)), i;
    },
  Pa = ({ srcProp: t = "src", destProp: e = "dest" } = {}) => [
    Ta(
      Ae,
      (e, o, i) => [e[t], i],
      (t, o) => (t[e] = o)
    ),
    "any-to-file",
  ],
  Ra = ({ srcProp: t = "src", destProp: e = "size" } = {}) => [
    Ta(
      ve,
      (e) => [e[t]],
      (t, o) => (t[e] = o)
    ),
    "read-image-size",
  ],
  Aa = ({
    srcSize: t = "size",
    srcOrientation: e = "orientation",
    destSize: o = "size",
  } = {}) => [
    Ta(
      Be,
      (o) => [o[t], o[e]],
      (t, e) => (t[o] = e)
    ),
    "image-size-match-orientation",
  ],
  Ea = ({ srcProp: t = "src", destProp: e = "head" } = {}) => [
    Ta(
      (t, e) => (Oe(t) ? a(t, e) : void 0),
      (e) => [e[t], [0, 131072], onprogress],
      (t, o) => (t[e] = o)
    ),
    "read-image-head",
  ],
  Ia = ({ srcProp: t = "head", destProp: e = "orientation" } = {}) => [
    Ta(
      o,
      (e) => [e[t], 274],
      (t, o = 1) => (t[e] = o)
    ),
    "read-exif-orientation-tag",
  ],
  La = ({ srcProp: t = "head" } = {}) => [
    Ta(o, (e) => [e[t], 274, 1]),
    "clear-exif-orientation-tag",
  ],
  Fa = ({
    srcImageSize: t = "size",
    srcCanvasSize: e = "imageData",
    srcImageState: o = "imageState",
    destImageSize: i = "size",
    destScalar: n = "scalar",
  } = {}) => [
    Ta(
      (t, e) => [Math.min(e.width / t.width, e.height / t.height), ft(e)],
      (i) => [i[t], i[e], i[o]],
      (t, [e, o]) => {
        (t[n] = e), (t[i] = o);
      }
    ),
    "calculate-canvas-scalar",
  ],
  za = ({
    srcProp: t = "src",
    destProp: e = "imageData",
    canvasMemoryLimit: o,
  }) => [
    Ta(
      A,
      (e) => [e[t], o],
      (t, o) => (t[e] = o)
    ),
    "blob-to-image-data",
  ],
  Ba = ({
    srcImageData: t = "imageData",
    srcOrientation: e = "orientation",
  } = {}) => [
    Ta(
      y,
      (o) => [o[t], o[e]],
      (t, e) => (t.imageData = e)
    ),
    "image-data-match-orientation",
  ],
  Oa = ({
    srcImageData: t = "imageData",
    srcImageState: e = "imageState",
  } = {}) => [
    Ta(
      qi,
      (o) => [o[t], { backgroundColor: o[e].backgroundColor }],
      (t, e) => (t.imageData = e)
    ),
    "image-data-fill",
  ],
  Da = ({
    srcImageData: t = "imageData",
    srcImageState: e = "imageState",
    destScalar: o = "scalar",
  } = {}) => [
    Ta(
      _e,
      (i) => {
        const n = i[o];
        let { crop: r } = i[e];
        return (
          r && 1 !== n && (r = Vt(It(r), n, U())),
          [
            i[t],
            {
              crop: r,
              rotation: i[e].rotation,
              flipX: i[e].flipX,
              flipY: i[e].flipY,
            },
          ]
        );
      },
      (t, e) => (t.imageData = e)
    ),
    "image-data-crop",
  ],
  Wa = ({
    targetSize: t = {
      width: void 0,
      height: void 0,
      fit: void 0,
      upscale: void 0,
    },
    imageDataResizer: e,
    srcProp: o = "imageData",
    srcImageState: i = "imageState",
    destImageScaledSize: n = "imageScaledSize",
  }) => [
    Ta(
      je,
      (n) => {
        const r = Math.min(
            t.width || Number.MAX_SAFE_INTEGER,
            (n[i].targetSize && n[i].targetSize.width) ||
              Number.MAX_SAFE_INTEGER
          ),
          a = Math.min(
            t.height || Number.MAX_SAFE_INTEGER,
            (n[i].targetSize && n[i].targetSize.height) ||
              Number.MAX_SAFE_INTEGER
          );
        return [
          n[o],
          {
            width: r,
            height: a,
            fit: t.fit || "contain",
            upscale:
              ((s = n[i]),
              !!(
                (s.targetSize && s.targetSize.width) ||
                (s.targetSize && s.targetSize.height)
              ) ||
                t.upscale ||
                !1),
          },
          e,
        ];
        var s;
      },
      (t, e) => {
        vt(t.imageData, e) || (t[n] = ft(e)), (t.imageData = e);
      }
    ),
    "image-data-resize",
  ],
  _a = ({
    srcImageData: t = "imageData",
    srcImageState: e = "imageState",
    destImageData: o = "imageData",
  } = {}) => [
    Ta(
      Ge,
      (o) => {
        const { colorMatrix: i } = o[e],
          n =
            i &&
            Object.keys(i)
              .map((t) => i[t])
              .filter(Boolean);
        return [
          o[t],
          {
            colorMatrix: n && Ki(n),
            convolutionMatrix: o[e].convolutionMatrix,
            gamma: o[e].gamma,
            noise: o[e].noise,
            vignette: o[e].vignette,
          },
        ];
      },
      (t, e) => (t[o] = e)
    ),
    "image-data-filter",
  ],
  Za = ({
    srcImageData: t = "imageData",
    srcImageState: e = "imageState",
    destImageData: o = "imageData",
    destScalar: i = "scalar",
  } = {}) => [
    Ta(
      async (t, e, o, i, n) => {
        if (!e) return t;
        let r;
        try {
          const n = { dataSizeScalar: Ji(t, i) };
          o && o[3] > 0 && (n.backgroundColor = [...o]), (r = await e(t, n));
        } catch (t) {}
        const a = h("canvas");
        (a.width = t.width), (a.height = t.height);
        const s = a.getContext("2d");
        s.putImageData(t, 0, 0);
        const l = new Path2D();
        i.forEach((t) => {
          const e = Wt(t.x, t.y, t.width, t.height);
          jt(e, n);
          const o = Gt(It(e), t.rotation),
            i = new Path2D();
          o.forEach((t, e) => {
            if (0 === e) return i.moveTo(t.x, t.y);
            i.lineTo(t.x, t.y);
          }),
            l.addPath(i);
        }),
          s.clip(l, "nonzero"),
          (s.imageSmoothingEnabled = !1),
          s.drawImage(r, 0, 0, a.width, a.height),
          g(r);
        const c = s.getImageData(0, 0, a.width, a.height);
        return g(a), c;
      },
      (o, { imageScrambler: n }) => [
        o[t],
        n,
        o[e].backgroundColor,
        o[e].redaction,
        o[i],
      ],
      (t, e) => (t[o] = e)
    ),
    "image-data-redact",
  ],
  Va = ({
    srcImageData: t = "imageData",
    srcSize: e = "size",
    srcImageState: o = "imageState",
    destImageData: i = "imageData",
    destImageScaledSize: n = "imageScaledSize",
    destScalar: r = "scalar",
    imageDataResizer: a,
    canvasMemoryLimit: s,
  } = {}) => [
    Ta(
      Gi,
      (i, { shapePreprocessor: l, willRequestResource: c }) => {
        const { annotation: d } = i[o];
        if (!d.length) return [i[t]];
        const u = i[r],
          { crop: p } = i[o],
          h = i[e];
        let m = u;
        const g = i[n];
        g && (m = Math.min(g.width / p.width, g.height / p.height));
        const f = { width: h.width / u, height: h.height / u };
        return [
          i[t],
          {
            shapes: d,
            computeShape: (t) => (
              (t = Si(t, f)),
              (t = Ca(t, ["left", "right", "top", "bottom"])),
              (t = Ei(t, m))
            ),
            transform: (t) => {
              const a = i[e],
                { rotation: s = 0, flipX: l, flipY: c } = i[o],
                d = i[r],
                { crop: u = Ft(a) } = i[o],
                p = i[n],
                h = p ? Math.min(p.width / u.width, p.height / u.height) : 1,
                m = { width: (a.width / d) * h, height: (a.height / d) * h },
                g = ((t, e) => {
                  const o = Ft(t),
                    i = _t(o),
                    n = Gt(o, e, i);
                  return ne(Bt(n));
                })(m, s),
                f = g.width,
                $ = g.height,
                y = 0.5 * m.width - 0.5 * f,
                b = 0.5 * m.height - 0.5 * $,
                x = St(m);
              t.translate(-y, -b),
                t.translate(-u.x * h, -u.y * h),
                t.translate(x.x, x.y),
                t.rotate(s),
                t.translate(-x.x, -x.y),
                t.scale(l ? -1 : 1, c ? -1 : 1),
                t.translate(l ? -m.width : 0, c ? -m.height : 0),
                t.rect(0, 0, m.width, m.height),
                t.clip();
            },
            drawImage: Ma({ imageDataResizer: a, canvasMemoryLimit: s }),
            preprocessShape: (t) => l(t, { isPreview: !1 }),
            canvasMemoryLimit: s,
            willRequestResource: c,
          },
        ];
      },
      (t, e) => (t[i] = e)
    ),
    "image-data-annotate",
  ],
  ja = ({
    srcImageData: t = "imageData",
    srcImageState: e = "imageState",
    destImageData: o = "imageData",
    destImageScaledSize: i = "imageScaledSize",
    imageDataResizer: n,
    canvasMemoryLimit: r,
    destScalar: a = "scalar",
  } = {}) => [
    Ta(
      Gi,
      (o, { shapePreprocessor: s, willRequestResource: l }) => {
        const { decoration: c } = o[e];
        if (!c.length) return [o[t]];
        let d = o[a];
        const { crop: u } = o[e],
          p = o[i];
        if (p) {
          const t = Math.min(p.width / u.width, p.height / u.height);
          d = t;
        }
        return [
          o[t],
          {
            shapes: c,
            drawImage: Ma({ imageDataResizer: n, canvasMemoryLimit: r }),
            computeShape: (t) => (
              (t = Si(t, u)),
              (t = Ca(t, ["left", "right", "top", "bottom"])),
              (t = Ei(t, d))
            ),
            preprocessShape: (t) => s(t, { isPreview: !1 }),
            canvasMemoryLimit: r,
            willRequestResource: l,
          },
        ];
      },
      (t, e) => (t[o] = e)
    ),
    "image-data-decorate",
  ],
  Na = ({
    srcImageData: t = "imageData",
    srcImageState: e = "imageState",
    destImageData: o = "imageData",
    destImageScaledSize: i = "imageScaledSize",
    imageDataResizer: n,
    canvasMemoryLimit: r,
    destScalar: a = "scalar",
  } = {}) => [
    Ta(
      Gi,
      (o, { shapePreprocessor: s, willRequestResource: l }) => {
        const c = o[e].frame;
        if (!c) return [o[t]];
        const d = o[a];
        let { crop: u } = o[e];
        u && 1 !== d && (u = Vt(It(u), d, U()));
        const p = { ...u },
          h = Pi(Ri(c, p, s), p);
        (p.x = Math.abs(h.left)),
          (p.y = Math.abs(h.top)),
          (p.width += Math.abs(h.left) + Math.abs(h.right)),
          (p.height += Math.abs(h.top) + Math.abs(h.bottom));
        const m = o[i],
          g = m ? Math.min(m.width / u.width, m.height / u.height) : 1;
        return (
          jt(p, g),
          (p.x = Math.floor(p.x)),
          (p.y = Math.floor(p.y)),
          (p.width = Math.floor(p.width)),
          (p.height = Math.floor(p.height)),
          [
            o[t],
            {
              shapes: [c],
              contextBounds: p,
              computeShape: (e) => Si(e, o[t]),
              transform: (t) => {
                t.translate(p.x, p.y);
              },
              drawImage: Ma({ imageDataResizer: n, canvasMemoryLimit: r }),
              preprocessShape: (t) => s(t, { isPreview: !1 }),
              canvasMemoryLimit: r,
              willRequestResource: l,
            },
          ]
        );
      },
      (t, e) => (t[o] = e)
    ),
    "image-data-frame",
  ],
  Ha = ({
    mimeType: t,
    quality: e,
    srcImageData: o = "imageData",
    srcFile: i = "src",
    destBlob: n = "blob",
  } = {}) => [
    Ta(
      I,
      (n) => [n[o], t || B(n[i].name) || n[i].type, e],
      (t, e) => (t[n] = e)
    ),
    "image-data-to-blob",
  ],
  Ua = ({
    srcImageData: t = "imageData",
    srcOrientation: e = "orientation",
    destCanvas: o = "dest",
  } = {}) => [
    Ta(
      $,
      (o) => [o[t], o[e]],
      (t, e) => (t[o] = e)
    ),
    "image-data-to-canvas",
  ],
  Xa = async (t, o) => {
    if (!Oe(t) || !o) return t;
    const i = new DataView(o),
      n = e(i);
    if (!n || !n.exif) return t;
    const { exif: r } = n;
    return ((t, e, o = [0, t.size]) =>
      e ? new Blob([e, t.slice(...o)], { type: t.type }) : t)(
      t,
      o.slice(0, r.offset + r.size + 2),
      [20]
    );
  },
  Ya = (t = "blob", e = "head", o = "blob") => [
    Ta(
      Xa,
      (o) => [o[t], o[e]],
      (t, e) => (t[o] = e)
    ),
    "blob-write-image-head",
  ],
  Ga = ({
    renameFile: t,
    srcBlob: e = "blob",
    srcFile: o = "src",
    destFile: i = "dest",
    defaultFilename: n,
  } = {}) => [
    Ta(
      O,
      (i) => [i[e], t ? t(i[o]) : i[o].name || `${n}.${L(i[e].type)}`],
      (t, e) => (t[i] = e)
    ),
    "blob-to-file",
  ],
  qa = ({
    url: t = "./",
    dataset: e = (t) => [
      ["dest", t.dest, t.dest.name],
      ["imageState", t.imageState],
    ],
    destStore: o = "store",
  }) => [
    Ta(
      async (e, o) =>
        await ((t, e, o) =>
          new Promise((i, r) => {
            const { token: a = {}, beforeSend: s = n, onprogress: l = n } = o;
            a.cancel = () => c.abort();
            const c = new XMLHttpRequest();
            (c.upload.onprogress = l),
              (c.onload = () =>
                c.status >= 200 && c.status < 300 ? i(c) : r(c)),
              (c.onerror = () => r(c)),
              (c.ontimeout = () => r(c)),
              c.open("POST", encodeURI(t)),
              s(c),
              c.send(
                e instanceof FormData
                  ? e
                  : e.reduce(
                      (t, e) => (t.append(...e.map(De)), t),
                      new FormData()
                    )
              );
          }))(t, e, { onprogress: o }),
      (t, o, i) => [e(t), i],
      (t, e) => (t[o] = e)
    ),
    "store",
  ],
  Ka = (t) => [
    Ta((e) =>
      t && t.length
        ? (Object.keys(e).forEach((o) => {
            t.includes(o) || delete e[o];
          }),
          e)
        : e
    ),
    "prop-filter",
  ],
  Ja = (t = {}) => {
    const {
      orientImage: e = !0,
      outputProps: o = ["src", "dest", "size"],
      preprocessImageFile: i,
    } = t;
    return [
      Pa(),
      i && [
        Ta(
          i,
          (t, e, o) => [t.dest, e, o],
          (t, e) => (t.dest = e)
        ),
        "preprocess-image-file",
      ],
      Ra({ srcProp: "dest" }),
      e && Ea({ srcProp: "dest" }),
      e && Ia(),
      e && Aa(),
      Ka(o),
    ].filter(Boolean);
  },
  Qa = (t = {}) => {
    const {
      canvasMemoryLimit: e = ka(),
      orientImage: o = !0,
      copyImageHead: i = !0,
      mimeType: n,
      quality: r,
      renameFile: a,
      targetSize: s,
      imageDataResizer: l,
      store: c,
      format: d = "file",
      outputProps: u = ["src", "dest", "imageState", "store"],
      preprocessImageSource: p,
      preprocessImageState: h,
      postprocessImageData: m,
      postprocessImageBlob: g,
    } = t;
    return [
      p && [
        Ta(
          p,
          (t, e, o) => [t.src, e, o, t.imageState],
          (t, e) => (t.src = e)
        ),
        "preprocess-image-source",
      ],
      (o || i) && Ea(),
      o && Ia(),
      Ra(),
      h && [
        Ta(
          h,
          (t, e, o) => [t.imageState, e, o],
          (t, e) => (t.imageState = e)
        ),
        "preprocess-image-state",
      ],
      za({ canvasMemoryLimit: e }),
      o && Aa(),
      o && Ba(),
      Fa(),
      Za(),
      Da(),
      Wa({ imageDataResizer: l, targetSize: s }),
      _a(),
      Oa(),
      Va({ imageDataResizer: l, canvasMemoryLimit: e }),
      ja({ imageDataResizer: l, canvasMemoryLimit: e }),
      Na({ imageDataResizer: l, canvasMemoryLimit: e }),
      m && [
        Ta(
          m,
          (t, e, o) => [t.imageData, e, o],
          (t, e) => (t.imageData = e)
        ),
        "postprocess-image-data",
      ],
      "file" === d
        ? Ha({ mimeType: n, quality: r })
        : "canvas" === d
        ? Ua()
        : [(t) => ((t.dest = t.imageData), t)],
      "file" === d && o && La(),
      "file" === d && i && Ya(),
      g && [
        Ta(
          g,
          ({ blob: t, imageData: e, src: o }, i, n) => [
            { blob: t, imageData: e, src: o },
            i,
            n,
          ],
          (t, e) => (t.blob = e)
        ),
        "postprocess-image-file",
      ],
      "file" === d && Ga({ defaultFilename: "image", renameFile: a }),
      "file" === d
        ? c && (w(c) ? qa({ url: c }) : S(c) ? [c, "store"] : qa(c))
        : S(c) && [c, "store"],
      Ka(u),
    ].filter(Boolean);
  };
var ts = (t, e) => {
  const { imageData: o, amount: i = 1 } = t,
    n = Math.round(2 * Math.max(1, i)),
    r = Math.round(0.5 * n),
    a = o.width,
    s = o.height,
    l = new Uint8ClampedArray(a * s * 4),
    c = o.data;
  let d,
    u,
    p,
    h,
    m,
    g = 0,
    f = 0,
    $ = 0;
  const y = a * s * 4 - 4;
  for (p = 0; p < s; p++)
    for (
      d = crypto.getRandomValues(new Uint8ClampedArray(s)), u = 0;
      u < a;
      u++
    )
      (h = d[p] / 255),
        (f = 0),
        ($ = 0),
        h < 0.5 && (f = 4 * (-r + Math.round(Math.random() * n))),
        h > 0.5 && ($ = (-r + Math.round(Math.random() * n)) * (4 * a)),
        (m = Math.min(Math.max(0, g + f + $), y)),
        (l[g] = c[m]),
        (l[g + 1] = c[m + 1]),
        (l[g + 2] = c[m + 2]),
        (l[g + 3] = c[m + 3]),
        (g += 4);
  e(null, { data: l, width: o.width, height: o.height });
};
const es = [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625];
function os(t) {
  return Math.sqrt(1 - --t * t);
}
function is(t) {
  return "[object Date]" === Object.prototype.toString.call(t);
}
function ns(t, e) {
  if (t === e || t != t) return () => t;
  const o = typeof t;
  if (o !== typeof e || Array.isArray(t) !== Array.isArray(e))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(t)) {
    const o = e.map((e, o) => ns(t[o], e));
    return (t) => o.map((e) => e(t));
  }
  if ("object" === o) {
    if (!t || !e) throw new Error("Object cannot be null");
    if (is(t) && is(e)) {
      t = t.getTime();
      const o = (e = e.getTime()) - t;
      return (e) => new Date(t + e * o);
    }
    const o = Object.keys(e),
      i = {};
    return (
      o.forEach((o) => {
        i[o] = ns(t[o], e[o]);
      }),
      (t) => {
        const e = {};
        return (
          o.forEach((o) => {
            e[o] = i[o](t);
          }),
          e
        );
      }
    );
  }
  if ("number" === o) {
    const o = e - t;
    return (e) => t + e * o;
  }
  throw new Error(`Cannot interpolate ${o} values`);
}
function rs(t, e = {}) {
  const o = Wr(t);
  let i,
    n = t;
  function r(r, a) {
    if (null == t) return o.set((t = r)), Promise.resolve();
    n = r;
    let s = i,
      l = !1,
      {
        delay: c = 0,
        duration: d = 400,
        easing: u = tn,
        interpolate: p = ns,
      } = en(en({}, e), a);
    if (0 === d)
      return s && (s.abort(), (s = null)), o.set((t = n)), Promise.resolve();
    const h = bn() + c;
    let m;
    return (
      (i = Sn((e) => {
        if (e < h) return !0;
        l || ((m = p(t, r)), "function" == typeof d && (d = d(t, r)), (l = !0)),
          s && (s.abort(), (s = null));
        const i = e - h;
        return i > d ? (o.set((t = r)), !1) : (o.set((t = m(u(i / d)))), !0);
      })),
      i.promise
    );
  }
  return { set: r, update: (e, o) => r(e(n, t), o), subscribe: o.subscribe };
}
function as(t, e, o, i) {
  if ("number" == typeof o) {
    const n = i - o,
      r = (o - e) / (t.dt || 1 / 60),
      a = (r + (t.opts.stiffness * n - t.opts.damping * r) * t.inv_mass) * t.dt;
    return Math.abs(a) < t.opts.precision && Math.abs(n) < t.opts.precision
      ? i
      : ((t.settled = !1), o + a);
  }
  if (Qe(o)) return o.map((n, r) => as(t, e[r], o[r], i[r]));
  if ("object" == typeof o) {
    const n = {};
    for (const r in o) n[r] = as(t, e[r], o[r], i[r]);
    return n;
  }
  throw new Error(`Cannot spring ${typeof o} values`);
}
function ss(t, e = {}) {
  const o = Wr(t),
    { stiffness: i = 0.15, damping: n = 0.8, precision: r = 0.01 } = e;
  let a,
    s,
    l,
    c = t,
    d = t,
    u = 1,
    p = 0,
    h = !1;
  function m(e, i = {}) {
    d = e;
    const n = (l = {});
    if (null == t || i.hard || (g.stiffness >= 1 && g.damping >= 1))
      return (h = !0), (a = null), (c = e), o.set((t = d)), Promise.resolve();
    if (i.soft) {
      const t = !0 === i.soft ? 0.5 : +i.soft;
      (p = 1 / (60 * t)), (u = 0);
    }
    if (!s) {
      (a = null), (h = !1);
      const e = { inv_mass: void 0, opts: g, settled: !0, dt: void 0 };
      s = Sn((i) => {
        if ((null === a && (a = i), h)) return (h = !1), (s = null), !1;
        (u = Math.min(u + p, 1)),
          (e.inv_mass = u),
          (e.opts = g),
          (e.settled = !0),
          (e.dt = (60 * (i - a)) / 1e3);
        const n = as(e, c, t, d);
        return (
          (a = i), (c = t), o.set((t = n)), e.settled && (s = null), !e.settled
        );
      });
    }
    return new Promise((t) => {
      s.promise.then(() => {
        n === l && t();
      });
    });
  }
  const g = {
    set: m,
    update: (e, o) => m(e(d, t), o),
    subscribe: o.subscribe,
    stiffness: i,
    damping: n,
    precision: r,
  };
  return g;
}
var ls = Dr(!1, (t) => {
  const e = window.matchMedia("(prefers-reduced-motion:reduce)");
  t(e.matches), (e.onchange = () => t(e.matches));
});
const cs = Lt(),
  ds = (t, e, o, i, n) => {
    t.rect || (t.rect = Lt());
    const r = t.rect;
    Xt(cs, e, o, i, n),
      Ht(r, cs) ||
        (Yt(r, cs), t.dispatchEvent(new CustomEvent("measure", { detail: r })));
  },
  us = Math.round,
  ps = (t) => {
    const e = t.getBoundingClientRect();
    ds(t, us(e.x), us(e.y), us(e.width), us(e.height));
  },
  hs = (t) => ds(t, t.offsetLeft, t.offsetTop, t.offsetWidth, t.offsetHeight),
  ms = [];
let gs,
  fs = null;
function $s() {
  ms.length
    ? (ms.forEach((t) => t.measure(t)), (fs = requestAnimationFrame($s)))
    : (fs = null);
}
let ys = 0;
var bs = (t, e = {}) => {
    const {
      observePosition: o = !1,
      observeViewRect: i = !1,
      once: n = !1,
      disabled: r = !1,
    } = e;
    if (!r)
      return !("ResizeObserver" in window) || o || i
        ? ((t.measure = i ? ps : hs),
          ms.push(t),
          fs || (fs = requestAnimationFrame($s)),
          t.measure(t),
          {
            destroy() {
              const e = ms.indexOf(t);
              ms.splice(e, 1), delete t.measure;
            },
          })
        : (gs ||
            (gs = new ResizeObserver((t) => {
              t.forEach((t) => hs(t.target));
            })),
          gs.observe(t),
          hs(t),
          n ? gs.unobserve(t) : ys++,
          {
            destroy() {
              n ||
                (gs.unobserve(t),
                ys--,
                0 === ys && (gs.disconnect(), (gs = void 0)));
            },
          });
  },
  xs = (t) => {
    let e = !1;
    const o = {
      pointerdown: () => {
        e = !1;
      },
      keydown: () => {
        e = !0;
      },
      keyup: () => {
        e = !1;
      },
      focus: (t) => {
        e && (t.target.dataset.focusVisible = "");
      },
      blur: (t) => {
        delete t.target.dataset.focusVisible;
      },
    };
    return (
      Object.keys(o).forEach((e) => t.addEventListener(e, o[e], !0)),
      {
        destroy() {
          Object.keys(o).forEach((e) => t.removeEventListener(e, o[e], !0));
        },
      }
    );
  };
const vs = async (t) =>
  new Promise((e) => {
    if ("file" === t.kind) return e(t.getAsFile());
    t.getAsString(e);
  });
var ws = (t, e = {}) => {
  const o = (t) => {
      t.preventDefault();
    },
    i = async (o) => {
      o.preventDefault(), o.stopPropagation();
      try {
        const i = await ((t) =>
          new Promise((e, o) => {
            const { items: i } = t.dataTransfer;
            if (!i) return e([]);
            Promise.all(Array.from(i).map(vs))
              .then((t) => {
                e(t.filter((t) => (ro(t) && ke(t)) || /^http/.test(t)));
              })
              .catch(o);
          }))(o);
        t.dispatchEvent(
          new CustomEvent("dropfiles", {
            detail: { event: o, resources: i },
            ...e,
          })
        );
      } catch (t) {}
    };
  return (
    t.addEventListener("drop", i),
    t.addEventListener("dragover", o),
    {
      destroy() {
        t.removeEventListener("drop", i), t.removeEventListener("dragover", o);
      },
    }
  );
};
let Ss = null;
var ks = () => {
    if (null === Ss)
      if ("WebGL2RenderingContext" in window) {
        let t;
        try {
          (t = h("canvas")), (Ss = !!t.getContext("webgl2"));
        } catch (t) {
          Ss = !1;
        }
        t && g(t), (t = void 0);
      } else Ss = !1;
    return Ss;
  },
  Cs = (t, e) =>
    ks()
      ? t.getContext("webgl2", e)
      : t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
let Ms = null;
var Ts = () => {
    if (null === Ms)
      if (c()) {
        const t = h("canvas");
        (Ms = !Cs(t, { failIfMajorPerformanceCaveat: !0 })), g(t);
      } else Ms = !1;
    return Ms;
  },
  Ps = (t) => 0 == (t & (t - 1)),
  Rs = (t, e = {}, o = "", i = "") =>
    Object.keys(e)
      .filter((t) => !b(e[t]))
      .reduce((t, n) => t.replace(new RegExp(o + n + i), e[n]), t);
const As = {
    head: "#version 300 es\n\nin vec4 aPosition;uniform mat4 uMatrix;",
    text: "\nin vec2 aTexCoord;out vec2 vTexCoord;",
    matrix: "\ngl_Position=uMatrix*vec4(aPosition.x,aPosition.y,0,1);",
  },
  Es = {
    head: "#version 300 es\nprecision highp float;\n\nout vec4 fragColor;",
    mask: "\nuniform float uMaskFeather[8];uniform float uMaskBounds[4];uniform float uMaskOpacity;float mask(float x,float y,float bounds[4],float opacity){return 1.0-(1.0-(smoothstep(bounds[3],bounds[3]+1.0,x)*(1.0-smoothstep(bounds[1]-1.0,bounds[1],x))*(1.0-step(bounds[0],y))*step(bounds[2],y)))*(1.0-opacity);}",
    init: "\nfloat a=1.0;vec4 fillColor=uColor;vec4 textureColor=texture(uTexture,vTexCoord);textureColor*=(1.0-step(1.0,vTexCoord.y))*step(0.0,vTexCoord.y)*(1.0-step(1.0,vTexCoord.x))*step(0.0,vTexCoord.x);",
    colorize:
      "\nif(uTextureColor.a!=0.0&&textureColor.a>0.0){vec3 colorFlattened=textureColor.rgb/textureColor.a;if(colorFlattened.r>=.9999&&colorFlattened.g==0.0&&colorFlattened.b>=.9999){textureColor.rgb=uTextureColor.rgb*textureColor.a;}textureColor*=uTextureColor.a;}",
    maskapply:
      "\nfloat m=mask(gl_FragCoord.x,gl_FragCoord.y,uMaskBounds,uMaskOpacity);",
    maskfeatherapply:
      "\nfloat leftFeatherOpacity=step(uMaskFeather[1],gl_FragCoord.x)*uMaskFeather[0]+((1.0-uMaskFeather[0])*smoothstep(uMaskFeather[1],uMaskFeather[3],gl_FragCoord.x));float rightFeatherOpacity=(1.0-step(uMaskFeather[7],gl_FragCoord.x))*uMaskFeather[4]+((1.0-uMaskFeather[4])*smoothstep(uMaskFeather[7],uMaskFeather[5],gl_FragCoord.x));a*=leftFeatherOpacity*rightFeatherOpacity;",
    edgeaa:
      "\nvec2 scaledPoint=vec2(vRectCoord.x*uSize.x,vRectCoord.y*uSize.y);a*=smoothstep(0.0,1.0,uSize.x-scaledPoint.x);a*=smoothstep(0.0,1.0,uSize.y-scaledPoint.y);a*=smoothstep(0.0,1.0,scaledPoint.x);a*=smoothstep(0.0,1.0,scaledPoint.y);",
    cornerradius:
      "\nvec2 s=(uSize-2.0)*.5;vec2 r=(vRectCoord*uSize);vec2 p=r-(uSize*.5);float cornerRadius=uCornerRadius[0];bool left=r.x<s.x;bool top=r.y<s.x;if(!left&&top){cornerRadius=uCornerRadius[1];}if(!left&&!top){cornerRadius=uCornerRadius[3];}if(left&&!top){cornerRadius=uCornerRadius[2];}a*=1.0-clamp(length(max(abs(p)-(s-cornerRadius),0.0))-cornerRadius,0.0,1.0);",
    fragcolor:
      "\nif(m<=0.0)discard;fillColor.a*=a;fillColor.rgb*=fillColor.a;fillColor.rgb*=m;fillColor.rgb+=(1.0-m)*(uCanvasColor.rgb*fillColor.a);textureColor*=uTextureOpacity;textureColor.a*=a;textureColor.rgb*=m*a;textureColor.rgb+=(1.0-m)*(uCanvasColor.rgb*textureColor.a);fragColor=textureColor+(fillColor*(1.0-textureColor.a));",
  },
  Is = (t, e, o) => {
    const i = t.createShader(o),
      n = ((t, e, o) => (
        (e = Rs(e, o === t.VERTEX_SHADER ? As : Es, "##").trim()),
        ks()
          ? e
          : ((e = (e = e.replace(/#version.+/gm, "").trim()).replace(
              /^\/\/\#/gm,
              "#"
            )),
            o === t.VERTEX_SHADER &&
              (e = e
                .replace(/in /gm, "attribute ")
                .replace(/out /g, "varying ")),
            o === t.FRAGMENT_SHADER &&
              (e = e
                .replace(/in /gm, "varying ")
                .replace(/out.*?;/gm, "")
                .replace(/texture\(/g, "texture2D(")
                .replace(/fragColor/g, "gl_FragColor")),
            "" + e)
      ))(t, e, o);
    return (
      t.shaderSource(i, n),
      t.compileShader(i),
      t.getShaderParameter(i, t.COMPILE_STATUS) ||
        console.error(t.getShaderInfoLog(i)),
      i
    );
  },
  Ls = (t, e, o, i, n) => {
    const r = Is(t, e, t.VERTEX_SHADER),
      a = Is(t, o, t.FRAGMENT_SHADER),
      s = t.createProgram();
    t.attachShader(s, r), t.attachShader(s, a), t.linkProgram(s);
    const l = {};
    return (
      i.forEach((e) => {
        l[e] = t.getAttribLocation(s, e);
      }),
      n.forEach((e) => {
        l[e] = t.getUniformLocation(s, e);
      }),
      {
        program: s,
        locations: l,
        destroy() {
          t.detachShader(s, r),
            t.detachShader(s, a),
            t.deleteShader(r),
            t.deleteShader(a),
            t.deleteProgram(s);
        },
      }
    );
  },
  Fs = (t) => !!ks() || (Ps(t.width) && Ps(t.height)),
  zs = (t, e, o, i) => (
    t.bindTexture(t.TEXTURE_2D, e),
    t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, o),
    ((t, e, o) => {
      t.texParameteri(
        t.TEXTURE_2D,
        t.TEXTURE_MIN_FILTER,
        Fs(e) ? t.LINEAR_MIPMAP_LINEAR : t.LINEAR
      ),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, o.filter),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
        Fs(e) && t.generateMipmap(t.TEXTURE_2D);
    })(t, o, i),
    t.bindTexture(t.TEXTURE_2D, null),
    e
  ),
  Bs = (t, e = 1) =>
    t ? [t[0], t[1], t[2], qe(t[3]) ? e * t[3] : e] : [0, 0, 0, 0],
  Os = () => {
    const t = new Float32Array(16);
    return (t[0] = 1), (t[5] = 1), (t[10] = 1), (t[15] = 1), t;
  },
  Ds = (t, e, o, i, n, r, a) => {
    const s = 1 / (e - o),
      l = 1 / (i - n),
      c = 1 / (r - a);
    (t[0] = -2 * s),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = -2 * l),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[10] = 2 * c),
      (t[11] = 0),
      (t[12] = (e + o) * s),
      (t[13] = (n + i) * l),
      (t[14] = (a + r) * c),
      (t[15] = 1);
  },
  Ws = (t, e, o, i) => {
    (t[12] = t[0] * e + t[4] * o + t[8] * i + t[12]),
      (t[13] = t[1] * e + t[5] * o + t[9] * i + t[13]),
      (t[14] = t[2] * e + t[6] * o + t[10] * i + t[14]),
      (t[15] = t[3] * e + t[7] * o + t[11] * i + t[15]);
  },
  _s = (t, e) => {
    (t[0] *= e),
      (t[1] *= e),
      (t[2] *= e),
      (t[3] *= e),
      (t[4] *= e),
      (t[5] *= e),
      (t[6] *= e),
      (t[7] *= e),
      (t[8] *= e),
      (t[9] *= e),
      (t[10] *= e),
      (t[11] *= e);
  },
  Zs = (t, e) => {
    const o = Math.sin(e),
      i = Math.cos(e),
      n = t[4],
      r = t[5],
      a = t[6],
      s = t[7],
      l = t[8],
      c = t[9],
      d = t[10],
      u = t[11];
    (t[4] = n * i + l * o),
      (t[5] = r * i + c * o),
      (t[6] = a * i + d * o),
      (t[7] = s * i + u * o),
      (t[8] = l * i - n * o),
      (t[9] = c * i - r * o),
      (t[10] = d * i - a * o),
      (t[11] = u * i - s * o);
  },
  Vs = (t, e) => {
    const o = Math.sin(e),
      i = Math.cos(e),
      n = t[0],
      r = t[1],
      a = t[2],
      s = t[3],
      l = t[8],
      c = t[9],
      d = t[10],
      u = t[11];
    (t[0] = n * i - l * o),
      (t[1] = r * i - c * o),
      (t[2] = a * i - d * o),
      (t[3] = s * i - u * o),
      (t[8] = n * o + l * i),
      (t[9] = r * o + c * i),
      (t[10] = a * o + d * i),
      (t[11] = s * o + u * i);
  },
  js = (t, e) => {
    const o = Math.sin(e),
      i = Math.cos(e),
      n = t[0],
      r = t[1],
      a = t[2],
      s = t[3],
      l = t[4],
      c = t[5],
      d = t[6],
      u = t[7];
    (t[0] = n * i + l * o),
      (t[1] = r * i + c * o),
      (t[2] = a * i + d * o),
      (t[3] = s * i + u * o),
      (t[4] = l * i - n * o),
      (t[5] = c * i - r * o),
      (t[6] = d * i - a * o),
      (t[7] = u * i - s * o);
  };
var Ns = (t) => (t * Math.PI) / 180;
const Hs = (t, e, o, i, n) => {
    const r = tt(X(i.x - o.x, i.y - o.y)),
      a = tt(X(n.x - i.x, n.y - i.y)),
      s = tt(X(r.x + a.x, r.y + a.y)),
      l = X(-s.y, s.x),
      c = X(-r.y, r.x),
      d = Math.min(1 / st(l, c), 5);
    (t[e] = i.x),
      (t[e + 1] = i.y),
      (t[e + 2] = l.x * d),
      (t[e + 3] = l.y * d),
      (t[e + 4] = -1),
      (t[e + 5] = i.x),
      (t[e + 6] = i.y),
      (t[e + 7] = l.x * d),
      (t[e + 8] = l.y * d),
      (t[e + 9] = 1);
  },
  Us = (t) => {
    const e = new Float32Array(8);
    return (
      (e[0] = t[3].x),
      (e[1] = t[3].y),
      (e[2] = t[0].x),
      (e[3] = t[0].y),
      (e[4] = t[2].x),
      (e[5] = t[2].y),
      (e[6] = t[1].x),
      (e[7] = t[1].y),
      e
    );
  },
  Xs = (t, e = 0, o, i) => {
    const n = ee(t),
      r = t.x + 0.5 * t.width,
      a = t.y + 0.5 * t.height;
    return (o || i) && pt(n, o, i, r, a), 0 !== e && ht(n, e, r, a), n;
  },
  Ys = (t, e, o, i, n) => {
    const r = Math.min(20, Math.max(4, Math.round(i / 2)));
    let a = 0,
      s = 0,
      l = 0,
      c = 0,
      d = 0;
    for (; d < r; d++)
      (a = d / r),
        (s = n * Z + a * Z),
        (l = i * Math.cos(s)),
        (c = i * Math.sin(s)),
        t.push(X(e + l, o + c));
  };
let Gs = null;
var qs = () => {
  if (null !== Gs) return Gs;
  let t = h("canvas");
  const e = Cs(t);
  return (
    (Gs = e ? e.getParameter(e.MAX_TEXTURE_SIZE) : void 0),
    g(t),
    (t = void 0),
    Gs
  );
};
let Ks = null;
const Js = new Float32Array([0, 1, 0, 0, 1, 1, 1, 0]),
  Qs = [0, 0, 0, 0, 1, 0, 0, 0, 0],
  tl = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  el = [0, 0, 0, 0],
  ol = [0, 0, 0, 0],
  il = (t, e, o, i, n) => {
    if (!o || !i) return Js;
    const r = i.x / o.width,
      a = i.y / o.height;
    let s = t / o.width / n,
      l = e / o.height / n;
    (s -= r), (l -= a);
    return new Float32Array([-r, l, -r, -a, s, l, s, -a]);
  };
var nl = (t) => {
  const e = { width: 0, height: 0 },
    o = { width: 0, height: 0 },
    i = qs() || 1024;
  let n, r;
  const a = Os(),
    s = Os();
  let l,
    c,
    d,
    u,
    p,
    h,
    m,
    f,
    $,
    y = 0,
    b = 0,
    x = 0;
  const v = new Map([]),
    w = () => {
      C.stencilOp(C.KEEP, C.KEEP, C.KEEP),
        C.stencilFunc(C.ALWAYS, 1, 255),
        C.stencilMask(255);
    },
    S = Ns(30),
    k = Math.tan(S / 2),
    C = Cs(t, {
      antialias: !1,
      alpha: !1,
      premultipliedAlpha: !0,
      stencil: !0,
    });
  if (!C) return;
  C.getExtension("OES_standard_derivatives"),
    C.disable(C.DEPTH_TEST),
    C.enable(C.STENCIL_TEST),
    C.enable(C.BLEND),
    C.blendFunc(C.ONE, C.ONE_MINUS_SRC_ALPHA),
    C.pixelStorei(
      C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
      (null === Ks && (Ks = Le(/Firefox/)), !Ks)
    ),
    w();
  const M = C.createTexture();
  C.bindTexture(C.TEXTURE_2D, M),
    C.texImage2D(
      C.TEXTURE_2D,
      0,
      C.RGBA,
      1,
      1,
      0,
      C.RGBA,
      C.UNSIGNED_BYTE,
      new Uint8Array(el)
    ),
    v.set(0, M);
  const T = C.createTexture();
  v.set(2, T);
  const P = C.createFramebuffer(),
    R = C.createTexture();
  v.set(1, R);
  const A = C.createFramebuffer(),
    E = Ls(
      C,
      "\n##head\n##text\nvoid main(){vTexCoord=aTexCoord;gl_Position=uMatrix*aPosition;}",
      "\n##head\nin vec2 vTexCoord;uniform sampler2D uTexture;uniform sampler2D uTextureOverlay;uniform sampler2D uTextureBlend;uniform vec2 uTextureSize;uniform float uOpacity;uniform vec4 uFillColor;uniform vec4 uOverlayColor;uniform mat4 uColorMatrix;uniform vec4 uColorOffset;uniform float uClarityKernel[9];uniform float uClarityKernelWeight;uniform float uColorGamma;uniform float uColorVignette;uniform float uMaskClip;uniform float uMaskOpacity;uniform float uMaskBounds[4];uniform float uMaskCornerRadius[4];uniform float uMaskFeather[8];vec4 applyGamma(vec4 c,float g){c.r=pow(c.r,g);c.g=pow(c.g,g);c.b=pow(c.b,g);return c;}vec4 applyColorMatrix(vec4 c,mat4 m,vec4 o){vec4 cM=(c*m)+o;cM*=cM.a;return cM;}vec4 applyConvolutionMatrix(vec4 c,float k0,float k1,float k2,float k3,float k4,float k5,float k6,float k7,float k8,float w){vec2 pixel=vec2(1)/uTextureSize;vec4 colorSum=texture(uTexture,vTexCoord-pixel)*k0+texture(uTexture,vTexCoord+pixel*vec2(0.0,-1.0))*k1+texture(uTexture,vTexCoord+pixel*vec2(1.0,-1.0))*k2+texture(uTexture,vTexCoord+pixel*vec2(-1.0,0.0))*k3+texture(uTexture,vTexCoord)*k4+texture(uTexture,vTexCoord+pixel*vec2(1.0,0.0))*k5+texture(uTexture,vTexCoord+pixel*vec2(-1.0,1.0))*k6+texture(uTexture,vTexCoord+pixel*vec2(0.0,1.0))*k7+texture(uTexture,vTexCoord+pixel)*k8;vec4 color=vec4((colorSum/w).rgb,c.a);color.rgb=clamp(color.rgb,0.0,1.0);return color;}vec4 applyVignette(vec4 c,vec2 pos,vec2 center,float v){float d=distance(pos,center)/length(center);float f=1.0-(d*abs(v));if(v>0.0){c.rgb*=f;}else if(v<0.0){c.rgb+=(1.0-f)*(1.0-c.rgb);}return c;}vec4 blendPremultipliedAlpha(vec4 back,vec4 front){return front+(back*(1.0-front.a));}void main(){float x=gl_FragCoord.x;float y=gl_FragCoord.y;float a=1.0;float maskTop=uMaskBounds[0];float maskRight=uMaskBounds[1];float maskBottom=uMaskBounds[2];float maskLeft=uMaskBounds[3];float leftFeatherOpacity=step(uMaskFeather[1],x)*uMaskFeather[0]+((1.0-uMaskFeather[0])*smoothstep(uMaskFeather[1],uMaskFeather[3],x));float rightFeatherOpacity=(1.0-step(uMaskFeather[7],x))*uMaskFeather[4]+((1.0-uMaskFeather[4])*smoothstep(uMaskFeather[7],uMaskFeather[5],x));a*=leftFeatherOpacity*rightFeatherOpacity;float overlayColorAlpha=(smoothstep(maskLeft,maskLeft+1.0,x)*(1.0-smoothstep(maskRight-1.0,maskRight,x))*(1.0-step(maskTop,y))*step(maskBottom,y));if(uOverlayColor.a==0.0){a*=overlayColorAlpha;}vec2 offset=vec2(maskLeft,maskBottom);vec2 size=vec2(maskRight-maskLeft,maskTop-maskBottom)*.5;vec2 center=offset.xy+size.xy;int pixelX=int(step(center.x,x));int pixelY=int(step(y,center.y));float cornerRadius=0.0;if(pixelX==0&&pixelY==0)cornerRadius=uMaskCornerRadius[0];if(pixelX==1&&pixelY==0)cornerRadius=uMaskCornerRadius[1];if(pixelX==0&&pixelY==1)cornerRadius=uMaskCornerRadius[2];if(pixelX==1&&pixelY==1)cornerRadius=uMaskCornerRadius[3];float cornerOffset=sign(cornerRadius)*length(max(abs(gl_FragCoord.xy-size-offset)-size+cornerRadius,0.0))-cornerRadius;float cornerOpacity=1.0-smoothstep(0.0,1.0,cornerOffset);a*=cornerOpacity;vec2 scaledPoint=vec2(vTexCoord.x*uTextureSize.x,vTexCoord.y*uTextureSize.y);a*=smoothstep(0.0,1.0,uTextureSize.x-scaledPoint.x);a*=smoothstep(0.0,1.0,uTextureSize.y-scaledPoint.y);a*=smoothstep(0.0,1.0,scaledPoint.x);a*=smoothstep(0.0,1.0,scaledPoint.y);vec4 color=texture(uTexture,vTexCoord);color=blendPremultipliedAlpha(color,texture(uTextureBlend,vTexCoord));if(uClarityKernelWeight!=-1.0){color=applyConvolutionMatrix(color,uClarityKernel[0],uClarityKernel[1],uClarityKernel[2],uClarityKernel[3],uClarityKernel[4],uClarityKernel[5],uClarityKernel[6],uClarityKernel[7],uClarityKernel[8],uClarityKernelWeight);}color=applyGamma(color,uColorGamma);color=applyColorMatrix(color,uColorMatrix,uColorOffset);color=blendPremultipliedAlpha(uFillColor,color);color*=a;if(uColorVignette!=0.0){vec2 pos=gl_FragCoord.xy-offset;color=applyVignette(color,pos,center-offset,uColorVignette);}color=blendPremultipliedAlpha(color,texture(uTextureOverlay,vTexCoord));vec4 overlayColor=uOverlayColor*(1.0-overlayColorAlpha);overlayColor.rgb*=overlayColor.a;color=blendPremultipliedAlpha(color,overlayColor);if(uOverlayColor.a>0.0&&color.a<1.0&&uFillColor.a>0.0){color=blendPremultipliedAlpha(uFillColor,overlayColor);}color*=uOpacity;fragColor=color;}",
      ["aPosition", "aTexCoord"],
      [
        "uMatrix",
        "uTexture",
        "uTextureBlend",
        "uTextureOverlay",
        "uTextureSize",
        "uColorGamma",
        "uColorVignette",
        "uColorOffset",
        "uColorMatrix",
        "uClarityKernel",
        "uClarityKernelWeight",
        "uOpacity",
        "uMaskOpacity",
        "uMaskBounds",
        "uMaskCornerRadius",
        "uMaskFeather",
        "uFillColor",
        "uOverlayColor",
      ]
    ),
    I = C.createBuffer(),
    L = C.createBuffer();
  C.bindBuffer(C.ARRAY_BUFFER, L),
    C.bufferData(C.ARRAY_BUFFER, Js, C.STATIC_DRAW);
  const F = Ls(
      C,
      "#version 300 es\n\nin vec4 aPosition;in vec2 aNormal;in float aMiter;out vec2 vNormal;out float vMiter;out float vWidth;uniform float uWidth;uniform mat4 uMatrix;void main(){vMiter=aMiter;vNormal=aNormal;vWidth=(uWidth*.5)+1.0;gl_Position=uMatrix*vec4(aPosition.x+(aNormal.x*vWidth*aMiter),aPosition.y+(aNormal.y*vWidth*aMiter),0,1);}",
      "\n##head\n##mask\nin vec2 vNormal;in float vMiter;in float vWidth;uniform float uWidth;uniform vec4 uColor;uniform vec4 uCanvasColor;void main(){vec4 fillColor=uColor;float m=mask(gl_FragCoord.x,gl_FragCoord.y,uMaskBounds,uMaskOpacity);if(m<=0.0)discard;fillColor.a*=clamp(smoothstep(vWidth-.5,vWidth-1.0,abs(vMiter)*vWidth),0.0,1.0);fillColor.rgb*=fillColor.a;fillColor.rgb*=m;fillColor.rgb+=(1.0-m)*(uCanvasColor.rgb*fillColor.a);fragColor=fillColor;}",
      ["aPosition", "aNormal", "aMiter"],
      [
        "uColor",
        "uCanvasColor",
        "uMatrix",
        "uWidth",
        "uMaskBounds",
        "uMaskOpacity",
      ]
    ),
    z = C.createBuffer(),
    B = (t, e, o, i = !1) => {
      const { program: n, locations: r } = F;
      C.useProgram(n),
        C.enableVertexAttribArray(r.aPosition),
        C.enableVertexAttribArray(r.aNormal),
        C.enableVertexAttribArray(r.aMiter);
      const a = ((t, e) => {
          let o,
            i,
            n,
            r = 0;
          const a = t.length,
            s = new Float32Array(10 * (e ? a + 1 : a)),
            l = t[0],
            c = t[a - 1];
          for (r = 0; r < a; r++)
            (o = t[r - 1]),
              (i = t[r]),
              (n = t[r + 1]),
              o || (o = e ? c : X(i.x + (i.x - n.x), i.y + (i.y - n.y))),
              n || (n = e ? l : X(i.x + (i.x - o.x), i.y + (i.y - o.y))),
              Hs(s, 10 * r, o, i, n);
          return e && Hs(s, 10 * a, c, l, t[1]), s;
        })(t, i),
        s = 5 * Float32Array.BYTES_PER_ELEMENT,
        c = 2 * Float32Array.BYTES_PER_ELEMENT,
        d = 4 * Float32Array.BYTES_PER_ELEMENT;
      C.uniform1f(r.uWidth, e),
        C.uniform4fv(r.uColor, o),
        C.uniformMatrix4fv(r.uMatrix, !1, l),
        C.uniform4f(r.uCanvasColor, y, b, x, 1),
        C.uniform1fv(r.uMaskBounds, m),
        C.uniform1f(r.uMaskOpacity, h),
        C.bindBuffer(C.ARRAY_BUFFER, z),
        C.bufferData(C.ARRAY_BUFFER, a, C.STATIC_DRAW),
        C.vertexAttribPointer(r.aPosition, 2, C.FLOAT, !1, s, 0),
        C.vertexAttribPointer(r.aNormal, 2, C.FLOAT, !1, s, c),
        C.vertexAttribPointer(r.aMiter, 1, C.FLOAT, !1, s, d),
        C.drawArrays(C.TRIANGLE_STRIP, 0, a.length / 5),
        C.disableVertexAttribArray(r.aPosition),
        C.disableVertexAttribArray(r.aNormal),
        C.disableVertexAttribArray(r.aMiter);
    },
    O = Ls(
      C,
      "\n##head\nvoid main(){\n##matrix\n}",
      "\n##head\n##mask\nuniform vec4 uColor;uniform vec4 uCanvasColor;void main(){vec4 fillColor=uColor;\n##maskapply\nfillColor.rgb*=fillColor.a;fillColor.rgb*=m;fillColor.rgb+=(1.0-m)*(uCanvasColor.rgb*fillColor.a);fragColor=fillColor;}",
      ["aPosition"],
      ["uColor", "uCanvasColor", "uMatrix", "uMaskBounds", "uMaskOpacity"]
    ),
    W = C.createBuffer(),
    _ = Ls(
      C,
      "\n##head\n##text\nin vec2 aRectCoord;out vec2 vRectCoord;void main(){vTexCoord=aTexCoord;vRectCoord=aRectCoord;\n##matrix\n}",
      "\n##head\n##mask\nin vec2 vTexCoord;in vec2 vRectCoord;uniform sampler2D uTexture;uniform vec4 uTextureColor;uniform float uTextureOpacity;uniform vec4 uColor;uniform float uCornerRadius[4];uniform vec2 uSize;uniform vec2 uPosition;uniform vec4 uCanvasColor;uniform int uInverted;void main(){\n##init\n##colorize\n##edgeaa\n##cornerradius\n##maskfeatherapply\nif(uInverted==1)a=1.0-a;\n##maskapply\n##fragcolor\n}",
      ["aPosition", "aTexCoord", "aRectCoord"],
      [
        "uTexture",
        "uColor",
        "uMatrix",
        "uCanvasColor",
        "uTextureColor",
        "uTextureOpacity",
        "uPosition",
        "uSize",
        "uMaskBounds",
        "uMaskOpacity",
        "uMaskFeather",
        "uCornerRadius",
        "uInverted",
      ]
    ),
    Z = C.createBuffer(),
    V = C.createBuffer(),
    j = C.createBuffer(),
    N = Ls(
      C,
      "\n##head\n##text\nout vec2 vTexCoordDouble;void main(){vTexCoordDouble=vec2(aTexCoord.x*2.0-1.0,aTexCoord.y*2.0-1.0);vTexCoord=aTexCoord;\n##matrix\n}",
      "\n##head\n##mask\nin vec2 vTexCoord;in vec2 vTexCoordDouble;uniform sampler2D uTexture;uniform float uTextureOpacity;uniform vec2 uRadius;uniform vec4 uColor;uniform int uInverted;uniform vec4 uCanvasColor;void main(){\n##init\nfloat ar=uRadius.x/uRadius.y;vec2 rAA=vec2(uRadius.x-1.0,uRadius.y-(1.0/ar));vec2 scaledPointSq=vec2((vTexCoordDouble.x*uRadius.x)*(vTexCoordDouble.x*uRadius.x),(vTexCoordDouble.y*uRadius.y)*(vTexCoordDouble.y*uRadius.y));float p=(scaledPointSq.x/(uRadius.x*uRadius.x))+(scaledPointSq.y/(uRadius.y*uRadius.y));float pAA=(scaledPointSq.x/(rAA.x*rAA.x))+(scaledPointSq.y/(rAA.y*rAA.y));a=smoothstep(1.0,p/pAA,p);if(uInverted==1)a=1.0-a;\n##maskapply\n##fragcolor\n}",
      ["aPosition", "aTexCoord"],
      [
        "uTexture",
        "uTextureOpacity",
        "uColor",
        "uCanvasColor",
        "uMatrix",
        "uRadius",
        "uInverted",
        "uMaskBounds",
        "uMaskOpacity",
      ]
    ),
    H = C.createBuffer(),
    U = C.createBuffer(),
    Y = new Map(),
    G = { 2: { width: 0, height: 0 }, 1: { width: 0, height: 0 } },
    q = (t, o, n, a = 1) => {
      const c = Math.min(
          Math.min(4096, i) / n.width,
          Math.min(4096, i) / n.height,
          a
        ),
        d = Math.floor(c * n.width),
        u = Math.floor(c * n.height);
      vt(n, G[t])
        ? C.bindFramebuffer(C.FRAMEBUFFER, o)
        : (C.bindTexture(C.TEXTURE_2D, v.get(t)),
          C.texImage2D(
            C.TEXTURE_2D,
            0,
            C.RGBA,
            d,
            u,
            0,
            C.RGBA,
            C.UNSIGNED_BYTE,
            null
          ),
          C.texParameteri(C.TEXTURE_2D, C.TEXTURE_MIN_FILTER, C.LINEAR),
          C.texParameteri(C.TEXTURE_2D, C.TEXTURE_WRAP_S, C.CLAMP_TO_EDGE),
          C.texParameteri(C.TEXTURE_2D, C.TEXTURE_WRAP_T, C.CLAMP_TO_EDGE),
          C.bindFramebuffer(C.FRAMEBUFFER, o),
          C.framebufferTexture2D(
            C.FRAMEBUFFER,
            C.COLOR_ATTACHMENT0,
            C.TEXTURE_2D,
            v.get(t),
            0
          ),
          (G[t] = n));
      const p = n.width * r,
        h = n.height * r;
      var m, g;
      Ds(s, 0, p, h, 0, -1, 1),
        Ws(s, 0, h, 0),
        (g = 1),
        ((m = s)[0] *= g),
        (m[1] *= g),
        (m[2] *= g),
        (m[3] *= g),
        ((t, e) => {
          (t[4] *= e), (t[5] *= e), (t[6] *= e), (t[7] *= e);
        })(s, -1),
        (l = s),
        C.viewport(0, 0, d, u),
        C.colorMask(!0, !0, !0, !0),
        C.clearColor(0, 0, 0, 0),
        C.clear(C.COLOR_BUFFER_BIT),
        ($ = [
          1,
          0,
          1,
          0,
          1,
          Math.max(e.width, n.width),
          1,
          Math.max(e.width, n.width),
        ]);
    },
    K = (t, e = !1) => {
      const { src: o } = Y.get(t);
      o instanceof HTMLCanvasElement && (e || o.dataset.retain || g(o)),
        Y.delete(t),
        C.deleteTexture(t);
    };
  return {
    drawPath: (t, e, o, i, n) => {
      t.length < 2 ||
        B(
          t.map((t) => ({ x: t.x * r, y: t.y * r })),
          e * r,
          Bs(o, n),
          i
        );
    },
    drawTriangle: (t, e = 0, o = !1, i = !1, n, a) => {
      if (!n) return;
      const s = t.map((t) => ({ x: t.x * r, y: t.y * r })),
        c = re(s);
      (o || i) && pt(s, o, i, c.x, c.y), ht(s, e, c.x, c.y);
      ((t, e) => {
        const { program: o, locations: i } = O;
        C.useProgram(o),
          C.enableVertexAttribArray(i.aPosition),
          C.uniform4fv(i.uColor, e),
          C.uniformMatrix4fv(i.uMatrix, !1, l),
          C.uniform1fv(i.uMaskBounds, m),
          C.uniform1f(i.uMaskOpacity, h),
          C.uniform4f(i.uCanvasColor, y, b, x, 1),
          C.bindBuffer(C.ARRAY_BUFFER, W),
          C.bufferData(C.ARRAY_BUFFER, t, C.STATIC_DRAW),
          C.vertexAttribPointer(i.aPosition, 2, C.FLOAT, !1, 0, 0),
          C.drawArrays(C.TRIANGLE_STRIP, 0, t.length / 2),
          C.disableVertexAttribArray(i.aPosition);
      })(
        ((t) => {
          const e = new Float32Array(6);
          return (
            (e[0] = t[0].x),
            (e[1] = t[0].y),
            (e[2] = t[1].x),
            (e[3] = t[1].y),
            (e[4] = t[2].x),
            (e[5] = t[2].y),
            e
          );
        })(s),
        Bs(n, a)
      );
    },
    drawRect: (
      t,
      e = 0,
      o = !1,
      i = !1,
      n,
      a,
      s,
      c,
      d,
      u,
      p,
      g,
      f,
      v,
      w,
      S
    ) => {
      const k = jt(It(t), r),
        T = n
          .map((e) =>
            ((t, e) =>
              Math.floor(
                na(t, 0, Math.min(0.5 * (e.width - 1), 0.5 * (e.height - 1)))
              ))(e || 0, t)
          )
          .map((t) => t * r);
      if (a || s) {
        const t = It(k);
        (t.x -= 0.5), (t.y -= 0.5), (t.width += 1), (t.height += 1);
        const n = Xs(t, e, o, i),
          p = Us(n);
        let g;
        w && ((g = Bs(w)), 0 === g[3] && (g[3] = 0.001)),
          ((t, e, o, i, n, a = M, s = 1, c = el, d = Js, u = $, p) => {
            const { program: g, locations: f } = _;
            C.useProgram(g),
              C.enableVertexAttribArray(f.aPosition),
              C.enableVertexAttribArray(f.aTexCoord),
              C.enableVertexAttribArray(f.aRectCoord),
              C.uniform4fv(f.uColor, n),
              C.uniform2fv(f.uSize, [e, o]),
              C.uniform2fv(f.uPosition, [t[2], t[3]]),
              C.uniform1i(f.uInverted, p ? 1 : 0),
              C.uniform1fv(f.uCornerRadius, i),
              C.uniform4f(f.uCanvasColor, y, b, x, 1),
              C.uniform1fv(
                f.uMaskFeather,
                u.map((t, e) => (e % 2 == 0 ? t : t * r))
              ),
              C.uniform1fv(f.uMaskBounds, m),
              C.uniform1f(f.uMaskOpacity, h),
              C.uniformMatrix4fv(f.uMatrix, !1, l),
              C.uniform1i(f.uTexture, 4),
              C.uniform4fv(f.uTextureColor, c),
              C.uniform1f(f.uTextureOpacity, s),
              C.activeTexture(C.TEXTURE0 + 4),
              C.bindTexture(C.TEXTURE_2D, a),
              C.bindBuffer(C.ARRAY_BUFFER, V),
              C.bufferData(C.ARRAY_BUFFER, d, C.STATIC_DRAW),
              C.vertexAttribPointer(f.aTexCoord, 2, C.FLOAT, !1, 0, 0),
              C.bindBuffer(C.ARRAY_BUFFER, j),
              C.bufferData(C.ARRAY_BUFFER, Js, C.STATIC_DRAW),
              C.vertexAttribPointer(f.aRectCoord, 2, C.FLOAT, !1, 0, 0),
              C.bindBuffer(C.ARRAY_BUFFER, Z),
              C.bufferData(C.ARRAY_BUFFER, t, C.STATIC_DRAW),
              C.vertexAttribPointer(f.aPosition, 2, C.FLOAT, !1, 0, 0),
              C.drawArrays(C.TRIANGLE_STRIP, 0, t.length / 2),
              C.disableVertexAttribArray(f.aPosition),
              C.disableVertexAttribArray(f.aTexCoord),
              C.disableVertexAttribArray(f.aRectCoord);
          })(
            p,
            t.width,
            t.height,
            T,
            Bs(a, f),
            s,
            f,
            g,
            u ? new Float32Array(u) : il(t.width, t.height, c, d, r),
            v,
            S
          );
      }
      p &&
        ((p = Math.min(p, k.width, k.height)),
        B(
          ((t, e, o, i, n, r, a, s) => {
            const l = [];
            if (r.every((t) => 0 === t))
              l.push(X(t, e), X(t + o, e), X(t + o, e + i), X(t, e + i));
            else {
              const [n, a, s, c] = r,
                d = t,
                u = t + o,
                p = e,
                h = e + i;
              l.push(X(d + n, p)),
                Ys(l, u - a, p + a, a, -1),
                l.push(X(u, p + a)),
                Ys(l, u - c, h - c, c, 0),
                l.push(X(u - c, h)),
                Ys(l, d + s, h - s, s, 1),
                l.push(X(d, h - s)),
                Ys(l, d + n, p + n, n, 2);
            }
            return (
              (a || s) && pt(l, a, s, t + 0.5 * o, e + 0.5 * i),
              n && ht(l, n, t + 0.5 * o, e + 0.5 * i),
              l
            );
          })(k.x, k.y, k.width, k.height, e, T, o, i),
          p * r,
          Bs(g, f),
          !0
        ));
    },
    drawEllipse: (t, e, o, i, n, a, s, c, d, u, p, g, f, $, v) => {
      const w = jt(Wt(t.x - e, t.y - o, 2 * e, 2 * o), r);
      if (s || c) {
        const t = It(w);
        (t.x -= 0.5), (t.y -= 0.5), (t.width += 1), (t.height += 1);
        const e = Xs(t, i, n, a);
        ((t, e, o, i, n = M, r = Js, a = 1, s = !1) => {
          const { program: c, locations: d } = N;
          C.useProgram(c),
            C.enableVertexAttribArray(d.aPosition),
            C.enableVertexAttribArray(d.aTexCoord),
            C.uniformMatrix4fv(d.uMatrix, !1, l),
            C.uniform2fv(d.uRadius, [0.5 * e, 0.5 * o]),
            C.uniform1i(d.uInverted, s ? 1 : 0),
            C.uniform4fv(d.uColor, i),
            C.uniform4f(d.uCanvasColor, y, b, x, 1),
            C.uniform1fv(d.uMaskBounds, m),
            C.uniform1f(d.uMaskOpacity, h),
            C.uniform1i(d.uTexture, 4),
            C.uniform1f(d.uTextureOpacity, a),
            C.activeTexture(C.TEXTURE0 + 4),
            C.bindTexture(C.TEXTURE_2D, n),
            C.bindBuffer(C.ARRAY_BUFFER, U),
            C.bufferData(C.ARRAY_BUFFER, r, C.STATIC_DRAW),
            C.vertexAttribPointer(d.aTexCoord, 2, C.FLOAT, !1, 0, 0),
            C.bindBuffer(C.ARRAY_BUFFER, H),
            C.bufferData(C.ARRAY_BUFFER, t, C.STATIC_DRAW),
            C.vertexAttribPointer(d.aPosition, 2, C.FLOAT, !1, 0, 0),
            C.drawArrays(C.TRIANGLE_STRIP, 0, t.length / 2),
            C.disableVertexAttribArray(d.aPosition),
            C.disableVertexAttribArray(d.aTexCoord);
        })(
          Us(e),
          t.width,
          t.height,
          Bs(s, $),
          c,
          p ? new Float32Array(p) : il(t.width, t.height, d, u, r),
          $,
          v
        );
      }
      g &&
        B(
          ((t, e, o, i, n, r, a) => {
            const s = 0.5 * Math.abs(o),
              l = 0.5 * Math.abs(i),
              c = Math.abs(o) + Math.abs(i),
              d = Math.max(20, Math.round(c / 6));
            return de(X(t + s, e + l), s, l, n, r, a, d);
          })(w.x, w.y, w.width, w.height, i, n, a),
          g * r,
          Bs(f, $),
          !0
        );
    },
    drawImage: (
      t,
      o,
      i,
      a,
      s,
      l,
      c,
      d,
      u,
      p,
      g = tl,
      $ = 1,
      y,
      b = 1,
      x = 0,
      w = f,
      M = ol,
      T = el,
      P = el,
      R = !1,
      A = !1
    ) => {
      const F = o.width * r,
        z = o.height * r,
        B = -0.5 * F,
        O = 0.5 * z,
        D = 0.5 * F,
        W = -0.5 * z,
        _ = new Float32Array([B, W, 0, B, O, 0, D, W, 0, D, O, 0]);
      C.bindBuffer(C.ARRAY_BUFFER, I),
        C.bufferData(C.ARRAY_BUFFER, _, C.STATIC_DRAW);
      const Z = (o.height / 2 / k) * (e.height / o.height) * -1;
      (s *= r), (l *= r), (i *= r), (a *= r);
      const { program: V, locations: j } = E,
        N = Os();
      ((t, e, o, i, n) => {
        const r = 1 / Math.tan(e / 2),
          a = 1 / (i - n);
        (t[0] = r / o),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = r),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = 0),
          (t[10] = (n + i) * a),
          (t[11] = -1),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 2 * n * i * a),
          (t[15] = 0);
      })(N, S, n, 1, 2 * -Z),
        Ws(N, s, -l, Z),
        Ws(N, i, -a, 0),
        js(N, -u),
        _s(N, p),
        Ws(N, -i, a, 0),
        Vs(N, d),
        Zs(N, c),
        C.useProgram(V),
        C.enableVertexAttribArray(j.aPosition),
        C.enableVertexAttribArray(j.aTexCoord),
        C.uniform1i(j.uTexture, 3),
        C.uniform2f(j.uTextureSize, o.width, o.height),
        C.activeTexture(C.TEXTURE0 + 3),
        C.bindTexture(C.TEXTURE_2D, t);
      const H = A ? 1 : 0,
        U = v.get(H);
      C.uniform1i(j.uTextureBlend, H),
        C.activeTexture(C.TEXTURE0 + H),
        C.bindTexture(C.TEXTURE_2D, U);
      const X = R ? 2 : 0,
        Y = v.get(X);
      let G;
      C.uniform1i(j.uTextureOverlay, X),
        C.activeTexture(C.TEXTURE0 + X),
        C.bindTexture(C.TEXTURE_2D, Y),
        C.bindBuffer(C.ARRAY_BUFFER, I),
        C.vertexAttribPointer(j.aPosition, 3, C.FLOAT, !1, 0, 0),
        C.bindBuffer(C.ARRAY_BUFFER, L),
        C.vertexAttribPointer(j.aTexCoord, 2, C.FLOAT, !1, 0, 0),
        C.uniformMatrix4fv(j.uMatrix, !1, N),
        C.uniform4fv(j.uOverlayColor, P),
        C.uniform4fv(j.uFillColor, T),
        !y || la(y, Qs)
          ? ((y = Qs), (G = -1))
          : ((G = y.reduce((t, e) => t + e, 0)), (G = G <= 0 ? 1 : G)),
        C.uniform1fv(j.uClarityKernel, y),
        C.uniform1f(j.uClarityKernelWeight, G),
        C.uniform1f(j.uColorGamma, 1 / b),
        C.uniform1f(j.uColorVignette, x),
        C.uniform4f(j.uColorOffset, g[4], g[9], g[14], g[19]),
        C.uniformMatrix4fv(j.uColorMatrix, !1, [
          g[0],
          g[1],
          g[2],
          g[3],
          g[5],
          g[6],
          g[7],
          g[8],
          g[10],
          g[11],
          g[12],
          g[13],
          g[15],
          g[16],
          g[17],
          g[18],
        ]),
        C.uniform1f(j.uOpacity, $),
        C.uniform1f(j.uMaskOpacity, h),
        C.uniform1fv(j.uMaskBounds, m),
        C.uniform1fv(
          j.uMaskCornerRadius,
          M.map((t) => t * r)
        ),
        C.uniform1fv(
          j.uMaskFeather,
          w.map((t, e) => (e % 2 == 0 ? t : t * r))
        ),
        C.drawArrays(C.TRIANGLE_STRIP, 0, 4),
        C.disableVertexAttribArray(j.aPosition),
        C.disableVertexAttribArray(j.aTexCoord);
    },
    textureFilterNearest: C.NEAREST,
    textureFilterLinear: C.LINEAR,
    textureCreate: () => C.createTexture(),
    textureUpdate: (t, e, o) => (
      Y.set(t, { src: e, options: o }), zs(C, t, e, o)
    ),
    textureGetSize: (t) => {
      const { src: e, options: o } = Y.get(t),
        i = ft(e);
      return o.scalar ? Mt(i, (t) => t / o.scalar) : i;
    },
    textureDelete: K,
    enablePreviewStencil: () => {
      C.stencilOp(C.KEEP, C.KEEP, C.REPLACE),
        C.stencilFunc(C.ALWAYS, 1, 255),
        C.stencilMask(255);
    },
    applyPreviewStencil: () => {
      C.stencilFunc(C.EQUAL, 1, 255), C.stencilMask(0);
    },
    disablePreviewStencil: w,
    setCanvasColor(t) {
      (y = t[0]), (b = t[1]), (x = t[2]), C.clear(C.COLOR_BUFFER_BIT);
    },
    resetCanvasMatrix: () => {
      Ds(a, 0, e.width, e.height, 0, -1, 1);
    },
    updateCanvasMatrix(t, o, i, n, s) {
      const l = t.width,
        c = t.height,
        d = e.width * (0.5 / r),
        u = e.height * (0.5 / r),
        p = { x: d + (i.x + o.x), y: u + (i.y + o.y) },
        h = { x: p.x - o.x, y: p.y - o.y },
        m = 0.5 * l,
        g = 0.5 * c;
      J(h, s.z, p), dt(h, n, p);
      Ws(a, (h.x - m) * r, (h.y - g) * r, 0),
        Ws(a, m * r, g * r, 0),
        js(a, s.z);
      const f = s.x > Math.PI / 2;
      Zs(a, f ? Math.PI : 0);
      const $ = s.y > Math.PI / 2;
      Vs(a, $ ? Math.PI : 0), _s(a, n), Ws(a, -m * r, -g * r, 0);
    },
    drawToCanvas() {
      C.bindFramebuffer(C.FRAMEBUFFER, null),
        (l = a),
        C.viewport(0, 0, C.drawingBufferWidth, C.drawingBufferHeight),
        C.colorMask(!0, !0, !0, !1),
        C.clearColor(y, b, x, 1),
        C.clear(C.COLOR_BUFFER_BIT),
        ($ = [1, 0, 1, 0, 1, e.width, 1, e.width]);
    },
    drawToImageBlendBuffer(t, e) {
      q(1, A, t, e);
    },
    drawToImageOverlayBuffer(t, e) {
      q(2, P, t, e);
    },
    enableMask(t, o) {
      const i = t.x * r,
        n = t.y * r,
        a = t.width * r,
        s = t.height * r;
      (p = i),
        (d = p + a),
        (c = e.height - n),
        (u = e.height - (n + s)),
        (h = 1 - o),
        (m = [c, d, u, p]);
    },
    disableMask() {
      (p = 0),
        (d = e.width),
        (c = e.height),
        (u = 0),
        (h = 1),
        (m = [c, d, u, p]);
    },
    resize: (i, s, l) => {
      (r = l),
        (o.width = i),
        (o.height = s),
        (e.width = i * r),
        (e.height = s * r),
        (n = D(e.width, e.height)),
        (t.width = e.width),
        (t.height = e.height),
        Ds(a, 0, e.width, e.height, 0, -1, 1),
        (f = [1, 0, 1, 0, 1, o.width, 1, o.width]);
    },
    release() {
      Array.from(Y.keys()).forEach((t) => K(t, !0)),
        Y.clear(),
        v.forEach((t) => {
          C.deleteTexture(t);
        }),
        v.clear(),
        E.destroy(),
        F.destroy(),
        O.destroy(),
        _.destroy(),
        N.destroy(),
        (t.width = 1),
        (t.height = 1),
        (t = void 0);
    },
  };
};
function rl(t) {
  let e, o, i, n;
  return {
    c() {
      (e = Tn("div")), (o = Tn("canvas")), zn(e, "class", "PinturaCanvas");
    },
    m(r, a) {
      Cn(r, e, a),
        kn(e, o),
        t[27](o),
        i || ((n = [In(o, "measure", t[28]), $n(bs.call(null, o))]), (i = !0));
    },
    p: Qi,
    i: Qi,
    o: Qi,
    d(o) {
      o && Mn(e), t[27](null), (i = !1), rn(n);
    },
  };
}
function al(t, e, o) {
  let i, r, a, s, l, c, d;
  const u = (t, e) => {
      const [o, i, n] = t,
        [r, a, s, l] = e;
      return [r * l + o * (1 - l), a * l + i * (1 - l), s * l + n * (1 - l), 1];
    },
    p = Kn();
  let m,
    { animate: g } = e,
    { maskRect: $ } = e,
    { maskOpacity: y = 1 } = e,
    { maskFrameOpacity: b = 0.95 } = e,
    { pixelRatio: x = 1 } = e,
    { textPixelRatio: v = x } = e,
    { backgroundColor: S } = e,
    { willRender: k = W } = e,
    { didRender: C = W } = e,
    { willRequestResource: M = () => !0 } = e,
    { loadImageData: T = W } = e,
    { images: P = [] } = e,
    { interfaceImages: R = [] } = e,
    A = null,
    E = null,
    I = null;
  const L = (t, e) => t.set(e, { hard: !g }),
    F = { precision: 1e-4 * 0.01 },
    z = rs(void 0, { duration: 250 });
  dn(t, z, (t) => o(23, (a = t)));
  const B = ss(1, F);
  dn(t, B, (t) => o(24, (s = t)));
  const O = ss(1, F);
  dn(t, O, (t) => o(38, (d = t)));
  const _ = Wr();
  dn(t, _, (t) => o(36, (l = t)));
  const Z = Wr();
  dn(t, Z, (t) => o(37, (c = t)));
  const V = () =>
      requestAnimationFrame(() => {
        (et = !0), r();
      }),
    j = new Map([]),
    N = new Map([]),
    H = (t, e) => {
      if (!j.has(t)) {
        j.set(t, t);
        const o =
          "pixelated" === e ? A.textureFilterNearest : A.textureFilterLinear;
        if (!w(t) && ("close" in t || f(t) || Ii(t))) {
          const e = A.textureCreate();
          A.textureUpdate(e, t, { filter: o }), j.set(t, e);
        } else
          T(t)
            .then((e) => {
              const i = A.textureCreate();
              A.textureUpdate(i, e, { filter: o }), j.set(t, i), V();
            })
            .catch((t) => {
              console.error(t);
            });
      }
      return j.get(t);
    },
    G = (t) => {
      if (!t.text.length) return void N.delete(t.id);
      let {
        text: e,
        textAlign: o,
        fontFamily: i,
        fontSize: n,
        fontWeight: r,
        fontVariant: a,
        fontStyle: s,
        lineHeight: l,
        width: c,
        height: d,
      } = t;
      const { lastCharPosition: u, textSize: p } = ((t = "", e) => {
          const {
              width: o = 0,
              height: i = "auto",
              fontSize: n,
              fontFamily: r,
              lineHeight: a,
              fontWeight: s,
              fontStyle: l,
              fontVariant: c,
            } = e,
            d = lo({
              text: t,
              fontFamily: r,
              fontWeight: s,
              fontStyle: l,
              fontVariant: c,
              fontSize: n,
              lineHeight: a,
              width: o,
              height: i,
            });
          let u = $o.get(d);
          if (u) return u;
          const p = h("span"),
            m = $e(
              h(
                "pre",
                {
                  contenteditable: "true",
                  spellcheck: "false",
                  style: `pointer-events:none;visibility:hidden;position:absolute;left:0;top:0;${go(
                    {
                      fontFamily: r,
                      fontWeight: s,
                      fontStyle: l,
                      fontVariant: c,
                      fontSize: n,
                      lineHeight: a,
                    }
                  )};${fo(e)}"`,
                  innerHTML: t,
                },
                [p]
              )
            ),
            g = m.getBoundingClientRect(),
            f = p.getBoundingClientRect();
          return (
            (u = { textSize: ft(g), lastCharPosition: it(Y(f), Math.round) }),
            $o.set(d, u),
            m.remove(),
            u
          );
        })(e, t),
        m = lo({
          text: e,
          textAlign: o,
          fontFamily: i,
          fontSize: n,
          fontWeight: r,
          fontVariant: a,
          fontStyle: s,
          lineHeight: l,
          height: d ? Math.min(u.y, Math.ceil(d / l) * l) : "auto",
          xOffset: u.x,
          yOffset: u.y,
        });
      if (!j.has(m)) {
        j.set(m, e);
        const u = c && Math.round(c),
          h = d && Math.round(d),
          g = Math.ceil(p.width),
          f = Math.ceil(p.height / l) * l;
        if (0 === g || 0 === f) return;
        const $ = qs(),
          y = Math.min(1, ($ - mo * v * 2) / (g * v), $ / (f * v));
        Ao(e, {
          fontSize: n,
          fontFamily: i,
          fontWeight: r,
          fontVariant: a,
          fontStyle: s,
          textAlign: o,
          lineHeight: l,
          width: u,
          height: h,
          imageWidth: g,
          imageHeight: f,
          pixelRatio: v * y,
          willRequestResource: M,
          color: [1, 0, 1],
        })
          .then((e) => {
            const o = A.textureCreate();
            A.textureUpdate(o, e, { filter: A.textureFilterLinear, scalar: y }),
              j.set(m, o),
              N.set(t.id, o),
              V();
          })
          .catch(console.error);
      }
      const g = j.get(m);
      return q(g) ? g : N.get(t.id);
    },
    q = (t) => t instanceof WebGLTexture,
    K = ({
      data: t,
      size: e,
      origin: o,
      translation: i,
      rotation: n,
      scale: r,
      colorMatrix: s,
      opacity: l,
      convolutionMatrix: c,
      gamma: d,
      vignette: p,
      maskFeather: h,
      maskCornerRadius: m,
      backgroundColor: g,
      overlayColor: f,
      enableOverlay: $,
      enableBlend: y,
    }) => {
      g && g[3] < 1 && g[3] > 0 && (g = u(a, g));
      const b = H(t);
      return (
        A.drawImage(
          b,
          e,
          o.x,
          o.y,
          i.x,
          i.y,
          n.x,
          n.y,
          n.z,
          r,
          s,
          na(l, 0, 1),
          c,
          d,
          p,
          h,
          m,
          g,
          f,
          $,
          y
        ),
        b
      );
    },
    J = ([t, e, o, i]) => [i.x, i.y, t.x, t.y, o.x, o.y, e.x, e.y],
    Q = U(),
    tt = (t = [], e) =>
      t
        .map((t) => {
          let e =
              !t._isLoading &&
              ((t) => {
                let e;
                if (t.backgroundImage)
                  e = H(t.backgroundImage, t.backgroundImageRendering);
                else if (w(t.text)) {
                  if ((t.width && t.width < 1) || (t.height && t.height < 1))
                    return;
                  e = G(t);
                }
                return e;
              })(t),
            o = q(e) ? e : void 0;
          const i = t._scale || 1,
            n = t._translate || Q,
            r = t.strokeWidth && t.strokeWidth * i;
          if (Qe(t.points)) {
            const e = t.points.map((t) => X(t.x * i + n.x, t.y * i + n.y));
            3 === e.length && t.backgroundColor
              ? A.drawTriangle(
                  e,
                  t.rotation,
                  t.flipX,
                  t.flipY,
                  t.backgroundColor,
                  r,
                  t.strokeColor,
                  t.opacity
                )
              : A.drawPath(e, r, t.strokeColor, t.pathClose, t.opacity);
          } else if (qe(t.rx) && qe(t.ry)) {
            let e = t.x,
              a = t.y;
            (e *= i),
              (a *= i),
              (e += n.x),
              (a += n.y),
              A.drawEllipse(
                X(e, a),
                t.rx * i,
                t.ry * i,
                t.rotation,
                t.flipX,
                t.flipY,
                t.backgroundColor,
                o,
                void 0,
                void 0,
                t.backgroundCorners && J(t.backgroundCorners),
                r,
                t.strokeColor,
                t.opacity,
                t.inverted
              );
          } else if ((w(t.text) && o) || t.width) {
            const e = o && A.textureGetSize(o);
            let a,
              s,
              l,
              c = void 0,
              d = [
                t.cornerRadius,
                t.cornerRadius,
                t.cornerRadius,
                t.cornerRadius,
              ].map((t) => t * i);
            if (
              ((a = t.width ? zt(t) : { x: t.x, y: t.y, ...e }),
              i &&
                n &&
                ((a.x *= i),
                (a.y *= i),
                (a.x += n.x),
                (a.y += n.y),
                (a.width *= i),
                (a.height *= i)),
              e)
            )
              if (t.backgroundImage && t.backgroundSize) {
                const o = D(e.width, e.height);
                if ("contain" === t.backgroundSize) {
                  const t = Qt(a, o, a);
                  (s = $t(t)),
                    (l = X(
                      0.5 * (a.width - s.width),
                      0.5 * (a.height - s.height)
                    ));
                } else if ("cover" === t.backgroundSize) {
                  const t = Jt(a, o, a);
                  (s = $t(t)),
                    (l = X(t.x, t.y)),
                    (l = X(
                      0.5 * (a.width - s.width),
                      0.5 * (a.height - s.height)
                    ));
                } else (s = t.backgroundSize), (l = t.backgroundPosition);
              } else if (t.text) {
                const o = { width: e.width / v, height: e.height / v };
                (l = X(0, 0)),
                  (s = { width: o.width * i, height: o.height * i }),
                  t.backgroundColor &&
                    A.drawRect(
                      { ...a, height: a.height || e.height * i },
                      t.rotation,
                      t.flipX,
                      t.flipY,
                      d,
                      t.backgroundColor,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      r,
                      t.strokeColor,
                      t.opacity,
                      void 0,
                      void 0,
                      t.inverted
                    ),
                  (t.backgroundColor = void 0),
                  (a.x -= mo * i),
                  (c = t.color),
                  t.width
                    ? ((a.height = a.height || o.height * i),
                      (a.width += 2 * mo * i),
                      "center" === t.textAlign
                        ? (l.x = 0.5 * (a.width - s.width))
                        : "right" === t.textAlign && (l.x = a.width - s.width))
                    : ((a.width = o.width * i), (a.height = o.height * i)),
                  t._prerender && (c[3] = 0);
              }
            A.drawRect(
              a,
              t.rotation,
              t.flipX,
              t.flipY,
              d,
              t.backgroundColor,
              o,
              s,
              l,
              t.backgroundCorners && J(t.backgroundCorners),
              r,
              t.strokeColor,
              t.opacity,
              void 0,
              c,
              t.inverted
            );
          }
          return e;
        })
        .filter(Boolean);
  let et = !1,
    ot = !0,
    nt = !1;
  const rt = [],
    at = [],
    st = [],
    lt = () => {
      st.length = 0;
      const t = P[0],
        {
          blendShapes: e,
          blendShapesDirty: o,
          annotationShapes: i,
          annotationShapesDirty: n,
          interfaceShapes: r,
          decorationShapes: p,
          frameShapes: h,
        } = k({
          opacity: t.opacity,
          rotation: t.rotation,
          scale: t.scale,
          images: P,
          size: xt(E, I),
          backgroundColor: [...a],
          selectionRect: l,
        }),
        m = [...a],
        g = l,
        f = na(s, 0, 1),
        $ = c,
        y = Math.abs((t.rotation.x / Math.PI) * 2 - 1),
        b = Math.abs((t.rotation.y / Math.PI) * 2 - 1),
        x = y < 0.99 || b < 0.99,
        w = t.size,
        S = t.backgroundColor,
        M = e.length > 0,
        T = i.length > 0,
        L = S[3] > 0;
      if (f < 1 && L) {
        const t = m[0],
          e = m[1],
          o = m[2],
          i = 1 - f,
          n = S[0] * i,
          r = S[1] * i,
          a = S[2] * i,
          s = 1 - i;
        (m[0] = n + t * s), (m[1] = r + e * s), (m[2] = a + o * s), (m[3] = 1);
      }
      A.setCanvasColor(m),
        M && o
          ? (A.disableMask(),
            A.drawToImageBlendBuffer(w),
            (rt.length = 0),
            rt.push(...tt(e)))
          : M || (rt.length = 0),
        st.push(...rt),
        ot && (A.drawToImageOverlayBuffer(w, v), (ot = !1));
      if (
        (x
          ? ((T && (n || et)) || !nt
              ? (A.disableMask(),
                A.drawToImageOverlayBuffer(w, v),
                (at.length = 0),
                at.push(...tt(i)))
              : T || (at.length = 0),
            (nt = !0))
          : (nt = !1),
        A.drawToCanvas(),
        A.enableMask(g, f),
        L && A.drawRect(g, 0, !1, !1, [0, 0, 0, 0], u(a, S)),
        A.enablePreviewStencil(),
        st.push(
          ...[...P].reverse().map((t) =>
            K({
              ...t,
              enableOverlay: x && T,
              enableBlend: M,
              mask: g,
              maskOpacity: f,
              overlayColor: $,
            })
          )
        ),
        x ||
          (A.applyPreviewStencil(),
          A.resetCanvasMatrix(),
          A.updateCanvasMatrix(w, t.origin, t.translation, t.scale, t.rotation),
          (at.length = 0),
          at.push(...tt(i)),
          A.disablePreviewStencil()),
        st.push(...at),
        A.resetCanvasMatrix(),
        A.enableMask(g, 1),
        st.push(...tt(p)),
        h.length)
      ) {
        const t = h.filter((t) => !t.expandsCanvas),
          e = h.filter((t) => t.expandsCanvas);
        t.length && st.push(...tt(t)),
          e.length &&
            (A.enableMask(
              {
                x: g.x + 0.5,
                y: g.y + 0.5,
                width: g.width - 1,
                height: g.height - 1,
              },
              d
            ),
            st.push(...tt(e)));
      }
      A.disableMask(),
        st.push(...tt(r)),
        R.forEach((t) => {
          A.enableMask(t.mask, t.maskOpacity),
            t.backgroundColor &&
              A.drawRect(
                t.mask,
                0,
                !1,
                !1,
                t.maskCornerRadius,
                t.backgroundColor,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                t.opacity,
                t.maskFeather
              ),
            K({
              ...t,
              translation: {
                x: t.translation.x + t.offset.x - 0.5 * E,
                y: t.translation.y + t.offset.y - 0.5 * I,
              },
            });
        }),
        A.disableMask(),
        ((t) => {
          j.forEach((e, o) => {
            !t.find((t) => t === e) &&
              q(e) &&
              (Array.from(N.values()).includes(e) ||
                (j.delete(o), A.textureDelete(e)));
          });
        })(st),
        C(),
        (et = !1);
    };
  let ct = Date.now();
  const dt = () => {
    const t = Date.now();
    t - ct < 48 || ((ct = t), lt());
  };
  Gn(() => r()),
    Yn(() => o(22, (A = nl(m)))),
    qn(() => {
      A && (A.release(), o(22, (A = void 0)), o(2, (m = void 0)));
    });
  return (
    (t.$$set = (t) => {
      "animate" in t && o(9, (g = t.animate)),
        "maskRect" in t && o(10, ($ = t.maskRect)),
        "maskOpacity" in t && o(11, (y = t.maskOpacity)),
        "maskFrameOpacity" in t && o(12, (b = t.maskFrameOpacity)),
        "pixelRatio" in t && o(13, (x = t.pixelRatio)),
        "textPixelRatio" in t && o(14, (v = t.textPixelRatio)),
        "backgroundColor" in t && o(15, (S = t.backgroundColor)),
        "willRender" in t && o(16, (k = t.willRender)),
        "didRender" in t && o(17, (C = t.didRender)),
        "willRequestResource" in t && o(18, (M = t.willRequestResource)),
        "loadImageData" in t && o(19, (T = t.loadImageData)),
        "images" in t && o(20, (P = t.images)),
        "interfaceImages" in t && o(21, (R = t.interfaceImages));
    }),
    (t.$$.update = () => {
      32768 & t.$$.dirty[0] && S && L(z, S),
        2048 & t.$$.dirty[0] && L(B, qe(y) ? y : 1),
        4096 & t.$$.dirty[0] && L(O, qe(b) ? b : 1),
        1024 & t.$$.dirty[0] && $ && _.set($),
        25165824 & t.$$.dirty[0] && a && Z.set([a[0], a[1], a[2], na(s, 0, 1)]),
        5242883 & t.$$.dirty[0] && o(26, (i = !!(A && E && I && P.length))),
        4202499 & t.$$.dirty[0] && E && I && A && A.resize(E, I, x),
        67108864 & t.$$.dirty[0] && o(25, (r = i ? (Ts() ? dt : lt) : n)),
        100663296 & t.$$.dirty[0] && i && r && r();
    }),
    [
      E,
      I,
      m,
      p,
      z,
      B,
      O,
      _,
      Z,
      g,
      $,
      y,
      b,
      x,
      v,
      S,
      k,
      C,
      M,
      T,
      P,
      R,
      A,
      a,
      s,
      r,
      i,
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (m = t), o(2, m);
        });
      },
      (t) => {
        o(0, (E = t.detail.width)),
          o(1, (I = t.detail.height)),
          p("measure", { width: E, height: I });
      },
    ]
  );
}
class sl extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        al,
        rl,
        sn,
        {
          animate: 9,
          maskRect: 10,
          maskOpacity: 11,
          maskFrameOpacity: 12,
          pixelRatio: 13,
          textPixelRatio: 14,
          backgroundColor: 15,
          willRender: 16,
          didRender: 17,
          willRequestResource: 18,
          loadImageData: 19,
          images: 20,
          interfaceImages: 21,
        },
        [-1, -1]
      );
  }
}
var ll = (t, e = Boolean, o = " ") => t.filter(e).join(o);
function cl(t, e, o) {
  const i = t.slice();
  return (i[17] = e[o]), i;
}
const dl = (t) => ({ tab: 4 & t }),
  ul = (t) => ({ tab: t[17] });
function pl(t) {
  let e,
    o,
    i,
    n = [],
    r = new Map(),
    a = t[2];
  const s = (t) => t[17].id;
  for (let e = 0; e < a.length; e += 1) {
    let o = cl(t, a, e),
      i = s(o);
    r.set(i, (n[e] = hl(i, o)));
  }
  return {
    c() {
      e = Tn("ul");
      for (let t = 0; t < n.length; t += 1) n[t].c();
      zn(e, "class", (o = ll(["PinturaTabList", t[0]]))),
        zn(e, "role", "tablist"),
        zn(e, "data-layout", t[1]);
    },
    m(o, r) {
      Cn(o, e, r);
      for (let t = 0; t < n.length; t += 1) n[t].m(e, null);
      t[14](e), (i = !0);
    },
    p(t, l) {
      1124 & l &&
        ((a = t[2]),
        br(),
        (n = Pr(n, l, s, 1, t, a, r, e, Tr, hl, null, cl)),
        xr()),
        (!i || (1 & l && o !== (o = ll(["PinturaTabList", t[0]])))) &&
          zn(e, "class", o),
        (!i || 2 & l) && zn(e, "data-layout", t[1]);
    },
    i(t) {
      if (!i) {
        for (let t = 0; t < a.length; t += 1) vr(n[t]);
        i = !0;
      }
    },
    o(t) {
      for (let t = 0; t < n.length; t += 1) wr(n[t]);
      i = !1;
    },
    d(o) {
      o && Mn(e);
      for (let t = 0; t < n.length; t += 1) n[t].d();
      t[14](null);
    },
  };
}
function hl(t, e) {
  let o, i, n, r, a, s, l, c, d, u;
  const p = e[11].default,
    h = un(p, e, e[10], ul);
  function m(...t) {
    return e[12](e[17], ...t);
  }
  function g(...t) {
    return e[13](e[17], ...t);
  }
  return {
    key: t,
    first: null,
    c() {
      (o = Tn("li")),
        (i = Tn("button")),
        h && h.c(),
        (r = An()),
        (i.disabled = n = e[17].disabled),
        zn(o, "role", "tab"),
        zn(o, "aria-controls", (a = e[17].href.substr(1))),
        zn(o, "id", (s = e[17].tabId)),
        zn(o, "aria-selected", (l = e[17].selected)),
        (this.first = o);
    },
    m(t, e) {
      Cn(t, o, e),
        kn(o, i),
        h && h.m(i, null),
        kn(o, r),
        (c = !0),
        d || ((u = [In(i, "keydown", m), In(i, "click", g)]), (d = !0));
    },
    p(t, r) {
      (e = t),
        h && h.p && 1028 & r && hn(h, p, e, e[10], r, dl, ul),
        (!c || (4 & r && n !== (n = e[17].disabled))) && (i.disabled = n),
        (!c || (4 & r && a !== (a = e[17].href.substr(1)))) &&
          zn(o, "aria-controls", a),
        (!c || (4 & r && s !== (s = e[17].tabId))) && zn(o, "id", s),
        (!c || (4 & r && l !== (l = e[17].selected))) &&
          zn(o, "aria-selected", l);
    },
    i(t) {
      c || (vr(h, t), (c = !0));
    },
    o(t) {
      wr(h, t), (c = !1);
    },
    d(t) {
      t && Mn(o), h && h.d(t), (d = !1), rn(u);
    },
  };
}
function ml(t) {
  let e,
    o,
    i = t[4] && pl(t);
  return {
    c() {
      i && i.c(), (e = En());
    },
    m(t, n) {
      i && i.m(t, n), Cn(t, e, n), (o = !0);
    },
    p(t, [o]) {
      t[4]
        ? i
          ? (i.p(t, o), 16 & o && vr(i, 1))
          : ((i = pl(t)), i.c(), vr(i, 1), i.m(e.parentNode, e))
        : i &&
          (br(),
          wr(i, 1, 1, () => {
            i = null;
          }),
          xr());
    },
    i(t) {
      o || (vr(i), (o = !0));
    },
    o(t) {
      wr(i), (o = !1);
    },
    d(t) {
      i && i.d(t), t && Mn(e);
    },
  };
}
function gl(t, e, o) {
  let i,
    n,
    r,
    { $$slots: a = {}, $$scope: s } = e,
    { class: l } = e,
    { name: c } = e,
    { selected: d } = e,
    { tabs: u = [] } = e,
    { layout: p } = e;
  const h = Kn(),
    m = (t) => {
      const e = r.querySelectorAll('[role="tab"] button')[t];
      e && e.focus();
    },
    g = (t, e) => {
      t.preventDefault(), t.stopPropagation(), h("select", e);
    },
    f = ({ key: t }, e) => {
      if (!/arrow/i.test(t)) return;
      const o = u.findIndex((t) => t.id === e);
      return /right|down/i.test(t)
        ? m(o < u.length - 1 ? o + 1 : 0)
        : /left|up/i.test(t)
        ? m(o > 0 ? o - 1 : u.length - 1)
        : void 0;
    };
  return (
    (t.$$set = (t) => {
      "class" in t && o(0, (l = t.class)),
        "name" in t && o(7, (c = t.name)),
        "selected" in t && o(8, (d = t.selected)),
        "tabs" in t && o(9, (u = t.tabs)),
        "layout" in t && o(1, (p = t.layout)),
        "$$scope" in t && o(10, (s = t.$$scope));
    }),
    (t.$$.update = () => {
      896 & t.$$.dirty &&
        o(
          2,
          (i = u.map((t) => {
            const e = t.id === d;
            return {
              ...t,
              tabId: `tab-${c}-${t.id}`,
              href: `#panel-${c}-${t.id}`,
              selected: e,
            };
          }))
        ),
        4 & t.$$.dirty && o(4, (n = i.length > 1));
    }),
    [
      l,
      p,
      i,
      r,
      n,
      g,
      f,
      c,
      d,
      u,
      s,
      a,
      (t, e) => f(e, t.id),
      (t, e) => g(e, t.id),
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (r = t), o(3, r);
        });
      },
    ]
  );
}
class fl extends Br {
  constructor(t) {
    super(),
      zr(this, t, gl, ml, sn, {
        class: 0,
        name: 7,
        selected: 8,
        tabs: 9,
        layout: 1,
      });
  }
}
const $l = (t) => ({ panel: 16 & t }),
  yl = (t) => ({ panel: t[4][0].id, panelIsActive: !0 });
function bl(t, e, o) {
  const i = t.slice();
  return (
    (i[14] = e[o].id),
    (i[15] = e[o].shouldDraw),
    (i[16] = e[o].panelId),
    (i[17] = e[o].tabindex),
    (i[18] = e[o].labelledBy),
    (i[19] = e[o].isActive),
    (i[20] = e[o].hidden),
    (i[3] = e[o].visible),
    i
  );
}
const xl = (t) => ({ panel: 16 & t, panelIsActive: 16 & t }),
  vl = (t) => ({ panel: t[14], panelIsActive: t[19] });
function wl(t) {
  let e, o, i, n, r, a;
  const s = t[11].default,
    l = un(s, t, t[10], yl);
  return {
    c() {
      (e = Tn("div")),
        (o = Tn("div")),
        l && l.c(),
        zn(o, "class", (i = ll([t[1]]))),
        zn(e, "class", t[0]),
        zn(e, "style", t[2]);
    },
    m(i, s) {
      Cn(i, e, s),
        kn(e, o),
        l && l.m(o, null),
        (n = !0),
        r || ((a = [In(e, "measure", t[13]), $n(bs.call(null, e))]), (r = !0));
    },
    p(t, r) {
      l && l.p && 1040 & r && hn(l, s, t, t[10], r, $l, yl),
        (!n || (2 & r && i !== (i = ll([t[1]])))) && zn(o, "class", i),
        (!n || 1 & r) && zn(e, "class", t[0]),
        (!n || 4 & r) && zn(e, "style", t[2]);
    },
    i(t) {
      n || (vr(l, t), (n = !0));
    },
    o(t) {
      wr(l, t), (n = !1);
    },
    d(t) {
      t && Mn(e), l && l.d(t), (r = !1), rn(a);
    },
  };
}
function Sl(t) {
  let e,
    o,
    i,
    n,
    r,
    a = [],
    s = new Map(),
    l = t[4];
  const c = (t) => t[14];
  for (let e = 0; e < l.length; e += 1) {
    let o = bl(t, l, e),
      i = c(o);
    s.set(i, (a[e] = Cl(i, o)));
  }
  return {
    c() {
      e = Tn("div");
      for (let t = 0; t < a.length; t += 1) a[t].c();
      zn(e, "class", (o = ll(["PinturaTabPanels", t[0]]))),
        zn(e, "style", t[2]);
    },
    m(o, s) {
      Cn(o, e, s);
      for (let t = 0; t < a.length; t += 1) a[t].m(e, null);
      (i = !0),
        n ||
          ((r = [
            In(e, "measure", t[12]),
            $n(bs.call(null, e, { observePosition: !0 })),
          ]),
          (n = !0));
    },
    p(t, n) {
      1042 & n &&
        ((l = t[4]),
        br(),
        (a = Pr(a, n, c, 1, t, l, s, e, Tr, Cl, null, bl)),
        xr()),
        (!i || (1 & n && o !== (o = ll(["PinturaTabPanels", t[0]])))) &&
          zn(e, "class", o),
        (!i || 4 & n) && zn(e, "style", t[2]);
    },
    i(t) {
      if (!i) {
        for (let t = 0; t < l.length; t += 1) vr(a[t]);
        i = !0;
      }
    },
    o(t) {
      for (let t = 0; t < a.length; t += 1) wr(a[t]);
      i = !1;
    },
    d(t) {
      t && Mn(e);
      for (let t = 0; t < a.length; t += 1) a[t].d();
      (n = !1), rn(r);
    },
  };
}
function kl(t) {
  let e;
  const o = t[11].default,
    i = un(o, t, t[10], vl);
  return {
    c() {
      i && i.c();
    },
    m(t, o) {
      i && i.m(t, o), (e = !0);
    },
    p(t, e) {
      i && i.p && 1040 & e && hn(i, o, t, t[10], e, xl, vl);
    },
    i(t) {
      e || (vr(i, t), (e = !0));
    },
    o(t) {
      wr(i, t), (e = !1);
    },
    d(t) {
      i && i.d(t);
    },
  };
}
function Cl(t, e) {
  let o,
    i,
    n,
    r,
    a,
    s,
    l,
    c,
    d,
    u = e[15] && kl(e);
  return {
    key: t,
    first: null,
    c() {
      (o = Tn("div")),
        u && u.c(),
        (i = An()),
        zn(o, "class", (n = ll(["PinturaTabPanel", e[1]]))),
        (o.hidden = r = e[20]),
        zn(o, "id", (a = e[16])),
        zn(o, "tabindex", (s = e[17])),
        zn(o, "aria-labelledby", (l = e[18])),
        zn(o, "data-inert", (c = !e[3])),
        (this.first = o);
    },
    m(t, e) {
      Cn(t, o, e), u && u.m(o, null), kn(o, i), (d = !0);
    },
    p(t, p) {
      (e = t)[15]
        ? u
          ? (u.p(e, p), 16 & p && vr(u, 1))
          : ((u = kl(e)), u.c(), vr(u, 1), u.m(o, i))
        : u &&
          (br(),
          wr(u, 1, 1, () => {
            u = null;
          }),
          xr()),
        (!d || (2 & p && n !== (n = ll(["PinturaTabPanel", e[1]])))) &&
          zn(o, "class", n),
        (!d || (16 & p && r !== (r = e[20]))) && (o.hidden = r),
        (!d || (16 & p && a !== (a = e[16]))) && zn(o, "id", a),
        (!d || (16 & p && s !== (s = e[17]))) && zn(o, "tabindex", s),
        (!d || (16 & p && l !== (l = e[18]))) && zn(o, "aria-labelledby", l),
        (!d || (16 & p && c !== (c = !e[3]))) && zn(o, "data-inert", c);
    },
    i(t) {
      d || (vr(u), (d = !0));
    },
    o(t) {
      wr(u), (d = !1);
    },
    d(t) {
      t && Mn(o), u && u.d();
    },
  };
}
function Ml(t) {
  let e, o, i, n;
  const r = [Sl, wl],
    a = [];
  function s(t, e) {
    return t[5] ? 0 : 1;
  }
  return (
    (e = s(t)),
    (o = a[e] = r[e](t)),
    {
      c() {
        o.c(), (i = En());
      },
      m(t, o) {
        a[e].m(t, o), Cn(t, i, o), (n = !0);
      },
      p(t, [n]) {
        let l = e;
        (e = s(t)),
          e === l
            ? a[e].p(t, n)
            : (br(),
              wr(a[l], 1, 1, () => {
                a[l] = null;
              }),
              xr(),
              (o = a[e]),
              o ? o.p(t, n) : ((o = a[e] = r[e](t)), o.c()),
              vr(o, 1),
              o.m(i.parentNode, i));
      },
      i(t) {
        n || (vr(o), (n = !0));
      },
      o(t) {
        wr(o), (n = !1);
      },
      d(t) {
        a[e].d(t), t && Mn(i);
      },
    }
  );
}
function Tl(t, e, o) {
  let i,
    n,
    { $$slots: r = {}, $$scope: a } = e,
    { class: s } = e,
    { name: l } = e,
    { selected: c } = e,
    { panelClass: d } = e,
    { panels: u = [] } = e,
    { visible: p } = e,
    { style: h } = e;
  const m = {};
  return (
    (t.$$set = (t) => {
      "class" in t && o(0, (s = t.class)),
        "name" in t && o(6, (l = t.name)),
        "selected" in t && o(7, (c = t.selected)),
        "panelClass" in t && o(1, (d = t.panelClass)),
        "panels" in t && o(8, (u = t.panels)),
        "visible" in t && o(3, (p = t.visible)),
        "style" in t && o(2, (h = t.style)),
        "$$scope" in t && o(10, (a = t.$$scope));
    }),
    (t.$$.update = () => {
      968 & t.$$.dirty &&
        o(
          4,
          (i = u.map((t) => {
            const e = t === c;
            e && o(9, (m[t] = !0), m);
            const i = !p || -1 !== p.indexOf(t);
            return {
              id: t,
              panelId: `panel-${l}-${t}`,
              labelledBy: `tab-${l}-${t}`,
              isActive: e,
              hidden: !e,
              visible: i,
              tabindex: e ? 0 : -1,
              shouldDraw: e || m[t],
            };
          }))
        ),
        16 & t.$$.dirty && o(5, (n = i.length > 1));
    }),
    [
      s,
      d,
      h,
      p,
      i,
      n,
      l,
      c,
      u,
      m,
      a,
      r,
      function (e) {
        tr(t, e);
      },
      function (e) {
        tr(t, e);
      },
    ]
  );
}
class Pl extends Br {
  constructor(t) {
    super(),
      zr(this, t, Tl, Ml, sn, {
        class: 0,
        name: 6,
        selected: 7,
        panelClass: 1,
        panels: 8,
        visible: 3,
        style: 2,
      });
  }
}
var Rl = (t) => {
  const e = Object.getOwnPropertyDescriptors(t.prototype);
  return Object.keys(e).filter((t) => !!e[t].get);
};
function Al(t) {
  let e, o, i, n, r;
  const a = [t[7]];
  function s(e) {
    t[19](e);
  }
  var l = t[11];
  function c(t) {
    let e = {};
    for (let t = 0; t < a.length; t += 1) e = en(e, a[t]);
    return void 0 !== t[5] && (e.name = t[5]), { props: e };
  }
  return (
    l &&
      ((o = new l(c(t))),
      or.push(() => Er(o, "name", s)),
      t[20](o),
      o.$on("measure", t[21])),
    {
      c() {
        (e = Tn("div")),
          o && Ir(o.$$.fragment),
          zn(e, "data-util", t[5]),
          zn(e, "class", (n = ll(["PinturaUtilPanel", t[2]]))),
          zn(e, "style", t[6]);
      },
      m(t, i) {
        Cn(t, e, i), o && Lr(o, e, null), (r = !0);
      },
      p(t, [d]) {
        const u = 128 & d ? Rr(a, [Ar(t[7])]) : {};
        if (
          (!i && 32 & d && ((i = !0), (u.name = t[5]), dr(() => (i = !1))),
          l !== (l = t[11]))
        ) {
          if (o) {
            br();
            const t = o;
            wr(t.$$.fragment, 1, 0, () => {
              Fr(t, 1);
            }),
              xr();
          }
          l
            ? ((o = new l(c(t))),
              or.push(() => Er(o, "name", s)),
              t[20](o),
              o.$on("measure", t[21]),
              Ir(o.$$.fragment),
              vr(o.$$.fragment, 1),
              Lr(o, e, null))
            : (o = null);
        } else l && o.$set(u);
        (!r || 32 & d) && zn(e, "data-util", t[5]),
          (!r || (4 & d && n !== (n = ll(["PinturaUtilPanel", t[2]])))) &&
            zn(e, "class", n),
          (!r || 64 & d) && zn(e, "style", t[6]);
      },
      i(t) {
        r || (o && vr(o.$$.fragment, t), (r = !0));
      },
      o(t) {
        o && wr(o.$$.fragment, t), (r = !1);
      },
      d(i) {
        i && Mn(e), t[20](null), o && Fr(o);
      },
    }
  );
}
function El(t, e, o) {
  let i, n, r, a;
  const s = Kn();
  let l,
    { isActive: c = !0 } = e,
    { isAnimated: d = !0 } = e,
    { stores: u } = e,
    { content: p } = e,
    { component: h } = e,
    { locale: m } = e,
    { class: g } = e;
  const f = ss(0),
    $ = _r(f, (t) => na(t, 0, 1));
  dn(t, $, (t) => o(18, (r = t)));
  let y = !c;
  const b = Wr(c);
  dn(t, b, (t) => o(22, (a = t)));
  const x = {
      isActive: _r(b, async (t, e) => {
        if (!t) return e(t);
        await lr(), e(t);
      }),
      isActiveFraction: _r($, (t) => t),
      isVisible: _r($, (t) => t > 0),
    },
    v = p.view,
    w = Rl(v),
    S = Object.keys(p.props || {}).reduce(
      (t, e) => (w.includes(e) ? ((t[e] = p.props[e]), t) : t),
      {}
    ),
    k = Object.keys(x).reduce(
      (t, e) => (w.includes(e) ? ((t[e] = x[e]), t) : t),
      {}
    );
  let C,
    M = !1;
  Yn(() => {
    o(4, (M = !0));
  });
  return (
    (t.$$set = (t) => {
      "isActive" in t && o(1, (c = t.isActive)),
        "isAnimated" in t && o(12, (d = t.isAnimated)),
        "stores" in t && o(13, (u = t.stores)),
        "content" in t && o(14, (p = t.content)),
        "component" in t && o(0, (h = t.component)),
        "locale" in t && o(15, (m = t.locale)),
        "class" in t && o(2, (g = t.class));
    }),
    (t.$$.update = () => {
      11 & t.$$.dirty && l && c && h && s("measure", l),
        4098 & t.$$.dirty && f.set(c ? 1 : 0, { hard: !d }),
        393216 & t.$$.dirty &&
          (r <= 0 && !y ? o(17, (y = !0)) : r > 0 && y && o(17, (y = !1))),
        131088 & t.$$.dirty && M && s(y ? "hide" : "show"),
        262144 & t.$$.dirty && s("fade", r),
        262144 & t.$$.dirty && o(6, (i = r < 1 ? "opacity: " + r : void 0)),
        2 & t.$$.dirty && fn(b, (a = c), a),
        40960 & t.$$.dirty && o(7, (n = { ...S, ...k, stores: u, locale: m }));
    }),
    [
      h,
      c,
      g,
      l,
      M,
      C,
      i,
      n,
      s,
      $,
      b,
      v,
      d,
      u,
      p,
      m,
      f,
      y,
      r,
      function (t) {
        (C = t), o(5, C);
      },
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (h = t), o(0, h);
        });
      },
      (t) => {
        M && c && (o(3, (l = t.detail)), s("measure", { ...l }));
      },
    ]
  );
}
class Il extends Br {
  constructor(t) {
    super(),
      zr(this, t, El, Al, sn, {
        isActive: 1,
        isAnimated: 12,
        stores: 13,
        content: 14,
        component: 0,
        locale: 15,
        class: 2,
        opacity: 16,
      });
  }
  get opacity() {
    return this.$$.ctx[16];
  }
}
function Ll(t) {
  let e, o, i;
  const n = t[5].default,
    r = un(n, t, t[4], null);
  return {
    c() {
      (e = Pn("svg")),
        r && r.c(),
        zn(e, "class", t[3]),
        zn(e, "style", t[2]),
        zn(e, "width", t[0]),
        zn(e, "height", t[1]),
        zn(e, "viewBox", (o = "0 0 " + t[0] + "\n    " + t[1])),
        zn(e, "xmlns", "http://www.w3.org/2000/svg"),
        zn(e, "aria-hidden", "true"),
        zn(e, "focusable", "false"),
        zn(e, "stroke-linecap", "round"),
        zn(e, "stroke-linejoin", "round");
    },
    m(t, o) {
      Cn(t, e, o), r && r.m(e, null), (i = !0);
    },
    p(t, [a]) {
      r && r.p && 16 & a && hn(r, n, t, t[4], a, null, null),
        (!i || 8 & a) && zn(e, "class", t[3]),
        (!i || 4 & a) && zn(e, "style", t[2]),
        (!i || 1 & a) && zn(e, "width", t[0]),
        (!i || 2 & a) && zn(e, "height", t[1]),
        (!i || (3 & a && o !== (o = "0 0 " + t[0] + "\n    " + t[1]))) &&
          zn(e, "viewBox", o);
    },
    i(t) {
      i || (vr(r, t), (i = !0));
    },
    o(t) {
      wr(r, t), (i = !1);
    },
    d(t) {
      t && Mn(e), r && r.d(t);
    },
  };
}
function Fl(t, e, o) {
  let { $$slots: i = {}, $$scope: n } = e,
    { width: r = 24 } = e,
    { height: a = 24 } = e,
    { style: s } = e,
    { class: l } = e;
  return (
    (t.$$set = (t) => {
      "width" in t && o(0, (r = t.width)),
        "height" in t && o(1, (a = t.height)),
        "style" in t && o(2, (s = t.style)),
        "class" in t && o(3, (l = t.class)),
        "$$scope" in t && o(4, (n = t.$$scope));
    }),
    [r, a, s, l, n, i]
  );
}
class zl extends Br {
  constructor(t) {
    super(),
      zr(this, t, Fl, Ll, sn, { width: 0, height: 1, style: 2, class: 3 });
  }
}
var Bl = (t, e) => e === t.target || e.contains(t.target);
function Ol(t) {
  let e, o;
  return (
    (e = new zl({
      props: {
        class: "PinturaButtonIcon",
        $$slots: { default: [Dl] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        134217730 & o && (i.$$scope = { dirty: o, ctx: t }), e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Dl(t) {
  let e;
  return {
    c() {
      e = Pn("g");
    },
    m(o, i) {
      Cn(o, e, i), (e.innerHTML = t[1]);
    },
    p(t, o) {
      2 & o && (e.innerHTML = t[1]);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Wl(t) {
  let e, o;
  return {
    c() {
      (e = Tn("span")), (o = Rn(t[0])), zn(e, "class", t[12]);
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, i) {
      1 & i && On(o, t[0]), 4096 & i && zn(e, "class", t[12]);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function _l(t) {
  let e, o, i, n;
  const r = t[25].default,
    a = un(r, t, t[27], null),
    s =
      a ||
      (function (t) {
        let e,
          o,
          i,
          n = t[1] && Ol(t),
          r = t[0] && Wl(t);
        return {
          c() {
            (e = Tn("span")),
              n && n.c(),
              (o = An()),
              r && r.c(),
              zn(e, "class", t[10]);
          },
          m(t, a) {
            Cn(t, e, a),
              n && n.m(e, null),
              kn(e, o),
              r && r.m(e, null),
              (i = !0);
          },
          p(t, a) {
            t[1]
              ? n
                ? (n.p(t, a), 2 & a && vr(n, 1))
                : ((n = Ol(t)), n.c(), vr(n, 1), n.m(e, o))
              : n &&
                (br(),
                wr(n, 1, 1, () => {
                  n = null;
                }),
                xr()),
              t[0]
                ? r
                  ? r.p(t, a)
                  : ((r = Wl(t)), r.c(), r.m(e, null))
                : r && (r.d(1), (r = null)),
              (!i || 1024 & a) && zn(e, "class", t[10]);
          },
          i(t) {
            i || (vr(n), (i = !0));
          },
          o(t) {
            wr(n), (i = !1);
          },
          d(t) {
            t && Mn(e), n && n.d(), r && r.d();
          },
        };
      })(t);
  return {
    c() {
      (e = Tn("button")),
        s && s.c(),
        zn(e, "type", t[4]),
        zn(e, "style", t[2]),
        (e.disabled = t[3]),
        zn(e, "class", t[11]),
        zn(e, "title", t[0]);
    },
    m(r, a) {
      Cn(r, e, a),
        s && s.m(e, null),
        t[26](e),
        (o = !0),
        i ||
          ((n = [
            In(e, "keydown", function () {
              an(t[6]) && t[6].apply(this, arguments);
            }),
            In(e, "click", function () {
              an(t[5]) && t[5].apply(this, arguments);
            }),
            In(e, "pointerdown", function () {
              an(t[9]) && t[9].apply(this, arguments);
            }),
            $n(t[7].call(null, e)),
          ]),
          (i = !0));
    },
    p(i, [n]) {
      (t = i),
        a
          ? a.p && 134217728 & n && hn(a, r, t, t[27], n, null, null)
          : s && s.p && 5123 & n && s.p(t, n),
        (!o || 16 & n) && zn(e, "type", t[4]),
        (!o || 4 & n) && zn(e, "style", t[2]),
        (!o || 8 & n) && (e.disabled = t[3]),
        (!o || 2048 & n) && zn(e, "class", t[11]),
        (!o || 1 & n) && zn(e, "title", t[0]);
    },
    i(t) {
      o || (vr(s, t), (o = !0));
    },
    o(t) {
      wr(s, t), (o = !1);
    },
    d(o) {
      o && Mn(e), s && s.d(o), t[26](null), (i = !1), rn(n);
    },
  };
}
function Zl(t, e, o) {
  let i,
    n,
    r,
    a,
    s,
    l,
    { $$slots: c = {}, $$scope: d } = e,
    { class: u } = e,
    { label: p } = e,
    { labelClass: h } = e,
    { innerClass: m } = e,
    { hideLabel: g = !1 } = e,
    { icon: f } = e,
    { style: $ } = e,
    { disabled: y } = e,
    { type: b = "button" } = e,
    { onclick: x } = e,
    { onkeydown: v } = e,
    { onhold: w } = e,
    { action: S = () => {} } = e,
    { holdThreshold: k = 500 } = e,
    { holdSpeedUpFactor: C = 0.5 } = e,
    { holdSpeedMin: M = 20 } = e;
  const T = (t) => {
    o(
      23,
      (l = setTimeout(() => {
        w(), T(Math.max(t * C, M));
      }, t))
    );
  };
  let P;
  return (
    (t.$$set = (t) => {
      "class" in t && o(13, (u = t.class)),
        "label" in t && o(0, (p = t.label)),
        "labelClass" in t && o(14, (h = t.labelClass)),
        "innerClass" in t && o(15, (m = t.innerClass)),
        "hideLabel" in t && o(16, (g = t.hideLabel)),
        "icon" in t && o(1, (f = t.icon)),
        "style" in t && o(2, ($ = t.style)),
        "disabled" in t && o(3, (y = t.disabled)),
        "type" in t && o(4, (b = t.type)),
        "onclick" in t && o(5, (x = t.onclick)),
        "onkeydown" in t && o(6, (v = t.onkeydown)),
        "onhold" in t && o(17, (w = t.onhold)),
        "action" in t && o(7, (S = t.action)),
        "holdThreshold" in t && o(18, (k = t.holdThreshold)),
        "holdSpeedUpFactor" in t && o(19, (C = t.holdSpeedUpFactor)),
        "holdSpeedMin" in t && o(20, (M = t.holdSpeedMin)),
        "$$scope" in t && o(27, (d = t.$$scope));
    }),
    (t.$$.update = () => {
      25296896 & t.$$.dirty &&
        o(
          24,
          (n = w
            ? () => {
                l &&
                  (clearTimeout(l),
                  o(23, (l = void 0)),
                  document.documentElement.removeEventListener("pointerup", n));
              }
            : Qi)
        ),
        17170432 & t.$$.dirty &&
          o(
            9,
            (i = w
              ? () => {
                  document.documentElement.addEventListener("pointerup", n),
                    T(k);
                }
              : Qi)
          ),
        32768 & t.$$.dirty && o(10, (r = ll(["PinturaButtonInner", m]))),
        73728 & t.$$.dirty &&
          o(11, (a = ll(["PinturaButton", g && "PinturaButtonIconOnly", u]))),
        81920 & t.$$.dirty &&
          o(12, (s = ll([g ? "implicit" : "PinturaButtonLabel", h])));
    }),
    [
      p,
      f,
      $,
      y,
      b,
      x,
      v,
      S,
      P,
      i,
      r,
      a,
      s,
      u,
      h,
      m,
      g,
      w,
      k,
      C,
      M,
      (t) => Bl(t, P),
      () => P,
      l,
      n,
      c,
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (P = t), o(8, P);
        });
      },
      d,
    ]
  );
}
class Vl extends Br {
  constructor(t) {
    super(),
      zr(this, t, Zl, _l, sn, {
        class: 13,
        label: 0,
        labelClass: 14,
        innerClass: 15,
        hideLabel: 16,
        icon: 1,
        style: 2,
        disabled: 3,
        type: 4,
        onclick: 5,
        onkeydown: 6,
        onhold: 17,
        action: 7,
        holdThreshold: 18,
        holdSpeedUpFactor: 19,
        holdSpeedMin: 20,
        isEventTarget: 21,
        getElement: 22,
      });
  }
  get isEventTarget() {
    return this.$$.ctx[21];
  }
  get getElement() {
    return this.$$.ctx[22];
  }
}
var jl = (t, e) => {
  const o = t.findIndex(e);
  if (o >= 0) return t.splice(o, 1);
};
var Nl = (t, e = {}) => {
    const {
      inertia: o = !1,
      shouldStartInteraction: i = () => !0,
      pinch: n = !1,
      multiTouch: r,
      getEventPosition: a = (t) => X(t.clientX, t.clientY),
    } = e;
    function s(e, o) {
      t.dispatchEvent(new CustomEvent(e, { detail: o }));
    }
    function l() {
      x && x(), (x = void 0);
    }
    const c = [],
      d = (t) => (0 === t.timeStamp ? Date.now() : t.timeStamp),
      u = () => {
        const t = q(c[0].position);
        if (c[1]) {
          const e = 0.5 * (c[1].position.x - t.x),
            o = 0.5 * (c[1].position.y - t.y);
          (t.x += e), (t.y += o);
        }
        return t;
      },
      p = (t) => {
        (t.origin.x = t.position.x),
          (t.origin.y = t.position.y),
          (t.translation.x = 0),
          (t.translation.y = 0);
      },
      h = (t) => {
        const e = ((t) =>
          c.findIndex((e) => e.event.pointerId === t.pointerId))(t);
        if (!(e < 0)) return c[e];
      },
      m = () => 1 === c.length,
      g = () => 2 === c.length,
      f = (t) => {
        const e = ut(t.map((t) => t.position));
        return {
          center: e,
          distance: ((t, e) =>
            t.reduce((t, o) => t + ct(e, o.position), 0) / t.length)(t, e),
          velocity: ut(t.map((t) => t.velocity)),
          translation: ut(t.map((t) => t.translation)),
        };
      };
    let $,
      y,
      b,
      x,
      v,
      w,
      S,
      k,
      C = 0,
      M = void 0;
    function T(e) {
      if (!g() && !((t) => qe(t.button) && 0 !== t.button)(e) && i(e, t))
        if (
          (l(),
          ((t) => {
            const e = d(t),
              o = {
                timeStamp: e,
                timeStampInitial: e,
                position: a(t),
                origin: a(t),
                velocity: U(),
                translation: U(),
                interactionState: void 0,
                event: t,
              };
            c.push(o), (o.interactionState = f(c));
          })(e),
          m())
        )
          document.documentElement.addEventListener("pointermove", R),
            document.documentElement.addEventListener("pointerup", A),
            document.documentElement.addEventListener("pointercancel", A),
            (k = !1),
            (S = 1),
            (w = U()),
            (v = void 0),
            s("interactionstart", { origin: q(h(e).origin) });
        else if (n)
          (k = !0),
            (v = ct(c[0].position, c[1].position)),
            (w.x += c[0].translation.x),
            (w.y += c[0].translation.y),
            p(c[0]);
        else if (!1 === r)
          return (
            (c.length = 0),
            document.documentElement.removeEventListener("pointermove", R),
            document.documentElement.removeEventListener("pointerup", A),
            document.documentElement.removeEventListener("pointercancel", A),
            s("interactioncancel")
          );
    }
    t.addEventListener("pointerdown", T);
    let P = Date.now();
    function R(t) {
      t.preventDefault(),
        ((t) => {
          const e = h(t);
          if (!e) return;
          const o = d(t),
            i = a(t),
            n = Math.max(1, o - e.timeStamp);
          (e.velocity.x = (i.x - e.position.x) / n),
            (e.velocity.y = (i.y - e.position.y) / n),
            (e.translation.x = i.x - e.origin.x),
            (e.translation.y = i.y - e.origin.y),
            (e.timeStamp = o),
            (e.position.x = i.x),
            (e.position.y = i.y),
            (e.event = t);
        })(t);
      const e = q(c[0].translation);
      let o = S;
      if (n && g()) {
        (o *= ct(c[0].position, c[1].position) / v), nt(e, c[1].translation);
      }
      (e.x += w.x), (e.y += w.y);
      const i = Date.now();
      i - P < 16 ||
        ((P = i),
        s("interactionupdate", {
          position: u(),
          translation: e,
          scalar: n ? o : void 0,
          isMultiTouching: g(),
        }));
    }
    function A(t) {
      if (!h(t)) return;
      const e = u(),
        i = ((t) => {
          const e = jl(c, (e) => e.event.pointerId === t.pointerId);
          if (e) return e[0];
        })(t);
      if (n && m()) {
        const t = ct(c[0].position, i.position);
        (S *= t / v),
          (w.x += c[0].translation.x + i.translation.x),
          (w.y += c[0].translation.y + i.translation.y),
          p(c[0]);
      }
      let r = !1,
        a = !1;
      if (!k && i) {
        const t = performance.now(),
          e = t - i.timeStampInitial,
          o = lt(i.translation);
        (r = o < 64 && e < 300),
          (a = !!(M && r && t - C < 700 && lt(M, i.position) < 128)),
          r && ((M = q(i.position)), (C = t));
      }
      if (c.length > 0) return;
      document.documentElement.removeEventListener("pointermove", R),
        document.documentElement.removeEventListener("pointerup", A),
        document.documentElement.removeEventListener("pointercancel", A);
      const l = q(i.translation),
        d = q(i.velocity);
      let g = !1;
      s("interactionrelease", {
        isTap: r,
        isDoubleTap: a,
        position: e,
        translation: l,
        scalar: S,
        preventInertia: () => (g = !0),
      });
      const f = ct(d);
      if (g || !o || f < 0.25) return I(l, { isTap: r, isDoubleTap: a });
      (y = q(e)),
        (b = q(l)),
        ($ = rs(q(l), { easing: os, duration: 80 * f })),
        $.set({ x: l.x + 50 * d.x, y: l.y + 50 * d.y }).then(() => {
          x && I(cn($), { isTap: r, isDoubleTap: a });
        }),
        (x = $.subscribe(E));
    }
    function E(t) {
      t &&
        s("interactionupdate", {
          position: X(y.x + (t.x - b.x), y.y + (t.y - b.y)),
          translation: t,
          scalar: n ? S : void 0,
        });
    }
    function I(t, e) {
      l(),
        s("interactionend", { ...e, translation: t, scalar: n ? S : void 0 });
    }
    return {
      destroy() {
        l(), t.removeEventListener("pointerdown", T);
      },
    };
  },
  Hl = (t, e = {}) => {
    const {
        direction: o,
        shiftMultiplier: i = 10,
        bubbles: n = !1,
        stopKeydownPropagation: r = !0,
      } = e,
      a = "horizontal" === o,
      s = "vertical" === o,
      l = (e) => {
        const { key: o } = e,
          l = e.shiftKey,
          c = /up|down/i.test(o),
          d = /left|right/i.test(o);
        if (!d && !c) return;
        if (a && c) return;
        if (s && d) return;
        const u = l ? i : 1;
        r && e.stopPropagation(),
          t.dispatchEvent(
            new CustomEvent("nudge", {
              bubbles: n,
              detail: X(
                (/left/i.test(o) ? -1 : /right/i.test(o) ? 1 : 0) * u,
                (/up/i.test(o) ? -1 : /down/i.test(o) ? 1 : 0) * u
              ),
            })
          );
      };
    return (
      t.addEventListener("keydown", l),
      {
        destroy() {
          t.removeEventListener("keydown", l);
        },
      }
    );
  };
function Ul(t, e) {
  return e * Math.sign(t) * Math.log10(1 + Math.abs(t) / e);
}
const Xl = (t, e, o) => {
  if (!e) return It(t);
  const i = t.x + Ul(e.x - t.x, o),
    n = t.x + t.width + Ul(e.x + e.width - (t.x + t.width), o),
    r = t.y + Ul(e.y - t.y, o);
  return {
    x: i,
    y: r,
    width: n - i,
    height: t.y + t.height + Ul(e.y + e.height - (t.y + t.height), o) - r,
  };
};
var Yl = (t, e) => {
    if (t)
      return /em/.test(t)
        ? 16 * parseInt(t, 10)
        : /px/.test(t)
        ? parseInt(t, 10)
        : void 0;
  },
  Gl = (t) => {
    let e = t.detail || 0;
    const {
      deltaX: o,
      deltaY: i,
      wheelDelta: n,
      wheelDeltaX: r,
      wheelDeltaY: a,
    } = t;
    return (
      qe(r) && Math.abs(r) > Math.abs(a)
        ? (e = r / -120)
        : qe(o) && Math.abs(o) > Math.abs(i)
        ? (e = o / 20)
        : (n || a) && (e = (n || a) / -120),
      e || (e = i / 20),
      e
    );
  },
  ql = { Up: 38, Down: 40, Left: 37, Right: 39 };
function Kl(t) {
  let e, o, i, n, r, a, s;
  const l = t[37].default,
    c = un(l, t, t[36], null);
  return {
    c() {
      (e = Tn("div")),
        (o = Tn("div")),
        c && c.c(),
        zn(o, "style", t[6]),
        zn(e, "class", (i = ll(["PinturaScrollable", t[0]]))),
        zn(e, "style", t[4]),
        zn(e, "data-direction", t[1]),
        zn(e, "data-state", t[5]);
    },
    m(i, l) {
      Cn(i, e, l),
        kn(e, o),
        c && c.m(o, null),
        t[39](e),
        (r = !0),
        a ||
          ((s = [
            In(o, "interactionstart", t[9]),
            In(o, "interactionupdate", t[11]),
            In(o, "interactionend", t[12]),
            In(o, "interactionrelease", t[10]),
            $n(Nl.call(null, o, { inertia: !0 })),
            In(o, "measure", t[38]),
            $n(bs.call(null, o)),
            In(e, "wheel", t[14], { passive: !1 }),
            In(e, "scroll", t[16]),
            In(e, "focusin", t[15]),
            In(e, "nudge", t[17]),
            In(e, "measure", t[13]),
            $n(bs.call(null, e, { observePosition: !0 })),
            $n(
              (n = Hl.call(null, e, {
                direction: "x" === t[1] ? "horizontal" : "vertical",
                stopKeydownPropagation: !1,
              }))
            ),
          ]),
          (a = !0));
    },
    p(t, a) {
      c && c.p && 32 & a[1] && hn(c, l, t, t[36], a, null, null),
        (!r || 64 & a[0]) && zn(o, "style", t[6]),
        (!r || (1 & a[0] && i !== (i = ll(["PinturaScrollable", t[0]])))) &&
          zn(e, "class", i),
        (!r || 16 & a[0]) && zn(e, "style", t[4]),
        (!r || 2 & a[0]) && zn(e, "data-direction", t[1]),
        (!r || 32 & a[0]) && zn(e, "data-state", t[5]),
        n &&
          an(n.update) &&
          2 & a[0] &&
          n.update.call(null, {
            direction: "x" === t[1] ? "horizontal" : "vertical",
            stopKeydownPropagation: !1,
          });
    },
    i(t) {
      r || (vr(c, t), (r = !0));
    },
    o(t) {
      wr(c, t), (r = !1);
    },
    d(o) {
      o && Mn(e), c && c.d(o), t[39](null), (a = !1), rn(s);
    },
  };
}
function Jl(t, e, o) {
  let i,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    { $$slots: h = {}, $$scope: m } = e;
  const g = Kn(),
    f = Object.values(ql),
    $ = Qn("keysPressed");
  dn(t, $, (t) => o(46, (p = t)));
  let y,
    b,
    x,
    v,
    w = "idle",
    S = ss(0);
  dn(t, S, (t) => o(34, (u = t)));
  let k,
    { class: C } = e,
    { scrollBlockInteractionDist: M = 5 } = e,
    { scrollStep: T = 10 } = e,
    { scrollFocusMargin: P = 64 } = e,
    { scrollDirection: R = "x" } = e,
    { scrollAutoCancel: A = !1 } = e,
    { elasticity: E = 0 } = e,
    { onscroll: I = n } = e,
    { maskFeatherSize: L } = e,
    { maskFeatherStartOpacity: F } = e,
    { maskFeatherEndOpacity: z } = e,
    { scroll: B } = e,
    O = "",
    D = !0;
  const W = S.subscribe((t) => {
      const e = U();
      (e[R] = t), I(e);
    }),
    _ = (t) => Math.max(Math.min(0, t), x[i] - b[i]);
  let Z, V, j;
  const N = (t, e = {}) => {
    const { elastic: i = !1, animate: n = !1 } = e;
    Math.abs(t) > M && "idle" === w && !v && o(28, (w = "scrolling"));
    const r = _(t),
      a = i && E && !v ? r + Ul(t - r, E) : r;
    let s = !0;
    n ? (s = !1) : D || (s = !v),
      (D = !1),
      S.set(a, { hard: s }).then((t) => {
        v && (D = !0);
      });
  };
  qn(() => {
    W();
  });
  return (
    (t.$$set = (t) => {
      "class" in t && o(0, (C = t.class)),
        "scrollBlockInteractionDist" in t &&
          o(21, (M = t.scrollBlockInteractionDist)),
        "scrollStep" in t && o(22, (T = t.scrollStep)),
        "scrollFocusMargin" in t && o(23, (P = t.scrollFocusMargin)),
        "scrollDirection" in t && o(1, (R = t.scrollDirection)),
        "scrollAutoCancel" in t && o(24, (A = t.scrollAutoCancel)),
        "elasticity" in t && o(25, (E = t.elasticity)),
        "onscroll" in t && o(26, (I = t.onscroll)),
        "maskFeatherSize" in t && o(20, (L = t.maskFeatherSize)),
        "maskFeatherStartOpacity" in t &&
          o(18, (F = t.maskFeatherStartOpacity)),
        "maskFeatherEndOpacity" in t && o(19, (z = t.maskFeatherEndOpacity)),
        "scroll" in t && o(27, (B = t.scroll)),
        "$$scope" in t && o(36, (m = t.$$scope));
    }),
    (t.$$.update = () => {
      if (
        (2 & t.$$.dirty[0] && o(30, (i = "x" === R ? "width" : "height")),
        2 & t.$$.dirty[0] && o(31, (r = R.toUpperCase())),
        8 & t.$$.dirty[0] && o(32, (a = k && getComputedStyle(k))),
        (8 & t.$$.dirty[0]) | (2 & t.$$.dirty[1]) &&
          o(33, (s = a && Yl(a.getPropertyValue("--scrollable-feather-size")))),
        (1611399172 & t.$$.dirty[0]) | (12 & t.$$.dirty[1]) &&
          null != u &&
          x &&
          null != s &&
          b)
      ) {
        const t = (-1 * u) / s,
          e = -(x[i] - b[i] - u) / s;
        o(18, (F = na(1 - t, 0, 1))),
          o(19, (z = na(1 - e, 0, 1))),
          o(20, (L = s)),
          o(
            4,
            (O = `--scrollable-feather-start-opacity: ${F};--scrollable-feather-end-opacity: ${z}`)
          );
      }
      134217736 & t.$$.dirty[0] &&
        k &&
        void 0 !== B &&
        (qe(B) ? N(B) : N(B.scrollOffset, B)),
        1610612740 & t.$$.dirty[0] &&
          o(35, (l = x && b ? b[i] > x[i] : void 0)),
        (268435456 & t.$$.dirty[0]) | (16 & t.$$.dirty[1]) &&
          o(5, (c = ll([w, l ? "overflows" : void 0]))),
        25 & t.$$.dirty[1] &&
          o(6, (d = l ? `transform: translate${r}(${u}px)` : void 0));
    }),
    [
      C,
      R,
      b,
      k,
      O,
      c,
      d,
      $,
      S,
      () => {
        l &&
          ((V = !1),
          (Z = !0),
          (j = X(0, 0)),
          (v = !1),
          o(28, (w = "idle")),
          (y = cn(S)));
      },
      ({ detail: t }) => {
        l && ((v = !0), o(28, (w = "idle")));
      },
      ({ detail: t }) => {
        l &&
          (V ||
            (Z && ((Z = !1), lt(t.translation) < 0.1)) ||
            (!A ||
            "x" !== R ||
            ((t) => {
              const e = it(X(t.x - j.x, t.y - j.y), Math.abs);
              j = q(t);
              const o = lt(e),
                i = e.x - e.y;
              return !(o > 1 && i < -0.5);
            })(t.translation)
              ? N(y + t.translation[R], { elastic: !0 })
              : (V = !0)));
      },
      ({ detail: t }) => {
        if (!l) return;
        if (V) return;
        const e = y + t.translation[R],
          o = _(e);
        (D = !1),
          S.set(o).then((t) => {
            v && (D = !0);
          });
      },
      ({ detail: t }) => {
        o(29, (x = t)),
          g("measure", { x: t.x, y: t.y, width: t.width, height: t.height });
      },
      (t) => {
        if (!l) return;
        t.preventDefault(), t.stopPropagation();
        const e = Gl(t),
          o = cn(S);
        N(o + e * T, { animate: !0 });
      },
      (t) => {
        if (!l) return;
        if (!v) return;
        if (p.some((t) => f.includes(t))) return;
        let e = t.target;
        t.target.classList.contains("implicit") && (e = e.parentNode);
        const o = e["x" === R ? "offsetLeft" : "offsetTop"],
          n = o + e["x" === R ? "offsetWidth" : "offsetHeight"],
          r = cn(S),
          a = P + L;
        r + o < a
          ? N(-o + a)
          : r + n > x[i] - a && N(x[i] - n - a, { animate: !0 });
      },
      () => {
        o(3, (k["x" === R ? "scrollLeft" : "scrollTop"] = 0), k);
      },
      ({ detail: t }) => {
        const e = -2 * t[R],
          o = cn(S);
        N(o + e * T, { animate: !0 });
      },
      F,
      z,
      L,
      M,
      T,
      P,
      A,
      E,
      I,
      B,
      w,
      x,
      i,
      r,
      a,
      s,
      u,
      l,
      m,
      h,
      (t) => o(2, (b = t.detail)),
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (k = t), o(3, k);
        });
      },
    ]
  );
}
class Ql extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        Jl,
        Kl,
        sn,
        {
          class: 0,
          scrollBlockInteractionDist: 21,
          scrollStep: 22,
          scrollFocusMargin: 23,
          scrollDirection: 1,
          scrollAutoCancel: 24,
          elasticity: 25,
          onscroll: 26,
          maskFeatherSize: 20,
          maskFeatherStartOpacity: 18,
          maskFeatherEndOpacity: 19,
          scroll: 27,
        },
        [-1, -1]
      );
  }
}
function tc(t, { delay: e = 0, duration: o = 400, easing: i = tn } = {}) {
  const n = +getComputedStyle(t).opacity;
  return { delay: e, duration: o, easing: i, css: (t) => "opacity: " + t * n };
}
function ec(t) {
  let e, o, i, n, r, a;
  return {
    c() {
      (e = Tn("span")), (o = Rn(t[0])), zn(e, "class", "PinturaStatusMessage");
    },
    m(i, s) {
      Cn(i, e, s),
        kn(e, o),
        (n = !0),
        r ||
          ((a = [
            In(e, "measure", function () {
              an(t[1]) && t[1].apply(this, arguments);
            }),
            $n(bs.call(null, e)),
          ]),
          (r = !0));
    },
    p(e, [i]) {
      (t = e), (!n || 1 & i) && On(o, t[0]);
    },
    i(t) {
      n ||
        (cr(() => {
          i || (i = kr(e, tc, {}, !0)), i.run(1);
        }),
        (n = !0));
    },
    o(t) {
      i || (i = kr(e, tc, {}, !1)), i.run(0), (n = !1);
    },
    d(t) {
      t && Mn(e), t && i && i.end(), (r = !1), rn(a);
    },
  };
}
function oc(t, e, o) {
  let { text: i } = e,
    { onmeasure: r = n } = e;
  return (
    (t.$$set = (t) => {
      "text" in t && o(0, (i = t.text)),
        "onmeasure" in t && o(1, (r = t.onmeasure));
    }),
    [i, r]
  );
}
class ic extends Br {
  constructor(t) {
    super(), zr(this, t, oc, ec, sn, { text: 0, onmeasure: 1 });
  }
}
function nc(t) {
  let e, o, i, n, r, a, s, l;
  return {
    c() {
      (e = Tn("span")),
        (o = Pn("svg")),
        (i = Pn("g")),
        (n = Pn("circle")),
        (r = Pn("circle")),
        (a = An()),
        (s = Tn("span")),
        (l = Rn(t[0])),
        zn(n, "class", "PinturaProgressIndicatorBar"),
        zn(n, "r", "8.5"),
        zn(n, "cx", "10"),
        zn(n, "cy", "10"),
        zn(n, "stroke-linecap", "round"),
        zn(n, "opacity", ".25"),
        zn(r, "class", "PinturaProgressIndicatorFill"),
        zn(r, "r", "8.5"),
        zn(r, "stroke-dasharray", t[1]),
        zn(r, "cx", "10"),
        zn(r, "cy", "10"),
        zn(r, "transform", "rotate(-90) translate(-20)"),
        zn(i, "fill", "none"),
        zn(i, "stroke", "currentColor"),
        zn(i, "stroke-width", "2.5"),
        zn(i, "stroke-linecap", "round"),
        zn(i, "opacity", t[2]),
        zn(o, "width", "20"),
        zn(o, "height", "20"),
        zn(o, "viewBox", "0 0 20 20"),
        zn(o, "xmlns", "http://www.w3.org/2000/svg"),
        zn(o, "aria-hidden", "true"),
        zn(o, "focusable", "false"),
        zn(s, "class", "implicit"),
        zn(e, "class", "PinturaProgressIndicator"),
        zn(e, "data-status", t[3]);
    },
    m(t, c) {
      Cn(t, e, c),
        kn(e, o),
        kn(o, i),
        kn(i, n),
        kn(i, r),
        kn(e, a),
        kn(e, s),
        kn(s, l);
    },
    p(t, [o]) {
      2 & o && zn(r, "stroke-dasharray", t[1]),
        4 & o && zn(i, "opacity", t[2]),
        1 & o && On(l, t[0]),
        8 & o && zn(e, "data-status", t[3]);
    },
    i: Qi,
    o: Qi,
    d(t) {
      t && Mn(e);
    },
  };
}
function rc(t, e, o) {
  let i, n, r, a, s;
  const l = Kn();
  let { progress: c } = e,
    { min: d = 0 } = e,
    { max: u = 100 } = e,
    { labelBusy: p = "Busy" } = e;
  const h = ss(0, { precision: 0.01 }),
    m = _r([h], (t) => na(t, d, u));
  dn(t, m, (t) => o(9, (s = t)));
  const g = m.subscribe((t) => {
    1 === c && Math.round(t) >= 100 && l("complete");
  });
  return (
    qn(() => {
      g();
    }),
    (t.$$set = (t) => {
      "progress" in t && o(5, (c = t.progress)),
        "min" in t && o(6, (d = t.min)),
        "max" in t && o(7, (u = t.max)),
        "labelBusy" in t && o(8, (p = t.labelBusy));
    }),
    (t.$$.update = () => {
      32 & t.$$.dirty && c && c !== 1 / 0 && h.set(100 * c),
        800 & t.$$.dirty && o(0, (i = c === 1 / 0 ? p : Math.round(s) + "%")),
        544 & t.$$.dirty &&
          o(1, (n = c === 1 / 0 ? "26.5 53" : (s / 100) * 53 + " 53")),
        544 & t.$$.dirty && o(2, (r = Math.min(1, c === 1 / 0 ? 1 : s / 10))),
        32 & t.$$.dirty && o(3, (a = c === 1 / 0 ? "busy" : "loading"));
    }),
    [i, n, r, a, m, c, d, u, p, s]
  );
}
class ac extends Br {
  constructor(t) {
    super(),
      zr(this, t, rc, nc, sn, { progress: 5, min: 6, max: 7, labelBusy: 8 });
  }
}
function sc(t) {
  let e, o, i;
  const n = t[5].default,
    r = un(n, t, t[4], null);
  return {
    c() {
      (e = Tn("span")),
        r && r.c(),
        zn(e, "class", (o = "PinturaStatusAside " + t[0])),
        zn(e, "style", t[1]);
    },
    m(t, o) {
      Cn(t, e, o), r && r.m(e, null), (i = !0);
    },
    p(t, [a]) {
      r && r.p && 16 & a && hn(r, n, t, t[4], a, null, null),
        (!i || (1 & a && o !== (o = "PinturaStatusAside " + t[0]))) &&
          zn(e, "class", o),
        (!i || 2 & a) && zn(e, "style", t[1]);
    },
    i(t) {
      i || (vr(r, t), (i = !0));
    },
    o(t) {
      wr(r, t), (i = !1);
    },
    d(t) {
      t && Mn(e), r && r.d(t);
    },
  };
}
function lc(t, e, o) {
  let i,
    { $$slots: n = {}, $$scope: r } = e,
    { offset: a = 0 } = e,
    { opacity: s = 0 } = e,
    { class: l } = e;
  return (
    (t.$$set = (t) => {
      "offset" in t && o(2, (a = t.offset)),
        "opacity" in t && o(3, (s = t.opacity)),
        "class" in t && o(0, (l = t.class)),
        "$$scope" in t && o(4, (r = t.$$scope));
    }),
    (t.$$.update = () => {
      12 & t.$$.dirty &&
        o(1, (i = `transform:translateX(${a}px);opacity:${s}`));
    }),
    [l, i, a, s, r, n]
  );
}
class cc extends Br {
  constructor(t) {
    super(), zr(this, t, lc, sc, sn, { offset: 2, opacity: 3, class: 0 });
  }
}
function dc(t) {
  let e, o, i;
  const n = t[3].default,
    r = un(n, t, t[2], null);
  let a = [{ for: (o = "_") }, t[1]],
    s = {};
  for (let t = 0; t < a.length; t += 1) s = en(s, a[t]);
  return {
    c() {
      (e = Tn("label")), r && r.c(), Bn(e, s);
    },
    m(t, o) {
      Cn(t, e, o), r && r.m(e, null), (i = !0);
    },
    p(t, o) {
      r && r.p && 4 & o && hn(r, n, t, t[2], o, null, null),
        Bn(e, (s = Rr(a, [{ for: "_" }, 2 & o && t[1]])));
    },
    i(t) {
      i || (vr(r, t), (i = !0));
    },
    o(t) {
      wr(r, t), (i = !1);
    },
    d(t) {
      t && Mn(e), r && r.d(t);
    },
  };
}
function uc(t) {
  let e, o;
  const i = t[3].default,
    n = un(i, t, t[2], null);
  let r = [t[1]],
    a = {};
  for (let t = 0; t < r.length; t += 1) a = en(a, r[t]);
  return {
    c() {
      (e = Tn("div")), n && n.c(), Bn(e, a);
    },
    m(t, i) {
      Cn(t, e, i), n && n.m(e, null), (o = !0);
    },
    p(t, o) {
      n && n.p && 4 & o && hn(n, i, t, t[2], o, null, null),
        Bn(e, (a = Rr(r, [2 & o && t[1]])));
    },
    i(t) {
      o || (vr(n, t), (o = !0));
    },
    o(t) {
      wr(n, t), (o = !1);
    },
    d(t) {
      t && Mn(e), n && n.d(t);
    },
  };
}
function pc(t) {
  let e, o;
  const i = t[3].default,
    n = un(i, t, t[2], null);
  let r = [t[1]],
    a = {};
  for (let t = 0; t < r.length; t += 1) a = en(a, r[t]);
  return {
    c() {
      (e = Tn("div")), n && n.c(), Bn(e, a);
    },
    m(t, i) {
      Cn(t, e, i), n && n.m(e, null), (o = !0);
    },
    p(t, o) {
      n && n.p && 4 & o && hn(n, i, t, t[2], o, null, null),
        Bn(e, (a = Rr(r, [2 & o && t[1]])));
    },
    i(t) {
      o || (vr(n, t), (o = !0));
    },
    o(t) {
      wr(n, t), (o = !1);
    },
    d(t) {
      t && Mn(e), n && n.d(t);
    },
  };
}
function hc(t) {
  let e, o, i, n;
  const r = [pc, uc, dc],
    a = [];
  function s(t, e) {
    return "div" === t[0] ? 0 : "span" === t[0] ? 1 : "label" === t[0] ? 2 : -1;
  }
  return (
    ~(e = s(t)) && (o = a[e] = r[e](t)),
    {
      c() {
        o && o.c(), (i = En());
      },
      m(t, o) {
        ~e && a[e].m(t, o), Cn(t, i, o), (n = !0);
      },
      p(t, [n]) {
        let l = e;
        (e = s(t)),
          e === l
            ? ~e && a[e].p(t, n)
            : (o &&
                (br(),
                wr(a[l], 1, 1, () => {
                  a[l] = null;
                }),
                xr()),
              ~e
                ? ((o = a[e]),
                  o ? o.p(t, n) : ((o = a[e] = r[e](t)), o.c()),
                  vr(o, 1),
                  o.m(i.parentNode, i))
                : (o = null));
      },
      i(t) {
        n || (vr(o), (n = !0));
      },
      o(t) {
        wr(o), (n = !1);
      },
      d(t) {
        ~e && a[e].d(t), t && Mn(i);
      },
    }
  );
}
function mc(t, e, o) {
  let { $$slots: i = {}, $$scope: n } = e,
    { name: r = "div" } = e,
    { attributes: a = {} } = e;
  return (
    (t.$$set = (t) => {
      "name" in t && o(0, (r = t.name)),
        "attributes" in t && o(1, (a = t.attributes)),
        "$$scope" in t && o(2, (n = t.$$scope));
    }),
    [r, a, n, i]
  );
}
class gc extends Br {
  constructor(t) {
    super(), zr(this, t, mc, hc, sn, { name: 0, attributes: 1 });
  }
}
var fc = () => (c() && window.devicePixelRatio) || 1;
let $c = null;
var yc = (t) => (
    null === $c && ($c = 1 === fc() ? Math.round : (t) => t), $c(t)
  ),
  bc = (t, e = {}) => {
    if (t) {
      if (e.preventScroll && be()) {
        const e = document.body.scrollTop;
        return t.focus(), void (document.body.scrollTop = e);
      }
      t.focus(e);
    }
  };
const xc = (t) => ({}),
  vc = (t) => ({}),
  wc = (t) => ({}),
  Sc = (t) => ({});
function kc(t) {
  let e, o;
  const i = [t[10]];
  let n = { $$slots: { default: [Mc] }, $$scope: { ctx: t } };
  for (let t = 0; t < i.length; t += 1) n = en(n, i[t]);
  return (
    (e = new Vl({ props: n })),
    t[37](e),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const n = 1024 & o[0] ? Rr(i, [Ar(t[10])]) : {};
        512 & o[1] && (n.$$scope = { dirty: o, ctx: t }), e.$set(n);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(o) {
        t[37](null), Fr(e, o);
      },
    }
  );
}
function Cc(t) {
  let e, o;
  const i = [t[10]];
  let n = {};
  for (let t = 0; t < i.length; t += 1) n = en(n, i[t]);
  return (
    (e = new Vl({ props: n })),
    t[36](e),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const n = 1024 & o[0] ? Rr(i, [Ar(t[10])]) : {};
        e.$set(n);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(o) {
        t[36](null), Fr(e, o);
      },
    }
  );
}
function Mc(t) {
  let e;
  const o = t[35].label,
    i = un(o, t, t[40], Sc);
  return {
    c() {
      i && i.c();
    },
    m(t, o) {
      i && i.m(t, o), (e = !0);
    },
    p(t, e) {
      i && i.p && 512 & e[1] && hn(i, o, t, t[40], e, wc, Sc);
    },
    i(t) {
      e || (vr(i, t), (e = !0));
    },
    o(t) {
      wr(i, t), (e = !1);
    },
    d(t) {
      i && i.d(t);
    },
  };
}
function Tc(t) {
  let e, o, i, n, r, a, s;
  const l = t[35].details,
    c = un(l, t, t[40], vc);
  return {
    c() {
      (e = Tn("div")),
        c && c.c(),
        (o = An()),
        (i = Tn("span")),
        zn(i, "class", "PinturaPanelTip"),
        zn(i, "style", t[7]),
        zn(e, "class", (n = ll(["PinturaPanel", t[1]]))),
        zn(e, "tabindex", "-1"),
        zn(e, "style", t[6]);
    },
    m(n, l) {
      Cn(n, e, l),
        c && c.m(e, null),
        kn(e, o),
        kn(e, i),
        t[38](e),
        (r = !0),
        a ||
          ((s = [
            In(e, "keydown", t[16]),
            In(e, "measure", t[39]),
            $n(bs.call(null, e)),
          ]),
          (a = !0));
    },
    p(t, o) {
      c && c.p && 512 & o[1] && hn(c, l, t, t[40], o, xc, vc),
        (!r || 128 & o[0]) && zn(i, "style", t[7]),
        (!r || (2 & o[0] && n !== (n = ll(["PinturaPanel", t[1]])))) &&
          zn(e, "class", n),
        (!r || 64 & o[0]) && zn(e, "style", t[6]);
    },
    i(t) {
      r || (vr(c, t), (r = !0));
    },
    o(t) {
      wr(c, t), (r = !1);
    },
    d(o) {
      o && Mn(e), c && c.d(o), t[38](null), (a = !1), rn(s);
    },
  };
}
function Pc(t) {
  let e, o, i, n, r, a, s, l, c;
  const d = [Cc, kc],
    u = [];
  function p(t, e) {
    return t[0] ? 0 : 1;
  }
  (o = p(t)), (i = u[o] = d[o](t));
  let h = t[5] && Tc(t);
  return {
    c() {
      (e = An()), i.c(), (n = An()), h && h.c(), (r = An()), (a = En());
    },
    m(i, d) {
      Cn(i, e, d),
        u[o].m(i, d),
        Cn(i, n, d),
        h && h.m(i, d),
        Cn(i, r, d),
        Cn(i, a, d),
        (s = !0),
        l ||
          ((c = [
            In(document.body, "pointerdown", function () {
              an(t[8]) && t[8].apply(this, arguments);
            }),
            In(document.body, "pointerup", function () {
              an(t[9]) && t[9].apply(this, arguments);
            }),
          ]),
          (l = !0));
    },
    p(e, a) {
      let s = o;
      (o = p((t = e))),
        o === s
          ? u[o].p(t, a)
          : (br(),
            wr(u[s], 1, 1, () => {
              u[s] = null;
            }),
            xr(),
            (i = u[o]),
            i ? i.p(t, a) : ((i = u[o] = d[o](t)), i.c()),
            vr(i, 1),
            i.m(n.parentNode, n)),
        t[5]
          ? h
            ? (h.p(t, a), 32 & a[0] && vr(h, 1))
            : ((h = Tc(t)), h.c(), vr(h, 1), h.m(r.parentNode, r))
          : h &&
            (br(),
            wr(h, 1, 1, () => {
              h = null;
            }),
            xr());
    },
    i(t) {
      s || (vr(i), vr(h), vr(false), (s = !0));
    },
    o(t) {
      wr(i), wr(h), wr(false), (s = !1);
    },
    d(t) {
      t && Mn(e),
        u[o].d(t),
        t && Mn(n),
        h && h.d(t),
        t && Mn(r),
        t && Mn(a),
        (l = !1),
        rn(c);
    },
  };
}
function Rc(t, e, o) {
  let i,
    n,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    h,
    m,
    g,
    f,
    $,
    y,
    b,
    { $$slots: x = {}, $$scope: v } = e,
    { buttonClass: w } = e,
    { buttonLabel: S } = e,
    { panelClass: k } = e,
    { isActive: C = !1 } = e,
    { onshow: M = ({ panel: t }) => bc(t, { preventScroll: !0 }) } = e;
  const T = Qn("rootPortal");
  dn(t, T, (t) => o(34, (b = t)));
  const P = Qn("rootRect");
  let R, A, E;
  dn(t, P, (t) => o(27, (f = t)));
  const I = () => o(20, (E = i && i.getBoundingClientRect()));
  let L = U(),
    F = ss(0);
  dn(t, F, (t) => o(29, (y = t)));
  let z = U();
  const B = Wr({ x: 0, y: 0 });
  dn(t, B, (t) => o(28, ($ = t)));
  const O = ss(-5, { stiffness: 0.1, damping: 0.35, precision: 0.001 });
  dn(t, O, (t) => o(26, (g = t)));
  const D = (t) => Bl(t, b) || A.isEventTarget(t);
  let W,
    _,
    Z = !1;
  const V = (t) => {
      C || I(), o(24, (_ = t)), o(17, (C = !C));
    },
    j = (t) => {
      /down/i.test(t.key) && (o(17, (C = !0)), o(24, (_ = t)));
    };
  qn(() => {
    if (!b) return;
    if (!W) return;
    const t = W;
    lr().then(() => {
      t.parentNode && t.remove();
    });
  });
  return (
    (t.$$set = (t) => {
      "buttonClass" in t && o(18, (w = t.buttonClass)),
        "buttonLabel" in t && o(0, (S = t.buttonLabel)),
        "panelClass" in t && o(1, (k = t.panelClass)),
        "isActive" in t && o(17, (C = t.isActive)),
        "onshow" in t && o(19, (M = t.onshow)),
        "$$scope" in t && o(40, (v = t.$$scope));
    }),
    (t.$$.update = () => {
      if (
        (8 & t.$$.dirty[0] && (i = A && A.getElement()),
        8519680 & t.$$.dirty[0] &&
          o(
            9,
            (h = C
              ? (t) => {
                  Z && (o(23, (Z = !1)), D(t) || o(17, (C = !1)));
                }
              : void 0)
          ),
        131072 & t.$$.dirty[0] && F.set(C ? 1 : 0),
        131072 & t.$$.dirty[0] && O.set(C ? 0 : -5),
        67108864 & t.$$.dirty[0] && o(25, (n = 1 - g / -5)),
        134348800 & t.$$.dirty[0] && f && C && I(),
        135397380 & t.$$.dirty[0] && f && R && E && C)
      ) {
        let t = E.x - f.x + 0.5 * E.width - 0.5 * R.width,
          e = E.y - f.y + E.height;
        const i = 12,
          n = 12,
          r = f.width - 12,
          a = f.height - 12,
          s = t,
          l = e,
          c = s + R.width,
          d = l + R.height;
        if (
          (s < i && (o(22, (z.x = s - i), z), (t = i)),
          c > r && (o(22, (z.x = c - r), z), (t = r - R.width)),
          d > a)
        ) {
          o(21, (L.y = -1), L);
          n < e - R.height - E.height
            ? (o(22, (z.y = 0), z), (e -= R.height + E.height))
            : (o(22, (z.y = e - (d - a)), z), (e -= d - a));
        } else o(21, (L.y = 1), L);
        fn(B, ($ = it(X(t, e), yc)), $);
      }
      536870912 & t.$$.dirty[0] && o(5, (r = y > 0)),
        536870912 & t.$$.dirty[0] && o(30, (a = y < 1)),
        337641472 & t.$$.dirty[0] &&
          o(
            31,
            (s = `translateX(${Math.round($.x) + 12 * L.x}px) translateY(${
              Math.round($.y) + 12 * L.y + L.y * g
            }px)`)
          ),
        (1610612736 & t.$$.dirty[0]) | (1 & t.$$.dirty[1]) &&
          o(
            6,
            (l = a
              ? `opacity: ${y}; pointer-events: ${
                  y < 1 ? "none" : "all"
                }; transform: ${s};`
              : "transform: " + s)
          ),
        33554432 & t.$$.dirty[0] && o(32, (c = 0.5 + 0.5 * n)),
        33554432 & t.$$.dirty[0] && o(33, (d = n)),
        (274726916 & t.$$.dirty[0]) | (6 & t.$$.dirty[1]) &&
          o(
            7,
            (u =
              $ &&
              R &&
              `opacity:${d};transform:scaleX(${c})rotate(45deg);top:${
                L.y < 0 ? z.y + R.height : 0
              }px;left:${z.x + 0.5 * R.width}px`)
          ),
        131072 & t.$$.dirty[0] &&
          o(
            8,
            (p = C
              ? (t) => {
                  D(t) || o(23, (Z = !0));
                }
              : void 0)
          ),
        (48 & t.$$.dirty[0]) | (8 & t.$$.dirty[1]) &&
          r &&
          b &&
          W &&
          W.parentNode !== b &&
          b.append(W),
        131072 & t.$$.dirty[0] && (C || o(24, (_ = void 0))),
        17301552 & t.$$.dirty[0] && r && W && M({ e: _, panel: W }),
        262145 & t.$$.dirty[0] &&
          o(
            10,
            (m = {
              label: S,
              class: ll(["PinturaPanelButton", w]),
              onkeydown: j,
              onclick: V,
            })
          );
    }),
    [
      S,
      k,
      R,
      A,
      W,
      r,
      l,
      u,
      p,
      h,
      m,
      T,
      P,
      F,
      B,
      O,
      (t) => {
        /esc/i.test(t.key) && (o(17, (C = !1)), i.focus());
      },
      C,
      w,
      M,
      E,
      L,
      z,
      Z,
      _,
      n,
      g,
      f,
      $,
      y,
      a,
      s,
      c,
      d,
      b,
      x,
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (A = t), o(3, A);
        });
      },
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (A = t), o(3, A);
        });
      },
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (W = t), o(4, W);
        });
      },
      (t) => o(2, (R = ft(t.detail))),
      v,
    ]
  );
}
class Ac extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        Rc,
        Pc,
        sn,
        {
          buttonClass: 18,
          buttonLabel: 0,
          panelClass: 1,
          isActive: 17,
          onshow: 19,
        },
        [-1, -1]
      );
  }
}
function Ec(t) {
  let e, o, i, n, r, a, s, l;
  const c = t[15].default,
    d = un(c, t, t[14], null);
  return {
    c() {
      (e = Tn("li")),
        (o = Tn("input")),
        (i = An()),
        (n = Tn("label")),
        d && d.c(),
        zn(o, "type", "radio"),
        zn(o, "class", "implicit"),
        zn(o, "id", t[7]),
        zn(o, "name", t[0]),
        (o.value = t[3]),
        (o.disabled = t[6]),
        (o.hidden = t[5]),
        (o.checked = t[4]),
        zn(n, "for", t[7]),
        zn(n, "title", t[2]),
        zn(e, "class", (r = ll(["PinturaRadioGroupOption", t[1]]))),
        zn(e, "data-hidden", t[5]),
        zn(e, "data-disabled", t[6]),
        zn(e, "data-selected", t[4]);
    },
    m(r, c) {
      Cn(r, e, c),
        kn(e, o),
        kn(e, i),
        kn(e, n),
        d && d.m(n, null),
        (a = !0),
        s ||
          ((l = [
            In(o, "change", Fn(t[16])),
            In(o, "keydown", t[9]),
            In(o, "click", t[10]),
          ]),
          (s = !0));
    },
    p(t, [i]) {
      (!a || 128 & i) && zn(o, "id", t[7]),
        (!a || 1 & i) && zn(o, "name", t[0]),
        (!a || 8 & i) && (o.value = t[3]),
        (!a || 64 & i) && (o.disabled = t[6]),
        (!a || 32 & i) && (o.hidden = t[5]),
        (!a || 16 & i) && (o.checked = t[4]),
        d && d.p && 16384 & i && hn(d, c, t, t[14], i, null, null),
        (!a || 128 & i) && zn(n, "for", t[7]),
        (!a || 4 & i) && zn(n, "title", t[2]),
        (!a || (2 & i && r !== (r = ll(["PinturaRadioGroupOption", t[1]])))) &&
          zn(e, "class", r),
        (!a || 32 & i) && zn(e, "data-hidden", t[5]),
        (!a || 64 & i) && zn(e, "data-disabled", t[6]),
        (!a || 16 & i) && zn(e, "data-selected", t[4]);
    },
    i(t) {
      a || (vr(d, t), (a = !0));
    },
    o(t) {
      wr(d, t), (a = !1);
    },
    d(t) {
      t && Mn(e), d && d.d(t), (s = !1), rn(l);
    },
  };
}
function Ic(t, e, o) {
  let i,
    n,
    { $$slots: r = {}, $$scope: a } = e,
    { name: s } = e,
    { class: l } = e,
    { label: c } = e,
    { id: d } = e,
    { value: u } = e,
    { checked: p } = e,
    { onkeydown: h } = e,
    { onclick: m } = e,
    { hidden: g = !1 } = e,
    { disabled: f = !1 } = e;
  const $ = Object.values(ql),
    y = Qn("keysPressed");
  dn(t, y, (t) => o(17, (n = t)));
  return (
    (t.$$set = (t) => {
      "name" in t && o(0, (s = t.name)),
        "class" in t && o(1, (l = t.class)),
        "label" in t && o(2, (c = t.label)),
        "id" in t && o(11, (d = t.id)),
        "value" in t && o(3, (u = t.value)),
        "checked" in t && o(4, (p = t.checked)),
        "onkeydown" in t && o(12, (h = t.onkeydown)),
        "onclick" in t && o(13, (m = t.onclick)),
        "hidden" in t && o(5, (g = t.hidden)),
        "disabled" in t && o(6, (f = t.disabled)),
        "$$scope" in t && o(14, (a = t.$$scope));
    }),
    (t.$$.update = () => {
      2049 & t.$$.dirty && o(7, (i = `${s}-${d}`));
    }),
    [
      s,
      l,
      c,
      u,
      p,
      g,
      f,
      i,
      y,
      (t) => {
        h(t);
      },
      (t) => {
        n.some((t) => $.includes(t)) || m(t);
      },
      d,
      h,
      m,
      a,
      r,
      function (e) {
        tr(t, e);
      },
    ]
  );
}
class Lc extends Br {
  constructor(t) {
    super(),
      zr(this, t, Ic, Ec, sn, {
        name: 0,
        class: 1,
        label: 2,
        id: 11,
        value: 3,
        checked: 4,
        onkeydown: 12,
        onclick: 13,
        hidden: 5,
        disabled: 6,
      });
  }
}
var Fc = (t = []) =>
  t.reduce(
    (t, e) =>
      (Qe(e) ? Qe(e[1]) : !!e.options)
        ? t.concat(Qe(e) ? e[1] : e.options)
        : (t.push(e), t),
    []
  );
const zc = (t, e, o) => {
  let i;
  return (
    Qe(t)
      ? (i = { id: e, value: t[0], label: t[1], ...(t[2] || {}) })
      : ((i = t), (i.id = null != i.id ? i.id : e)),
    o ? o(i) : i
  );
};
var Bc = (t, e, o) => (S(t) ? t(e, o) : t);
const Oc = (t, e) =>
  t.map(([t, o, i]) => {
    if (Qe(o)) return [Bc(t, e), Oc(o, e)];
    {
      const n = [t, Bc(o, e)];
      if (i) {
        let t = { ...i };
        i.icon && (t.icon = Bc(i.icon, e)), n.push(t);
      }
      return n;
    }
  });
var Dc = (t, e) => Oc(t, e),
  Wc = (t, e) => (Array.isArray(t) && Array.isArray(e) ? la(t, e) : t === e);
function _c(t, e, o) {
  const i = t.slice();
  return (i[27] = e[o]), i;
}
const Zc = (t) => ({ option: 2048 & t[0] }),
  Vc = (t) => ({ option: t[27] });
function jc(t, e, o) {
  const i = t.slice();
  return (i[27] = e[o]), i;
}
const Nc = (t) => ({ option: 2048 & t[0] }),
  Hc = (t) => ({ option: t[27] }),
  Uc = (t) => ({ option: 2048 & t[0] }),
  Xc = (t) => ({ option: t[27] });
function Yc(t) {
  let e,
    o,
    i,
    n,
    r,
    a = [],
    s = new Map(),
    l = t[1] && Gc(t),
    c = t[11];
  const d = (t) => t[27].id;
  for (let e = 0; e < c.length; e += 1) {
    let o = _c(t, c, e),
      i = d(o);
    s.set(i, (a[e] = sd(i, o)));
  }
  return {
    c() {
      (e = Tn("fieldset")), l && l.c(), (o = An()), (i = Tn("ul"));
      for (let t = 0; t < a.length; t += 1) a[t].c();
      zn(i, "class", "PinturaRadioGroupOptions"),
        zn(e, "class", (n = ll(["PinturaRadioGroup", t[3]]))),
        zn(e, "data-layout", t[5]),
        zn(e, "title", t[7]);
    },
    m(t, n) {
      Cn(t, e, n), l && l.m(e, null), kn(e, o), kn(e, i);
      for (let t = 0; t < a.length; t += 1) a[t].m(i, null);
      r = !0;
    },
    p(t, u) {
      t[1]
        ? l
          ? l.p(t, u)
          : ((l = Gc(t)), l.c(), l.m(e, o))
        : l && (l.d(1), (l = null)),
        8420177 & u[0] &&
          ((c = t[11]),
          br(),
          (a = Pr(a, u, d, 1, t, c, s, i, Tr, sd, null, _c)),
          xr()),
        (!r || (8 & u[0] && n !== (n = ll(["PinturaRadioGroup", t[3]])))) &&
          zn(e, "class", n),
        (!r || 32 & u[0]) && zn(e, "data-layout", t[5]),
        (!r || 128 & u[0]) && zn(e, "title", t[7]);
    },
    i(t) {
      if (!r) {
        for (let t = 0; t < c.length; t += 1) vr(a[t]);
        r = !0;
      }
    },
    o(t) {
      for (let t = 0; t < a.length; t += 1) wr(a[t]);
      r = !1;
    },
    d(t) {
      t && Mn(e), l && l.d();
      for (let t = 0; t < a.length; t += 1) a[t].d();
    },
  };
}
function Gc(t) {
  let e, o, i;
  return {
    c() {
      (e = Tn("legend")),
        (o = Rn(t[1])),
        zn(e, "class", (i = t[2] && "implicit"));
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, n) {
      2 & n[0] && On(o, t[1]),
        4 & n[0] && i !== (i = t[2] && "implicit") && zn(e, "class", i);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function qc(t) {
  let e, o;
  return (
    (e = new Lc({
      props: {
        name: t[4],
        label: t[27].label,
        id: t[27].id,
        value: t[27].value,
        disabled: t[27].disabled,
        hidden: t[27].hidden,
        class: t[8],
        checked: t[12](t[27]) === t[0],
        onkeydown: t[13](t[27]),
        onclick: t[14](t[27]),
        $$slots: { default: [ed] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        16 & o[0] && (i.name = t[4]),
          2048 & o[0] && (i.label = t[27].label),
          2048 & o[0] && (i.id = t[27].id),
          2048 & o[0] && (i.value = t[27].value),
          2048 & o[0] && (i.disabled = t[27].disabled),
          2048 & o[0] && (i.hidden = t[27].hidden),
          256 & o[0] && (i.class = t[8]),
          2049 & o[0] && (i.checked = t[12](t[27]) === t[0]),
          2048 & o[0] && (i.onkeydown = t[13](t[27])),
          2048 & o[0] && (i.onclick = t[14](t[27])),
          8390720 & o[0] && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Kc(t) {
  let e,
    o,
    i,
    n,
    r,
    a,
    s = [],
    l = new Map();
  const c = t[22].group,
    d = un(c, t, t[23], Xc),
    u =
      d ||
      (function (t) {
        let e,
          o,
          i = t[27].label + "";
        return {
          c() {
            (e = Tn("span")),
              (o = Rn(i)),
              zn(e, "class", "PinturaRadioGroupOptionGroupLabel");
          },
          m(t, i) {
            Cn(t, e, i), kn(e, o);
          },
          p(t, e) {
            2048 & e[0] && i !== (i = t[27].label + "") && On(o, i);
          },
          d(t) {
            t && Mn(e);
          },
        };
      })(t);
  let p = t[27].options;
  const h = (t) => t[27].id;
  for (let e = 0; e < p.length; e += 1) {
    let o = jc(t, p, e),
      i = h(o);
    l.set(i, (s[e] = ad(i, o)));
  }
  return {
    c() {
      (e = Tn("li")), u && u.c(), (o = An()), (i = Tn("ul"));
      for (let t = 0; t < s.length; t += 1) s[t].c();
      (n = An()),
        zn(i, "class", "PinturaRadioGroupOptions"),
        zn(e, "class", (r = ll(["PinturaRadioGroupOptionGroup", t[9]])));
    },
    m(t, r) {
      Cn(t, e, r), u && u.m(e, null), kn(e, o), kn(e, i);
      for (let t = 0; t < s.length; t += 1) s[t].m(i, null);
      kn(e, n), (a = !0);
    },
    p(t, o) {
      d
        ? d.p && 8390656 & o[0] && hn(d, c, t, t[23], o, Uc, Xc)
        : u && u.p && 2048 & o[0] && u.p(t, o),
        8419665 & o[0] &&
          ((p = t[27].options),
          br(),
          (s = Pr(s, o, h, 1, t, p, l, i, Tr, ad, null, jc)),
          xr()),
        (!a ||
          (512 & o[0] &&
            r !== (r = ll(["PinturaRadioGroupOptionGroup", t[9]])))) &&
          zn(e, "class", r);
    },
    i(t) {
      if (!a) {
        vr(u, t);
        for (let t = 0; t < p.length; t += 1) vr(s[t]);
        a = !0;
      }
    },
    o(t) {
      wr(u, t);
      for (let t = 0; t < s.length; t += 1) wr(s[t]);
      a = !1;
    },
    d(t) {
      t && Mn(e), u && u.d(t);
      for (let t = 0; t < s.length; t += 1) s[t].d();
    },
  };
}
function Jc(t) {
  let e, o;
  return (
    (e = new zl({
      props: { $$slots: { default: [Qc] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        8390656 & o[0] && (i.$$scope = { dirty: o, ctx: t }), e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Qc(t) {
  let e,
    o = t[27].icon + "";
  return {
    c() {
      e = Pn("g");
    },
    m(t, i) {
      Cn(t, e, i), (e.innerHTML = o);
    },
    p(t, i) {
      2048 & i[0] && o !== (o = t[27].icon + "") && (e.innerHTML = o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function td(t) {
  let e,
    o,
    i = t[27].label + "";
  return {
    c() {
      (e = Tn("span")), (o = Rn(i)), zn(e, "class", t[6]);
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, n) {
      2048 & n[0] && i !== (i = t[27].label + "") && On(o, i),
        64 & n[0] && zn(e, "class", t[6]);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function ed(t) {
  let e;
  const o = t[22].option,
    i = un(o, t, t[23], Vc),
    n =
      i ||
      (function (t) {
        let e,
          o,
          i,
          n = t[27].icon && Jc(t),
          r = !t[27].hideLabel && td(t);
        return {
          c() {
            n && n.c(), (e = An()), r && r.c(), (o = An());
          },
          m(t, a) {
            n && n.m(t, a), Cn(t, e, a), r && r.m(t, a), Cn(t, o, a), (i = !0);
          },
          p(t, i) {
            t[27].icon
              ? n
                ? (n.p(t, i), 2048 & i[0] && vr(n, 1))
                : ((n = Jc(t)), n.c(), vr(n, 1), n.m(e.parentNode, e))
              : n &&
                (br(),
                wr(n, 1, 1, () => {
                  n = null;
                }),
                xr()),
              t[27].hideLabel
                ? r && (r.d(1), (r = null))
                : r
                ? r.p(t, i)
                : ((r = td(t)), r.c(), r.m(o.parentNode, o));
          },
          i(t) {
            i || (vr(n), (i = !0));
          },
          o(t) {
            wr(n), (i = !1);
          },
          d(t) {
            n && n.d(t), t && Mn(e), r && r.d(t), t && Mn(o);
          },
        };
      })(t);
  return {
    c() {
      n && n.c();
    },
    m(t, o) {
      n && n.m(t, o), (e = !0);
    },
    p(t, e) {
      i
        ? i.p && 8390656 & e[0] && hn(i, o, t, t[23], e, Zc, Vc)
        : n && n.p && 2112 & e[0] && n.p(t, e);
    },
    i(t) {
      e || (vr(n, t), (e = !0));
    },
    o(t) {
      wr(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function od(t) {
  let e, o;
  return (
    (e = new zl({
      props: { $$slots: { default: [id] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        8390656 & o[0] && (i.$$scope = { dirty: o, ctx: t }), e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function id(t) {
  let e,
    o = t[27].icon + "";
  return {
    c() {
      e = Pn("g");
    },
    m(t, i) {
      Cn(t, e, i), (e.innerHTML = o);
    },
    p(t, i) {
      2048 & i[0] && o !== (o = t[27].icon + "") && (e.innerHTML = o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function nd(t) {
  let e,
    o,
    i = t[27].label + "";
  return {
    c() {
      (e = Tn("span")), (o = Rn(i)), zn(e, "class", t[6]);
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, n) {
      2048 & n[0] && i !== (i = t[27].label + "") && On(o, i),
        64 & n[0] && zn(e, "class", t[6]);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function rd(t) {
  let e;
  const o = t[22].option,
    i = un(o, t, t[23], Hc),
    n =
      i ||
      (function (t) {
        let e,
          o,
          i,
          n = t[27].icon && od(t),
          r = !t[27].hideLabel && nd(t);
        return {
          c() {
            n && n.c(), (e = An()), r && r.c(), (o = An());
          },
          m(t, a) {
            n && n.m(t, a), Cn(t, e, a), r && r.m(t, a), Cn(t, o, a), (i = !0);
          },
          p(t, i) {
            t[27].icon
              ? n
                ? (n.p(t, i), 2048 & i[0] && vr(n, 1))
                : ((n = od(t)), n.c(), vr(n, 1), n.m(e.parentNode, e))
              : n &&
                (br(),
                wr(n, 1, 1, () => {
                  n = null;
                }),
                xr()),
              t[27].hideLabel
                ? r && (r.d(1), (r = null))
                : r
                ? r.p(t, i)
                : ((r = nd(t)), r.c(), r.m(o.parentNode, o));
          },
          i(t) {
            i || (vr(n), (i = !0));
          },
          o(t) {
            wr(n), (i = !1);
          },
          d(t) {
            n && n.d(t), t && Mn(e), r && r.d(t), t && Mn(o);
          },
        };
      })(t);
  return {
    c() {
      n && n.c();
    },
    m(t, o) {
      n && n.m(t, o), (e = !0);
    },
    p(t, e) {
      i
        ? i.p && 8390656 & e[0] && hn(i, o, t, t[23], e, Nc, Hc)
        : n && n.p && 2112 & e[0] && n.p(t, e);
    },
    i(t) {
      e || (vr(n, t), (e = !0));
    },
    o(t) {
      wr(n, t), (e = !1);
    },
    d(t) {
      n && n.d(t);
    },
  };
}
function ad(t, e) {
  let o, i, n;
  return (
    (i = new Lc({
      props: {
        name: e[4],
        label: e[27].label,
        id: e[27].id,
        value: e[27].value,
        disabled: e[27].disabled,
        hidden: e[27].hidden,
        class: e[8],
        checked: e[12](e[27]) === e[0],
        onkeydown: e[13](e[27]),
        onclick: e[14](e[27]),
        $$slots: { default: [rd] },
        $$scope: { ctx: e },
      },
    })),
    {
      key: t,
      first: null,
      c() {
        (o = En()), Ir(i.$$.fragment), (this.first = o);
      },
      m(t, e) {
        Cn(t, o, e), Lr(i, t, e), (n = !0);
      },
      p(t, o) {
        e = t;
        const n = {};
        16 & o[0] && (n.name = e[4]),
          2048 & o[0] && (n.label = e[27].label),
          2048 & o[0] && (n.id = e[27].id),
          2048 & o[0] && (n.value = e[27].value),
          2048 & o[0] && (n.disabled = e[27].disabled),
          2048 & o[0] && (n.hidden = e[27].hidden),
          256 & o[0] && (n.class = e[8]),
          2049 & o[0] && (n.checked = e[12](e[27]) === e[0]),
          2048 & o[0] && (n.onkeydown = e[13](e[27])),
          2048 & o[0] && (n.onclick = e[14](e[27])),
          8390720 & o[0] && (n.$$scope = { dirty: o, ctx: e }),
          i.$set(n);
      },
      i(t) {
        n || (vr(i.$$.fragment, t), (n = !0));
      },
      o(t) {
        wr(i.$$.fragment, t), (n = !1);
      },
      d(t) {
        t && Mn(o), Fr(i, t);
      },
    }
  );
}
function sd(t, e) {
  let o, i, n, r, a;
  const s = [Kc, qc],
    l = [];
  function c(t, e) {
    return t[27].options ? 0 : 1;
  }
  return (
    (i = c(e)),
    (n = l[i] = s[i](e)),
    {
      key: t,
      first: null,
      c() {
        (o = En()), n.c(), (r = En()), (this.first = o);
      },
      m(t, e) {
        Cn(t, o, e), l[i].m(t, e), Cn(t, r, e), (a = !0);
      },
      p(t, o) {
        let a = i;
        (i = c((e = t))),
          i === a
            ? l[i].p(e, o)
            : (br(),
              wr(l[a], 1, 1, () => {
                l[a] = null;
              }),
              xr(),
              (n = l[i]),
              n ? n.p(e, o) : ((n = l[i] = s[i](e)), n.c()),
              vr(n, 1),
              n.m(r.parentNode, r));
      },
      i(t) {
        a || (vr(n), (a = !0));
      },
      o(t) {
        wr(n), (a = !1);
      },
      d(t) {
        t && Mn(o), l[i].d(t), t && Mn(r);
      },
    }
  );
}
function ld(t) {
  let e,
    o,
    i,
    n = t[10].length && Yc(t);
  return {
    c() {
      n && n.c(), (e = An()), (o = En());
    },
    m(t, r) {
      n && n.m(t, r), Cn(t, e, r), Cn(t, o, r), (i = !0);
    },
    p(t, o) {
      t[10].length
        ? n
          ? (n.p(t, o), 1024 & o[0] && vr(n, 1))
          : ((n = Yc(t)), n.c(), vr(n, 1), n.m(e.parentNode, e))
        : n &&
          (br(),
          wr(n, 1, 1, () => {
            n = null;
          }),
          xr());
    },
    i(t) {
      i || (vr(n), vr(false), (i = !0));
    },
    o(t) {
      wr(n), wr(false), (i = !1);
    },
    d(t) {
      n && n.d(t), t && Mn(e), t && Mn(o);
    },
  };
}
function cd(t, e, o) {
  let i,
    n,
    r,
    { $$slots: a = {}, $$scope: s } = e;
  const l = Kn();
  let { label: c } = e,
    { hideLabel: d = !0 } = e,
    { class: u } = e,
    { name: p = "radio-group-" + T() } = e,
    { selectedIndex: h = -1 } = e,
    { options: m = [] } = e,
    { onchange: g } = e,
    { layout: f } = e,
    { optionMapper: $ } = e,
    { optionFilter: y } = e,
    { value: b } = e,
    { optionLabelClass: x } = e,
    { title: v } = e,
    { locale: w } = e,
    { optionClass: S } = e,
    { optionGroupClass: k } = e;
  const C = (t) => r.findIndex((e) => e.id === t.id),
    M = (t, e) => {
      o(0, (h = C(t)));
      const i = { index: h, ...t };
      ((t, ...e) => {
        t && t(...e);
      })(g, i, e),
        l("change", i);
    };
  return (
    (t.$$set = (t) => {
      "label" in t && o(1, (c = t.label)),
        "hideLabel" in t && o(2, (d = t.hideLabel)),
        "class" in t && o(3, (u = t.class)),
        "name" in t && o(4, (p = t.name)),
        "selectedIndex" in t && o(0, (h = t.selectedIndex)),
        "options" in t && o(15, (m = t.options)),
        "onchange" in t && o(16, (g = t.onchange)),
        "layout" in t && o(5, (f = t.layout)),
        "optionMapper" in t && o(17, ($ = t.optionMapper)),
        "optionFilter" in t && o(18, (y = t.optionFilter)),
        "value" in t && o(19, (b = t.value)),
        "optionLabelClass" in t && o(6, (x = t.optionLabelClass)),
        "title" in t && o(7, (v = t.title)),
        "locale" in t && o(20, (w = t.locale)),
        "optionClass" in t && o(8, (S = t.optionClass)),
        "optionGroupClass" in t && o(9, (k = t.optionGroupClass)),
        "$$scope" in t && o(23, (s = t.$$scope));
    }),
    (t.$$.update = () => {
      1343488 & t.$$.dirty[0] && o(10, (i = Dc(y ? m.filter(y) : m, w))),
        132096 & t.$$.dirty[0] &&
          o(
            11,
            (n = ((t = [], e) => {
              let o = 0;
              return t.map(
                (t) => (
                  o++,
                  Qe(t)
                    ? Qe(t[1])
                      ? {
                          id: o,
                          label: t[0],
                          options: t[1].map((t) => zc(t, ++o, e)),
                        }
                      : zc(t, o, e)
                    : t.options
                    ? {
                        id: t.id || o,
                        label: t.label,
                        options: t.options.map((t) => zc(t, ++o, e)),
                      }
                    : zc(t, o, e)
                )
              );
            })(i, $))
          ),
        2048 & t.$$.dirty[0] && o(21, (r = Fc(n))),
        2654209 & t.$$.dirty[0] &&
          h < 0 &&
          (o(0, (h = r.findIndex((t) => Wc(t.value, b)))),
          h < 0 && o(0, (h = ((t) => t.findIndex((t) => void 0 === t[0]))(m))));
    }),
    [
      h,
      c,
      d,
      u,
      p,
      f,
      x,
      v,
      S,
      k,
      i,
      n,
      C,
      (t) => (e) => {
        var o;
        ((o = e.key), /enter| /i.test(o)) && M(t, e);
      },
      (t) => (e) => {
        M(t, e);
      },
      m,
      g,
      $,
      y,
      b,
      w,
      r,
      a,
      s,
    ]
  );
}
class dd extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        cd,
        ld,
        sn,
        {
          label: 1,
          hideLabel: 2,
          class: 3,
          name: 4,
          selectedIndex: 0,
          options: 15,
          onchange: 16,
          layout: 5,
          optionMapper: 17,
          optionFilter: 18,
          value: 19,
          optionLabelClass: 6,
          title: 7,
          locale: 20,
          optionClass: 8,
          optionGroupClass: 9,
        },
        [-1, -1]
      );
  }
}
const ud = (t) => ({}),
  pd = (t) => ({});
function hd(t) {
  let e, o;
  return (
    (e = new zl({
      props: {
        class: "PinturaButtonIcon",
        $$slots: { default: [md] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        268435520 & o && (i.$$scope = { dirty: o, ctx: t }), e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function md(t) {
  let e;
  return {
    c() {
      e = Pn("g");
    },
    m(o, i) {
      Cn(o, e, i), (e.innerHTML = t[6]);
    },
    p(t, o) {
      64 & o && (e.innerHTML = t[6]);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function gd(t) {
  let e,
    o,
    i,
    n,
    r,
    a,
    s,
    l,
    c = (t[2] || t[18]) + "",
    d = t[6] && hd(t);
  return {
    c() {
      (e = Tn("span")),
        d && d.c(),
        (o = An()),
        (i = Tn("span")),
        (n = Rn(c)),
        zn(
          i,
          "class",
          (r = ll(["PinturaButtonLabel", t[3], t[5] && "implicit"]))
        ),
        zn(e, "slot", "label"),
        zn(e, "title", (a = Bc(t[1], t[15]))),
        zn(e, "class", (s = ll(["PinturaButtonInner", t[4]])));
    },
    m(t, r) {
      Cn(t, e, r), d && d.m(e, null), kn(e, o), kn(e, i), kn(i, n), (l = !0);
    },
    p(t, u) {
      t[6]
        ? d
          ? (d.p(t, u), 64 & u && vr(d, 1))
          : ((d = hd(t)), d.c(), vr(d, 1), d.m(e, o))
        : d &&
          (br(),
          wr(d, 1, 1, () => {
            d = null;
          }),
          xr()),
        (!l || 262148 & u) && c !== (c = (t[2] || t[18]) + "") && On(n, c),
        (!l ||
          (40 & u &&
            r !==
              (r = ll(["PinturaButtonLabel", t[3], t[5] && "implicit"])))) &&
          zn(i, "class", r),
        (!l || (32770 & u && a !== (a = Bc(t[1], t[15])))) && zn(e, "title", a),
        (!l || (16 & u && s !== (s = ll(["PinturaButtonInner", t[4]])))) &&
          zn(e, "class", s);
    },
    i(t) {
      l || (vr(d), (l = !0));
    },
    o(t) {
      wr(d), (l = !1);
    },
    d(t) {
      t && Mn(e), d && d.d();
    },
  };
}
function fd(t) {
  let e,
    o,
    i = t[30].label + "";
  return {
    c() {
      (e = Tn("span")), (o = Rn(i)), zn(e, "slot", "group");
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, e) {
      1073741824 & e && i !== (i = t[30].label + "") && On(o, i);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function $d(t) {
  let e, o;
  return (
    (e = new zl({
      props: {
        style: S(t[13]) ? t[13](t[30].value) : t[13],
        $$slots: { default: [yd] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        1073750016 & o && (i.style = S(t[13]) ? t[13](t[30].value) : t[13]),
          1342177280 & o && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function yd(t) {
  let e,
    o = t[30].icon + "";
  return {
    c() {
      e = Pn("g");
    },
    m(t, i) {
      Cn(t, e, i), (e.innerHTML = o);
    },
    p(t, i) {
      1073741824 & i && o !== (o = t[30].icon + "") && (e.innerHTML = o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function bd(t) {
  let e,
    o,
    i = t[30].sublabel + "";
  return {
    c() {
      (e = Tn("span")),
        (o = Rn(i)),
        zn(e, "class", "PinturaDropdownOptionSublabel");
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, e) {
      1073741824 & e && i !== (i = t[30].sublabel + "") && On(o, i);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function xd(t) {
  let e,
    o,
    i,
    n,
    r,
    a,
    s,
    l,
    c = t[30].label + "",
    d = t[30].icon && $d(t),
    u = t[30].sublabel && bd(t);
  return {
    c() {
      (e = Tn("span")),
        d && d.c(),
        (o = An()),
        (i = Tn("span")),
        (n = Rn(c)),
        (r = An()),
        u && u.c(),
        zn(i, "style", (a = S(t[14]) ? t[14](t[30].value) : t[14])),
        zn(i, "class", (s = ll(["PinturaDropdownOptionLabel", t[10]]))),
        zn(e, "slot", "option");
    },
    m(t, a) {
      Cn(t, e, a),
        d && d.m(e, null),
        kn(e, o),
        kn(e, i),
        kn(i, n),
        kn(i, r),
        u && u.m(i, null),
        (l = !0);
    },
    p(t, r) {
      t[30].icon
        ? d
          ? (d.p(t, r), 1073741824 & r && vr(d, 1))
          : ((d = $d(t)), d.c(), vr(d, 1), d.m(e, o))
        : d &&
          (br(),
          wr(d, 1, 1, () => {
            d = null;
          }),
          xr()),
        (!l || 1073741824 & r) && c !== (c = t[30].label + "") && On(n, c),
        t[30].sublabel
          ? u
            ? u.p(t, r)
            : ((u = bd(t)), u.c(), u.m(i, null))
          : u && (u.d(1), (u = null)),
        (!l ||
          (1073758208 & r &&
            a !== (a = S(t[14]) ? t[14](t[30].value) : t[14]))) &&
          zn(i, "style", a),
        (!l ||
          (1024 & r &&
            s !== (s = ll(["PinturaDropdownOptionLabel", t[10]])))) &&
          zn(i, "class", s);
    },
    i(t) {
      l || (vr(d), (l = !0));
    },
    o(t) {
      wr(d), (l = !1);
    },
    d(t) {
      t && Mn(e), d && d.d(), u && u.d();
    },
  };
}
function vd(t) {
  let e, o, i, n, r, a;
  const s = t[26].controls,
    l = un(s, t, t[28], pd);
  return (
    (i = new dd({
      props: {
        class: "PinturaOptionsList PinturaScrollableContent",
        name: t[7],
        value: t[9],
        selectedIndex: t[8],
        optionFilter: t[11],
        optionMapper: t[12],
        optionLabelClass: ll(["PinturaDropdownOptionLabel", t[10]]),
        optionGroupClass: "PinturaListOptionGroup",
        optionClass: "PinturaListOption",
        options: t[16],
        onchange: t[19],
        $$slots: {
          option: [
            xd,
            ({ option: t }) => ({ 30: t }),
            ({ option: t }) => (t ? 1073741824 : 0),
          ],
          group: [
            fd,
            ({ option: t }) => ({ 30: t }),
            ({ option: t }) => (t ? 1073741824 : 0),
          ],
        },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (e = Tn("div")),
          l && l.c(),
          (o = An()),
          Ir(i.$$.fragment),
          zn(e, "slot", "details"),
          zn(e, "class", "PinturaOptionsListWrapper");
      },
      m(s, c) {
        Cn(s, e, c),
          l && l.m(e, null),
          kn(e, o),
          Lr(i, e, null),
          (n = !0),
          r || ((a = In(e, "keydown", t[21])), (r = !0));
      },
      p(t, e) {
        l && l.p && 268435456 & e && hn(l, s, t, t[28], e, ud, pd);
        const o = {};
        128 & e && (o.name = t[7]),
          512 & e && (o.value = t[9]),
          256 & e && (o.selectedIndex = t[8]),
          2048 & e && (o.optionFilter = t[11]),
          4096 & e && (o.optionMapper = t[12]),
          1024 & e &&
            (o.optionLabelClass = ll(["PinturaDropdownOptionLabel", t[10]])),
          65536 & e && (o.options = t[16]),
          1342202880 & e && (o.$$scope = { dirty: e, ctx: t }),
          i.$set(o);
      },
      i(t) {
        n || (vr(l, t), vr(i.$$.fragment, t), (n = !0));
      },
      o(t) {
        wr(l, t), wr(i.$$.fragment, t), (n = !1);
      },
      d(t) {
        t && Mn(e), l && l.d(t), Fr(i), (r = !1), a();
      },
    }
  );
}
function wd(t) {
  let e, o, i;
  function n(e) {
    t[27](e);
  }
  let r = {
    onshow: t[20],
    buttonClass: ll([
      "PinturaDropdownButton",
      t[0],
      t[5] && "PinturaDropdownIconOnly",
    ]),
    $$slots: { details: [vd], label: [gd] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[17] && (r.isActive = t[17]),
    (e = new Ac({ props: r })),
    or.push(() => Er(e, "isActive", n)),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, o) {
        Lr(e, t, o), (i = !0);
      },
      p(t, [i]) {
        const n = {};
        33 & i &&
          (n.buttonClass = ll([
            "PinturaDropdownButton",
            t[0],
            t[5] && "PinturaDropdownIconOnly",
          ])),
          268828670 & i && (n.$$scope = { dirty: i, ctx: t }),
          !o &&
            131072 & i &&
            ((o = !0), (n.isActive = t[17]), dr(() => (o = !1))),
          e.$set(n);
      },
      i(t) {
        i || (vr(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Sd(t, e, o) {
  let i,
    r,
    { $$slots: a = {}, $$scope: s } = e,
    { class: l } = e,
    { title: c } = e,
    { label: d } = e,
    { labelClass: u } = e,
    { innerClass: p } = e,
    { hideLabel: h = !1 } = e,
    { icon: m } = e,
    { name: g } = e,
    { options: f = [] } = e,
    { selectedIndex: $ = -1 } = e,
    { value: y } = e,
    { optionLabelClass: b } = e,
    { optionFilter: x } = e,
    { optionMapper: v } = e,
    { optionIconStyle: w } = e,
    { optionLabelStyle: S } = e,
    { locale: k } = e,
    { onchange: C = n } = e,
    { onload: M = n } = e,
    { ondestroy: T = n } = e;
  let P;
  return (
    Yn(() => M({ options: f })),
    qn(() => T({ options: f })),
    (t.$$set = (t) => {
      "class" in t && o(0, (l = t.class)),
        "title" in t && o(1, (c = t.title)),
        "label" in t && o(2, (d = t.label)),
        "labelClass" in t && o(3, (u = t.labelClass)),
        "innerClass" in t && o(4, (p = t.innerClass)),
        "hideLabel" in t && o(5, (h = t.hideLabel)),
        "icon" in t && o(6, (m = t.icon)),
        "name" in t && o(7, (g = t.name)),
        "options" in t && o(22, (f = t.options)),
        "selectedIndex" in t && o(8, ($ = t.selectedIndex)),
        "value" in t && o(9, (y = t.value)),
        "optionLabelClass" in t && o(10, (b = t.optionLabelClass)),
        "optionFilter" in t && o(11, (x = t.optionFilter)),
        "optionMapper" in t && o(12, (v = t.optionMapper)),
        "optionIconStyle" in t && o(13, (w = t.optionIconStyle)),
        "optionLabelStyle" in t && o(14, (S = t.optionLabelStyle)),
        "locale" in t && o(15, (k = t.locale)),
        "onchange" in t && o(23, (C = t.onchange)),
        "onload" in t && o(24, (M = t.onload)),
        "ondestroy" in t && o(25, (T = t.ondestroy)),
        "$$scope" in t && o(28, (s = t.$$scope));
    }),
    (t.$$.update = () => {
      4227072 & t.$$.dirty && o(16, (i = k ? Dc(f, k) : f)),
        66048 & t.$$.dirty &&
          o(
            18,
            (r =
              i.reduce((t, e) => {
                if (t) return t;
                const o = Array.isArray(e) ? e : [e, e],
                  [i, n] = o;
                return Wc(i, y) ? n : void 0;
              }, void 0) ||
              ((t) => {
                const e = t.find((t) => void 0 === t[0]);
                if (e) return e[1];
              })(i) ||
              y)
          );
    }),
    [
      l,
      c,
      d,
      u,
      p,
      h,
      m,
      g,
      $,
      y,
      b,
      x,
      v,
      w,
      S,
      k,
      i,
      P,
      r,
      (t) => {
        o(18, (r = t.value)), C(t), o(17, (P = !1));
      },
      ({ e: t, panel: e }) => {
        if (t && t.key && /up|down/i.test(t.key))
          return bc(e.querySelector("input:not([disabled])"));
        bc(e.querySelector("fieldset"));
      },
      (t) => {
        /tab/i.test(t.key) && t.preventDefault();
      },
      f,
      C,
      M,
      T,
      a,
      function (t) {
        (P = t), o(17, P);
      },
      s,
    ]
  );
}
class kd extends Br {
  constructor(t) {
    super(),
      zr(this, t, Sd, wd, sn, {
        class: 0,
        title: 1,
        label: 2,
        labelClass: 3,
        innerClass: 4,
        hideLabel: 5,
        icon: 6,
        name: 7,
        options: 22,
        selectedIndex: 8,
        value: 9,
        optionLabelClass: 10,
        optionFilter: 11,
        optionMapper: 12,
        optionIconStyle: 13,
        optionLabelStyle: 14,
        locale: 15,
        onchange: 23,
        onload: 24,
        ondestroy: 25,
      });
  }
}
function Cd(t) {
  let e;
  return {
    c() {
      (e = Tn("div")), zn(e, "slot", "details");
    },
    m(o, i) {
      Cn(o, e, i), t[8](e);
    },
    p: Qi,
    d(o) {
      o && Mn(e), t[8](null);
    },
  };
}
function Md(t) {
  let e, o, i;
  function n(e) {
    t[9](e);
  }
  let r = {
    buttonLabel: t[0],
    buttonClass: t[1],
    $$slots: { details: [Cd] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[3] && (r.isActive = t[3]),
    (e = new Ac({ props: r })),
    or.push(() => Er(e, "isActive", n)),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, o) {
        Lr(e, t, o), (i = !0);
      },
      p(t, [i]) {
        const n = {};
        1 & i && (n.buttonLabel = t[0]),
          2 & i && (n.buttonClass = t[1]),
          1028 & i && (n.$$scope = { dirty: i, ctx: t }),
          !o && 8 & i && ((o = !0), (n.isActive = t[3]), dr(() => (o = !1))),
          e.$set(n);
      },
      i(t) {
        i || (vr(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Td(t, e, o) {
  let { buttonLabel: i } = e,
    { buttonClass: r } = e,
    { root: a } = e,
    { ondestroy: s = n } = e;
  let l,
    c = !1;
  return (
    qn(s),
    (t.$$set = (t) => {
      "buttonLabel" in t && o(0, (i = t.buttonLabel)),
        "buttonClass" in t && o(1, (r = t.buttonClass)),
        "root" in t && o(4, (a = t.root)),
        "ondestroy" in t && o(5, (s = t.ondestroy));
    }),
    (t.$$.update = () => {
      20 & t.$$.dirty &&
        l &&
        a &&
        l.firstChild !== a &&
        (l.hasChildNodes() ? l.replaceChild(a, l.firstChild) : l.append(a));
    }),
    [
      i,
      r,
      l,
      c,
      a,
      s,
      () => o(3, (c = !1)),
      () => o(3, (c = !0)),
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (l = t), o(2, l);
        });
      },
      function (t) {
        (c = t), o(3, c);
      },
    ]
  );
}
class Pd extends Br {
  constructor(t) {
    super(),
      zr(this, t, Td, Md, sn, {
        buttonLabel: 0,
        buttonClass: 1,
        root: 4,
        ondestroy: 5,
        hide: 6,
        show: 7,
      });
  }
  get hide() {
    return this.$$.ctx[6];
  }
  get show() {
    return this.$$.ctx[7];
  }
}
var Rd = (t, e, o) => (t - e) / (o - e);
function Ad(t) {
  let e;
  return {
    c() {
      (e = Pn("path")), zn(e, "d", "M8 12 h8 M12 8 v8");
    },
    m(t, o) {
      Cn(t, e, o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Ed(t) {
  let e;
  return {
    c() {
      (e = Pn("path")), zn(e, "d", "M9 12 h6");
    },
    m(t, o) {
      Cn(t, e, o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Id(t) {
  let e, o, i, n, r, a, s, l, c, d, u, p, h, m, g, f, $, y;
  return (
    (u = new zl({
      props: { $$slots: { default: [Ad] }, $$scope: { ctx: t } },
    })),
    (m = new zl({
      props: { $$slots: { default: [Ed] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        (e = Tn("div")),
          (o = Tn("div")),
          (i = Tn("input")),
          (n = An()),
          (r = Tn("div")),
          (a = An()),
          (s = Tn("div")),
          (l = Tn("div")),
          (c = An()),
          (d = Tn("button")),
          Ir(u.$$.fragment),
          (p = An()),
          (h = Tn("button")),
          Ir(m.$$.fragment),
          zn(i, "type", "range"),
          zn(i, "id", t[3]),
          zn(i, "min", t[0]),
          zn(i, "max", t[1]),
          zn(i, "step", t[2]),
          (i.value = t[8]),
          zn(r, "class", "PinturaSliderTrack"),
          zn(r, "style", t[4]),
          zn(l, "class", "PinturaSliderKnob"),
          zn(l, "style", t[5]),
          zn(s, "class", "PinturaSliderKnobController"),
          zn(s, "style", t[10]),
          zn(o, "class", "PinturaSliderControl"),
          zn(d, "type", "button"),
          zn(d, "aria-label", "Increase"),
          zn(h, "type", "button"),
          zn(h, "aria-label", "Decrease"),
          zn(e, "class", (g = ll(["PinturaSlider", t[7]]))),
          zn(e, "data-direction", t[6]);
      },
      m(g, b) {
        Cn(g, e, b),
          kn(e, o),
          kn(o, i),
          t[23](i),
          kn(o, n),
          kn(o, r),
          kn(o, a),
          kn(o, s),
          kn(s, l),
          kn(e, c),
          kn(e, d),
          Lr(u, d, null),
          kn(e, p),
          kn(e, h),
          Lr(m, h, null),
          (f = !0),
          $ ||
            ((y = [
              In(i, "pointerdown", t[13]),
              In(i, "input", t[11]),
              In(i, "nudge", t[12]),
              $n(Hl.call(null, i)),
              In(d, "pointerdown", t[14](1)),
              In(h, "pointerdown", t[14](-1)),
            ]),
            ($ = !0));
      },
      p(t, o) {
        (!f || 8 & o[0]) && zn(i, "id", t[3]),
          (!f || 1 & o[0]) && zn(i, "min", t[0]),
          (!f || 2 & o[0]) && zn(i, "max", t[1]),
          (!f || 4 & o[0]) && zn(i, "step", t[2]),
          (!f || 256 & o[0]) && (i.value = t[8]),
          (!f || 16 & o[0]) && zn(r, "style", t[4]),
          (!f || 32 & o[0]) && zn(l, "style", t[5]),
          (!f || 1024 & o[0]) && zn(s, "style", t[10]);
        const n = {};
        2048 & o[1] && (n.$$scope = { dirty: o, ctx: t }), u.$set(n);
        const a = {};
        2048 & o[1] && (a.$$scope = { dirty: o, ctx: t }),
          m.$set(a),
          (!f || (128 & o[0] && g !== (g = ll(["PinturaSlider", t[7]])))) &&
            zn(e, "class", g),
          (!f || 64 & o[0]) && zn(e, "data-direction", t[6]);
      },
      i(t) {
        f || (vr(u.$$.fragment, t), vr(m.$$.fragment, t), (f = !0));
      },
      o(t) {
        wr(u.$$.fragment, t), wr(m.$$.fragment, t), (f = !1);
      },
      d(o) {
        o && Mn(e), t[23](null), Fr(u), Fr(m), ($ = !1), rn(y);
      },
    }
  );
}
function Ld(t, e, o) {
  let i,
    n,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    h,
    m,
    g,
    f,
    { min: $ = 0 } = e,
    { max: y = 100 } = e,
    { step: b = 1 } = e,
    { id: x } = e,
    { value: v = 0 } = e,
    { trackStyle: w } = e,
    { knobStyle: S } = e,
    { onchange: k } = e,
    { onrelease: C = Qi } = e,
    { direction: M = "x" } = e,
    { getValue: T = W } = e,
    { setValue: P = W } = e,
    { class: R } = e;
  const A = (t) =>
      P(((t, e) => ((e = 1 / e), Math.round(t * e) / e))(na(t, $, y), b)),
    E = (t, e, i = {}) => {
      const { released: r = !1 } = i;
      o(15, (v = A($ + (t / e) * n))), v !== f && ((f = v), k(v), r && C(v));
    };
  let I;
  const L = (t) => {
      const e = t[d] - g;
      E(m + e, h);
    },
    F = (t) => {
      (h = void 0),
        document.documentElement.removeEventListener("pointermove", L),
        document.documentElement.removeEventListener("pointerup", F),
        k(v),
        C(v);
    },
    z = () => {
      o(15, (v = A(i + O * b))), k(v);
    };
  let B,
    O = 1,
    D = !1;
  const _ = (t) => {
    clearTimeout(B),
      D || z(),
      C(v),
      document.removeEventListener("pointerup", _);
  };
  return (
    (t.$$set = (t) => {
      "min" in t && o(0, ($ = t.min)),
        "max" in t && o(1, (y = t.max)),
        "step" in t && o(2, (b = t.step)),
        "id" in t && o(3, (x = t.id)),
        "value" in t && o(15, (v = t.value)),
        "trackStyle" in t && o(4, (w = t.trackStyle)),
        "knobStyle" in t && o(5, (S = t.knobStyle)),
        "onchange" in t && o(16, (k = t.onchange)),
        "onrelease" in t && o(17, (C = t.onrelease)),
        "direction" in t && o(6, (M = t.direction)),
        "getValue" in t && o(18, (T = t.getValue)),
        "setValue" in t && o(19, (P = t.setValue)),
        "class" in t && o(7, (R = t.class));
    }),
    (t.$$.update = () => {
      294912 & t.$$.dirty[0] && o(8, (i = void 0 !== v ? T(v) : 0)),
        3 & t.$$.dirty[0] && (n = y - $),
        259 & t.$$.dirty[0] && o(20, (r = 100 * Rd(i, $, y))),
        64 & t.$$.dirty[0] && o(21, (a = M.toUpperCase())),
        64 & t.$$.dirty[0] && o(22, (s = "x" === M ? "Width" : "Height")),
        4194304 & t.$$.dirty[0] && (l = "offset" + s),
        2097152 & t.$$.dirty[0] && (c = "offset" + a),
        2097152 & t.$$.dirty[0] && (d = "page" + a),
        3145728 & t.$$.dirty[0] &&
          o(10, (u = `transform: translate${a}(${r}%)`));
    }),
    [
      $,
      y,
      b,
      x,
      w,
      S,
      M,
      R,
      i,
      p,
      u,
      (t) => {
        h ||
          (o(15, (v = P(parseFloat(t.target.value)))),
          v !== f && ((f = v), k(v)));
      },
      (t) => {
        const e = p[l];
        E((i / n) * e + t.detail[M], e),
          clearTimeout(I),
          (I = setTimeout(() => {
            C(v);
          }, 250));
      },
      (t) => {
        t.stopPropagation(),
          clearTimeout(I),
          (h = p[l]),
          (m = t[c]),
          (g = t[d]),
          E(m, h),
          document.documentElement.addEventListener("pointermove", L),
          document.documentElement.addEventListener("pointerup", F);
      },
      (t) => (e) => {
        clearTimeout(I),
          (O = t),
          (D = !1),
          (B = setInterval(() => {
            (D = !0), z();
          }, 100)),
          document.addEventListener("pointercancel", _),
          document.addEventListener("pointerup", _);
      },
      v,
      k,
      C,
      T,
      P,
      r,
      a,
      s,
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (p = t), o(9, p);
        });
      },
    ]
  );
}
class Fd extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        Ld,
        Id,
        sn,
        {
          min: 0,
          max: 1,
          step: 2,
          id: 3,
          value: 15,
          trackStyle: 4,
          knobStyle: 5,
          onchange: 16,
          onrelease: 17,
          direction: 6,
          getValue: 18,
          setValue: 19,
          class: 7,
        },
        [-1, -1]
      );
  }
}
function zd(t) {
  let e, o;
  return (
    (e = new zl({
      props: {
        class: "PinturaButtonIcon",
        $$slots: { default: [Bd] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        524292 & o && (i.$$scope = { dirty: o, ctx: t }), e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Bd(t) {
  let e;
  return {
    c() {
      e = Pn("g");
    },
    m(o, i) {
      Cn(o, e, i), (e.innerHTML = t[2]);
    },
    p(t, o) {
      4 & o && (e.innerHTML = t[2]);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Od(t) {
  let e,
    o,
    i,
    n,
    r,
    a,
    s,
    l,
    c = t[2] && zd(t);
  return {
    c() {
      (e = Tn("span")),
        c && c.c(),
        (o = An()),
        (i = Tn("span")),
        (n = Rn(t[8])),
        zn(
          i,
          "class",
          (r = ll(["PinturaButtonLabel", t[3], t[5] && "implicit"]))
        ),
        zn(e, "slot", "label"),
        zn(e, "title", (a = Bc(t[1], t[6]))),
        zn(e, "class", (s = ll(["PinturaButtonInner", t[4]])));
    },
    m(t, r) {
      Cn(t, e, r), c && c.m(e, null), kn(e, o), kn(e, i), kn(i, n), (l = !0);
    },
    p(t, d) {
      t[2]
        ? c
          ? (c.p(t, d), 4 & d && vr(c, 1))
          : ((c = zd(t)), c.c(), vr(c, 1), c.m(e, o))
        : c &&
          (br(),
          wr(c, 1, 1, () => {
            c = null;
          }),
          xr()),
        (!l || 256 & d) && On(n, t[8]),
        (!l ||
          (40 & d &&
            r !==
              (r = ll(["PinturaButtonLabel", t[3], t[5] && "implicit"])))) &&
          zn(i, "class", r),
        (!l || (66 & d && a !== (a = Bc(t[1], t[6])))) && zn(e, "title", a),
        (!l || (16 & d && s !== (s = ll(["PinturaButtonInner", t[4]])))) &&
          zn(e, "class", s);
    },
    i(t) {
      l || (vr(c), (l = !0));
    },
    o(t) {
      wr(c), (l = !1);
    },
    d(t) {
      t && Mn(e), c && c.d();
    },
  };
}
function Dd(t) {
  let e, o, i, n, r;
  const a = [t[11], { value: t[7] }, { onchange: t[10] }];
  let s = {};
  for (let t = 0; t < a.length; t += 1) s = en(s, a[t]);
  return (
    (o = new Fd({ props: s })),
    {
      c() {
        (e = Tn("div")), Ir(o.$$.fragment), zn(e, "slot", "details");
      },
      m(a, s) {
        Cn(a, e, s),
          Lr(o, e, null),
          (i = !0),
          n || ((r = In(e, "keydown", t[9])), (n = !0));
      },
      p(t, e) {
        const i =
          3200 & e
            ? Rr(a, [
                2048 & e && Ar(t[11]),
                128 & e && { value: t[7] },
                1024 & e && { onchange: t[10] },
              ])
            : {};
        o.$set(i);
      },
      i(t) {
        i || (vr(o.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && Mn(e), Fr(o), (n = !1), r();
      },
    }
  );
}
function Wd(t) {
  let e, o;
  return (
    (e = new Ac({
      props: {
        panelClass: "PinturaSliderPanel",
        buttonClass: ll([
          "PinturaSliderButton",
          t[0],
          t[5] && "PinturaSliderIconOnly",
        ]),
        $$slots: { details: [Dd], label: [Od] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, [o]) {
        const i = {};
        33 & o &&
          (i.buttonClass = ll([
            "PinturaSliderButton",
            t[0],
            t[5] && "PinturaSliderIconOnly",
          ])),
          526846 & o && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function _d(t, e, o) {
  const i = [
    "class",
    "title",
    "label",
    "icon",
    "labelClass",
    "innerClass",
    "hideLabel",
    "locale",
    "value",
    "onchange",
  ];
  let r = gn(e, i),
    { class: a } = e,
    { title: s } = e,
    { label: l = Math.round } = e,
    { icon: c } = e,
    { labelClass: d } = e,
    { innerClass: u } = e,
    { hideLabel: p = !1 } = e,
    { locale: h } = e,
    { value: m } = e,
    { onchange: g = n } = e;
  const { min: f, max: $, getValue: y = W } = r;
  let b;
  const x = (t) => o(8, (b = ((t) => (S(l) ? l(y(t), f, $) : l))(t)));
  return (
    (t.$$set = (t) => {
      (e = en(en({}, e), mn(t))),
        o(11, (r = gn(e, i))),
        "class" in t && o(0, (a = t.class)),
        "title" in t && o(1, (s = t.title)),
        "label" in t && o(12, (l = t.label)),
        "icon" in t && o(2, (c = t.icon)),
        "labelClass" in t && o(3, (d = t.labelClass)),
        "innerClass" in t && o(4, (u = t.innerClass)),
        "hideLabel" in t && o(5, (p = t.hideLabel)),
        "locale" in t && o(6, (h = t.locale)),
        "value" in t && o(7, (m = t.value)),
        "onchange" in t && o(13, (g = t.onchange));
    }),
    (t.$$.update = () => {
      128 & t.$$.dirty && x(m);
    }),
    [
      a,
      s,
      c,
      d,
      u,
      p,
      h,
      m,
      b,
      (t) => {
        /tab/i.test(t.key) && t.preventDefault();
      },
      (t) => {
        x(t), g(t);
      },
      r,
      l,
      g,
    ]
  );
}
class Zd extends Br {
  constructor(t) {
    super(),
      zr(this, t, _d, Wd, sn, {
        class: 0,
        title: 1,
        label: 12,
        icon: 2,
        labelClass: 3,
        innerClass: 4,
        hideLabel: 5,
        locale: 6,
        value: 7,
        onchange: 13,
      });
  }
}
function Vd(t, e, o) {
  const i = t.slice();
  return (
    (i[7] = e[o][0]), (i[8] = e[o][1]), (i[9] = e[o][2]), (i[0] = e[o][3]), i
  );
}
function jd(t) {
  let e, o, i;
  const n = [t[9]];
  var r = t[1][t[7]] || t[7];
  function a(t) {
    let e = {};
    for (let t = 0; t < n.length; t += 1) e = en(e, n[t]);
    return { props: e };
  }
  return (
    r && (e = new r(a())),
    {
      c() {
        e && Ir(e.$$.fragment), (o = En());
      },
      m(t, n) {
        e && Lr(e, t, n), Cn(t, o, n), (i = !0);
      },
      p(t, i) {
        const s = 1 & i ? Rr(n, [Ar(t[9])]) : {};
        if (r !== (r = t[1][t[7]] || t[7])) {
          if (e) {
            br();
            const t = e;
            wr(t.$$.fragment, 1, 0, () => {
              Fr(t, 1);
            }),
              xr();
          }
          r
            ? ((e = new r(a())),
              Ir(e.$$.fragment),
              vr(e.$$.fragment, 1),
              Lr(e, o.parentNode, o))
            : (e = null);
        } else r && e.$set(s);
      },
      i(t) {
        i || (e && vr(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        e && wr(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && Mn(o), e && Fr(e, t);
      },
    }
  );
}
function Nd(t) {
  let e, o;
  return (
    (e = new gc({
      props: {
        name: t[7],
        attributes: t[2](t[9]),
        $$slots: { default: [Yd] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        1 & o && (i.name = t[7]),
          1 & o && (i.attributes = t[2](t[9])),
          4097 & o && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Hd(t) {
  let e,
    o,
    i = t[9].innerHTML + "";
  return {
    c() {
      (o = En()), (e = new _n(o));
    },
    m(t, n) {
      e.m(i, t, n), Cn(t, o, n);
    },
    p(t, o) {
      1 & o && i !== (i = t[9].innerHTML + "") && e.p(i);
    },
    i: Qi,
    o: Qi,
    d(t) {
      t && Mn(o), t && e.d();
    },
  };
}
function Ud(t) {
  let e,
    o = t[9].textContent + "";
  return {
    c() {
      e = Rn(o);
    },
    m(t, o) {
      Cn(t, e, o);
    },
    p(t, i) {
      1 & i && o !== (o = t[9].textContent + "") && On(e, o);
    },
    i: Qi,
    o: Qi,
    d(t) {
      t && Mn(e);
    },
  };
}
function Xd(t) {
  let e, o;
  return (
    (e = new Jd({ props: { items: t[0], discardEmptyItems: !0 } })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        1 & o && (i.items = t[0]), e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Yd(t) {
  let e, o, i, n;
  const r = [Xd, Ud, Hd],
    a = [];
  function s(t, e) {
    return t[0] && t[0].length
      ? 0
      : t[9].textContent
      ? 1
      : t[9].innerHTML
      ? 2
      : -1;
  }
  return (
    ~(e = s(t)) && (o = a[e] = r[e](t)),
    {
      c() {
        o && o.c(), (i = An());
      },
      m(t, o) {
        ~e && a[e].m(t, o), Cn(t, i, o), (n = !0);
      },
      p(t, n) {
        let l = e;
        (e = s(t)),
          e === l
            ? ~e && a[e].p(t, n)
            : (o &&
                (br(),
                wr(a[l], 1, 1, () => {
                  a[l] = null;
                }),
                xr()),
              ~e
                ? ((o = a[e]),
                  o ? o.p(t, n) : ((o = a[e] = r[e](t)), o.c()),
                  vr(o, 1),
                  o.m(i.parentNode, i))
                : (o = null));
      },
      i(t) {
        n || (vr(o), (n = !0));
      },
      o(t) {
        wr(o), (n = !1);
      },
      d(t) {
        ~e && a[e].d(t), t && Mn(i);
      },
    }
  );
}
function Gd(t, e) {
  let o, i, n, r, a, s;
  const l = [Nd, jd],
    c = [];
  function d(t, e) {
    return 1 & e && (i = !t[3](t[7])), i ? 0 : 1;
  }
  return (
    (n = d(e, -1)),
    (r = c[n] = l[n](e)),
    {
      key: t,
      first: null,
      c() {
        (o = En()), r.c(), (a = En()), (this.first = o);
      },
      m(t, e) {
        Cn(t, o, e), c[n].m(t, e), Cn(t, a, e), (s = !0);
      },
      p(t, o) {
        let i = n;
        (n = d((e = t), o)),
          n === i
            ? c[n].p(e, o)
            : (br(),
              wr(c[i], 1, 1, () => {
                c[i] = null;
              }),
              xr(),
              (r = c[n]),
              r ? r.p(e, o) : ((r = c[n] = l[n](e)), r.c()),
              vr(r, 1),
              r.m(a.parentNode, a));
      },
      i(t) {
        s || (vr(r), (s = !0));
      },
      o(t) {
        wr(r), (s = !1);
      },
      d(t) {
        t && Mn(o), c[n].d(t), t && Mn(a);
      },
    }
  );
}
function qd(t) {
  let e,
    o,
    i = [],
    n = new Map(),
    r = t[0];
  const a = (t) => t[8];
  for (let e = 0; e < r.length; e += 1) {
    let o = Vd(t, r, e),
      s = a(o);
    n.set(s, (i[e] = Gd(s, o)));
  }
  return {
    c() {
      for (let t = 0; t < i.length; t += 1) i[t].c();
      e = En();
    },
    m(t, n) {
      for (let e = 0; e < i.length; e += 1) i[e].m(t, n);
      Cn(t, e, n), (o = !0);
    },
    p(t, [o]) {
      15 & o &&
        ((r = t[0]),
        br(),
        (i = Pr(i, o, a, 1, t, r, n, e.parentNode, Tr, Gd, e, Vd)),
        xr());
    },
    i(t) {
      if (!o) {
        for (let t = 0; t < r.length; t += 1) vr(i[t]);
        o = !0;
      }
    },
    o(t) {
      for (let t = 0; t < i.length; t += 1) wr(i[t]);
      o = !1;
    },
    d(t) {
      for (let e = 0; e < i.length; e += 1) i[e].d(t);
      t && Mn(e);
    },
  };
}
function Kd(t, e, o) {
  let i,
    { items: n } = e,
    { discardEmptyItems: r = !0 } = e;
  const a = { Button: Vl, Dropdown: kd, Panel: Pd, Slider: Zd },
    s = (t) => !w(t) || !!a[t],
    l = (t) => {
      if (!t) return !1;
      const [e, , o, i = []] = t;
      return !!s(e) || i.some(l) || o.textContent || o.innerHTML;
    };
  return (
    (t.$$set = (t) => {
      "items" in t && o(4, (n = t.items)),
        "discardEmptyItems" in t && o(5, (r = t.discardEmptyItems));
    }),
    (t.$$.update = () => {
      48 & t.$$.dirty && o(0, (i = (n && r ? n.filter(l) : n) || []));
    }),
    [
      i,
      a,
      (t = {}) => {
        const { textContent: e, innerHTML: o, ...i } = t;
        return i;
      },
      s,
      n,
      r,
    ]
  );
}
class Jd extends Br {
  constructor(t) {
    super(), zr(this, t, Kd, qd, sn, { items: 4, discardEmptyItems: 5 });
  }
}
const Qd = ["aspectRatio", "isRotatedSideways", "flip", "cropSize"],
  tu = ma.map(([t]) => t).filter((t) => !Qd.includes(t));
var eu = (t, e) =>
    new CustomEvent("ping", {
      detail: { type: t, data: e },
      cancelable: !0,
      bubbles: !0,
    }),
  ou = (t) =>
    ((t) => /textarea/i.test(t.nodeName))(t) ||
    ((t) => /date|email|number|search|text|url/.test(t.type))(t) ||
    t.isContentEditable,
  iu = (t, e) =>
    (e ? Rs(t, e) : t)
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/\s+/g, "-")
      .toLowerCase(),
  nu = (t, e = W) => {
    const { subscribe: o, set: i } = Wr(void 0);
    return {
      subscribe: o,
      destroy: ((t, e) => {
        const o = matchMedia(t);
        return (
          o.addListener(e),
          e(o),
          {
            get matches() {
              return o.matches;
            },
            destroy: () => o.removeListener(e),
          }
        );
      })(t, ({ matches: t }) => i(e(t))).destroy,
    };
  },
  ru = (t, e, o) =>
    new Promise((i, n) => {
      (async () => {
        const r = await e.read(t),
          a = (t) =>
            A(t, o)
              .then((t) => e.apply(t, r))
              .then(i)
              .catch(n);
        if (M(t) || !C() || be() || ze()) return a(t);
        let s;
        try {
          s = await R(
            (t, e) =>
              createImageBitmap(t)
                .then((t) => e(null, t))
                .catch(e),
            [t]
          );
        } catch (t) {}
        s && s.width
          ? (await u())
            ? c() && window.chrome && r > 1
              ? i(await (async (t) => p(await $(t)))(s))
              : i(s)
            : i(e.apply(s, r))
          : a(t);
      })();
    }),
  au = (t, e) =>
    new Promise(async (o) => {
      if (t.width < e.width && t.height < e.height) return o(t);
      const i = Math.min(e.width / t.width, e.height / t.height),
        n = i * t.width,
        r = i * t.height,
        a = h("canvas", { width: n, height: r }),
        s = a.getContext("2d"),
        l = f(t) ? await $(t) : t;
      s.drawImage(l, 0, 0, n, r), o(p(a));
    }),
  su = (t) => (
    (t = t.trim()),
    /^rgba/.test(t)
      ? t
          .substr(5)
          .split(",")
          .map(parseFloat)
          .map((t, e) => t / (3 === e ? 1 : 255))
      : /^rgb/.test(t)
      ? t
          .substr(4)
          .split(",")
          .map(parseFloat)
          .map((t) => t / 255)
      : /^#/.test(t)
      ? ((t) => {
          const [, e, o, i] = t.split("");
          t = 4 === t.length ? `#${e}${e}${o}${o}${i}${i}` : t;
          const [, n, r, a] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
            t
          );
          return [n, r, a].map((t) => parseInt(t, 16) / 255);
        })(t)
      : /[0-9]{1,3}\s?,\s?[0-9]{1,3}\s?,\s?[0-9]{1,3}/.test(t)
      ? t
          .split(",")
          .map((t) => parseInt(t, 10))
          .map((t) => t / 255)
      : void 0
  );
let lu = null;
var cu = () => {
  if (null === lu) {
    let t = h("canvas");
    (lu = !!Cs(t)), g(t), (t = void 0);
  }
  return lu;
};
const du = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  uu = { precision: 1e-4 },
  pu = { precision: 0.01 * uu.precision };
var hu = () => {
    const t = [],
      e = [],
      o = [],
      i = () => {
        e.forEach((t) => t(o));
      },
      n = (e) => {
        (e.unsub = e.subscribe((n) =>
          ((e, n) => {
            const r = t.indexOf(e);
            r < 0 || ((o[r] = n), i());
          })(e, n)
        )),
          i();
      };
    return {
      get length() {
        return t.length;
      },
      clear: () => {
        t.forEach((t) => t.unsub()), (t.length = 0), (o.length = 0);
      },
      unshift: (e) => {
        t.unshift(e), n(e);
      },
      get: (e) => t[e],
      push: (e) => {
        t.push(e), n(e);
      },
      remove: (e) => {
        e.unsub();
        const i = t.indexOf(e);
        t.splice(i, 1), o.splice(i, 1);
      },
      forEach: (e) => t.forEach(e),
      filter: (e) => t.filter(e),
      subscribe: (t) => (
        e.push(t),
        () => {
          e.splice(e.indexOf(t), 1);
        }
      ),
    };
  },
  mu = (t) => t[0] < 0.25 && t[1] < 0.25 && t[2] < 0.25,
  gu = () =>
    new Promise((t) => {
      const e = h("input", {
          style: "position:absolute;visibility:hidden;width:0;height:0;",
          type: "file",
          accept: "image/*",
        }),
        o = () => {
          const [i] = e.files;
          e.parentNode && e.remove(), e.removeEventListener("change", o), t(i);
        };
      e.addEventListener("change", o),
        ze() && document.body.append(e),
        e.click();
    }),
  fu = (t) => {
    try {
      return t();
    } catch (t) {
      console.error(t);
    }
  };
const { window: $u } = Cr;
function yu(t) {
  let e,
    o,
    i,
    n = t[29] && bu(t),
    r = t[30] && Pu(t);
  return {
    c() {
      n && n.c(), (e = An()), r && r.c(), (o = En());
    },
    m(t, a) {
      n && n.m(t, a), Cn(t, e, a), r && r.m(t, a), Cn(t, o, a), (i = !0);
    },
    p(t, i) {
      t[29]
        ? n
          ? (n.p(t, i), 536870912 & i[0] && vr(n, 1))
          : ((n = bu(t)), n.c(), vr(n, 1), n.m(e.parentNode, e))
        : n &&
          (br(),
          wr(n, 1, 1, () => {
            n = null;
          }),
          xr()),
        t[30]
          ? r
            ? (r.p(t, i), 1073741824 & i[0] && vr(r, 1))
            : ((r = Pu(t)), r.c(), vr(r, 1), r.m(o.parentNode, o))
          : r &&
            (br(),
            wr(r, 1, 1, () => {
              r = null;
            }),
            xr());
    },
    i(t) {
      i || (vr(n), vr(r), (i = !0));
    },
    o(t) {
      wr(n), wr(r), (i = !1);
    },
    d(t) {
      n && n.d(t), t && Mn(e), r && r.d(t), t && Mn(o);
    },
  };
}
function bu(t) {
  let e, o, i, n, r, a;
  const s = [vu, xu],
    l = [];
  function c(t, e) {
    return t[26] ? 0 : t[14] ? 1 : -1;
  }
  return (
    ~(i = c(t)) && (n = l[i] = s[i](t)),
    {
      c() {
        (e = Tn("div")),
          (o = Tn("p")),
          n && n.c(),
          zn(o, "style", t[48]),
          zn(e, "class", "PinturaStatus"),
          zn(e, "style", (r = "opacity: " + t[28]));
      },
      m(t, n) {
        Cn(t, e, n), kn(e, o), ~i && l[i].m(o, null), (a = !0);
      },
      p(t, d) {
        let u = i;
        (i = c(t)),
          i === u
            ? ~i && l[i].p(t, d)
            : (n &&
                (br(),
                wr(l[u], 1, 1, () => {
                  l[u] = null;
                }),
                xr()),
              ~i
                ? ((n = l[i]),
                  n ? n.p(t, d) : ((n = l[i] = s[i](t)), n.c()),
                  vr(n, 1),
                  n.m(o, null))
                : (n = null)),
          (!a || 131072 & d[1]) && zn(o, "style", t[48]),
          (!a || (268435456 & d[0] && r !== (r = "opacity: " + t[28]))) &&
            zn(e, "style", r);
      },
      i(t) {
        a || (vr(n), (a = !0));
      },
      o(t) {
        wr(n), (a = !1);
      },
      d(t) {
        t && Mn(e), ~i && l[i].d();
      },
    }
  );
}
function xu(t) {
  let e, o, i, n;
  e = new ic({ props: { text: t[14].text || "", onmeasure: t[131] } });
  let r = t[14].aside && wu(t);
  return {
    c() {
      Ir(e.$$.fragment), (o = An()), r && r.c(), (i = En());
    },
    m(t, a) {
      Lr(e, t, a), Cn(t, o, a), r && r.m(t, a), Cn(t, i, a), (n = !0);
    },
    p(t, o) {
      const n = {};
      16384 & o[0] && (n.text = t[14].text || ""),
        e.$set(n),
        t[14].aside
          ? r
            ? (r.p(t, o), 16384 & o[0] && vr(r, 1))
            : ((r = wu(t)), r.c(), vr(r, 1), r.m(i.parentNode, i))
          : r &&
            (br(),
            wr(r, 1, 1, () => {
              r = null;
            }),
            xr());
    },
    i(t) {
      n || (vr(e.$$.fragment, t), vr(r), (n = !0));
    },
    o(t) {
      wr(e.$$.fragment, t), wr(r), (n = !1);
    },
    d(t) {
      Fr(e, t), t && Mn(o), r && r.d(t), t && Mn(i);
    },
  };
}
function vu(t) {
  let e, o, i, n;
  return (
    (e = new ic({ props: { text: t[26], onmeasure: t[131] } })),
    (i = new cc({
      props: {
        class: "PinturaStatusIcon",
        offset: t[52],
        opacity: t[53],
        $$slots: { default: [Tu] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment), (o = An()), Ir(i.$$.fragment);
      },
      m(t, r) {
        Lr(e, t, r), Cn(t, o, r), Lr(i, t, r), (n = !0);
      },
      p(t, o) {
        const n = {};
        67108864 & o[0] && (n.text = t[26]), e.$set(n);
        const r = {};
        2097152 & o[1] && (r.offset = t[52]),
          4194304 & o[1] && (r.opacity = t[53]),
          (4 & o[0]) | (268435456 & o[12]) &&
            (r.$$scope = { dirty: o, ctx: t }),
          i.$set(r);
      },
      i(t) {
        n || (vr(e.$$.fragment, t), vr(i.$$.fragment, t), (n = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), wr(i.$$.fragment, t), (n = !1);
      },
      d(t) {
        Fr(e, t), t && Mn(o), Fr(i, t);
      },
    }
  );
}
function wu(t) {
  let e, o;
  return (
    (e = new cc({
      props: {
        class: "PinturaStatusButton",
        offset: t[52],
        opacity: t[53],
        $$slots: { default: [Cu] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        2097152 & o[1] && (i.offset = t[52]),
          4194304 & o[1] && (i.opacity = t[53]),
          (16384 & o[0]) | (268435456 & o[12]) &&
            (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Su(t) {
  let e, o;
  return (
    (e = new ac({ props: { progress: t[14].progressIndicator.progress } })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        16384 & o[0] && (i.progress = t[14].progressIndicator.progress),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function ku(t) {
  let e, o;
  const i = [t[14].closeButton, { hideLabel: !0 }];
  let n = {};
  for (let t = 0; t < i.length; t += 1) n = en(n, i[t]);
  return (
    (e = new Vl({ props: n })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const n = 16384 & o[0] ? Rr(i, [Ar(t[14].closeButton), i[1]]) : {};
        e.$set(n);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Cu(t) {
  let e,
    o,
    i,
    n = t[14].progressIndicator.visible && Su(t),
    r = t[14].closeButton && t[14].text && ku(t);
  return {
    c() {
      n && n.c(), (e = An()), r && r.c(), (o = En());
    },
    m(t, a) {
      n && n.m(t, a), Cn(t, e, a), r && r.m(t, a), Cn(t, o, a), (i = !0);
    },
    p(t, i) {
      t[14].progressIndicator.visible
        ? n
          ? (n.p(t, i), 16384 & i[0] && vr(n, 1))
          : ((n = Su(t)), n.c(), vr(n, 1), n.m(e.parentNode, e))
        : n &&
          (br(),
          wr(n, 1, 1, () => {
            n = null;
          }),
          xr()),
        t[14].closeButton && t[14].text
          ? r
            ? (r.p(t, i), 16384 & i[0] && vr(r, 1))
            : ((r = ku(t)), r.c(), vr(r, 1), r.m(o.parentNode, o))
          : r &&
            (br(),
            wr(r, 1, 1, () => {
              r = null;
            }),
            xr());
    },
    i(t) {
      i || (vr(n), vr(r), (i = !0));
    },
    o(t) {
      wr(n), wr(r), (i = !1);
    },
    d(t) {
      n && n.d(t), t && Mn(e), r && r.d(t), t && Mn(o);
    },
  };
}
function Mu(t) {
  let e,
    o = t[2].iconSupportError + "";
  return {
    c() {
      e = Pn("g");
    },
    m(t, i) {
      Cn(t, e, i), (e.innerHTML = o);
    },
    p(t, i) {
      4 & i[0] && o !== (o = t[2].iconSupportError + "") && (e.innerHTML = o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Tu(t) {
  let e, o;
  return (
    (e = new zl({
      props: { $$slots: { default: [Mu] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        (4 & o[0]) | (268435456 & o[12]) && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Pu(t) {
  let e,
    o,
    i,
    n,
    r,
    a,
    s,
    l,
    c,
    d = t[6] && Ru(t),
    u = t[19] && t[17] && Au(t);
  const p = [zu, Fu],
    h = [];
  function m(t, e) {
    return t[19] ? 0 : 1;
  }
  return (
    (i = m(t)),
    (n = h[i] = p[i](t)),
    (a = new sl({
      props: {
        animate: t[39],
        pixelRatio: t[56],
        textPixelRatio: t[7],
        backgroundColor: t[22],
        maskRect: t[21],
        maskOpacity: t[47] ? t[47].maskOpacity : 1,
        maskFrameOpacity: 0.95,
        images: t[25],
        interfaceImages: t[57],
        loadImageData: t[9],
        willRequestResource: t[58],
        willRender: t[287],
        didRender: t[288],
      },
    })),
    {
      c() {
        d && d.c(),
          (e = An()),
          u && u.c(),
          (o = An()),
          n.c(),
          (r = An()),
          Ir(a.$$.fragment),
          (s = An()),
          (l = Tn("div")),
          zn(l, "class", "PinturaRootPortal");
      },
      m(n, p) {
        d && d.m(n, p),
          Cn(n, e, p),
          u && u.m(n, p),
          Cn(n, o, p),
          h[i].m(n, p),
          Cn(n, r, p),
          Lr(a, n, p),
          Cn(n, s, p),
          Cn(n, l, p),
          t[289](l),
          (c = !0);
      },
      p(t, s) {
        t[6]
          ? d
            ? (d.p(t, s), 64 & s[0] && vr(d, 1))
            : ((d = Ru(t)), d.c(), vr(d, 1), d.m(e.parentNode, e))
          : d &&
            (br(),
            wr(d, 1, 1, () => {
              d = null;
            }),
            xr()),
          t[19] && t[17]
            ? u
              ? (u.p(t, s), 655360 & s[0] && vr(u, 1))
              : ((u = Au(t)), u.c(), vr(u, 1), u.m(o.parentNode, o))
            : u &&
              (br(),
              wr(u, 1, 1, () => {
                u = null;
              }),
              xr());
        let l = i;
        (i = m(t)),
          i === l
            ? h[i].p(t, s)
            : (br(),
              wr(h[l], 1, 1, () => {
                h[l] = null;
              }),
              xr(),
              (n = h[i]),
              n ? n.p(t, s) : ((n = h[i] = p[i](t)), n.c()),
              vr(n, 1),
              n.m(r.parentNode, r));
        const c = {};
        256 & s[1] && (c.animate = t[39]),
          33554432 & s[1] && (c.pixelRatio = t[56]),
          128 & s[0] && (c.textPixelRatio = t[7]),
          4194304 & s[0] && (c.backgroundColor = t[22]),
          2097152 & s[0] && (c.maskRect = t[21]),
          65536 & s[1] && (c.maskOpacity = t[47] ? t[47].maskOpacity : 1),
          33554432 & s[0] && (c.images = t[25]),
          67108864 & s[1] && (c.interfaceImages = t[57]),
          512 & s[0] && (c.loadImageData = t[9]),
          134217728 & s[1] && (c.willRequestResource = t[58]),
          (32800 & s[0]) | (268435463 & s[1]) && (c.willRender = t[287]),
          240 & s[1] && (c.didRender = t[288]),
          a.$set(c);
      },
      i(t) {
        c || (vr(d), vr(u), vr(n), vr(a.$$.fragment, t), (c = !0));
      },
      o(t) {
        wr(d), wr(u), wr(n), wr(a.$$.fragment, t), (c = !1);
      },
      d(n) {
        d && d.d(n),
          n && Mn(e),
          u && u.d(n),
          n && Mn(o),
          h[i].d(n),
          n && Mn(r),
          Fr(a, n),
          n && Mn(s),
          n && Mn(l),
          t[289](null);
      },
    }
  );
}
function Ru(t) {
  let e, o, i, n, r;
  return (
    (o = new Jd({ props: { items: t[49] } })),
    {
      c() {
        (e = Tn("div")),
          Ir(o.$$.fragment),
          zn(e, "class", "PinturaNav PinturaNavTools");
      },
      m(a, s) {
        Cn(a, e, s),
          Lr(o, e, null),
          (i = !0),
          n ||
            ((r = [In(e, "measure", t[272]), $n(bs.call(null, e))]), (n = !0));
      },
      p(t, e) {
        const i = {};
        262144 & e[1] && (i.items = t[49]), o.$set(i);
      },
      i(t) {
        i || (vr(o.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && Mn(e), Fr(o), (n = !1), rn(r);
      },
    }
  );
}
function Au(t) {
  let e, o, i;
  return (
    (o = new Ql({
      props: {
        elasticity: t[4] * Wu,
        scrollDirection: t[45] ? "y" : "x",
        $$slots: { default: [Lu] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (e = Tn("div")),
          Ir(o.$$.fragment),
          zn(e, "class", "PinturaNav PinturaNavMain");
      },
      m(t, n) {
        Cn(t, e, n), Lr(o, e, null), (i = !0);
      },
      p(t, e) {
        const i = {};
        16 & e[0] && (i.elasticity = t[4] * Wu),
          16384 & e[1] && (i.scrollDirection = t[45] ? "y" : "x"),
          (1048576 & e[0]) | (3072 & e[1]) | (268435456 & e[12]) &&
            (i.$$scope = { dirty: e, ctx: t }),
          o.$set(i);
      },
      i(t) {
        i || (vr(o.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && Mn(e), Fr(o);
      },
    }
  );
}
function Eu(t) {
  let e,
    o = t[399].icon + "";
  return {
    c() {
      e = Pn("g");
    },
    m(t, i) {
      Cn(t, e, i), (e.innerHTML = o);
    },
    p(t, i) {
      134217728 & i[12] && o !== (o = t[399].icon + "") && (e.innerHTML = o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Iu(t) {
  let e,
    o,
    i,
    n,
    r,
    a = t[399].label + "";
  return (
    (e = new zl({
      props: { $$slots: { default: [Eu] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        Ir(e.$$.fragment), (o = An()), (i = Tn("span")), (n = Rn(a));
      },
      m(t, a) {
        Lr(e, t, a), Cn(t, o, a), Cn(t, i, a), kn(i, n), (r = !0);
      },
      p(t, o) {
        const i = {};
        402653184 & o[12] && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i),
          (!r || 134217728 & o[12]) &&
            a !== (a = t[399].label + "") &&
            On(n, a);
      },
      i(t) {
        r || (vr(e.$$.fragment, t), (r = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (r = !1);
      },
      d(t) {
        Fr(e, t), t && Mn(o), t && Mn(i);
      },
    }
  );
}
function Lu(t) {
  let e, o;
  const i = [t[41], { tabs: t[42] }];
  let n = {
    $$slots: {
      default: [
        Iu,
        ({ tab: t }) => ({ 399: t }),
        ({ tab: t }) => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t ? 134217728 : 0],
      ],
    },
    $$scope: { ctx: t },
  };
  for (let t = 0; t < i.length; t += 1) n = en(n, i[t]);
  return (
    (e = new fl({ props: n })),
    e.$on("select", t[273]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const n =
          3072 & o[1]
            ? Rr(i, [1024 & o[1] && Ar(t[41]), 2048 & o[1] && { tabs: t[42] }])
            : {};
        402653184 & o[12] && (n.$$scope = { dirty: o, ctx: t }), e.$set(n);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Fu(t) {
  let e, o, i;
  function n(e) {
    t[282](e);
  }
  let r = {
    class: "PinturaMain",
    content: { ...t[23].find(t[281]), props: t[8][t[20]] },
    locale: t[2],
    isAnimated: t[39],
    stores: t[121],
  };
  return (
    void 0 !== t[0][t[20]] && (r.component = t[0][t[20]]),
    (e = new Il({ props: r })),
    or.push(() => Er(e, "component", n)),
    e.$on("measure", t[283]),
    e.$on("show", t[284]),
    e.$on("hide", t[285]),
    e.$on("fade", t[286]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, o) {
        Lr(e, t, o), (i = !0);
      },
      p(t, i) {
        const n = {};
        9437440 & i[0] &&
          (n.content = { ...t[23].find(t[281]), props: t[8][t[20]] }),
          4 & i[0] && (n.locale = t[2]),
          256 & i[1] && (n.isAnimated = t[39]),
          !o &&
            1048577 & i[0] &&
            ((o = !0), (n.component = t[0][t[20]]), dr(() => (o = !1))),
          e.$set(n);
      },
      i(t) {
        i || (vr(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function zu(t) {
  let e, o;
  const i = [
    { class: "PinturaMain" },
    { visible: t[34] },
    t[41],
    { panels: t[43] },
  ];
  let n = {
    $$slots: {
      default: [
        Bu,
        ({ panel: t, panelIsActive: e }) => ({ 397: t, 398: e }),
        ({ panel: t, panelIsActive: e }) => [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          (t ? 33554432 : 0) | (e ? 67108864 : 0),
        ],
      ],
    },
    $$scope: { ctx: t },
  };
  for (let t = 0; t < i.length; t += 1) n = en(n, i[t]);
  return (
    (e = new Pl({ props: n })),
    e.$on("measure", t[280]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const n =
          5128 & o[1]
            ? Rr(i, [
                i[0],
                8 & o[1] && { visible: t[34] },
                1024 & o[1] && Ar(t[41]),
                4096 & o[1] && { panels: t[43] },
              ])
            : {};
        (25166085 & o[0]) | (16777480 & o[1]) | (369098752 & o[12]) &&
          (n.$$scope = { dirty: o, ctx: t }),
          e.$set(n);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Bu(t) {
  let e, o, i;
  function n(...e) {
    return t[274](t[397], ...e);
  }
  function r(e) {
    t[275](e, t[397]);
  }
  let a = {
    content: { ...t[23].find(n), props: t[8][t[397]] },
    locale: t[2],
    isActive: t[398],
    isAnimated: t[39],
    stores: t[121],
  };
  return (
    void 0 !== t[0][t[397]] && (a.component = t[0][t[397]]),
    (e = new Il({ props: a })),
    or.push(() => Er(e, "component", r)),
    e.$on("measure", t[276]),
    e.$on("show", function () {
      return t[277](t[397]);
    }),
    e.$on("hide", function () {
      return t[278](t[397]);
    }),
    e.$on("fade", function (...e) {
      return t[279](t[397], ...e);
    }),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, o) {
        Lr(e, t, o), (i = !0);
      },
      p(i, r) {
        t = i;
        const a = {};
        (8388864 & r[0]) | (33554432 & r[12]) &&
          (a.content = { ...t[23].find(n), props: t[8][t[397]] }),
          4 & r[0] && (a.locale = t[2]),
          67108864 & r[12] && (a.isActive = t[398]),
          256 & r[1] && (a.isAnimated = t[39]),
          !o &&
            (1 & r[0]) | (33554432 & r[12]) &&
            ((o = !0), (a.component = t[0][t[397]]), dr(() => (o = !1))),
          e.$set(a);
      },
      i(t) {
        i || (vr(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Ou(t) {
  let e, o;
  return {
    c() {
      (e = Tn("span")),
        zn(e, "class", "PinturaEditorOverlay"),
        zn(e, "style", (o = "opacity:" + t[60]));
    },
    m(t, o) {
      Cn(t, e, o);
    },
    p(t, i) {
      536870912 & i[1] && o !== (o = "opacity:" + t[60]) && zn(e, "style", o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Du(t) {
  let e, o, i, r, a;
  cr(t[271]);
  let s = t[50] && yu(t),
    l = t[60] > 0 && Ou(t);
  return {
    c() {
      (e = Tn("div")),
        s && s.c(),
        (o = An()),
        l && l.c(),
        zn(e, "id", t[3]),
        zn(e, "class", t[44]),
        zn(e, "data-env", t[46]);
    },
    m(c, d) {
      Cn(c, e, d),
        s && s.m(e, null),
        kn(e, o),
        l && l.m(e, null),
        t[290](e),
        (i = !0),
        r ||
          ((a = [
            In($u, "keydown", t[137]),
            In($u, "keyup", t[138]),
            In($u, "blur", t[139]),
            In($u, "paste", t[143]),
            In($u, "resize", t[271]),
            In(e, "ping", function () {
              an(t[51]) && t[51].apply(this, arguments);
            }),
            In(e, "contextmenu", t[140]),
            In(e, "touchstart", t[132], { passive: !1 }),
            In(e, "touchmove", t[133]),
            In(e, "pointermove", t[134]),
            In(e, "transitionend", t[122]),
            In(e, "dropfiles", t[141]),
            In(e, "measure", t[291]),
            In(e, "click", function () {
              an(t[27] ? t[142] : n) &&
                (t[27] ? t[142] : n).apply(this, arguments);
            }),
            $n(bs.call(null, e, { observeViewRect: !0 })),
            $n(xs.call(null, e)),
            $n(ws.call(null, e)),
          ]),
          (r = !0));
    },
    p(n, r) {
      (t = n)[50]
        ? s
          ? (s.p(t, r), 524288 & r[1] && vr(s, 1))
          : ((s = yu(t)), s.c(), vr(s, 1), s.m(e, o))
        : s &&
          (br(),
          wr(s, 1, 1, () => {
            s = null;
          }),
          xr()),
        t[60] > 0
          ? l
            ? l.p(t, r)
            : ((l = Ou(t)), l.c(), l.m(e, null))
          : l && (l.d(1), (l = null)),
        (!i || 8 & r[0]) && zn(e, "id", t[3]),
        (!i || 8192 & r[1]) && zn(e, "class", t[44]),
        (!i || 32768 & r[1]) && zn(e, "data-env", t[46]);
    },
    i(t) {
      i || (vr(s), (i = !0));
    },
    o(t) {
      wr(s), (i = !1);
    },
    d(o) {
      o && Mn(e), s && s.d(), l && l.d(), t[290](null), (r = !1), rn(a);
    },
  };
}
const Wu = 10;
function _u(t, e, o) {
  let i,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    m,
    f,
    $,
    y,
    b,
    x,
    v,
    S,
    k,
    C,
    M,
    P,
    R,
    A,
    E,
    I,
    L,
    F,
    z,
    B,
    O,
    D,
    _,
    Z,
    V,
    j,
    N,
    H,
    G,
    J,
    Q,
    tt,
    et,
    ot,
    it,
    at,
    st,
    lt,
    ct,
    dt,
    ut,
    pt,
    ht,
    mt,
    gt,
    ft,
    $t,
    yt,
    bt,
    vt,
    wt,
    St,
    kt,
    Ct,
    Mt,
    Tt,
    Pt,
    Rt,
    At,
    Et,
    zt,
    Bt,
    Ot,
    Dt,
    Xt,
    Yt,
    Kt,
    Jt,
    te,
    ee,
    ie,
    re,
    ae,
    se,
    le,
    ce,
    de,
    pe,
    he,
    me,
    ge,
    fe,
    $e,
    ye,
    be,
    xe,
    ve,
    we,
    Se,
    ke,
    Ce,
    Me,
    Te,
    Pe,
    Re,
    Ae,
    Ee,
    Ie,
    Le,
    Fe,
    Be,
    Oe,
    De,
    We,
    _e,
    Ze,
    Ve,
    je,
    Ne,
    He,
    Ue,
    Xe,
    Ye,
    Ge,
    Ke,
    Je,
    Qe,
    to,
    eo,
    oo,
    io,
    no,
    ao,
    so,
    lo,
    co,
    uo,
    po,
    mo,
    go,
    fo,
    $o,
    yo,
    bo,
    xo,
    vo,
    wo,
    So = Qi,
    ko = Qi;
  dn(t, ls, (t) => o(210, (Ee = t))),
    t.$$.on_destroy.push(() => So()),
    t.$$.on_destroy.push(() => ko());
  const Co = ho(),
    Mo = Kn();
  let { class: To } = e,
    { layout: Po } = e,
    { stores: Ro } = e,
    { locale: Ao } = e,
    { id: Lo } = e,
    { util: Fo } = e,
    { utils: zo } = e,
    { animations: Bo = "auto" } = e,
    { disabled: Oo = !1 } = e,
    { status: Do } = e,
    { previewUpscale: Zo = !1 } = e,
    { elasticityMultiplier: Vo = 10 } = e,
    { willRevert: jo = () => Promise.resolve(!0) } = e,
    { willProcessImage: Uo = () => Promise.resolve(!0) } = e,
    { willRenderCanvas: Xo = W } = e,
    { willRenderToolbar: Go = W } = e,
    { willSetHistoryInitialState: qo = W } = e,
    { enableButtonExport: Ko = !0 } = e,
    { enableButtonRevert: Jo = !0 } = e,
    { enableNavigateHistory: Qo = !0 } = e,
    { enableToolbar: ti = !0 } = e,
    { enableUtils: ei = !0 } = e,
    { enableButtonClose: oi = !1 } = e,
    { enableDropImage: ii = !1 } = e,
    { enablePasteImage: ni = !1 } = e,
    { enableBrowseImage: ri = !1 } = e,
    { previewImageDataMaxSize: ai } = e,
    { previewImageTextPixelRatio: si } = e,
    { layoutDirectionPreference: li = "auto" } = e,
    { layoutHorizontalUtilsPreference: ci = "left" } = e,
    { layoutVerticalUtilsPreference: di = "bottom" } = e,
    { imagePreviewSrc: ui } = e,
    { imageOrienter: pi = { read: () => 1, apply: (t) => t } } = e,
    { pluginComponents: hi } = e,
    { pluginOptions: mi = {} } = e;
  const gi = Co.sub,
    fi = {};
  let { root: $i } = e,
    yi = [];
  const bi = ss();
  dn(t, bi, (t) => o(60, (wo = t)));
  const xi = qs() || 1024,
    vi = xt(xi, xi),
    wi = ka();
  let {
    imageSourceToImageData: ki = (t) =>
      w(t)
        ? fetch(t)
            .then((t) => {
              if (200 !== t.status) throw `${t.status} (${t.statusText})`;
              return t.blob();
            })
            .then((t) => ru(t, pi, wi))
            .then((t) => au(t, a))
        : ue(t)
        ? new Promise((e) => e(p(t)))
        : ru(t, pi, wi).then((t) => au(t, a)),
  } = e;
  const Ci = (() => {
      let t, e;
      const o = tu.reduce(
        (t, o) => (
          (t[o] = (function (t, e, o) {
            let i = [];
            return {
              set: e,
              update: o,
              publish: (t) => {
                i.forEach((e) => e(t));
              },
              subscribe: (e) => (
                i.push(e),
                t(e),
                () => {
                  i = i.filter((t) => t !== e);
                }
              ),
            };
          })(
            (t) => {
              if (!e) return t();
              e.stores[o].subscribe(t)();
            },
            (t) => {
              e && e.stores[o].set(t);
            },
            (t) => {
              e && e.stores[o].update(t);
            }
          )),
          t
        ),
        {}
      );
      return {
        update: (i) => {
          if (((e = i), t && (t.forEach((t) => t()), (t = void 0)), !i))
            return o.file.publish(void 0), void o.loadState.publish(void 0);
          t = tu.map((t) =>
            i.stores[t].subscribe((e) => {
              o[t].publish(e);
            })
          );
        },
        stores: o,
        destroy: () => {
          t && t.forEach((t) => t());
        },
      };
    })(),
    {
      file: Mi,
      size: Ti,
      loadState: Ai,
      processState: Ei,
      cropAspectRatio: Li,
      cropLimitToImage: Fi,
      crop: zi,
      cropMinSize: Bi,
      cropMaxSize: Oi,
      cropRange: Di,
      cropOrigin: Wi,
      cropRectAspectRatio: _i,
      rotation: Zi,
      rotationRange: Vi,
      targetSize: ji,
      flipX: Ni,
      flipY: Hi,
      backgroundColor: Ui,
      colorMatrix: Xi,
      convolutionMatrix: Yi,
      gamma: Gi,
      vignette: qi,
      noise: tn,
      decoration: en,
      annotation: on,
      redaction: nn,
      frame: rn,
      state: an,
    } = Ci.stores;
  dn(t, Mi, (t) => o(204, (Pe = t))),
    dn(t, Ti, (t) => o(192, ($e = t))),
    dn(t, Ai, (t) => o(186, (ee = t))),
    dn(t, Ei, (t) => o(249, (Xe = t))),
    dn(t, Li, (t) => o(304, (Jt = t))),
    dn(t, zi, (t) => o(187, (ie = t))),
    dn(t, Ui, (t) => o(270, (no = t))),
    dn(t, en, (t) => o(32, (uo = t))),
    dn(t, on, (t) => o(31, (co = t))),
    dn(t, nn, (t) => o(267, (oo = t))),
    dn(t, rn, (t) => o(33, (po = t))),
    dn(t, an, (t) => o(314, (Le = t)));
  const {
    images: sn,
    shapePreprocessor: un,
    imageScrambler: pn,
    willRequestResource: hn,
  } = Ro;
  dn(t, sn, (t) => o(183, (Xt = t))),
    dn(t, un, (t) => o(184, (Yt = t))),
    dn(t, pn, (t) => o(269, (io = t))),
    dn(t, hn, (t) => o(58, (xo = t)));
  const mn = an.subscribe((t) => Co.pub("update", t)),
    gn = Wr(),
    $n = Wr([0, 0, 0]);
  dn(t, $n, (t) => o(22, (we = t)));
  const yn = Wr([1, 1, 1]);
  dn(t, yn, (t) => o(316, (ao = t)));
  const bn = ss([1, 1, 1]);
  dn(t, bn, (t) => o(317, (so = t)));
  const xn = Wr(),
    vn = Wr();
  dn(t, vn, (t) => o(18, (Kt = t)));
  const wn = Wr();
  dn(t, wn, (t) => o(185, (te = t)));
  const Sn = Wr(Lt());
  dn(t, Sn, (t) => o(40, (Fe = t)));
  const kn = Wr(Lt());
  dn(t, kn, (t) => o(54, (fo = t)));
  const Cn = Wr();
  dn(t, Cn, (t) => o(55, ($o = t)));
  const Mn = nu("(pointer: fine)", (t) =>
    t ? "pointer-fine" : "pointer-coarse"
  );
  dn(t, Mn, (t) => o(235, (_e = t)));
  const Tn = nu("(hover: hover)", (t) =>
    t ? "pointer-hover" : "pointer-no-hover"
  );
  dn(t, Tn, (t) => o(236, (Ze = t)));
  const Pn = Wr(!1);
  dn(t, Pn, (t) => o(188, (ae = t)));
  const Rn = Dr(void 0, (t) => {
    const e = ss(0),
      o = [
        Pn.subscribe((t) => {
          e.set(t ? 1 : 0);
        }),
        e.subscribe(t),
      ];
    return () => o.forEach((t) => t());
  });
  dn(t, Rn, (t) => o(318, (lo = t)));
  const An = Wr(Zo);
  dn(t, An, (t) => o(190, (le = t)));
  const En = Wr();
  dn(t, En, (t) => o(306, (se = t)));
  const In = Wr();
  dn(t, In, (t) => o(305, (re = t)));
  const Ln = Dr(void 0, (t) => {
      const e = ss(void 0, { precision: 1e-4 }),
        o = [
          zi.subscribe(() => {
            if (!ie) return;
            const t = void 0 === re || ae,
              o = Xl(ie, re, 5 * Vo);
            e.set(o, { hard: t });
          }),
          e.subscribe(t),
        ];
      return () => o.forEach((t) => t());
    }),
    Fn = Wr();
  dn(t, Fn, (t) => o(309, (pe = t)));
  const zn = Wr();
  dn(t, zn, (t) => o(313, (be = t)));
  const Bn = Wr(void 0);
  dn(t, Bn, (t) => o(310, (me = t)));
  let On = { left: 0, right: 0, top: 0, bottom: 0 };
  const Dn = _r([rn, Fn], ([t, e], o) => {
      e || o(On);
      const i = Vn(e, t);
      (Eo(On.top, 4) === Eo(i.top, 4) &&
        Eo(On.bottom, 4) === Eo(i.bottom, 4) &&
        Eo(On.right, 4) === Eo(i.right, 4) &&
        Eo(On.left, 4) === Eo(i.left, 4)) ||
        ((On = i), o(i));
    }),
    Wn = _r([Dn], ([t], e) => {
      e(Object.values(t).some((t) => t > 0));
    }),
    _n = _r([Cn, Sn, kn], ([t, e, o], n) => {
      if (!t) return n(void 0);
      let r = 0;
      1 !== v.length || i || (r = o.y + o.height),
        n(Wt(t.x + e.x, t.y + e.y + r, t.width, t.height));
    });
  dn(t, _n, (t) => o(191, (ge = t)));
  const Zn = _r([_n, zi], ([t, e], o) => {
    if (!t || !e || !(!se && !re)) return;
    const i = Math.min(t.width / e.width, t.height / e.height);
    o(le ? i : Math.min(1, i));
  });
  dn(t, Zn, (t) => o(311, (fe = t)));
  const Vn = (t, e) => {
      if (!e || !t) return { top: 0, right: 0, bottom: 0, left: 0 };
      const o = Ri(e, t, s),
        i = Pi(o, t);
      return {
        top: Math.abs(i.top),
        right: Math.abs(i.right),
        bottom: Math.abs(i.bottom),
        left: Math.abs(i.left),
      };
    },
    jn = Wr(void 0),
    Nn = _r([zi, _n], ([t, e]) => {
      if (e && t) return Math.min(e.width / t.width, e.height / t.height);
    }),
    Hn = _r([jn, zi, Fn], ([t, e, o]) =>
      t && e && o ? Math.min(e.width / o.width, e.height / o.height) * t : 1
    );
  dn(t, Hn, (t) => o(307, (ce = t)));
  const Un = Wr(U());
  dn(t, Un, (t) => o(308, (de = t)));
  const Xn = Wr({ scalar: ce, translation: de }),
    Yn = () => {
      Xn.set({ scalar: void 0, translation: U() });
    },
    Gn = Dr(void 0, (t) => {
      const e = ss(void 0, { precision: 1e-4 }),
        o = () => {
          if (!pe) return;
          const t = ae || !he,
            o = Xl(pe, me, 1 * Vo);
          o.width < 0 && ((o.width = 0), (o.x = pe.x)),
            o.height < 0 && ((o.height = 0), (o.y = pe.y)),
            Zt(o, ge),
            Zt(o, de),
            Vt(o, ce),
            e.set(o, { hard: t });
        },
        i = [
          _n.subscribe(o),
          Fn.subscribe(o),
          Hn.subscribe(o),
          Un.subscribe(o),
          rn.subscribe(o),
          e.subscribe(t),
        ];
      return () => i.forEach((t) => t());
    });
  let Qn;
  dn(t, Gn, (t) => o(21, (xe = t)));
  const tr = (t) => {
    if (i && Qn && Ht(Qn, t)) return;
    Qn = t;
    const e =
      ie.width <= t.width && ie.height <= t.height
        ? qt(t, jt(It(ie), fe || 1))
        : Qt(t, Ut(ie || $e));
    Fn.set(e);
  };
  let er = !1;
  const ir = Zn.subscribe((t) => {
      !er && void 0 !== t && ie && (tr(ge), (er = !0));
    }),
    nr = _n.subscribe((t) => {
      t && void 0 !== fe && ie && tr(t);
    });
  let rr;
  const ar = zn.subscribe((t) => {
      if (!t) return (rr = void 0), void fn(En, (se = void 0), se);
      rr = ye;
      const e = It(ie);
      En.set(e);
    }),
    sr = Fn.subscribe((t) => {
      if (!t || !be) return;
      const e =
        ((o = It(t)),
        (i = be),
        (o.x -= i.x),
        (o.y -= i.y),
        (o.width -= i.width),
        (o.height -= i.height),
        o);
      var o, i;
      Nt(e, rr);
      const n = ((t, e) => (
        (t.x += e.x),
        (t.y += e.y),
        (t.width += e.width),
        (t.height += e.height),
        t
      ))(It(se), e);
      zi.set(n);
    }),
    lr = zi.subscribe((t) => {
      if (ae || be || re) return;
      if (!t || !pe) return;
      const e = Ut(pe),
        o = Ut(t);
      if (Eo(e, 6) === Eo(o, 6)) return;
      const i = Math.min(ge.width / ie.width, ge.height / ie.height),
        n = xt(t.width * i, t.height * i),
        r = 0.5 * (pe.width - n.width),
        a = 0.5 * (pe.height - n.height),
        s = Wt(pe.x + r, pe.y + a, n.width, n.height);
      Fn.set(s);
    }),
    cr = _r([Zn, zi, Fn], ([t, e, o], i) => {
      if (!t || !e || !o) return;
      const n = o.width / e.width,
        r = o.height / e.height;
      i(Math.max(n, r) / t);
    }),
    dr = _r([Zn, cr], ([t, e], o) => {
      if (!e) return;
      o(t * e);
    });
  dn(t, dr, (t) => o(312, (ye = t)));
  const ur = ss(0.075, { stiffness: 0.03, damping: 0.4, precision: 0.001 }),
    pr = _r([bn, $n, ur, Gn, Hn, rn, Wn, Dn], ([t, e, o, n, r, a, s, l], c) => {
      if (!n || i) return c([]);
      let { x: d, y: u, width: p, height: h } = n;
      (d += 0.5), (u += 0.5), (p -= 0.5), (h -= 0.5);
      const m = [];
      if (s) {
        m.push({
          x: d,
          y: u,
          width: p - 0.5,
          height: h - 0.5,
          strokeWidth: 1,
          strokeColor: e,
          opacity: 0.85,
        }),
          o > 0.1 &&
            m.push({
              x: d,
              y: u,
              width: p - 0.5,
              height: h - 0.5,
              strokeWidth: 1,
              strokeColor: t,
              opacity: o,
            });
        let { left: i, right: n, top: a, bottom: s } = l;
        return (
          (i *= r),
          (n *= r),
          (a *= r),
          (s *= r),
          void c([
            ...m,
            {
              x: d - i,
              y: u - n,
              width: p + i + n,
              height: h + a + s,
              strokeWidth: 1,
              strokeColor: t,
              opacity: 0.05,
            },
          ])
        );
      }
      const g = mu(t),
        f = a && a.frameColor && mu(a.frameColor);
      if ((g && f) || (!g && !g)) {
        const t = g ? [1, 1, 1, 0.3] : [0, 0, 0, 0.075];
        m.push({
          x: d,
          y: u,
          width: p,
          height: h,
          strokeWidth: 3.5,
          strokeColor: t,
          opacity: o,
        });
      }
      c([
        ...m,
        {
          x: d,
          y: u,
          width: p,
          height: h,
          strokeWidth: 1,
          strokeColor: t,
          opacity: o,
        },
      ]);
    }),
    hr = Wr([]);
  dn(t, hr, (t) => o(203, (Te = t)));
  const mr = _r([pr, hr], ([t, e], o) => {
    o([...t, ...e]);
  });
  dn(t, mr, (t) => o(59, (vo = t)));
  const gr = ss(0, { precision: 0.001 });
  dn(t, gr, (t) => o(195, (Se = t)));
  const fr = ss();
  dn(t, fr, (t) => o(194, (ve = t)));
  const $r = ss();
  dn(t, $r, (t) => o(197, (ke = t)));
  const yr = ss();
  dn(t, yr, (t) => o(199, (Ce = t)));
  const br = ss();
  dn(t, br, (t) => o(201, (Me = t)));
  const xr = Wr(!1);
  dn(t, xr, (t) => o(246, (Ue = t)));
  const vr = Wr();
  dn(t, vr, (t) => o(206, (Ae = t)));
  let wr;
  const Sr = _r([xr, vr], ([t, e], i) => {
    if (t && e) {
      if ((wr && (wr.cancel(), o(177, (wr = void 0))), Ii(e)))
        return i(
          ((t) => {
            const e = h("canvas", { width: t.width, height: t.height });
            return e.getContext("2d").drawImage(t, 0, 0), e;
          })(e)
        );
      var r, a;
      o(177, (wr = { cancel: n })),
        ((r = e),
        (a = wr),
        new Promise((t, e) => {
          const o = Xr.length ? 0 : 250;
          let i,
            n = !1;
          a.cancel = () => (n = !0);
          const s = Date.now();
          ki(r)
            .then((e) => {
              const r = Date.now() - s;
              clearTimeout(i),
                (i = setTimeout(() => {
                  n || t(e);
                }, Math.max(0, o - r)));
            })
            .catch(e);
        }))
          .then(i)
          .catch((t) => {
            fn(Ai, (ee.error = t), ee);
          })
          .finally(() => {
            o(177, (wr = void 0));
          });
    } else i(void 0);
  });
  So(), (So = ln(Sr, (t) => o(205, (Re = t))));
  let { imagePreviewCurrent: kr } = e;
  const Cr = Wr({});
  dn(t, Cr, (t) => o(238, (je = t)));
  const Mr = Wr([]);
  dn(t, Mr, (t) => o(57, (bo = t)));
  const Tr = _r(
    [_n, wn, Ti, Ln, Fn, dr, Zi, Ni, Hi, Hn, Un],
    ([t, e, o, i, n, r, a, s, l, c, d], u) => {
      t &&
        n &&
        u(
          ((t, e, o, i, n, r, a, s, l, c, d) => {
            if (!(t && e && o && i && s)) return;
            s *= r;
            const u = ne(It(e)),
              p = _t(u),
              h = _t(t),
              m = Ft(o),
              g = _t(m),
              f = ia(o, i, l),
              $ = _t(f),
              y = rt(q(g), $),
              b = rt(q(h), p);
            (y.x += b.x), (y.y += b.y);
            const x = K(q(y));
            (x.x += b.x), (x.y += b.y);
            const v = _t(Zt(Zt(It(n), a), t)),
              w = rt(v, h);
            return (
              nt(y, w),
              {
                origin: x,
                translation: y,
                rotation: { x: d ? Math.PI : 0, y: c ? Math.PI : 0, z: l },
                scale: s,
              }
            );
          })(t, e, o, i, n, c, d, r, a, s, l)
        );
    }
  );
  dn(t, Tr, (t) => o(237, (Ve = t)));
  const Pr = _r([Xi, Yi, Gi, qi, tn], ([t, e, o, i, n], r) => {
    const a =
      t &&
      Object.keys(t)
        .map((e) => t[e])
        .filter(Boolean);
    r({
      gamma: o || void 0,
      vignette: i || void 0,
      noise: n || void 0,
      convolutionMatrix: e || void 0,
      colorMatrix: a && a.length && Ki(a),
    });
  });
  let Rr, Ar;
  const Er = (() => {
      if (!ze()) return !1;
      const t = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/i) || [],
        [, e, o] = t.map((t) => parseInt(t, 10) || 0);
      return e > 13 || (13 === e && o >= 4);
    })(),
    Ir = Wr({});
  dn(t, Ir, (t) => o(234, (We = t)));
  const Lr = fc(),
    Fr = Dr(Lr, (t) => {
      const e = () => t(fc()),
        o = matchMedia(`(resolution: ${Lr}dppx)`);
      return o.addListener(e), () => o.removeListener(e);
    });
  dn(t, Fr, (t) => o(56, (yo = t)));
  const zr = Wr();
  dn(t, zr, (t) => o(39, (he = t)));
  const Br = Wr();
  dn(t, Br, (t) => o(211, (Ie = t)));
  const Or = ((t, e) => {
    const { sub: o, pub: i } = ho(),
      n = [],
      r = Wr(0),
      a = [],
      s = () => a.forEach((t) => t({ index: cn(r), length: n.length })),
      l = {
        get index() {
          return cn(r);
        },
        set index(t) {
          (t = Number.isInteger(t) ? t : 0),
            (t = na(t, 0, n.length - 1)),
            r.set(t),
            e(n[l.index]),
            s();
        },
        get state() {
          return n[n.length - 1];
        },
        length: () => n.length,
        undo() {
          const t = l.index--;
          return i("undo", t), t;
        },
        redo() {
          const t = l.index++;
          return i("redo", l.index), t;
        },
        revert() {
          (n.length = 1), (l.index = 0), i("revert");
        },
        write(o) {
          o && e({ ...t(), ...o });
          const i = t(),
            a = n[n.length - 1];
          JSON.stringify(i) !== JSON.stringify(a) &&
            ((n.length = l.index + 1), n.push(i), r.set(n.length - 1), s());
        },
        set(t = {}) {
          (n.length = 0), (l.index = 0);
          const e = Array.isArray(t) ? t : [t];
          n.push(...e), (l.index = n.length - 1);
        },
        get: () => [...n],
        subscribe: (t) => (
          a.push(t),
          t({ index: l.index, length: n.length }),
          () => a.splice(a.indexOf(t), 1)
        ),
        on: o,
      };
    return l;
  })(
    () => Le,
    (t) => {
      fn(an, (Le = t), Le), Sn.set(Fe);
    }
  );
  ko(), (ko = ln(Or, (t) => o(213, (Be = t))));
  const Zr = () => {
      const t = { x: 0, y: 0, ...$e },
        e = oe(Qt(t, Le.cropAspectRatio), Math.round),
        o = qo({ ...Le, rotation: 0, crop: e }, Le),
        i = [o];
      JSON.stringify(o) !== JSON.stringify(Le) && i.push({ ...Le }), Or.set(i);
    },
    Vr = Ai.subscribe((t) => {
      t && t.complete && Zr();
    }),
    jr = () => jo().then((t) => t && Or.revert()),
    Nr = Wr(!1);
  dn(t, Nr, (t) => o(215, (Oe = t)));
  const Hr = () => {
      fn(Nr, (Oe = !0), Oe),
        Uo().then((t) => {
          if (!t) return void fn(Nr, (Oe = !1), Oe);
          let e;
          e = ca.subscribe((t) => {
            1 === t && (e && e(), Mo("processImage"));
          });
        });
    },
    Ur = Ei.subscribe((t) => {
      if (!t) return;
      fn(Nr, (Oe = !0), Oe);
      const { complete: e, abort: o } = t;
      (e || o) && fn(Nr, (Oe = !1), Oe);
    }),
    Xr = hu();
  dn(t, Xr, (t) => o(25, (He = t)));
  const Yr = Dr(void 0, (t) =>
      Xr.subscribe((e) => {
        const { origin: o, translation: i, rotation: n, scale: r } = e[0];
        t({ origin: o, translation: i, rotation: n, scale: r });
      })
    ),
    Gr = Wr();
  dn(t, Gr, (t) => o(230, (De = t)));
  const qr = Wr(),
    Kr = {
      ...Ro,
      imageFile: Mi,
      imageSize: Ti,
      imageBackgroundColor: Ui,
      imageCropAspectRatio: Li,
      imageCropMinSize: Bi,
      imageCropMaxSize: Oi,
      imageCropLimitToImage: Fi,
      imageCropRect: zi,
      imageCropRectOrigin: Wi,
      imageCropRectSnapshot: En,
      imageCropRectAspectRatio: _i,
      imageCropRange: Di,
      imageRotation: Zi,
      imageRotationRange: Vi,
      imageFlipX: Ni,
      imageFlipY: Hi,
      imageOutputSize: ji,
      imageColorMatrix: Xi,
      imageConvolutionMatrix: Yi,
      imageGamma: Gi,
      imageVignette: qi,
      imageNoise: tn,
      imageDecoration: en,
      imageAnnotation: on,
      imageRedaction: nn,
      imageFrame: rn,
      imagePreview: Sr,
      imagePreviewSource: vr,
      imageTransforms: Tr,
      imagePreviewModifiers: Cr,
      history: Or,
      animation: zr,
      pixelRatio: Fr,
      elasticityMultiplier: Vo,
      scrollElasticity: Wu,
      rangeInputElasticity: 5,
      pointerAccuracy: Mn,
      pointerHoverable: Tn,
      env: Ir,
      rootRect: wn,
      stageRect: _n,
      stageScalar: Zn,
      framePadded: Wn,
      presentationScalar: dr,
      imagePreviewUpscale: qr,
      utilRect: Cn,
      rootBackgroundColor: $n,
      rootForegroundColor: yn,
      rootLineColor: bn,
      rootColorSecondary: xn,
      imageOutlineOpacity: ur,
      utilTools: Gr,
      imageSelectionPan: Un,
      imageSelectionZoom: jn,
      imageSelectionStageFitScalar: Nn,
      imageSelectionStoredState: Xn,
      imageOverlayMarkup: hr,
      interfaceImages: Mr,
      isInteracting: Pn,
      isInteractingFraction: Rn,
      imageCropRectIntent: In,
      imageCropRectPresentation: Ln,
      imageSelectionRect: Fn,
      imageSelectionRectIntent: Bn,
      imageSelectionRectPresentation: Gn,
      imageSelectionRectSnapshot: zn,
      imageScalar: cr,
      imageTransformsInterpolated: Yr,
    };
  delete Kr.image;
  const Jr = "util-" + T();
  let Qr = [],
    ta = ze();
  const ea = (t, e) => {
      const o = ((t) => {
        const e = et.getPropertyValue(t);
        return su(e);
      })(t);
      o && 0 !== o[3] && ((o.length = 3), e.set(o));
    },
    oa = () => {
      ea("color", yn),
        ea("background-color", $n),
        ea("outline-color", bn),
        ea("--color-secondary", xn);
    },
    ra = _r(
      [Tr, Pr, Ui],
      ([t, e, o]) => t && { ...t, ...e, backgroundColor: o }
    );
  dn(t, ra, (t) => o(240, (Ne = t)));
  const aa = () => {
      const t = Xr.length ? void 0 : { resize: 1.05 },
        e = ((t, e, o = {}) => {
          const { resize: i = 1, opacity: n = 0 } = o,
            r = {
              opacity: [ss(n, { ...uu, stiffness: 0.1 }), W],
              resize: [ss(i, { ...uu, stiffness: 0.1 }), W],
              translation: [ss(void 0, uu), W],
              rotation: [ss(void 0, pu), W],
              origin: [ss(void 0, uu), W],
              scale: [ss(void 0, pu), W],
              gamma: [ss(void 0, pu), (t) => t || 1],
              vignette: [ss(void 0, pu), (t) => t || 0],
              colorMatrix: [ss([...du], uu), (t) => t || [...du]],
              convolutionMatrix: [
                Wr(void 0),
                (t) => (t && t.clarity) || void 0,
              ],
              backgroundColor: [ss(void 0, uu), W],
            },
            a = Object.entries(r).map(([t, e]) => [t, e[0]]),
            s = a.map(([, t]) => t),
            l = Object.entries(r).reduce((t, [e, o]) => {
              const [i, n] = o;
              return (t[e] = (t, e) => i.set(n(t), e)), t;
            }, {});
          let c;
          const d = _r(
            s,
            (o) => (
              (c = o.reduce((t, e, o) => ((t[a[o][0]] = e), t), {})),
              (c.data = t),
              (c.size = e),
              (c.scale *= o[1]),
              c
            )
          );
          return (
            (d.get = () => c),
            (d.set = (t, e) => {
              const o = { hard: !e };
              Object.entries(t).forEach(([t, e]) => {
                l[t] && l[t](e, o);
              });
            }),
            d
          );
        })(Re, $e, t);
      Xr.unshift(e), sa(Ne);
    },
    sa = (t) => {
      Xr.forEach((e, o) => {
        const i = 0 === o ? 1 : 0;
        e.set({ ...t, opacity: i, resize: 1 }, he);
      });
    };
  let la;
  const ca = rs(void 0, { duration: 500 });
  let da;
  dn(t, ca, (t) => o(28, (Ge = t)));
  const ua = Wr(!1);
  let pa;
  dn(t, ua, (t) => o(258, (Ye = t)));
  const ha = ss(void 0, { stiffness: 0.1, damping: 0.7, precision: 0.25 });
  dn(t, ha, (t) => o(52, (mo = t)));
  const ma = ss(0, { stiffness: 0.1, precision: 0.05 });
  dn(t, ma, (t) => o(53, (go = t)));
  const ga = ss(0, { stiffness: 0.02, damping: 0.5, precision: 0.25 });
  dn(t, ga, (t) => o(262, (Je = t)));
  const fa = ss(void 0, { stiffness: 0.02, damping: 0.5, precision: 0.25 });
  dn(t, fa, (t) => o(260, (Ke = t)));
  const $a = ss(void 0, { stiffness: 0.02, damping: 0.5, precision: 0.25 });
  let ya;
  dn(t, $a, (t) => o(263, (Qe = t)));
  const ba = () => {
      Mo("abortLoadImage");
    },
    xa = () => {
      Mo("abortProcessImage"), fn(Nr, (Oe = !1), Oe);
    },
    va = (t) => t.preventDefault(),
    wa = Er
      ? (t) => {
          const e = t.touches ? t.touches[0] : t;
          (e.pageX > 10 && e.pageX < Rr - 10) || va(t);
        }
      : n,
    Sa = ze() ? va : n,
    Ca = ze() ? va : n,
    Ma = Wr({});
  dn(t, Ma, (t) => o(264, (to = t)));
  const Ta = Wr([]);
  dn(t, Ta, (t) => o(315, (eo = t))), Jn("keysPressed", Ta);
  const Pa = (t) => {
      !t ||
        (ro(t) && !((t) => /^image/.test(t.type) && !/svg/.test(t.type))(t)) ||
        (!ro(t) && !/^http/.test(t)) ||
        Mo("loadImage", t);
    },
    Ra = (t) => {
      t && Pa(t);
    };
  let Aa = void 0;
  let Ea,
    Ia = [];
  const La = Wr();
  Jn("rootPortal", La), Jn("rootRect", wn);
  const Fa = () => ({
      foregroundColor: [...ao],
      lineColor: [...so],
      utilVisibility: { ...P },
      isInteracting: ae,
      isInteractingFraction: lo,
      rootRect: It(te),
      stageRect: It(ge),
      annotationShapesDirty: Ua,
      decorationShapesDirty: Xa,
      frameShapesDirty: Ya,
      blendShapesDirty: Ga,
    }),
    za = (t, e, o) => Si(t, xt(e.width / o, e.height / o)),
    Ba = (t, e, o) => ((t._translate = Y(e)), (t._scale = o), t),
    Oa = (t) => {
      const e = [];
      return t.forEach((t) => e.push(Da(t))), e.filter(Boolean);
    },
    Da = (t) =>
      No(t)
        ? ((t.points = [X(t.x1, t.y1), X(t.x2, t.y2)]), t)
        : Ho(t)
        ? ((t.points = [X(t.x1, t.y1), X(t.x2, t.y2), X(t.x3, t.y3)]), t)
        : ((t) => Wo(t) && !t.text.length)(t)
        ? (_o(t) && ((t.width = 5), (t.height = t.lineHeight)),
          (t.strokeWidth = 1),
          (t.strokeColor = [1, 1, 1, 0.5]),
          (t.backgroundColor = [0, 0, 0, 0.1]),
          t)
        : t;
  let Wa,
    _a = [],
    Za = [],
    Va = [],
    ja = [],
    Na = {};
  const Ha = (t, e, o, i, n, r) => {
    const {
        annotationShapesDirty: a,
        decorationShapesDirty: l,
        frameShapesDirty: c,
        blendShapesDirty: d,
        selectionRect: u,
        scale: p,
      } = t,
      h = Wa !== p || !Ht(Na, u);
    h && ((Wa = p), (Na = u)),
      (a || o !== co) &&
        (_a = Oa(
          o
            .filter(Yo)
            .map(Io)
            .sort((t, e) => (t.alwaysOnTop ? 1 : e.alwaysOnTop ? -1 : 0))
            .map((t) => Si(t, $e))
            .map(s)
            .flat()
        )),
      d && (Za = e.filter(Yo).map((t) => Si(t, $e))),
      (l || i !== uo || h) &&
        (Va = Oa(
          i
            .filter(Yo)
            .map(Io)
            .sort((t, e) => (t.alwaysOnTop ? 1 : e.alwaysOnTop ? -1 : 0))
            .map((t) => za(t, u, p))
            .map(s)
            .flat()
            .map((t) => Ba(t, u, p))
        )),
      (c || r !== po || h) &&
        (ja = r
          ? Oa(
              [r]
                .map(Io)
                .map((t) => za(t, u, p))
                .map(s)
                .flat()
                .map((t) => Ba(t, u, p))
            )
          : []);
    const m = Oa(n.filter(Yo));
    return {
      blendShapesDirty: d,
      blendShapes: Za,
      annotationShapesDirty: a,
      annotationShapes: _a,
      decorationShapesDirty: l,
      decorationShapes: Va,
      frameShapesDirty: c,
      frameShapes: ja,
      interfaceShapes: m,
    };
  };
  let Ua = !0;
  let Xa = !0;
  let Ya = !0;
  let Ga = !0;
  qn(() => {
    mn(),
      nr(),
      ir(),
      ar(),
      sr(),
      lr(),
      Vr(),
      Ur(),
      Mn.destroy(),
      Tn.destroy(),
      Ci.destroy(),
      Xr.clear(),
      o(147, (kr = void 0)),
      o(178, (la = void 0)),
      (_a.length = 0),
      (Za.length = 0),
      (Va.length = 0),
      (ja.length = 0);
  });
  return (
    (t.$$set = (t) => {
      "class" in t && o(148, (To = t.class)),
        "layout" in t && o(149, (Po = t.layout)),
        "stores" in t && o(150, (Ro = t.stores)),
        "locale" in t && o(2, (Ao = t.locale)),
        "id" in t && o(3, (Lo = t.id)),
        "util" in t && o(151, (Fo = t.util)),
        "utils" in t && o(152, (zo = t.utils)),
        "animations" in t && o(153, (Bo = t.animations)),
        "disabled" in t && o(154, (Oo = t.disabled)),
        "status" in t && o(146, (Do = t.status)),
        "previewUpscale" in t && o(155, (Zo = t.previewUpscale)),
        "elasticityMultiplier" in t && o(4, (Vo = t.elasticityMultiplier)),
        "willRevert" in t && o(156, (jo = t.willRevert)),
        "willProcessImage" in t && o(157, (Uo = t.willProcessImage)),
        "willRenderCanvas" in t && o(5, (Xo = t.willRenderCanvas)),
        "willRenderToolbar" in t && o(158, (Go = t.willRenderToolbar)),
        "willSetHistoryInitialState" in t &&
          o(159, (qo = t.willSetHistoryInitialState)),
        "enableButtonExport" in t && o(160, (Ko = t.enableButtonExport)),
        "enableButtonRevert" in t && o(161, (Jo = t.enableButtonRevert)),
        "enableNavigateHistory" in t && o(162, (Qo = t.enableNavigateHistory)),
        "enableToolbar" in t && o(6, (ti = t.enableToolbar)),
        "enableUtils" in t && o(163, (ei = t.enableUtils)),
        "enableButtonClose" in t && o(164, (oi = t.enableButtonClose)),
        "enableDropImage" in t && o(165, (ii = t.enableDropImage)),
        "enablePasteImage" in t && o(166, (ni = t.enablePasteImage)),
        "enableBrowseImage" in t && o(167, (ri = t.enableBrowseImage)),
        "previewImageDataMaxSize" in t &&
          o(168, (ai = t.previewImageDataMaxSize)),
        "previewImageTextPixelRatio" in t &&
          o(7, (si = t.previewImageTextPixelRatio)),
        "layoutDirectionPreference" in t &&
          o(169, (li = t.layoutDirectionPreference)),
        "layoutHorizontalUtilsPreference" in t &&
          o(170, (ci = t.layoutHorizontalUtilsPreference)),
        "layoutVerticalUtilsPreference" in t &&
          o(171, (di = t.layoutVerticalUtilsPreference)),
        "imagePreviewSrc" in t && o(172, (ui = t.imagePreviewSrc)),
        "imageOrienter" in t && o(173, (pi = t.imageOrienter)),
        "pluginComponents" in t && o(174, (hi = t.pluginComponents)),
        "pluginOptions" in t && o(8, (mi = t.pluginOptions)),
        "root" in t && o(1, ($i = t.root)),
        "imageSourceToImageData" in t && o(9, (ki = t.imageSourceToImageData)),
        "imagePreviewCurrent" in t && o(147, (kr = t.imagePreviewCurrent));
    }),
    (t.$$.update = () => {
      if (
        (33554432 & t.$$.dirty[4] && o(182, (i = "overlay" === Po)),
        134217984 & t.$$.dirty[5] && o(17, (r = ei && !i)),
        257 & t.$$.dirty[0] &&
          mi &&
          Object.entries(mi).forEach(([t, e]) => {
            Object.entries(e).forEach(([e, i]) => {
              fi[t] && o(0, (fi[t][e] = i), fi);
            });
          }),
        (1 & t.$$.dirty[0]) | (524288 & t.$$.dirty[5]))
      ) {
        let t = !1;
        hi.forEach(([e]) => {
          fi[e] || (o(0, (fi[e] = {}), fi), (t = !0));
        }),
          t && o(176, (yi = [...hi]));
      }
      var e, n, p, h;
      if (
        (1073741824 & t.$$.dirty[4] && bi.set(Oo ? 1 : 0),
        8192 & t.$$.dirty[5] &&
          (a = ai
            ? ((e = ai),
              (n = vi),
              xt(Math.min(e.width, n.width), Math.min(e.height, n.height)))
            : vi),
        268435456 & t.$$.dirty[5] && Ci.update(Xt[0]),
        536870912 & t.$$.dirty[5] &&
          (s = Yt ? (t) => Yt(t, { isPreview: !0 }) : W),
        262144 & t.$$.dirty[0] &&
          Kt &&
          wn.set(Wt(Kt.x, Kt.y, Kt.width, Kt.height)),
        (1207959552 & t.$$.dirty[5]) | (1 & t.$$.dirty[6]) &&
          te &&
          i &&
          ee &&
          ee.complete &&
          (() => {
            const t = Jt,
              e = Ut(te);
            (t && t === e) || (Li.set(Ut(te)), Zr());
          })(),
        (4 & t.$$.dirty[0]) |
          (268435456 & t.$$.dirty[4]) |
          (2097152 & t.$$.dirty[5]) &&
          o(189, (v = Ao && yi.length ? zo || yi.map(([t]) => t) : [])),
        8 & t.$$.dirty[6] && o(19, (I = v.length > 1)),
        524288 & t.$$.dirty[0] && (I || Sn.set(Lt())),
        64 & t.$$.dirty[0] && (ti || kn.set(Lt())),
        134217729 & t.$$.dirty[5] && An.set(Zo || i),
        2 & t.$$.dirty[6] && ie && Yn(),
        (2097152 & t.$$.dirty[5]) | (8 & t.$$.dirty[6]) &&
          o(216, (S = yi.filter(([t]) => v.includes(t)))),
        1073741824 & t.$$.dirty[6] && o(217, (k = S.length)),
        (134217728 & t.$$.dirty[4]) |
          (8 & t.$$.dirty[6]) |
          (1 & t.$$.dirty[7]) &&
          o(
            20,
            (M =
              Fo && "string" == typeof Fo && v.includes(Fo)
                ? Fo
                : k > 0
                ? v[0]
                : void 0)
          ),
        1048576 & t.$$.dirty[0] && M && ur.set(0.075),
        (2097152 & t.$$.dirty[0]) | (32 & t.$$.dirty[6]) && xe)
      ) {
        let t = xe.x - ge.x,
          e = ge.x + ge.width - (xe.x + xe.width),
          o = xe.y - ge.y,
          i = ge.y + ge.height - (xe.y + xe.height),
          n = Math.min(t, o, e, i);
        gr.set(n > 0 ? 0 : Math.min(0.85, Math.abs(n / 64)));
      }
      if (
        (32 & t.$$.dirty[6] &&
          ge &&
          fr.set({
            x: 0,
            y: ge.y,
            width: ge.x < 64 ? 0 : ge.x,
            height: ge.height,
          }),
        (1073741824 & t.$$.dirty[5]) | (32 & t.$$.dirty[6]) &&
          ge &&
          $r.set({ x: 0, y: 0, width: te.width, height: ge.y }),
        (1073741824 & t.$$.dirty[5]) | (32 & t.$$.dirty[6]) && ge)
      ) {
        let t = ge.x + ge.width,
          e = te.width - (ge.x + ge.width);
        e < 64 && ((t += e), (e = 0)),
          yr.set({ x: t, y: ge.y, width: e, height: ge.height });
      }
      if (
        ((1073741824 & t.$$.dirty[5]) | (32 & t.$$.dirty[6]) &&
          ge &&
          br.set({
            x: 0,
            y: ge.y + ge.height,
            width: te.width,
            height: te.height - (ge.y + ge.height),
          }),
        (4194304 & t.$$.dirty[0]) | (768 & t.$$.dirty[6]) &&
          o(
            193,
            (l = ve && {
              id: "stage-overlay",
              backgroundColor: we,
              opacity: Se,
              ...ve,
            })
          ),
        (4194304 & t.$$.dirty[0]) | (2560 & t.$$.dirty[6]) &&
          o(
            196,
            (c = ke && {
              id: "stage-overlay",
              backgroundColor: we,
              opacity: Se,
              ...ke,
            })
          ),
        (4194304 & t.$$.dirty[0]) | (8704 & t.$$.dirty[6]) &&
          o(
            198,
            (d = Ce && {
              id: "stage-overlay",
              backgroundColor: we,
              opacity: Se,
              ...Ce,
            })
          ),
        (4194304 & t.$$.dirty[0]) | (33280 & t.$$.dirty[6]) &&
          o(
            200,
            (u = Me && {
              id: "stage-overlay",
              backgroundColor: we,
              opacity: Se,
              ...Me,
            })
          ),
        21632 & t.$$.dirty[6] && o(202, (m = [c, d, u, l].filter(Boolean))),
        196608 & t.$$.dirty[6] && m && Te)
      ) {
        const t = Te.filter((t) => "stage-overlay" !== t.id);
        hr.set([...t, ...m]);
      }
      if (
        ((131072 & t.$$.dirty[5]) | (262144 & t.$$.dirty[6]) &&
          vr.set(ui || Pe || void 0),
        (2 & t.$$.dirty[0]) |
          (8388608 & t.$$.dirty[4]) |
          (524288 & t.$$.dirty[6]) &&
          (o(147, (kr = Re)), Re && $i.dispatchEvent(eu("loadpreview", kr))),
        1048576 & t.$$.dirty[6] &&
          Ae &&
          (Un.set(U()), jn.set(void 0), Yn(), Mr.set([])),
        2097156 & t.$$.dirty[6] && o(208, ($ = !ae && f)),
        16777216 & t.$$.dirty[6] && o(209, (y = !Ee)),
        (536870912 & t.$$.dirty[4]) | (12582912 & t.$$.dirty[6]) &&
          fn(zr, (he = "always" === Bo ? $ : "never" !== Bo && $ && y), he),
        (536870912 & t.$$.dirty[4]) | (10485760 & t.$$.dirty[6]) &&
          fn(Br, (Ie = "always" === Bo ? f : "never" !== Bo && f && y), Ie),
        134217728 & t.$$.dirty[6] && o(212, (b = Be.index > 0)),
        134217728 & t.$$.dirty[6] && o(214, (x = Be.index < Be.length - 1)),
        16 & t.$$.dirty[6] && qr.set(le),
        (4 & t.$$.dirty[0]) | (1073741832 & t.$$.dirty[6]) &&
          o(
            23,
            (C =
              v
                .map((t) => {
                  const e = S.find(([e]) => t === e);
                  if (e)
                    return {
                      id: t,
                      view: e[1],
                      tabIcon: Ao[t + "Icon"],
                      tabLabel: Ao[t + "Label"],
                    };
                })
                .filter(Boolean) || [])
          ),
        1048576 & t.$$.dirty[0] && gn.set(M),
        25165824 & t.$$.dirty[0] &&
          o(
            24,
            (P = C.reduce((t, e) => ((t[e.id] = (P && P[e.id]) || 0), t), {}))
          ),
        1048576 & t.$$.dirty[0] && o(41, (R = { name: Jr, selected: M })),
        8388608 & t.$$.dirty[0] &&
          o(
            42,
            (A = C.map((t) => ({
              id: t.id,
              icon: t.tabIcon,
              label: t.tabLabel,
            })))
          ),
        8388608 & t.$$.dirty[0] && o(43, (E = C.map((t) => t.id))),
        16777216 & t.$$.dirty[4] &&
          o(44, (L = ll(["PinturaRoot", "PinturaRootComponent", To]))),
        1073741824 & t.$$.dirty[5] &&
          o(
            218,
            (F =
              te &&
              (te.width > 1e3 ? "wide" : te.width < 600 ? "narrow" : void 0))
          ),
        1073741824 & t.$$.dirty[5] &&
          o(219, (z = te && (te.width <= 320 || te.height <= 460))),
        1073741824 & t.$$.dirty[5] &&
          o(
            220,
            (B =
              te &&
              (te.height > 1e3 ? "tall" : te.height < 600 ? "short" : void 0))
          ),
        2 & t.$$.dirty[0] &&
          o(
            221,
            (O =
              $i &&
              $i.parentNode &&
              $i.parentNode.classList.contains("PinturaModal"))
          ),
        (4096 & t.$$.dirty[0]) |
          (1073741824 & t.$$.dirty[5]) |
          (16 & t.$$.dirty[7]) && o(222, (D = O && te && Rr > te.width)),
        (8192 & t.$$.dirty[0]) |
          (1073741824 & t.$$.dirty[5]) |
          (16 & t.$$.dirty[7]) && o(223, (_ = O && te && Ar > te.height)),
        96 & t.$$.dirty[7] && o(224, (Z = D && _)),
        2 & t.$$.dirty[7] && o(225, (V = "narrow" === F)),
        1073758208 & t.$$.dirty[5] &&
          o(
            226,
            ((p = te),
            (h = li),
            (j = te
              ? "auto" === h
                ? p.width > p.height
                  ? "landscape"
                  : "portrait"
                : "horizontal" === h
                ? p.width < 500
                  ? "portrait"
                  : "landscape"
                : "vertical" === h
                ? p.height < 400
                  ? "landscape"
                  : "portrait"
                : void 0
              : "landscape"))
          ),
        512 & t.$$.dirty[7] && o(45, (N = "landscape" === j)),
        264 & t.$$.dirty[7] && o(227, (H = V || "short" === B)),
        (4096 & t.$$.dirty[0]) | (1073741824 & t.$$.dirty[5]) &&
          o(228, (G = ta && te && Rr === te.width && !Er)),
        8192 & t.$$.dirty[7] && o(229, (J = De && De.length)),
        32768 & t.$$.dirty[5] &&
          o(231, (Q = "has-navigation-preference-" + ci)),
        65536 & t.$$.dirty[5] &&
          o(232, (tt = "has-navigation-preference-" + di)),
        2 & t.$$.dirty[0] && o(233, (et = $i && getComputedStyle($i))),
        65536 & t.$$.dirty[7] && et && oa(),
        (655424 & t.$$.dirty[0]) |
          (1107296256 & t.$$.dirty[4]) |
          (33554432 & t.$$.dirty[6]) |
          (970494 & t.$$.dirty[7]) &&
          Ir.set({
            ...We,
            layoutMode: Po,
            orientation: j,
            horizontalSpace: F,
            verticalSpace: B,
            navigationHorizontalPreference: Q,
            navigationVerticalPreference: tt,
            isModal: O,
            isDisabled: Oo,
            isCentered: Z,
            isCenteredHorizontally: D,
            isCenteredVertically: _,
            isAnimated: Ie,
            pointerAccuracy: _e,
            pointerHoverable: Ze,
            isCompact: H,
            hasSwipeNavigation: G,
            hasLimitedSpace: z,
            hasToolbar: ti,
            hasNavigation: I && r,
            isIOS: ta,
          }),
        131072 & t.$$.dirty[7] &&
          o(
            46,
            (ot = Object.entries(We)
              .map(([t, e]) => (/^is|has/.test(t) ? (e ? iu(t) : void 0) : e))
              .filter(Boolean)
              .join(" "))
          ),
        1048576 & t.$$.dirty[0] && M && Gr.set([]),
        3145728 & t.$$.dirty[7] &&
          o(
            47,
            (it =
              Ve &&
              Object.entries(je)
                .filter(([, t]) => null != t)
                .reduce((t, [, e]) => (t = { ...t, ...e }), {}))
          ),
        1 & t.$$.dirty[6] && o(239, (ct = ee && "any-to-file" === ee.task)),
        4194304 & t.$$.dirty[7] && ct && Xr && Xr.clear(),
        8388608 & t.$$.dirty[7] && o(241, (at = !!Ne && !!Ne.translation)),
        (8388608 & t.$$.dirty[5]) |
          (524288 & t.$$.dirty[6]) |
          (16777216 & t.$$.dirty[7]) &&
          at &&
          Re &&
          Re !== la &&
          (o(178, (la = Re)), aa()),
        25165824 & t.$$.dirty[7] && at && sa(Ne),
        33554432 & t.$$.dirty[0] && He && He.length > 1)
      ) {
        let t = [];
        Xr.forEach((e, o) => {
          0 !== o && e.get().opacity <= 0 && t.push(e);
        }),
          t.forEach((t) => Xr.remove(t));
      }
      if (
        ((4 & t.$$.dirty[0]) | (33554432 & t.$$.dirty[7]) &&
          o(26, (lt = Ao && st.length && Ao.labelSupportError(st))),
        1 & t.$$.dirty[6] && o(243, (dt = ee && !!ee.error)),
        1 & t.$$.dirty[6] &&
          o(27, (ut = !ee || (!ee.complete && void 0 === ee.task))),
        1 & t.$$.dirty[6] &&
          o(
            244,
            (pt = ee && (ee.taskLengthComputable ? ee.taskProgress : 1 / 0))
          ),
        4194304 & t.$$.dirty[7] && ct && fn(xr, (Ue = !1), Ue),
        (16777216 & t.$$.dirty[5]) | (1 & t.$$.dirty[6]) && ee && ee.complete)
      ) {
        const t = 500;
        clearTimeout(da),
          o(
            179,
            (da = setTimeout(() => {
              fn(xr, (Ue = !0), Ue);
            }, t))
          );
      }
      if (
        ((134217728 & t.$$.dirty[0]) |
          (1 & t.$$.dirty[6]) |
          (603979776 & t.$$.dirty[7]) && o(245, (ht = ee && !dt && !ut && !Ue)),
        (4194304 & t.$$.dirty[5]) | (1572864 & t.$$.dirty[6]) &&
          o(247, (mt = !(!Ae || (Re && !wr)))),
        (536870912 & t.$$.dirty[6]) | (2 & t.$$.dirty[8]) &&
          o(248, (gt = Oe || (Xe && void 0 !== Xe.progress && !Xe.complete))),
        (134217728 & t.$$.dirty[0]) | (1 & t.$$.dirty[6]) &&
          o(250, (ft = ee && !(ee.error || ut))),
        (4 & t.$$.dirty[0]) | (1 & t.$$.dirty[6]) &&
          o(
            251,
            ($t =
              Ao &&
              (ee
                ? !ee.complete || ee.error
                  ? Rs(
                      Ao.statusLabelLoadImage(ee),
                      ee.error && ee.error.metadata,
                      "{",
                      "}"
                    )
                  : Ao.statusLabelLoadImage({
                      progress: 1 / 0,
                      task: "blob-to-bitmap",
                    })
                : Ao.statusLabelLoadImage(ee)))
          ),
        (4 & t.$$.dirty[0]) | (2 & t.$$.dirty[8]) &&
          o(252, (yt = Xe && Ao && Ao.statusLabelProcessImage(Xe))),
        2 & t.$$.dirty[8] &&
          o(
            253,
            (bt = Xe && (Xe.taskLengthComputable ? Xe.taskProgress : 1 / 0))
          ),
        2 & t.$$.dirty[8] && o(254, (vt = Xe && !Xe.error)),
        2 & t.$$.dirty[8] && o(255, (wt = Xe && Xe.error)),
        (134217732 & t.$$.dirty[0]) |
          (4194304 & t.$$.dirty[4]) |
          (1543503872 & t.$$.dirty[7]) |
          (253 & t.$$.dirty[8]))
      )
        if (Do) {
          let t, e, i, n, r;
          w(Do) && (t = Do),
            qe(Do)
              ? (e = Do)
              : Array.isArray(Do) &&
                (([t, e, r] = Do), !1 === e && (n = !0), qe(e) && (i = !0)),
            o(
              14,
              (pa = (t || e) && {
                text: t,
                aside: n || i,
                progressIndicator: { visible: i, progress: e },
                closeButton: n && {
                  label: Ao.statusLabelButtonClose,
                  icon: Ao.statusIconButtonClose,
                  onclick: r || (() => o(146, (Do = void 0))),
                },
              })
            );
        } else
          o(
            14,
            (pa =
              (Ao && ut) || dt || ht || mt
                ? {
                    text: $t,
                    aside: dt || ft,
                    progressIndicator: { visible: ft, progress: pt },
                    closeButton: dt && {
                      label: Ao.statusLabelButtonClose,
                      icon: Ao.statusIconButtonClose,
                      onclick: ba,
                    },
                  }
                : Ao && gt && yt
                ? {
                    text: yt,
                    aside: wt || vt,
                    progressIndicator: { visible: vt, progress: bt },
                    closeButton: wt && {
                      label: Ao.statusLabelButtonClose,
                      icon: Ao.statusIconButtonClose,
                      onclick: xa,
                    },
                  }
                : void 0)
          );
      if (
        (4194304 & t.$$.dirty[4] && o(256, (St = void 0 !== Do)),
        (16 & t.$$.dirty[7]) | (2 & t.$$.dirty[8]) &&
          O &&
          Xe &&
          Xe.complete &&
          (ua.set(!0), setTimeout(() => ua.set(!1), 100)),
        (201326592 & t.$$.dirty[0]) |
          (1409286144 & t.$$.dirty[7]) |
          (1281 & t.$$.dirty[8]) &&
          o(257, (kt = Ye || lt || ut || dt || ht || mt || gt || St)),
        512 & t.$$.dirty[8] && fn(ca, (Ge = kt ? 1 : 0), Ge),
        268435456 & t.$$.dirty[0] && o(29, (Ct = Ge > 0)),
        16384 & t.$$.dirty[0] && o(259, (Mt = !(!pa || !pa.aside))),
        (536887296 & t.$$.dirty[0]) |
          (33554432 & t.$$.dirty[5]) |
          (6144 & t.$$.dirty[8]) &&
          Ct &&
          pa)
      )
        if ((clearTimeout(ya), Mt)) {
          const t = !!pa.error;
          ma.set(1),
            ha.set(Ke, { hard: t }),
            o(
              180,
              (ya = setTimeout(() => {
                ga.set(16);
              }, 1))
            );
        } else
          ma.set(0),
            o(
              180,
              (ya = setTimeout(() => {
                ga.set(0);
              }, 1))
            );
      if (
        (536870912 & t.$$.dirty[0] &&
          (Ct ||
            ($a.set(void 0, { hard: !0 }),
            ha.set(void 0, { hard: !0 }),
            ga.set(0, { hard: !0 }))),
        16384 & t.$$.dirty[8] && o(261, (Tt = 0.5 * Je)),
        40960 & t.$$.dirty[8] &&
          o(48, (Pt = `transform: translateX(${Qe - Tt}px)`)),
        (4 & t.$$.dirty[0]) |
          (744 & t.$$.dirty[5]) |
          (335544320 & t.$$.dirty[6]) |
          (143616 & t.$$.dirty[7]) |
          (65536 & t.$$.dirty[8]) &&
          o(
            49,
            (Rt =
              Ao &&
              to &&
              fu(() =>
                Go(
                  [
                    [
                      "div",
                      "alpha",
                      { class: "PinturaNavGroup" },
                      [
                        [
                          "div",
                          "alpha-set",
                          { class: "PinturaNavSet" },
                          [
                            oi && [
                              "Button",
                              "close",
                              {
                                label: Ao.labelClose,
                                icon: Ao.iconButtonClose,
                                onclick: () => Mo("close"),
                                hideLabel: !0,
                              },
                            ],
                            Jo && [
                              "Button",
                              "revert",
                              {
                                label: Ao.labelButtonRevert,
                                icon: Ao.iconButtonRevert,
                                disabled: !b,
                                onclick: jr,
                                hideLabel: !0,
                              },
                            ],
                          ],
                        ],
                      ],
                    ],
                    [
                      "div",
                      "beta",
                      { class: "PinturaNavGroup PinturaNavGroupFloat" },
                      [
                        Qo && [
                          "div",
                          "history",
                          { class: "PinturaNavSet" },
                          [
                            [
                              "Button",
                              "undo",
                              {
                                label: Ao.labelButtonUndo,
                                icon: Ao.iconButtonUndo,
                                disabled: !b,
                                onclick: Or.undo,
                                hideLabel: !0,
                              },
                            ],
                            [
                              "Button",
                              "redo",
                              {
                                label: Ao.labelButtonRedo,
                                icon: Ao.iconButtonRedo,
                                disabled: !x,
                                onclick: Or.redo,
                                hideLabel: !0,
                              },
                            ],
                          ],
                        ],
                        J && [
                          "div",
                          "plugin-tools",
                          { class: "PinturaNavSet" },
                          De.filter(Boolean).map(([t, e, o]) => [
                            t,
                            e,
                            { ...o },
                          ]),
                        ],
                      ],
                    ],
                    [
                      "div",
                      "gamma",
                      { class: "PinturaNavGroup" },
                      [
                        Ko && [
                          "Button",
                          "export",
                          {
                            label: Ao.labelButtonExport,
                            icon: V && Ao.iconButtonExport,
                            class: "PinturaButtonExport",
                            onclick: Hr,
                            hideLabel: V,
                          },
                        ],
                      ],
                    ],
                  ],
                  { ...We },
                  () => Ma.set({})
                )
              ))
          ),
        262144 & t.$$.dirty[0] &&
          o(265, (At = Kt && Kt.width > 0 && Kt.height > 0)),
        (4 & t.$$.dirty[0]) | (1 & t.$$.dirty[7]) | (131072 & t.$$.dirty[8]) &&
          o(50, (Et = At && Ao && k)),
        524288 & t.$$.dirty[8] && o(266, (zt = oo && !!oo.length)),
        (64 & t.$$.dirty[6]) | (786432 & t.$$.dirty[8]) &&
          o(268, (Bt = zt && Ji($e, oo))),
        (524288 & t.$$.dirty[6]) | (7602176 & t.$$.dirty[8]) &&
          zt &&
          ((t, e, i, n) => {
            if (!e) return;
            const r = { dataSizeScalar: i };
            n && n[3] > 0 && (r.backgroundColor = [...n]),
              e(t, r).then((t) => {
                Aa && g(Aa), o(181, (Aa = t));
              });
          })(Re, io, Bt, no),
        (67108864 & t.$$.dirty[5]) |
          (64 & t.$$.dirty[6]) |
          (524288 & t.$$.dirty[8]) &&
          oo &&
          Aa &&
          $e)
      ) {
        const { width: t, height: e } = $e;
        o(
          15,
          (Ia = oo.map((o) => {
            const i = Wt(o.x, o.y, o.width, o.height),
              n = Gt(It(i), o.rotation).map((o) => X(o.x / t, o.y / e));
            return {
              ...o,
              id: "redaction",
              flipX: !1,
              flipY: !1,
              cornerRadius: 0,
              strokeWidth: 0,
              strokeColor: void 0,
              backgroundColor: [0, 0, 0],
              backgroundImage: Aa,
              backgroundImageRendering: "pixelated",
              backgroundCorners: n,
            };
          }))
        );
      }
      65536 & t.$$.dirty[0] && Ea && La.set(Ea),
        (67108864 & t.$$.dirty[0]) | (524288 & t.$$.dirty[6]) &&
          o(30, (Dt = Re && !lt)),
        1073741826 & t.$$.dirty[0] && Dt && $i.dispatchEvent(eu("ready")),
        1 & t.$$.dirty[1] && o(35, (Ua = !0)),
        2 & t.$$.dirty[1] && o(36, (Xa = !0)),
        4 & t.$$.dirty[1] && o(37, (Ya = !0)),
        32768 & t.$$.dirty[0] && o(38, (Ga = !0));
    }),
    o(207, (f = !Ts())),
    o(242, (st = [!cu() && "WebGL"].filter(Boolean))),
    o(
      51,
      (Ot = (
        (t, e = !0) =>
        (o) => {
          "ping" === o.type &&
            (e && o.stopPropagation(), t(o.detail.type, o.detail.data));
        }
      )(Co.pub))
    ),
    [
      fi,
      $i,
      Ao,
      Lo,
      Vo,
      Xo,
      ti,
      si,
      mi,
      ki,
      Sr,
      Or,
      Rr,
      Ar,
      pa,
      Ia,
      Ea,
      r,
      Kt,
      I,
      M,
      xe,
      we,
      C,
      P,
      He,
      lt,
      ut,
      Ge,
      Ct,
      Dt,
      co,
      uo,
      po,
      Qr,
      Ua,
      Xa,
      Ya,
      Ga,
      he,
      Fe,
      R,
      A,
      E,
      L,
      N,
      ot,
      it,
      Pt,
      Rt,
      Et,
      Ot,
      mo,
      go,
      fo,
      $o,
      yo,
      bo,
      xo,
      vo,
      wo,
      bi,
      Mi,
      Ti,
      Ai,
      Ei,
      Li,
      zi,
      Ui,
      en,
      on,
      nn,
      rn,
      an,
      sn,
      un,
      pn,
      hn,
      $n,
      yn,
      bn,
      vn,
      wn,
      Sn,
      kn,
      Cn,
      Mn,
      Tn,
      Pn,
      Rn,
      An,
      En,
      In,
      Fn,
      zn,
      Bn,
      _n,
      Zn,
      Hn,
      Un,
      Gn,
      dr,
      hr,
      mr,
      gr,
      fr,
      $r,
      yr,
      br,
      xr,
      vr,
      Cr,
      Mr,
      Tr,
      Ir,
      Fr,
      zr,
      Br,
      Nr,
      Xr,
      Gr,
      Kr,
      ({ target: t, propertyName: e }) => {
        t === $i && /background|outline/.test(e) && oa();
      },
      ra,
      ca,
      ua,
      ha,
      ma,
      ga,
      fa,
      $a,
      (t) => {
        const e = !(!pa || !pa.closeButton);
        fa.set(t.detail.width, { hard: e }),
          $a.set(Math.round(0.5 * -t.detail.width), { hard: e });
      },
      wa,
      Sa,
      Ca,
      Ma,
      Ta,
      (t) => {
        const { keyCode: e, metaKey: o, ctrlKey: i, shiftKey: n } = t;
        if (9 === e && Oo) return void t.preventDefault();
        if (
          (t.target &&
            32 === e &&
            $i.contains(t.target) &&
            !ou(t.target) &&
            t.preventDefault(),
          90 === e && (o || i))
        )
          return void (n && o ? Or.redo() : Or.undo());
        if (89 === e && i) return void Or.redo();
        if (229 === e) return;
        if (o || i) return;
        const r = new Set([...eo, e]);
        Ta.set(Array.from(r));
      },
      ({ keyCode: t }) => {
        Ta.set(eo.filter((e) => e !== t));
      },
      () => {
        Ta.set([]);
      },
      (t) => {
        ou(t.target) || t.preventDefault();
      },
      (t) => {
        ii && Pa(t.detail.resources[0]);
      },
      () => {
        ri && gu().then(Ra);
      },
      (t) => {
        if (!ni) return;
        const e = na((Rr - Math.abs(te.x)) / te.width, 0, 1),
          o = na((Ar - Math.abs(te.y)) / te.height, 0, 1);
        (e < 0.75 && o < 0.75) ||
          Pa((t.clipboardData || window.clipboardData).files[0]);
      },
      Fa,
      Ha,
      Do,
      kr,
      To,
      Po,
      Ro,
      Fo,
      zo,
      Bo,
      Oo,
      Zo,
      jo,
      Uo,
      Go,
      qo,
      Ko,
      Jo,
      Qo,
      ei,
      oi,
      ii,
      ni,
      ri,
      ai,
      li,
      ci,
      di,
      ui,
      pi,
      hi,
      gi,
      yi,
      wr,
      la,
      da,
      ya,
      Aa,
      i,
      Xt,
      Yt,
      te,
      ee,
      ie,
      ae,
      v,
      le,
      ge,
      $e,
      l,
      ve,
      Se,
      c,
      ke,
      d,
      Ce,
      u,
      Me,
      m,
      Te,
      Pe,
      Re,
      Ae,
      f,
      $,
      y,
      Ee,
      Ie,
      b,
      Be,
      x,
      Oe,
      S,
      k,
      F,
      z,
      B,
      O,
      D,
      _,
      Z,
      V,
      j,
      H,
      G,
      J,
      De,
      Q,
      tt,
      et,
      We,
      _e,
      Ze,
      Ve,
      je,
      ct,
      Ne,
      at,
      st,
      dt,
      pt,
      ht,
      Ue,
      mt,
      gt,
      Xe,
      ft,
      $t,
      yt,
      bt,
      vt,
      wt,
      St,
      kt,
      Ye,
      Mt,
      Ke,
      Tt,
      Je,
      Qe,
      to,
      At,
      zt,
      oo,
      Bt,
      io,
      no,
      function () {
        o(12, (Rr = $u.innerWidth)), o(13, (Ar = $u.innerHeight));
      },
      (t) => fn(kn, (fo = t.detail), fo),
      ({ detail: t }) => o(20, (M = t)),
      (t, e) => e.id === t,
      function (e, i) {
        t.$$.not_equal(fi[i], e) &&
          ((fi[i] = e), o(0, fi), o(8, mi), o(174, hi));
      },
      (t) => fn(Cn, ($o = t.detail), $o),
      (t) => o(34, (Qr = Qr.concat(t))),
      (t) => o(34, (Qr = Qr.filter((e) => e !== t))),
      (t, { detail: e }) => o(24, (P[t] = e), P),
      (t) => fn(Sn, (Fe = t.detail), Fe),
      (t) => t.id === M,
      function (e) {
        t.$$.not_equal(fi[M], e) &&
          ((fi[M] = e), o(0, fi), o(8, mi), o(174, hi));
      },
      (t) => fn(Cn, ($o = t.detail), $o),
      () => o(34, (Qr = Qr.concat(M))),
      () => o(34, (Qr = Qr.filter((t) => t !== M))),
      ({ detail: t }) => o(24, (P[M] = t), P),
      (t) => {
        const e = { ...t, ...Fa() },
          {
            annotationShapes: o,
            decorationShapes: i,
            interfaceShapes: n,
            frameShapes: r,
          } = Xo(
            {
              annotationShapes: co,
              decorationShapes: uo,
              interfaceShapes: vo,
              frameShapes: po,
            },
            e
          );
        return Ha(e, Ia, o, i, n, r);
      },
      () => {
        o(35, (Ua = !1)), o(36, (Xa = !1)), o(37, (Ya = !1)), o(38, (Ga = !1));
      },
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (Ea = t), o(16, Ea);
        });
      },
      function (t) {
        or[t ? "unshift" : "push"](() => {
          ($i = t), o(1, $i);
        });
      },
      (t) => fn(vn, (Kt = t.detail), Kt),
    ]
  );
}
class Zu extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        _u,
        Du,
        sn,
        {
          class: 148,
          layout: 149,
          stores: 150,
          locale: 2,
          id: 3,
          util: 151,
          utils: 152,
          animations: 153,
          disabled: 154,
          status: 146,
          previewUpscale: 155,
          elasticityMultiplier: 4,
          willRevert: 156,
          willProcessImage: 157,
          willRenderCanvas: 5,
          willRenderToolbar: 158,
          willSetHistoryInitialState: 159,
          enableButtonExport: 160,
          enableButtonRevert: 161,
          enableNavigateHistory: 162,
          enableToolbar: 6,
          enableUtils: 163,
          enableButtonClose: 164,
          enableDropImage: 165,
          enablePasteImage: 166,
          enableBrowseImage: 167,
          previewImageDataMaxSize: 168,
          previewImageTextPixelRatio: 7,
          layoutDirectionPreference: 169,
          layoutHorizontalUtilsPreference: 170,
          layoutVerticalUtilsPreference: 171,
          imagePreviewSrc: 172,
          imageOrienter: 173,
          pluginComponents: 174,
          pluginOptions: 8,
          sub: 175,
          pluginInterface: 0,
          root: 1,
          imageSourceToImageData: 9,
          imagePreview: 10,
          imagePreviewCurrent: 147,
          history: 11,
        },
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
      );
  }
  get class() {
    return this.$$.ctx[148];
  }
  set class(t) {
    this.$set({ class: t }), hr();
  }
  get layout() {
    return this.$$.ctx[149];
  }
  set layout(t) {
    this.$set({ layout: t }), hr();
  }
  get stores() {
    return this.$$.ctx[150];
  }
  set stores(t) {
    this.$set({ stores: t }), hr();
  }
  get locale() {
    return this.$$.ctx[2];
  }
  set locale(t) {
    this.$set({ locale: t }), hr();
  }
  get id() {
    return this.$$.ctx[3];
  }
  set id(t) {
    this.$set({ id: t }), hr();
  }
  get util() {
    return this.$$.ctx[151];
  }
  set util(t) {
    this.$set({ util: t }), hr();
  }
  get utils() {
    return this.$$.ctx[152];
  }
  set utils(t) {
    this.$set({ utils: t }), hr();
  }
  get animations() {
    return this.$$.ctx[153];
  }
  set animations(t) {
    this.$set({ animations: t }), hr();
  }
  get disabled() {
    return this.$$.ctx[154];
  }
  set disabled(t) {
    this.$set({ disabled: t }), hr();
  }
  get status() {
    return this.$$.ctx[146];
  }
  set status(t) {
    this.$set({ status: t }), hr();
  }
  get previewUpscale() {
    return this.$$.ctx[155];
  }
  set previewUpscale(t) {
    this.$set({ previewUpscale: t }), hr();
  }
  get elasticityMultiplier() {
    return this.$$.ctx[4];
  }
  set elasticityMultiplier(t) {
    this.$set({ elasticityMultiplier: t }), hr();
  }
  get willRevert() {
    return this.$$.ctx[156];
  }
  set willRevert(t) {
    this.$set({ willRevert: t }), hr();
  }
  get willProcessImage() {
    return this.$$.ctx[157];
  }
  set willProcessImage(t) {
    this.$set({ willProcessImage: t }), hr();
  }
  get willRenderCanvas() {
    return this.$$.ctx[5];
  }
  set willRenderCanvas(t) {
    this.$set({ willRenderCanvas: t }), hr();
  }
  get willRenderToolbar() {
    return this.$$.ctx[158];
  }
  set willRenderToolbar(t) {
    this.$set({ willRenderToolbar: t }), hr();
  }
  get willSetHistoryInitialState() {
    return this.$$.ctx[159];
  }
  set willSetHistoryInitialState(t) {
    this.$set({ willSetHistoryInitialState: t }), hr();
  }
  get enableButtonExport() {
    return this.$$.ctx[160];
  }
  set enableButtonExport(t) {
    this.$set({ enableButtonExport: t }), hr();
  }
  get enableButtonRevert() {
    return this.$$.ctx[161];
  }
  set enableButtonRevert(t) {
    this.$set({ enableButtonRevert: t }), hr();
  }
  get enableNavigateHistory() {
    return this.$$.ctx[162];
  }
  set enableNavigateHistory(t) {
    this.$set({ enableNavigateHistory: t }), hr();
  }
  get enableToolbar() {
    return this.$$.ctx[6];
  }
  set enableToolbar(t) {
    this.$set({ enableToolbar: t }), hr();
  }
  get enableUtils() {
    return this.$$.ctx[163];
  }
  set enableUtils(t) {
    this.$set({ enableUtils: t }), hr();
  }
  get enableButtonClose() {
    return this.$$.ctx[164];
  }
  set enableButtonClose(t) {
    this.$set({ enableButtonClose: t }), hr();
  }
  get enableDropImage() {
    return this.$$.ctx[165];
  }
  set enableDropImage(t) {
    this.$set({ enableDropImage: t }), hr();
  }
  get enablePasteImage() {
    return this.$$.ctx[166];
  }
  set enablePasteImage(t) {
    this.$set({ enablePasteImage: t }), hr();
  }
  get enableBrowseImage() {
    return this.$$.ctx[167];
  }
  set enableBrowseImage(t) {
    this.$set({ enableBrowseImage: t }), hr();
  }
  get previewImageDataMaxSize() {
    return this.$$.ctx[168];
  }
  set previewImageDataMaxSize(t) {
    this.$set({ previewImageDataMaxSize: t }), hr();
  }
  get previewImageTextPixelRatio() {
    return this.$$.ctx[7];
  }
  set previewImageTextPixelRatio(t) {
    this.$set({ previewImageTextPixelRatio: t }), hr();
  }
  get layoutDirectionPreference() {
    return this.$$.ctx[169];
  }
  set layoutDirectionPreference(t) {
    this.$set({ layoutDirectionPreference: t }), hr();
  }
  get layoutHorizontalUtilsPreference() {
    return this.$$.ctx[170];
  }
  set layoutHorizontalUtilsPreference(t) {
    this.$set({ layoutHorizontalUtilsPreference: t }), hr();
  }
  get layoutVerticalUtilsPreference() {
    return this.$$.ctx[171];
  }
  set layoutVerticalUtilsPreference(t) {
    this.$set({ layoutVerticalUtilsPreference: t }), hr();
  }
  get imagePreviewSrc() {
    return this.$$.ctx[172];
  }
  set imagePreviewSrc(t) {
    this.$set({ imagePreviewSrc: t }), hr();
  }
  get imageOrienter() {
    return this.$$.ctx[173];
  }
  set imageOrienter(t) {
    this.$set({ imageOrienter: t }), hr();
  }
  get pluginComponents() {
    return this.$$.ctx[174];
  }
  set pluginComponents(t) {
    this.$set({ pluginComponents: t }), hr();
  }
  get pluginOptions() {
    return this.$$.ctx[8];
  }
  set pluginOptions(t) {
    this.$set({ pluginOptions: t }), hr();
  }
  get sub() {
    return this.$$.ctx[175];
  }
  get pluginInterface() {
    return this.$$.ctx[0];
  }
  get root() {
    return this.$$.ctx[1];
  }
  set root(t) {
    this.$set({ root: t }), hr();
  }
  get imageSourceToImageData() {
    return this.$$.ctx[9];
  }
  set imageSourceToImageData(t) {
    this.$set({ imageSourceToImageData: t }), hr();
  }
  get imagePreview() {
    return this.$$.ctx[10];
  }
  get imagePreviewCurrent() {
    return this.$$.ctx[147];
  }
  set imagePreviewCurrent(t) {
    this.$set({ imagePreviewCurrent: t }), hr();
  }
  get history() {
    return this.$$.ctx[11];
  }
}
((t) => {
  const [e, o, i, n, r, a, s] = [
    "UmVnRXhw",
    "dGVzdA==",
    "cHFpbmFcLm5sfGxvY2FsaG9zdA==",
    "bG9jYXRpb24=",
    "Y29uc29sZQ==",
    "bG9n",
    "VGhpcyB2ZXJzaW9uIG9mIFBpbnR1cmEgaXMgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seS4gVmlzaXQgaHR0cHM6Ly9wcWluYS5ubC9waW50dXJhLyB0byBvYnRhaW4gYSBjb21tZXJjaWFsIGxpY2Vuc2Uu",
  ].map(t[[(!1 + "")[1], (!0 + "")[0], (1 + {})[2], (1 + {})[3]].join("")]);
  new t[e](i)[o](t[n]) || t[r][a](s);
})(window);
const Vu = [
    "klass",
    "stores",
    "isVisible",
    "isActive",
    "isActiveFraction",
    "locale",
  ],
  ju = [
    "history",
    "klass",
    "stores",
    "navButtons",
    "pluginComponents",
    "pluginInterface",
    "pluginOptions",
    "sub",
    "imagePreviewSrc",
    "imagePreview",
    "imagePreviewCurrent",
  ];
let Nu;
const Hu = new Set([]),
  Uu = {},
  Xu = new Map(),
  Yu = (...t) => {
    t.filter((t) => !!t.util).forEach((t) => {
      const [e, o] = t.util;
      Xu.has(e) ||
        (Xu.set(e, o),
        Rl(o)
          .filter((t) => !Vu.includes(t))
          .forEach((t) => {
            Hu.add(t), Uu[t] ? Uu[t].push(e) : (Uu[t] = [e]);
          }));
    });
  };
var Gu = [
  ...fa,
  "init",
  "undo",
  "redo",
  "update",
  "revert",
  "destroy",
  "show",
  "hide",
  "close",
  "ready",
  "loadpreview",
  "selectshape",
  "updateshape",
  "addshape",
  "removeshape",
  "selectstyle",
];
var qu = (t, e, o = {}) => {
    const { prefix: i = "pintura:" } = o;
    return Gu.map((o) =>
      t.on(o, (t) =>
        ue(e)
          ? ((t, e, o) =>
              t.dispatchEvent(
                new CustomEvent(e, { detail: o, bubbles: !0, cancelable: !0 })
              ))(e, `${i}${o}`, t)
          : e(o, t)
      )
    );
  },
  Ku = (t) => {
    if (void 0 === t || qe(t)) return t;
    if (!w(t)) return !1;
    const e = t;
    if (!e.length) return;
    const [o, i] = e
      .split(/\/|:/g)
      .map((t) => parseFloat(t.replace(/,/, ".")))
      .filter(Boolean);
    return !!o && (i ? Math.abs(o / i) : o);
  };
const Ju = (t) => w(t[0]),
  Qu = (t) => !Ju(t),
  tp = (t) => t[1],
  ep = (t) => t[3] || [];
function op(t, e, o, i) {
  return Array.isArray(o) && ((i = o), (o = {})), [t, e, o || {}, i || []];
}
const ip = (t, e, o, i = (t) => t) => {
    const n = cp(e, o),
      r = n.findIndex((t) => tp(t) === e);
    var a, s, l;
    (a = n), (s = i(r)), (l = t), a.splice(s, 0, l);
  },
  np = (t, e, o) => ip(t, e, o),
  rp = (t, e, o) => ip(t, e, o, (t) => t + 1),
  ap = (t, e) => {
    if (Qu(e)) return e.push(t);
    e[3] = [...ep(e), t];
  },
  sp = (t, e) => {
    const o = cp(t, e);
    return jl(o, (e) => tp(e) === t), o;
  },
  lp = (t, e) => {
    if (e)
      return Ju(e)
        ? tp(e) === t
          ? e
          : lp(t, ep(e))
        : Array.isArray(e)
        ? e.find((e) => lp(t, e))
        : void 0;
  },
  cp = (t, e) =>
    Qu(e)
      ? e.find((e) => tp(e) === t)
        ? e
        : e.find((e) => cp(t, ep(e)))
      : cp(t, ep(e));
var dp = () => {};
let up = null;
var pp = () => (
    null === up &&
      (up =
        c() &&
        !(
          "[object OperaMini]" ===
          Object.prototype.toString.call(window.operamini)
        ) &&
        "visibilityState" in document &&
        "Promise" in window &&
        "File" in window &&
        "URL" in window &&
        "createObjectURL" in window.URL &&
        "performance" in window),
    up
  ),
  hp = (t) => Math.round(100 * t);
const mp = {
    base: 0,
    min: -0.25,
    max: 0.25,
    getLabel: (t) => hp(t / 0.25),
    getStore: ({ imageColorMatrix: t }) => t,
    getValue: (t) => {
      if (t.brightness) return t.brightness[4];
    },
    setValue: (t, e) =>
      t.update((t) => ({
        ...t,
        brightness: [
          1,
          0,
          0,
          0,
          e,
          0,
          1,
          0,
          0,
          e,
          0,
          0,
          1,
          0,
          e,
          0,
          0,
          0,
          1,
          0,
        ],
      })),
  },
  gp = {
    base: 1,
    min: 0.5,
    max: 1.5,
    getLabel: (t) => hp(2 * (t - 0.5) - 1),
    getStore: ({ imageColorMatrix: t }) => t,
    getValue: (t) => {
      if (t.contrast) return t.contrast[0];
    },
    setValue: (t, e) =>
      t.update((t) => ({
        ...t,
        contrast: [
          e,
          0,
          0,
          0,
          0.5 * (1 - e),
          0,
          e,
          0,
          0,
          0.5 * (1 - e),
          0,
          0,
          e,
          0,
          0.5 * (1 - e),
          0,
          0,
          0,
          1,
          0,
        ],
      })),
  },
  fp = {
    base: 1,
    min: 0,
    max: 2,
    getLabel: (t) => hp(t - 1),
    getStore: ({ imageColorMatrix: t }) => t,
    getValue: (t) => {
      if (t.saturation) return (t.saturation[0] - 0.213) / 0.787;
    },
    setValue: (t, e) =>
      t.update((t) => ({
        ...t,
        saturation: [
          0.213 + 0.787 * e,
          0.715 - 0.715 * e,
          0.072 - 0.072 * e,
          0,
          0,
          0.213 - 0.213 * e,
          0.715 + 0.285 * e,
          0.072 - 0.072 * e,
          0,
          0,
          0.213 - 0.213 * e,
          0.715 - 0.715 * e,
          0.072 + 0.928 * e,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
        ],
      })),
  },
  $p = {
    base: 1,
    min: 0.5,
    max: 1.5,
    getLabel: (t) => hp(2 * (t - 0.5) - 1),
    getStore: ({ imageColorMatrix: t }) => t,
    getValue: (t) => {
      if (t.exposure) return t.exposure[0];
    },
    setValue: (t, e) =>
      t.update((t) => ({
        ...t,
        exposure: [e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 1, 0],
      })),
  },
  yp = {
    base: 1,
    min: 0.15,
    max: 4,
    getLabel: (t) => hp(t < 1 ? (t - 0.15) / 0.85 - 1 : (t - 1) / 3),
    getStore: ({ imageGamma: t }) => t,
  },
  bp = { base: 0, min: -1, max: 1, getStore: ({ imageVignette: t }) => t },
  xp = {
    base: 0,
    min: -1,
    max: 1,
    getStore: ({ imageConvolutionMatrix: t }) => t,
    getValue: (t) => {
      if (t.clarity)
        return 0 === t.clarity[0] ? t.clarity[1] / -1 : t.clarity[1] / -2;
    },
    setValue: (t, e) => {
      t.update((t) => ({
        ...t,
        clarity:
          e >= 0
            ? [0, -1 * e, 0, -1 * e, 1 + 4 * e, -1 * e, 0, -1 * e, 0]
            : [
                -1 * e,
                -2 * e,
                -1 * e,
                -2 * e,
                1 + -3 * e,
                -2 * e,
                -1 * e,
                -2 * e,
                -1 * e,
              ],
      }));
    },
  },
  vp = {
    base: 0,
    min: -1,
    max: 1,
    getStore: ({ imageColorMatrix: t }) => t,
    getValue: (t) => {
      if (!t.temperature) return;
      const e = t.temperature[0];
      return e >= 1 ? (e - 1) / 0.1 : (1 - e) / -0.15;
    },
    setValue: (t, e) =>
      t.update((t) => ({
        ...t,
        temperature:
          e > 0
            ? [
                1 + 0.1 * e,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                1 + 0.1 * -e,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ]
            : [
                1 + 0.15 * e,
                0,
                0,
                0,
                0,
                0,
                1 + 0.05 * e,
                0,
                0,
                0,
                0,
                0,
                1 + 0.15 * -e,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ],
      })),
  };
var wp = {
  finetuneControlConfiguration: {
    gamma: yp,
    brightness: mp,
    contrast: gp,
    saturation: fp,
    exposure: $p,
    temperature: vp,
    clarity: xp,
    vignette: bp,
  },
  finetuneOptions: [
    ["brightness", (t) => t.finetuneLabelBrightness],
    ["contrast", (t) => t.finetuneLabelContrast],
    ["saturation", (t) => t.finetuneLabelSaturation],
    ["exposure", (t) => t.finetuneLabelExposure],
    ["temperature", (t) => t.finetuneLabelTemperature],
    ["gamma", (t) => t.finetuneLabelGamma],
    !Ts() && ["clarity", (t) => t.finetuneLabelClarity],
    ["vignette", (t) => t.finetuneLabelVignette],
  ].filter(Boolean),
};
const Sp = () => [
    0.75, 0.25, 0.25, 0, 0, 0.25, 0.75, 0.25, 0, 0, 0.25, 0.25, 0.75, 0, 0, 0,
    0, 0, 1, 0,
  ],
  kp = () => [
    1.398, -0.316, 0.065, -0.273, 0.201, -0.051, 1.278, -0.08, -0.273, 0.201,
    -0.051, 0.119, 1.151, -0.29, 0.215, 0, 0, 0, 1, 0,
  ],
  Cp = () => [
    1.073, -0.015, 0.092, -0.115, -0.017, 0.107, 0.859, 0.184, -0.115, -0.017,
    0.015, 0.077, 1.104, -0.115, -0.017, 0, 0, 0, 1, 0,
  ],
  Mp = () => [
    1.06, 0, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 0, 0.93, 0, 0, 0, 0, 0, 1, 0,
  ],
  Tp = () => [
    1.1, 0, 0, 0, -0.1, 0, 1.1, 0, 0, -0.1, 0, 0, 1.2, 0, -0.1, 0, 0, 0, 1, 0,
  ],
  Pp = () => [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0],
  Rp = () => [
    0.212, 0.715, 0.114, 0, 0, 0.212, 0.715, 0.114, 0, 0, 0.212, 0.715, 0.114,
    0, 0, 0, 0, 0, 1, 0,
  ],
  Ap = () => [
    0.15, 1.3, -0.25, 0.1, -0.2, 0.15, 1.3, -0.25, 0.1, -0.2, 0.15, 1.3, -0.25,
    0.1, -0.2, 0, 0, 0, 1, 0,
  ],
  Ep = () => [
    0.163, 0.518, 0.084, -0.01, 0.208, 0.163, 0.529, 0.082, -0.02, 0.21, 0.171,
    0.529, 0.084, 0, 0.214, 0, 0, 0, 1, 0,
  ],
  Ip = () => [
    0.338, 0.991, 0.117, 0.093, -0.196, 0.302, 1.049, 0.096, 0.078, -0.196,
    0.286, 1.016, 0.146, 0.101, -0.196, 0, 0, 0, 1, 0,
  ],
  Lp = () => [
    0.393, 0.768, 0.188, 0, 0, 0.349, 0.685, 0.167, 0, 0, 0.272, 0.533, 0.13, 0,
    0, 0, 0, 0, 1, 0,
  ],
  Fp = () => [
    0.289, 0.62, 0.185, 0, 0.077, 0.257, 0.566, 0.163, 0, 0.115, 0.2, 0.43,
    0.128, 0, 0.188, 0, 0, 0, 1, 0,
  ],
  zp = () => [
    0.269, 0.764, 0.172, 0.05, 0.1, 0.239, 0.527, 0.152, 0, 0.176, 0.186, 0.4,
    0.119, 0, 0.159, 0, 0, 0, 1, 0,
  ],
  Bp = () => [
    0.547, 0.764, 0.134, 0, -0.147, 0.281, 0.925, 0.12, 0, -0.135, 0.225, 0.558,
    0.33, 0, -0.113, 0, 0, 0, 1, 0,
  ];
var Op = {
  filterFunctions: {
    chrome: kp,
    fade: Cp,
    pastel: Sp,
    cold: Tp,
    warm: Mp,
    monoDefault: Rp,
    monoWash: Ep,
    monoNoir: Ap,
    monoStark: Ip,
    sepiaDefault: Lp,
    sepiaRust: zp,
    sepiaBlues: Fp,
    sepiaColor: Bp,
  },
  filterOptions: [
    ["Default", [[void 0, (t) => t.labelDefault]]],
    [
      "Classic",
      [
        ["chrome", (t) => t.filterLabelChrome],
        ["fade", (t) => t.filterLabelFade],
        ["cold", (t) => t.filterLabelCold],
        ["warm", (t) => t.filterLabelWarm],
        ["pastel", (t) => t.filterLabelPastel],
      ],
    ],
    [
      "Monochrome",
      [
        ["monoDefault", (t) => t.filterLabelMonoDefault],
        ["monoNoir", (t) => t.filterLabelMonoNoir],
        ["monoStark", (t) => t.filterLabelMonoStark],
        ["monoWash", (t) => t.filterLabelMonoWash],
      ],
    ],
    [
      "Sepia",
      [
        ["sepiaDefault", (t) => t.filterLabelSepiaDefault],
        ["sepiaRust", (t) => t.filterLabelSepiaRust],
        ["sepiaBlues", (t) => t.filterLabelSepiaBlues],
        ["sepiaColor", (t) => t.filterLabelSepiaColor],
      ],
    ],
  ],
};
const Dp = {
    shape: { frameColor: [1, 1, 1], frameStyle: "solid", frameSize: "2.5%" },
    thumb: '<rect stroke-width="5" x="0" y="0" width="100%" height="100%"/>',
  },
  Wp = {
    shape: {
      frameColor: [1, 1, 1],
      frameStyle: "solid",
      frameSize: "2.5%",
      frameRound: !0,
    },
    thumb:
      '<rect stroke-width="5" x="0" y="0" width="100%" height="100%" rx="12%"/>',
  },
  _p = {
    shape: {
      frameColor: [1, 1, 1],
      frameStyle: "line",
      frameInset: "2.5%",
      frameSize: ".3125%",
      frameRadius: 0,
    },
    thumb:
      '<div style="top:.5em;left:.5em;right:.5em;bottom:.5em;box-shadow:inset 0 0 0 1px currentColor"></div>',
  },
  Zp = {
    shape: {
      frameColor: [1, 1, 1],
      frameStyle: "line",
      frameAmount: 2,
      frameInset: "2.5%",
      frameSize: ".3125%",
      frameOffset: "1.25%",
      frameRadius: 0,
    },
    thumb:
      '<div style="top:.75em;left:.75em;right:.75em;bottom:.75em; outline: 3px double"></div>',
  },
  Vp = {
    shape: {
      frameColor: [1, 1, 1],
      frameStyle: "edge",
      frameInset: "2.5%",
      frameOffset: "5%",
      frameSize: ".3125%",
    },
    thumb:
      '<div style="top:.75em;left:.5em;bottom:.75em;border-left:1px solid"></div><div style="top:.75em;right:.5em;bottom:.75em;border-right:1px solid"></div><div style="top:.5em;left:.75em;right:.75em;border-top:1px solid"></div><div style="bottom:.5em;left:.75em;right:.75em;border-bottom:1px solid"></div>',
  },
  jp = {
    shape: {
      frameColor: [1, 1, 1],
      frameStyle: "edge",
      frameInset: "2.5%",
      frameSize: ".3125%",
    },
    thumb:
      '<div style="top:-.5em;left:.5em;right:.5em;bottom:-.5em; box-shadow: inset 0 0 0 1px currentColor"></div><div style="top:.5em;left:-.5em;right:-.5em;bottom:.5em;box-shadow:inset 0 0 0 1px currentColor"></div>',
  },
  Np = {
    shape: {
      frameColor: [1, 1, 1],
      frameStyle: "edge",
      frameOffset: "1.5%",
      frameSize: ".3125%",
    },
    thumb:
      '<div style="top:.3125em;left:.5em;bottom:.3125em;border-left:1px solid"></div><div style="top:.3125em;right:.5em;bottom:.3125em;border-right:1px solid"></div><div style="top:.5em;left:.3125em;right:.3125em;border-top:1px solid"></div><div style="bottom:.5em;left:.3125em;right:.3125em;border-bottom:1px solid"></div>',
  },
  Hp = {
    shape: {
      frameColor: [1, 1, 1],
      frameStyle: "hook",
      frameInset: "2.5%",
      frameSize: ".3125%",
      frameLength: "5%",
    },
    thumb:
      '<div style="top:.5em;left:.5em;width:.75em;height:.75em; border-left: 1px solid;border-top: 1px solid;"></div><div style="top:.5em;right:.5em;width:.75em;height:.75em; border-right: 1px solid;border-top: 1px solid;"></div><div style="bottom:.5em;left:.5em;width:.75em;height:.75em; border-left: 1px solid;border-bottom: 1px solid;"></div><div style="bottom:.5em;right:.5em;width:.75em;height:.75em; border-right: 1px solid;border-bottom: 1px solid;"></div>',
  },
  Up = {
    shape: { frameColor: [1, 1, 1], frameStyle: "polaroid" },
    thumb:
      '<rect stroke-width="20%" x="-5%" y="-5%" width="110%" height="96%"/>',
  };
var Xp = {
    frameStyles: {
      solidSharp: Dp,
      solidRound: Wp,
      lineSingle: _p,
      lineMultiple: Zp,
      edgeSeparate: Vp,
      edgeCross: jp,
      edgeOverlap: Np,
      hook: Hp,
      polaroid: Up,
    },
    frameOptions: [
      [void 0, (t) => t.labelNone],
      ["solidSharp", (t) => t.frameLabelMatSharp],
      ["solidRound", (t) => t.frameLabelMatRound],
      ["lineSingle", (t) => t.frameLabelLineSingle],
      ["lineMultiple", (t) => t.frameLabelLineMultiple],
      ["edgeCross", (t) => t.frameLabelEdgeCross],
      ["edgeSeparate", (t) => t.frameLabelEdgeSeparate],
      ["edgeOverlap", (t) => t.frameLabelEdgeOverlap],
      ["hook", (t) => t.frameLabelCornerHooks],
      ["polaroid", (t) => t.frameLabelPolaroid],
    ],
  },
  Yp = (t, e, o) => {
    let i, n, r;
    const a = Math.floor(6 * t),
      s = 6 * t - a,
      l = o * (1 - e),
      c = o * (1 - s * e),
      d = o * (1 - (1 - s) * e);
    switch (a % 6) {
      case 0:
        (i = o), (n = d), (r = l);
        break;
      case 1:
        (i = c), (n = o), (r = l);
        break;
      case 2:
        (i = l), (n = o), (r = d);
        break;
      case 3:
        (i = l), (n = c), (r = o);
        break;
      case 4:
        (i = d), (n = l), (r = o);
        break;
      case 5:
        (i = o), (n = l), (r = c);
    }
    return [i, n, r];
  };
function Gp(t) {
  let e, o, i;
  return {
    c() {
      (e = Tn("div")),
        (o = Tn("span")),
        zn(e, "class", "PinturaColorPreview"),
        zn(e, "title", t[0]),
        zn(e, "style", (i = "--color:" + t[1]));
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, [o]) {
      1 & o && zn(e, "title", t[0]),
        2 & o && i !== (i = "--color:" + t[1]) && zn(e, "style", i);
    },
    i: Qi,
    o: Qi,
    d(t) {
      t && Mn(e);
    },
  };
}
function qp(t, e, o) {
  let i,
    { color: n } = e,
    { title: r } = e;
  return (
    (t.$$set = (t) => {
      "color" in t && o(2, (n = t.color)), "title" in t && o(0, (r = t.title));
    }),
    (t.$$.update = () => {
      4 & t.$$.dirty && o(1, (i = n ? so(n) : "transparent"));
    }),
    [r, i, n]
  );
}
class Kp extends Br {
  constructor(t) {
    super(), zr(this, t, qp, Gp, sn, { color: 2, title: 0 });
  }
}
function Jp(t) {
  let e, o;
  return {
    c() {
      (e = Tn("span")), (o = Rn(t[0]));
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, e) {
      1 & e[0] && On(o, t[0]);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Qp(t) {
  let e, o, i, n;
  o = new Kp({ props: { color: t[4], title: Bc(t[8], t[10]) } });
  let r = !t[9] && Jp(t);
  return {
    c() {
      (e = Tn("span")),
        Ir(o.$$.fragment),
        (i = An()),
        r && r.c(),
        zn(e, "slot", "label"),
        zn(e, "class", "PinturaButtonLabel");
    },
    m(t, a) {
      Cn(t, e, a), Lr(o, e, null), kn(e, i), r && r.m(e, null), (n = !0);
    },
    p(t, i) {
      const n = {};
      16 & i[0] && (n.color = t[4]),
        1280 & i[0] && (n.title = Bc(t[8], t[10])),
        o.$set(n),
        t[9]
          ? r && (r.d(1), (r = null))
          : r
          ? r.p(t, i)
          : ((r = Jp(t)), r.c(), r.m(e, null));
    },
    i(t) {
      n || (vr(o.$$.fragment, t), (n = !0));
    },
    o(t) {
      wr(o.$$.fragment, t), (n = !1);
    },
    d(t) {
      t && Mn(e), Fr(o), r && r.d();
    },
  };
}
function th(t) {
  let e, o, i, n, r, a, s, l, c, d, u, p, h;
  c = new Fd({
    props: {
      class: "PinturaHuePicker",
      knobStyle: "background-color:" + t[19],
      onchange: t[24],
      value: t[14],
      min: 0,
      max: 1,
      step: 0.01,
    },
  });
  let m = t[11] && eh(t);
  return {
    c() {
      (e = Tn("div")),
        (o = Tn("div")),
        (i = Tn("div")),
        (n = Tn("div")),
        (l = An()),
        Ir(c.$$.fragment),
        (d = An()),
        m && m.c(),
        zn(n, "role", "button"),
        zn(n, "aria-label", "Saturation slider"),
        zn(n, "class", "PinturaPickerKnob"),
        zn(n, "tabindex", "0"),
        zn(n, "style", (r = `background-color:${t[18]};`)),
        zn(i, "class", "PinturaPickerKnobController"),
        zn(i, "style", (a = `transform:translate(${t[21]}%,${t[22]}%)`)),
        zn(o, "class", "PinturaSaturationPicker"),
        zn(o, "style", (s = "background-color: " + t[19])),
        zn(e, "class", "PinturaPicker");
    },
    m(r, a) {
      Cn(r, e, a),
        kn(e, o),
        kn(o, i),
        kn(i, n),
        t[31](o),
        kn(e, l),
        Lr(c, e, null),
        kn(e, d),
        m && m.m(e, null),
        (u = !0),
        p ||
          ((h = [
            In(n, "nudge", t[27]),
            $n(Hl.call(null, n)),
            In(o, "pointerdown", t[26]),
          ]),
          (p = !0));
    },
    p(t, l) {
      (!u || (262144 & l[0] && r !== (r = `background-color:${t[18]};`))) &&
        zn(n, "style", r),
        (!u ||
          (6291456 & l[0] &&
            a !== (a = `transform:translate(${t[21]}%,${t[22]}%)`))) &&
          zn(i, "style", a),
        (!u || (524288 & l[0] && s !== (s = "background-color: " + t[19]))) &&
          zn(o, "style", s);
      const d = {};
      524288 & l[0] && (d.knobStyle = "background-color:" + t[19]),
        16384 & l[0] && (d.value = t[14]),
        c.$set(d),
        t[11]
          ? m
            ? (m.p(t, l), 2048 & l[0] && vr(m, 1))
            : ((m = eh(t)), m.c(), vr(m, 1), m.m(e, null))
          : m &&
            (br(),
            wr(m, 1, 1, () => {
              m = null;
            }),
            xr());
    },
    i(t) {
      u || (vr(c.$$.fragment, t), vr(m), (u = !0));
    },
    o(t) {
      wr(c.$$.fragment, t), wr(m), (u = !1);
    },
    d(o) {
      o && Mn(e), t[31](null), Fr(c), m && m.d(), (p = !1), rn(h);
    },
  };
}
function eh(t) {
  let e, o;
  return (
    (e = new Fd({
      props: {
        class: "PinturaOpacityPicker",
        knobStyle: "background-color: " + t[16],
        trackStyle: `background-image: linear-gradient(to right, ${t[17]}, ${t[18]})`,
        onchange: t[25],
        value: t[15],
        min: 0,
        max: 1,
        step: 0.01,
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        65536 & o[0] && (i.knobStyle = "background-color: " + t[16]),
          393216 & o[0] &&
            (i.trackStyle = `background-image: linear-gradient(to right, ${t[17]}, ${t[18]})`),
          32768 & o[0] && (i.value = t[15]),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function oh(t) {
  let e, o;
  return (
    (e = new dd({
      props: {
        label: "Presets",
        class: ll([
          "PinturaColorPresets",
          t[9] ? "PinturaColorPresetsGrid" : "PinturaColorPresetsList",
        ]),
        hideLabel: !1,
        name: t[1],
        value: t[4],
        optionGroupClass: "PinturaListOptionGroup",
        optionClass: "PinturaListOption",
        options: t[2].map(t[32]),
        selectedIndex: t[3],
        optionMapper: t[7],
        optionLabelClass: t[6],
        onchange: t[33],
        $$slots: {
          option: [
            rh,
            ({ option: t }) => ({ 44: t }),
            ({ option: t }) => [0, t ? 8192 : 0],
          ],
          group: [
            ih,
            ({ option: t }) => ({ 44: t }),
            ({ option: t }) => [0, t ? 8192 : 0],
          ],
        },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        512 & o[0] &&
          (i.class = ll([
            "PinturaColorPresets",
            t[9] ? "PinturaColorPresetsGrid" : "PinturaColorPresetsList",
          ])),
          2 & o[0] && (i.name = t[1]),
          16 & o[0] && (i.value = t[4]),
          1028 & o[0] && (i.options = t[2].map(t[32])),
          8 & o[0] && (i.selectedIndex = t[3]),
          128 & o[0] && (i.optionMapper = t[7]),
          64 & o[0] && (i.optionLabelClass = t[6]),
          (512 & o[0]) | (24576 & o[1]) && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function ih(t) {
  let e,
    o,
    i = t[44].label + "";
  return {
    c() {
      (e = Tn("span")), (o = Rn(i)), zn(e, "slot", "group");
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, e) {
      8192 & e[1] && i !== (i = t[44].label + "") && On(o, i);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function nh(t) {
  let e,
    o,
    i = t[44].label + "";
  return {
    c() {
      (e = Tn("span")), (o = Rn(i)), zn(e, "class", "PinturaButtonLabel");
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, e) {
      8192 & e[1] && i !== (i = t[44].label + "") && On(o, i);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function rh(t) {
  let e, o, i, n;
  o = new Kp({ props: { title: t[44].label, color: t[44].value } });
  let r = !t[9] && nh(t);
  return {
    c() {
      (e = Tn("span")),
        Ir(o.$$.fragment),
        (i = An()),
        r && r.c(),
        zn(e, "slot", "option");
    },
    m(t, a) {
      Cn(t, e, a), Lr(o, e, null), kn(e, i), r && r.m(e, null), (n = !0);
    },
    p(t, i) {
      const n = {};
      8192 & i[1] && (n.title = t[44].label),
        8192 & i[1] && (n.color = t[44].value),
        o.$set(n),
        t[9]
          ? r && (r.d(1), (r = null))
          : r
          ? r.p(t, i)
          : ((r = nh(t)), r.c(), r.m(e, null));
    },
    i(t) {
      n || (vr(o.$$.fragment, t), (n = !0));
    },
    o(t) {
      wr(o.$$.fragment, t), (n = !1);
    },
    d(t) {
      t && Mn(e), Fr(o), r && r.d();
    },
  };
}
function ah(t) {
  let e,
    o,
    i,
    n = t[13] && th(t),
    r = t[12] && oh(t);
  return {
    c() {
      (e = Tn("div")),
        n && n.c(),
        (o = An()),
        r && r.c(),
        zn(e, "slot", "details"),
        zn(e, "class", "PinturaColorPickerPanel");
    },
    m(t, a) {
      Cn(t, e, a), n && n.m(e, null), kn(e, o), r && r.m(e, null), (i = !0);
    },
    p(t, i) {
      t[13]
        ? n
          ? (n.p(t, i), 8192 & i[0] && vr(n, 1))
          : ((n = th(t)), n.c(), vr(n, 1), n.m(e, o))
        : n &&
          (br(),
          wr(n, 1, 1, () => {
            n = null;
          }),
          xr()),
        t[12]
          ? r
            ? (r.p(t, i), 4096 & i[0] && vr(r, 1))
            : ((r = oh(t)), r.c(), vr(r, 1), r.m(e, null))
          : r &&
            (br(),
            wr(r, 1, 1, () => {
              r = null;
            }),
            xr());
    },
    i(t) {
      i || (vr(n), vr(r), (i = !0));
    },
    o(t) {
      wr(n), wr(r), (i = !1);
    },
    d(t) {
      t && Mn(e), n && n.d(), r && r.d();
    },
  };
}
function sh(t) {
  let e, o;
  return (
    (e = new Ac({
      props: {
        buttonClass: ll(["PinturaColorPickerButton", t[5]]),
        $$slots: { details: [ah], label: [Qp] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        32 & o[0] && (i.buttonClass = ll(["PinturaColorPickerButton", t[5]])),
          (8388575 & o[0]) | (16384 & o[1]) &&
            (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function lh(t, e, o) {
  let i,
    n,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    h,
    { label: m } = e,
    { name: g } = e,
    { options: f = [] } = e,
    { selectedIndex: $ = -1 } = e,
    { value: y } = e,
    { buttonClass: b } = e,
    { optionLabelClass: x } = e,
    { optionMapper: v } = e,
    { onchange: w } = e,
    { title: k } = e,
    { hidePresetLabel: C = !0 } = e,
    { locale: M } = e,
    { enableOpacity: T = !0 } = e,
    { enablePresets: P = !0 } = e,
    { enablePicker: R = !0 } = e;
  const A = (t, e) => {
    if (((c = [t[0], t[1], t[2]]), e)) {
      let e = ((t, e, o) => {
        let i = Math.max(t, e, o),
          n = i - Math.min(t, e, o),
          r =
            n &&
            (i == t ? (e - o) / n : i == e ? 2 + (o - t) / n : 4 + (t - e) / n);
        return [(60 * (r < 0 ? r + 6 : r)) / 360, i && n / i, i];
      })(...c);
      o(14, (r = e[0])),
        o(29, (a = e[1])),
        o(30, (s = e[2])),
        o(15, (l = qe(t[3]) ? t[3] : 1));
    }
    o(16, (d = so(t))),
      o(17, (u = so([...c, 0]))),
      o(18, (p = so([...c, 1]))),
      o(19, (h = so(Yp(r, 1, 1))));
  };
  y && A(y, !0);
  const E = () => {
      const t = [...Yp(r, a, s), l];
      A(t), w(t);
    },
    I = (t) => {
      const e = 3 === t.length ? [...t, 1] : t;
      A(e, !0), w(e);
    },
    L = (t, e) => {
      const i = na(t.x / e.width, 0, 1),
        n = na(t.y / e.height, 0, 1);
      var r;
      (r = 1 - n),
        o(29, (a = i)),
        o(30, (s = r)),
        0 === l && o(15, (l = 1)),
        E();
    };
  let F, z, B, O;
  const D = (t) => {
      const e = rt(G(t), O);
      L(nt(q(B), e), z);
    },
    W = (t) => {
      (z = void 0),
        document.documentElement.removeEventListener("pointermove", D),
        document.documentElement.removeEventListener("pointerup", W);
    };
  return (
    (t.$$set = (t) => {
      "label" in t && o(0, (m = t.label)),
        "name" in t && o(1, (g = t.name)),
        "options" in t && o(2, (f = t.options)),
        "selectedIndex" in t && o(3, ($ = t.selectedIndex)),
        "value" in t && o(4, (y = t.value)),
        "buttonClass" in t && o(5, (b = t.buttonClass)),
        "optionLabelClass" in t && o(6, (x = t.optionLabelClass)),
        "optionMapper" in t && o(7, (v = t.optionMapper)),
        "onchange" in t && o(28, (w = t.onchange)),
        "title" in t && o(8, (k = t.title)),
        "hidePresetLabel" in t && o(9, (C = t.hidePresetLabel)),
        "locale" in t && o(10, (M = t.locale)),
        "enableOpacity" in t && o(11, (T = t.enableOpacity)),
        "enablePresets" in t && o(12, (P = t.enablePresets)),
        "enablePicker" in t && o(13, (R = t.enablePicker));
    }),
    (t.$$.update = () => {
      536870912 & t.$$.dirty[0] && o(21, (i = 100 * a)),
        1073741824 & t.$$.dirty[0] && o(22, (n = 100 - 100 * s));
    }),
    [
      m,
      g,
      f,
      $,
      y,
      b,
      x,
      v,
      k,
      C,
      M,
      T,
      P,
      R,
      r,
      l,
      d,
      u,
      p,
      h,
      F,
      i,
      n,
      I,
      (t) => {
        o(14, (r = t)), 0 === l && o(15, (l = 1)), E();
      },
      (t) => {
        o(15, (l = t)), E();
      },
      (t) => {
        t.stopPropagation(),
          (z = xt(F.offsetWidth, F.offsetHeight)),
          (B = ((t) => X(t.offsetX, t.offsetY))(t)),
          (O = G(t)),
          L(B, z),
          document.documentElement.addEventListener("pointermove", D),
          document.documentElement.addEventListener("pointerup", W);
      },
      (t) => {
        z = xt(F.offsetWidth, F.offsetHeight);
        const e = (i / 100) * z.width,
          o = (n / 100) * z.height;
        L({ x: e + t.detail.x, y: o + t.detail.y }, z);
      },
      w,
      a,
      s,
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (F = t), o(20, F);
        });
      },
      ([t, e]) => [t, S(e) ? e(M) : e],
      (t) => I(t.value),
    ]
  );
}
class ch extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        lh,
        sh,
        sn,
        {
          label: 0,
          name: 1,
          options: 2,
          selectedIndex: 3,
          value: 4,
          buttonClass: 5,
          optionLabelClass: 6,
          optionMapper: 7,
          onchange: 28,
          title: 8,
          hidePresetLabel: 9,
          locale: 10,
          enableOpacity: 11,
          enablePresets: 12,
          enablePicker: 13,
        },
        [-1, -1]
      );
  }
}
var dh = (t) => t.charAt(0).toUpperCase() + t.slice(1);
let uh = null;
var ph = () => {
  if (null === uh)
    if (c())
      try {
        uh = !1 === document.fonts.check("16px TestNonExistingFont");
      } catch (t) {
        uh = !1;
      }
    else uh = !1;
  return uh;
};
const hh = (t, e) => (o) => o[e ? `${e}${dh(t)}` : t],
  mh = (t) => [t, "" + t],
  gh = (t, e) => (o) => [t[o], hh(o, e)],
  fh = [1, 0.2549, 0.2118],
  $h = [1, 1, 1, 0],
  yh = {
    path: () => ({ points: [], disableErase: !1 }),
    eraser: () => ({ eraseRadius: 0 }),
    line: () => ({ x1: 0, y1: 0, x2: 0, y2: 0, disableErase: !1 }),
    rectangle: () => ({ x: 0, y: 0, width: 0, height: 0 }),
    ellipse: () => ({ x: 0, y: 0, rx: 0, ry: 0 }),
    text: () => ({ x: 0, y: 0, text: "Text" }),
  },
  bh = (t, e = {}, o = { position: "relative" }) => {
    if (!yh[t]) return;
    return [{ ...yh[t](), ...e }, o];
  },
  xh = (t) => ({
    sharpie: bh("path", {
      strokeWidth: "0.5%",
      strokeColor: [...fh],
      disableMove: !0,
    }),
    eraser: bh("eraser"),
    line: bh("line", { strokeColor: [...fh], strokeWidth: "0.5%" }),
    arrow: bh("line", {
      lineStart: "none",
      lineEnd: "arrow-solid",
      strokeColor: [...fh],
      strokeWidth: "0.5%",
    }),
    rectangle: bh("rectangle", {
      strokeColor: [...$h],
      backgroundColor: [...fh],
    }),
    ellipse: bh("ellipse", { strokeColor: [...$h], backgroundColor: [...fh] }),
    text: bh("text", { color: [...fh], fontSize: "2%" }),
    ...t,
  }),
  vh = (t, e, o) => [
    t,
    e || hh(t, "shapeLabelTool"),
    { icon: hh(t, "shapeIconTool"), ...o },
  ],
  wh = (
    t = [
      "sharpie",
      "eraser",
      "line",
      "arrow",
      "rectangle",
      "ellipse",
      "text",
      "preset",
    ]
  ) =>
    t
      .map((t) =>
        w(t)
          ? vh(t)
          : Array.isArray(t)
          ? b(t[1])
            ? vh(t[0], void 0, t[1])
            : vh(t[0], t[1], t[2])
          : void 0
      )
      .filter(Boolean),
  Sh = () => ({
    transparent: [1, 1, 1, 0],
    white: [1, 1, 1],
    silver: [0.8667, 0.8667, 0.8667],
    gray: [0.6667, 0.6667, 0.6667],
    black: [0, 0, 0],
    navy: [0, 0.1216, 0.2471],
    blue: [0, 0.4549, 0.851],
    aqua: [0.498, 0.8588, 1],
    teal: [0.2235, 0.8, 0.8],
    olive: [0.2392, 0.6, 0.4392],
    green: [0.1804, 0.8, 0.251],
    yellow: [1, 0.8627, 0],
    orange: [1, 0.5216, 0.1059],
    red: [1, 0.2549, 0.2118],
    maroon: [0.5216, 0.0784, 0.2941],
    fuchsia: [0.9412, 0.0706, 0.7451],
    purple: [0.6941, 0.051, 0.7882],
  }),
  kh = () => [16, 18, 20, 24, 30, 36, 48, 64, 72, 96, 128, 144],
  Ch = kh,
  Mh = () => ({
    extraSmall: "2%",
    small: "4%",
    mediumSmall: "8%",
    medium: "10%",
    mediumLarge: "15%",
    large: "20%",
    extraLarge: "25%",
  }),
  Th = () => ({
    extraSmall: "40%",
    small: "60%",
    mediumSmall: "100%",
    medium: "120%",
    mediumLarge: "140%",
    large: "180%",
    extraLarge: "220%",
  }),
  Ph = () => [1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 48, 64],
  Rh = () => ({
    extraSmall: "0.25%",
    small: "0.5%",
    mediumSmall: "1%",
    medium: "1.75%",
    mediumLarge: "2.5%",
    large: "3.5%",
    extraLarge: "5%",
  }),
  Ah = () => [
    "bar",
    "arrow",
    "arrowSolid",
    "circle",
    "circleSolid",
    "square",
    "squareSolid",
  ],
  Eh = () => [
    ["Helvetica, Arial, Verdana, 'Droid Sans', sans-serif", "Sans Serif"],
    ["'Arial Black', 'Avenir-Black', 'Arial Bold'", "Black"],
    ["'Arial Narrow', 'Futura-CondensedMedium'", "Narrow"],
    ["'Trebuchet MS'", "Humanist"],
    [
      "Georgia, 'Avenir-Black', 'Times New Roman', 'Droid Serif', serif",
      "Serif",
    ],
    ["Palatino", "Old-Style"],
    ["'Times New Roman', 'TimesNewRomanPSMT'", "Transitional"],
    ["Menlo, Monaco, 'Lucida Console', monospace", "Monospaced"],
    ["'Courier New', monospace", "Slab Serif"],
  ],
  Ih = () => ["left", "center", "right"],
  Lh = () => [
    ["normal", "bold"],
    ["italic", "normal"],
    ["italic", "bold"],
  ],
  Fh = (t) => Object.keys(t).map(gh(t, "shapeTitleColor")),
  zh = (t) => t.map(mh),
  Bh = (t) => Object.keys(t).map(gh(t, "labelSize")),
  Oh = (t) => t.map(mh),
  Dh = (t) => Object.keys(t).map(gh(t, "labelSize")),
  Wh = (t) => t.map(mh),
  _h = (t) => Object.keys(t).map(gh(t, "labelSize")),
  Zh = (t) => [...t],
  Vh = (t) =>
    t.map((t) => [
      t,
      (e) =>
        e[
          "shapeLabelFontStyle" +
            t
              .filter((t) => "normal" !== t)
              .map(dh)
              .join("")
        ],
    ]),
  jh = (t) =>
    t.map((t) => [
      iu(t),
      (e) => e["shapeTitleLineDecoration" + dh(t)],
      { icon: (e) => e["shapeIconLineDecoration" + dh(t)] },
    ]),
  Nh = (t) =>
    t.map((t) => [
      t,
      (e) => e["shapeTitleTextAlign" + dh(t)],
      { hideLabel: !0, icon: (e) => e["shapeIconTextAlign" + dh(t)] },
    ]),
  Hh = (t, e) => {
    const { defaultKey: o, defaultValue: i, defaultOptions: n } = e || {},
      r = [];
    return o && (r[0] = [i, (t) => t[o], { ...n }]), [...r, ...t];
  },
  Uh = (t) =>
    t
      .split(",")
      .map((t) => t.trim())
      .some((t) => document.fonts.check("16px " + t)),
  Xh = (t, e = {}) => [
    ch,
    { title: (t) => t.labelColor, options: Hh(t), ...e },
  ],
  Yh = (t = {}) => [Zd, { ...t }],
  Gh = (t, e = { defaultKey: "labelDefault" }) => [
    kd,
    {
      title: (t) => t.shapeTitleFontFamily,
      onload: ({ options: t = [] }) => {
        ph() &&
          t
            .map(([t]) => t)
            .filter(Boolean)
            .filter((t) => !Uh(t))
            .forEach((t) => {
              const e =
                "PinturaFontTest-" +
                t.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
              document.getElementById(e) ||
                document.body.append(
                  h("span", {
                    textContent: " ",
                    id: e,
                    class: "PinturaFontTest",
                    style: `font-family:${t};font-size:0;color:transparent;`,
                  })
                );
            });
      },
      ondestroy: () => {
        if (!ph()) return;
        document
          .querySelectorAll(".PinturaFontTest")
          .forEach((t) => t.remove());
      },
      optionLabelStyle: (t) => "font-family: " + t,
      options: Hh(t, e),
      optionFilter: (t) => {
        if (!ph()) return !0;
        const [e] = t;
        if (!e) return !0;
        return Uh(e);
      },
    },
  ],
  qh = (t, e = {}) => [
    ch,
    { title: (t) => t.shapeTitleBackgroundColor, options: Hh(t), ...e },
  ],
  Kh = (t, e = {}) => [
    ch,
    {
      title: (t) => t.shapeTitleStrokeColor,
      options: Hh(t),
      buttonClass: "PinturaColorPickerButtonStroke",
      onchange: (t, o) => {
        const i = o.strokeWidth;
        (qe(i) || w(i) ? parseFloat(i) : 0) > 0 ||
          (o.strokeWidth = (e && e.defaultStrokeWidth) || "0.5%");
      },
      ...e,
    },
  ],
  Jh = (t) => [
    kd,
    {
      title: (t) => t.shapeTitleStrokeWidth,
      options: (e) =>
        Je(e, "backgroundColor")
          ? Hh(t, { defaultKey: "shapeLabelStrokeNone" })
          : Hh(t),
      onchange: (t, e) => {
        if (!t) return;
        const o = e.strokeColor || [];
        if (o[3]) return;
        const i = [...o];
        (i[3] = 1), (e.strokeColor[3] = i);
      },
    },
  ],
  Qh = (t, e, o) => [
    kd,
    {
      title: (t) => t[e],
      options: Hh(t, {
        defaultKey: "labelNone",
        defaultOptions: {
          icon: '<g stroke="currentColor" stroke-linecap="round" stroke-width=".125em"><path d="M5,12 H14"/></g>',
        },
      }),
      optionIconStyle: o,
    },
  ],
  tm = (t) => Qh(t, "shapeTitleLineStart", "transform: scaleX(-1)"),
  em = (t) => Qh(t, "shapeTitleLineEnd"),
  om = (t) => [ch, { title: (t) => t.shapeTitleTextColor, options: Hh(t) }],
  im = (t) => [
    kd,
    {
      title: (t) => t.shapeTitleFontStyle,
      optionLabelStyle: (t) => t && `font-style:${t[0]};font-weight:${t[1]}`,
      options: Hh(t, { defaultKey: "shapeLabelFontStyleNormal" }),
    },
  ],
  nm = (t) => {
    let e;
    return (
      t.find(([t]) => "4%" === t) ||
        (e = { defaultKey: "labelAuto", defaultValue: "4%" }),
      [kd, { title: (t) => t.shapeTitleFontSize, options: Hh(t, e) }]
    );
  },
  rm = (t) => [dd, { title: (t) => t.shapeTitleTextAlign, options: Hh(t) }],
  am = (t) => {
    let e;
    return (
      t.find(([t]) => "120%" === t) ||
        (e = { defaultKey: "labelAuto", defaultValue: "120%" }),
      [kd, { title: (t) => t.shapeTitleLineHeight, options: Hh(t, e) }]
    );
  },
  sm = (t = {}) => {
    const {
      colorOptions: e = Fh(Sh()),
      lineEndStyleOptions: o = jh(Ah()),
      fontFamilyOptions: i = Zh(Eh()),
      fontStyleOptions: n = Vh(Lh()),
      textAlignOptions: r = Nh(Ih()),
    } = t;
    let {
      strokeWidthOptions: a = _h(Rh()),
      fontSizeOptions: s = Bh(Mh()),
      lineHeightOptions: l = Dh(Th()),
    } = t;
    [s, l, a] = [s, l, a].map((t) =>
      Array.isArray(t) && t.every(qe) ? t.map(mh) : t
    );
    const c = {
      defaultColor: e && Xh(e),
      defaultNumber: Yh(),
      defaultPercentage: Yh({
        getValue: (t) => parseFloat(t),
        setValue: (t) => t + "%",
        step: 0.05,
        label: (t, e, o) => Math.round((t / o) * 100) + "%",
        labelClass: "PinturaPercentageLabel",
      }),
      backgroundColor: e && qh(e),
      strokeColor: e && Kh(e),
      strokeWidth: a && Jh(a),
      lineStart: o && tm(o),
      lineEnd: o && em(o),
      color: e && om(e),
      fontFamily: i && Gh(i),
      fontStyle_fontWeight: n && im(n),
      fontSize: s && nm(s),
      lineHeight: l && am(l),
      textAlign: r && rm(r),
      frameColor: ["defaultColor"],
      frameSize: [
        "defaultPercentage",
        { min: 0.2, max: 10, title: (t) => t.labelSize },
      ],
      frameInset: [
        "defaultPercentage",
        { min: 0.5, max: 10, title: (t) => t.labelInset },
      ],
      frameOffset: [
        "defaultPercentage",
        { min: 0.5, max: 10, title: (t) => t.labelOffset },
      ],
      frameRadius: [
        "defaultPercentage",
        { min: 0.5, max: 10, title: (t) => t.labelRadius },
      ],
      frameAmount: [
        "defaultNumber",
        { min: 1, max: 5, step: 1, title: (t) => t.labelAmount },
      ],
    };
    return (
      Object.entries(t).forEach(([t, e]) => {
        c[t] || (c[t] = e);
      }),
      c
    );
  };
function lm(t) {
  let e, o, i, n;
  const r = t[3].default,
    a = un(r, t, t[2], null);
  return {
    c() {
      (e = Tn("div")), a && a.c(), zn(e, "class", t[0]);
    },
    m(r, s) {
      Cn(r, e, s),
        a && a.m(e, null),
        (o = !0),
        i || ((n = [In(e, "measure", t[1]), $n(bs.call(null, e))]), (i = !0));
    },
    p(t, [i]) {
      a && a.p && 4 & i && hn(a, r, t, t[2], i, null, null),
        (!o || 1 & i) && zn(e, "class", t[0]);
    },
    i(t) {
      o || (vr(a, t), (o = !0));
    },
    o(t) {
      wr(a, t), (o = !1);
    },
    d(t) {
      t && Mn(e), a && a.d(t), (i = !1), rn(n);
    },
  };
}
function cm(t, e, o) {
  let { $$slots: i = {}, $$scope: n } = e;
  const r = Kn();
  let { class: a = null } = e;
  return (
    (t.$$set = (t) => {
      "class" in t && o(0, (a = t.class)),
        "$$scope" in t && o(2, (n = t.$$scope));
    }),
    [a, ({ detail: t }) => r("measure", t), n, i]
  );
}
class dm extends Br {
  constructor(t) {
    super(), zr(this, t, cm, lm, sn, { class: 0 });
  }
}
const um = (t) => ({}),
  pm = (t) => ({}),
  hm = (t) => ({}),
  mm = (t) => ({}),
  gm = (t) => ({}),
  fm = (t) => ({});
function $m(t) {
  let e, o;
  const i = t[4].header,
    n = un(i, t, t[3], fm);
  return {
    c() {
      (e = Tn("div")), n && n.c(), zn(e, "class", "PinturaUtilHeader");
    },
    m(t, i) {
      Cn(t, e, i), n && n.m(e, null), (o = !0);
    },
    p(t, e) {
      n && n.p && 8 & e && hn(n, i, t, t[3], e, gm, fm);
    },
    i(t) {
      o || (vr(n, t), (o = !0));
    },
    o(t) {
      wr(n, t), (o = !1);
    },
    d(t) {
      t && Mn(e), n && n.d(t);
    },
  };
}
function ym(t) {
  let e, o;
  const i = t[4].footer,
    n = un(i, t, t[3], pm);
  return {
    c() {
      (e = Tn("div")), n && n.c(), zn(e, "class", "PinturaUtilFooter");
    },
    m(t, i) {
      Cn(t, e, i), n && n.m(e, null), (o = !0);
    },
    p(t, e) {
      n && n.p && 8 & e && hn(n, i, t, t[3], e, um, pm);
    },
    i(t) {
      o || (vr(n, t), (o = !0));
    },
    o(t) {
      wr(n, t), (o = !1);
    },
    d(t) {
      t && Mn(e), n && n.d(t);
    },
  };
}
function bm(t) {
  let e,
    o,
    i,
    n,
    r,
    a,
    s = t[1] && $m(t);
  const l = t[4].main,
    c = un(l, t, t[3], mm),
    d =
      c ||
      (function (t) {
        let e, o;
        return (
          (e = new dm({ props: { class: "PinturaStage" } })),
          e.$on("measure", t[5]),
          {
            c() {
              Ir(e.$$.fragment);
            },
            m(t, i) {
              Lr(e, t, i), (o = !0);
            },
            p: Qi,
            i(t) {
              o || (vr(e.$$.fragment, t), (o = !0));
            },
            o(t) {
              wr(e.$$.fragment, t), (o = !1);
            },
            d(t) {
              Fr(e, t);
            },
          }
        );
      })(t);
  let u = t[2] && ym(t);
  return {
    c() {
      s && s.c(),
        (e = An()),
        (o = Tn("div")),
        d && d.c(),
        (i = An()),
        u && u.c(),
        (n = An()),
        (r = En()),
        zn(o, "class", "PinturaUtilMain");
    },
    m(l, c) {
      s && s.m(l, c),
        Cn(l, e, c),
        Cn(l, o, c),
        d && d.m(o, null),
        t[6](o),
        Cn(l, i, c),
        u && u.m(l, c),
        Cn(l, n, c),
        Cn(l, r, c),
        (a = !0);
    },
    p(t, [o]) {
      t[1]
        ? s
          ? (s.p(t, o), 2 & o && vr(s, 1))
          : ((s = $m(t)), s.c(), vr(s, 1), s.m(e.parentNode, e))
        : s &&
          (br(),
          wr(s, 1, 1, () => {
            s = null;
          }),
          xr()),
        c && c.p && 8 & o && hn(c, l, t, t[3], o, hm, mm),
        t[2]
          ? u
            ? (u.p(t, o), 4 & o && vr(u, 1))
            : ((u = ym(t)), u.c(), vr(u, 1), u.m(n.parentNode, n))
          : u &&
            (br(),
            wr(u, 1, 1, () => {
              u = null;
            }),
            xr());
    },
    i(t) {
      a || (vr(s), vr(d, t), vr(u), vr(false), (a = !0));
    },
    o(t) {
      wr(s), wr(d, t), wr(u), wr(false), (a = !1);
    },
    d(a) {
      s && s.d(a),
        a && Mn(e),
        a && Mn(o),
        d && d.d(a),
        t[6](null),
        a && Mn(i),
        u && u.d(a),
        a && Mn(n),
        a && Mn(r);
    },
  };
}
function xm(t, e, o) {
  let { $$slots: i = {}, $$scope: n } = e,
    { hasHeader: r = !!e.$$slots.header } = e,
    { hasFooter: a = !!e.$$slots.footer } = e,
    { root: s } = e;
  return (
    (t.$$set = (t) => {
      o(7, (e = en(en({}, e), mn(t)))),
        "hasHeader" in t && o(1, (r = t.hasHeader)),
        "hasFooter" in t && o(2, (a = t.hasFooter)),
        "root" in t && o(0, (s = t.root)),
        "$$scope" in t && o(3, (n = t.$$scope));
    }),
    (e = mn(e)),
    [
      s,
      r,
      a,
      n,
      i,
      function (e) {
        tr(t, e);
      },
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (s = t), o(0, s);
        });
      },
    ]
  );
}
class vm extends Br {
  constructor(t) {
    super(), zr(this, t, xm, bm, sn, { hasHeader: 1, hasFooter: 2, root: 0 });
  }
}
function wm(t) {
  let e, o;
  return {
    c() {
      (e = Tn("div")),
        zn(e, "class", "PinturaRangeInputMeter"),
        zn(
          e,
          "style",
          (o = `transform: translateX(${t[8].x - t[9].x}px) translateY(${
            t[8].y - t[9].y
          }px)`)
        );
    },
    m(o, i) {
      Cn(o, e, i), (e.innerHTML = t[6]);
    },
    p(t, i) {
      64 & i[0] && (e.innerHTML = t[6]),
        256 & i[0] &&
          o !==
            (o = `transform: translateX(${t[8].x - t[9].x}px) translateY(${
              t[8].y - t[9].y
            }px)`) &&
          zn(e, "style", o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Sm(t) {
  let e,
    o,
    i,
    n,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p = t[8] && wm(t);
  return {
    c() {
      (e = Tn("div")),
        (o = Tn("span")),
        (i = Rn(t[3])),
        (n = An()),
        (r = Tn("button")),
        (a = Rn(t[1])),
        (l = An()),
        (c = Tn("div")),
        p && p.c(),
        zn(o, "class", "PinturaRangeInputValue"),
        zn(r, "class", "PinturaRangeInputReset"),
        zn(r, "type", "button"),
        (r.disabled = s = t[0] === t[2]),
        zn(c, "class", "PinturaRangeInputInner"),
        zn(c, "style", t[7]),
        zn(c, "data-value-limited", t[5]),
        zn(e, "class", "PinturaRangeInput"),
        zn(e, "tabindex", "0");
    },
    m(s, h) {
      Cn(s, e, h),
        kn(e, o),
        kn(o, i),
        kn(e, n),
        kn(e, r),
        kn(r, a),
        kn(e, l),
        kn(e, c),
        p && p.m(c, null),
        d ||
          ((u = [
            In(r, "click", t[14]),
            In(c, "interactionstart", t[10]),
            In(c, "interactionupdate", t[12]),
            In(c, "interactionend", t[13]),
            In(c, "interactionrelease", t[11]),
            $n(Nl.call(null, c, { inertia: !0 })),
            In(c, "measure", t[32]),
            $n(bs.call(null, c)),
            In(e, "wheel", t[16], { passive: !1 }),
            In(e, "nudge", t[17]),
            $n(Hl.call(null, e, { direction: "horizontal" })),
          ]),
          (d = !0));
    },
    p(t, e) {
      8 & e[0] && On(i, t[3]),
        2 & e[0] && On(a, t[1]),
        5 & e[0] && s !== (s = t[0] === t[2]) && (r.disabled = s),
        t[8]
          ? p
            ? p.p(t, e)
            : ((p = wm(t)), p.c(), p.m(c, null))
          : p && (p.d(1), (p = null)),
        128 & e[0] && zn(c, "style", t[7]),
        32 & e[0] && zn(c, "data-value-limited", t[5]);
    },
    i: Qi,
    o: Qi,
    d(t) {
      t && Mn(e), p && p.d(), (d = !1), rn(u);
    },
  };
}
function km(t, e, o) {
  let i,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    { labelReset: p = "Reset" } = e,
    { direction: h = "x" } = e,
    { min: m = 0 } = e,
    { max: g = 1 } = e,
    { base: f = m } = e,
    { value: $ = 0 } = e,
    { valueLabel: y = 0 } = e,
    { valueMin: b } = e,
    { valueMax: x } = e,
    { oninputstart: v = n } = e,
    { oninputmove: w = n } = e,
    { oninputend: S = n } = e,
    { elasticity: k = 0 } = e;
  const C = (t, e, o) => Math.ceil((t - o) / e) * e + o;
  let M, T, P;
  const R = { x: 2, y: 0 },
    A = (t, e, o) => `M ${t - o} ${e} a ${o} ${o} 0 1 0 0 -1`;
  let E,
    I = void 0,
    L = !1,
    F = { snap: !1, elastic: !1 };
  const z = (t, e, o) => {
      const i = t[h] + e[h],
        n = na(i, E[1][h], E[0][h]),
        r = k ? n + Ul(i - n, k) : n,
        a = o.elastic ? r : n,
        s = X(0, 0);
      return (s[h] = a), B.set(s, { hard: o.snap }), na(D(s, h), m, g);
    },
    B = ss();
  dn(t, B, (t) => o(8, (u = t)));
  const O = (t, e) => {
      const o = 0.5 * (M[e] - s[e]) - (Rd(t, m, g) * s[e] - 0.5 * s[e]);
      return { x: "x" === e ? o : 0, y: "y" === e ? o : 0 };
    },
    D = (t, e) => {
      const o = -(t[e] - 0.5 * M[e]) / s[e];
      return m + o * i;
    },
    W = B.subscribe((t) => {
      t && I && w(na(D(t, h), m, g));
    }),
    _ = (t) => {
      const e = [O(null != b ? b : m, h), O(null != x ? x : g, h)],
        o = { x: "x" === h ? u.x + t : 0, y: "y" === h ? u.y + t : 0 },
        i = na(o[h], e[1][h], e[0][h]),
        n = { ...u, [h]: i };
      fn(B, (u = n), u);
      const r = na(D(n, h), m, g);
      v(), w(r), S(r);
    };
  qn(() => {
    W();
  });
  return (
    (t.$$set = (t) => {
      "labelReset" in t && o(1, (p = t.labelReset)),
        "direction" in t && o(18, (h = t.direction)),
        "min" in t && o(19, (m = t.min)),
        "max" in t && o(20, (g = t.max)),
        "base" in t && o(2, (f = t.base)),
        "value" in t && o(0, ($ = t.value)),
        "valueLabel" in t && o(3, (y = t.valueLabel)),
        "valueMin" in t && o(21, (b = t.valueMin)),
        "valueMax" in t && o(22, (x = t.valueMax)),
        "oninputstart" in t && o(23, (v = t.oninputstart)),
        "oninputmove" in t && o(24, (w = t.oninputmove)),
        "oninputend" in t && o(25, (S = t.oninputend)),
        "elasticity" in t && o(26, (k = t.elasticity));
    }),
    (t.$$.update = () => {
      if (
        (1572864 & t.$$.dirty[0] && o(28, (i = g - m)),
        2621440 & t.$$.dirty[0] && o(29, (r = null != b ? Math.max(b, m) : m)),
        5242880 & t.$$.dirty[0] && o(30, (a = null != x ? Math.min(x, g) : g)),
        1572868 & t.$$.dirty[0] && o(31, (l = Rd(f, m, g))),
        (16 & t.$$.dirty[0]) | (1 & t.$$.dirty[1]) && M)
      ) {
        const t = 0.5 * M.y;
        let e,
          i = 40 * l,
          n = "",
          r = M.y,
          a = "";
        for (let o = 0; o <= 40; o++) {
          const r = R.x + 10 * o,
            s = t;
          (n += A(r, s, o % 5 == 0 ? 2 : 0.75) + " "),
            (e = r + R.x),
            o === i && (a = `<path d="M${r} ${s - 4} l2 3 l-2 -1 l-2 1 z"/>`);
        }
        o(
          6,
          (T = `<svg width="${e}" height="${r}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e} ${r}" aria-hidden="true" focusable="false">\n        ${a}\n        <rect rx="4" ry="4" y="${
            t - 4
          }"" height="8"/>\n        <path fill-rule="evenodd" d="${n.trim()}"/></svg>`)
        ),
          o(27, (P = { x: e - 2 * R.x, y: r }));
      }
      134217744 & t.$$.dirty[0] && (s = M && P),
        1612185600 & t.$$.dirty[0] && o(5, (c = r !== m || a !== g)),
        1610612768 & t.$$.dirty[0] &&
          o(
            7,
            (d = c
              ? (function (t, e) {
                  const o = 1 / 40,
                    i = Rd(t, m, g),
                    n = Rd(e, m, g);
                  return `--range-mask-from:${
                    100 * Eo(C(i, o, 0) - 0.0125)
                  }%;--range-mask-to:${100 * Eo(C(n, o, 0) - 0.0125)}%`;
                })(r, a)
              : "")
          ),
        268697617 & t.$$.dirty[0] && i && M && M.x && M.y && B.set(O($, h));
    }),
    [
      $,
      p,
      f,
      y,
      M,
      c,
      T,
      d,
      u,
      R,
      () => {
        (L = !1),
          (I = cn(B)),
          (E = [O(null != b ? b : m, h), O(null != x ? x : g, h)]),
          v();
      },
      () => {
        L = !0;
      },
      ({ detail: t }) => {
        (F.snap = !L), (F.elastic = !L), z(I, t.translation, F);
      },
      ({ detail: t }) => {
        (F.snap = !1), (F.elastic = !1);
        const e = z(I, t.translation, F);
        if (((I = void 0), (E = void 0), Math.abs(e - f) < 0.01)) return S(f);
        S(e);
      },
      () => {
        o(0, ($ = na(f, r, a))), v(), S($);
      },
      B,
      (t) => {
        t.preventDefault(), t.stopPropagation();
        const e = 8 * Gl(t);
        _(e);
      },
      ({ detail: t }) => {
        _(8 * t[h]);
      },
      h,
      m,
      g,
      b,
      x,
      v,
      w,
      S,
      k,
      P,
      i,
      r,
      a,
      l,
      (t) => o(4, (M = ((t) => X(t.width, t.height))(t.detail))),
    ]
  );
}
class Cm extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        km,
        Sm,
        sn,
        {
          labelReset: 1,
          direction: 18,
          min: 19,
          max: 20,
          base: 2,
          value: 0,
          valueLabel: 3,
          valueMin: 21,
          valueMax: 22,
          oninputstart: 23,
          oninputmove: 24,
          oninputend: 25,
          elasticity: 26,
        },
        [-1, -1]
      );
  }
}
function Mm(t) {
  let e, o, i, n, r;
  const a = t[7].default,
    s = un(a, t, t[6], null);
  return {
    c() {
      (e = Tn("div")),
        (o = Tn("div")),
        s && s.c(),
        zn(o, "class", "PinturaToolbarInner"),
        zn(e, "class", "PinturaToolbar"),
        zn(e, "data-layout", t[1]),
        zn(e, "data-overflow", t[0]);
    },
    m(a, l) {
      Cn(a, e, l),
        kn(e, o),
        s && s.m(o, null),
        (i = !0),
        n ||
          ((r = [
            In(o, "measure", t[3]),
            $n(bs.call(null, o)),
            In(e, "measure", t[2]),
            $n(bs.call(null, e)),
          ]),
          (n = !0));
    },
    p(t, [o]) {
      s && s.p && 64 & o && hn(s, a, t, t[6], o, null, null),
        (!i || 2 & o) && zn(e, "data-layout", t[1]),
        (!i || 1 & o) && zn(e, "data-overflow", t[0]);
    },
    i(t) {
      i || (vr(s, t), (i = !0));
    },
    o(t) {
      wr(s, t), (i = !1);
    },
    d(t) {
      t && Mn(e), s && s.d(t), (n = !1), rn(r);
    },
  };
}
function Tm(t, e, o) {
  let i,
    n,
    { $$slots: r = {}, $$scope: a } = e,
    s = 0,
    l = 0,
    c = 0;
  const d = () => {
    o(0, (n = "compact" === i && s > c ? "overflow" : void 0));
  };
  return (
    (t.$$set = (t) => {
      "$$scope" in t && o(6, (a = t.$$scope));
    }),
    (t.$$.update = () => {
      48 & t.$$.dirty && o(1, (i = l > c ? "compact" : "default"));
    }),
    [
      n,
      i,
      ({ detail: t }) => {
        const { width: e } = t;
        o(5, (c = e)), d();
      },
      ({ detail: t }) => {
        const { width: e } = t;
        e > l && o(4, (l = e)), (s = e), n || d();
      },
      l,
      c,
      a,
      r,
    ]
  );
}
class Pm extends Br {
  constructor(t) {
    super(), zr(this, t, Tm, Mm, sn, {});
  }
}
const Rm = {
    Top: "t",
    Right: "r",
    Bottom: "b",
    Left: "l",
    TopLeft: "tl",
    TopRight: "tr",
    BottomRight: "br",
    BottomLeft: "bl",
  },
  {
    Top: Am,
    Right: Em,
    Bottom: Im,
    Left: Lm,
    TopLeft: Fm,
    TopRight: zm,
    BottomRight: Bm,
    BottomLeft: Om,
  } = Rm;
var Dm = {
  [Am]: (t) => ({ x: t.x, y: t.y }),
  [zm]: (t) => ({ x: t.x + t.width, y: t.y }),
  [Em]: (t) => ({ x: t.x + t.width, y: t.y }),
  [Bm]: (t) => ({ x: t.x + t.width, y: t.y + t.height }),
  [Im]: (t) => ({ x: t.x, y: t.y + t.height }),
  [Om]: (t) => ({ x: t.x, y: t.y + t.height }),
  [Lm]: (t) => ({ x: t.x, y: t.y }),
  [Fm]: (t) => ({ x: t.x, y: t.y }),
};
function Wm(t, e, o) {
  const i = t.slice();
  return (
    (i[12] = e[o].key),
    (i[13] = e[o].translate),
    (i[14] = e[o].scale),
    (i[15] = e[o].type),
    (i[16] = e[o].opacity),
    i
  );
}
function _m(t, e) {
  let o, i, n, r, a, s, l, c;
  return {
    key: t,
    first: null,
    c() {
      (o = Tn("div")),
        zn(o, "role", "button"),
        zn(o, "aria-label", (i = `Drag ${e[15]} ${e[12]}`)),
        zn(o, "tabindex", (n = "edge" === e[15] ? -1 : 0)),
        zn(o, "class", "PinturaRectManipulator"),
        zn(o, "data-direction", (r = e[12])),
        zn(o, "data-shape", (a = "" + ("edge" === e[15] ? "edge" : "" + e[0]))),
        zn(
          o,
          "style",
          (s = `transform: translate3d(${e[13].x}px, ${e[13].y}px, 0) scale(${e[14].x}, ${e[14].y}); opacity: ${e[16]}`)
        ),
        (this.first = o);
    },
    m(t, i) {
      Cn(t, o, i),
        l ||
          ((c = [
            In(o, "nudge", function () {
              an(e[5](e[12])) && e[5](e[12]).apply(this, arguments);
            }),
            $n(Hl.call(null, o)),
            In(o, "interactionstart", function () {
              an(e[4]("resizestart", e[12])) &&
                e[4]("resizestart", e[12]).apply(this, arguments);
            }),
            In(o, "interactionupdate", function () {
              an(e[4]("resizemove", e[12])) &&
                e[4]("resizemove", e[12]).apply(this, arguments);
            }),
            In(o, "interactionend", function () {
              an(e[4]("resizeend", e[12])) &&
                e[4]("resizeend", e[12]).apply(this, arguments);
            }),
            $n(Nl.call(null, o)),
          ]),
          (l = !0));
    },
    p(t, l) {
      (e = t),
        2 & l && i !== (i = `Drag ${e[15]} ${e[12]}`) && zn(o, "aria-label", i),
        2 & l && n !== (n = "edge" === e[15] ? -1 : 0) && zn(o, "tabindex", n),
        2 & l && r !== (r = e[12]) && zn(o, "data-direction", r),
        3 & l &&
          a !== (a = "" + ("edge" === e[15] ? "edge" : "" + e[0])) &&
          zn(o, "data-shape", a),
        2 & l &&
          s !==
            (s = `transform: translate3d(${e[13].x}px, ${e[13].y}px, 0) scale(${e[14].x}, ${e[14].y}); opacity: ${e[16]}`) &&
          zn(o, "style", s);
    },
    d(t) {
      t && Mn(o), (l = !1), rn(c);
    },
  };
}
function Zm(t) {
  let e,
    o = [],
    i = new Map(),
    n = t[1];
  const r = (t) => t[12];
  for (let e = 0; e < n.length; e += 1) {
    let a = Wm(t, n, e),
      s = r(a);
    i.set(s, (o[e] = _m(s, a)));
  }
  return {
    c() {
      for (let t = 0; t < o.length; t += 1) o[t].c();
      e = En();
    },
    m(t, i) {
      for (let e = 0; e < o.length; e += 1) o[e].m(t, i);
      Cn(t, e, i);
    },
    p(t, [a]) {
      51 & a &&
        ((n = t[1]),
        (o = Pr(o, a, r, 1, t, n, i, e.parentNode, Mr, _m, e, Wm)));
    },
    i: Qi,
    o: Qi,
    d(t) {
      for (let e = 0; e < o.length; e += 1) o[e].d(t);
      t && Mn(e);
    },
  };
}
function Vm(t, e, o) {
  let i,
    n,
    r,
    { rect: a = null } = e,
    { visible: s = !1 } = e,
    { style: l } = e;
  const c = ss(void 0, { precision: 1e-4, stiffness: 0.2, damping: 0.4 });
  dn(t, c, (t) => o(8, (n = t)));
  const d = ss(0, { precision: 0.001 });
  let u;
  dn(t, d, (t) => o(9, (r = t)));
  const p = Kn();
  return (
    (t.$$set = (t) => {
      "rect" in t && o(6, (a = t.rect)),
        "visible" in t && o(7, (s = t.visible)),
        "style" in t && o(0, (l = t.style));
    }),
    (t.$$.update = () => {
      128 & t.$$.dirty && c.set(s ? 1 : 0.5),
        128 & t.$$.dirty && d.set(s ? 1 : 0),
        832 & t.$$.dirty &&
          o(
            1,
            (i = Object.keys(Rm).map((t, e) => {
              const o = Rm[t],
                i = Dm[o](a),
                s = 1 === o.length ? "edge" : "corner",
                l = "corner" === s;
              return {
                key: o,
                type: s,
                scale: {
                  x: /^(t|b)$/.test(o) ? a.width : l ? na(n, 0.5, 1.25) : 1,
                  y: /^(r|l)$/.test(o) ? a.height : l ? na(n, 0.5, 1.25) : 1,
                },
                translate: { x: i.x, y: i.y },
                opacity: r,
              };
            }))
          );
    }),
    [
      l,
      i,
      c,
      d,
      (t, e) =>
        ({ detail: o }) => {
          (u && e !== u) ||
            ("resizestart" !== t && void 0 === u) ||
            ("resizestart" === t && (u = e),
            "resizeend" === t && (u = void 0),
            p(t, { direction: e, translation: o && o.translation }));
        },
      (t) =>
        ({ detail: e }) => {
          p("resizestart", { direction: t, translation: { x: 0, y: 0 } }),
            p("resizemove", { direction: t, translation: e }),
            p("resizeend", { direction: t, translation: { x: 0, y: 0 } });
        },
      a,
      s,
      n,
      r,
    ]
  );
}
class jm extends Br {
  constructor(t) {
    super(), zr(this, t, Vm, Zm, sn, { rect: 6, visible: 7, style: 0 });
  }
}
var Nm = (t) => {
    function e(e, o) {
      t.dispatchEvent(new CustomEvent(e, { detail: o }));
    }
    const o = (o) => {
        o.preventDefault(),
          t.addEventListener("gesturechange", i),
          t.addEventListener("gestureend", n),
          e("gesturedown");
      },
      i = (t) => {
        t.preventDefault(), e("gestureupdate", t.scale);
      },
      n = (t) => {
        e("gestureup", t.scale), t.preventDefault(), r();
      },
      r = () => {
        t.removeEventListener("gesturechange", i),
          t.removeEventListener("gestureend", n);
      };
    return (
      t.addEventListener("gesturestart", o),
      {
        destroy: () => {
          r(), t.removeEventListener("gesturestart", o);
        },
      }
    );
  },
  Hm = (t) => X(t.clientX, t.clientY),
  Um = (t, e, o) => {
    const i = Hm(t);
    return rt(rt(i, e), o);
  },
  Xm = {
    [Am]: Im,
    [Em]: Lm,
    [Im]: Am,
    [Lm]: Em,
    [Fm]: Bm,
    [zm]: Om,
    [Bm]: Fm,
    [Om]: zm,
  },
  Ym = {
    [Am]: [0.5, 0],
    [Em]: [1, 0.5],
    [Im]: [0.5, 1],
    [Lm]: [0, 0.5],
    [Fm]: [0, 0],
    [zm]: [1, 0],
    [Bm]: [1, 1],
    [Om]: [0, 1],
  },
  Gm = (t) => {
    const e = t === Lm || t === Em,
      o = t === Am || t === Im;
    return [
      t === Em || t === zm || t === Bm,
      t === Lm || t === Om || t === Fm,
      t === Am || t === zm || t === Fm,
      t === Im || t === Bm || t === Om,
      e,
      o,
      e || o,
    ];
  };
const qm = (t, e, o, i) => {
  const { aspectRatio: n, minSize: r, maxSize: a } = i,
    s = e === Em || e === zm || e === Bm,
    l = e === Lm || e === Om || e === Fm,
    c = e === Am || e === zm || e === Fm,
    d = e === Im || e === Bm || e === Om,
    u = e === Lm || e === Em,
    p = e === Am || e === Im,
    h = It(o);
  s ? ((h.x = t.x), (h.width -= t.x)) : l && (h.width = t.x),
    d ? ((h.y = t.y), (h.height -= t.y)) : c && (h.height = t.y);
  const m = ((t, e) => Et(0, 0, t, e))(
    Math.min(h.width, a.width),
    Math.min(h.height, a.height)
  );
  if (n)
    if (u) {
      const e = Math.min(t.y, o.height - t.y);
      m.height = Math.min(2 * e, m.height);
    } else if (p) {
      const e = Math.min(t.x, o.width - t.x);
      m.width = Math.min(2 * e, m.width);
    }
  const g = n ? $t(Qt(m, n)) : m,
    f = n ? $t(Jt(Ft(r), n)) : r;
  let $, y, b, x;
  s ? ($ = t.x) : l && (y = t.x),
    d ? (b = t.y) : c && (x = t.y),
    s ? (y = $ + f.width) : l && ($ = y - f.width),
    d ? (x = b + f.height) : c && (b = x - f.height),
    u
      ? ((b = t.y - 0.5 * f.height), (x = t.y + 0.5 * f.height))
      : p && (($ = t.x - 0.5 * f.width), (y = t.x + 0.5 * f.width));
  const v = Bt([X($, b), X(y, x)]);
  s ? (y = $ + g.width) : l && ($ = y - g.width),
    d ? (x = b + g.height) : c && (b = x - g.height),
    u
      ? ((b = t.y - 0.5 * g.height), (x = t.y + 0.5 * g.height))
      : p && (($ = t.x - 0.5 * g.width), (y = t.x + 0.5 * g.width));
  return { inner: v, outer: Bt([X($, b), X(y, x)]) };
};
var Km = (t, e, o = {}) => {
    const { target: i, translate: n } = e,
      { aspectRatio: r } = o,
      a = Ym[Xm[i]],
      s = nt(It(t), X(a[0] * t.width, a[1] * t.height)),
      l = Ym[i],
      c = nt(It(t), X(l[0] * t.width, l[1] * t.height)),
      [d, u, p, h, m, g, f] = Gm(i);
    let $ = n.x,
      y = n.y;
    m ? (y = 0) : g && ($ = 0);
    let [b, x, v, w] = te(t);
    if (
      (d ? (w = s.x) : u && (x = s.x),
      h ? (b = s.y) : p && (v = s.y),
      d ? (x = c.x + $) : u && (w = c.x + $),
      h ? (v = c.y + y) : p && (b = c.y + y),
      r)
    )
      if (f) {
        let t = x - w,
          e = v - b;
        m
          ? ((e = t / r), (b = s.y - 0.5 * e), (v = s.y + 0.5 * e))
          : g && ((t = e * r), (w = s.x - 0.5 * t), (x = s.x + 0.5 * t));
      } else {
        const t = X(c.x + $ - s.x, c.y + y - s.y);
        i === zm
          ? ((t.x = Math.max(0, t.x)), (t.y = Math.min(0, t.y)))
          : i === Bm
          ? ((t.x = Math.max(0, t.x)), (t.y = Math.max(0, t.y)))
          : i === Om
          ? ((t.x = Math.min(0, t.x)), (t.y = Math.max(0, t.y)))
          : i === Fm && ((t.x = Math.min(0, t.x)), (t.y = Math.min(0, t.y)));
        const e = Q(t),
          o = X(r, 1),
          n = at(tt(o), e);
        i === zm
          ? ((x = s.x + n.x), (b = s.y - n.y))
          : i === Bm
          ? ((x = s.x + n.x), (v = s.y + n.y))
          : i === Om
          ? ((w = s.x - n.x), (v = s.y + n.y))
          : i === Fm && ((w = s.x - n.x), (b = s.y - n.y));
      }
    return Wt(w, b, x - w, v - b);
  },
  Jm = (t) => (180 * t) / Math.PI;
function Qm(t) {
  let e, o, i;
  return (
    (o = new Cm({
      props: {
        elasticity: t[5],
        min: t[7],
        max: t[8],
        value: t[12],
        valueMin: t[0],
        valueMax: t[1],
        labelReset: t[6],
        base: t[11],
        valueLabel: Math.round(Jm(t[12])) + "Â°",
        oninputstart: t[2],
        oninputmove: t[14],
        oninputend: t[15],
      },
    })),
    {
      c() {
        (e = Tn("div")),
          Ir(o.$$.fragment),
          zn(e, "class", "PinturaImageRotator");
      },
      m(t, n) {
        Cn(t, e, n), Lr(o, e, null), (i = !0);
      },
      p(t, [e]) {
        const i = {};
        32 & e && (i.elasticity = t[5]),
          128 & e && (i.min = t[7]),
          256 & e && (i.max = t[8]),
          4096 & e && (i.value = t[12]),
          1 & e && (i.valueMin = t[0]),
          2 & e && (i.valueMax = t[1]),
          64 & e && (i.labelReset = t[6]),
          2048 & e && (i.base = t[11]),
          4096 & e && (i.valueLabel = Math.round(Jm(t[12])) + "Â°"),
          4 & e && (i.oninputstart = t[2]),
          1544 & e && (i.oninputmove = t[14]),
          1552 & e && (i.oninputend = t[15]),
          o.$set(i);
      },
      i(t) {
        i || (vr(o.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && Mn(e), Fr(o);
      },
    }
  );
}
function tg(t, e, o) {
  let i, r, a, s, l, c;
  const d = Math.PI / 2,
    u = Math.PI / 4;
  let { rotation: p } = e,
    { valueMin: h } = e,
    { valueMax: m } = e,
    { oninputstart: g = n } = e,
    { oninputmove: f = n } = e,
    { oninputend: $ = n } = e,
    { elasticity: y = 0 } = e,
    { labelReset: b } = e;
  return (
    (t.$$set = (t) => {
      "rotation" in t && o(13, (p = t.rotation)),
        "valueMin" in t && o(0, (h = t.valueMin)),
        "valueMax" in t && o(1, (m = t.valueMax)),
        "oninputstart" in t && o(2, (g = t.oninputstart)),
        "oninputmove" in t && o(3, (f = t.oninputmove)),
        "oninputend" in t && o(4, ($ = t.oninputend)),
        "elasticity" in t && o(5, (y = t.elasticity)),
        "labelReset" in t && o(6, (b = t.labelReset));
    }),
    (t.$$.update = () => {
      384 & t.$$.dirty && o(11, (a = i + 0.5 * (r - i))),
        8192 & t.$$.dirty && o(9, (s = Math.sign(p))),
        8192 & t.$$.dirty && o(10, (l = Math.round(Math.abs(p) / d) * d)),
        9728 & t.$$.dirty && o(12, (c = p - s * l));
    }),
    o(7, (i = 1e-9 - u)),
    o(8, (r = u - 1e-9)),
    [
      h,
      m,
      g,
      f,
      $,
      y,
      b,
      i,
      r,
      s,
      l,
      a,
      c,
      p,
      (t) => f(s * l + t),
      (t) => $(s * l + t),
    ]
  );
}
class eg extends Br {
  constructor(t) {
    super(),
      zr(this, t, tg, Qm, sn, {
        rotation: 13,
        valueMin: 0,
        valueMax: 1,
        oninputstart: 2,
        oninputmove: 3,
        oninputend: 4,
        elasticity: 5,
        labelReset: 6,
      });
  }
}
function og(t) {
  let e, o, i, n, r;
  return {
    c() {
      (e = Tn("div")),
        (o = Tn("p")),
        (i = Rn(t[0])),
        (n = Rn(" Ã— ")),
        (r = Rn(t[1])),
        zn(e, "class", "PinturaImageInfo");
    },
    m(t, a) {
      Cn(t, e, a), kn(e, o), kn(o, i), kn(o, n), kn(o, r);
    },
    p(t, [e]) {
      1 & e && On(i, t[0]), 2 & e && On(r, t[1]);
    },
    i: Qi,
    o: Qi,
    d(t) {
      t && Mn(e);
    },
  };
}
function ig(t, e, o) {
  let { width: i } = e,
    { height: n } = e;
  return (
    (t.$$set = (t) => {
      "width" in t && o(0, (i = t.width)),
        "height" in t && o(1, (n = t.height));
    }),
    [i, n]
  );
}
class ng extends Br {
  constructor(t) {
    super(), zr(this, t, ig, og, sn, { width: 0, height: 1 });
  }
}
function rg(t) {
  let e, o;
  return (
    (e = new dd({
      props: {
        class: "PinturaPresetListFilter",
        layout: "row",
        options: t[9],
        selectedIndex: t[7],
        onchange: t[10],
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        512 & o && (i.options = t[9]),
          128 & o && (i.selectedIndex = t[7]),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function ag(t) {
  let e, o;
  return (
    (e = new kd({
      props: {
        icon: t[0],
        label: t[1],
        labelClass: t[2],
        hideLabel: t[3],
        options: t[8],
        selectedIndex: t[4],
        onchange: t[5],
        optionMapper: t[6],
        $$slots: { controls: [rg] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, [o]) {
        const i = {};
        1 & o && (i.icon = t[0]),
          2 & o && (i.label = t[1]),
          4 & o && (i.labelClass = t[2]),
          8 & o && (i.hideLabel = t[3]),
          256 & o && (i.options = t[8]),
          16 & o && (i.selectedIndex = t[4]),
          32 & o && (i.onchange = t[5]),
          64 & o && (i.optionMapper = t[6]),
          262784 & o && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
const sg = 'fill="none" stroke="currentColor"';
function lg(t, e, o) {
  let i,
    r,
    a,
    { icon: s } = e,
    { label: l } = e,
    { labelClass: c } = e,
    { hideLabel: d } = e,
    { options: u } = e,
    { selectedIndex: p } = e,
    { onchange: h } = e,
    { optionMapper: m } = e,
    { filter: g = "landscape" } = e,
    { onfilterchange: f = n } = e;
  const $ = (t, e, o, i, n) =>
      `\n    <rect ${sg} x="${t}" y="${e}" width="${o}" height="${i}" rx="${n}"/>`,
    y = (t, e) => `<path ${sg} d="M${t} ${e} l2 2 l3 -4"/>`;
  return (
    (t.$$set = (t) => {
      "icon" in t && o(0, (s = t.icon)),
        "label" in t && o(1, (l = t.label)),
        "labelClass" in t && o(2, (c = t.labelClass)),
        "hideLabel" in t && o(3, (d = t.hideLabel)),
        "options" in t && o(12, (u = t.options)),
        "selectedIndex" in t && o(4, (p = t.selectedIndex)),
        "onchange" in t && o(5, (h = t.onchange)),
        "optionMapper" in t && o(6, (m = t.optionMapper)),
        "filter" in t && o(11, (g = t.filter)),
        "onfilterchange" in t && o(13, (f = t.onfilterchange));
    }),
    (t.$$.update = () => {
      6144 & t.$$.dirty &&
        o(
          8,
          (i = ((t, e) =>
            (t || []).map((t) => (w(t[0]) ? ((t[1] = t[1].map(e)), t) : e(t))))(
            u,
            ((t) => (e) => {
              const [o, i, n = {}] = e;
              return (
                qe(o) && (n.hidden = "landscape" === t ? o < 1 : o > 1),
                [o, i, n]
              );
            })(g)
          ))
        ),
        2048 & t.$$.dirty && o(7, (r = "landscape" === g ? 0 : 1)),
        128 & t.$$.dirty &&
          o(
            9,
            (a = [
              [
                "landscape",
                "Landscape",
                {
                  hideLabel: !0,
                  icon: $(2, 6, 19, 12, 2) + (0 === r ? y(9, 12) : ""),
                },
              ],
              [
                "portrait",
                "Portrait",
                {
                  hideLabel: !0,
                  icon: $(5, 3, 13, 18, 2) + (1 === r ? y(9, 12) : ""),
                },
              ],
            ])
          );
    }),
    [
      s,
      l,
      c,
      d,
      p,
      h,
      m,
      r,
      i,
      a,
      (t) => {
        o(11, (g = t.value)), f(t.value);
      },
      g,
      u,
      f,
    ]
  );
}
class cg extends Br {
  constructor(t) {
    super(),
      zr(this, t, lg, ag, sn, {
        icon: 0,
        label: 1,
        labelClass: 2,
        hideLabel: 3,
        options: 12,
        selectedIndex: 4,
        onchange: 5,
        optionMapper: 6,
        filter: 11,
        onfilterchange: 13,
      });
  }
}
function dg(t) {
  let e, o;
  return (
    (e = new Jd({ props: { items: t[8] } })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        256 & o[0] && (i.items = t[8]), e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function ug(t) {
  let e, o, i;
  return (
    (o = new Pm({
      props: { $$slots: { default: [dg] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        (e = Tn("div")), Ir(o.$$.fragment), zn(e, "slot", "header");
      },
      m(t, n) {
        Cn(t, e, n), Lr(o, e, null), (i = !0);
      },
      p(t, e) {
        const i = {};
        (256 & e[0]) | (65536 & e[6]) && (i.$$scope = { dirty: e, ctx: t }),
          o.$set(i);
      },
      i(t) {
        i || (vr(o.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && Mn(e), Fr(o);
      },
    }
  );
}
function pg(t) {
  let e, o;
  return (
    (e = new Vl({
      props: {
        onclick: t[83],
        label: t[3].cropLabelButtonRecenter,
        icon: t[3].cropIconButtonRecenter,
        class: "PinturaButtonCenter",
        disabled: !t[10],
        hideLabel: !0,
        style: `opacity: ${t[27]}; transform: translate3d(${t[28].x}px, ${t[28].y}px, 0)`,
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        8 & o[0] && (i.label = t[3].cropLabelButtonRecenter),
          8 & o[0] && (i.icon = t[3].cropIconButtonRecenter),
          1024 & o[0] && (i.disabled = !t[10]),
          402653184 & o[0] &&
            (i.style = `opacity: ${t[27]}; transform: translate3d(${t[28].x}px, ${t[28].y}px, 0)`),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function hg(t) {
  let e, o;
  return (
    (e = new jm({ props: { rect: t[11], visible: t[9], style: t[1] } })),
    e.$on("resizestart", t[63]),
    e.$on("resizemove", t[64]),
    e.$on("resizeend", t[65]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        2048 & o[0] && (i.rect = t[11]),
          512 & o[0] && (i.visible = t[9]),
          2 & o[0] && (i.style = t[1]),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function mg(t) {
  let e, o;
  return (
    (e = new ng({
      props: { width: Math.round(t[6].width), height: Math.round(t[6].height) },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        64 & o[0] && (i.width = Math.round(t[6].width)),
          64 & o[0] && (i.height = Math.round(t[6].height)),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function gg(t) {
  let e,
    o,
    i,
    n,
    r,
    a,
    s,
    l,
    c = t[17] && t[18] && pg(t),
    d = t[17] && hg(t),
    u = t[16] && mg(t);
  return {
    c() {
      (e = Tn("div")),
        (o = Tn("div")),
        c && c.c(),
        (i = An()),
        d && d.c(),
        (r = An()),
        u && u.c(),
        zn(o, "class", "PinturaStage"),
        zn(e, "slot", "main");
    },
    m(p, h) {
      Cn(p, e, h),
        kn(e, o),
        c && c.m(o, null),
        kn(o, i),
        d && d.m(o, null),
        t[155](o),
        kn(e, r),
        u && u.m(e, null),
        (a = !0),
        s ||
          ((l = [
            In(o, "measure", t[153]),
            $n(bs.call(null, o)),
            In(
              o,
              "wheel",
              function () {
                an(t[2] && t[82]) && (t[2] && t[82]).apply(this, arguments);
              },
              { passive: !1 }
            ),
            In(o, "interactionstart", t[69]),
            In(o, "interactionupdate", t[70]),
            In(o, "interactionrelease", t[72]),
            In(o, "interactionend", t[71]),
            $n(
              (n = Nl.call(null, o, {
                drag: !0,
                pinch: t[2],
                inertia: !0,
                shouldStartInteraction: Cg,
                getEventPosition: t[156],
              }))
            ),
            In(o, "gesturedown", t[79]),
            In(o, "gestureupdate", t[80]),
            In(o, "gestureup", t[81]),
            $n(Nm.call(null, o)),
          ]),
          (s = !0));
    },
    p(r, a) {
      (t = r)[17] && t[18]
        ? c
          ? (c.p(t, a), 393216 & a[0] && vr(c, 1))
          : ((c = pg(t)), c.c(), vr(c, 1), c.m(o, i))
        : c &&
          (br(),
          wr(c, 1, 1, () => {
            c = null;
          }),
          xr()),
        t[17]
          ? d
            ? (d.p(t, a), 131072 & a[0] && vr(d, 1))
            : ((d = hg(t)), d.c(), vr(d, 1), d.m(o, null))
          : d &&
            (br(),
            wr(d, 1, 1, () => {
              d = null;
            }),
            xr()),
        n &&
          an(n.update) &&
          32772 & a[0] &&
          n.update.call(null, {
            drag: !0,
            pinch: t[2],
            inertia: !0,
            shouldStartInteraction: Cg,
            getEventPosition: t[156],
          }),
        t[16]
          ? u
            ? (u.p(t, a), 65536 & a[0] && vr(u, 1))
            : ((u = mg(t)), u.c(), vr(u, 1), u.m(e, null))
          : u &&
            (br(),
            wr(u, 1, 1, () => {
              u = null;
            }),
            xr());
    },
    i(t) {
      a || (vr(c), vr(d), vr(u), (a = !0));
    },
    o(t) {
      wr(c), wr(d), wr(u), (a = !1);
    },
    d(o) {
      o && Mn(e),
        c && c.d(),
        d && d.d(),
        t[155](null),
        u && u.d(),
        (s = !1),
        rn(l);
    },
  };
}
function fg(t) {
  let e, o, i, n;
  const r = [{ class: "PinturaControlList" }, { tabs: t[12] }, t[21]];
  let a = {
    $$slots: {
      default: [
        $g,
        ({ tab: t }) => ({ 201: t }),
        ({ tab: t }) => [0, 0, 0, 0, 0, 0, t ? 32768 : 0],
      ],
    },
    $$scope: { ctx: t },
  };
  for (let t = 0; t < r.length; t += 1) a = en(a, r[t]);
  (e = new fl({ props: a })), e.$on("select", t[154]);
  const s = [
    { class: "PinturaControlPanels" },
    { panelClass: "PinturaControlPanel" },
    { panels: t[22] },
    t[21],
  ];
  let l = {
    $$slots: {
      default: [
        xg,
        ({ panel: t }) => ({ 200: t }),
        ({ panel: t }) => [0, 0, 0, 0, 0, 0, t ? 16384 : 0],
      ],
    },
    $$scope: { ctx: t },
  };
  for (let t = 0; t < s.length; t += 1) l = en(l, s[t]);
  return (
    (i = new Pl({ props: l })),
    {
      c() {
        Ir(e.$$.fragment), (o = An()), Ir(i.$$.fragment);
      },
      m(t, r) {
        Lr(e, t, r), Cn(t, o, r), Lr(i, t, r), (n = !0);
      },
      p(t, o) {
        const n =
          2101248 & o[0]
            ? Rr(r, [
                r[0],
                4096 & o[0] && { tabs: t[12] },
                2097152 & o[0] && Ar(t[21]),
              ])
            : {};
        98304 & o[6] && (n.$$scope = { dirty: o, ctx: t }), e.$set(n);
        const a =
          6291456 & o[0]
            ? Rr(s, [
                s[0],
                s[1],
                4194304 & o[0] && { panels: t[22] },
                2097152 & o[0] && Ar(t[21]),
              ])
            : {};
        (117457032 & o[0]) | (81920 & o[6]) &&
          (a.$$scope = { dirty: o, ctx: t }),
          i.$set(a);
      },
      i(t) {
        n || (vr(e.$$.fragment, t), vr(i.$$.fragment, t), (n = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), wr(i.$$.fragment, t), (n = !1);
      },
      d(t) {
        Fr(e, t), t && Mn(o), Fr(i, t);
      },
    }
  );
}
function $g(t) {
  let e,
    o,
    i = t[201].label + "";
  return {
    c() {
      (e = Tn("span")), (o = Rn(i));
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, e) {
      32768 & e[6] && i !== (i = t[201].label + "") && On(o, i);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function yg(t) {
  let e, o;
  return (
    (e = new Cm({
      props: {
        elasticity: t[36] * t[37],
        base: kg,
        min: t[14],
        max: Sg,
        valueMin: t[25][0],
        valueMax: t[25][1],
        value: t[26],
        labelReset: t[3].labelReset,
        valueLabel: Math.round(100 * t[26]) + "%",
        oninputstart: t[76],
        oninputmove: t[77],
        oninputend: t[78],
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        16384 & o[0] && (i.min = t[14]),
          33554432 & o[0] && (i.valueMin = t[25][0]),
          33554432 & o[0] && (i.valueMax = t[25][1]),
          67108864 & o[0] && (i.value = t[26]),
          8 & o[0] && (i.labelReset = t[3].labelReset),
          67108864 & o[0] && (i.valueLabel = Math.round(100 * t[26]) + "%"),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function bg(t) {
  let e, o;
  return (
    (e = new eg({
      props: {
        elasticity: t[36] * t[37],
        rotation: t[7],
        labelReset: t[3].labelReset,
        valueMin: t[24][0],
        valueMax: t[24][1],
        oninputstart: t[66],
        oninputmove: t[67],
        oninputend: t[68],
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        128 & o[0] && (i.rotation = t[7]),
          8 & o[0] && (i.labelReset = t[3].labelReset),
          16777216 & o[0] && (i.valueMin = t[24][0]),
          16777216 & o[0] && (i.valueMax = t[24][1]),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function xg(t) {
  let e, o, i, n;
  const r = [bg, yg],
    a = [];
  function s(t, e) {
    return t[200] === t[88] + "-rotation"
      ? 0
      : t[200] === t[88] + "-zoom"
      ? 1
      : -1;
  }
  return (
    ~(e = s(t)) && (o = a[e] = r[e](t)),
    {
      c() {
        o && o.c(), (i = En());
      },
      m(t, o) {
        ~e && a[e].m(t, o), Cn(t, i, o), (n = !0);
      },
      p(t, n) {
        let l = e;
        (e = s(t)),
          e === l
            ? ~e && a[e].p(t, n)
            : (o &&
                (br(),
                wr(a[l], 1, 1, () => {
                  a[l] = null;
                }),
                xr()),
              ~e
                ? ((o = a[e]),
                  o ? o.p(t, n) : ((o = a[e] = r[e](t)), o.c()),
                  vr(o, 1),
                  o.m(i.parentNode, i))
                : (o = null));
      },
      i(t) {
        n || (vr(o), (n = !0));
      },
      o(t) {
        wr(o), (n = !1);
      },
      d(t) {
        ~e && a[e].d(t), t && Mn(i);
      },
    }
  );
}
function vg(t) {
  let e,
    o,
    i = t[20] && fg(t);
  return {
    c() {
      (e = Tn("div")),
        i && i.c(),
        zn(e, "slot", "footer"),
        zn(e, "style", t[23]);
    },
    m(t, n) {
      Cn(t, e, n), i && i.m(e, null), (o = !0);
    },
    p(t, n) {
      t[20]
        ? i
          ? (i.p(t, n), 1048576 & n[0] && vr(i, 1))
          : ((i = fg(t)), i.c(), vr(i, 1), i.m(e, null))
        : i &&
          (br(),
          wr(i, 1, 1, () => {
            i = null;
          }),
          xr()),
        (!o || 8388608 & n[0]) && zn(e, "style", t[23]);
    },
    i(t) {
      o || (vr(i), (o = !0));
    },
    o(t) {
      wr(i), (o = !1);
    },
    d(t) {
      t && Mn(e), i && i.d();
    },
  };
}
function wg(t) {
  let e, o, i;
  function n(e) {
    t[157](e);
  }
  let r = {
    hasHeader: t[19],
    $$slots: { footer: [vg], main: [gg], header: [ug] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[13] && (r.root = t[13]),
    (e = new vm({ props: r })),
    or.push(() => Er(e, "root", n)),
    e.$on("measure", t[158]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, o) {
        Lr(e, t, o), (i = !0);
      },
      p(t, i) {
        const n = {};
        524288 & i[0] && (n.hasHeader = t[19]),
          (536338430 & i[0]) | (65536 & i[6]) &&
            (n.$$scope = { dirty: i, ctx: t }),
          !o && 8192 & i[0] && ((o = !0), (n.root = t[13]), dr(() => (o = !1))),
          e.$set(n);
      },
      i(t) {
        i || (vr(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
const Sg = 1,
  kg = 0,
  Cg = (t, e) => t.target === e;
function Mg(t, e, o) {
  let i,
    n,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    h,
    m,
    g,
    f,
    $,
    y,
    b,
    x,
    v,
    w,
    S,
    k,
    C,
    M,
    P,
    R,
    A,
    E,
    I,
    L,
    F,
    z,
    B,
    O,
    _,
    V,
    N,
    H,
    U,
    Y,
    G,
    J,
    et,
    it,
    st,
    lt,
    ct,
    dt,
    ut,
    pt,
    ht,
    mt,
    ft,
    bt,
    vt,
    Tt,
    Pt,
    Rt,
    At,
    Et,
    Lt,
    zt,
    Bt,
    Ot,
    jt,
    Xt,
    Yt,
    Gt,
    ee = Qi,
    ie = () => (ee(), (ee = ln(ne, (t) => o(9, (J = t)))), ne);
  t.$$.on_destroy.push(() => ee());
  let { isActive: ne } = e;
  ie();
  let { stores: re } = e,
    { cropImageSelectionCornerStyle: ae = "circle" } = e,
    {
      cropWillRenderImageSelectionGuides: se = (t, e) => {
        const o = "rotate" == t;
        return { rows: o ? 5 : 3, cols: o ? 5 : 3, opacity: 0.25 * e };
      },
    } = e,
    { cropAutoCenterImageSelectionTimeout: le } = e,
    { cropEnableZoomMatchImageAspectRatio: ce = !0 } = e,
    { cropEnableRotateMatchImageAspectRatio: de = "never" } = e,
    { cropEnableRotationInput: ue = !0 } = e,
    { cropEnableZoom: pe = !0 } = e,
    { cropEnableZoomInput: he = !0 } = e,
    { cropEnableZoomAutoHide: me = !0 } = e,
    { cropEnableImageSelection: ge = !0 } = e,
    { cropEnableInfoIndicator: fe = !1 } = e,
    { cropEnableZoomTowardsWheelPosition: $e = !0 } = e,
    { cropEnableLimitWheelInputToCropSelection: ye = !0 } = e,
    { cropEnableCenterImageSelection: be = !0 } = e,
    { cropEnableButtonRotateLeft: xe = !0 } = e,
    { cropEnableButtonRotateRight: ve = !1 } = e,
    { cropEnableButtonFlipHorizontal: we = !0 } = e,
    { cropEnableButtonFlipVertical: Se = !1 } = e,
    { cropSelectPresetOptions: ke } = e,
    { cropEnableSelectPreset: Ce = !0 } = e,
    { cropEnableFilterMatchAspectRatio: Me = !0 } = e,
    { cropSelectPresetFilter: Te = !1 } = e,
    { cropEnableButtonToggleCropLimit: Pe = !1 } = e,
    { cropWillRenderTools: Re = W } = e,
    { cropActiveTransformTool: Ae = "rotation" } = e,
    { cropMinimizeToolbar: Ee = "auto" } = e,
    { locale: Ie = {} } = e,
    Le = "idle";
  const Fe = Wr();
  dn(t, Fe, (t) => o(118, (I = t)));
  const ze = () => void 0 === E,
    Be = (t) => 1 / t,
    Oe = (t) => {
      Me &&
        Te !== t &&
        (o(90, (Te = t)), E && 1 !== E && De() && fn(xo, (E = Be(E)), E));
    },
    De = () => {
      if (1 === E || !i) return !1;
      const t = Be(E);
      return !!Fc(I).find(([e]) => e === t);
    },
    We = (t, e, o) =>
      j(o)
        ? e.width === Math.round(t.height) || e.height === Math.round(t.width)
        : e.width === Math.round(t.width) || e.height === Math.round(t.height),
    _e = () =>
      (ze() || ("always" === de && De())) &&
      ((t, e, o) => {
        const i = Mt(kt(gt(e), o), (t) => Math.abs(Math.round(t))),
          n = St(i),
          r = _t(t);
        return ot(n, r);
      })(L, F, z) &&
      We(L, F, z),
    Ze = (t) => {
      if ("never" !== de && _e()) {
        fn(ao, (z += t), z);
        const e = j(z),
          o = e ? F.height : F.width,
          i = e ? F.width : F.height;
        fn(fo, (L = Wt(0, 0, o, i)), L), ze() || fn(xo, (E = D(o, i)), E);
      } else fn(ao, (z += t), z);
    },
    {
      history: Ve,
      env: je,
      isInteracting: Ne,
      isInteractingFraction: He,
      rootRect: Ue,
      stageRect: Xe,
      utilRect: Ye,
      rootLineColor: Ge,
      animation: qe,
      elasticityMultiplier: Ke,
      rangeInputElasticity: Je,
      presentationScalar: to,
      utilTools: eo,
      imagePreviewModifiers: oo,
      imageOutlineOpacity: io,
      imageFlipX: no,
      imageFlipY: ro,
      imageRotation: ao,
      imageRotationRange: so,
      imageOutputSize: lo,
      imageSelectionRect: co,
      imageSelectionRectSnapshot: uo,
      imageSelectionRectIntent: po,
      imageSelectionRectPresentation: ho,
      imageCropRectIntent: mo,
      imageCropRectOrigin: go,
      imageCropRect: fo,
      imageCropMinSize: $o,
      imageCropMaxSize: yo,
      imageCropRange: bo,
      imageCropAspectRatio: xo,
      imageCropLimitToImage: vo,
      imageSize: wo,
      imageScalar: So,
      imageOverlayMarkup: ko,
      framePadded: Co,
    } = re;
  dn(t, je, (t) => o(128, (Y = t))),
    dn(t, Ne, (t) => o(130, (et = t))),
    dn(t, Ue, (t) => o(15, (ft = t))),
    dn(t, Xe, (t) => o(135, (bt = t))),
    dn(t, Ye, (t) => o(134, (ut = t))),
    dn(t, qe, (t) => o(151, (zt = t))),
    dn(t, to, (t) => o(133, (lt = t))),
    dn(t, eo, (t) => o(169, (G = t))),
    dn(t, oo, (t) => o(146, (At = t))),
    dn(t, no, (t) => o(122, (_ = t))),
    dn(t, ro, (t) => o(121, (O = t))),
    dn(t, ao, (t) => o(7, (z = t))),
    dn(t, so, (t) => o(24, (Ot = t))),
    dn(t, lo, (t) => o(168, (N = t))),
    dn(t, co, (t) => o(132, (st = t))),
    dn(t, uo, (t) => o(131, (it = t))),
    dn(t, po, (t) => o(171, (dt = t))),
    dn(t, ho, (t) => o(138, (Tt = t))),
    dn(t, mo, (t) => o(173, (ht = t))),
    dn(t, go, (t) => o(172, (pt = t))),
    dn(t, fo, (t) => o(6, (L = t))),
    dn(t, $o, (t) => o(126, (H = t))),
    dn(t, yo, (t) => o(170, (ct = t))),
    dn(t, bo, (t) => o(174, (mt = t))),
    dn(t, xo, (t) => o(167, (E = t))),
    dn(t, vo, (t) => o(127, (U = t))),
    dn(t, wo, (t) => o(119, (F = t))),
    dn(t, So, (t) => o(144, (Pt = t))),
    dn(t, ko, (t) => o(176, (Et = t))),
    dn(t, Co, (t) => o(145, (Rt = t)));
  const Mo = Wr({});
  let To, Po, Ro;
  dn(t, Mo, (t) => o(120, (B = t)));
  const Ao = (t, e) => {
    const o = { target: t, translate: e };
    let i,
      n = Km(it, o, { aspectRatio: E });
    const r = $t(Nt(It(n), lt));
    if ((ta(F, z), r.width < H.width || r.height < H.height)) {
      const o = e.y < 0,
        n = e.x > 0,
        a = e.x < 0,
        s = e.y > 0,
        l =
          ("t" === t && o) ||
          ("r" === t && n) ||
          ("b" === t && s) ||
          ("l" === t && a) ||
          ("tr" === t && (n || o)) ||
          ("tl" === t && (a || o)) ||
          ("br" === t && (n || s)) ||
          ("bl" === t && (a || s)),
        c = Ut(r),
        d = ea(F, z, c);
      if (l && (d.width < H.width || d.height < H.height)) {
        if (0 !== z) {
          const t = Math.sign(z),
            e = Math.round(Math.abs(z) / Z) * Z,
            o = z - t * e,
            i = (e / Z) % 2 == 1,
            n = i ? F.height : F.width,
            a = i ? F.width : F.height,
            s = Math.abs(o),
            l = Math.sin(s),
            c = Math.cos(s);
          if (r.width < H.width) {
            r.width = H.width;
            const t = n - (c * r.width + l * r.height),
              e = a - (l * r.width + c * r.height);
            t < e
              ? (r.height = (n - c * r.width) / l)
              : e < t && (r.height = (a - l * r.width) / c);
          }
          if (r.height < H.height) {
            r.height = H.height;
            const t = n - (c * r.width + l * r.height),
              e = a - (l * r.width + c * r.height);
            t < e
              ? (r.width = (n - l * r.height) / c)
              : e < t && (r.width = (a - c * r.height) / l);
          }
        } else
          r.width < H.width && ((r.width = H.width), (r.height = F.height)),
            r.height < H.height && ((r.height = H.height), (r.width = F.width));
        i = Ut(r);
      }
    }
    return (
      i && (n = Km(it, o, { aspectRatio: i || E })),
      {
        boundsLimited: ((t, e, o, i = {}) => {
          const { target: n, translate: r } = e,
            { aspectRatio: a, minSize: s, maxSize: l } = i,
            c = Ym[Xm[n]],
            d = nt(X(t.x, t.y), X(c[0] * t.width, c[1] * t.height)),
            u = Ym[n],
            p = nt(It(t), X(u[0] * t.width, u[1] * t.height)),
            [h, m, g, f, $, y, b] = Gm(n);
          let x = r.x,
            v = r.y;
          $ ? (v = 0) : y && (x = 0);
          const w = qm(d, n, o, { aspectRatio: a, minSize: s, maxSize: l });
          let [S, k, C, M] = te(t);
          if (
            (h ? (M = d.x) : m && (k = d.x), f ? (S = d.y) : g && (C = d.y), h)
          ) {
            const t = w.inner.x + w.inner.width,
              e = w.outer.x + w.outer.width;
            k = na(p.x + x, t, e);
          } else if (m) {
            const t = w.outer.x,
              e = w.inner.x;
            M = na(p.x + x, t, e);
          }
          if (f) {
            const t = w.inner.y + w.inner.height,
              e = w.outer.y + w.outer.height;
            C = na(p.y + v, t, e);
          } else if (g) {
            const t = w.outer.y,
              e = w.inner.y;
            S = na(p.y + v, t, e);
          }
          if (a)
            if (b) {
              let t = k - M,
                e = C - S;
              $
                ? ((e = t / a), (S = d.y - 0.5 * e), (C = d.y + 0.5 * e))
                : y && ((t = e * a), (M = d.x - 0.5 * t), (k = d.x + 0.5 * t));
            } else {
              const t = X(p.x + x - d.x, p.y + v - d.y);
              n === zm
                ? ((t.x = Math.max(0, t.x)), (t.y = Math.min(0, t.y)))
                : n === Bm
                ? ((t.x = Math.max(0, t.x)), (t.y = Math.max(0, t.y)))
                : n === Om
                ? ((t.x = Math.min(0, t.x)), (t.y = Math.max(0, t.y)))
                : n === Fm &&
                  ((t.x = Math.min(0, t.x)), (t.y = Math.min(0, t.y)));
              const e = Q(t),
                o = Q(X(w.inner.width, w.inner.height)),
                i = Q(X(w.outer.width, w.outer.height)),
                r = na(e, o, i),
                s = X(a, 1),
                l = at(tt(s), r);
              n === zm
                ? ((k = d.x + l.x), (S = d.y - l.y))
                : n === Bm
                ? ((k = d.x + l.x), (C = d.y + l.y))
                : n === Om
                ? ((M = d.x - l.x), (C = d.y + l.y))
                : n === Fm && ((M = d.x - l.x), (S = d.y - l.y));
            }
          return Wt(M, S, k - M, C - S);
        })(it, o, ut, { aspectRatio: E || i, minSize: Po, maxSize: Ro }),
        boundsIntent: n,
      }
    );
  };
  let Io = void 0,
    Lo = void 0;
  const Fo = ({ translation: t, scalar: e }) => {
      const o = Math.min(st.width / L.width, st.height / L.height),
        i = at(q(t), 1 / o);
      let n;
      if (Lo) {
        const e = rt(q(Lo), t);
        (Lo = t), (n = Zt(It(L), e));
      } else (n = Zt(It(Io), K(q(i)))), void 0 !== e && Vt(n, 1 / e);
      fn(mo, (ht = n), ht), fn(fo, (L = n), L);
    },
    zo = _r([bo, fo], ([t, e], o) => {
      if (!e) return;
      const [i, n] = t,
        r = Ut(e);
      o([$t(oe(Jt(i, r), Eo)), $t(oe(Qt(n, r), Eo))]);
    });
  dn(t, zo, (t) => o(175, (vt = t)));
  const Bo = _r([wo, vo, $o, yo, bo, ao], ([t, e, o, i, n, r], a) => {
    if (!t) return;
    const s = n[0],
      l = n[1];
    let c, d;
    e
      ? ((c = ((t, e, o) =>
          j(o)
            ? 1 - 1 / Math.min(t.height / e.width, t.width / e.height)
            : 1 - 1 / Math.min(t.width / e.width, t.height / e.height))(
          t,
          l,
          r
        )),
        (d = Math.min(s.width / o.width, s.height / o.height)))
      : ((d = 1), (c = -1));
    a([Eo(c), Eo(d)]);
  });
  dn(t, Bo, (t) => o(25, (jt = t)));
  const Oo = _r([wo, fo, bo, ao], ([t, e, o, i], n) => {
    if (!t || !e) return n(0);
    let r;
    const a = o[0],
      s = o[1],
      l = e.width,
      c = e.height,
      d = Ut(e),
      u = j(i) ? xt(t.height, t.width) : t,
      p = Qt(u, d);
    if (l <= p.width || c <= p.height) {
      const t = p.width - a.width,
        e = p.height - a.height;
      r =
        0 === t || 0 === e
          ? 1
          : 1 - Math.min((l - a.width) / t, (c - a.height) / e);
    } else {
      const t = s.width - p.width,
        e = s.height - p.height,
        o = Qt({ width: t, height: e }, d);
      r = -Math.min((l - p.width) / o.width, (c - p.height) / o.height);
    }
    n(r);
  });
  dn(t, Oo, (t) => o(26, (Xt = t)));
  const Do = (t) => {
    const e = Ut(Io);
    let o, i, n;
    const r = j(z) ? xt(F.height, F.width) : F,
      a = Qt(r, e);
    if (t >= 0) {
      const r = a.width - mt[0].width,
        s = a.height - mt[0].height;
      (o = a.width - r * t),
        (i = a.height - s * t),
        (n = Jt({ width: o, height: i }, e));
    } else {
      const r = mt[1].width - a.width,
        s = mt[1].height - a.height;
      (o = a.width + r * -t),
        (i = a.height + s * -t),
        (n = Qt({ width: o, height: i }, e));
    }
    (o = n.width), (i = n.height);
    const s = Io.x + 0.5 * Io.width - 0.5 * o,
      l = Io.y + 0.5 * Io.height - 0.5 * i;
    fn(fo, (L = { x: s, y: l, width: o, height: i }), L);
  };
  let Wo;
  const _o = (t) => {
    const e = Vt(It(Wo), 1 / t);
    fn(mo, (ht = e), ht), fn(fo, (L = e), L);
  };
  let Zo;
  const Vo = Kn(),
    jo = () => {
      Vo("measure", It(ut));
    };
  let No;
  const Ho = ss(0, { precision: 1e-4 });
  dn(t, Ho, (t) => o(27, (Yt = t)));
  const Uo = ss();
  dn(t, Uo, (t) => o(28, (Gt = t)));
  const Xo = _r([xo, lo, Fe], ([t, e, o], n) => {
    if (!i) return;
    const r = Fc(o),
      a = [...r]
        .map((t) => t[0])
        .sort((t, e) => (Qe(t[0]) && !Qe(e[0]) ? 1 : -1))
        .find((o) => {
          if (Qe(o) && e) {
            const [i, n] = o,
              r = e.width === i && e.height === n,
              a = t === D(i, n);
            return r && a;
          }
          return o === t;
        });
    n(r.map((t) => t[0]).findIndex((t) => (Qe(t) ? la(t, a) : t === a)));
  });
  dn(t, Xo, (t) => o(124, (V = t)));
  const Yo = (t, e) => {
      if (!i || -1 === t || void 0 === t) return;
      const o = Fc(e)[t][0];
      return o ? (Qe(o) ? D(o[0], o[1]) : o) : void 0;
    },
    Go = _r([Ge, ho, He], ([t, e, o], i) => {
      const { rows: n, cols: r, opacity: a } = se(Le, o);
      if (!e || a <= 0) return i([]);
      const { x: s, y: l, width: c, height: d } = e,
        u = c / r,
        p = d / n,
        h = [];
      for (let e = 1; e <= n - 1; e++) {
        const o = l + p * e;
        h.push({
          id: "image-selection-guide-row-" + e,
          points: [X(s, o), X(s + c, o)],
          opacity: a,
          strokeWidth: 1,
          strokeColor: t,
        });
      }
      for (let e = 1; e <= r - 1; e++) {
        const o = s + u * e;
        h.push({
          id: "image-selection-guide-col-" + e,
          points: [X(o, l), X(o, l + d)],
          opacity: a,
          strokeWidth: 1,
          strokeColor: t,
        });
      }
      i(h);
    });
  dn(t, Go, (t) => o(147, (Lt = t)));
  const qo = "crop-" + T();
  let Ko,
    Jo = qo + "-" + (ue ? Ae : "zoom"),
    Qo = Jo,
    ti = void 0;
  const ei = ss(zt ? 20 : 0);
  dn(t, ei, (t) => o(152, (Bt = t)));
  return (
    (t.$$set = (t) => {
      "isActive" in t && ie(o(0, (ne = t.isActive))),
        "stores" in t && o(92, (re = t.stores)),
        "cropImageSelectionCornerStyle" in t &&
          o(1, (ae = t.cropImageSelectionCornerStyle)),
        "cropWillRenderImageSelectionGuides" in t &&
          o(93, (se = t.cropWillRenderImageSelectionGuides)),
        "cropAutoCenterImageSelectionTimeout" in t &&
          o(94, (le = t.cropAutoCenterImageSelectionTimeout)),
        "cropEnableZoomMatchImageAspectRatio" in t &&
          o(95, (ce = t.cropEnableZoomMatchImageAspectRatio)),
        "cropEnableRotateMatchImageAspectRatio" in t &&
          o(96, (de = t.cropEnableRotateMatchImageAspectRatio)),
        "cropEnableRotationInput" in t &&
          o(97, (ue = t.cropEnableRotationInput)),
        "cropEnableZoom" in t && o(2, (pe = t.cropEnableZoom)),
        "cropEnableZoomInput" in t && o(98, (he = t.cropEnableZoomInput)),
        "cropEnableZoomAutoHide" in t && o(99, (me = t.cropEnableZoomAutoHide)),
        "cropEnableImageSelection" in t &&
          o(100, (ge = t.cropEnableImageSelection)),
        "cropEnableInfoIndicator" in t &&
          o(101, (fe = t.cropEnableInfoIndicator)),
        "cropEnableZoomTowardsWheelPosition" in t &&
          o(102, ($e = t.cropEnableZoomTowardsWheelPosition)),
        "cropEnableLimitWheelInputToCropSelection" in t &&
          o(103, (ye = t.cropEnableLimitWheelInputToCropSelection)),
        "cropEnableCenterImageSelection" in t &&
          o(104, (be = t.cropEnableCenterImageSelection)),
        "cropEnableButtonRotateLeft" in t &&
          o(105, (xe = t.cropEnableButtonRotateLeft)),
        "cropEnableButtonRotateRight" in t &&
          o(106, (ve = t.cropEnableButtonRotateRight)),
        "cropEnableButtonFlipHorizontal" in t &&
          o(107, (we = t.cropEnableButtonFlipHorizontal)),
        "cropEnableButtonFlipVertical" in t &&
          o(108, (Se = t.cropEnableButtonFlipVertical)),
        "cropSelectPresetOptions" in t &&
          o(109, (ke = t.cropSelectPresetOptions)),
        "cropEnableSelectPreset" in t &&
          o(110, (Ce = t.cropEnableSelectPreset)),
        "cropEnableFilterMatchAspectRatio" in t &&
          o(111, (Me = t.cropEnableFilterMatchAspectRatio)),
        "cropSelectPresetFilter" in t && o(90, (Te = t.cropSelectPresetFilter)),
        "cropEnableButtonToggleCropLimit" in t &&
          o(112, (Pe = t.cropEnableButtonToggleCropLimit)),
        "cropWillRenderTools" in t && o(113, (Re = t.cropWillRenderTools)),
        "cropActiveTransformTool" in t &&
          o(114, (Ae = t.cropActiveTransformTool)),
        "cropMinimizeToolbar" in t && o(115, (Ee = t.cropMinimizeToolbar)),
        "locale" in t && o(3, (Ie = t.locale));
    }),
    (t.$$.update = () => {
      65536 & t.$$.dirty[3] &&
        o(117, (i = ke && Array.isArray(ke) && ke.length)),
        16842752 & t.$$.dirty[3] && Fe.set(i ? ke : []),
        16 & t.$$.dirty[4] && o(129, (h = "overlay" === Y.layoutMode)),
        (131072 & t.$$.dirty[3]) | (32 & t.$$.dirty[4]) &&
          o(123, (v = Ce && !h)),
        1280 & t.$$.dirty[4] && o(139, (l = ut && st && qt(ut, st))),
        33024 & t.$$.dirty[4] && o(140, (c = !(!st || !l))),
        98560 & t.$$.dirty[4] && o(125, (d = c && Ht(st, l, (t) => Eo(t, 5)))),
        (136 & t.$$.dirty[0]) |
          (268435456 & t.$$.dirty[2]) |
          (2132340736 & t.$$.dirty[3]) |
          (31 & t.$$.dirty[4]) &&
          o(
            8,
            (n =
              B &&
              Re(
                [
                  xe && [
                    "Button",
                    "rotate-left",
                    {
                      label: Ie.cropLabelButtonRotateLeft,
                      labelClass: "PinturaToolbarContentWide",
                      icon: Ie.cropIconButtonRotateLeft,
                      onclick: () => {
                        Ze(-Math.PI / 2), Ve.write();
                      },
                    },
                  ],
                  ve && [
                    "Button",
                    "rotate-right",
                    {
                      label: Ie.cropLabelButtonRotateRight,
                      labelClass: "PinturaToolbarContentWide",
                      icon: Ie.cropIconButtonRotateRight,
                      onclick: () => {
                        Ze(Math.PI / 2), Ve.write();
                      },
                    },
                  ],
                  we && [
                    "Button",
                    "flip-horizontal",
                    {
                      label: Ie.cropLabelButtonFlipHorizontal,
                      labelClass: "PinturaToolbarContentWide",
                      icon: Ie.cropIconButtonFlipHorizontal,
                      onclick: () => {
                        j(z) ? fn(ro, (O = !O), O) : fn(no, (_ = !_), _),
                          Ve.write();
                      },
                    },
                  ],
                  Se && [
                    "Button",
                    "flip-vertical",
                    {
                      label: Ie.cropLabelButtonFlipVertical,
                      labelClass: "PinturaToolbarContentWide",
                      icon: Ie.cropIconButtonFlipVertical,
                      onclick: () => {
                        j(z) ? fn(no, (_ = !_), _) : fn(ro, (O = !O), O),
                          Ve.write();
                      },
                    },
                  ],
                  v &&
                    i && [
                      !1 === Te ? "Dropdown" : cg,
                      "select-preset",
                      {
                        icon: Bc(Ie.cropIconSelectPreset, Ie, Yo(V, I)),
                        label: Ie.cropLabelSelectPreset,
                        labelClass: "PinturaToolbarContentWide",
                        options: I,
                        filter: Te,
                        onfilterchange: Oe,
                        selectedIndex: V,
                        onchange: ({ value: t }) => {
                          Qe(t)
                            ? (fn(xo, (E = D(t[0], t[1])), E),
                              fn(lo, (N = yt(t)), N))
                            : fn(xo, (E = t), E),
                            d && jo(),
                            Ve.write();
                        },
                        optionMapper: (t) => {
                          let e = !1;
                          const o = Qe(t.value)
                            ? t.value[0] / t.value[1]
                            : t.value;
                          if (o) {
                            const t = ea(F, z, o);
                            e = t.width < H.width || t.height < H.height;
                          }
                          return (
                            (t.icon = ((t, e = {}) => {
                              const {
                                width: o = 24,
                                height: i = 24,
                                bounds: n = 16,
                                radius: r = 3,
                              } = e;
                              let a,
                                s,
                                l,
                                c,
                                d = Qe(t) ? D(t[0], t[1]) : t,
                                u = !!d;
                              return (
                                (d = u ? d : 1),
                                (l = d > 1 ? n : d * n),
                                (c = l / d),
                                (a = Math.round(0.5 * (o - l))),
                                (s = Math.round(0.5 * (i - c))),
                                `<rect fill="${
                                  u ? "currentColor" : "none"
                                }" stroke="${
                                  u ? "none" : "currentColor"
                                }" stroke-width="${
                                  o / 16
                                }" stroke-dasharray="${[o / 12, o / 6].join(
                                  " "
                                )}" x="${a}" y="${s}" width="${l}" height="${c}" rx="${r}"/>`
                              );
                            })(t.value, { bounds: 14 })),
                            { ...t, disabled: e }
                          );
                        },
                      },
                    ],
                  Pe && [
                    "Dropdown",
                    "select-crop-limit",
                    {
                      icon: Bc(Ie.cropIconCropBoundary, Ie, U),
                      label: Ie.cropLabelCropBoundary,
                      labelClass: "PinturaToolbarContentWide",
                      onchange: ({ value: t }) => {
                        fn(vo, (U = t), U), Ve.write();
                      },
                      options: [
                        [
                          !0,
                          Ie.cropLabelCropBoundaryEdge,
                          { icon: Bc(Ie.cropIconCropBoundary, Ie, !0) },
                        ],
                        [
                          !1,
                          Ie.cropLabelCropBoundaryNone,
                          { icon: Bc(Ie.cropIconCropBoundary, Ie, !1) },
                        ],
                      ],
                    },
                  ],
                ].filter(Boolean),
                Y,
                () => Mo.set({})
              ).filter(Boolean))
          ),
        (768 & t.$$.dirty[0]) |
          (4194304 & t.$$.dirty[3]) |
          (48 & t.$$.dirty[4]) &&
          fn(
            eo,
            (G =
              J && ("always" === Ee || "short" === Y.verticalSpace || h)
                ? n.map(([t, e, o]) =>
                    Array.isArray(o)
                      ? [t, e, o]
                      : [t, e, { ...o, hideLabel: !0 }]
                  )
                : []),
            G
          ),
        512 & t.$$.dirty[0] && J && io.set(1),
        8 & t.$$.dirty[4] && o(14, (r = U ? 0 : -1)),
        3072 & t.$$.dirty[4] &&
          o(136, (a = ut && X(-(bt.x - ut.x), -(bt.y - ut.y)))),
        20480 & t.$$.dirty[4] &&
          o(
            137,
            (s =
              Tt &&
              X(
                yc(Tt.x + 0.5 * Tt.width + a.x),
                yc(Tt.y + 0.5 * Tt.height + a.y)
              ))
          ),
        128 & t.$$.dirty[4] && o(141, (u = null != it)),
        33792 & t.$$.dirty[4] &&
          o(
            142,
            (p = ut && l && (l.height === ut.height || l.width === ut.width))
          ),
        1311232 & t.$$.dirty[4] && o(143, (m = !p && lt < 1 && Pt < 1)),
        720898 & t.$$.dirty[4] && o(10, (g = c && !u && (!d || m))),
        (64 & t.$$.dirty[0]) | (256 & t.$$.dirty[3]) | (32 & t.$$.dirty[4]) &&
          o(16, (f = fe && !!L && !h)),
        20480 & t.$$.dirty[4] &&
          o(
            11,
            (b = Tt &&
              a && {
                x: Tt.x + a.x,
                y: Tt.y + a.y,
                width: Tt.width,
                height: Tt.height,
              })
          ),
        (2048 & t.$$.dirty[0]) | (128 & t.$$.dirty[3]) | (32 & t.$$.dirty[4]) &&
          o(17, ($ = ge && !!b && !h)),
        (2050 & t.$$.dirty[3]) | (8192 & t.$$.dirty[4]) &&
          o(18, (y = be && !!s && !le)),
        (1024 & t.$$.dirty[0]) |
          (8388610 & t.$$.dirty[3]) |
          (64 & t.$$.dirty[4]) &&
          g &&
          le &&
          !et &&
          (clearTimeout(No), o(116, (No = setTimeout(jo, le)))),
        (8388608 & t.$$.dirty[3]) | (64 & t.$$.dirty[4]) &&
          et &&
          clearTimeout(No),
        1024 & t.$$.dirty[0] && Ho.set(g ? 1 : 0),
        8192 & t.$$.dirty[4] && Uo.set(s),
        (512 & t.$$.dirty[0]) | (6291456 & t.$$.dirty[4]) &&
          (J && !Rt
            ? fn(
                oo,
                (At.crop = { maskOpacity: 0.85, maskMarkupOpacity: 0.85 }),
                At
              )
            : delete At.crop),
        8388608 & t.$$.dirty[4] &&
          Lt &&
          (() => {
            const t = Et.filter((t) => !/^image\-selection\-guide/.test(t.id));
            fn(ko, (Et = J ? [...t, ...Lt] : t), Et);
          })(),
        16 & t.$$.dirty[4] && o(148, (x = "short" !== Y.verticalSpace)),
        (4194304 & t.$$.dirty[3]) | (16777248 & t.$$.dirty[4]) &&
          o(19, (w = x && !h && "always" !== Ee)),
        (4 & t.$$.dirty[0]) | (32 & t.$$.dirty[3]) && o(149, (S = pe && he)),
        (64 & t.$$.dirty[3]) | (50331648 & t.$$.dirty[4]) &&
          o(150, (k = me ? x && S : S)),
        (16 & t.$$.dirty[3]) | (67108864 & t.$$.dirty[4]) &&
          o(20, (C = ue || k)),
        67108864 & t.$$.dirty[4] && (k || o(4, (Qo = Jo))),
        16 & t.$$.dirty[0] && o(21, (M = { name: qo, selected: Qo })),
        (8 & t.$$.dirty[0]) |
          (16 & t.$$.dirty[3]) |
          (67108864 & t.$$.dirty[4]) &&
          o(
            12,
            (P = [
              ue && { id: qo + "-rotation", label: Ie.cropLabelTabRotation },
              k && { id: qo + "-zoom", label: Ie.cropLabelTabZoom },
            ].filter(Boolean))
          ),
        4096 & t.$$.dirty[0] && o(22, (R = P.map((t) => t.id))),
        (32 & t.$$.dirty[0]) | (32 & t.$$.dirty[4]) &&
          Ko &&
          !Ko.children.length &&
          h &&
          Ko.dispatchEvent(new CustomEvent("measure", { detail: Ko.rect })),
        (512 & t.$$.dirty[0]) | (134217728 & t.$$.dirty[4]) &&
          zt &&
          ei.set(J ? 0 : 20),
        268435456 & t.$$.dirty[4] &&
          o(23, (A = Bt ? `transform: translateY(${Bt}px)` : void 0));
    }),
    [
      ne,
      ae,
      pe,
      Ie,
      Qo,
      Ko,
      L,
      z,
      n,
      J,
      g,
      b,
      P,
      ti,
      r,
      ft,
      f,
      $,
      y,
      w,
      C,
      M,
      R,
      A,
      Ot,
      jt,
      Xt,
      Yt,
      Gt,
      Fe,
      je,
      Ne,
      Ue,
      Xe,
      Ye,
      qe,
      Ke,
      Je,
      to,
      eo,
      oo,
      no,
      ro,
      ao,
      so,
      lo,
      co,
      uo,
      po,
      ho,
      mo,
      go,
      fo,
      $o,
      yo,
      bo,
      xo,
      vo,
      wo,
      So,
      ko,
      Co,
      Mo,
      () => {
        (Le = "select"),
          fn(Ne, (et = !0), et),
          fn(uo, (it = It(st)), it),
          (To = lt),
          (Po = wt(gt(H), To)),
          (Ro = wt(gt(ct), To));
      },
      ({ detail: t }) => {
        const { boundsLimited: e, boundsIntent: o } = Ao(
          t.direction,
          t.translation
        );
        fn(po, (dt = o), dt), fn(co, (st = e), st);
      },
      ({ detail: t }) => {
        const { boundsLimited: e } = Ao(t.direction, t.translation);
        fn(Ne, (et = !1), et),
          fn(po, (dt = void 0), dt),
          Q(t.translation) && (fn(co, (st = e), st), Ve.write()),
          fn(uo, (it = void 0), it),
          (Le = void 0);
      },
      () => {
        (Le = "rotate"), fn(Ne, (et = !0), et), fn(go, (pt = It(L)), pt);
      },
      (t) => {
        fn(ao, (z = t), z);
      },
      (t) => {
        fn(Ne, (et = !1), et),
          fn(ao, (z = t), z),
          Ve.write(),
          fn(go, (pt = void 0), pt);
      },
      () => {
        (Le = "pan"), (Lo = void 0), fn(Ne, (et = !0), et), (Io = It(L));
      },
      ({ detail: t }) => Fo(t),
      ({ detail: t }) => {
        fn(Ne, (et = !1), et),
          (Q(t.translation) > 0 || 0 !== t.scalar) && (Fo(t), Ve.write()),
          fn(mo, (ht = void 0), ht),
          (Io = void 0);
      },
      ({ detail: t }) => {
        (Lo = t.translation), fn(Ne, (et = !1), et);
      },
      zo,
      Bo,
      Oo,
      () => {
        (Le = "zoom"), fn(Ne, (et = !0), et), (Io = It(L));
      },
      (t) => {
        Do(t);
      },
      (t) => {
        Do(t), Ve.write(), fn(Ne, (et = !1), et), (Io = void 0);
      },
      () => {
        (Le = "zoom"), Io || ((Wo = It(L)), fn(Ne, (et = !0), et));
      },
      ({ detail: t }) => {
        Wo && _o(t);
      },
      ({ detail: t }) => {
        Wo &&
          (fn(Ne, (et = !1), et),
          _o(t),
          fn(mo, (ht = void 0), ht),
          (Wo = void 0),
          Ve.write());
      },
      (t) => {
        const e = Um(t, ft, bt);
        if (ye && !Kt(st, e)) return;
        (Le = "zoom"),
          fn(Ne, (et = !0), et),
          t.preventDefault(),
          t.stopPropagation();
        const o = Gl(t),
          i = 1 + o / 100,
          n = It(L),
          r = 1 === Math.min(L.width / H.width, L.height / H.height);
        if (ce && U) {
          const t = We(L, F, z);
          if (ze() && t && o > 0 && d) {
            fn(Ne, (et = !1), et);
            const t = j(z) ? Ft({ height: F.width, width: F.height }) : Ft(F);
            if (Ht(n, t)) return;
            if ((clearTimeout(Zo), Ht(Ve.state.crop, t))) return;
            return fn(fo, (L = t), L), void Ve.write();
          }
        }
        let a = _t(L);
        if ($e && o < 0 && !r) {
          const t = rt(q(e), st),
            o = Math.min(st.width / L.width, st.height / L.height),
            i = Vt(It(st), 1.1);
          a = Kt(i, e) ? nt(It(L), at(t, 1 / o)) : a;
        }
        let s = Vt(It(L), i, a);
        Ct(vt[1], s) || (s = Dt(_t(s), vt[1])),
          Ct(s, vt[0]) || (s = Dt(_t(s), vt[0])),
          Ht(n, s, Eo)
            ? fn(Ne, (et = !1), et)
            : (fn(fo, (L = oe(s, (t) => Eo(t, 5))), L),
              fn(Ne, (et = !1), et),
              clearTimeout(Zo),
              (Zo = setTimeout(() => {
                Ve.write();
              }, 500)));
      },
      jo,
      Ho,
      Uo,
      Xo,
      Go,
      qo,
      ei,
      Te,
      "crop",
      re,
      se,
      le,
      ce,
      de,
      ue,
      he,
      me,
      ge,
      fe,
      $e,
      ye,
      be,
      xe,
      ve,
      we,
      Se,
      ke,
      Ce,
      Me,
      Pe,
      Re,
      Ae,
      Ee,
      No,
      i,
      I,
      F,
      B,
      O,
      _,
      v,
      V,
      d,
      H,
      U,
      Y,
      h,
      et,
      it,
      st,
      lt,
      ut,
      bt,
      a,
      s,
      Tt,
      l,
      c,
      u,
      p,
      m,
      Pt,
      Rt,
      At,
      Lt,
      x,
      S,
      k,
      zt,
      Bt,
      function (e) {
        tr(t, e);
      },
      ({ detail: t }) => o(4, (Qo = t)),
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (Ko = t), o(5, Ko);
        });
      },
      (t) => Hm(t),
      function (t) {
        (ti = t), o(13, ti);
      },
      function (e) {
        tr(t, e);
      },
    ]
  );
}
var Tg = {
  util: [
    "crop",
    class extends Br {
      constructor(t) {
        super(),
          zr(
            this,
            t,
            Mg,
            wg,
            sn,
            {
              name: 91,
              isActive: 0,
              stores: 92,
              cropImageSelectionCornerStyle: 1,
              cropWillRenderImageSelectionGuides: 93,
              cropAutoCenterImageSelectionTimeout: 94,
              cropEnableZoomMatchImageAspectRatio: 95,
              cropEnableRotateMatchImageAspectRatio: 96,
              cropEnableRotationInput: 97,
              cropEnableZoom: 2,
              cropEnableZoomInput: 98,
              cropEnableZoomAutoHide: 99,
              cropEnableImageSelection: 100,
              cropEnableInfoIndicator: 101,
              cropEnableZoomTowardsWheelPosition: 102,
              cropEnableLimitWheelInputToCropSelection: 103,
              cropEnableCenterImageSelection: 104,
              cropEnableButtonRotateLeft: 105,
              cropEnableButtonRotateRight: 106,
              cropEnableButtonFlipHorizontal: 107,
              cropEnableButtonFlipVertical: 108,
              cropSelectPresetOptions: 109,
              cropEnableSelectPreset: 110,
              cropEnableFilterMatchAspectRatio: 111,
              cropSelectPresetFilter: 90,
              cropEnableButtonToggleCropLimit: 112,
              cropWillRenderTools: 113,
              cropActiveTransformTool: 114,
              cropMinimizeToolbar: 115,
              locale: 3,
            },
            [-1, -1, -1, -1, -1, -1, -1]
          );
      }
      get name() {
        return this.$$.ctx[91];
      }
      get isActive() {
        return this.$$.ctx[0];
      }
      set isActive(t) {
        this.$set({ isActive: t }), hr();
      }
      get stores() {
        return this.$$.ctx[92];
      }
      set stores(t) {
        this.$set({ stores: t }), hr();
      }
      get cropImageSelectionCornerStyle() {
        return this.$$.ctx[1];
      }
      set cropImageSelectionCornerStyle(t) {
        this.$set({ cropImageSelectionCornerStyle: t }), hr();
      }
      get cropWillRenderImageSelectionGuides() {
        return this.$$.ctx[93];
      }
      set cropWillRenderImageSelectionGuides(t) {
        this.$set({ cropWillRenderImageSelectionGuides: t }), hr();
      }
      get cropAutoCenterImageSelectionTimeout() {
        return this.$$.ctx[94];
      }
      set cropAutoCenterImageSelectionTimeout(t) {
        this.$set({ cropAutoCenterImageSelectionTimeout: t }), hr();
      }
      get cropEnableZoomMatchImageAspectRatio() {
        return this.$$.ctx[95];
      }
      set cropEnableZoomMatchImageAspectRatio(t) {
        this.$set({ cropEnableZoomMatchImageAspectRatio: t }), hr();
      }
      get cropEnableRotateMatchImageAspectRatio() {
        return this.$$.ctx[96];
      }
      set cropEnableRotateMatchImageAspectRatio(t) {
        this.$set({ cropEnableRotateMatchImageAspectRatio: t }), hr();
      }
      get cropEnableRotationInput() {
        return this.$$.ctx[97];
      }
      set cropEnableRotationInput(t) {
        this.$set({ cropEnableRotationInput: t }), hr();
      }
      get cropEnableZoom() {
        return this.$$.ctx[2];
      }
      set cropEnableZoom(t) {
        this.$set({ cropEnableZoom: t }), hr();
      }
      get cropEnableZoomInput() {
        return this.$$.ctx[98];
      }
      set cropEnableZoomInput(t) {
        this.$set({ cropEnableZoomInput: t }), hr();
      }
      get cropEnableZoomAutoHide() {
        return this.$$.ctx[99];
      }
      set cropEnableZoomAutoHide(t) {
        this.$set({ cropEnableZoomAutoHide: t }), hr();
      }
      get cropEnableImageSelection() {
        return this.$$.ctx[100];
      }
      set cropEnableImageSelection(t) {
        this.$set({ cropEnableImageSelection: t }), hr();
      }
      get cropEnableInfoIndicator() {
        return this.$$.ctx[101];
      }
      set cropEnableInfoIndicator(t) {
        this.$set({ cropEnableInfoIndicator: t }), hr();
      }
      get cropEnableZoomTowardsWheelPosition() {
        return this.$$.ctx[102];
      }
      set cropEnableZoomTowardsWheelPosition(t) {
        this.$set({ cropEnableZoomTowardsWheelPosition: t }), hr();
      }
      get cropEnableLimitWheelInputToCropSelection() {
        return this.$$.ctx[103];
      }
      set cropEnableLimitWheelInputToCropSelection(t) {
        this.$set({ cropEnableLimitWheelInputToCropSelection: t }), hr();
      }
      get cropEnableCenterImageSelection() {
        return this.$$.ctx[104];
      }
      set cropEnableCenterImageSelection(t) {
        this.$set({ cropEnableCenterImageSelection: t }), hr();
      }
      get cropEnableButtonRotateLeft() {
        return this.$$.ctx[105];
      }
      set cropEnableButtonRotateLeft(t) {
        this.$set({ cropEnableButtonRotateLeft: t }), hr();
      }
      get cropEnableButtonRotateRight() {
        return this.$$.ctx[106];
      }
      set cropEnableButtonRotateRight(t) {
        this.$set({ cropEnableButtonRotateRight: t }), hr();
      }
      get cropEnableButtonFlipHorizontal() {
        return this.$$.ctx[107];
      }
      set cropEnableButtonFlipHorizontal(t) {
        this.$set({ cropEnableButtonFlipHorizontal: t }), hr();
      }
      get cropEnableButtonFlipVertical() {
        return this.$$.ctx[108];
      }
      set cropEnableButtonFlipVertical(t) {
        this.$set({ cropEnableButtonFlipVertical: t }), hr();
      }
      get cropSelectPresetOptions() {
        return this.$$.ctx[109];
      }
      set cropSelectPresetOptions(t) {
        this.$set({ cropSelectPresetOptions: t }), hr();
      }
      get cropEnableSelectPreset() {
        return this.$$.ctx[110];
      }
      set cropEnableSelectPreset(t) {
        this.$set({ cropEnableSelectPreset: t }), hr();
      }
      get cropEnableFilterMatchAspectRatio() {
        return this.$$.ctx[111];
      }
      set cropEnableFilterMatchAspectRatio(t) {
        this.$set({ cropEnableFilterMatchAspectRatio: t }), hr();
      }
      get cropSelectPresetFilter() {
        return this.$$.ctx[90];
      }
      set cropSelectPresetFilter(t) {
        this.$set({ cropSelectPresetFilter: t }), hr();
      }
      get cropEnableButtonToggleCropLimit() {
        return this.$$.ctx[112];
      }
      set cropEnableButtonToggleCropLimit(t) {
        this.$set({ cropEnableButtonToggleCropLimit: t }), hr();
      }
      get cropWillRenderTools() {
        return this.$$.ctx[113];
      }
      set cropWillRenderTools(t) {
        this.$set({ cropWillRenderTools: t }), hr();
      }
      get cropActiveTransformTool() {
        return this.$$.ctx[114];
      }
      set cropActiveTransformTool(t) {
        this.$set({ cropActiveTransformTool: t }), hr();
      }
      get cropMinimizeToolbar() {
        return this.$$.ctx[115];
      }
      set cropMinimizeToolbar(t) {
        this.$set({ cropMinimizeToolbar: t }), hr();
      }
      get locale() {
        return this.$$.ctx[3];
      }
      set locale(t) {
        this.$set({ locale: t }), hr();
      }
    },
  ],
};
function Pg(t) {
  let e,
    o,
    i,
    n,
    r,
    a,
    s,
    l = t[68],
    c = (S(t[68].label) ? t[68].label(t[2]) : t[68].label) + "";
  function d(...e) {
    return t[48](t[68], ...e);
  }
  const u = () => t[49](o, l),
    p = () => t[49](null, l);
  return {
    c() {
      (e = Tn("div")),
        (o = Tn("div")),
        (i = An()),
        (n = Tn("span")),
        (r = Rn(c)),
        zn(o, "class", Ig),
        zn(e, "slot", "option"),
        zn(e, "class", "PinturaFilterOption");
    },
    m(t, l) {
      Cn(t, e, l),
        kn(e, o),
        u(),
        kn(e, i),
        kn(e, n),
        kn(n, r),
        a || ((s = [In(o, "measure", d), $n(bs.call(null, o))]), (a = !0));
    },
    p(e, o) {
      l !== (t = e)[68] && (p(), (l = t[68]), u()),
        (4 & o[0]) | (64 & o[2]) &&
          c !== (c = (S(t[68].label) ? t[68].label(t[2]) : t[68].label) + "") &&
          On(r, c);
    },
    d(t) {
      t && Mn(e), p(), (a = !1), rn(s);
    },
  };
}
function Rg(t) {
  let e, o;
  return (
    (e = new dd({
      props: {
        locale: t[2],
        layout: "row",
        options: t[3],
        selectedIndex: t[10],
        onchange: t[29],
        $$slots: {
          option: [
            Pg,
            ({ option: t }) => ({ 68: t }),
            ({ option: t }) => [0, 0, t ? 64 : 0],
          ],
        },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        4 & o[0] && (i.locale = t[2]),
          8 & o[0] && (i.options = t[3]),
          1024 & o[0] && (i.selectedIndex = t[10]),
          (516 & o[0]) | (192 & o[2]) && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Ag(t) {
  let e, o, i, n, r, a, s, l;
  function c(e) {
    t[51](e);
  }
  function d(e) {
    t[52](e);
  }
  function u(e) {
    t[53](e);
  }
  let p = {
    elasticity: t[15] * t[16],
    onscroll: t[50],
    $$slots: { default: [Rg] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[4] && (p.maskFeatherStartOpacity = t[4]),
    void 0 !== t[5] && (p.maskFeatherEndOpacity = t[5]),
    void 0 !== t[6] && (p.maskFeatherSize = t[6]),
    (o = new Ql({ props: p })),
    or.push(() => Er(o, "maskFeatherStartOpacity", c)),
    or.push(() => Er(o, "maskFeatherEndOpacity", d)),
    or.push(() => Er(o, "maskFeatherSize", u)),
    o.$on("measure", t[54]),
    {
      c() {
        (e = Tn("div")),
          Ir(o.$$.fragment),
          zn(e, "slot", "footer"),
          zn(e, "style", t[11]);
      },
      m(i, n) {
        Cn(i, e, n),
          Lr(o, e, null),
          (a = !0),
          s || ((l = In(e, "transitionend", t[27])), (s = !0));
      },
      p(t, s) {
        const l = {};
        128 & s[0] && (l.onscroll = t[50]),
          (1548 & s[0]) | (128 & s[2]) && (l.$$scope = { dirty: s, ctx: t }),
          !i &&
            16 & s[0] &&
            ((i = !0), (l.maskFeatherStartOpacity = t[4]), dr(() => (i = !1))),
          !n &&
            32 & s[0] &&
            ((n = !0), (l.maskFeatherEndOpacity = t[5]), dr(() => (n = !1))),
          !r &&
            64 & s[0] &&
            ((r = !0), (l.maskFeatherSize = t[6]), dr(() => (r = !1))),
          o.$set(l),
          (!a || 2048 & s[0]) && zn(e, "style", t[11]);
      },
      i(t) {
        a || (vr(o.$$.fragment, t), (a = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), (a = !1);
      },
      d(t) {
        t && Mn(e), Fr(o), (s = !1), l();
      },
    }
  );
}
function Eg(t) {
  let e, o;
  return (
    (e = new vm({ props: { $$slots: { footer: [Ag] }, $$scope: { ctx: t } } })),
    e.$on("measure", t[55]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        (4092 & o[0]) | (128 & o[2]) && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
let Ig = "PinturaFilterPreview";
function Lg(t, e, o) {
  let i,
    n,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    h,
    m,
    g,
    f,
    $,
    y,
    b,
    x,
    v = Qi,
    w = () => (v(), (v = ln(M, (t) => o(40, (u = t)))), M),
    k = Qi,
    C = () => (k(), (k = ln(T, (t) => o(45, (y = t)))), T);
  t.$$.on_destroy.push(() => v()), t.$$.on_destroy.push(() => k());
  let { isActive: M } = e;
  w();
  let { isActiveFraction: T } = e;
  C();
  let { stores: P } = e,
    { locale: R } = e,
    { filterFunctions: A } = e,
    { filterOptions: E } = e;
  const {
    history: I,
    interfaceImages: L,
    stageRect: F,
    utilRect: z,
    animation: B,
    elasticityMultiplier: O,
    scrollElasticity: D,
    imageSize: W,
    imagePreview: _,
    imageCropRect: Z,
    imageRotation: V,
    imageFlipX: j,
    imageFlipY: N,
    imageBackgroundColor: H,
    imageGamma: U,
    imageColorMatrix: Y,
  } = P;
  dn(t, F, (t) => o(42, (h = t))),
    dn(t, z, (t) => o(41, (p = t))),
    dn(t, B, (t) => o(39, (d = t))),
    dn(t, W, (t) => o(57, (f = t))),
    dn(t, _, (t) => o(44, (g = t))),
    dn(t, H, (t) => o(58, ($ = t))),
    dn(t, U, (t) => o(43, (m = t))),
    dn(t, Y, (t) => o(36, (a = t)));
  const G = Wr({});
  dn(t, G, (t) => o(37, (s = t)));
  const J = (t, e) => fn(G, (s[t.value] = e), s),
    Q = _r(G, (t) => {
      if (!t[void 0]) return;
      const e = t[void 0];
      return l && vt(l, e) ? l : gt(e);
    });
  dn(t, Q, (t) => o(56, (l = t)));
  const tt = _r([M, Q, Z, W, V, j, N], ([t, e, o, i, n, r, a], s) => {
    if (!t || !e || !i) return c;
    const l = Ft(i),
      d = _t(l),
      u = ia(i, o, n),
      p = _t(u),
      h = rt(q(d), p),
      m = K(q(h)),
      g = Math.max(e.width / o.width, e.height / o.height);
    s({
      origin: m,
      translation: h,
      rotation: { x: a ? Math.PI : 0, y: r ? Math.PI : 0, z: n },
      scale: g,
    });
  });
  dn(t, tt, (t) => o(38, (c = t)));
  const et = ss(d ? 20 : 0);
  let ot;
  dn(t, et, (t) => o(46, (b = t)));
  const it = {};
  let nt,
    at,
    st,
    lt,
    ct,
    dt = { x: 0, y: 0 };
  const ut = Wr([]);
  dn(t, ut, (t) => o(47, (x = t)));
  const pt = (t) => {
    const e = {
      ...t,
      data: g,
      size: f,
      offset: { ...t.offset },
      mask: { ...t.mask },
      backgroundColor: $,
    };
    return (e.opacity = y), (e.offset.y += b), (e.mask.y += b), e;
  };
  qn(() => {
    L.set([]);
  });
  return (
    (t.$$set = (t) => {
      "isActive" in t && w(o(0, (M = t.isActive))),
        "isActiveFraction" in t && C(o(1, (T = t.isActiveFraction))),
        "stores" in t && o(31, (P = t.stores)),
        "locale" in t && o(2, (R = t.locale)),
        "filterFunctions" in t && o(32, (A = t.filterFunctions)),
        "filterOptions" in t && o(3, (E = t.filterOptions));
    }),
    (t.$$.update = () => {
      if (
        (8 & t.$$.dirty[0] && o(35, (i = Fc(E))),
        48 & t.$$.dirty[1] &&
          o(
            10,
            (n = ((t, e) => {
              if (!t || !t.filter || !e) return 0;
              const o = t.filter;
              return e.findIndex(([t]) => {
                if (!A[t]) return !1;
                const e = A[t]();
                return la(e, o);
              });
            })(a, i))
          ),
        768 & t.$$.dirty[1] && d && et.set(u ? 0 : 20),
        3584 & t.$$.dirty[1] && u && p && h)
      ) {
        const t = h.y + h.height + p.y;
        o(34, (ct = { x: h.x - p.x, y: t }));
      }
      if (
        (496 & t.$$.dirty[0]) | (4350 & t.$$.dirty[1]) &&
        c &&
        ct &&
        dt &&
        lt &&
        ot
      ) {
        const t = ct.x + lt.x + dt.x,
          e = ct.y,
          o = lt.x + ct.x,
          n = o + lt.width;
        ut.set(
          i
            .map(([i], r) => {
              const l = s[i],
                d = dt.x + l.x,
                u = d + l.width;
              if (u < 0 || d > lt.width) return !1;
              const p = t + l.x,
                h = e + l.y,
                g = ((t) => ({
                  origin: q(t.origin),
                  translation: q(t.translation),
                  rotation: { ...t.rotation },
                  scale: t.scale,
                }))(c);
              g.offset = X(0.5 * l.width + p, 0.5 * l.height + h);
              (g.maskOpacity = 1),
                (g.mask = Wt(p + 0, h, l.width + 0, l.height)),
                (g.maskFeather = [1, 0, 1, 0, 1, n, 1, n]),
                d < st &&
                  nt < 1 &&
                  ((g.maskFeather[0] = nt),
                  (g.maskFeather[1] = o),
                  (g.maskFeather[2] = 1),
                  (g.maskFeather[3] = o + st)),
                u > lt.width - st &&
                  at < 1 &&
                  ((g.maskFeather[4] = at),
                  (g.maskFeather[5] = n - st),
                  (g.maskFeather[6] = 1),
                  (g.maskFeather[7] = n)),
                (g.maskCornerRadius = ot[i]);
              let f =
                (a &&
                  Object.keys(a)
                    .filter((t) => "filter" != t)
                    .map((t) => a[t])) ||
                [];
              return (
                S(A[i]) && f.push(A[i]()),
                (g.colorMatrix = f.length ? Ki(f) : void 0),
                (g.gamma = m),
                g
              );
            })
            .filter(Boolean)
        );
      }
      122880 & t.$$.dirty[1] && (y > 0 && x ? L.set(x.map(pt)) : L.set([])),
        32768 & t.$$.dirty[1] &&
          o(11, (r = b ? `transform: translateY(${b}px)` : void 0));
    }),
    [
      M,
      T,
      R,
      E,
      nt,
      at,
      st,
      dt,
      lt,
      it,
      n,
      r,
      F,
      z,
      B,
      O,
      D,
      W,
      _,
      H,
      U,
      Y,
      G,
      J,
      Q,
      tt,
      et,
      (t) => {
        t.target.className === Ig &&
          o(
            33,
            (ot = Object.keys(it).reduce((t, e) => {
              const o = it[e],
                i = getComputedStyle(o),
                n = ["top-left", "top-right", "bottom-left", "bottom-right"]
                  .map((t) => i.getPropertyValue(`border-${t}-radius`))
                  .map(Yl)
                  .map((t) => 1.25 * t);
              return (t[e] = n), t;
            }, {}))
          );
      },
      ut,
      ({ value: t }) => {
        fn(Y, (a = { ...a, filter: S(A[t]) ? A[t]() : void 0 }), a), I.write();
      },
      "filter",
      P,
      A,
      ot,
      ct,
      i,
      a,
      s,
      c,
      d,
      u,
      p,
      h,
      m,
      g,
      y,
      b,
      x,
      (t, e) => J(t, e.detail),
      function (t, e) {
        or[t ? "unshift" : "push"](() => {
          (it[e.value] = t), o(9, it);
        });
      },
      (t) => o(7, (dt = t)),
      function (t) {
        (nt = t), o(4, nt);
      },
      function (t) {
        (at = t), o(5, at);
      },
      function (t) {
        (st = t), o(6, st);
      },
      (t) => o(8, (lt = t.detail)),
      function (e) {
        tr(t, e);
      },
    ]
  );
}
var Fg = {
  util: [
    "filter",
    class extends Br {
      constructor(t) {
        super(),
          zr(
            this,
            t,
            Lg,
            Eg,
            sn,
            {
              name: 30,
              isActive: 0,
              isActiveFraction: 1,
              stores: 31,
              locale: 2,
              filterFunctions: 32,
              filterOptions: 3,
            },
            [-1, -1, -1]
          );
      }
      get name() {
        return this.$$.ctx[30];
      }
      get isActive() {
        return this.$$.ctx[0];
      }
      set isActive(t) {
        this.$set({ isActive: t }), hr();
      }
      get isActiveFraction() {
        return this.$$.ctx[1];
      }
      set isActiveFraction(t) {
        this.$set({ isActiveFraction: t }), hr();
      }
      get stores() {
        return this.$$.ctx[31];
      }
      set stores(t) {
        this.$set({ stores: t }), hr();
      }
      get locale() {
        return this.$$.ctx[2];
      }
      set locale(t) {
        this.$set({ locale: t }), hr();
      }
      get filterFunctions() {
        return this.$$.ctx[32];
      }
      set filterFunctions(t) {
        this.$set({ filterFunctions: t }), hr();
      }
      get filterOptions() {
        return this.$$.ctx[3];
      }
      set filterOptions(t) {
        this.$set({ filterOptions: t }), hr();
      }
    },
  ],
};
function zg(t) {
  let e,
    o,
    i = t[37].label + "";
  return {
    c() {
      (e = Tn("span")), (o = Rn(i));
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, e) {
      64 & e[1] && i !== (i = t[37].label + "") && On(o, i);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Bg(t) {
  let e, o;
  const i = [{ class: "PinturaControlList" }, { tabs: t[1] }, t[3]];
  let n = {
    $$slots: {
      default: [
        zg,
        ({ tab: t }) => ({ 37: t }),
        ({ tab: t }) => [0, t ? 64 : 0],
      ],
    },
    $$scope: { ctx: t },
  };
  for (let t = 0; t < i.length; t += 1) n = en(n, i[t]);
  return (
    (e = new fl({ props: n })),
    e.$on("select", t[22]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const n =
          10 & o[0]
            ? Rr(i, [i[0], 2 & o[0] && { tabs: t[1] }, 8 & o[0] && Ar(t[3])])
            : {};
        192 & o[1] && (n.$$scope = { dirty: o, ctx: t }), e.$set(n);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Og(t) {
  let e, o;
  const i = [t[5][t[36]]];
  let n = {};
  for (let t = 0; t < i.length; t += 1) n = en(n, i[t]);
  return (
    (e = new Cm({ props: n })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const n = (32 & o[0]) | (32 & o[1]) ? Rr(i, [Ar(t[5][t[36]])]) : {};
        e.$set(n);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Dg(t) {
  let e, o, i, n, r;
  o = new Ql({
    props: {
      elasticity: t[9] * t[8],
      class: "PinturaControlListScroller",
      $$slots: { default: [Bg] },
      $$scope: { ctx: t },
    },
  });
  const a = [
    { class: "PinturaControlPanels" },
    { panelClass: "PinturaControlPanel" },
    { panels: t[4] },
    t[3],
  ];
  let s = {
    $$slots: {
      default: [
        Og,
        ({ panel: t }) => ({ 36: t }),
        ({ panel: t }) => [0, t ? 32 : 0],
      ],
    },
    $$scope: { ctx: t },
  };
  for (let t = 0; t < a.length; t += 1) s = en(s, a[t]);
  return (
    (n = new Pl({ props: s })),
    {
      c() {
        (e = Tn("div")),
          Ir(o.$$.fragment),
          (i = An()),
          Ir(n.$$.fragment),
          zn(e, "slot", "footer"),
          zn(e, "style", t[6]);
      },
      m(t, a) {
        Cn(t, e, a), Lr(o, e, null), kn(e, i), Lr(n, e, null), (r = !0);
      },
      p(t, i) {
        const s = {};
        (14 & i[0]) | (128 & i[1]) && (s.$$scope = { dirty: i, ctx: t }),
          o.$set(s);
        const l =
          24 & i[0]
            ? Rr(a, [
                a[0],
                a[1],
                16 & i[0] && { panels: t[4] },
                8 & i[0] && Ar(t[3]),
              ])
            : {};
        (32 & i[0]) | (160 & i[1]) && (l.$$scope = { dirty: i, ctx: t }),
          n.$set(l),
          (!r || 64 & i[0]) && zn(e, "style", t[6]);
      },
      i(t) {
        r || (vr(o.$$.fragment, t), vr(n.$$.fragment, t), (r = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), wr(n.$$.fragment, t), (r = !1);
      },
      d(t) {
        t && Mn(e), Fr(o), Fr(n);
      },
    }
  );
}
function Wg(t) {
  let e, o;
  return (
    (e = new vm({ props: { $$slots: { footer: [Dg] }, $$scope: { ctx: t } } })),
    e.$on("measure", t[23]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        (126 & o[0]) | (128 & o[1]) && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function _g(t, e, o) {
  let i,
    n,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    h = Qi,
    m = () => (h(), (h = ln(f, (t) => o(20, (u = t)))), f);
  t.$$.on_destroy.push(() => h());
  let { stores: g } = e,
    { isActive: f } = e;
  m();
  let { locale: $ = {} } = e,
    { finetuneControlConfiguration: y } = e,
    { finetuneOptions: b } = e;
  const {
    history: x,
    animation: v,
    scrollElasticity: w,
    elasticityMultiplier: k,
    rangeInputElasticity: C,
    imageColorMatrix: M,
    imageConvolutionMatrix: P,
    imageGamma: R,
    imageVignette: A,
    imageNoise: E,
  } = g;
  dn(t, v, (t) => o(19, (d = t)));
  const I = {
      imageColorMatrix: M,
      imageConvolutionMatrix: P,
      imageGamma: R,
      imageVignette: A,
      imageNoise: E,
    },
    L = "finetune-" + T(),
    F = Wr({});
  dn(t, F, (t) => o(18, (c = t)));
  const z = Wr({});
  dn(t, z, (t) => o(5, (l = t)));
  let B = [];
  const O = ss(d ? 20 : 0);
  dn(t, O, (t) => o(21, (p = t)));
  return (
    (t.$$set = (t) => {
      "stores" in t && o(14, (g = t.stores)),
        "isActive" in t && m(o(0, (f = t.isActive))),
        "locale" in t && o(15, ($ = t.locale)),
        "finetuneControlConfiguration" in t &&
          o(16, (y = t.finetuneControlConfiguration)),
        "finetuneOptions" in t && o(17, (b = t.finetuneOptions));
    }),
    (t.$$.update = () => {
      var e;
      163840 & t.$$.dirty[0] &&
        o(
          1,
          (i = b ? b.map(([t, e]) => ({ id: t, label: S(e) ? e($) : e })) : [])
        ),
        2 & t.$$.dirty[0] && o(2, (n = i.length && i[0].id)),
        4 & t.$$.dirty[0] && o(3, (r = { name: L, selected: n })),
        2 & t.$$.dirty[0] && o(4, (a = i.map((t) => t.id))),
        65536 & t.$$.dirty[0] &&
          y &&
          ((e = y),
          B && B.forEach((t) => t()),
          (B = a.map((t) => {
            const { getStore: o, getValue: i = W } = e[t];
            return o(I).subscribe((e) => {
              const o = null != e ? i(e) : e;
              fn(F, (c = { ...c, [t]: o }), c);
            });
          }))),
        327680 & t.$$.dirty[0] &&
          y &&
          c &&
          fn(
            z,
            (l = Object.keys(c).reduce((t, e) => {
              const {
                  base: o,
                  min: i,
                  max: n,
                  getLabel: r,
                  getStore: a,
                  setValue: s = (t, e) => t.set(e),
                } = y[e],
                l = a(I),
                d = null != c[e] ? c[e] : o;
              return (
                (t[e] = {
                  base: o,
                  min: i,
                  max: n,
                  value: d,
                  valueLabel: r ? r(d, i, n, n - i) : Math.round(100 * d),
                  oninputmove: (t) => {
                    s(l, t);
                  },
                  oninputend: (t) => {
                    s(l, t), x.write();
                  },
                  elasticity: k * C,
                  labelReset: $.labelReset,
                }),
                t
              );
            }, {})),
            l
          ),
        1572864 & t.$$.dirty[0] && d && O.set(u ? 0 : 20),
        2097152 & t.$$.dirty[0] &&
          o(6, (s = p ? `transform: translateY(${p}px)` : void 0));
    }),
    [
      f,
      i,
      n,
      r,
      a,
      l,
      s,
      v,
      w,
      k,
      F,
      z,
      O,
      "finetune",
      g,
      $,
      y,
      b,
      c,
      d,
      u,
      p,
      ({ detail: t }) => o(2, (n = t)),
      function (e) {
        tr(t, e);
      },
    ]
  );
}
var Zg = {
  util: [
    "finetune",
    class extends Br {
      constructor(t) {
        super(),
          zr(
            this,
            t,
            _g,
            Wg,
            sn,
            {
              name: 13,
              stores: 14,
              isActive: 0,
              locale: 15,
              finetuneControlConfiguration: 16,
              finetuneOptions: 17,
            },
            [-1, -1]
          );
      }
      get name() {
        return this.$$.ctx[13];
      }
      get stores() {
        return this.$$.ctx[14];
      }
      set stores(t) {
        this.$set({ stores: t }), hr();
      }
      get isActive() {
        return this.$$.ctx[0];
      }
      set isActive(t) {
        this.$set({ isActive: t }), hr();
      }
      get locale() {
        return this.$$.ctx[15];
      }
      set locale(t) {
        this.$set({ locale: t }), hr();
      }
      get finetuneControlConfiguration() {
        return this.$$.ctx[16];
      }
      set finetuneControlConfiguration(t) {
        this.$set({ finetuneControlConfiguration: t }), hr();
      }
      get finetuneOptions() {
        return this.$$.ctx[17];
      }
      set finetuneOptions(t) {
        this.$set({ finetuneOptions: t }), hr();
      }
    },
  ],
};
function Vg(t, e, o) {
  const i = t.slice();
  return (
    (i[47] = e[o].key),
    (i[48] = e[o].index),
    (i[49] = e[o].translate),
    (i[50] = e[o].scale),
    (i[14] = e[o].rotate),
    (i[51] = e[o].dir),
    (i[52] = e[o].center),
    (i[53] = e[o].type),
    i
  );
}
function jg(t) {
  let e, o;
  return {
    c() {
      (e = Tn("div")),
        zn(e, "class", "PinturaShapeManipulator"),
        zn(e, "data-control", "point"),
        zn(
          e,
          "style",
          (o = `pointer-events:none;transform: translate3d(${t[52].x}px, ${t[52].y}px, 0) scale(${t[5]}, ${t[5]}); opacity: ${t[6]}`)
        );
    },
    m(t, o) {
      Cn(t, e, o);
    },
    p(t, i) {
      104 & i[0] &&
        o !==
          (o = `pointer-events:none;transform: translate3d(${t[52].x}px, ${t[52].y}px, 0) scale(${t[5]}, ${t[5]}); opacity: ${t[6]}`) &&
        zn(e, "style", o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Ng(t, e) {
  let o, i, n, r, a, s, l, c, d;
  function u(...t) {
    return e[18](e[48], ...t);
  }
  let p = "edge" === e[53] && "both" !== e[2] && jg(e);
  return {
    key: t,
    first: null,
    c() {
      (o = Tn("div")),
        (s = An()),
        p && p.c(),
        (l = En()),
        zn(o, "role", "button"),
        zn(o, "aria-label", (i = `Drag ${e[53]} ${e[47]}`)),
        zn(o, "tabindex", (n = "edge" === e[53] ? -1 : 0)),
        zn(o, "class", "PinturaShapeManipulator"),
        zn(o, "data-control", (r = e[53])),
        zn(
          o,
          "style",
          (a = `cursor: ${
            e[51] ? e[51] + "-resize" : "move"
          }; transform: translate3d(${e[49].x}px, ${e[49].y}px, 0)${
            "edge" === e[53] ? ` rotate(${e[14]}rad)` : ""
          } scale(${"point" === e[53] ? e[5] : e[50].x}, ${
            "point" === e[53] ? e[5] : e[50].y
          }); opacity: ${e[6]}`)
        ),
        (this.first = o);
    },
    m(t, i) {
      Cn(t, o, i),
        Cn(t, s, i),
        p && p.m(t, i),
        Cn(t, l, i),
        c ||
          ((d = [
            In(o, "keydown", e[7]),
            In(o, "keyup", e[8]),
            In(o, "nudge", u),
            $n(Hl.call(null, o)),
            In(o, "interactionstart", function () {
              an(e[11]("start", e[48])) &&
                e[11]("start", e[48]).apply(this, arguments);
            }),
            In(o, "interactionupdate", function () {
              an(e[11]("move", e[48])) &&
                e[11]("move", e[48]).apply(this, arguments);
            }),
            In(o, "interactionend", function () {
              an(e[11]("end", e[48])) &&
                e[11]("end", e[48]).apply(this, arguments);
            }),
            $n(Nl.call(null, o)),
          ]),
          (c = !0));
    },
    p(t, s) {
      (e = t),
        8 & s[0] &&
          i !== (i = `Drag ${e[53]} ${e[47]}`) &&
          zn(o, "aria-label", i),
        8 & s[0] &&
          n !== (n = "edge" === e[53] ? -1 : 0) &&
          zn(o, "tabindex", n),
        8 & s[0] && r !== (r = e[53]) && zn(o, "data-control", r),
        104 & s[0] &&
          a !==
            (a = `cursor: ${
              e[51] ? e[51] + "-resize" : "move"
            }; transform: translate3d(${e[49].x}px, ${e[49].y}px, 0)${
              "edge" === e[53] ? ` rotate(${e[14]}rad)` : ""
            } scale(${"point" === e[53] ? e[5] : e[50].x}, ${
              "point" === e[53] ? e[5] : e[50].y
            }); opacity: ${e[6]}`) &&
          zn(o, "style", a),
        "edge" === e[53] && "both" !== e[2]
          ? p
            ? p.p(e, s)
            : ((p = jg(e)), p.c(), p.m(l.parentNode, l))
          : p && (p.d(1), (p = null));
    },
    d(t) {
      t && Mn(o), t && Mn(s), p && p.d(t), t && Mn(l), (c = !1), rn(d);
    },
  };
}
function Hg(t) {
  let e, o, i, n;
  return {
    c() {
      (e = Tn("div")),
        zn(e, "role", "button"),
        zn(e, "aria-label", "Drag rotator"),
        zn(e, "tabindex", "0"),
        zn(e, "class", "PinturaShapeManipulator"),
        zn(e, "data-control", "rotate"),
        zn(
          e,
          "style",
          (o = `transform: translate3d(${t[0].x}px, ${t[0].y}px, 0) scale(${t[5]}, ${t[5]}); opacity: ${t[6]}`)
        );
    },
    m(o, r) {
      Cn(o, e, r),
        i ||
          ((n = [
            In(e, "keydown", t[7]),
            In(e, "keyup", t[8]),
            In(e, "nudge", t[13]),
            $n(Hl.call(null, e)),
            In(e, "interactionstart", t[14]("start")),
            In(e, "interactionupdate", t[14]("move")),
            In(e, "interactionend", t[14]("end")),
            $n(Nl.call(null, e)),
          ]),
          (i = !0));
    },
    p(t, i) {
      97 & i[0] &&
        o !==
          (o = `transform: translate3d(${t[0].x}px, ${t[0].y}px, 0) scale(${t[5]}, ${t[5]}); opacity: ${t[6]}`) &&
        zn(e, "style", o);
    },
    d(t) {
      t && Mn(e), (i = !1), rn(n);
    },
  };
}
function Ug(t) {
  let e,
    o,
    i = [],
    n = new Map(),
    r = t[3];
  const a = (t) => t[47];
  for (let e = 0; e < r.length; e += 1) {
    let o = Vg(t, r, e),
      s = a(o);
    n.set(s, (i[e] = Ng(s, o)));
  }
  let s = t[1] && t[4] && Hg(t);
  return {
    c() {
      for (let t = 0; t < i.length; t += 1) i[t].c();
      (e = An()), s && s.c(), (o = En());
    },
    m(t, n) {
      for (let e = 0; e < i.length; e += 1) i[e].m(t, n);
      Cn(t, e, n), s && s.m(t, n), Cn(t, o, n);
    },
    p(t, l) {
      6636 & l[0] &&
        ((r = t[3]),
        (i = Pr(i, l, a, 1, t, r, n, e.parentNode, Mr, Ng, e, Vg))),
        t[1] && t[4]
          ? s
            ? s.p(t, l)
            : ((s = Hg(t)), s.c(), s.m(o.parentNode, o))
          : s && (s.d(1), (s = null));
    },
    i: Qi,
    o: Qi,
    d(t) {
      for (let e = 0; e < i.length; e += 1) i[e].d(t);
      t && Mn(e), s && s.d(t), t && Mn(o);
    },
  };
}
function Xg(t, e, o) {
  let i, n, r, a, s;
  const l = Kn(),
    c = 0.5 * V,
    d = Z - c,
    u = Z + c,
    p = -Z,
    h = p - c,
    m = p + c,
    g = _ - c,
    f = -_ + c,
    $ = c,
    y = -c,
    b = Z - V,
    x = b - c,
    v = b + c,
    S = _ - V,
    k = S - c,
    C = S + c,
    M = p - V,
    T = M + c,
    P = M - c,
    R = p + V,
    A = R + c,
    E = R - c;
  let { points: I = [] } = e,
    { rotatorPoint: L } = e,
    { visible: F = !1 } = e,
    { enableResizing: z = !0 } = e,
    { enableRotating: B = !0 } = e,
    O = !1;
  const D = ss(0.5, { precision: 1e-4, stiffness: 0.3, damping: 0.7 });
  dn(t, D, (t) => o(5, (a = t)));
  const W = ss(0, { precision: 0.001, stiffness: 0.3, damping: 0.7 });
  dn(t, W, (t) => o(6, (s = t)));
  const j = (t) => {
      let e = "";
      return (
        ((t <= u && t >= d) || (t >= h && t <= m)) && (e = "ns"),
        (t <= f || t >= g || (t >= y && t <= $)) && (e = "ew"),
        ((t >= k && t <= C) || (t <= A && t >= E)) && (e = "nesw"),
        ((t >= x && t <= v) || (t <= T && t >= P)) && (e = "nwse"),
        e
      );
    },
    N = (t, e) => {
      l("resizestart", { indexes: t, translation: U() }),
        l("resizemove", { indexes: t, translation: e }),
        l("resizeend", { indexes: t, translation: U() });
    };
  return (
    (t.$$set = (t) => {
      "points" in t && o(15, (I = t.points)),
        "rotatorPoint" in t && o(0, (L = t.rotatorPoint)),
        "visible" in t && o(16, (F = t.visible)),
        "enableResizing" in t && o(17, (z = t.enableResizing)),
        "enableRotating" in t && o(1, (B = t.enableRotating));
    }),
    (t.$$.update = () => {
      65536 & t.$$.dirty[0] && D.set(F ? 1 : 0.5),
        65536 & t.$$.dirty[0] && W.set(F ? 1 : 0),
        131072 & t.$$.dirty[0] && o(2, (i = !!z && (w(z) ? z : "both"))),
        32772 & t.$$.dirty[0] &&
          o(
            3,
            (n =
              (i &&
                ((t, e) => {
                  let o = 0;
                  const i = ut(t),
                    n = [],
                    r = t.length,
                    a = 2 === r,
                    s = "both" !== e;
                  for (; o < r; o++) {
                    const l = t[o - 1] || t[t.length - 1],
                      c = t[o],
                      d = t[o + 1] || t[0],
                      u = Math.atan2(d.y - c.y, d.x - c.x);
                    if (!s) {
                      const t = tt(X(l.x - c.x, l.y - c.y)),
                        e = tt(X(d.x - c.x, d.y - c.y)),
                        i = X(t.x + e.x, t.y + e.y);
                      n.push({
                        index: [o],
                        key: "point-" + o,
                        type: "point",
                        scale: { x: 1, y: 1 },
                        translate: { x: c.x, y: c.y },
                        angle: void 0,
                        rotate: a ? 0 : u,
                        center: c,
                        dir: a ? void 0 : j(Math.atan2(i.y, i.x)),
                      });
                    }
                    if (a) continue;
                    const p = X(
                      c.x + 0.5 * (d.x - c.x),
                      c.y + 0.5 * (d.y - c.y)
                    );
                    ("horizontal" === e && o % 2 == 0) ||
                      ("vertical" === e && o % 2 != 0) ||
                      n.push({
                        index: [o, o + 1 === r ? 0 : o + 1],
                        key: "edge-" + o,
                        type: "edge",
                        scale: { x: ct(c, d), y: 1 },
                        translate: { x: c.x, y: c.y },
                        angle: u,
                        rotate: u,
                        center: p,
                        dir: j(Math.atan2(i.y - p.y, i.x - p.x)),
                      });
                  }
                  return n;
                })(I, i)) ||
              [])
          ),
        32768 & t.$$.dirty[0] && o(4, (r = I.length > 2));
    }),
    [
      L,
      B,
      i,
      n,
      r,
      a,
      s,
      (t) => (O = t.shiftKey),
      (t) => (O = !1),
      D,
      W,
      (t, e) =>
        ({ detail: o }) => {
          const i = o && o.translation ? o.translation : X(0, 0);
          l("resize" + t, { ...o, indexes: e, translation: i, shiftKey: O });
        },
      N,
      ({ detail: t }) => {
        l("rotatestart", { translation: U() }),
          l("rotatemove", { translation: t }),
          l("rotateend", { translation: U() });
      },
      (t) =>
        ({ detail: e }) => {
          const o = e && e.translation ? e.translation : X(0, 0);
          l("rotate" + t, { translation: o, shiftKey: O });
        },
      I,
      F,
      z,
      (t, { detail: e }) => N(t, e),
    ]
  );
}
class Yg extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        Xg,
        Ug,
        sn,
        {
          points: 15,
          rotatorPoint: 0,
          visible: 16,
          enableResizing: 17,
          enableRotating: 1,
        },
        [-1, -1]
      );
  }
}
var Gg = (t, e) => {
  const o = Hm(t);
  return rt(o, e);
};
let qg = null;
let Kg = null;
var Jg = (t) => {
  if ((null === Kg && (Kg = c() && "visualViewport" in window), !Kg)) return !1;
  const e = visualViewport.height,
    o = () => {
      t(visualViewport.height < e ? "visible" : "hidden");
    };
  return (
    visualViewport.addEventListener("resize", o),
    () => visualViewport.removeEventListener("resize", o)
  );
};
function Qg(t) {
  let e, o, i, n, r, a, s, l, c, d;
  i = new Vl({
    props: { onclick: t[1], label: t[5], icon: t[7], hideLabel: !t[6] },
  });
  const u = t[20].default,
    p = un(u, t, t[19], null);
  return (
    (s = new Vl({
      props: {
        onclick: t[0],
        label: t[2],
        icon: t[4],
        hideLabel: !t[3],
        class: "PinturaInputFormButtonConfirm",
      },
    })),
    {
      c() {
        (e = Tn("div")),
          (o = Tn("div")),
          Ir(i.$$.fragment),
          (n = An()),
          (r = Tn("div")),
          p && p.c(),
          (a = An()),
          Ir(s.$$.fragment),
          zn(r, "class", "PinturaInputFormFields"),
          zn(o, "class", "PinturaInputFormInner"),
          zn(e, "class", "PinturaInputForm"),
          zn(e, "style", t[9]);
      },
      m(u, h) {
        Cn(u, e, h),
          kn(e, o),
          Lr(i, o, null),
          kn(o, n),
          kn(o, r),
          p && p.m(r, null),
          kn(o, a),
          Lr(s, o, null),
          t[21](e),
          (l = !0),
          c ||
            ((d = [
              In(e, "focusin", t[10]),
              In(e, "focusout", t[11]),
              In(e, "measure", t[12]),
              $n(bs.call(null, e)),
            ]),
            (c = !0));
      },
      p(t, o) {
        const n = {};
        2 & o[0] && (n.onclick = t[1]),
          32 & o[0] && (n.label = t[5]),
          128 & o[0] && (n.icon = t[7]),
          64 & o[0] && (n.hideLabel = !t[6]),
          i.$set(n),
          p && p.p && 524288 & o[0] && hn(p, u, t, t[19], o, null, null);
        const r = {};
        1 & o[0] && (r.onclick = t[0]),
          4 & o[0] && (r.label = t[2]),
          16 & o[0] && (r.icon = t[4]),
          8 & o[0] && (r.hideLabel = !t[3]),
          s.$set(r),
          (!l || 512 & o[0]) && zn(e, "style", t[9]);
      },
      i(t) {
        l || (vr(i.$$.fragment, t), vr(p, t), vr(s.$$.fragment, t), (l = !0));
      },
      o(t) {
        wr(i.$$.fragment, t), wr(p, t), wr(s.$$.fragment, t), (l = !1);
      },
      d(o) {
        o && Mn(e), Fr(i), p && p.d(o), Fr(s), t[21](null), (c = !1), rn(d);
      },
    }
  );
}
function tf(t, e, o) {
  let i,
    n,
    r,
    a,
    { $$slots: s = {}, $$scope: l } = e,
    { onconfirm: c } = e,
    { oncancel: d } = e,
    { autoFocus: u = !0 } = e,
    { autoPositionCursor: p = !0 } = e,
    { labelConfirm: h } = e,
    { labelConfirmShow: m = !0 } = e,
    { iconConfirm: g } = e,
    { labelCancel: f } = e,
    { labelCancelShow: $ = !1 } = e,
    { iconCancel: y } = e,
    { panelOffset: b = U() } = e,
    x = !1,
    v = void 0,
    w = void 0,
    S = "",
    k = 0;
  const C = () => {
      const t = a.querySelector("input, textarea");
      t.focus(), k >= 1 || t.select();
    },
    M = () => {
      (x = !0),
        P ||
          (!ze() && (null === qg && (qg = Le(/Android/)), !qg)) ||
          o(16, (S = "top:1em;bottom:auto;")),
        ze() &&
          ((t) => {
            let e;
            const o = (t) => (e = t.touches[0].screenY),
              i = (t) => {
                const o = t.touches[0].screenY,
                  i = t.target;
                /textarea/i.test(i.nodeName)
                  ? (o > e
                      ? 0 == i.scrollTop && t.preventDefault()
                      : o < e
                      ? i.scrollTop + i.offsetHeight == i.scrollHeight &&
                        t.preventDefault()
                      : t.preventDefault(),
                    (e = o))
                  : t.preventDefault();
              };
            t.addEventListener("touchstart", o),
              t.addEventListener("touchmove", i);
          })(a),
        o(17, (k = 1));
    };
  let T;
  const P = Jg((t) => {
    n
      ? "hidden" !== t || x
        ? (clearTimeout(w),
          (w = void 0),
          o(16, (S = `top:${visualViewport.height - v - b.y}px`)),
          "visible" === t
            ? (o(8, (a.dataset.layout = "stick"), a), C(), M())
            : ((x = !1), o(17, (k = 0))))
        : C()
      : o(16, (S = "top: 4.5em; bottom: auto"));
  });
  return (
    Yn(() => {
      u && C();
    }),
    qn(() => {
      P && P();
    }),
    (t.$$set = (t) => {
      "onconfirm" in t && o(0, (c = t.onconfirm)),
        "oncancel" in t && o(1, (d = t.oncancel)),
        "autoFocus" in t && o(13, (u = t.autoFocus)),
        "autoPositionCursor" in t && o(14, (p = t.autoPositionCursor)),
        "labelConfirm" in t && o(2, (h = t.labelConfirm)),
        "labelConfirmShow" in t && o(3, (m = t.labelConfirmShow)),
        "iconConfirm" in t && o(4, (g = t.iconConfirm)),
        "labelCancel" in t && o(5, (f = t.labelCancel)),
        "labelCancelShow" in t && o(6, ($ = t.labelCancelShow)),
        "iconCancel" in t && o(7, (y = t.iconCancel)),
        "panelOffset" in t && o(15, (b = t.panelOffset)),
        "$$scope" in t && o(19, (l = t.$$scope));
    }),
    (t.$$.update = () => {
      256 & t.$$.dirty[0] && o(18, (i = a && getComputedStyle(a))),
        262144 & t.$$.dirty[0] &&
          (n = i && "1" === i.getPropertyValue("--editor-modal")),
        196608 & t.$$.dirty[0] && o(9, (r = `opacity:${k};${S}`));
    }),
    [
      c,
      d,
      h,
      m,
      g,
      f,
      $,
      y,
      a,
      r,
      (t) => {
        var e;
        ((t) => /textarea/i.test(t))(t.target) &&
          ((T = Date.now()),
          p &&
            ((e = t.target).selectionStart = e.selectionEnd = e.value.length),
          clearTimeout(w),
          (w = setTimeout(M, 200)));
      },
      (t) => {
        Date.now() - T > 50 || (t.stopPropagation(), C());
      },
      ({ detail: t }) => {
        v = t.height;
      },
      u,
      p,
      b,
      S,
      k,
      i,
      l,
      s,
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (a = t), o(8, a);
        });
      },
    ]
  );
}
class ef extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        tf,
        Qg,
        sn,
        {
          onconfirm: 0,
          oncancel: 1,
          autoFocus: 13,
          autoPositionCursor: 14,
          labelConfirm: 2,
          labelConfirmShow: 3,
          iconConfirm: 4,
          labelCancel: 5,
          labelCancelShow: 6,
          iconCancel: 7,
          panelOffset: 15,
        },
        [-1, -1]
      );
  }
}
var of = (t) => document.createTextNode(t);
function nf(t) {
  let e, o, i, n;
  return {
    c() {
      (e = Tn("pre")),
        zn(e, "class", "PinturaContentEditable"),
        zn(e, "data-wrap-content", (o = t[3] ? "wrap" : "nowrap")),
        zn(e, "contenteditable", ""),
        zn(e, "spellcheck", t[0]),
        zn(e, "autocorrect", t[1]),
        zn(e, "autocapitalize", t[2]),
        zn(e, "style", t[4]);
    },
    m(o, r) {
      Cn(o, e, r),
        t[20](e),
        i ||
          ((n = [
            In(e, "input", t[9]),
            In(e, "paste", t[10]),
            In(e, "keydown", t[7]),
            In(e, "keyup", t[8]),
            In(e, "blur", t[6]),
          ]),
          (i = !0));
    },
    p(t, i) {
      8 & i[0] &&
        o !== (o = t[3] ? "wrap" : "nowrap") &&
        zn(e, "data-wrap-content", o),
        1 & i[0] && zn(e, "spellcheck", t[0]),
        2 & i[0] && zn(e, "autocorrect", t[1]),
        4 & i[0] && zn(e, "autocapitalize", t[2]),
        16 & i[0] && zn(e, "style", t[4]);
    },
    i: Qi,
    o: Qi,
    d(o) {
      o && Mn(e), t[20](null), (i = !1), rn(n);
    },
  };
}
function rf(t, e, o) {
  let i,
    { spellcheck: r = "false" } = e,
    { autocorrect: a = "off" } = e,
    { autocapitalize: s = "off" } = e,
    { wrapLines: l = !0 } = e,
    { textStyles: d = !1 } = e,
    { formatInput: u = W } = e,
    { formatPaste: p = W } = e,
    { style: m } = e,
    { innerHTML: g } = e,
    { oninput: f = n } = e;
  const $ = () => {
      if (!b) return;
      const t = document.createRange();
      t.selectNodeContents(b);
      const e = window.getSelection();
      e.removeAllRanges(), e.addRange(t);
    },
    y = Kn();
  let b;
  c() && document.execCommand("defaultParagraphSeparator", !1, "br");
  const x = (t) => t.replace(/<\/?(?:i|b|em|strong)>/, ""),
    v = () => {
      o(11, (g = b.innerHTML)),
        y("input", g),
        f(g),
        requestAnimationFrame(() => b && b.scrollTo(0, 0));
    },
    w = () => {
      C(b);
      const t = d ? b.innerHTML : x(b.innerHTML);
      o(5, (b.innerHTML = u(t)), b), M(b), v();
    },
    S = (t) => {
      const e = h("span");
      return (e.dataset.bookmark = t), e;
    },
    k = (t, e, o) => {
      const i = S(o);
      if (t.nodeType === Node.TEXT_NODE) {
        const n = t.textContent;
        if ("start" === o) {
          const o = of(n.substr(0, e)),
            r = of(n.substr(e));
          t.replaceWith(o, i, r);
        } else {
          const o = of(n.substr(0, e)),
            r = of(n.substr(e));
          t.replaceWith(o, i, r);
        }
      } else
        t.nodeType === Node.ELEMENT_NODE && t.insertBefore(i, t.childNodes[e]);
    },
    C = (t) => {
      const e = window.getSelection();
      if (!e.getRangeAt || !e.rangeCount) return;
      const o = e.getRangeAt(0),
        {
          startOffset: i,
          endOffset: n,
          startContainer: r,
          endContainer: a,
        } = o;
      if (t.contains(o.startContainer) && t.contains(o.endContainer))
        if (r.nodeType === Node.TEXT_NODE && r === a) {
          const t = r.textContent,
            e = t.substr(0, i),
            o = S("start"),
            a = n - i > 0 ? t.substr(i, n) : "",
            s = S("end"),
            l = t.substr(n);
          r.replaceWith(e, o, a, s, l);
        } else k(r, i, "start"), k(a, n + (r === a ? 1 : 0), "end");
    },
    M = (t) => {
      const e = T(t, "start"),
        o = T(t, "end");
      if (!e || !o) return;
      const i = document.createRange();
      i.setStart(e, 0), i.setEnd(o, 0);
      const n = window.getSelection();
      n.removeAllRanges(), n.addRange(i), e.remove(), o.remove();
    },
    T = (t, e) => {
      const o = t.children;
      for (let t = 0; t < o.length; t++) {
        const i = o[t];
        if (i.dataset.bookmark === e) return i;
        if (i.children.length) {
          const t = T(i, e);
          if (t) return t;
        }
      }
    },
    P = (t) => {
      const e = window.getSelection().getRangeAt(0),
        o = e.cloneRange();
      return (
        o.selectNodeContents(t),
        o.setEnd(e.endContainer, e.endOffset),
        o.toString().length
      );
    };
  return (
    (t.$$set = (t) => {
      "spellcheck" in t && o(0, (r = t.spellcheck)),
        "autocorrect" in t && o(1, (a = t.autocorrect)),
        "autocapitalize" in t && o(2, (s = t.autocapitalize)),
        "wrapLines" in t && o(3, (l = t.wrapLines)),
        "textStyles" in t && o(12, (d = t.textStyles)),
        "formatInput" in t && o(13, (u = t.formatInput)),
        "formatPaste" in t && o(14, (p = t.formatPaste)),
        "style" in t && o(4, (m = t.style)),
        "innerHTML" in t && o(11, (g = t.innerHTML)),
        "oninput" in t && o(15, (f = t.oninput));
    }),
    (t.$$.update = () => {
      var e;
      32 & t.$$.dirty[0] && o(19, (i = !!b)),
        526336 & t.$$.dirty[0] &&
          i &&
          g &&
          (e = g) !== b.innerHTML &&
          (o(5, (b.innerHTML = e), b), b === document.activeElement && $());
    }),
    [
      r,
      a,
      s,
      l,
      m,
      b,
      () => y("blur"),
      (t) => {
        if (13 !== t.keyCode) return;
        const e = P(b) === b.textContent.length ? "<br><br>" : "<br>";
        l && document.execCommand("insertHTML", !1, e), t.preventDefault();
      },
      () => {},
      (t) => {
        const { inputType: e } = t;
        "insertCompositionText" !== e && "deleteCompositionText" !== e && w();
      },
      (t) => {
        t.preventDefault();
        const e = t.clipboardData.getData("text/plain"),
          o = d ? e : x(e),
          i = p(o);
        if (!i.length) return;
        const n = window.getSelection().getRangeAt(0);
        n.deleteContents(), n.insertNode(document.createTextNode(i)), v();
      },
      g,
      d,
      u,
      p,
      f,
      () => w(),
      () => {
        b && b.focus();
      },
      $,
      i,
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (b = t), o(5, b);
        });
      },
    ]
  );
}
class af extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        rf,
        nf,
        sn,
        {
          spellcheck: 0,
          autocorrect: 1,
          autocapitalize: 2,
          wrapLines: 3,
          textStyles: 12,
          formatInput: 13,
          formatPaste: 14,
          style: 4,
          innerHTML: 11,
          oninput: 15,
          confirm: 16,
          focus: 17,
          select: 18,
        },
        [-1, -1]
      );
  }
  get spellcheck() {
    return this.$$.ctx[0];
  }
  set spellcheck(t) {
    this.$set({ spellcheck: t }), hr();
  }
  get autocorrect() {
    return this.$$.ctx[1];
  }
  set autocorrect(t) {
    this.$set({ autocorrect: t }), hr();
  }
  get autocapitalize() {
    return this.$$.ctx[2];
  }
  set autocapitalize(t) {
    this.$set({ autocapitalize: t }), hr();
  }
  get wrapLines() {
    return this.$$.ctx[3];
  }
  set wrapLines(t) {
    this.$set({ wrapLines: t }), hr();
  }
  get textStyles() {
    return this.$$.ctx[12];
  }
  set textStyles(t) {
    this.$set({ textStyles: t }), hr();
  }
  get formatInput() {
    return this.$$.ctx[13];
  }
  set formatInput(t) {
    this.$set({ formatInput: t }), hr();
  }
  get formatPaste() {
    return this.$$.ctx[14];
  }
  set formatPaste(t) {
    this.$set({ formatPaste: t }), hr();
  }
  get style() {
    return this.$$.ctx[4];
  }
  set style(t) {
    this.$set({ style: t }), hr();
  }
  get innerHTML() {
    return this.$$.ctx[11];
  }
  set innerHTML(t) {
    this.$set({ innerHTML: t }), hr();
  }
  get oninput() {
    return this.$$.ctx[15];
  }
  set oninput(t) {
    this.$set({ oninput: t }), hr();
  }
  get confirm() {
    return this.$$.ctx[16];
  }
  get focus() {
    return this.$$.ctx[17];
  }
  get select() {
    return this.$$.ctx[18];
  }
}
function sf(t, e, o) {
  const i = t.slice();
  return (i[203] = e[o]), (i[205] = o), i;
}
function lf(t, e) {
  let o,
    i,
    n,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    h = e[203].name + "";
  function m(...t) {
    return e[137](e[205], ...t);
  }
  return (
    (n = new Kp({ props: { color: e[203].color } })),
    {
      key: t,
      first: null,
      c() {
        (o = Tn("li")),
          (i = Tn("button")),
          Ir(n.$$.fragment),
          (r = An()),
          (a = Tn("span")),
          (s = Rn(h)),
          (c = An()),
          zn(i, "class", "PinturaShapeListItem"),
          zn(i, "type", "button"),
          zn(i, "aria-label", (l = "Select shape " + e[203].name)),
          (this.first = o);
      },
      m(t, e) {
        Cn(t, o, e),
          kn(o, i),
          Lr(n, i, null),
          kn(i, r),
          kn(i, a),
          kn(a, s),
          kn(o, c),
          (d = !0),
          u || ((p = In(i, "click", m)), (u = !0));
      },
      p(t, o) {
        e = t;
        const r = {};
        8388608 & o[0] && (r.color = e[203].color),
          n.$set(r),
          (!d || 8388608 & o[0]) && h !== (h = e[203].name + "") && On(s, h),
          (!d ||
            (8388608 & o[0] && l !== (l = "Select shape " + e[203].name))) &&
            zn(i, "aria-label", l);
      },
      i(t) {
        d || (vr(n.$$.fragment, t), (d = !0));
      },
      o(t) {
        wr(n.$$.fragment, t), (d = !1);
      },
      d(t) {
        t && Mn(o), Fr(n), (u = !1), p();
      },
    }
  );
}
function cf(t) {
  let e, o;
  return (
    (e = new Yg({
      props: {
        visible: !0,
        points: t[12],
        rotatorPoint: t[17],
        enableResizing: t[16],
        enableRotating: t[10],
      },
    })),
    e.$on("resizestart", t[30]),
    e.$on("resizemove", t[31]),
    e.$on("resizeend", t[32]),
    e.$on("rotatestart", t[33]),
    e.$on("rotatemove", t[34]),
    e.$on("rotateend", t[35]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        4096 & o[0] && (i.points = t[12]),
          131072 & o[0] && (i.rotatorPoint = t[17]),
          65536 & o[0] && (i.enableResizing = t[16]),
          1024 & o[0] && (i.enableRotating = t[10]),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function df(t) {
  let e, o, i, n;
  const r = [pf, uf],
    a = [];
  function s(t, e) {
    return "modal" === t[4] ? 0 : "inline" === t[4] ? 1 : -1;
  }
  return (
    ~(e = s(t)) && (o = a[e] = r[e](t)),
    {
      c() {
        o && o.c(), (i = En());
      },
      m(t, o) {
        ~e && a[e].m(t, o), Cn(t, i, o), (n = !0);
      },
      p(t, n) {
        let l = e;
        (e = s(t)),
          e === l
            ? ~e && a[e].p(t, n)
            : (o &&
                (br(),
                wr(a[l], 1, 1, () => {
                  a[l] = null;
                }),
                xr()),
              ~e
                ? ((o = a[e]),
                  o ? o.p(t, n) : ((o = a[e] = r[e](t)), o.c()),
                  vr(o, 1),
                  o.m(i.parentNode, i))
                : (o = null));
      },
      i(t) {
        n || (vr(o), (n = !0));
      },
      o(t) {
        wr(o), (n = !1);
      },
      d(t) {
        ~e && a[e].d(t), t && Mn(i);
      },
    }
  );
}
function uf(t) {
  let e,
    o,
    i,
    n = { formatInput: t[37], wrapLines: !!t[9].width, style: t[19] };
  return (
    (o = new af({ props: n })),
    t[140](o),
    o.$on("input", t[38]),
    o.$on("keyup", t[41]),
    {
      c() {
        (e = Tn("div")),
          Ir(o.$$.fragment),
          zn(e, "class", "PinturaInlineInput"),
          zn(e, "style", t[20]);
      },
      m(t, n) {
        Cn(t, e, n), Lr(o, e, null), (i = !0);
      },
      p(t, n) {
        const r = {};
        512 & n[0] && (r.wrapLines = !!t[9].width),
          524288 & n[0] && (r.style = t[19]),
          o.$set(r),
          (!i || 1048576 & n[0]) && zn(e, "style", t[20]);
      },
      i(t) {
        i || (vr(o.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), (i = !1);
      },
      d(i) {
        i && Mn(e), t[140](null), Fr(o);
      },
    }
  );
}
function pf(t) {
  let e, o;
  return (
    (e = new ef({
      props: {
        panelOffset: t[2],
        onconfirm: t[42],
        oncancel: t[43],
        labelCancel: t[5].shapeLabelInputCancel,
        iconCancel: t[5].shapeIconInputCancel,
        labelConfirm: t[5].shapeLabelInputConfirm,
        iconConfirm: t[5].shapeIconInputConfirm,
        $$slots: { default: [hf] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        4 & o[0] && (i.panelOffset = t[2]),
          32 & o[0] && (i.labelCancel = t[5].shapeLabelInputCancel),
          32 & o[0] && (i.iconCancel = t[5].shapeIconInputCancel),
          32 & o[0] && (i.labelConfirm = t[5].shapeLabelInputConfirm),
          32 & o[0] && (i.iconConfirm = t[5].shapeIconInputConfirm),
          (786560 & o[0]) | (1048576 & o[6]) &&
            (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function hf(t) {
  let e, o, i;
  return {
    c() {
      (e = Tn("textarea")),
        zn(e, "spellcheck", "false"),
        zn(e, "autocorrect", "off"),
        zn(e, "autocapitalize", "off"),
        zn(e, "style", t[19]);
    },
    m(n, r) {
      Cn(n, e, r),
        t[138](e),
        Dn(e, t[18]),
        o ||
          ((i = [
            In(e, "keydown", t[40]),
            In(e, "keypress", t[39]),
            In(e, "keyup", t[41]),
            In(e, "input", t[38]),
            In(e, "input", t[139]),
          ]),
          (o = !0));
    },
    p(t, o) {
      524288 & o[0] && zn(e, "style", t[19]), 262144 & o[0] && Dn(e, t[18]);
    },
    d(n) {
      n && Mn(e), t[138](null), (o = !1), rn(i);
    },
  };
}
function mf(t) {
  let e, o, i, n, r;
  return (
    (o = new Jd({ props: { items: t[22] } })),
    {
      c() {
        (e = Tn("div")),
          Ir(o.$$.fragment),
          zn(e, "class", "PinturaShapeControls"),
          zn(e, "style", t[21]);
      },
      m(a, s) {
        Cn(a, e, s),
          Lr(o, e, null),
          (i = !0),
          n ||
            ((r = [In(e, "measure", t[141]), $n(bs.call(null, e))]), (n = !0));
      },
      p(t, n) {
        const r = {};
        4194304 & n[0] && (r.items = t[22]),
          o.$set(r),
          (!i || 2097152 & n[0]) && zn(e, "style", t[21]);
      },
      i(t) {
        i || (vr(o.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && Mn(e), Fr(o), (n = !1), rn(r);
      },
    }
  );
}
function gf(t) {
  let e,
    o,
    i,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p = [],
    h = new Map(),
    m = t[23];
  const g = (t) => t[203].id;
  for (let e = 0; e < m.length; e += 1) {
    let o = sf(t, m, e),
      i = g(o);
    h.set(i, (p[e] = lf(i, o)));
  }
  let f = t[11] && cf(t),
    $ = t[13] && df(t),
    y = t[14] > 0 && mf(t);
  return {
    c() {
      (e = Tn("div")), (o = Tn("nav")), (i = Tn("ul"));
      for (let t = 0; t < p.length; t += 1) p[t].c();
      (r = An()),
        f && f.c(),
        (a = An()),
        $ && $.c(),
        (s = An()),
        y && y.c(),
        zn(o, "class", "PinturaShapeList"),
        zn(o, "data-visible", t[15]),
        zn(e, "class", "PinturaShapeEditor"),
        zn(e, "tabindex", "0");
    },
    m(h, m) {
      Cn(h, e, m), kn(e, o), kn(o, i);
      for (let t = 0; t < p.length; t += 1) p[t].m(i, null);
      kn(e, r),
        f && f.m(e, null),
        kn(e, a),
        $ && $.m(e, null),
        kn(e, s),
        y && y.m(e, null),
        (c = !0),
        d ||
          ((u = [
            In(o, "focusin", t[46]),
            In(o, "focusout", t[47]),
            In(e, "keydown", function () {
              an(t[1] ? n : t[36]) && (t[1] ? n : t[36]).apply(this, arguments);
            }),
            In(e, "nudge", function () {
              an(t[1] ? n : t[45]) && (t[1] ? n : t[45]).apply(this, arguments);
            }),
            In(e, "measure", t[136]),
            In(e, "pointermove", function () {
              an(t[1] ? n : t[48]) && (t[1] ? n : t[48]).apply(this, arguments);
            }),
            In(e, "interactionstart", function () {
              an(t[1] ? n : t[25]) && (t[1] ? n : t[25]).apply(this, arguments);
            }),
            In(e, "interactionupdate", function () {
              an(t[1] ? n : t[27]) && (t[1] ? n : t[27]).apply(this, arguments);
            }),
            In(e, "interactioncancel", function () {
              an(t[1] ? n : t[26]) && (t[1] ? n : t[26]).apply(this, arguments);
            }),
            In(e, "interactionrelease", function () {
              an(t[1] ? n : t[28]) && (t[1] ? n : t[28]).apply(this, arguments);
            }),
            In(e, "interactionend", function () {
              an(t[1] ? n : t[29]) && (t[1] ? n : t[29]).apply(this, arguments);
            }),
            $n(bs.call(null, e)),
            $n(Hl.call(null, e)),
            $n(
              (l = Nl.call(null, e, {
                drag: !0,
                inertia: !0,
                multiTouch: !1,
                shouldStartInteraction: ff,
                getEventPosition: t[142],
              }))
            ),
          ]),
          (d = !0));
    },
    p(n, r) {
      (t = n),
        8388673 & r[0] &&
          ((m = t[23]),
          br(),
          (p = Pr(p, r, g, 1, t, m, h, i, Tr, lf, null, sf)),
          xr()),
        (!c || 32768 & r[0]) && zn(o, "data-visible", t[15]),
        t[11]
          ? f
            ? (f.p(t, r), 2048 & r[0] && vr(f, 1))
            : ((f = cf(t)), f.c(), vr(f, 1), f.m(e, a))
          : f &&
            (br(),
            wr(f, 1, 1, () => {
              f = null;
            }),
            xr()),
        t[13]
          ? $
            ? ($.p(t, r), 8192 & r[0] && vr($, 1))
            : (($ = df(t)), $.c(), vr($, 1), $.m(e, s))
          : $ &&
            (br(),
            wr($, 1, 1, () => {
              $ = null;
            }),
            xr()),
        t[14] > 0
          ? y
            ? (y.p(t, r), 16384 & r[0] && vr(y, 1))
            : ((y = mf(t)), y.c(), vr(y, 1), y.m(e, null))
          : y &&
            (br(),
            wr(y, 1, 1, () => {
              y = null;
            }),
            xr()),
        l &&
          an(l.update) &&
          8 & r[0] &&
          l.update.call(null, {
            drag: !0,
            inertia: !0,
            multiTouch: !1,
            shouldStartInteraction: ff,
            getEventPosition: t[142],
          });
    },
    i(t) {
      if (!c) {
        for (let t = 0; t < m.length; t += 1) vr(p[t]);
        vr(f), vr($), vr(y), (c = !0);
      }
    },
    o(t) {
      for (let t = 0; t < p.length; t += 1) wr(p[t]);
      wr(f), wr($), wr(y), (c = !1);
    },
    d(t) {
      t && Mn(e);
      for (let t = 0; t < p.length; t += 1) p[t].d();
      f && f.d(), $ && $.d(), y && y.d(), (d = !1), rn(u);
    },
  };
}
const ff = (t, e) => t.target === e;
function $f(t, e, o) {
  let i,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    h,
    m,
    g,
    f,
    $,
    y,
    b,
    x,
    v,
    S,
    k,
    C,
    M,
    P,
    R,
    A,
    E,
    I,
    L,
    F,
    z,
    B,
    O,
    D,
    _,
    Z,
    V,
    j,
    N,
    { uid: Y = T() } = e,
    { ui: G } = e,
    { disabled: K = !1 } = e,
    { markup: Q } = e,
    { offset: dt } = e,
    { contextRotation: mt = 0 } = e,
    { contextFlipX: gt = !1 } = e,
    { contextFlipY: $t = !1 } = e,
    { contextZoom: yt = 1 } = e,
    { active: bt = !1 } = e,
    { opacity: vt = 1 } = e,
    { parentRect: wt } = e,
    { rootRect: St } = e,
    { utilRect: kt } = e,
    { hoverColor: Ct } = e,
    { textInputMode: Mt = "inline" } = e,
    { oninteractionstart: Pt = n } = e,
    { oninteractionupdate: At = n } = e,
    { oninteractionrelease: Et = n } = e,
    { oninteractionend: It = n } = e,
    { oninteractioncancel: Lt = n } = e,
    { onaddshape: Ft = n } = e,
    { onupdateshape: Dt = n } = e,
    { onselectshape: Zt = n } = e,
    { onremoveshape: Vt = n } = e,
    { ontapshape: jt = n } = e,
    { onhovershape: Nt = n } = e,
    { onhovercanvas: Ht = n } = e,
    { beforeSelectShape: Ut = () => !0 } = e,
    { beforeDeselectShape: Xt = () => !0 } = e,
    { beforeRemoveShape: Yt = () => !0 } = e,
    { beforeUpdateShape: qt = (t, e) => e } = e,
    { willRenderShapeControls: Kt = W } = e,
    { willStartInteraction: Jt = (t, e) => !0 } = e,
    { mapEditorPointToImagePoint: oe } = e,
    { mapImagePointToEditorPoint: ie } = e,
    { eraseRadius: ne } = e,
    { selectRadius: re } = e,
    { enableButtonFlipVertical: ae = !1 } = e,
    { enableTapToAddText: ce = !0 } = e,
    { locale: ue } = e;
  const pe = (t, e, o) => {
      let i = qt({ ...t }, e, { ...o });
      Ti(t, i, o);
    },
    he = (t, e, o, i) => {
      const n = X(t.x - o.x, t.y - o.y),
        r = X(i.x - o.x, i.y - o.y),
        a = st(r, r);
      let s = st(n, r) / a;
      (s = s < 0 ? 0 : s), (s = s > 1 ? 1 : s);
      const l = X(r.x * s + o.x - t.x, r.y * s + o.y - t.y);
      return st(l, l) <= e * e;
    },
    me = (t, e, o) => {
      const i = o.length;
      for (let n = 0; n < i - 1; n++) if (he(t, e, o[n], o[n + 1])) return !0;
      return !1;
    },
    ge = (t, e, o) =>
      !!le(t, o) || !!me(t, e, o) || he(t, e, o[0], o[o.length - 1]),
    fe = (t, e, o, i, n) => ge(t, e, Gt(o, i, n || _t(o))),
    $e = Qn("keysPressed");
  dn(t, $e, (t) => o(152, (j = t)));
  const ye = (t, e, o) => (0 === t || (e && o) ? t : e || o ? -t : t),
    be = (t, e) => {
      const o = ie(t);
      return oe(nt(o, e));
    },
    xe = (t, e, o) => {
      if (No(t)) {
        const i = be(Oo(e), o),
          n = be(Do(e), o);
        pe(t, { x1: i.x, y1: i.y, x2: n.x, y2: n.y }, wt);
      } else if (Vo(t) || Wo(t) || jo(t)) {
        const i = be(e, o);
        pe(t, i, wt);
      }
      Re();
    },
    ve = { 0: 1, 1: 0, 2: 3, 3: 2 },
    we = { 0: 3, 1: 2, 2: 1, 3: 0 };
  let Se;
  const ke = () => {
      if (Q.length) return Q.find(Ko);
    },
    Ce = () => {
      if (Q.length) return Q.findIndex(Ko);
    },
    Me = (t, e = !0) => {
      if (!ke()) return oi(t), Ae(t, e);
    },
    Te = () => {
      const t = ke();
      if (t) return (t._isDraft = !1), Re(), t;
    },
    Pe = () => {
      ke() && (Q.splice(Ce(), 1), Re());
    },
    Re = () => o(0, Q),
    Ae = (t, e = !0) => (Q.push(t), e && Re(), t),
    Ee = (t, e = [], o = !0) => {
      e.forEach((e) => delete t[e]), o && Re();
    },
    Ie = (t, e, o = !0) => {
      (t = Object.assign(t, e)), o && Re();
    },
    Le = (t, e, o, i = !0) => {
      (t[e] = o), i && Re();
    },
    Fe = (t, e = !0) => {
      Q.forEach((e) => Ie(e, t, !1)), e && Re();
    },
    ze = () => [...Q].reverse().find(Go),
    Be = () => !!ze(),
    Oe = (t) => {
      if (!Yt(t)) return !1;
      o(0, (Q = Q.filter((e) => e !== t))), Vt(t);
    },
    De = () => {
      const t = ze();
      if (!t) return;
      const e = Q.filter((t) => ri(t) && ni(t)),
        o = e.findIndex((e) => e === t);
      if (!1 === Oe(t)) return;
      if (((We = t), e.length - 1 <= 0)) return _e();
      const i = o - 1 < 0 ? e.length - 1 : o - 1;
      Ve(e[i]);
    };
  let We = void 0;
  const _e = () => {
      Object.keys(ko).forEach((t) => (ko[t] = {})),
        (We = Ze()),
        Fe({ isSelected: !1, isEditing: !1, _prerender: !1 });
    },
    Ze = () => Q.find(Go),
    Ve = (t, e = !0) => {
      if (Ko(t)) return;
      const o = Ze() || We,
        i = Go(t);
      (We = void 0),
        Ut(o, t) &&
          (_e(),
          ((t) => {
            t.isSelected = !0;
          })(t),
          !i && Zt(t),
          e && Re());
    },
    je = (t) => {
      go && t.isEditing && go.confirm && go.confirm(),
        Ie(t, { isSelected: !1, isEditing: !1, _prerender: !1 });
    },
    Ne = (t) => {
      Ie(t, { isSelected: !0, isEditing: !0, _prerender: "inline" === Mt });
    },
    He = (t) => {
      Ie(t, { isSelected: !0, isEditing: !1, _prerender: !1 });
    },
    Ue = (t) => {
      if (!t.length) return [];
      const e = t.filter(Yt);
      return o(0, (Q = Q.filter((t) => !e.includes(t)))), e;
    },
    Xe = (t) => {
      const e = bo(t.text, t);
      return Wt(
        t.x,
        t.y,
        t.width ? Math.min(t.width, e.width) : e.width,
        t.height ? Math.min(t.height, e.height) : e.height
      );
    },
    Ye = (t) => {
      if (Jo(t)) return zt(t);
      if (jo(t)) return Ot(t);
      const e = Xe(t);
      return (e.width = Math.max(10, t.width || e.width)), e;
    },
    Ge = (t, e = 0, o = () => !0) =>
      [...Q]
        .reverse()
        .filter(o)
        .map((t) => ({ shape: t, priority: 1 }))
        .filter((o) => {
          const { shape: i } = o,
            n = Si(Io(i), wt),
            r = e + (n.strokeWidth || 0);
          if (Vo(n)) return fe(t, r, n, i.rotation);
          if (Wo(n)) {
            const e = Ye(n),
              a = fe(t, r, e, i.rotation);
            let s = !1;
            if (a && !Go(i)) {
              const a = Xe(n);
              "right" !== i.textAlign ||
                i.flipX ||
                (a.x = e.x + e.width - a.width),
                "center" === i.textAlign &&
                  (a.x = e.x + 0.5 * e.width - 0.5 * a.width),
                (s = fe(t, r, a, i.rotation, _t(e))),
                s || (o.priority = -1);
            }
            return a;
          }
          return jo(n)
            ? ((t, e, o, i, n, r) => {
                const a = de(X(o.x, o.y), o.rx, o.ry, i, n, r, 12);
                return ge(t, e, a);
              })(t, r, n, i.rotation, i.flipX, i.flipY)
            : No(n)
            ? he(t, Math.max(16, r), Oo(n), Do(n))
            : !!Uo(n) && me(t, Math.max(16, r), n.points);
        })
        .sort((t, e) =>
          t.priority < e.priority ? 1 : t.priority > e.priority ? -1 : 0
        )
        .map((t) => t.shape),
    qe = (t, e, o, i = 0) => {
      const n = Math.abs(i),
        r = Tt(e, o),
        a = Rt(r, n),
        s = (({ start: t, end: e }, o) => {
          if (0 === o)
            return [X(t.x, t.y), X(t.x, t.y), X(e.x, e.y), X(e.x, e.y)];
          const i = Math.atan2(e.y - t.y, e.x - t.x),
            n = Math.sin(i) * o,
            r = Math.cos(i) * o;
          return [
            X(n + t.x, -r + t.y),
            X(-n + t.x, r + t.y),
            X(-n + e.x, r + e.y),
            X(n + e.x, -r + e.y),
          ];
        })(a, n);
      return t.filter((t) => {
        const e = Si(Io(t), wt);
        if (No(e) || Uo(e)) {
          const t = e.points ? [...e.points] : [Oo(e), Do(e)];
          return !!((t, e) => {
            const o = e.length,
              i = [];
            for (let n = 0; n < o - 1; n++) {
              const o = se(t.start, t.end, e[n], e[n + 1]);
              o && i.push(o);
            }
            return i.length ? i : void 0;
          })(a, t);
        }
        return ((t, e) =>
          !!t.find((t) => le(t, e)) || !!e.find((e) => le(e, t)))(
          s,
          ((t, e = 12) => {
            if (Vo(t)) return Gt(t, t.rotation, _t(t));
            if (Wo(t)) {
              const e = Ye(t);
              return Gt(e, t.rotation, _t(e));
            }
            return jo(t)
              ? de(X(t.x, t.y), t.rx, t.ry, t.rotation, t.flipX, t.flipY, e)
              : [];
          })(e)
        );
      });
    };
  let Ke = void 0,
    Qe = void 0,
    to = void 0,
    eo = void 0,
    oo = void 0,
    io = !1;
  const no = () => {
      clearTimeout(Ke), (Ke = void 0), o(112, (io = !1));
    },
    ro = (t) => {
      let e;
      if (Vo(t)) {
        if (t.width < 5 && t.height < 5) return;
        const o = _t(t);
        (e = ee(t)),
          (t.flipX || t.flipY) && pt(e, t.flipX, t.flipY, o.x, o.y),
          (e = ht(e, t.rotation, o.x, o.y));
      } else if (jo(t)) {
        const o = t;
        (e = ee(Ot(t))),
          (t.flipX || t.flipY) && pt(e, t.flipX, t.flipY, o.x, o.y),
          (e = ht(e, t.rotation, o.x, o.y));
      } else if (No(t)) e = [Oo(t), Do(t)];
      else if (Uo(t)) e = [...t.points];
      else if (Wo(t)) {
        if (t.width < 5 && t.height < 5) return;
        const o = Ye(t);
        o.width = Math.max(10, o.width);
        const i = _t(o);
        (e = ee(o)),
          (t.flipX || t.flipY) && pt(e, t.flipX, t.flipY, i.x, i.y),
          (e = ht(e, t.rotation, i.x, i.y));
      }
      return e;
    },
    lo = (t) => {
      const e = ro(t);
      let o, i;
      return (
        t.flipY
          ? ((o = ut([e[0], e[1]])),
            (i = tt(X(e[1].x - e[2].x, e[1].y - e[2].y))))
          : ((o = ut([e[2], e[3]])),
            (i = tt(X(e[2].x - e[1].x, e[2].y - e[1].y)))),
        at(i, 20 / yt),
        { origin: o, dir: i }
      );
    },
    co = () => {
      const t = G.filter((t) => "markup-hover" !== t.id);
      t.length !== G.length && o(49, (G = t));
    };
  let uo;
  const po = "markup-manipulator-segment-" + Y,
    ho = () => {
      o(49, (G = G.filter((t) => t.id !== po)));
    },
    mo = (t) => t.isContentEditable || /input|textarea/i.test(t.nodeName);
  let go;
  const fo = (t) =>
      o(
        7,
        (go.innerHTML = ((t) =>
          t
            .replace(/ {2,}/g, " ")
            .replace(/&/g, "&amp;")
            .replace(/\u00a0/g, "&nbsp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .split("\n")
            .join("<br>"))(t)),
        go
      ),
    $o = (t) => {
      let e;
      e =
        void 0 === t.value
          ? t.innerHTML
              .split("<br>")
              .join("\n")
              .replace(/&nbsp;/g, String.fromCharCode(160))
              .replace(/&amp;/g, "&")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
          : t.value;
      return _o(i)
        ? ((t) => {
            const e = t.split(/[\n\r]/g);
            return e.length > 1
              ? e
                  .map((t) => t.trim())
                  .filter((t) => t.length)
                  .join(" ")
              : e[0];
          })(e)
        : e;
    },
    yo = () => {
      const t = $o(go),
        e = si(i, t),
        o = !0 === e ? t : e;
      let n = v.x,
        r = v.y;
      if (!i.height) {
        const t = Gt({ ...k }, i.rotation),
          e = bo(o, a),
          s = Gt({ x: n, y: r, ...e }, i.rotation),
          [l, , c] = t,
          [d, , u] = s;
        let p = l,
          h = d;
        i.flipX && ((p = c), (h = u));
        const m = rt(q(p), h);
        (n += m.x), (r += m.y);
      }
      Ie(i, {
        x: w(x.x) ? ao(n, wt.width) : n,
        y: w(x.y) ? ao(r, wt.height) : r,
        text: o,
      });
    },
    xo = () => {
      let t = Ko(i);
      Ko(i) && Te(), yo(), He(i), t ? Ft(i) : Dt(i);
    },
    vo = () => {
      Ko(i) ? Pe() : (Ie(i, { text: x.text, x: x.x, y: x.y }), He(i));
    },
    wo = (t, e, { flipX: o, flipY: i, rotation: n }, r = "top left") => {
      let a, s;
      const [l, c, d, u] = Gt(t, n),
        [p, h, m, g] = Gt(e, n);
      if ("top center" === r) {
        (a = ut(i ? [u, d] : [l, c])), (s = ut(i ? [g, m] : [p, h]));
      } else
        ("top right" === r && !o) || ("top left" === r && o)
          ? ((a = i ? d : c), (s = i ? m : h))
          : ((a = i ? u : l), (s = i ? g : p));
      return rt(q(a), s);
    },
    So = (t, e, o) =>
      X(
        w(t.x) ? ao(e.x + o.x, wt.width) : e.x + o.x,
        w(t.y) ? ao(e.y + o.y, wt.height) : e.y + o.y
      ),
    ko = {},
    Co = () => Ne(i),
    Mo = () => {
      const t = bo(i.text, a),
        e = Je(i, "height"),
        o = !e && Je(i, "width"),
        n = i.id;
      let r = ko[n];
      r || ((ko[n] = {}), (r = ko[n]));
      const s = (t) => {
          const { width: e, ...o } = a,
            n = bo(i.text, o),
            r = wo(
              Wt(a.x, a.y, t.width, t.height),
              Wt(a.x, a.y, n.width, n.height),
              a,
              "top " + i.textAlign
            );
          Ee(i, ["width", "height", "textAlign"]), Ie(i, { ...So(i, a, r) });
        },
        l = (e) => {
          const o = xt(r.width || a.width || t.width, t.height),
            n = r.textAlign || "left",
            s = wo(
              Wt(a.x, a.y, e.width, e.height),
              Wt(a.x, a.y, o.width, o.height),
              a,
              "top " + n
            );
          Ee(i, ["height"]),
            Ie(i, {
              ...So(i, a, s),
              width: w(i.width) ? ao(o.width, wt.width) : o.width,
              textAlign: n,
            });
        },
        c = (e) => {
          const o = xt(r.width || t.width, r.height || t.height),
            n = r.textAlign || "left",
            s = wo(
              Wt(a.x, a.y, e.width, e.height),
              Wt(a.x, a.y, o.width, o.height),
              a,
              "top " + n
            );
          Ie(i, {
            ...So(i, a, s),
            width: w(i.width) ? ao(o.width, wt.width) : o.width,
            height: w(i.width) ? ao(o.height, wt.height) : o.height,
            textAlign: n,
          });
        };
      if (e) {
        (r.textAlign = i.textAlign), (r.width = a.width), (r.height = a.height);
        const t = xt(a.width, a.height);
        li(i, "auto-height") ? l(t) : li(i, "auto-width") && s(t);
      } else if (o) {
        (r.textAlign = i.textAlign), (r.width = a.width);
        const e = xt(a.width, t.height);
        li(i, "auto-width") ? s(e) : li(i, "fixed-size") && c(e);
      } else {
        const e = xt(t.width, t.height);
        li(i, "fixed-size") ? c(e) : li(i, "auto-height") && l(e);
      }
    },
    To = (t) => {
      t.stopPropagation();
      const e = i.flipX || !1;
      Le(i, "flipX", !e), Dt(i);
    },
    Po = (t) => {
      t.stopPropagation();
      const e = i.flipY || !1;
      Le(i, "flipY", !e), Dt(i);
    },
    Ro = (t) => {
      Le(i, "opacity", t);
    },
    Ao = (t) => {
      Ro(t), Dt(i);
    },
    Lo = (t) => {
      t.stopPropagation(), t.target.blur(), De();
    },
    Fo = (t) => {
      t.stopPropagation();
      Q.findIndex((t) => t === i) !== Q.length - 1 &&
        (o(0, (Q = Q.filter((t) => t !== i).concat([i]))), Dt(i));
    },
    zo = (t) => {
      t.stopPropagation();
      const e = Io(i);
      e.id = T();
      const o = X(50, -50);
      if (No(e)) {
        const t = Mi(e, ["x1", "y1", "x2", "y2"], wt);
        (t.x1 += o.x),
          (t.y1 += o.y),
          (t.x2 += o.x),
          (t.y2 += o.y),
          Ti(e, t, wt);
      } else {
        const t = Mi(e, ["x", "y"], wt);
        (t.x += 50), (t.y -= 50), Ti(e, t, wt);
      }
      Q.push(e), Ft(e), Ve(e);
    },
    Bo = ss(0, { stiffness: 0.2, damping: 0.7 });
  let Ho;
  dn(t, Bo, (t) => o(14, (N = t)));
  const Yo = (t, e) => {
      const { disableTextLayout: o = [] } = e;
      return "height" in e
        ? o.includes("auto-height")
          ? t.shapeIconButtonTextLayoutAutoWidth
          : t.shapeIconButtonTextLayoutAutoHeight
        : "width" in e
        ? o.includes("auto-width")
          ? t.shapeIconButtonTextLayoutFixedSize
          : t.shapeIconButtonTextLayoutAutoWidth
        : o.includes("fixed-size")
        ? t.shapeIconButtonTextLayoutAutoHeight
        : t.shapeIconButtonTextLayoutFixedSize;
    },
    qo = (t, e) => {
      const { disableTextLayout: o = [] } = e;
      return "height" in e
        ? o.includes("auto-height")
          ? t.shapeTitleButtonTextLayoutAutoWidth
          : t.shapeTitleButtonTextLayoutAutoHeight
        : "width" in e
        ? o.includes("auto-width")
          ? t.shapeTitleButtonTextLayoutFixedSize
          : t.shapeTitleButtonTextLayoutAutoWidth
        : o.includes("fixed-size")
        ? t.shapeTitleButtonTextLayoutAutoHeight
        : t.shapeTitleButtonTextLayoutFixedSize;
    };
  let Qo = !1;
  let ti = U();
  const ei = (t) => {
    Nt(t), o(113, (uo = t));
  };
  qn(() => {
    ho(), co();
  });
  return (
    (t.$$set = (t) => {
      "uid" in t && o(50, (Y = t.uid)),
        "ui" in t && o(49, (G = t.ui)),
        "disabled" in t && o(1, (K = t.disabled)),
        "markup" in t && o(0, (Q = t.markup)),
        "offset" in t && o(2, (dt = t.offset)),
        "contextRotation" in t && o(51, (mt = t.contextRotation)),
        "contextFlipX" in t && o(52, (gt = t.contextFlipX)),
        "contextFlipY" in t && o(53, ($t = t.contextFlipY)),
        "contextZoom" in t && o(54, (yt = t.contextZoom)),
        "active" in t && o(55, (bt = t.active)),
        "opacity" in t && o(56, (vt = t.opacity)),
        "parentRect" in t && o(57, (wt = t.parentRect)),
        "rootRect" in t && o(3, (St = t.rootRect)),
        "utilRect" in t && o(58, (kt = t.utilRect)),
        "hoverColor" in t && o(59, (Ct = t.hoverColor)),
        "textInputMode" in t && o(4, (Mt = t.textInputMode)),
        "oninteractionstart" in t && o(60, (Pt = t.oninteractionstart)),
        "oninteractionupdate" in t && o(61, (At = t.oninteractionupdate)),
        "oninteractionrelease" in t && o(62, (Et = t.oninteractionrelease)),
        "oninteractionend" in t && o(63, (It = t.oninteractionend)),
        "oninteractioncancel" in t && o(64, (Lt = t.oninteractioncancel)),
        "onaddshape" in t && o(65, (Ft = t.onaddshape)),
        "onupdateshape" in t && o(66, (Dt = t.onupdateshape)),
        "onselectshape" in t && o(67, (Zt = t.onselectshape)),
        "onremoveshape" in t && o(68, (Vt = t.onremoveshape)),
        "ontapshape" in t && o(69, (jt = t.ontapshape)),
        "onhovershape" in t && o(70, (Nt = t.onhovershape)),
        "onhovercanvas" in t && o(71, (Ht = t.onhovercanvas)),
        "beforeSelectShape" in t && o(72, (Ut = t.beforeSelectShape)),
        "beforeDeselectShape" in t && o(73, (Xt = t.beforeDeselectShape)),
        "beforeRemoveShape" in t && o(74, (Yt = t.beforeRemoveShape)),
        "beforeUpdateShape" in t && o(75, (qt = t.beforeUpdateShape)),
        "willRenderShapeControls" in t &&
          o(76, (Kt = t.willRenderShapeControls)),
        "willStartInteraction" in t && o(77, (Jt = t.willStartInteraction)),
        "mapEditorPointToImagePoint" in t &&
          o(78, (oe = t.mapEditorPointToImagePoint)),
        "mapImagePointToEditorPoint" in t &&
          o(79, (ie = t.mapImagePointToEditorPoint)),
        "eraseRadius" in t && o(80, (ne = t.eraseRadius)),
        "selectRadius" in t && o(81, (re = t.selectRadius)),
        "enableButtonFlipVertical" in t &&
          o(82, (ae = t.enableButtonFlipVertical)),
        "enableTapToAddText" in t && o(83, (ce = t.enableTapToAddText)),
        "locale" in t && o(5, (ue = t.locale));
    }),
    (t.$$.update = () => {
      var e, n;
      if (
        (3 & t.$$.dirty[0] && o(114, (i = !K && Q && (ke() || ze()))),
        2097152 & t.$$.dirty[3] && o(115, (r = i && !Ko(i) ? i.id : void 0)),
        (8 & t.$$.dirty[0]) |
          (67108864 & t.$$.dirty[1]) |
          (2097152 & t.$$.dirty[3]) && o(9, (a = St && i && Si(Io(i), wt))),
        2097152 & t.$$.dirty[3] && o(116, (s = !(!i || !Ko(i)))),
        (512 & t.$$.dirty[0]) |
          (33554432 & t.$$.dirty[1]) |
          (2097152 & t.$$.dirty[3]) && o(117, (l = (i && vt && ro(a)) || [])),
        2097152 & t.$$.dirty[3] &&
          o(
            118,
            (c =
              i &&
              ci((e = i)) &&
              di(e) &&
              !0 !== e.disableResize &&
              (Jo(e) || Zo(e) || jo(e) || No(e)) &&
              !Xo(i))
          ),
        2097152 & t.$$.dirty[3] &&
          o(
            10,
            (d =
              i &&
              ((t) =>
                ci(t) &&
                !0 !== t.disableRotate &&
                (Jo(t) || Je(t, "text") || jo(t)))(i) &&
              !Xo(i))
          ),
        35651584 & t.$$.dirty[3] &&
          o(16, (u = c && Je(i, "text") && !i.height ? "horizontal" : c)),
        18874368 & t.$$.dirty[3] && o(11, (p = i && l.length > 1)),
        (131072 & t.$$.dirty[2]) | (16777216 & t.$$.dirty[3]) &&
          o(119, (h = l.map(ie))),
        (4 & t.$$.dirty[0]) | (67108864 & t.$$.dirty[3]) &&
          o(12, (m = h.map((t) => X(t.x - dt.x, t.y - dt.y)))),
        4096 & t.$$.dirty[0] && o(120, (g = m.length)),
        (131072 & t.$$.dirty[2]) | (1048576 & t.$$.dirty[3]) &&
          (uo && ie && !Go(uo) && ni(uo)
            ? ((t) => {
                const e = ro(Si(Io(t), wt));
                if (!e) return;
                const i = e.map(ie),
                  n = !Uo(t) && !No(t),
                  r = {
                    id: "markup-hover",
                    points: i.map((t) => X(t.x + 1, t.y + 1)),
                    strokeColor: [0, 0, 0, 0.1],
                    strokeWidth: 2,
                    pathClose: n,
                  },
                  a = {
                    id: "markup-hover",
                    points: i,
                    strokeColor: Ct,
                    strokeWidth: 2,
                    pathClose: n,
                  },
                  s = G.filter((t) => "markup-hover" !== t.id);
                o(49, (G = [...s, r, a]));
              })(uo)
            : co()),
        (7680 & t.$$.dirty[0]) | (33554432 & t.$$.dirty[1]) &&
          o(
            121,
            (f =
              p &&
              d &&
              vt &&
              m &&
              ((t) => {
                const e = lo(t),
                  o = ie({ x: e.origin.x + e.dir.x, y: e.origin.y + e.dir.y });
                return { origin: ie(e.origin), position: o };
              })(a))
          ),
        (4 & t.$$.dirty[0]) | (268435456 & t.$$.dirty[3]) &&
          o(17, ($ = f && X(f.position.x - dt.x, f.position.y - dt.y))),
        (33554432 & t.$$.dirty[1]) | (203423744 & t.$$.dirty[3]) &&
          i &&
          h &&
          vt > 0)
      ) {
        const t = i && Ko(i) && Uo(i);
        g > 2 && !t
          ? ((t, e) => {
              const i = [],
                n = 0.1 * t,
                r = t,
                a = [0, 0, 0],
                s = [1, 1, 1],
                l = !Uo(e) && !No(e);
              i.push({
                id: po,
                points: h.map((t) => X(t.x + 1, t.y + 1)),
                pathClose: l,
                strokeColor: a,
                strokeWidth: 2,
                opacity: n,
              }),
                f &&
                  i.push({
                    id: po,
                    points: [
                      X(f.origin.x + 1, f.origin.y + 1),
                      X(f.position.x + 1, f.position.y + 1),
                    ],
                    strokeColor: a,
                    strokeWidth: 2,
                    opacity: n,
                  }),
                i.push({
                  id: po,
                  points: h,
                  pathClose: l,
                  strokeColor: s,
                  strokeWidth: 1.5,
                  opacity: r,
                }),
                f &&
                  i.push({
                    id: po,
                    points: [
                      { x: f.origin.x, y: f.origin.y },
                      { x: f.position.x, y: f.position.y },
                    ],
                    strokeColor: s,
                    strokeWidth: 1.5,
                    opacity: r,
                  }),
                o(49, (G = G.filter((t) => t.id !== po).concat(i)));
            })(vt, i)
          : ho();
      }
      2097152 & t.$$.dirty[3] && (i || ho()),
        16777216 & t.$$.dirty[1] &&
          ((t) => {
            if (!t) return Fe({ _prerender: !1 });
            const e = Q.find((t) => t.isEditing);
            e && Ie(e, { _prerender: "inline" === Mt });
          })(bt),
        144 & t.$$.dirty[0] && go && "inline" === Mt && go.focus(),
        2097152 & t.$$.dirty[3] && o(122, (y = i && Wo(i))),
        538968064 & t.$$.dirty[3] && o(13, (b = y && !1 !== si(i) && Xo(i))),
        8192 & t.$$.dirty[0] && o(123, (x = b ? { ...i } : void 0)),
        (67108864 & t.$$.dirty[1]) | (1073741824 & t.$$.dirty[3]) &&
          o(124, (v = x && Si({ ...x }, wt))),
        1 & t.$$.dirty[4] && o(125, (S = v && bo(v.text, v))),
        3 & t.$$.dirty[4] && (k = v && Wt(v.x, v.y, S.width, S.height)),
        (8192 & t.$$.dirty[0]) | (2097152 & t.$$.dirty[3]) &&
          o(18, (C = b ? i.text : "")),
        8720 & t.$$.dirty[0] &&
          o(
            19,
            (M =
              b &&
              ((t, e) => {
                const {
                    textAlign: o = "left",
                    fontFamily: i = "sans-serif",
                    fontWeight: n = "normal",
                    fontStyle: r = "normal",
                  } = t,
                  a = t.fontSize,
                  s = "!important",
                  l = `text-align:${o}${s};font-family:${i}${s};font-weight:${n}${s};font-style:${r}${s};`;
                if ("modal" === e) return l;
                const c = so(t.color),
                  d = t.lineHeight,
                  u = 0.5 * Math.max(0, a - d);
                return `--bottom-inset:${u}px;padding:${u}px 0 0${s};color:${c}${s};font-size:${a}px${s};line-height:${d}px${s};${l}`;
              })(a, Mt))
          ),
        (8708 & t.$$.dirty[0]) | (9437184 & t.$$.dirty[1]) &&
          o(
            20,
            (P =
              b &&
              ((t, e, o, n) => {
                let r, s;
                t.width && t.height
                  ? ((r = _t(t)), (s = ft(t)))
                  : ((s = bo(i.text, a)),
                    (s.width = a.width || s.width),
                    (r = X(t.x + 0.5 * s.width, t.y + 0.5 * s.height)));
                const l = Math.max(0, t.fontSize - t.lineHeight) + t.lineHeight,
                  c = ie(r);
                let d = c.x - e.x - 0.5 * s.width,
                  u = c.y - e.y - 0.5 * s.height,
                  p = t.flipX,
                  h = t.flipY,
                  m = t.rotation;
                gt && $t
                  ? ((p = !p), (h = !h))
                  : gt
                  ? ((p = !p), (m = -m))
                  : $t && ((h = !h), (m = -m)),
                  (m += n);
                const g = o * (p ? -1 : 1),
                  f = o * (h ? -1 : 1);
                return `--line-height:${l}px;width:${s.width}px;height:${s.height}px;transform:translate(${d}px,${u}px) rotate(${m}rad) scale(${g}, ${f})`;
              })(a, dt, yt, mt))
          ),
        8336 & t.$$.dirty[0] && b && go && "inline" === Mt && fo(C),
        (10485760 & t.$$.dirty[3]) | (4 & t.$$.dirty[4]) &&
          o(126, (R = i && !s ? i : R)),
        4 & t.$$.dirty[4] && o(127, (A = R && ai(R))),
        4 & t.$$.dirty[4] && o(128, (E = R && li(R))),
        4 & t.$$.dirty[4] &&
          o(129, (I = R && ((t) => !0 !== t.disableDuplicate && di(t))(R))),
        4 & t.$$.dirty[4] && o(130, (L = R && ri(R))),
        4 & t.$$.dirty[4] &&
          o(131, (F = R && ((t) => !0 !== t.disableReorder)(R))),
        4 & t.$$.dirty[4] && o(132, (z = R && !1 !== si(R))),
        4 & t.$$.dirty[4] &&
          o(133, (B = R && Je(R, "backgroundImage") && ii(R, "opacity"))),
        (8192 & t.$$.dirty[0]) | (11010048 & t.$$.dirty[3]) &&
          Bo.set(!i || s || io || b ? 0 : 1),
        (4096 & t.$$.dirty[0]) |
          (10485760 & t.$$.dirty[3]) |
          (1024 & t.$$.dirty[4]) &&
          o(
            134,
            (O =
              i && !s && m.length
                ? ((n = Bt(m)), it(X(n.x + 0.5 * n.width, n.y), yc))
                : O)
          ),
        (256 & t.$$.dirty[0]) |
          (134217728 & t.$$.dirty[1]) |
          (1024 & t.$$.dirty[4]) &&
          o(
            135,
            (D =
              O &&
              Ho &&
              kt &&
              ((t) => {
                const e = kt.x,
                  o = kt.y,
                  i = e + kt.width;
                let n = Math.max(t.x - 0.5 * Ho.width, e),
                  r = Math.max(t.y - Ho.height - 16, o);
                return n + Ho.width > i && (n = i - Ho.width), X(n, r);
              })(O))
          ),
        (16384 & t.$$.dirty[0]) | (2048 & t.$$.dirty[4]) &&
          o(
            21,
            (_ = D && `transform: translate(${D.x}px, ${D.y}px);opacity:${N}`)
          ),
        (32 & t.$$.dirty[0]) |
          (1064960 & t.$$.dirty[2]) |
          (6291456 & t.$$.dirty[3]) |
          (1016 & t.$$.dirty[4]) &&
          o(
            22,
            (Z =
              r &&
              Kt &&
              fu(() =>
                Kt(
                  [
                    B && [
                      "div",
                      "alpha",
                      { class: "PinturaShapeControlsGroup" },
                      [
                        [
                          "Slider",
                          "adjust-opacity",
                          {
                            onrelease: Ao,
                            onchange: Ro,
                            step: 0.01,
                            value: Je(i, "opacity") ? i.opacity : 1,
                            label: (t, e, o) => Math.round((t / o) * 100) + "%",
                            min: 0,
                            max: 1,
                            direction: "x",
                          },
                        ],
                      ],
                    ],
                    [
                      "div",
                      "beta",
                      { class: "PinturaShapeControlsGroup" },
                      [
                        A && [
                          "Button",
                          "flip-horizontal",
                          {
                            onclick: To,
                            label: ue.shapeTitleButtonFlipHorizontal,
                            icon: ue.shapeIconButtonFlipHorizontal,
                            hideLabel: !0,
                          },
                        ],
                        A &&
                          ae && [
                            "Button",
                            "flip-vertical",
                            {
                              onclick: Po,
                              label: ue.shapeTitleButtonFlipVertical,
                              icon: ue.shapeIconButtonFlipVertical,
                              hideLabel: !0,
                            },
                          ],
                        F && [
                          "Button",
                          "to-front",
                          {
                            onclick: Fo,
                            label: ue.shapeTitleButtonMoveToFront,
                            icon: ue.shapeIconButtonMoveToFront,
                            hideLabel: !0,
                          },
                        ],
                        I && [
                          "Button",
                          "duplicate",
                          {
                            onclick: zo,
                            label: ue.shapeTitleButtonDuplicate,
                            icon: ue.shapeIconButtonDuplicate,
                            hideLabel: !0,
                          },
                        ],
                        L && [
                          "Button",
                          "remove",
                          {
                            onclick: Lo,
                            label: ue.shapeTitleButtonRemove,
                            icon: ue.shapeIconButtonRemove,
                            hideLabel: !0,
                          },
                        ],
                      ].filter(Boolean),
                    ],
                    z &&
                      E && [
                        "div",
                        "gamma",
                        { class: "PinturaShapeControlsGroup" },
                        [
                          [
                            "Button",
                            "text-layout",
                            {
                              onclick: Mo,
                              label: Bc(qo, ue, i),
                              icon: Bc(Yo, ue, i),
                              hideLabel: !0,
                            },
                          ],
                        ],
                      ],
                    z && [
                      "div",
                      "delta",
                      { class: "PinturaShapeControlsGroup" },
                      [
                        [
                          "Button",
                          "edit-text",
                          { label: ue.shapeLabelInputText, onclick: Co },
                        ],
                      ],
                    ],
                  ].filter(Boolean),
                  r
                )
              ))
          ),
        33 & t.$$.dirty[0] &&
          o(
            23,
            (V = Q.filter(ni)
              .filter((t) => !Ko(t))
              .map((t) => ({
                id: t.id,
                color: Wo(t)
                  ? t.color
                  : No(t)
                  ? t.strokeColor
                  : t.backgroundColor,
                name: t.name || ue["shapeLabelTool" + Gr(yi(t))],
              })))
          );
    }),
    [
      Q,
      K,
      dt,
      St,
      Mt,
      ue,
      Ve,
      go,
      Ho,
      a,
      d,
      p,
      m,
      b,
      N,
      Qo,
      u,
      $,
      C,
      M,
      P,
      _,
      Z,
      V,
      $e,
      (t) => {
        const { origin: e } = t.detail;
        (to = void 0),
          (eo = void 0),
          (oo = void 0),
          (Qe = void 0),
          clearTimeout(Ke),
          (Ke = setTimeout(() => o(112, (io = !0)), 250));
        ke() && Te();
        const n = oe(q(e)),
          r = Ge(n, re, (t) => ni(t)),
          a = r.length && r.shift();
        if ((!a && i && Xo(i) && je(i), !Jt(e))) return;
        if (a && Go(a))
          return (to = a), (eo = Io(to)), void (oo = Si(Io(to), wt));
        Qe = a;
        !Pt(t) && a && (Ve(a), (to = a), (eo = Io(to)), (oo = Si(Io(to), wt)));
      },
      (t) => {
        no(), Lt(t);
      },
      (t) => {
        const { translation: e } = t.detail;
        if (to) {
          if (!di(to)) return;
          if (Xo(to)) return;
          return xe(to, oo, e);
        }
        At(t);
      },
      (t) => {
        no(),
          to
            ? Xo(to)
              ? vo()
              : t.detail.isTap && Wo(to) && !1 !== si(to) && Ne(to)
            : Et(t);
      },
      (t) => {
        const e = Qe && t.detail.isTap;
        if (to)
          return (
            jt(to),
            (o = to),
            (i = eo),
            JSON.stringify(o) !== JSON.stringify(i) && Dt(to),
            void (to = void 0)
          );
        var o, i;
        const n = Ze(),
          r = !n || Xt(n, Qe);
        r && _e(), It(t), r && e && Ve(Qe);
      },
      (t) => {
        o(112, (io = !0)), (to = i), (oo = a);
      },
      (t) => {
        const { translation: e, indexes: o, shiftKey: i } = t.detail;
        ((t, e, o, i, n) => {
          if (No(t)) {
            const [n] = o,
              r = j.includes(16)
                ? (t, e) => {
                    const o = ct(t, e),
                      i = et(t, e),
                      n = Math.PI / 4,
                      r = n * Math.round(i / n) - (mt % n);
                    (e.x = t.x + o * Math.cos(r)),
                      (e.y = t.y + o * Math.sin(r));
                  }
                : (t, e) => e;
            if (0 === n) {
              const o = be(Oo(e), i);
              r(X(e.x2, e.y2), o), pe(t, { x1: o.x, y1: o.y }, wt);
            } else if (1 === n) {
              const o = be(Do(e), i);
              r(X(e.x1, e.y1), o), pe(t, { x2: o.x, y2: o.y }, wt);
            }
          } else if (Jo(t) || jo(t) || Zo(t)) {
            let r,
              a,
              s = !1;
            if (jo(t)) r = Ot(e);
            else if (Jo(t)) r = zt(e);
            else {
              (s = !0), (r = zt(e));
              const t = bo(e.text, e);
              r.height = t.height;
            }
            t.aspectRatio
              ? (a = t.aspectRatio)
              : n.shiftKey && !s && (a = r.width / r.height);
            const l = zt(r),
              c = _t(l),
              d = t.rotation,
              u = ee(l),
              p = Gt(l, d);
            if (1 === o.length) {
              let e = o[0];
              t.flipX && (e = ve[e]), t.flipY && (e = we[e]);
              const [n, r, s, l] = u,
                h = ie(p[e]);
              nt(h, i);
              const m = oe(h),
                g = X(m.x - p[e].x, m.y - p[e].y),
                f = J(q(g), -d),
                $ = X(u[e].x + f.x, u[e].y + f.y);
              let y;
              0 === e && (y = s),
                1 === e && (y = l),
                2 === e && (y = n),
                3 === e && (y = r);
              const b = Bt([y, $]);
              if (a) {
                const { width: t, height: e } = Qt(b, a),
                  [o, i, n, r] = te(b);
                (b.width = t),
                  (b.height = e),
                  $.y < y.y && (b.y = n - e),
                  $.x < y.x && (b.x = i - t);
              }
              const x = Gt(b, d, c),
                v = ut(x),
                w = J(x[0], -d, v),
                S = J(x[2], -d, v),
                k = Bt([w, S]);
              pe(t, jo(t) ? H(k) : k, wt);
            } else {
              o = o.map(
                (e) => (t.flipX && (e = ve[e]), t.flipY && (e = we[e]), e)
              );
              const [e, n] = o.map((t) => p[t]),
                r = { x: e.x + 0.5 * (n.x - e.x), y: e.y + 0.5 * (n.y - e.y) },
                [l, h] = o.map((t) => u[t]),
                [m, g] = o.map((t) => {
                  const e = t + 2;
                  return e < 4 ? u[e] : u[e - 4];
                }),
                f = { x: m.x + 0.5 * (g.x - m.x), y: m.y + 0.5 * (g.y - m.y) },
                $ = ie(r);
              nt($, i);
              const y = oe($),
                b = X(y.x - r.x, y.y - r.y),
                x = J(q(b), -d),
                v = rt(q(l), h),
                w = it(v, (t) => 1 - Math.abs(Math.sign(t))),
                S = X(x.x * w.x, x.y * w.y);
              nt(l, S), nt(h, S);
              const k = Bt(u);
              if (a) {
                let t = k.width,
                  e = k.height;
                0 === w.y ? (e = t / a) : (t = e * a),
                  (k.width = t),
                  (k.height = e),
                  0 === w.y ? (k.y = f.y - 0.5 * e) : (k.x = f.x - 0.5 * t);
              }
              const C = Gt(k, d, c),
                M = ut(C),
                T = J(C[0], -d, M),
                P = J(C[2], -d, M),
                R = Bt([T, P]);
              let A;
              jo(t)
                ? (A = H(R))
                : Jo(t)
                ? (A = R)
                : s && (A = { x: R.x, y: R.y, width: R.width }),
                pe(t, A, wt);
            }
          }
          Re();
        })(to, oo, o, e, { shiftKey: i });
      },
      (t) => {
        Ve(to);
        const { isTap: e } = t.detail;
        e && jt(to), (to = void 0), o(112, (io = !1)), Dt(i);
      },
      (t) => {
        (Se = lo(a).origin), o(112, (io = !0)), (to = i), (oo = a);
      },
      (t) => {
        const { translation: e, shiftKey: o } = t.detail;
        ((t, e, o, i) => {
          const n = Ye(Si(Io(t), wt)),
            r = _t(n),
            a = be(Se, o);
          let s = et(a, r) + Math.PI / 2;
          if (i.shiftKey) {
            const t = Math.PI / 16;
            s = t * Math.round(s / t) - (mt % t);
          }
          pe(t, { rotation: s }, wt), Re();
        })(to, 0, e, { shiftKey: o });
      },
      () => {
        Ve(to), (to = void 0), o(112, (io = !1)), Dt(i);
      },
      (t) => {
        if (!Be()) return;
        const { key: e } = t;
        if (/escape/i.test(e))
          return t.preventDefault(), t.stopPropagation(), je(i);
        /backspace/i.test(e) && !mo(t.target) && (t.preventDefault(), De());
      },
      (t) => {
        const e = si(i, t);
        return !0 === e ? t : e;
      },
      yo,
      (t) => {
        const { target: e, key: o } = t,
          n = e.value || e.innerText,
          r = e.selectionStart || 0,
          a = e.selectionEnd || n.length,
          s = n.substring(0, r) + o + n.substring(a);
        if (si(i, s) !== s) return t.preventDefault();
      },
      (t) =>
        _o(i) && /enter/i.test(t.code)
          ? t.preventDefault()
          : /arrow/i.test(t.code)
          ? t.stopPropagation()
          : /escape/i.test(t.key)
          ? vo()
          : void 0,
      (t) => {
        const { key: e, ctrlKey: o, altKey: i } = t;
        if (/enter/i.test(e) && (o || i)) return xo();
      },
      xo,
      vo,
      Bo,
      (t) => {
        const e = ze();
        e &&
          (Xo(e) ||
            (di(e) && ((to = e), (oo = Si(Io(to), wt)), xe(to, oo, t.detail))));
      },
      (t) => {
        o(15, (Qo = !0));
      },
      ({ relatedTarget: t }) => {
        (t && t.classList.contains("shape-selector__button")) ||
          o(15, (Qo = !1));
      },
      (t) => {
        if (io || Ke) return ei(void 0);
        const e = Gg(t, St),
          o = it(oe(e), (t) => Math.round(t));
        if (ot(o, ti)) return;
        (ti = q(o)), Ht(e, o);
        const [i] = Ge(o, 0, ni);
        (i && Ko(i)) || ei(i);
      },
      G,
      Y,
      mt,
      gt,
      $t,
      yt,
      bt,
      vt,
      wt,
      kt,
      Ct,
      Pt,
      At,
      Et,
      It,
      Lt,
      Ft,
      Dt,
      Zt,
      Vt,
      jt,
      Nt,
      Ht,
      Ut,
      Xt,
      Yt,
      qt,
      Kt,
      Jt,
      oe,
      ie,
      ne,
      re,
      ae,
      ce,
      (t, e = {}) => {
        let o,
          i,
          n,
          r = jo(t),
          a = Wo(t),
          s = "relative" === e.position;
        return Uo(t)
          ? {
              start: (e) => {
                const { origin: r } = e.detail;
                (i = 4), (o = q(r)), (n = q(r));
                const a = oe(r);
                s &&
                  ((a.x = s ? ao(a.x, wt.width) : a.x),
                  (a.y = s ? ao(a.y, wt.height) : a.y)),
                  Me({ ...t, points: [a] });
              },
              update: (t) => {
                const e = ke(),
                  { translation: r } = t.detail,
                  a = X(o.x + r.x, o.y + r.y),
                  l = ct(n, a);
                if (Eo(l, 5) <= i) return;
                const c = et(a, n),
                  d = i - l;
                (n.x += d * Math.cos(c)), (n.y += d * Math.sin(c));
                const u = oe(n);
                u &&
                  ((u.x = s ? ao(u.x, wt.width) : u.x),
                  (u.y = s ? ao(u.y, wt.height) : u.y)),
                  (e.points = e.points.concat(u)),
                  Re();
              },
              release: (t) => t.detail.preventInertia(),
              cancel: (t) => {
                Pe();
              },
              end: (t) => {
                if (t.detail.isTap) return Pe();
                const e = Te();
                Ft(e);
              },
            }
          : r || a || Vo(t)
          ? {
              start: (e) => {
                const { origin: i } = e.detail;
                o = q(i);
                const n = oe(o),
                  a = {
                    ...t,
                    rotation: -1 * ye(mt, gt, $t),
                    x: s ? ao(n.x, wt.width) : n.x,
                    y: s ? ao(n.y, wt.height) : n.y,
                  };
                (a.flipX = gt),
                  (a.flipY = $t),
                  delete a.position,
                  (a.opacity = 0),
                  r
                    ? ((a.rx = s ? "0%" : 0), (a.ry = s ? "0%" : 0))
                    : ((a.width = s ? "0%" : 0), (a.height = s ? "0%" : 0)),
                  Me(a);
              },
              update: (t) => {
                const e = ke();
                e.opacity = 1;
                const { aspectRatio: i } = e;
                let { translation: n } = t.detail;
                if (i) {
                  const t = Math.abs(n.x) * i;
                  (n.x = n.x), (n.y = t * Math.sign(n.y));
                }
                const a = X(o.x + n.x, o.y + n.y),
                  s = oe(o),
                  l = oe(a),
                  c = {
                    x: s.x + 0.5 * (l.x - s.x),
                    y: s.y + 0.5 * (l.y - s.y),
                  },
                  d = ye(mt, gt, $t);
                J(s, d, c), J(l, d, c);
                const u = Math.min(s.x, l.x),
                  p = Math.min(s.y, l.y);
                let h = Math.max(s.x, l.x) - u,
                  m = Math.max(s.y, l.y) - p,
                  g = {};
                r
                  ? ((g.x = u + 0.5 * h),
                    (g.y = p + 0.5 * m),
                    (g.rx = 0.5 * h),
                    (g.ry = 0.5 * m))
                  : ((g.x = u), (g.y = p), (g.width = h), (g.height = m)),
                  pe(e, g, wt),
                  Re();
              },
              release: (t) => {
                t.detail.preventInertia();
              },
              cancel: (t) => {
                Pe();
              },
              end: (t) => {
                const e = ke();
                if (t.detail.isTap) {
                  if (!Wo(e) || !ce || Qe) return Pe();
                  delete e.width, delete e.height, delete e.textAlign;
                  const t = Si({ ...e }, wt),
                    i = bo(e.text, t);
                  (i.width *= yt), (i.height *= yt);
                  const n = oe({ x: o.x, y: o.y - 0.5 * i.height }),
                    r = oe({ x: o.x + i.width, y: o.y + 0.5 * i.height }),
                    a = {
                      x: n.x + 0.5 * (r.x - n.x),
                      y: n.y + 0.5 * (r.y - n.y),
                    },
                    s = ye(mt, gt, $t);
                  J(n, s, a), J(r, s, a);
                  const l = Math.min(n.x, r.x),
                    c = Math.min(n.y, r.y);
                  (e.x = w(e.x) ? ao(l, wt.width) : l),
                    (e.y = w(e.y) ? ao(c, wt.height) : c);
                }
                if (((e.opacity = 1), !Wo(e))) {
                  const t = Te();
                  Ft(t);
                }
                Ve(e), Wo(e) && Ne(e);
              },
            }
          : No(t)
          ? {
              start: (e) => {
                const { origin: i } = e.detail,
                  n = oe(i),
                  r = it(n, yc);
                (o = q(i)),
                  Me({
                    ...t,
                    x1: s ? ao(r.x, wt.width) : r.x,
                    y1: s ? ao(r.y, wt.height) : r.y,
                    x2: s ? ao(r.x, wt.width) : r.x,
                    y2: s ? ao(r.y, wt.height) : r.y,
                    opacity: 0,
                  });
              },
              update: (t) => {
                const e = ke(),
                  { translation: i } = t.detail,
                  n = nt(q(o), i);
                if (j.includes(16)) {
                  const t = ct(o, n),
                    e = et(o, n),
                    i = Math.PI / 4,
                    r = i * Math.round(e / i);
                  (n.x = o.x + t * Math.cos(r)), (n.y = o.y + t * Math.sin(r));
                }
                const r = oe(n);
                Ie(e, {
                  x2: s ? ao(r.x, wt.width) : r.x,
                  y2: s ? ao(r.y, wt.height) : r.y,
                  opacity: 1,
                }),
                  Re();
              },
              release: (t) => t.detail.preventInertia(),
              cancel: (t) => {
                Pe();
              },
              end: (t) => {
                const e = ke();
                if (t.detail.isTap) return Pe();
                e.opacity = 1;
                const o = Te();
                Ft(o), Ve(o);
              },
            }
          : void 0;
      },
      () => {
        let t, e;
        const o = ne * ne,
          i = (t, e, i = !1) => {
            const n = lt(t, e);
            if (!i && n < 2) return !1;
            const r = Q.filter((t) => !t.disableErase);
            let a;
            a = n < o ? Ge(oe(e), ne) : qe(r, oe(t), oe(e), ne);
            return Ue(a).forEach(Vt), !0;
          };
        return {
          start: (o) => {
            (t = X(
              Math.round(o.detail.origin.x),
              Math.round(o.detail.origin.y)
            )),
              i(t, t, !0),
              (e = t);
          },
          update: (o) => {
            const { translation: n } = o.detail,
              r = X(Math.round(t.x + n.x), Math.round(t.y + n.y));
            i(e, r) && (e = q(r));
          },
          release: (t) => t.detail.preventInertia(),
          end: () => {},
        };
      },
      ke,
      Ce,
      Me,
      Te,
      Pe,
      (t = {}) => ({ id: T(), ...t }),
      Re,
      Ae,
      Ee,
      Ie,
      Le,
      (t, e, o = !0) => {
        Q.forEach((o) => Le(o, t, e, !1)), o && Re();
      },
      Fe,
      ze,
      Be,
      Oe,
      De,
      _e,
      je,
      Ne,
      He,
      Ue,
      Xe,
      Ye,
      Ge,
      qe,
      io,
      uo,
      i,
      r,
      s,
      l,
      c,
      h,
      g,
      f,
      y,
      x,
      v,
      S,
      R,
      A,
      E,
      I,
      L,
      F,
      z,
      B,
      O,
      D,
      function (e) {
        tr(t, e);
      },
      (t, e) => Ve(Q[t]),
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (go = t), o(7, go);
        });
      },
      function () {
        (C = this.value),
          o(18, C),
          o(13, b),
          o(114, i),
          o(122, y),
          o(1, K),
          o(0, Q);
      },
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (go = t), o(7, go);
        });
      },
      (t) => o(8, (Ho = t.detail)),
      (t) => Gg(t, St),
    ]
  );
}
class yf extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        $f,
        gf,
        sn,
        {
          uid: 50,
          ui: 49,
          disabled: 1,
          markup: 0,
          offset: 2,
          contextRotation: 51,
          contextFlipX: 52,
          contextFlipY: 53,
          contextZoom: 54,
          active: 55,
          opacity: 56,
          parentRect: 57,
          rootRect: 3,
          utilRect: 58,
          hoverColor: 59,
          textInputMode: 4,
          oninteractionstart: 60,
          oninteractionupdate: 61,
          oninteractionrelease: 62,
          oninteractionend: 63,
          oninteractioncancel: 64,
          onaddshape: 65,
          onupdateshape: 66,
          onselectshape: 67,
          onremoveshape: 68,
          ontapshape: 69,
          onhovershape: 70,
          onhovercanvas: 71,
          beforeSelectShape: 72,
          beforeDeselectShape: 73,
          beforeRemoveShape: 74,
          beforeUpdateShape: 75,
          willRenderShapeControls: 76,
          willStartInteraction: 77,
          mapEditorPointToImagePoint: 78,
          mapImagePointToEditorPoint: 79,
          eraseRadius: 80,
          selectRadius: 81,
          enableButtonFlipVertical: 82,
          enableTapToAddText: 83,
          locale: 5,
          createShape: 84,
          eraseShape: 85,
          getMarkupItemDraft: 86,
          getMarkupItemDraftIndex: 87,
          addMarkupItemDraft: 88,
          confirmMarkupItemDraft: 89,
          discardMarkupItemDraft: 90,
          createMarkupItem: 91,
          syncShapes: 92,
          addShape: 93,
          removeMarkupShapeProps: 94,
          updateMarkupShape: 95,
          updateMarkupShapeProperty: 96,
          updateMarkupItemsShapeProperty: 97,
          updateMarkupShapeItems: 98,
          getActiveMarkupItem: 99,
          hasActiveMarkupItem: 100,
          removeShape: 101,
          removeActiveMarkupItem: 102,
          blurShapes: 103,
          selectShape: 6,
          deselectMarkupItem: 104,
          editMarkupItem: 105,
          finishEditMarkupItem: 106,
          removeMarkupItems: 107,
          getTextShapeRect: 108,
          getMarkupShapeRect: 109,
          getShapesNearPosition: 110,
          getShapesBetweenPoints: 111,
        },
        [-1, -1, -1, -1, -1, -1, -1]
      );
  }
  get createShape() {
    return this.$$.ctx[84];
  }
  get eraseShape() {
    return this.$$.ctx[85];
  }
  get getMarkupItemDraft() {
    return this.$$.ctx[86];
  }
  get getMarkupItemDraftIndex() {
    return this.$$.ctx[87];
  }
  get addMarkupItemDraft() {
    return this.$$.ctx[88];
  }
  get confirmMarkupItemDraft() {
    return this.$$.ctx[89];
  }
  get discardMarkupItemDraft() {
    return this.$$.ctx[90];
  }
  get createMarkupItem() {
    return this.$$.ctx[91];
  }
  get syncShapes() {
    return this.$$.ctx[92];
  }
  get addShape() {
    return this.$$.ctx[93];
  }
  get removeMarkupShapeProps() {
    return this.$$.ctx[94];
  }
  get updateMarkupShape() {
    return this.$$.ctx[95];
  }
  get updateMarkupShapeProperty() {
    return this.$$.ctx[96];
  }
  get updateMarkupItemsShapeProperty() {
    return this.$$.ctx[97];
  }
  get updateMarkupShapeItems() {
    return this.$$.ctx[98];
  }
  get getActiveMarkupItem() {
    return this.$$.ctx[99];
  }
  get hasActiveMarkupItem() {
    return this.$$.ctx[100];
  }
  get removeShape() {
    return this.$$.ctx[101];
  }
  get removeActiveMarkupItem() {
    return this.$$.ctx[102];
  }
  get blurShapes() {
    return this.$$.ctx[103];
  }
  get selectShape() {
    return this.$$.ctx[6];
  }
  get deselectMarkupItem() {
    return this.$$.ctx[104];
  }
  get editMarkupItem() {
    return this.$$.ctx[105];
  }
  get finishEditMarkupItem() {
    return this.$$.ctx[106];
  }
  get removeMarkupItems() {
    return this.$$.ctx[107];
  }
  get getTextShapeRect() {
    return this.$$.ctx[108];
  }
  get getMarkupShapeRect() {
    return this.$$.ctx[109];
  }
  get getShapesNearPosition() {
    return this.$$.ctx[110];
  }
  get getShapesBetweenPoints() {
    return this.$$.ctx[111];
  }
}
function bf(t, e, o) {
  const i = t.slice();
  return (i[7] = e[o]), i;
}
function xf(t, e) {
  let o,
    i,
    n,
    r,
    a,
    s,
    l,
    c = Bc(e[7].componentProps.title, e[1]) + "";
  const d = [e[7].componentProps];
  var u = e[7].component;
  function p(t) {
    let e = {};
    for (let t = 0; t < d.length; t += 1) e = en(e, d[t]);
    return { props: e };
  }
  return (
    u && (a = new u(p())),
    {
      key: t,
      first: null,
      c() {
        (o = Tn("li")),
          (i = Tn("span")),
          (n = Rn(c)),
          (r = An()),
          a && Ir(a.$$.fragment),
          (s = An()),
          zn(i, "class", "PinturaShapeStyleLabel"),
          zn(o, "class", "PinturaShapeStyle"),
          (this.first = o);
      },
      m(t, e) {
        Cn(t, o, e),
          kn(o, i),
          kn(i, n),
          kn(o, r),
          a && Lr(a, o, null),
          kn(o, s),
          (l = !0);
      },
      p(t, i) {
        (e = t),
          (!l || 3 & i) &&
            c !== (c = Bc(e[7].componentProps.title, e[1]) + "") &&
            On(n, c);
        const r = 1 & i ? Rr(d, [Ar(e[7].componentProps)]) : {};
        if (u !== (u = e[7].component)) {
          if (a) {
            br();
            const t = a;
            wr(t.$$.fragment, 1, 0, () => {
              Fr(t, 1);
            }),
              xr();
          }
          u
            ? ((a = new u(p())),
              Ir(a.$$.fragment),
              vr(a.$$.fragment, 1),
              Lr(a, o, s))
            : (a = null);
        } else u && a.$set(r);
      },
      i(t) {
        l || (a && vr(a.$$.fragment, t), (l = !0));
      },
      o(t) {
        a && wr(a.$$.fragment, t), (l = !1);
      },
      d(t) {
        t && Mn(o), a && Fr(a);
      },
    }
  );
}
function vf(t) {
  let e,
    o,
    i = [],
    n = new Map(),
    r = t[0];
  const a = (t) => t[7].id;
  for (let e = 0; e < r.length; e += 1) {
    let o = bf(t, r, e),
      s = a(o);
    n.set(s, (i[e] = xf(s, o)));
  }
  return {
    c() {
      e = Tn("ul");
      for (let t = 0; t < i.length; t += 1) i[t].c();
      zn(e, "class", "PinturaShapeStyleList");
    },
    m(t, n) {
      Cn(t, e, n);
      for (let t = 0; t < i.length; t += 1) i[t].m(e, null);
      o = !0;
    },
    p(t, o) {
      3 & o &&
        ((r = t[0]),
        br(),
        (i = Pr(i, o, a, 1, t, r, n, e, Tr, xf, null, bf)),
        xr());
    },
    i(t) {
      if (!o) {
        for (let t = 0; t < r.length; t += 1) vr(i[t]);
        o = !0;
      }
    },
    o(t) {
      for (let t = 0; t < i.length; t += 1) wr(i[t]);
      o = !1;
    },
    d(t) {
      t && Mn(e);
      for (let t = 0; t < i.length; t += 1) i[t].d();
    },
  };
}
function wf(t) {
  let e, o, i;
  return (
    (o = new Ql({
      props: {
        class: "PinturaShapeStyles",
        elasticity: t[2],
        $$slots: { default: [vf] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (e = Tn("div")), Ir(o.$$.fragment), zn(e, "style", t[3]);
      },
      m(t, n) {
        Cn(t, e, n), Lr(o, e, null), (i = !0);
      },
      p(t, [n]) {
        const r = {};
        4 & n && (r.elasticity = t[2]),
          1027 & n && (r.$$scope = { dirty: n, ctx: t }),
          o.$set(r),
          (!i || 8 & n) && zn(e, "style", t[3]);
      },
      i(t) {
        i || (vr(o.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && Mn(e), Fr(o);
      },
    }
  );
}
function Sf(t, e, o) {
  let i,
    n,
    { isActive: r = !1 } = e,
    { controls: a = [] } = e,
    { locale: s } = e,
    { scrollElasticity: l } = e;
  const c = ss(0);
  return (
    dn(t, c, (t) => o(6, (n = t))),
    (t.$$set = (t) => {
      "isActive" in t && o(5, (r = t.isActive)),
        "controls" in t && o(0, (a = t.controls)),
        "locale" in t && o(1, (s = t.locale)),
        "scrollElasticity" in t && o(2, (l = t.scrollElasticity));
    }),
    (t.$$.update = () => {
      32 & t.$$.dirty && c.set(r ? 1 : 0),
        96 & t.$$.dirty &&
          o(
            3,
            (i = `opacity:${n};${r ? "" : "pointer-events:none;"}${
              n <= 0 ? "visibility:hidden" : ""
            }`)
          );
    }),
    [a, s, l, i, c, r, n]
  );
}
class kf extends Br {
  constructor(t) {
    super(),
      zr(this, t, Sf, wf, sn, {
        isActive: 5,
        controls: 0,
        locale: 1,
        scrollElasticity: 2,
      });
  }
}
function Cf(t, e, o) {
  const i = t.slice();
  return (i[11] = e[o].key), (i[2] = e[o].controls), (i[12] = e[o].isActive), i;
}
function Mf(t, e) {
  let o, i, n;
  return (
    (i = new kf({
      props: {
        isActive: e[12],
        controls: e[2],
        locale: e[0],
        scrollElasticity: e[1],
      },
    })),
    {
      key: t,
      first: null,
      c() {
        (o = En()), Ir(i.$$.fragment), (this.first = o);
      },
      m(t, e) {
        Cn(t, o, e), Lr(i, t, e), (n = !0);
      },
      p(t, o) {
        e = t;
        const n = {};
        8 & o && (n.isActive = e[12]),
          8 & o && (n.controls = e[2]),
          1 & o && (n.locale = e[0]),
          2 & o && (n.scrollElasticity = e[1]),
          i.$set(n);
      },
      i(t) {
        n || (vr(i.$$.fragment, t), (n = !0));
      },
      o(t) {
        wr(i.$$.fragment, t), (n = !1);
      },
      d(t) {
        t && Mn(o), Fr(i, t);
      },
    }
  );
}
function Tf(t) {
  let e,
    o,
    i = [],
    n = new Map(),
    r = t[3];
  const a = (t) => t[11];
  for (let e = 0; e < r.length; e += 1) {
    let o = Cf(t, r, e),
      s = a(o);
    n.set(s, (i[e] = Mf(s, o)));
  }
  return {
    c() {
      e = Tn("div");
      for (let t = 0; t < i.length; t += 1) i[t].c();
      zn(e, "class", "PinturaShapeStyleEditor");
    },
    m(t, n) {
      Cn(t, e, n);
      for (let t = 0; t < i.length; t += 1) i[t].m(e, null);
      o = !0;
    },
    p(t, [o]) {
      11 & o &&
        ((r = t[3]),
        br(),
        (i = Pr(i, o, a, 1, t, r, n, e, Tr, Mf, null, Cf)),
        xr());
    },
    i(t) {
      if (!o) {
        for (let t = 0; t < r.length; t += 1) vr(i[t]);
        o = !0;
      }
    },
    o(t) {
      for (let t = 0; t < i.length; t += 1) wr(i[t]);
      o = !1;
    },
    d(t) {
      t && Mn(e);
      for (let t = 0; t < i.length; t += 1) i[t].d();
    },
  };
}
function Pf(t, e, o) {
  let i,
    n,
    r,
    { controls: a = {} } = e,
    { shape: s } = e,
    { onchange: l } = e,
    { locale: c } = e,
    { scrollElasticity: d } = e;
  const u = [];
  return (
    (t.$$set = (t) => {
      "controls" in t && o(2, (a = t.controls)),
        "shape" in t && o(4, (s = t.shape)),
        "onchange" in t && o(5, (l = t.onchange)),
        "locale" in t && o(0, (c = t.locale)),
        "scrollElasticity" in t && o(1, (d = t.scrollElasticity));
    }),
    (t.$$.update = () => {
      4 & t.$$.dirty && o(6, (i = Object.keys(a).filter((t) => a[t]))),
        80 & t.$$.dirty &&
          o(
            7,
            (n =
              s && i && ii(s)
                ? ((t) =>
                    i
                      .filter((e) =>
                        e.split("_").every((e) => Je(t, e) && ii(t, e))
                      )
                      .map((e) => {
                        const o = e.split("_"),
                          i = o.length > 1 ? o.map((e) => t[e]) : t[e];
                        let [n, r] = a[e];
                        if (w(n))
                          if (a[n]) {
                            const t = { ...r };
                            ([n, r] = a[n]), (r = { ...r, ...t });
                          } else {
                            if ("Dropdown" !== n) return;
                            n = kd;
                          }
                        const s = S(r.options) ? r.options(t) : r.options;
                        return {
                          id: e,
                          component: n,
                          componentProps: {
                            ...r,
                            options: s,
                            locale: c,
                            value: i,
                            optionLabelClass: "PinturaButtonLabel",
                            onchange: (i) => {
                              const n = b(i) && !Qe(i) ? i.value : i;
                              r.onchange && r.onchange(n, t);
                              const a =
                                o.length > 1
                                  ? o.reduce(
                                      (t, e, o) => ({
                                        ...t,
                                        [e]: Array.isArray(n) ? n[o] : n,
                                      }),
                                      {}
                                    )
                                  : { [e]: n };
                              l(a);
                            },
                          },
                        };
                      })
                      .filter(Boolean))(s)
                : [])
          ),
        144 & t.$$.dirty &&
          o(
            3,
            (r = ((t, e) => {
              let o = u.find((e) => e.key === t);
              return (
                o || ((o = { key: t, controls: e }), u.push(o)),
                u.forEach((t) => (t.isActive = !1)),
                (o.controls = e),
                (o.isActive = !0),
                u
              );
            })(s ? Object.keys(s).join("_") : "none", n || []))
          );
    }),
    [c, d, a, r, s, l, i, n]
  );
}
class Rf extends Br {
  constructor(t) {
    super(),
      zr(this, t, Pf, Tf, sn, {
        controls: 2,
        shape: 4,
        onchange: 5,
        locale: 0,
        scrollElasticity: 1,
      });
  }
}
function Af(t) {
  let e, o, i;
  return {
    c() {
      (e = Tn("button")),
        zn(e, "class", "PinturaDragButton"),
        zn(e, "title", t[1]),
        (e.disabled = t[2]);
    },
    m(n, r) {
      Cn(n, e, r),
        (e.innerHTML = t[0]),
        t[9](e),
        o || ((i = In(e, "pointerdown", t[4])), (o = !0));
    },
    p(t, [o]) {
      1 & o && (e.innerHTML = t[0]),
        2 & o && zn(e, "title", t[1]),
        4 & o && (e.disabled = t[2]);
    },
    i: Qi,
    o: Qi,
    d(n) {
      n && Mn(e), t[9](null), (o = !1), i();
    },
  };
}
function Ef(t, e, o) {
  let i,
    { html: r } = e,
    { title: a } = e,
    { onclick: s } = e,
    { disabled: l = !1 } = e,
    { ongrab: c = n } = e,
    { ondrag: d = n } = e,
    { ondrop: u = n } = e;
  const p = (t) => lt(h, X(t.pageX, t.pageY)) < 256;
  let h;
  const m = (t) => {
      document.documentElement.removeEventListener("pointermove", g),
        document.documentElement.removeEventListener("pointerup", m);
      const e = X(t.pageX, t.pageY);
      if (lt(h, e) < 32) return s(t);
      p(t) || u(t);
    },
    g = (t) => {
      p(t) || d(t);
    };
  return (
    (t.$$set = (t) => {
      "html" in t && o(0, (r = t.html)),
        "title" in t && o(1, (a = t.title)),
        "onclick" in t && o(5, (s = t.onclick)),
        "disabled" in t && o(2, (l = t.disabled)),
        "ongrab" in t && o(6, (c = t.ongrab)),
        "ondrag" in t && o(7, (d = t.ondrag)),
        "ondrop" in t && o(8, (u = t.ondrop));
    }),
    [
      r,
      a,
      l,
      i,
      (t) => {
        (h = X(t.pageX, t.pageY)),
          c(t),
          document.documentElement.addEventListener("pointermove", g),
          document.documentElement.addEventListener("pointerup", m);
      },
      s,
      c,
      d,
      u,
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (i = t), o(3, i);
        });
      },
    ]
  );
}
class If extends Br {
  constructor(t) {
    super(),
      zr(this, t, Ef, Af, sn, {
        html: 0,
        title: 1,
        onclick: 5,
        disabled: 2,
        ongrab: 6,
        ondrag: 7,
        ondrop: 8,
      });
  }
}
function Lf(t, e, o) {
  const i = t.slice();
  return (i[14] = e[o]), i;
}
function Ff(t, e) {
  let o, i, n, r, a, s, l;
  function c() {
    return e[10](e[14]);
  }
  function d(...t) {
    return e[11](e[14], ...t);
  }
  function u(...t) {
    return e[12](e[14], ...t);
  }
  function p(...t) {
    return e[13](e[14], ...t);
  }
  return (
    (i = new If({
      props: {
        onclick: c,
        ongrab: d,
        ondrag: u,
        ondrop: p,
        disabled: e[1] || e[14].disabled,
        title: e[14].title,
        html: e[14].thumb,
      },
    })),
    {
      key: t,
      first: null,
      c() {
        (o = Tn("li")),
          Ir(i.$$.fragment),
          (n = An()),
          zn(o, "class", "PinturaShapePreset"),
          zn(o, "style", e[6]),
          (this.first = o);
      },
      m(t, c) {
        Cn(t, o, c),
          Lr(i, o, null),
          kn(o, n),
          (a = !0),
          s || ((l = $n((r = e[8].call(null, o, e[14])))), (s = !0));
      },
      p(t, n) {
        e = t;
        const s = {};
        5 & n && (s.onclick = c),
          9 & n && (s.ongrab = d),
          17 & n && (s.ondrag = u),
          33 & n && (s.ondrop = p),
          3 & n && (s.disabled = e[1] || e[14].disabled),
          1 & n && (s.title = e[14].title),
          1 & n && (s.html = e[14].thumb),
          i.$set(s),
          (!a || 64 & n) && zn(o, "style", e[6]),
          r && an(r.update) && 1 & n && r.update.call(null, e[14]);
      },
      i(t) {
        a || (vr(i.$$.fragment, t), (a = !0));
      },
      o(t) {
        wr(i.$$.fragment, t), (a = !1);
      },
      d(t) {
        t && Mn(o), Fr(i), (s = !1), l();
      },
    }
  );
}
function zf(t) {
  let e,
    o,
    i = [],
    n = new Map(),
    r = t[0];
  const a = (t) => t[14].id;
  for (let e = 0; e < r.length; e += 1) {
    let o = Lf(t, r, e),
      s = a(o);
    n.set(s, (i[e] = Ff(s, o)));
  }
  return {
    c() {
      e = Tn("ul");
      for (let t = 0; t < i.length; t += 1) i[t].c();
      zn(e, "class", "PinturaShapePresetsList");
    },
    m(t, n) {
      Cn(t, e, n);
      for (let t = 0; t < i.length; t += 1) i[t].m(e, null);
      o = !0;
    },
    p(t, [o]) {
      127 & o &&
        ((r = t[0]),
        br(),
        (i = Pr(i, o, a, 1, t, r, n, e, Tr, Ff, null, Lf)),
        xr());
    },
    i(t) {
      if (!o) {
        for (let t = 0; t < r.length; t += 1) vr(i[t]);
        o = !0;
      }
    },
    o(t) {
      for (let t = 0; t < i.length; t += 1) wr(i[t]);
      o = !1;
    },
    d(t) {
      t && Mn(e);
      for (let t = 0; t < i.length; t += 1) i[t].d();
    },
  };
}
function Bf(t, e, o) {
  let i,
    n,
    { presets: r } = e,
    { disabled: a } = e,
    { onclickpreset: s } = e,
    { ongrabpreset: l } = e,
    { ondragpreset: c } = e,
    { ondroppreset: d } = e;
  const u = rs(0, { duration: 300 });
  dn(t, u, (t) => o(9, (n = t)));
  Yn(() => u.set(1));
  return (
    (t.$$set = (t) => {
      "presets" in t && o(0, (r = t.presets)),
        "disabled" in t && o(1, (a = t.disabled)),
        "onclickpreset" in t && o(2, (s = t.onclickpreset)),
        "ongrabpreset" in t && o(3, (l = t.ongrabpreset)),
        "ondragpreset" in t && o(4, (c = t.ondragpreset)),
        "ondroppreset" in t && o(5, (d = t.ondroppreset));
    }),
    (t.$$.update = () => {
      512 & t.$$.dirty && o(6, (i = "opacity:" + n));
    }),
    [
      r,
      a,
      s,
      l,
      c,
      d,
      i,
      u,
      (t, e) => e.mount && e.mount(t.firstChild, e),
      n,
      (t) => s(t.id),
      (t, e) => l && l(t.id, e),
      (t, e) => c && c(t.id, e),
      (t, e) => d && d(t.id, e),
    ]
  );
}
class Of extends Br {
  constructor(t) {
    super(),
      zr(this, t, Bf, zf, sn, {
        presets: 0,
        disabled: 1,
        onclickpreset: 2,
        ongrabpreset: 3,
        ondragpreset: 4,
        ondroppreset: 5,
      });
  }
}
var Df = (t) => /<svg /.test(t);
function Wf(t) {
  let e, o;
  return (
    (e = new Jd({ props: { items: t[13] } })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        8192 & o && (i.items = t[13]), e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function _f(t) {
  let e, o, i, n;
  const r = [Vf, Zf],
    a = [];
  function s(t, e) {
    return t[7] ? 0 : 1;
  }
  return (
    (e = s(t)),
    (o = a[e] = r[e](t)),
    {
      c() {
        o.c(), (i = En());
      },
      m(t, o) {
        a[e].m(t, o), Cn(t, i, o), (n = !0);
      },
      p(t, n) {
        let l = e;
        (e = s(t)),
          e === l
            ? a[e].p(t, n)
            : (br(),
              wr(a[l], 1, 1, () => {
                a[l] = null;
              }),
              xr(),
              (o = a[e]),
              o ? o.p(t, n) : ((o = a[e] = r[e](t)), o.c()),
              vr(o, 1),
              o.m(i.parentNode, i));
      },
      i(t) {
        n || (vr(o), (n = !0));
      },
      o(t) {
        wr(o), (n = !1);
      },
      d(t) {
        a[e].d(t), t && Mn(i);
      },
    }
  );
}
function Zf(t) {
  let e,
    o,
    i,
    n,
    r = t[13] && jf(t);
  return (
    (i = new Ql({
      props: {
        scrollAutoCancel: t[6],
        elasticity: t[0],
        $$slots: { default: [Nf] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (e = Tn("div")),
          r && r.c(),
          (o = An()),
          Ir(i.$$.fragment),
          zn(e, "class", "PinturaShapePresetsFlat");
      },
      m(t, a) {
        Cn(t, e, a), r && r.m(e, null), kn(e, o), Lr(i, e, null), (n = !0);
      },
      p(t, n) {
        t[13]
          ? r
            ? (r.p(t, n), 8192 & n && vr(r, 1))
            : ((r = jf(t)), r.c(), vr(r, 1), r.m(e, o))
          : r &&
            (br(),
            wr(r, 1, 1, () => {
              r = null;
            }),
            xr());
        const a = {};
        64 & n && (a.scrollAutoCancel = t[6]),
          1 & n && (a.elasticity = t[0]),
          536870974 & n && (a.$$scope = { dirty: n, ctx: t }),
          i.$set(a);
      },
      i(t) {
        n || (vr(r), vr(i.$$.fragment, t), (n = !0));
      },
      o(t) {
        wr(r), wr(i.$$.fragment, t), (n = !1);
      },
      d(t) {
        t && Mn(e), r && r.d(), Fr(i);
      },
    }
  );
}
function Vf(t) {
  let e,
    o,
    i,
    n,
    r,
    a,
    s,
    l = t[13] && Hf(t);
  const c = [
    { class: "PinturaControlList" },
    { tabs: t[8] },
    t[11],
    { layout: "compact" },
  ];
  let d = {
    $$slots: {
      default: [
        Gf,
        ({ tab: t }) => ({ 28: t }),
        ({ tab: t }) => (t ? 268435456 : 0),
      ],
    },
    $$scope: { ctx: t },
  };
  for (let t = 0; t < c.length; t += 1) d = en(d, c[t]);
  (n = new fl({ props: d })), n.$on("select", t[18]);
  const u = [
    { class: "PinturaControlPanels" },
    { panelClass: "PinturaControlPanel" },
    { panels: t[12] },
    t[11],
  ];
  let p = {
    $$slots: {
      default: [
        Kf,
        ({ panel: t, panelIsActive: e }) => ({ 26: t, 27: e }),
        ({ panel: t, panelIsActive: e }) =>
          (t ? 67108864 : 0) | (e ? 134217728 : 0),
      ],
    },
    $$scope: { ctx: t },
  };
  for (let t = 0; t < u.length; t += 1) p = en(p, u[t]);
  return (
    (a = new Pl({ props: p })),
    {
      c() {
        (e = Tn("div")),
          (o = Tn("div")),
          l && l.c(),
          (i = An()),
          Ir(n.$$.fragment),
          (r = An()),
          Ir(a.$$.fragment),
          zn(o, "class", "PinturaShapePresetsGroups"),
          zn(e, "class", "PinturaShapePresetsGrouped");
      },
      m(t, c) {
        Cn(t, e, c),
          kn(e, o),
          l && l.m(o, null),
          kn(o, i),
          Lr(n, o, null),
          kn(e, r),
          Lr(a, e, null),
          (s = !0);
      },
      p(t, e) {
        t[13]
          ? l
            ? (l.p(t, e), 8192 & e && vr(l, 1))
            : ((l = Hf(t)), l.c(), vr(l, 1), l.m(o, i))
          : l &&
            (br(),
            wr(l, 1, 1, () => {
              l = null;
            }),
            xr());
        const r =
          2304 & e
            ? Rr(c, [
                c[0],
                256 & e && { tabs: t[8] },
                2048 & e && Ar(t[11]),
                c[3],
              ])
            : {};
        805306368 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
        const s =
          6144 & e
            ? Rr(u, [
                u[0],
                u[1],
                4096 & e && { panels: t[12] },
                2048 & e && Ar(t[11]),
              ])
            : {};
        738198623 & e && (s.$$scope = { dirty: e, ctx: t }), a.$set(s);
      },
      i(t) {
        s || (vr(l), vr(n.$$.fragment, t), vr(a.$$.fragment, t), (s = !0));
      },
      o(t) {
        wr(l), wr(n.$$.fragment, t), wr(a.$$.fragment, t), (s = !1);
      },
      d(t) {
        t && Mn(e), l && l.d(), Fr(n), Fr(a);
      },
    }
  );
}
function jf(t) {
  let e, o;
  return (
    (e = new Jd({ props: { items: t[13] } })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        8192 & o && (i.items = t[13]), e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Nf(t) {
  let e, o;
  return (
    (e = new Of({
      props: {
        presets: t[5],
        onclickpreset: t[1],
        ongrabpreset: t[2],
        ondragpreset: t[3],
        ondroppreset: t[4],
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        32 & o && (i.presets = t[5]),
          2 & o && (i.onclickpreset = t[1]),
          4 & o && (i.ongrabpreset = t[2]),
          8 & o && (i.ondragpreset = t[3]),
          16 & o && (i.ondroppreset = t[4]),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Hf(t) {
  let e, o;
  return (
    (e = new Jd({ props: { items: t[13] } })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        8192 & o && (i.items = t[13]), e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Uf(t) {
  let e, o;
  return (
    (e = new zl({
      props: { $$slots: { default: [Xf] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        805306368 & o && (i.$$scope = { dirty: o, ctx: t }), e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Xf(t) {
  let e,
    o = t[28].icon + "";
  return {
    c() {
      e = Pn("g");
    },
    m(t, i) {
      Cn(t, e, i), (e.innerHTML = o);
    },
    p(t, i) {
      268435456 & i && o !== (o = t[28].icon + "") && (e.innerHTML = o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Yf(t) {
  let e,
    o,
    i = t[28].label + "";
  return {
    c() {
      (e = Tn("span")), (o = Rn(i));
    },
    m(t, i) {
      Cn(t, e, i), kn(e, o);
    },
    p(t, e) {
      268435456 & e && i !== (i = t[28].label + "") && On(o, i);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Gf(t) {
  let e,
    o,
    i,
    n = t[28].icon && Uf(t),
    r = !t[28].hideLabel && Yf(t);
  return {
    c() {
      n && n.c(), (e = An()), r && r.c(), (o = En());
    },
    m(t, a) {
      n && n.m(t, a), Cn(t, e, a), r && r.m(t, a), Cn(t, o, a), (i = !0);
    },
    p(t, i) {
      t[28].icon
        ? n
          ? (n.p(t, i), 268435456 & i && vr(n, 1))
          : ((n = Uf(t)), n.c(), vr(n, 1), n.m(e.parentNode, e))
        : n &&
          (br(),
          wr(n, 1, 1, () => {
            n = null;
          }),
          xr()),
        t[28].hideLabel
          ? r && (r.d(1), (r = null))
          : r
          ? r.p(t, i)
          : ((r = Yf(t)), r.c(), r.m(o.parentNode, o));
    },
    i(t) {
      i || (vr(n), (i = !0));
    },
    o(t) {
      wr(n), (i = !1);
    },
    d(t) {
      n && n.d(t), t && Mn(e), r && r.d(t), t && Mn(o);
    },
  };
}
function qf(t) {
  let e, o;
  return (
    (e = new Of({
      props: {
        presets: t[10][t[26]].items,
        disabled: t[10][t[26]].disabled,
        onclickpreset: t[1],
        ongrabpreset: t[2],
        ondragpreset: t[3],
        ondroppreset: t[4],
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        67109888 & o && (i.presets = t[10][t[26]].items),
          67109888 & o && (i.disabled = t[10][t[26]].disabled),
          2 & o && (i.onclickpreset = t[1]),
          4 & o && (i.ongrabpreset = t[2]),
          8 & o && (i.ondragpreset = t[3]),
          16 & o && (i.ondroppreset = t[4]),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Kf(t) {
  let e, o;
  return (
    (e = new Ql({
      props: {
        scroll: t[27] ? { scrollOffset: 0, animate: !1 } : void 0,
        scrollAutoCancel: t[6],
        elasticity: t[0],
        $$slots: { default: [qf] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        134217728 & o &&
          (i.scroll = t[27] ? { scrollOffset: 0, animate: !1 } : void 0),
          64 & o && (i.scrollAutoCancel = t[6]),
          1 & o && (i.elasticity = t[0]),
          603980830 & o && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function Jf(t) {
  let e, o, i, n;
  const r = [_f, Wf],
    a = [];
  function s(t, e) {
    return t[6] ? 0 : t[13] ? 1 : -1;
  }
  return (
    ~(o = s(t)) && (i = a[o] = r[o](t)),
    {
      c() {
        (e = Tn("div")),
          i && i.c(),
          zn(e, "class", "PinturaShapePresetsPalette");
      },
      m(t, i) {
        Cn(t, e, i), ~o && a[o].m(e, null), (n = !0);
      },
      p(t, [n]) {
        let l = o;
        (o = s(t)),
          o === l
            ? ~o && a[o].p(t, n)
            : (i &&
                (br(),
                wr(a[l], 1, 1, () => {
                  a[l] = null;
                }),
                xr()),
              ~o
                ? ((i = a[o]),
                  i ? i.p(t, n) : ((i = a[o] = r[o](t)), i.c()),
                  vr(i, 1),
                  i.m(e, null))
                : (i = null));
      },
      i(t) {
        n || (vr(i), (n = !0));
      },
      o(t) {
        wr(i), (n = !1);
      },
      d(t) {
        t && Mn(e), ~o && a[o].d();
      },
    }
  );
}
function Qf(t, e, o) {
  let i,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    { locale: h } = e,
    { presets: m } = e,
    { scrollElasticity: g } = e,
    { enableSelectImage: f = !0 } = e,
    { willRenderPresetToolbar: $ = W } = e,
    { onaddpreset: y = n } = e,
    { ongrabpreset: b } = e,
    { ondragpreset: x } = e,
    { ondroppreset: v } = e;
  const S = "presets-" + T(),
    k = (t, e = "") =>
      Df(t) ? t : Ke(t) ? no(t, e) : `<img src="${t}" alt="${e}"/>`,
    C = (t) => F(he(t)),
    M = ["src", "alt", "thumb", "shape", "id", "mount", "disabled"],
    P = (t) =>
      t.map((t) =>
        ((t) => Qe(t) && w(t[0]) && Qe(t[1]))(t)
          ? {
              ...t[2],
              id: `${S}-${t[0].toLowerCase()}`,
              label: t[0],
              items: P(t[1]),
            }
          : ((t) => {
              let e,
                o,
                i,
                n,
                r,
                a,
                s,
                l = t;
              return (
                w(t)
                  ? Ke(t)
                    ? ((e = t), (r = t), (n = k(e, r)))
                    : ((e = t), (r = C(e)), (n = k(e, r)))
                  : ((e = t.src),
                    (r =
                      t.alt ||
                      (w(e) ? C(e) : w(t.thumb) ? C(t.thumb) : void 0)),
                    (n = k(t.thumb || e, r)),
                    (o = t.shape),
                    (a = t.mount),
                    (s = t.disabled),
                    (i = Object.keys(t).reduce(
                      (e, o) => (M.includes(o) || (e[o] = t[o]), e),
                      {}
                    ))),
                {
                  id: l,
                  src: e,
                  thumb: n,
                  shape: o,
                  shapeProps: i,
                  alt: r,
                  title: r,
                  mount: a,
                  disabled: s,
                }
              );
            })(t)
      );
  return (
    (t.$$set = (t) => {
      "locale" in t && o(14, (h = t.locale)),
        "presets" in t && o(15, (m = t.presets)),
        "scrollElasticity" in t && o(0, (g = t.scrollElasticity)),
        "enableSelectImage" in t && o(16, (f = t.enableSelectImage)),
        "willRenderPresetToolbar" in t &&
          o(17, ($ = t.willRenderPresetToolbar)),
        "onaddpreset" in t && o(1, (y = t.onaddpreset)),
        "ongrabpreset" in t && o(2, (b = t.ongrabpreset)),
        "ondragpreset" in t && o(3, (x = t.ondragpreset)),
        "ondroppreset" in t && o(4, (v = t.ondroppreset));
    }),
    (t.$$.update = () => {
      32768 & t.$$.dirty && o(5, (i = P(m))),
        32 & t.$$.dirty && o(6, (r = i.length)),
        96 & t.$$.dirty && o(7, (a = r && i.some((t) => !!t.items))),
        160 & t.$$.dirty && o(8, (s = a && i)),
        160 & t.$$.dirty &&
          o(10, (l = a && i.reduce((t, e) => ((t[e.id] = e), t), {}))),
        768 & t.$$.dirty &&
          o(9, (c = c || (s && (s.find((t) => !t.disabled) || {}).id))),
        512 & t.$$.dirty && o(11, (d = { name: S, selected: c })),
        256 & t.$$.dirty && o(12, (u = s && s.map((t) => t.id))),
        212994 & t.$$.dirty &&
          o(
            13,
            (p =
              h &&
              $([
                f && [
                  "Button",
                  "browse",
                  {
                    label: h.shapeLabelButtonSelectSticker,
                    icon: h.shapeIconButtonSelectSticker,
                    onclick: () => {
                      gu().then((t) => {
                        t && y(t);
                      });
                    },
                  },
                ],
              ]))
          );
    }),
    [
      g,
      y,
      b,
      x,
      v,
      i,
      r,
      a,
      s,
      c,
      l,
      d,
      u,
      p,
      h,
      m,
      f,
      $,
      ({ detail: t }) => o(9, (c = t)),
    ]
  );
}
class t$ extends Br {
  constructor(t) {
    super(),
      zr(this, t, Qf, Jf, sn, {
        locale: 14,
        presets: 15,
        scrollElasticity: 0,
        enableSelectImage: 16,
        willRenderPresetToolbar: 17,
        onaddpreset: 1,
        ongrabpreset: 2,
        ondragpreset: 3,
        ondroppreset: 4,
      });
  }
}
function e$(t) {
  let e, o, i, n;
  const r = [
    { locale: t[4] },
    { uid: t[14] },
    { parentRect: t[26] },
    { rootRect: t[35] },
    { utilRect: t[27] },
    { offset: t[37] },
    { disabled: !t[32] && t[30] },
    { contextRotation: t[17] },
    { contextFlipX: t[18] },
    { contextFlipY: t[19] },
    { contextZoom: t[22] },
    { active: t[23] },
    { opacity: t[31] },
    { hoverColor: t[49] },
    { eraseRadius: t[39] },
    { selectRadius: t[6] },
    { enableButtonFlipVertical: t[9] },
    { mapEditorPointToImagePoint: t[15] },
    { mapImagePointToEditorPoint: t[16] },
    { enableTapToAddText: t[12] },
    { textInputMode: t[7] },
    { willStartInteraction: t[68] },
    { oninteractionstart: t[71] },
    { oninteractionupdate: t[72] },
    { oninteractionrelease: t[73] },
    { oninteractionend: t[75] },
    { oninteractioncancel: t[74] },
    { onhovershape: t[77] },
    { onaddshape: t[135] },
    { onselectshape: t[136] },
    { ontapshape: t[137] },
    { onupdateshape: t[138] },
    { onremoveshape: t[139] },
    t[46],
  ];
  function a(e) {
    t[141](e);
  }
  function s(e) {
    t[142](e);
  }
  let l = {};
  for (let t = 0; t < r.length; t += 1) l = en(l, r[t]);
  return (
    void 0 !== t[28] && (l.markup = t[28]),
    void 0 !== t[48] && (l.ui = t[48]),
    (e = new yf({ props: l })),
    t[140](e),
    or.push(() => Er(e, "markup", a)),
    or.push(() => Er(e, "ui", s)),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, o) {
        Lr(e, t, o), (n = !0);
      },
      p(t, n) {
        const a =
          (1288688336 & n[0]) | (295379 & n[1]) | (67157568 & n[2])
            ? Rr(r, [
                16 & n[0] && { locale: t[4] },
                16384 & n[0] && { uid: t[14] },
                67108864 & n[0] && { parentRect: t[26] },
                16 & n[1] && { rootRect: t[35] },
                134217728 & n[0] && { utilRect: t[27] },
                64 & n[1] && { offset: t[37] },
                (1073741824 & n[0]) | (2 & n[1]) && {
                  disabled: !t[32] && t[30],
                },
                131072 & n[0] && { contextRotation: t[17] },
                262144 & n[0] && { contextFlipX: t[18] },
                524288 & n[0] && { contextFlipY: t[19] },
                4194304 & n[0] && { contextZoom: t[22] },
                8388608 & n[0] && { active: t[23] },
                1 & n[1] && { opacity: t[31] },
                262144 & n[1] && { hoverColor: t[49] },
                256 & n[1] && { eraseRadius: t[39] },
                64 & n[0] && { selectRadius: t[6] },
                512 & n[0] && { enableButtonFlipVertical: t[9] },
                32768 & n[0] && { mapEditorPointToImagePoint: t[15] },
                65536 & n[0] && { mapImagePointToEditorPoint: t[16] },
                4096 & n[0] && { enableTapToAddText: t[12] },
                128 & n[0] && { textInputMode: t[7] },
                64 & n[2] && { willStartInteraction: t[68] },
                512 & n[2] && { oninteractionstart: t[71] },
                1024 & n[2] && { oninteractionupdate: t[72] },
                2048 & n[2] && { oninteractionrelease: t[73] },
                8192 & n[2] && { oninteractionend: t[75] },
                4096 & n[2] && { oninteractioncancel: t[74] },
                32768 & n[2] && { onhovershape: t[77] },
                (128 & n[1]) | (67108864 & n[2]) && { onaddshape: t[135] },
                128 & n[1] && { onselectshape: t[136] },
                128 & n[1] && { ontapshape: t[137] },
                (128 & n[1]) | (67108864 & n[2]) && { onupdateshape: t[138] },
                (128 & n[1]) | (67108864 & n[2]) && { onremoveshape: t[139] },
                32768 & n[1] && Ar(t[46]),
              ])
            : {};
        !o &&
          268435456 & n[0] &&
          ((o = !0), (a.markup = t[28]), dr(() => (o = !1))),
          !i && 131072 & n[1] && ((i = !0), (a.ui = t[48]), dr(() => (i = !1))),
          e.$set(a);
      },
      i(t) {
        n || (vr(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (n = !1);
      },
      d(o) {
        t[140](null), Fr(e, o);
      },
    }
  );
}
function o$(t) {
  let e,
    o,
    i,
    r,
    a,
    s = t[36] && e$(t);
  return {
    c() {
      (e = Tn("div")),
        s && s.c(),
        zn(e, "slot", "main"),
        zn(e, "style", (o = "cursor: " + t[40]));
    },
    m(o, l) {
      Cn(o, e, l),
        s && s.m(e, null),
        t[143](e),
        (i = !0),
        r ||
          ((a = [
            $n(ws.call(null, e)),
            In(e, "dropfiles", function () {
              an(t[11] ? t[82] : n) &&
                (t[11] ? t[82] : n).apply(this, arguments);
            }),
            $n(bs.call(null, e)),
            In(e, "measure", t[133]),
            In(
              e,
              "wheel",
              function () {
                an(t[42] ? t[87] : n) &&
                  (t[42] ? t[87] : n).apply(this, arguments);
              },
              { passive: !1 }
            ),
            In(e, "interactionstart", function () {
              an(t[43] ? t[83] : n) &&
                (t[43] ? t[83] : n).apply(this, arguments);
            }),
            In(e, "interactionupdate", function () {
              an(t[43] ? t[84] : n) &&
                (t[43] ? t[84] : n).apply(this, arguments);
            }),
            In(e, "interactionrelease", function () {
              an(t[43] ? t[85] : n) &&
                (t[43] ? t[85] : n).apply(this, arguments);
            }),
            In(e, "interactionend", function () {
              an(t[43] ? t[86] : n) &&
                (t[43] ? t[86] : n).apply(this, arguments);
            }),
            $n(
              Nl.call(null, e, {
                drag: !0,
                pinch: !0,
                inertia: !0,
                shouldStartInteraction: t[144],
              })
            ),
          ]),
          (r = !0));
    },
    p(n, r) {
      (t = n)[36]
        ? s
          ? (s.p(t, r), 32 & r[1] && vr(s, 1))
          : ((s = e$(t)), s.c(), vr(s, 1), s.m(e, null))
        : s &&
          (br(),
          wr(s, 1, 1, () => {
            s = null;
          }),
          xr()),
        (!i || (512 & r[1] && o !== (o = "cursor: " + t[40]))) &&
          zn(e, "style", o);
    },
    i(t) {
      i || (vr(s), (i = !0));
    },
    o(t) {
      wr(s), (i = !1);
    },
    d(o) {
      o && Mn(e), s && s.d(), t[143](null), (r = !1), rn(a);
    },
  };
}
function i$(t) {
  let e, o;
  return (
    (e = new t$({
      props: {
        locale: t[4],
        presets: t[13],
        enableSelectImage: t[10],
        willRenderPresetToolbar: t[45],
        onaddpreset: t[81],
        ongrabpreset: t[78],
        ondragpreset: t[79],
        ondroppreset: t[80],
        scrollElasticity: t[44],
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        16 & o[0] && (i.locale = t[4]),
          8192 & o[0] && (i.presets = t[13]),
          1024 & o[0] && (i.enableSelectImage = t[10]),
          16384 & o[1] && (i.willRenderPresetToolbar = t[45]),
          8192 & o[1] && (i.scrollElasticity = t[44]),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function n$(t) {
  let e, o, i, n, r, a;
  const s = [a$, r$],
    l = [];
  function c(t, e) {
    return t[41] ? 0 : 1;
  }
  (o = c(t)), (i = l[o] = s[o](t));
  let d = t[25] && s$(t);
  return {
    c() {
      (e = Tn("div")),
        i.c(),
        (n = An()),
        d && d.c(),
        (r = En()),
        zn(e, "class", "PinturaControlPanels");
    },
    m(t, i) {
      Cn(t, e, i),
        l[o].m(e, null),
        Cn(t, n, i),
        d && d.m(t, i),
        Cn(t, r, i),
        (a = !0);
    },
    p(t, n) {
      let a = o;
      (o = c(t)),
        o === a
          ? l[o].p(t, n)
          : (br(),
            wr(l[a], 1, 1, () => {
              l[a] = null;
            }),
            xr(),
            (i = l[o]),
            i ? i.p(t, n) : ((i = l[o] = s[o](t)), i.c()),
            vr(i, 1),
            i.m(e, null)),
        t[25]
          ? d
            ? (d.p(t, n), 33554432 & n[0] && vr(d, 1))
            : ((d = s$(t)), d.c(), vr(d, 1), d.m(r.parentNode, r))
          : d &&
            (br(),
            wr(d, 1, 1, () => {
              d = null;
            }),
            xr());
    },
    i(t) {
      a || (vr(i), vr(d), (a = !0));
    },
    o(t) {
      wr(i), wr(d), (a = !1);
    },
    d(t) {
      t && Mn(e), l[o].d(), t && Mn(n), d && d.d(t), t && Mn(r);
    },
  };
}
function r$(t) {
  let e, o, i;
  return (
    (o = new Rf({
      props: {
        locale: t[4],
        shape: t[29],
        onchange: t[76],
        controls: t[8],
        scrollElasticity: t[44],
      },
    })),
    {
      c() {
        (e = Tn("div")),
          Ir(o.$$.fragment),
          zn(e, "class", "PinturaControlPanel");
      },
      m(t, n) {
        Cn(t, e, n), Lr(o, e, null), (i = !0);
      },
      p(t, e) {
        const i = {};
        16 & e[0] && (i.locale = t[4]),
          536870912 & e[0] && (i.shape = t[29]),
          256 & e[0] && (i.controls = t[8]),
          8192 & e[1] && (i.scrollElasticity = t[44]),
          o.$set(i);
      },
      i(t) {
        i || (vr(o.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && Mn(e), Fr(o);
      },
    }
  );
}
function a$(t) {
  let e, o, i;
  return (
    (o = new t$({
      props: {
        locale: t[4],
        presets: t[13],
        enableSelectImage: t[10],
        willRenderPresetToolbar: t[45],
        onaddpreset: t[81],
        ongrabpreset: t[78],
        ondragpreset: t[79],
        ondroppreset: t[80],
        scrollElasticity: t[44],
      },
    })),
    {
      c() {
        (e = Tn("div")),
          Ir(o.$$.fragment),
          zn(e, "class", "PinturaControlPanel");
      },
      m(t, n) {
        Cn(t, e, n), Lr(o, e, null), (i = !0);
      },
      p(t, e) {
        const i = {};
        16 & e[0] && (i.locale = t[4]),
          8192 & e[0] && (i.presets = t[13]),
          1024 & e[0] && (i.enableSelectImage = t[10]),
          16384 & e[1] && (i.willRenderPresetToolbar = t[45]),
          8192 & e[1] && (i.scrollElasticity = t[44]),
          o.$set(i);
      },
      i(t) {
        i || (vr(o.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && Mn(e), Fr(o);
      },
    }
  );
}
function s$(t) {
  let e, o;
  return (
    (e = new Ql({
      props: {
        class: "PinturaControlListScroller",
        elasticity: t[44],
        $$slots: { default: [u$] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        8192 & o[1] && (i.elasticity = t[44]),
          (16777233 & o[0]) | (1 & o[6]) && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function l$(t) {
  let e, o;
  return (
    (e = new zl({
      props: { $$slots: { default: [c$] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        (16 & o[0]) | (1073741824 & o[5]) | (1 & o[6]) &&
          (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function c$(t) {
  let e,
    o = (S(t[185].icon) ? t[185].icon(t[4]) : t[185].icon) + "";
  return {
    c() {
      e = Pn("g");
    },
    m(t, i) {
      Cn(t, e, i), (e.innerHTML = o);
    },
    p(t, i) {
      (16 & i[0]) | (1073741824 & i[5]) &&
        o !== (o = (S(t[185].icon) ? t[185].icon(t[4]) : t[185].icon) + "") &&
        (e.innerHTML = o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function d$(t) {
  let e,
    o,
    i,
    n,
    r,
    a = (S(t[185].label) ? t[185].label(t[4]) : t[185].label) + "",
    s = t[185].icon && l$(t);
  return {
    c() {
      (e = Tn("div")),
        s && s.c(),
        (o = An()),
        (i = Tn("span")),
        (n = Rn(a)),
        zn(e, "slot", "option");
    },
    m(t, a) {
      Cn(t, e, a), s && s.m(e, null), kn(e, o), kn(e, i), kn(i, n), (r = !0);
    },
    p(t, i) {
      t[185].icon
        ? s
          ? (s.p(t, i), 1073741824 & i[5] && vr(s, 1))
          : ((s = l$(t)), s.c(), vr(s, 1), s.m(e, o))
        : s &&
          (br(),
          wr(s, 1, 1, () => {
            s = null;
          }),
          xr()),
        (!r || (16 & i[0]) | (1073741824 & i[5])) &&
          a !==
            (a = (S(t[185].label) ? t[185].label(t[4]) : t[185].label) + "") &&
          On(n, a);
    },
    i(t) {
      r || (vr(s), (r = !0));
    },
    o(t) {
      wr(s), (r = !1);
    },
    d(t) {
      t && Mn(e), s && s.d();
    },
  };
}
function u$(t) {
  let e, o;
  return (
    (e = new dd({
      props: {
        locale: t[4],
        class: "PinturaControlList",
        optionClass: "PinturaControlListOption",
        layout: "row",
        options: t[24],
        selectedIndex: t[24].findIndex(t[134]),
        onchange: t[70],
        $$slots: {
          option: [
            d$,
            ({ option: t }) => ({ 185: t }),
            ({ option: t }) => [0, 0, 0, 0, 0, t ? 1073741824 : 0],
          ],
        },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        16 & o[0] && (i.locale = t[4]),
          16777216 & o[0] && (i.options = t[24]),
          16777217 & o[0] && (i.selectedIndex = t[24].findIndex(t[134])),
          (16 & o[0]) | (1073741824 & o[5]) | (1 & o[6]) &&
            (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function p$(t) {
  let e, o, i, n;
  const r = [n$, i$],
    a = [];
  function s(t, e) {
    return t[34] ? 0 : t[41] ? 1 : -1;
  }
  return (
    ~(o = s(t)) && (i = a[o] = r[o](t)),
    {
      c() {
        (e = Tn("div")),
          i && i.c(),
          zn(e, "slot", "footer"),
          zn(e, "style", t[47]);
      },
      m(t, i) {
        Cn(t, e, i), ~o && a[o].m(e, null), (n = !0);
      },
      p(t, l) {
        let c = o;
        (o = s(t)),
          o === c
            ? ~o && a[o].p(t, l)
            : (i &&
                (br(),
                wr(a[c], 1, 1, () => {
                  a[c] = null;
                }),
                xr()),
              ~o
                ? ((i = a[o]),
                  i ? i.p(t, l) : ((i = a[o] = r[o](t)), i.c()),
                  vr(i, 1),
                  i.m(e, null))
                : (i = null)),
          (!n || 65536 & l[1]) && zn(e, "style", t[47]);
      },
      i(t) {
        n || (vr(i), (n = !0));
      },
      o(t) {
        wr(i), (n = !1);
      },
      d(t) {
        t && Mn(e), ~o && a[o].d();
      },
    }
  );
}
function h$(t) {
  let e, o;
  return (
    (e = new vm({
      props: { $$slots: { footer: [p$], main: [o$] }, $$scope: { ctx: t } },
    })),
    e.$on("measure", t[145]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        (2146435025 & o[0]) | (524287 & o[1]) | (1 & o[6]) &&
          (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function m$(t, e, o) {
  let i,
    n,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    h,
    m,
    g,
    f,
    $,
    y,
    b,
    x,
    v,
    S,
    k,
    C,
    M,
    T,
    P,
    R,
    A,
    E,
    I,
    L,
    F,
    z,
    B,
    O,
    D,
    _,
    Z,
    V,
    j,
    N,
    H,
    Y,
    G,
    K,
    J,
    tt,
    et,
    ot,
    it,
    nt,
    st,
    lt,
    dt,
    ut,
    pt,
    ht,
    mt,
    gt,
    ft,
    $t,
    yt,
    bt = Qi,
    xt = () => (bt(), (bt = ln(Rt, (t) => o(23, (Y = t)))), Rt),
    vt = Qi,
    wt = () => (vt(), (vt = ln(pe, (t) => o(26, (J = t)))), pe),
    St = Qi,
    kt = () => (St(), (St = ln(Et, (t) => o(122, (ot = t)))), Et),
    Ct = Qi,
    Mt = () => (Ct(), (Ct = ln(zt, (t) => o(28, (nt = t)))), zt),
    Tt = Qi,
    Pt = () => (Tt(), (Tt = ln(At, (t) => o(31, (lt = t)))), At);
  t.$$.on_destroy.push(() => bt()),
    t.$$.on_destroy.push(() => vt()),
    t.$$.on_destroy.push(() => St()),
    t.$$.on_destroy.push(() => Ct()),
    t.$$.on_destroy.push(() => Tt());
  let { isActive: Rt } = e;
  xt();
  let { isActiveFraction: At } = e;
  Pt();
  let { isVisible: Et } = e;
  kt();
  let { stores: Lt } = e,
    { locale: Ft = {} } = e,
    { shapes: zt } = e;
  Mt();
  let { toolbar: Bt = [] } = e,
    { toolShapes: Ot = [] } = e,
    { toolActive: Dt } = e,
    { toolSelectRadius: Wt } = e,
    { zoomOptions: jt = [0.25, 0.5, 1, 1.25, 1.5, 2, 3, 4, 6, 8, 16] } = e,
    { zoomAdjustStep: Nt = 0.25 } = e,
    { zoomAdjustFactor: Ht = 0.1 } = e,
    { textInputMode: Ut } = e,
    { shapeControls: Xt = {} } = e,
    { enableButtonFlipVertical: Yt = !1 } = e,
    { enablePresetSelectImage: Gt = !0 } = e,
    { enablePresetDropImage: qt = !0 } = e,
    { enableZoom: Jt = !0 } = e,
    { enablePan: Qt = !0 } = e,
    { enableSelectToolToAddShape: te = !1 } = e,
    { enableTapToAddText: ee = !1 } = e,
    { enableZoomControls: oe = !1 } = e,
    { willRenderPresetToolbar: ie } = e,
    { willStartInteraction: ne } = e,
    { shapePresets: re = [] } = e,
    { utilKey: ae } = e,
    { mapScreenPointToImagePoint: se } = e,
    { mapImagePointToScreenPoint: le } = e,
    { imageRotation: ce = 0 } = e,
    { imageFlipX: de = !1 } = e,
    { imageFlipY: ue = !1 } = e,
    { parentRect: pe } = e;
  wt();
  let { hooks: he = {} } = e;
  const {
    env: me,
    animation: ge,
    history: fe,
    rootRect: $e,
    rootColorSecondary: ye,
    stageRect: be,
    stageScalar: xe,
    utilRect: ve,
    utilTools: we,
    elasticityMultiplier: Se,
    scrollElasticity: ke,
    imageOverlayMarkup: Ce,
    imagePreviewModifiers: Me,
    imageCropRect: Te,
    shapePreprocessor: Pe,
    imageSelectionRect: Re,
    imageSelectionZoom: Ae,
    imageSelectionPan: Ee,
    imageSelectionStageFitScalar: Ie,
    imageSelectionStoredState: Le,
    imagePreviewUpscale: Fe,
    isInteracting: ze,
  } = Lt;
  dn(t, me, (t) => o(130, (mt = t))),
    dn(t, ge, (t) => o(131, (gt = t))),
    dn(t, $e, (t) => o(35, (tt = t))),
    dn(t, ye, (t) => o(49, (yt = t))),
    dn(t, be, (t) => o(107, (j = t))),
    dn(t, xe, (t) => o(106, (Z = t))),
    dn(t, ve, (t) => o(27, (it = t))),
    dn(t, Ce, (t) => o(48, ($t = t))),
    dn(t, Me, (t) => o(120, (et = t))),
    dn(t, Te, (t) => o(163, (dt = t))),
    dn(t, Pe, (t) => o(127, (st = t))),
    dn(t, Re, (t) => o(158, (_ = t))),
    dn(t, Ae, (t) => o(108, (N = t))),
    dn(t, Ee, (t) => o(159, (V = t))),
    dn(t, Ie, (t) => o(111, (K = t))),
    dn(t, Le, (t) => o(160, (H = t))),
    dn(t, Fe, (t) => o(110, (G = t))),
    dn(t, ze, (t) => o(164, (pt = t)));
  const Be = (t = {}) => {
      const { pan: e = V, zoom: o = N } = t;
      fn(Le, (H = { translation: e, zoom: o }), H);
    },
    Oe = () => {
      fn(Ae, (N = void 0), N),
        fn(Ee, (V = U()), V),
        We.set(void 0, { hard: !0 });
    },
    De = () => {
      Oe(), Be();
    },
    We = ss(void 0, { precision: 0.01 });
  We.subscribe((t) => {
    if (void 0 === t) return fn(Ae, (N = void 0), N), void fn(Ee, (V = U()), V);
    const e = N;
    t <= 1 ? fn(Ee, (V = U()), V) : t <= e && fn(Ee, (V = at(V, 0.8)), V),
      fn(Ae, (N = t), N);
  });
  const _e = (t) => {
      We.update((e) => {
        const o = t(e || K);
        return Be({ zoom: o }), o;
      });
    },
    Ze = Qn("keysPressed");
  dn(t, Ze, (t) => o(128, (ut = t)));
  const Ve = (t) => {
      const [e, o] = Ot[t];
      let i,
        n,
        r = "relative" === o.position;
      const a = r ? "0%" : 0,
        s = r ? "0%" : 0;
      Vo(e) || Wo(e)
        ? ((n = r ? "20%" : 0.2 * J.width),
          (i = Io(e)),
          (i.x = a),
          (i.y = s),
          Ti(i, { width: n, height: n }, J))
        : jo(e)
        ? ((n = r ? "10%" : 0.1 * J.width),
          (i = Io(e)),
          (i.x = a),
          (i.y = s),
          Ti(i, { rx: n, ry: n }, J))
        : No(e) &&
          ((n = r ? "10%" : 0.1 * J.width),
          (i = Io(e)),
          (i.x1 = a),
          (i.y1 = s),
          (i.x2 = a),
          (i.y2 = s)),
        i &&
          Promise.resolve().then(() => {
            Qe(Ge(i, void 0, n));
          });
    },
    je = (t) => se(Gg(t, tt));
  let Ne,
    He,
    Ue = {};
  let Xe, Ye;
  const Ge = (t, e, o) => {
      let i = !1;
      e || ((i = !0), (e = R ? se(_t(j)) : _t(dt))),
        (e.x -= J.x || 0),
        (e.y -= J.y || 0),
        (de || ue) && ((t.flipX = de), (t.flipY = ue));
      const n = Ne.getShapesNearPosition(e);
      if (i && n.length) {
        const t = 0.1 * Math.min(dt.width, dt.height);
        (e.x += Math.round(-t + Math.random() * t * 2)),
          (e.y += Math.round(-t + Math.random() * t * 2));
      }
      if (
        (0 !== ce && (t.rotation = de && ue ? -ce : de || ue ? ce : -ce),
        Je(t, "width") && Je(t, "height"))
      ) {
        const { width: o, height: i } = Mi(t, ["width", "height"], J);
        Ti(t, { x: e.x - 0.5 * o, y: e.y - 0.5 * i }, J);
      } else if (jo(t)) Ti(t, { x: e.x, y: e.y }, J);
      else if (No(t)) {
        const {
            x1: i,
            y1: n,
            x2: r,
            y2: a,
          } = Mi(t, ["x1", "y1", "x2", "y2"], J),
          s = ct(X(i, n), X(r, a)) || w(o) ? bi(o, J.width) : o;
        Ti(t, { x1: e.x - s, y1: e.y + s, x2: e.x + s, y2: e.y - s }, J);
      }
      return t;
    },
    Ke = (t, e) => {
      const o = Ge(Bo(t, dt), e);
      return (
        t.shape &&
          (Je(t.shape, "x") && (o.x = t.shape.x),
          Je(t.shape, "y") && (o.y = t.shape.y)),
        Qe(o)
      );
    },
    Qe = (t) => {
      const { beforeAddShape: e = () => !0 } = he;
      if (e(t))
        return (
          Ne.addShape(t), Ne.selectShape(t), fe.write(), F("addshape", t), t
        );
    };
  let to = !1;
  let eo = void 0,
    oo = void 0,
    io = void 0,
    no = void 0;
  let ro,
    ao = Date.now(),
    so = 0,
    lo = !1,
    co = !1;
  const uo = () => fe.write();
  let po;
  const ho = Wr({});
  dn(t, ho, (t) => o(129, (ht = t)));
  const mo = ss(gt ? 20 : 0);
  dn(t, mo, (t) => o(132, (ft = t)));
  return (
    (t.$$set = (t) => {
      "isActive" in t && xt(o(1, (Rt = t.isActive))),
        "isActiveFraction" in t && Pt(o(2, (At = t.isActiveFraction))),
        "isVisible" in t && kt(o(3, (Et = t.isVisible))),
        "stores" in t && o(91, (Lt = t.stores)),
        "locale" in t && o(4, (Ft = t.locale)),
        "shapes" in t && Mt(o(5, (zt = t.shapes))),
        "toolbar" in t && o(92, (Bt = t.toolbar)),
        "toolShapes" in t && o(93, (Ot = t.toolShapes)),
        "toolActive" in t && o(0, (Dt = t.toolActive)),
        "toolSelectRadius" in t && o(6, (Wt = t.toolSelectRadius)),
        "zoomOptions" in t && o(94, (jt = t.zoomOptions)),
        "zoomAdjustStep" in t && o(95, (Nt = t.zoomAdjustStep)),
        "zoomAdjustFactor" in t && o(96, (Ht = t.zoomAdjustFactor)),
        "textInputMode" in t && o(7, (Ut = t.textInputMode)),
        "shapeControls" in t && o(8, (Xt = t.shapeControls)),
        "enableButtonFlipVertical" in t &&
          o(9, (Yt = t.enableButtonFlipVertical)),
        "enablePresetSelectImage" in t &&
          o(10, (Gt = t.enablePresetSelectImage)),
        "enablePresetDropImage" in t && o(11, (qt = t.enablePresetDropImage)),
        "enableZoom" in t && o(97, (Jt = t.enableZoom)),
        "enablePan" in t && o(98, (Qt = t.enablePan)),
        "enableSelectToolToAddShape" in t &&
          o(99, (te = t.enableSelectToolToAddShape)),
        "enableTapToAddText" in t && o(12, (ee = t.enableTapToAddText)),
        "enableZoomControls" in t && o(100, (oe = t.enableZoomControls)),
        "willRenderPresetToolbar" in t &&
          o(101, (ie = t.willRenderPresetToolbar)),
        "willStartInteraction" in t && o(102, (ne = t.willStartInteraction)),
        "shapePresets" in t && o(13, (re = t.shapePresets)),
        "utilKey" in t && o(14, (ae = t.utilKey)),
        "mapScreenPointToImagePoint" in t &&
          o(15, (se = t.mapScreenPointToImagePoint)),
        "mapImagePointToScreenPoint" in t &&
          o(16, (le = t.mapImagePointToScreenPoint)),
        "imageRotation" in t && o(17, (ce = t.imageRotation)),
        "imageFlipX" in t && o(18, (de = t.imageFlipX)),
        "imageFlipY" in t && o(19, (ue = t.imageFlipY)),
        "parentRect" in t && wt(o(20, (pe = t.parentRect))),
        "hooks" in t && o(103, (he = t.hooks));
    }),
    (t.$$.update = () => {
      var e, w, z;
      8388608 & t.$$.dirty[0] &&
        (Y
          ? (fn(Ae, (N = Jt ? H.zoom : void 0), N),
            fn(Ee, (V = Qt ? q(H.translation) : U()), V),
            We.set(N))
          : Oe()),
        8192 & t.$$.dirty[3] && (i = Z >= 1),
        (16 & t.$$.dirty[0]) | (401410 & t.$$.dirty[3]) &&
          o(
            109,
            (n = [
              (G || Z < 1) && [
                void 0,
                hp(K) + "%",
                { sublabel: Ft.labelZoomFit },
              ],
              ...jt.map((t) => [t, hp(t) + "%"]),
            ]
              .filter(Boolean)
              .map(
                (t) => (
                  1 === t[0] && (t[2] = { sublabel: Ft.labelZoomActual }), t
                )
              )
              .sort((t, e) => {
                const o = t[0] || K,
                  i = e[0] || K;
                return o < i ? -1 : i < o ? 1 : 0;
              }))
          ),
        327680 & t.$$.dirty[3] &&
          o(
            112,
            (r = Math.min(
              n.reduce((t, [e]) => (e < t ? e : t), Number.MAX_SAFE_INTEGER),
              K
            ))
          ),
        65536 & t.$$.dirty[3] &&
          o(
            113,
            (a = n.reduce((t, [e]) => (e > t ? e : t), Number.MIN_SAFE_INTEGER))
          ),
        434176 & t.$$.dirty[3] && o(22, (l = N || (G || Z < 1 ? K : 1))),
        (4194304 & t.$$.dirty[0]) | (65536 & t.$$.dirty[3]) &&
          o(
            114,
            ((e = n.map(([t]) => t)),
            (w = l),
            (s = e.findIndex((t) => t === w)))
          ),
        4194304 & t.$$.dirty[0] && o(115, (c = hp(l) + "%")),
        (16 & t.$$.dirty[0]) | (7962764 & t.$$.dirty[3]) &&
          o(
            116,
            (d = oe && [
              [
                "Button",
                "zoom-out",
                {
                  hideLabel: !0,
                  label: Ft.labelZoomOut,
                  icon: Ft.iconZoomOut,
                  disabled: N === r,
                  onclick: () => _e((t) => Math.max(r, t - Nt)),
                  onhold: () => _e((t) => Math.max(r, t * (1 - Ht))),
                },
              ],
              [
                "Dropdown",
                "zoom-level",
                {
                  label: c,
                  labelClass: "PinturaFixedWidthCharacters",
                  options: n,
                  selectedIndex: s,
                  onchange: (t) => {
                    return (
                      (e = t.value)
                        ? We.set(e)
                        : ((e = void 0), We.set(void 0, { hard: !0 })),
                      void Be({ zoom: e })
                    );
                    var e;
                  },
                },
              ],
              [
                "Button",
                "zoom-in",
                {
                  hideLabel: !0,
                  label: Ft.labelZoomIn,
                  icon: Ft.iconZoomIn,
                  disabled: N === a,
                  onclick: () => _e((t) => Math.min(a, t + Nt)),
                  onhold: () => _e((t) => Math.min(a, t * (1 + Ht))),
                },
              ],
            ])
          ),
        (8388608 & t.$$.dirty[0]) | (8388608 & t.$$.dirty[3]) &&
          Y &&
          d &&
          we.set(d),
        (8192 & t.$$.dirty[0]) |
          (1073741824 & t.$$.dirty[2]) |
          (256 & t.$$.dirty[3]) &&
          o(
            24,
            (u =
              0 !== re.length || ie ? Bt : Bt.filter((t) => "preset" !== t[0]))
          ),
        256 & t.$$.dirty[0] && o(117, (p = Object.keys(Xt).length)),
        16777216 & t.$$.dirty[0] && o(25, (h = u.length > 1)),
        16777216 & t.$$.dirty[0] && o(118, (m = !!u.length)),
        50331649 & t.$$.dirty[0] && h && void 0 === Dt && o(0, (Dt = u[0][0])),
        1 & t.$$.dirty[0] && o(119, (g = void 0 !== Dt)),
        117440512 & t.$$.dirty[3] && o(34, (f = (!g || m) && p)),
        (8404992 & t.$$.dirty[0]) | (134217728 & t.$$.dirty[3]) &&
          (Y
            ? fn(Me, (et[ae] = { maskMarkupOpacity: 0.85 }), et)
            : delete et[ae]),
        1 & t.$$.dirty[0] && Dt && Ne && Ne.blurShapes(),
        (8388608 & t.$$.dirty[0]) | (536870912 & t.$$.dirty[3]) &&
          o(36, ($ = Y && ot)),
        (134217728 & t.$$.dirty[0]) | (16384 & t.$$.dirty[3]) &&
          o(37, (y = it && X(j.x - it.x, j.y - it.y))),
        256 & t.$$.dirty[0] && o(123, (b = Object.keys(Xt))),
        268435456 & t.$$.dirty[0] && o(124, (x = nt.filter(Go)[0])),
        268435456 & t.$$.dirty[0] && o(125, (v = nt.find((t) => qo(t)))),
        (8388609 & t.$$.dirty[0]) | (1 & t.$$.dirty[3]) &&
          o(126, (S = Y && (Ot[Dt] ? $i(Io(Ot[Dt][0])) : {}))),
        (1073743872 & t.$$.dirty[3]) | (4 & t.$$.dirty[4]) &&
          o(
            121,
            (k =
              S &&
              Object.keys(S).reduce((t, e) => {
                const o = "disableStyle" === e,
                  i = b.find((t) => t.split("_").includes(e));
                return o || i
                  ? (void 0 === S[e] || (t[e] = Je(Ue, e) ? Ue[e] : S[e]), t)
                  : t;
              }, {}))
          ),
        (268435456 & t.$$.dirty[3]) | (1 & t.$$.dirty[4]) &&
          o(29, (C = x || k)),
        (536870912 & t.$$.dirty[0]) | (8 & t.$$.dirty[4]) &&
          C &&
          C.lineEnd &&
          !st &&
          console.warn(
            "Set shapePreprocessor property to draw lineStart and lineEnd styles.\nhttps://pqina.nl/pintura/docs/v8/api/exports/#createshapepreprocessor"
          ),
        (268435456 & t.$$.dirty[3]) | (4 & t.$$.dirty[4]) &&
          o(39, (M = S && qe(S.eraseRadius) ? (k || S).eraseRadius : void 0)),
        16 & t.$$.dirty[4] && o(30, (A = ut && 32 === ut[0])),
        (1073741824 & t.$$.dirty[0]) |
          (4096 & t.$$.dirty[3]) |
          (1 & t.$$.dirty[4]) &&
          o(
            40,
            (T = ((t, e, o) => {
              if (o) return "grab";
              if (!t) return "crosshair";
              let i = t || e;
              return Go(i)
                ? qo(i)
                  ? "modal" === Ut
                    ? "default"
                    : "text"
                  : di(i)
                  ? "move"
                  : "default"
                : "crosshair";
            })(Ye, x, A))
          ),
        (9217 & t.$$.dirty[0]) | (1 & t.$$.dirty[1]) | (256 & t.$$.dirty[3]) &&
          o(41, (P = lt > 0 && "preset" === Dt && (re.length > 0 || Gt || ie))),
        67108864 & t.$$.dirty[0] && (R = !Je(J, "x") && !Je(J, "y")),
        2 & t.$$.dirty[4] && o(32, (E = !!v)),
        (2 & t.$$.dirty[1]) | (16 & t.$$.dirty[3]) && o(42, (I = Jt && !E)),
        (2 & t.$$.dirty[1]) | (32 & t.$$.dirty[3]) && o(43, (L = Qt && !E)),
        2097152 & t.$$.dirty[0] &&
          o(
            38,
            (F =
              po &&
              ((z = po),
              (t, e) => {
                z.dispatchEvent(eu(t, e));
              }))
          ),
        (256 & t.$$.dirty[3]) | (96 & t.$$.dirty[4]) &&
          o(
            45,
            (B =
              ht && ie
                ? (t) => fu(() => ie(t, Ke, { ...mt }, () => ho.set({})))
                : W)
          ),
        1024 & t.$$.dirty[3] &&
          o(
            46,
            (O = Object.keys(he).reduce(
              (t, e) => ("beforeAddShape" === e || (t[e] = he[e]), t),
              {}
            ))
          ),
        (8388608 & t.$$.dirty[0]) | (128 & t.$$.dirty[4]) &&
          gt &&
          mo.set(Y ? 0 : 20),
        256 & t.$$.dirty[4] &&
          o(47, (D = ft ? `transform: translateY(${ft}px)` : void 0));
    }),
    o(44, (z = Se * ke)),
    [
      Dt,
      Rt,
      At,
      Et,
      Ft,
      zt,
      Wt,
      Ut,
      Xt,
      Yt,
      Gt,
      qt,
      ee,
      re,
      ae,
      se,
      le,
      ce,
      de,
      ue,
      pe,
      po,
      l,
      Y,
      u,
      h,
      J,
      it,
      nt,
      C,
      A,
      lt,
      E,
      Ne,
      f,
      tt,
      $,
      y,
      F,
      M,
      T,
      P,
      I,
      L,
      z,
      B,
      O,
      D,
      $t,
      yt,
      me,
      ge,
      $e,
      ye,
      be,
      xe,
      ve,
      Ce,
      Me,
      Te,
      Pe,
      Re,
      Ae,
      Ee,
      Ie,
      Le,
      Fe,
      ze,
      (t) => {
        if (!ne) return !0;
        const e = It(_);
        return (
          Vt(e, 1 / Z),
          Zt(e, V),
          Vt(e, l),
          ne(t, { ...e, x: e.x + j.x, y: e.y + j.y })
        );
      },
      Ze,
      ({ value: t }, e) => {
        o(0, (Dt = t)), (te || /enter/i.test(e.key)) && Ve(t);
      },
      (t) => {
        if ("eraser" === Dt) He = Ne.eraseShape();
        else if (Dt && Ot[Dt]) {
          const [t, e] = Ot[Dt];
          He = Ne.createShape({ ...t, ...k }, e);
        } else He = void 0;
        return !!He && (He.start(t), !0);
      },
      (t) => !!He && (He.update(t), !0),
      (t) => !!He && (He.release(t), !0),
      (t) => !!He && (He.cancel(t), (He = void 0), !0),
      (t) => !!He && (He.end(t), (He = void 0), !0),
      function (t) {
        Object.keys(t).forEach((e) => o(104, (Ue[e] = t[e]), Ue)),
          F("selectstyle", t),
          x &&
            (Ne.updateMarkupShape(x, t),
            clearTimeout(Xe),
            (Xe = setTimeout(() => {
              uo();
            }, 200)));
      },
      (t) => o(105, (Ye = t)),
      () => {
        to = !1;
      },
      (t, e) => {
        if (to) return;
        const { beforeAddShape: o = () => !0 } = he,
          i = je(e),
          n = Ne.getMarkupItemDraft(),
          r = Kt(dt, { x: i.x + (J.x || 0), y: i.y + (J.y || 0) });
        if ((n && !r && Ne.discardMarkupItemDraft(), r)) {
          if (!n) {
            const n = Bo(t, dt),
              r = Ge(n, i);
            return o(r)
              ? (oi(r), void Ne.addShape(r))
              : ((to = !0), void e.preventDefault());
          }
          Vo(n) && ((i.x -= 0.5 * n.width), (i.y -= 0.5 * n.height)),
            t.shape &&
              (Je(t.shape, "x") && (i.x = t.shape.x),
              Je(t.shape, "y") && (i.y = t.shape.y)),
            Ne.updateMarkupShape(n, i);
        }
      },
      (t, e) => {
        if (to) return;
        const o = je(e);
        if (!Kt(dt, { x: o.x + (J.x || 0), y: o.y + (J.y || 0) }))
          return void Ne.discardMarkupItemDraft();
        const i = Ne.confirmMarkupItemDraft();
        Ne.selectShape(i), F("addshape", i), fe.write();
      },
      (t) => Ke(t),
      (t) => {
        return (
          (e = t.detail.resources),
          (o = je(t.detail.event)),
          e.forEach((t) => Ke(t, o))
        );
        var e, o;
      },
      (t) => {
        fn(ze, (pt = !0), pt), (io = !1), (eo = V), (oo = i ? N || 1 : N || K);
      },
      (t) => {
        const { scalar: e = 1, translation: o, isMultiTouching: i } = t.detail;
        if (!eo || (!i && !A)) return;
        i && at(o, 0.5);
        no = Q(V);
        const n = X(eo.x + o.x, eo.y + o.y),
          s = Q(n);
        (io = s < no), I && Ae.set(na(oo * e, r, a)), Ee.set(n);
      },
      (t) => {
        if (io && no < 50)
          return (eo = void 0), (oo = void 0), void Ee.set(U());
      },
      (t) => {
        if (((eo = void 0), (oo = void 0), A && t.detail.isDoubleTap))
          return De();
        fn(ze, (pt = !1), pt), Be();
      },
      (t) => {
        if ((t.preventDefault(), t.stopPropagation(), co)) return;
        clearTimeout(ro);
        const e = U(),
          o = V,
          n = Date.now(),
          s = n - ao;
        ao = n;
        const l = s < 24;
        so = l ? so + 1 : 0;
        const c = -1 * Gl(t),
          d = G ? K : i ? 1 : K,
          u = G ? N || K : i ? N || 1 : N || K,
          p = u * (1 + c / (l ? 50 : 100)),
          h = Math.abs(p - d),
          m = p < u,
          g = (u > d && m) || (u < d && p > u),
          f = so >= 5;
        if ((l || (lo = !1), so > 0 && !lo && (lo = g), f && lo))
          return (
            De(),
            (co = !0),
            void setTimeout(() => {
              co = !1;
            }, 100)
          );
        if (f) return;
        !l &&
          g &&
          h <= 0.05 &&
          (ro = setTimeout(() => {
            De();
          }, 250)),
          fn(Ae, (N = na(p, r, a)), N);
        const $ = Um(t, tt, j),
          y = It(_);
        Vt(y, u), Zt(y, o);
        const b = _t(y),
          x = It(y);
        Vt(x, N - u + 1, $);
        const v = _t(x),
          w = ((S = rt(v, b)), (k = u), (S.x /= k), (S.y /= k), S);
        var S, k;
        ((t, e, o) => {
          (t.x = e), (t.y = o);
        })(e, o.x + w.x, o.y + w.y),
          fn(Ee, (V = m && l ? at(V, 0.85) : e), V),
          Be();
      },
      uo,
      ho,
      mo,
      Lt,
      Bt,
      Ot,
      jt,
      Nt,
      Ht,
      Jt,
      Qt,
      te,
      oe,
      ie,
      ne,
      he,
      Ue,
      Ye,
      Z,
      j,
      N,
      n,
      G,
      K,
      r,
      a,
      s,
      c,
      d,
      p,
      m,
      g,
      et,
      k,
      ot,
      b,
      x,
      v,
      S,
      st,
      ut,
      ht,
      mt,
      gt,
      ft,
      function (e) {
        tr(t, e);
      },
      (t) => t[0] === Dt,
      (t) => {
        F("addshape", t), uo();
      },
      (t) => {
        F("selectshape", t);
      },
      (t) => {
        F("tapshape", t);
      },
      (t) => {
        F("updateshape", t), uo();
      },
      (t) => {
        F("removeshape", t), uo();
      },
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (Ne = t), o(33, Ne);
        });
      },
      function (t) {
        (nt = t), zt.set(nt);
      },
      function (t) {
        ($t = t), Ce.set($t);
      },
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (po = t), o(21, po);
        });
      },
      (t) => !ou(t.target),
      function (e) {
        tr(t, e);
      },
    ]
  );
}
class g$ extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        m$,
        h$,
        sn,
        {
          isActive: 1,
          isActiveFraction: 2,
          isVisible: 3,
          stores: 91,
          locale: 4,
          shapes: 5,
          toolbar: 92,
          toolShapes: 93,
          toolActive: 0,
          toolSelectRadius: 6,
          zoomOptions: 94,
          zoomAdjustStep: 95,
          zoomAdjustFactor: 96,
          textInputMode: 7,
          shapeControls: 8,
          enableButtonFlipVertical: 9,
          enablePresetSelectImage: 10,
          enablePresetDropImage: 11,
          enableZoom: 97,
          enablePan: 98,
          enableSelectToolToAddShape: 99,
          enableTapToAddText: 12,
          enableZoomControls: 100,
          willRenderPresetToolbar: 101,
          willStartInteraction: 102,
          shapePresets: 13,
          utilKey: 14,
          mapScreenPointToImagePoint: 15,
          mapImagePointToScreenPoint: 16,
          imageRotation: 17,
          imageFlipX: 18,
          imageFlipY: 19,
          parentRect: 20,
          hooks: 103,
        },
        [-1, -1, -1, -1, -1, -1, -1]
      );
  }
  get isActive() {
    return this.$$.ctx[1];
  }
  set isActive(t) {
    this.$set({ isActive: t }), hr();
  }
  get isActiveFraction() {
    return this.$$.ctx[2];
  }
  set isActiveFraction(t) {
    this.$set({ isActiveFraction: t }), hr();
  }
  get isVisible() {
    return this.$$.ctx[3];
  }
  set isVisible(t) {
    this.$set({ isVisible: t }), hr();
  }
  get stores() {
    return this.$$.ctx[91];
  }
  set stores(t) {
    this.$set({ stores: t }), hr();
  }
  get locale() {
    return this.$$.ctx[4];
  }
  set locale(t) {
    this.$set({ locale: t }), hr();
  }
  get shapes() {
    return this.$$.ctx[5];
  }
  set shapes(t) {
    this.$set({ shapes: t }), hr();
  }
  get toolbar() {
    return this.$$.ctx[92];
  }
  set toolbar(t) {
    this.$set({ toolbar: t }), hr();
  }
  get toolShapes() {
    return this.$$.ctx[93];
  }
  set toolShapes(t) {
    this.$set({ toolShapes: t }), hr();
  }
  get toolActive() {
    return this.$$.ctx[0];
  }
  set toolActive(t) {
    this.$set({ toolActive: t }), hr();
  }
  get toolSelectRadius() {
    return this.$$.ctx[6];
  }
  set toolSelectRadius(t) {
    this.$set({ toolSelectRadius: t }), hr();
  }
  get zoomOptions() {
    return this.$$.ctx[94];
  }
  set zoomOptions(t) {
    this.$set({ zoomOptions: t }), hr();
  }
  get zoomAdjustStep() {
    return this.$$.ctx[95];
  }
  set zoomAdjustStep(t) {
    this.$set({ zoomAdjustStep: t }), hr();
  }
  get zoomAdjustFactor() {
    return this.$$.ctx[96];
  }
  set zoomAdjustFactor(t) {
    this.$set({ zoomAdjustFactor: t }), hr();
  }
  get textInputMode() {
    return this.$$.ctx[7];
  }
  set textInputMode(t) {
    this.$set({ textInputMode: t }), hr();
  }
  get shapeControls() {
    return this.$$.ctx[8];
  }
  set shapeControls(t) {
    this.$set({ shapeControls: t }), hr();
  }
  get enableButtonFlipVertical() {
    return this.$$.ctx[9];
  }
  set enableButtonFlipVertical(t) {
    this.$set({ enableButtonFlipVertical: t }), hr();
  }
  get enablePresetSelectImage() {
    return this.$$.ctx[10];
  }
  set enablePresetSelectImage(t) {
    this.$set({ enablePresetSelectImage: t }), hr();
  }
  get enablePresetDropImage() {
    return this.$$.ctx[11];
  }
  set enablePresetDropImage(t) {
    this.$set({ enablePresetDropImage: t }), hr();
  }
  get enableZoom() {
    return this.$$.ctx[97];
  }
  set enableZoom(t) {
    this.$set({ enableZoom: t }), hr();
  }
  get enablePan() {
    return this.$$.ctx[98];
  }
  set enablePan(t) {
    this.$set({ enablePan: t }), hr();
  }
  get enableSelectToolToAddShape() {
    return this.$$.ctx[99];
  }
  set enableSelectToolToAddShape(t) {
    this.$set({ enableSelectToolToAddShape: t }), hr();
  }
  get enableTapToAddText() {
    return this.$$.ctx[12];
  }
  set enableTapToAddText(t) {
    this.$set({ enableTapToAddText: t }), hr();
  }
  get enableZoomControls() {
    return this.$$.ctx[100];
  }
  set enableZoomControls(t) {
    this.$set({ enableZoomControls: t }), hr();
  }
  get willRenderPresetToolbar() {
    return this.$$.ctx[101];
  }
  set willRenderPresetToolbar(t) {
    this.$set({ willRenderPresetToolbar: t }), hr();
  }
  get willStartInteraction() {
    return this.$$.ctx[102];
  }
  set willStartInteraction(t) {
    this.$set({ willStartInteraction: t }), hr();
  }
  get shapePresets() {
    return this.$$.ctx[13];
  }
  set shapePresets(t) {
    this.$set({ shapePresets: t }), hr();
  }
  get utilKey() {
    return this.$$.ctx[14];
  }
  set utilKey(t) {
    this.$set({ utilKey: t }), hr();
  }
  get mapScreenPointToImagePoint() {
    return this.$$.ctx[15];
  }
  set mapScreenPointToImagePoint(t) {
    this.$set({ mapScreenPointToImagePoint: t }), hr();
  }
  get mapImagePointToScreenPoint() {
    return this.$$.ctx[16];
  }
  set mapImagePointToScreenPoint(t) {
    this.$set({ mapImagePointToScreenPoint: t }), hr();
  }
  get imageRotation() {
    return this.$$.ctx[17];
  }
  set imageRotation(t) {
    this.$set({ imageRotation: t }), hr();
  }
  get imageFlipX() {
    return this.$$.ctx[18];
  }
  set imageFlipX(t) {
    this.$set({ imageFlipX: t }), hr();
  }
  get imageFlipY() {
    return this.$$.ctx[19];
  }
  set imageFlipY(t) {
    this.$set({ imageFlipY: t }), hr();
  }
  get parentRect() {
    return this.$$.ctx[20];
  }
  set parentRect(t) {
    this.$set({ parentRect: t }), hr();
  }
  get hooks() {
    return this.$$.ctx[103];
  }
  set hooks(t) {
    this.$set({ hooks: t }), hr();
  }
}
var f$ = (t, e, o, i, n, r, a, s, l) => {
    const c = q(t),
      d = 0.5 * o.width,
      u = 0.5 * o.height,
      p = 0.5 * e.width,
      h = 0.5 * e.height,
      m = n.x + i.x,
      g = n.y + i.y;
    s && (c.x = o.width - c.x), l && (c.y = o.height - c.y);
    const f = Math.cos(r),
      $ = Math.sin(r);
    (c.x -= d), (c.y -= u);
    const y = c.x * f - c.y * $,
      b = c.x * $ + c.y * f;
    (c.x = d + y),
      (c.y = u + b),
      (c.x *= a),
      (c.y *= a),
      (c.x += p),
      (c.y += h),
      (c.x += m),
      (c.y += g),
      (c.x -= d * a),
      (c.y -= u * a);
    const x = (n.x - m) * a,
      v = (n.y - g) * a,
      w = x * f - v * $,
      S = x * $ + v * f;
    return (c.x += w), (c.y += S), c;
  },
  $$ = (t, e, o, i, n, r, a, s, l) => {
    const c = q(t),
      d = St(o),
      u = St(e),
      p = X(n.x + i.x, n.y + i.y),
      h = Math.cos(r),
      m = Math.sin(r);
    (c.x -= u.x), (c.y -= u.y);
    const g = (n.x - p.x) * a,
      f = (n.y - p.y) * a,
      $ = g * h - f * m,
      y = g * m + f * h;
    (c.x -= $), (c.y -= y), (c.x -= p.x), (c.y -= p.y), (c.x /= a), (c.y /= a);
    const b = c.x * h + c.y * m,
      x = c.x * m - c.y * h;
    return (
      (c.x = b),
      (c.y = -x),
      (c.x += d.x),
      (c.y += d.y),
      s && (c.x = o.width - c.x),
      l && (c.y = o.height - c.y),
      c
    );
  };
function y$(t) {
  let e, o, i;
  function n(e) {
    t[52](e);
  }
  let r = {
    stores: t[4],
    locale: t[5],
    isActive: t[1],
    isActiveFraction: t[2],
    isVisible: t[3],
    mapScreenPointToImagePoint: t[36],
    mapImagePointToScreenPoint: t[37],
    utilKey: "annotate",
    imageRotation: t[38],
    imageFlipX: t[34],
    imageFlipY: t[35],
    shapes: t[40],
    toolbar: t[16] || t[6],
    toolShapes: t[17] || t[7],
    zoomOptions: t[12],
    zoomAdjustStep: t[13],
    zoomAdjustFactor: t[14],
    enableSelectToolToAddShape: t[26],
    enableTapToAddText: t[27],
    enableZoomControls: t[23],
    enableZoom: t[24],
    enablePan: t[25],
    shapeControls: t[18] || t[8],
    shapePresets: t[21],
    enableButtonFlipVertical: t[19],
    parentRect: t[41],
    enablePresetSelectImage: t[20],
    toolSelectRadius: t[9],
    textInputMode: t[10],
    willStartInteraction: t[11],
    willRenderPresetToolbar: t[22] || t[15],
    hooks: {
      willRenderShapeControls: t[28],
      beforeAddShape: t[29],
      beforeRemoveShape: t[30],
      beforeDeselectShape: t[31],
      beforeSelectShape: t[32],
      beforeUpdateShape: t[33],
    },
  };
  return (
    void 0 !== t[0] && (r.toolActive = t[0]),
    (e = new g$({ props: r })),
    or.push(() => Er(e, "toolActive", n)),
    e.$on("measure", t[53]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, o) {
        Lr(e, t, o), (i = !0);
      },
      p(t, i) {
        const n = {};
        16 & i[0] && (n.stores = t[4]),
          32 & i[0] && (n.locale = t[5]),
          2 & i[0] && (n.isActive = t[1]),
          4 & i[0] && (n.isActiveFraction = t[2]),
          8 & i[0] && (n.isVisible = t[3]),
          32 & i[1] && (n.mapScreenPointToImagePoint = t[36]),
          64 & i[1] && (n.mapImagePointToScreenPoint = t[37]),
          128 & i[1] && (n.imageRotation = t[38]),
          8 & i[1] && (n.imageFlipX = t[34]),
          16 & i[1] && (n.imageFlipY = t[35]),
          65600 & i[0] && (n.toolbar = t[16] || t[6]),
          131200 & i[0] && (n.toolShapes = t[17] || t[7]),
          4096 & i[0] && (n.zoomOptions = t[12]),
          8192 & i[0] && (n.zoomAdjustStep = t[13]),
          16384 & i[0] && (n.zoomAdjustFactor = t[14]),
          67108864 & i[0] && (n.enableSelectToolToAddShape = t[26]),
          134217728 & i[0] && (n.enableTapToAddText = t[27]),
          8388608 & i[0] && (n.enableZoomControls = t[23]),
          16777216 & i[0] && (n.enableZoom = t[24]),
          33554432 & i[0] && (n.enablePan = t[25]),
          262400 & i[0] && (n.shapeControls = t[18] || t[8]),
          2097152 & i[0] && (n.shapePresets = t[21]),
          524288 & i[0] && (n.enableButtonFlipVertical = t[19]),
          1048576 & i[0] && (n.enablePresetSelectImage = t[20]),
          512 & i[0] && (n.toolSelectRadius = t[9]),
          1024 & i[0] && (n.textInputMode = t[10]),
          2048 & i[0] && (n.willStartInteraction = t[11]),
          4227072 & i[0] && (n.willRenderPresetToolbar = t[22] || t[15]),
          (1879048192 & i[0]) | (7 & i[1]) &&
            (n.hooks = {
              willRenderShapeControls: t[28],
              beforeAddShape: t[29],
              beforeRemoveShape: t[30],
              beforeDeselectShape: t[31],
              beforeSelectShape: t[32],
              beforeUpdateShape: t[33],
            }),
          !o &&
            1 & i[0] &&
            ((o = !0), (n.toolActive = t[0]), dr(() => (o = !1))),
          e.$set(n);
      },
      i(t) {
        i || (vr(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function b$(t, e, o) {
  let i, n, r, a, s, l, c, d, u;
  let { isActive: p } = e,
    { isActiveFraction: h } = e,
    { isVisible: m } = e,
    { stores: g } = e,
    { locale: f = {} } = e,
    { markupEditorToolbar: $ } = e,
    { markupEditorToolStyles: y } = e,
    { markupEditorShapeStyleControls: b } = e,
    { markupEditorToolSelectRadius: x } = e,
    { markupEditorTextInputMode: v } = e,
    { markupEditorWillStartInteraction: w } = e,
    { markupEditorZoomLevels: S } = e,
    { markupEditorZoomAdjustStep: k } = e,
    { markupEditorZoomAdjustFactor: C } = e,
    { willRenderShapePresetToolbar: M } = e,
    { annotateTools: T } = e,
    { annotateToolShapes: P } = e,
    { annotateShapeControls: R } = e,
    { annotateActiveTool: A } = e,
    { annotateEnableButtonFlipVertical: E = !1 } = e,
    { annotateEnableSelectImagePreset: I = !1 } = e,
    { annotatePresets: L = [] } = e,
    { annotateWillRenderShapePresetToolbar: F } = e,
    { enableZoomControls: z = !0 } = e,
    { enableZoom: B = !0 } = e,
    { enablePan: O = !0 } = e,
    { enableSelectToolToAddShape: D } = e,
    { enableTapToAddText: W } = e,
    { willRenderShapeControls: _ } = e,
    { beforeAddShape: Z } = e,
    { beforeRemoveShape: V } = e,
    { beforeDeselectShape: j } = e,
    { beforeSelectShape: N } = e,
    { beforeUpdateShape: H } = e;
  const {
    rootRect: U,
    imageAnnotation: X,
    imageSize: Y,
    imageRotation: G,
    imageFlipX: q,
    imageFlipY: K,
    imageTransforms: J,
    imageTransformsInterpolated: Q,
  } = g;
  return (
    dn(t, U, (t) => o(48, (r = t))),
    dn(t, Y, (t) => o(49, (a = t))),
    dn(t, G, (t) => o(38, (u = t))),
    dn(t, q, (t) => o(34, (c = t))),
    dn(t, K, (t) => o(35, (d = t))),
    dn(t, J, (t) => o(51, (l = t))),
    dn(t, Q, (t) => o(50, (s = t))),
    (t.$$set = (t) => {
      "isActive" in t && o(1, (p = t.isActive)),
        "isActiveFraction" in t && o(2, (h = t.isActiveFraction)),
        "isVisible" in t && o(3, (m = t.isVisible)),
        "stores" in t && o(4, (g = t.stores)),
        "locale" in t && o(5, (f = t.locale)),
        "markupEditorToolbar" in t && o(6, ($ = t.markupEditorToolbar)),
        "markupEditorToolStyles" in t && o(7, (y = t.markupEditorToolStyles)),
        "markupEditorShapeStyleControls" in t &&
          o(8, (b = t.markupEditorShapeStyleControls)),
        "markupEditorToolSelectRadius" in t &&
          o(9, (x = t.markupEditorToolSelectRadius)),
        "markupEditorTextInputMode" in t &&
          o(10, (v = t.markupEditorTextInputMode)),
        "markupEditorWillStartInteraction" in t &&
          o(11, (w = t.markupEditorWillStartInteraction)),
        "markupEditorZoomLevels" in t && o(12, (S = t.markupEditorZoomLevels)),
        "markupEditorZoomAdjustStep" in t &&
          o(13, (k = t.markupEditorZoomAdjustStep)),
        "markupEditorZoomAdjustFactor" in t &&
          o(14, (C = t.markupEditorZoomAdjustFactor)),
        "willRenderShapePresetToolbar" in t &&
          o(15, (M = t.willRenderShapePresetToolbar)),
        "annotateTools" in t && o(16, (T = t.annotateTools)),
        "annotateToolShapes" in t && o(17, (P = t.annotateToolShapes)),
        "annotateShapeControls" in t && o(18, (R = t.annotateShapeControls)),
        "annotateActiveTool" in t && o(0, (A = t.annotateActiveTool)),
        "annotateEnableButtonFlipVertical" in t &&
          o(19, (E = t.annotateEnableButtonFlipVertical)),
        "annotateEnableSelectImagePreset" in t &&
          o(20, (I = t.annotateEnableSelectImagePreset)),
        "annotatePresets" in t && o(21, (L = t.annotatePresets)),
        "annotateWillRenderShapePresetToolbar" in t &&
          o(22, (F = t.annotateWillRenderShapePresetToolbar)),
        "enableZoomControls" in t && o(23, (z = t.enableZoomControls)),
        "enableZoom" in t && o(24, (B = t.enableZoom)),
        "enablePan" in t && o(25, (O = t.enablePan)),
        "enableSelectToolToAddShape" in t &&
          o(26, (D = t.enableSelectToolToAddShape)),
        "enableTapToAddText" in t && o(27, (W = t.enableTapToAddText)),
        "willRenderShapeControls" in t &&
          o(28, (_ = t.willRenderShapeControls)),
        "beforeAddShape" in t && o(29, (Z = t.beforeAddShape)),
        "beforeRemoveShape" in t && o(30, (V = t.beforeRemoveShape)),
        "beforeDeselectShape" in t && o(31, (j = t.beforeDeselectShape)),
        "beforeSelectShape" in t && o(32, (N = t.beforeSelectShape)),
        "beforeUpdateShape" in t && o(33, (H = t.beforeUpdateShape));
    }),
    (t.$$.update = () => {
      1966104 & t.$$.dirty[1] &&
        o(
          36,
          (i = (t) =>
            $$(t, r, a, s.origin, s.translation, l.rotation.z, s.scale, c, d))
        ),
        1966104 & t.$$.dirty[1] &&
          o(
            37,
            (n = (t) =>
              f$(t, r, a, s.origin, s.translation, l.rotation.z, s.scale, c, d))
          );
    }),
    [
      A,
      p,
      h,
      m,
      g,
      f,
      $,
      y,
      b,
      x,
      v,
      w,
      S,
      k,
      C,
      M,
      T,
      P,
      R,
      E,
      I,
      L,
      F,
      z,
      B,
      O,
      D,
      W,
      _,
      Z,
      V,
      j,
      N,
      H,
      c,
      d,
      i,
      n,
      u,
      U,
      X,
      Y,
      G,
      q,
      K,
      J,
      Q,
      "annotate",
      r,
      a,
      s,
      l,
      function (t) {
        (A = t), o(0, A);
      },
      function (e) {
        tr(t, e);
      },
    ]
  );
}
var x$ = {
  util: [
    "annotate",
    class extends Br {
      constructor(t) {
        super(),
          zr(
            this,
            t,
            b$,
            y$,
            sn,
            {
              name: 47,
              isActive: 1,
              isActiveFraction: 2,
              isVisible: 3,
              stores: 4,
              locale: 5,
              markupEditorToolbar: 6,
              markupEditorToolStyles: 7,
              markupEditorShapeStyleControls: 8,
              markupEditorToolSelectRadius: 9,
              markupEditorTextInputMode: 10,
              markupEditorWillStartInteraction: 11,
              markupEditorZoomLevels: 12,
              markupEditorZoomAdjustStep: 13,
              markupEditorZoomAdjustFactor: 14,
              willRenderShapePresetToolbar: 15,
              annotateTools: 16,
              annotateToolShapes: 17,
              annotateShapeControls: 18,
              annotateActiveTool: 0,
              annotateEnableButtonFlipVertical: 19,
              annotateEnableSelectImagePreset: 20,
              annotatePresets: 21,
              annotateWillRenderShapePresetToolbar: 22,
              enableZoomControls: 23,
              enableZoom: 24,
              enablePan: 25,
              enableSelectToolToAddShape: 26,
              enableTapToAddText: 27,
              willRenderShapeControls: 28,
              beforeAddShape: 29,
              beforeRemoveShape: 30,
              beforeDeselectShape: 31,
              beforeSelectShape: 32,
              beforeUpdateShape: 33,
            },
            [-1, -1]
          );
      }
      get name() {
        return this.$$.ctx[47];
      }
      get isActive() {
        return this.$$.ctx[1];
      }
      set isActive(t) {
        this.$set({ isActive: t }), hr();
      }
      get isActiveFraction() {
        return this.$$.ctx[2];
      }
      set isActiveFraction(t) {
        this.$set({ isActiveFraction: t }), hr();
      }
      get isVisible() {
        return this.$$.ctx[3];
      }
      set isVisible(t) {
        this.$set({ isVisible: t }), hr();
      }
      get stores() {
        return this.$$.ctx[4];
      }
      set stores(t) {
        this.$set({ stores: t }), hr();
      }
      get locale() {
        return this.$$.ctx[5];
      }
      set locale(t) {
        this.$set({ locale: t }), hr();
      }
      get markupEditorToolbar() {
        return this.$$.ctx[6];
      }
      set markupEditorToolbar(t) {
        this.$set({ markupEditorToolbar: t }), hr();
      }
      get markupEditorToolStyles() {
        return this.$$.ctx[7];
      }
      set markupEditorToolStyles(t) {
        this.$set({ markupEditorToolStyles: t }), hr();
      }
      get markupEditorShapeStyleControls() {
        return this.$$.ctx[8];
      }
      set markupEditorShapeStyleControls(t) {
        this.$set({ markupEditorShapeStyleControls: t }), hr();
      }
      get markupEditorToolSelectRadius() {
        return this.$$.ctx[9];
      }
      set markupEditorToolSelectRadius(t) {
        this.$set({ markupEditorToolSelectRadius: t }), hr();
      }
      get markupEditorTextInputMode() {
        return this.$$.ctx[10];
      }
      set markupEditorTextInputMode(t) {
        this.$set({ markupEditorTextInputMode: t }), hr();
      }
      get markupEditorWillStartInteraction() {
        return this.$$.ctx[11];
      }
      set markupEditorWillStartInteraction(t) {
        this.$set({ markupEditorWillStartInteraction: t }), hr();
      }
      get markupEditorZoomLevels() {
        return this.$$.ctx[12];
      }
      set markupEditorZoomLevels(t) {
        this.$set({ markupEditorZoomLevels: t }), hr();
      }
      get markupEditorZoomAdjustStep() {
        return this.$$.ctx[13];
      }
      set markupEditorZoomAdjustStep(t) {
        this.$set({ markupEditorZoomAdjustStep: t }), hr();
      }
      get markupEditorZoomAdjustFactor() {
        return this.$$.ctx[14];
      }
      set markupEditorZoomAdjustFactor(t) {
        this.$set({ markupEditorZoomAdjustFactor: t }), hr();
      }
      get willRenderShapePresetToolbar() {
        return this.$$.ctx[15];
      }
      set willRenderShapePresetToolbar(t) {
        this.$set({ willRenderShapePresetToolbar: t }), hr();
      }
      get annotateTools() {
        return this.$$.ctx[16];
      }
      set annotateTools(t) {
        this.$set({ annotateTools: t }), hr();
      }
      get annotateToolShapes() {
        return this.$$.ctx[17];
      }
      set annotateToolShapes(t) {
        this.$set({ annotateToolShapes: t }), hr();
      }
      get annotateShapeControls() {
        return this.$$.ctx[18];
      }
      set annotateShapeControls(t) {
        this.$set({ annotateShapeControls: t }), hr();
      }
      get annotateActiveTool() {
        return this.$$.ctx[0];
      }
      set annotateActiveTool(t) {
        this.$set({ annotateActiveTool: t }), hr();
      }
      get annotateEnableButtonFlipVertical() {
        return this.$$.ctx[19];
      }
      set annotateEnableButtonFlipVertical(t) {
        this.$set({ annotateEnableButtonFlipVertical: t }), hr();
      }
      get annotateEnableSelectImagePreset() {
        return this.$$.ctx[20];
      }
      set annotateEnableSelectImagePreset(t) {
        this.$set({ annotateEnableSelectImagePreset: t }), hr();
      }
      get annotatePresets() {
        return this.$$.ctx[21];
      }
      set annotatePresets(t) {
        this.$set({ annotatePresets: t }), hr();
      }
      get annotateWillRenderShapePresetToolbar() {
        return this.$$.ctx[22];
      }
      set annotateWillRenderShapePresetToolbar(t) {
        this.$set({ annotateWillRenderShapePresetToolbar: t }), hr();
      }
      get enableZoomControls() {
        return this.$$.ctx[23];
      }
      set enableZoomControls(t) {
        this.$set({ enableZoomControls: t }), hr();
      }
      get enableZoom() {
        return this.$$.ctx[24];
      }
      set enableZoom(t) {
        this.$set({ enableZoom: t }), hr();
      }
      get enablePan() {
        return this.$$.ctx[25];
      }
      set enablePan(t) {
        this.$set({ enablePan: t }), hr();
      }
      get enableSelectToolToAddShape() {
        return this.$$.ctx[26];
      }
      set enableSelectToolToAddShape(t) {
        this.$set({ enableSelectToolToAddShape: t }), hr();
      }
      get enableTapToAddText() {
        return this.$$.ctx[27];
      }
      set enableTapToAddText(t) {
        this.$set({ enableTapToAddText: t }), hr();
      }
      get willRenderShapeControls() {
        return this.$$.ctx[28];
      }
      set willRenderShapeControls(t) {
        this.$set({ willRenderShapeControls: t }), hr();
      }
      get beforeAddShape() {
        return this.$$.ctx[29];
      }
      set beforeAddShape(t) {
        this.$set({ beforeAddShape: t }), hr();
      }
      get beforeRemoveShape() {
        return this.$$.ctx[30];
      }
      set beforeRemoveShape(t) {
        this.$set({ beforeRemoveShape: t }), hr();
      }
      get beforeDeselectShape() {
        return this.$$.ctx[31];
      }
      set beforeDeselectShape(t) {
        this.$set({ beforeDeselectShape: t }), hr();
      }
      get beforeSelectShape() {
        return this.$$.ctx[32];
      }
      set beforeSelectShape(t) {
        this.$set({ beforeSelectShape: t }), hr();
      }
      get beforeUpdateShape() {
        return this.$$.ctx[33];
      }
      set beforeUpdateShape(t) {
        this.$set({ beforeUpdateShape: t }), hr();
      }
    },
  ],
};
function v$(t) {
  let e, o, i;
  function n(e) {
    t[44](e);
  }
  let r = {
    stores: t[4],
    locale: t[5],
    isActive: t[1],
    isActiveFraction: t[2],
    isVisible: t[3],
    mapScreenPointToImagePoint: t[34],
    mapImagePointToScreenPoint: t[35],
    utilKey: "decorate",
    shapes: t[37],
    toolbar: t[16] || t[6],
    toolShapes: t[17] || t[7],
    shapeControls: t[18] || t[8],
    shapePresets: t[21],
    zoomOptions: t[12],
    zoomAdjustStep: t[13],
    zoomAdjustFactor: t[14],
    enableSelectToolToAddShape: t[23],
    enableTapToAddText: t[24],
    enableZoomControls: t[25],
    enableZoom: t[26],
    enablePan: t[27],
    enablePresetSelectImage: t[20],
    enableButtonFlipVertical: t[19],
    parentRect: t[36],
    toolSelectRadius: t[9],
    textInputMode: t[10],
    willStartInteraction: t[11],
    willRenderPresetToolbar: t[22] || t[15],
    hooks: {
      willRenderShapeControls: t[28],
      beforeAddShape: t[29],
      beforeRemoveShape: t[30],
      beforeDeselectShape: t[31],
      beforeSelectShape: t[32],
      beforeUpdateShape: t[33],
    },
  };
  return (
    void 0 !== t[0] && (r.toolActive = t[0]),
    (e = new g$({ props: r })),
    or.push(() => Er(e, "toolActive", n)),
    e.$on("measure", t[45]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, o) {
        Lr(e, t, o), (i = !0);
      },
      p(t, i) {
        const n = {};
        16 & i[0] && (n.stores = t[4]),
          32 & i[0] && (n.locale = t[5]),
          2 & i[0] && (n.isActive = t[1]),
          4 & i[0] && (n.isActiveFraction = t[2]),
          8 & i[0] && (n.isVisible = t[3]),
          8 & i[1] && (n.mapScreenPointToImagePoint = t[34]),
          16 & i[1] && (n.mapImagePointToScreenPoint = t[35]),
          65600 & i[0] && (n.toolbar = t[16] || t[6]),
          131200 & i[0] && (n.toolShapes = t[17] || t[7]),
          262400 & i[0] && (n.shapeControls = t[18] || t[8]),
          2097152 & i[0] && (n.shapePresets = t[21]),
          4096 & i[0] && (n.zoomOptions = t[12]),
          8192 & i[0] && (n.zoomAdjustStep = t[13]),
          16384 & i[0] && (n.zoomAdjustFactor = t[14]),
          8388608 & i[0] && (n.enableSelectToolToAddShape = t[23]),
          16777216 & i[0] && (n.enableTapToAddText = t[24]),
          33554432 & i[0] && (n.enableZoomControls = t[25]),
          67108864 & i[0] && (n.enableZoom = t[26]),
          134217728 & i[0] && (n.enablePan = t[27]),
          1048576 & i[0] && (n.enablePresetSelectImage = t[20]),
          524288 & i[0] && (n.enableButtonFlipVertical = t[19]),
          512 & i[0] && (n.toolSelectRadius = t[9]),
          1024 & i[0] && (n.textInputMode = t[10]),
          2048 & i[0] && (n.willStartInteraction = t[11]),
          4227072 & i[0] && (n.willRenderPresetToolbar = t[22] || t[15]),
          (1879048192 & i[0]) | (7 & i[1]) &&
            (n.hooks = {
              willRenderShapeControls: t[28],
              beforeAddShape: t[29],
              beforeRemoveShape: t[30],
              beforeDeselectShape: t[31],
              beforeSelectShape: t[32],
              beforeUpdateShape: t[33],
            }),
          !o &&
            1 & i[0] &&
            ((o = !0), (n.toolActive = t[0]), dr(() => (o = !1))),
          e.$set(n);
      },
      i(t) {
        i || (vr(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function w$(t, e, o) {
  let i, n, r, a, s;
  let { isActive: l } = e,
    { isActiveFraction: c } = e,
    { isVisible: d } = e,
    { stores: u } = e,
    { locale: p = {} } = e,
    { markupEditorToolbar: h } = e,
    { markupEditorToolStyles: m } = e,
    { markupEditorShapeStyleControls: g } = e,
    { markupEditorToolSelectRadius: f } = e,
    { markupEditorTextInputMode: $ } = e,
    { markupEditorWillStartInteraction: y } = e,
    { markupEditorZoomLevels: b } = e,
    { markupEditorZoomAdjustStep: x } = e,
    { markupEditorZoomAdjustFactor: v } = e,
    { willRenderShapePresetToolbar: w } = e,
    { decorateTools: S } = e,
    { decorateToolShapes: k } = e,
    { decorateShapeControls: C } = e,
    { decorateActiveTool: M } = e,
    { decorateEnableButtonFlipVertical: T = !1 } = e,
    { decorateEnableSelectImagePreset: P = !1 } = e,
    { decoratePresets: R = [] } = e,
    { decorateWillRenderShapePresetToolbar: A } = e,
    { enableSelectToolToAddShape: E } = e,
    { enableTapToAddText: I } = e,
    { enableZoomControls: L = !0 } = e,
    { enableZoom: F = !0 } = e,
    { enablePan: z = !0 } = e,
    { willRenderShapeControls: B } = e,
    { beforeAddShape: O } = e,
    { beforeRemoveShape: D } = e,
    { beforeDeselectShape: W } = e,
    { beforeSelectShape: _ } = e,
    { beforeUpdateShape: Z } = e;
  const {
    imageCropRect: V,
    imageDecoration: j,
    imageSelectionRectPresentation: N,
    imageTransformsInterpolated: H,
  } = u;
  return (
    dn(t, N, (t) => o(43, (s = t))),
    dn(t, H, (t) => o(42, (a = t))),
    (t.$$set = (t) => {
      "isActive" in t && o(1, (l = t.isActive)),
        "isActiveFraction" in t && o(2, (c = t.isActiveFraction)),
        "isVisible" in t && o(3, (d = t.isVisible)),
        "stores" in t && o(4, (u = t.stores)),
        "locale" in t && o(5, (p = t.locale)),
        "markupEditorToolbar" in t && o(6, (h = t.markupEditorToolbar)),
        "markupEditorToolStyles" in t && o(7, (m = t.markupEditorToolStyles)),
        "markupEditorShapeStyleControls" in t &&
          o(8, (g = t.markupEditorShapeStyleControls)),
        "markupEditorToolSelectRadius" in t &&
          o(9, (f = t.markupEditorToolSelectRadius)),
        "markupEditorTextInputMode" in t &&
          o(10, ($ = t.markupEditorTextInputMode)),
        "markupEditorWillStartInteraction" in t &&
          o(11, (y = t.markupEditorWillStartInteraction)),
        "markupEditorZoomLevels" in t && o(12, (b = t.markupEditorZoomLevels)),
        "markupEditorZoomAdjustStep" in t &&
          o(13, (x = t.markupEditorZoomAdjustStep)),
        "markupEditorZoomAdjustFactor" in t &&
          o(14, (v = t.markupEditorZoomAdjustFactor)),
        "willRenderShapePresetToolbar" in t &&
          o(15, (w = t.willRenderShapePresetToolbar)),
        "decorateTools" in t && o(16, (S = t.decorateTools)),
        "decorateToolShapes" in t && o(17, (k = t.decorateToolShapes)),
        "decorateShapeControls" in t && o(18, (C = t.decorateShapeControls)),
        "decorateActiveTool" in t && o(0, (M = t.decorateActiveTool)),
        "decorateEnableButtonFlipVertical" in t &&
          o(19, (T = t.decorateEnableButtonFlipVertical)),
        "decorateEnableSelectImagePreset" in t &&
          o(20, (P = t.decorateEnableSelectImagePreset)),
        "decoratePresets" in t && o(21, (R = t.decoratePresets)),
        "decorateWillRenderShapePresetToolbar" in t &&
          o(22, (A = t.decorateWillRenderShapePresetToolbar)),
        "enableSelectToolToAddShape" in t &&
          o(23, (E = t.enableSelectToolToAddShape)),
        "enableTapToAddText" in t && o(24, (I = t.enableTapToAddText)),
        "enableZoomControls" in t && o(25, (L = t.enableZoomControls)),
        "enableZoom" in t && o(26, (F = t.enableZoom)),
        "enablePan" in t && o(27, (z = t.enablePan)),
        "willRenderShapeControls" in t &&
          o(28, (B = t.willRenderShapeControls)),
        "beforeAddShape" in t && o(29, (O = t.beforeAddShape)),
        "beforeRemoveShape" in t && o(30, (D = t.beforeRemoveShape)),
        "beforeDeselectShape" in t && o(31, (W = t.beforeDeselectShape)),
        "beforeSelectShape" in t && o(32, (_ = t.beforeSelectShape)),
        "beforeUpdateShape" in t && o(33, (Z = t.beforeUpdateShape));
    }),
    (t.$$.update = () => {
      2048 & t.$$.dirty[1] && o(41, (i = a ? a.scale : 1)),
        5120 & t.$$.dirty[1] &&
          o(
            34,
            (n = (t) => {
              const e = q(t);
              return (e.x -= s.x), (e.y -= s.y), (e.x /= i), (e.y /= i), e;
            })
          ),
        5120 & t.$$.dirty[1] &&
          o(
            35,
            (r = (t) => {
              const e = q(t);
              return (e.x *= i), (e.y *= i), (e.x += s.x), (e.y += s.y), e;
            })
          );
    }),
    [
      M,
      l,
      c,
      d,
      u,
      p,
      h,
      m,
      g,
      f,
      $,
      y,
      b,
      x,
      v,
      w,
      S,
      k,
      C,
      T,
      P,
      R,
      A,
      E,
      I,
      L,
      F,
      z,
      B,
      O,
      D,
      W,
      _,
      Z,
      n,
      r,
      V,
      j,
      N,
      H,
      "decorate",
      i,
      a,
      s,
      function (t) {
        (M = t), o(0, M);
      },
      function (e) {
        tr(t, e);
      },
    ]
  );
}
var S$ = {
  util: [
    "decorate",
    class extends Br {
      constructor(t) {
        super(),
          zr(
            this,
            t,
            w$,
            v$,
            sn,
            {
              name: 40,
              isActive: 1,
              isActiveFraction: 2,
              isVisible: 3,
              stores: 4,
              locale: 5,
              markupEditorToolbar: 6,
              markupEditorToolStyles: 7,
              markupEditorShapeStyleControls: 8,
              markupEditorToolSelectRadius: 9,
              markupEditorTextInputMode: 10,
              markupEditorWillStartInteraction: 11,
              markupEditorZoomLevels: 12,
              markupEditorZoomAdjustStep: 13,
              markupEditorZoomAdjustFactor: 14,
              willRenderShapePresetToolbar: 15,
              decorateTools: 16,
              decorateToolShapes: 17,
              decorateShapeControls: 18,
              decorateActiveTool: 0,
              decorateEnableButtonFlipVertical: 19,
              decorateEnableSelectImagePreset: 20,
              decoratePresets: 21,
              decorateWillRenderShapePresetToolbar: 22,
              enableSelectToolToAddShape: 23,
              enableTapToAddText: 24,
              enableZoomControls: 25,
              enableZoom: 26,
              enablePan: 27,
              willRenderShapeControls: 28,
              beforeAddShape: 29,
              beforeRemoveShape: 30,
              beforeDeselectShape: 31,
              beforeSelectShape: 32,
              beforeUpdateShape: 33,
            },
            [-1, -1]
          );
      }
      get name() {
        return this.$$.ctx[40];
      }
      get isActive() {
        return this.$$.ctx[1];
      }
      set isActive(t) {
        this.$set({ isActive: t }), hr();
      }
      get isActiveFraction() {
        return this.$$.ctx[2];
      }
      set isActiveFraction(t) {
        this.$set({ isActiveFraction: t }), hr();
      }
      get isVisible() {
        return this.$$.ctx[3];
      }
      set isVisible(t) {
        this.$set({ isVisible: t }), hr();
      }
      get stores() {
        return this.$$.ctx[4];
      }
      set stores(t) {
        this.$set({ stores: t }), hr();
      }
      get locale() {
        return this.$$.ctx[5];
      }
      set locale(t) {
        this.$set({ locale: t }), hr();
      }
      get markupEditorToolbar() {
        return this.$$.ctx[6];
      }
      set markupEditorToolbar(t) {
        this.$set({ markupEditorToolbar: t }), hr();
      }
      get markupEditorToolStyles() {
        return this.$$.ctx[7];
      }
      set markupEditorToolStyles(t) {
        this.$set({ markupEditorToolStyles: t }), hr();
      }
      get markupEditorShapeStyleControls() {
        return this.$$.ctx[8];
      }
      set markupEditorShapeStyleControls(t) {
        this.$set({ markupEditorShapeStyleControls: t }), hr();
      }
      get markupEditorToolSelectRadius() {
        return this.$$.ctx[9];
      }
      set markupEditorToolSelectRadius(t) {
        this.$set({ markupEditorToolSelectRadius: t }), hr();
      }
      get markupEditorTextInputMode() {
        return this.$$.ctx[10];
      }
      set markupEditorTextInputMode(t) {
        this.$set({ markupEditorTextInputMode: t }), hr();
      }
      get markupEditorWillStartInteraction() {
        return this.$$.ctx[11];
      }
      set markupEditorWillStartInteraction(t) {
        this.$set({ markupEditorWillStartInteraction: t }), hr();
      }
      get markupEditorZoomLevels() {
        return this.$$.ctx[12];
      }
      set markupEditorZoomLevels(t) {
        this.$set({ markupEditorZoomLevels: t }), hr();
      }
      get markupEditorZoomAdjustStep() {
        return this.$$.ctx[13];
      }
      set markupEditorZoomAdjustStep(t) {
        this.$set({ markupEditorZoomAdjustStep: t }), hr();
      }
      get markupEditorZoomAdjustFactor() {
        return this.$$.ctx[14];
      }
      set markupEditorZoomAdjustFactor(t) {
        this.$set({ markupEditorZoomAdjustFactor: t }), hr();
      }
      get willRenderShapePresetToolbar() {
        return this.$$.ctx[15];
      }
      set willRenderShapePresetToolbar(t) {
        this.$set({ willRenderShapePresetToolbar: t }), hr();
      }
      get decorateTools() {
        return this.$$.ctx[16];
      }
      set decorateTools(t) {
        this.$set({ decorateTools: t }), hr();
      }
      get decorateToolShapes() {
        return this.$$.ctx[17];
      }
      set decorateToolShapes(t) {
        this.$set({ decorateToolShapes: t }), hr();
      }
      get decorateShapeControls() {
        return this.$$.ctx[18];
      }
      set decorateShapeControls(t) {
        this.$set({ decorateShapeControls: t }), hr();
      }
      get decorateActiveTool() {
        return this.$$.ctx[0];
      }
      set decorateActiveTool(t) {
        this.$set({ decorateActiveTool: t }), hr();
      }
      get decorateEnableButtonFlipVertical() {
        return this.$$.ctx[19];
      }
      set decorateEnableButtonFlipVertical(t) {
        this.$set({ decorateEnableButtonFlipVertical: t }), hr();
      }
      get decorateEnableSelectImagePreset() {
        return this.$$.ctx[20];
      }
      set decorateEnableSelectImagePreset(t) {
        this.$set({ decorateEnableSelectImagePreset: t }), hr();
      }
      get decoratePresets() {
        return this.$$.ctx[21];
      }
      set decoratePresets(t) {
        this.$set({ decoratePresets: t }), hr();
      }
      get decorateWillRenderShapePresetToolbar() {
        return this.$$.ctx[22];
      }
      set decorateWillRenderShapePresetToolbar(t) {
        this.$set({ decorateWillRenderShapePresetToolbar: t }), hr();
      }
      get enableSelectToolToAddShape() {
        return this.$$.ctx[23];
      }
      set enableSelectToolToAddShape(t) {
        this.$set({ enableSelectToolToAddShape: t }), hr();
      }
      get enableTapToAddText() {
        return this.$$.ctx[24];
      }
      set enableTapToAddText(t) {
        this.$set({ enableTapToAddText: t }), hr();
      }
      get enableZoomControls() {
        return this.$$.ctx[25];
      }
      set enableZoomControls(t) {
        this.$set({ enableZoomControls: t }), hr();
      }
      get enableZoom() {
        return this.$$.ctx[26];
      }
      set enableZoom(t) {
        this.$set({ enableZoom: t }), hr();
      }
      get enablePan() {
        return this.$$.ctx[27];
      }
      set enablePan(t) {
        this.$set({ enablePan: t }), hr();
      }
      get willRenderShapeControls() {
        return this.$$.ctx[28];
      }
      set willRenderShapeControls(t) {
        this.$set({ willRenderShapeControls: t }), hr();
      }
      get beforeAddShape() {
        return this.$$.ctx[29];
      }
      set beforeAddShape(t) {
        this.$set({ beforeAddShape: t }), hr();
      }
      get beforeRemoveShape() {
        return this.$$.ctx[30];
      }
      set beforeRemoveShape(t) {
        this.$set({ beforeRemoveShape: t }), hr();
      }
      get beforeDeselectShape() {
        return this.$$.ctx[31];
      }
      set beforeDeselectShape(t) {
        this.$set({ beforeDeselectShape: t }), hr();
      }
      get beforeSelectShape() {
        return this.$$.ctx[32];
      }
      set beforeSelectShape(t) {
        this.$set({ beforeSelectShape: t }), hr();
      }
      get beforeUpdateShape() {
        return this.$$.ctx[33];
      }
      set beforeUpdateShape(t) {
        this.$set({ beforeUpdateShape: t }), hr();
      }
    },
  ],
};
function k$(t) {
  let e, o;
  return (
    (e = new g$({
      props: {
        stores: t[3],
        locale: t[4],
        isActive: t[0],
        isActiveFraction: t[1],
        isVisible: t[2],
        mapScreenPointToImagePoint: t[27],
        mapImagePointToScreenPoint: t[28],
        enableZoomControls: t[22],
        enableZoom: t[23],
        enablePan: t[24],
        zoomOptions: t[13],
        zoomAdjustStep: t[14],
        zoomAdjustFactor: t[15],
        utilKey: "sticker",
        shapePresets: t[5],
        shapes: t[6] ? t[33] : t[34],
        toolActive: "preset",
        imageFlipX: !!t[6] && t[25],
        imageFlipY: !!t[6] && t[26],
        imageRotation: t[6] ? t[29] : 0,
        parentRect: t[6] ? t[35] : t[31],
        enablePresetSelectImage: t[7],
        enableButtonFlipVertical: t[8],
        toolSelectRadius: t[11],
        willStartInteraction: t[12],
        willRenderPresetToolbar: t[9] || t[16],
        hooks: {
          willRenderShapeControls: t[10],
          beforeAddShape: t[17],
          beforeRemoveShape: t[18],
          beforeDeselectShape: t[19],
          beforeSelectShape: t[20],
          beforeUpdateShape: t[21],
        },
      },
    })),
    e.$on("measure", t[48]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        8 & o[0] && (i.stores = t[3]),
          16 & o[0] && (i.locale = t[4]),
          1 & o[0] && (i.isActive = t[0]),
          2 & o[0] && (i.isActiveFraction = t[1]),
          4 & o[0] && (i.isVisible = t[2]),
          134217728 & o[0] && (i.mapScreenPointToImagePoint = t[27]),
          268435456 & o[0] && (i.mapImagePointToScreenPoint = t[28]),
          4194304 & o[0] && (i.enableZoomControls = t[22]),
          8388608 & o[0] && (i.enableZoom = t[23]),
          16777216 & o[0] && (i.enablePan = t[24]),
          8192 & o[0] && (i.zoomOptions = t[13]),
          16384 & o[0] && (i.zoomAdjustStep = t[14]),
          32768 & o[0] && (i.zoomAdjustFactor = t[15]),
          32 & o[0] && (i.shapePresets = t[5]),
          64 & o[0] && (i.shapes = t[6] ? t[33] : t[34]),
          33554496 & o[0] && (i.imageFlipX = !!t[6] && t[25]),
          67108928 & o[0] && (i.imageFlipY = !!t[6] && t[26]),
          536870976 & o[0] && (i.imageRotation = t[6] ? t[29] : 0),
          64 & o[0] && (i.parentRect = t[6] ? t[35] : t[31]),
          128 & o[0] && (i.enablePresetSelectImage = t[7]),
          256 & o[0] && (i.enableButtonFlipVertical = t[8]),
          2048 & o[0] && (i.toolSelectRadius = t[11]),
          4096 & o[0] && (i.willStartInteraction = t[12]),
          66048 & o[0] && (i.willRenderPresetToolbar = t[9] || t[16]),
          4064256 & o[0] &&
            (i.hooks = {
              willRenderShapeControls: t[10],
              beforeAddShape: t[17],
              beforeRemoveShape: t[18],
              beforeDeselectShape: t[19],
              beforeSelectShape: t[20],
              beforeUpdateShape: t[21],
            }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function C$(t, e, o) {
  let i, n, r, a, s, l, c, d, u, p, h;
  let { isActive: m } = e,
    { isActiveFraction: g } = e,
    { isVisible: f } = e,
    { stores: $ } = e,
    { locale: y = {} } = e,
    { stickers: b = [] } = e,
    { stickerStickToImage: x = !1 } = e,
    { stickerEnableSelectImage: v = !0 } = e,
    { stickersEnableButtonFlipVertical: w = !1 } = e,
    { stickersWillRenderShapePresetToolbar: S } = e,
    { willRenderShapeControls: k } = e,
    { markupEditorToolSelectRadius: C } = e,
    { markupEditorWillStartInteraction: M } = e,
    { markupEditorZoomLevels: T } = e,
    { markupEditorZoomAdjustStep: P } = e,
    { markupEditorZoomAdjustFactor: R } = e,
    { willRenderShapePresetToolbar: A } = e,
    { beforeAddShape: E } = e,
    { beforeRemoveShape: I } = e,
    { beforeDeselectShape: L } = e,
    { beforeSelectShape: F } = e,
    { beforeUpdateShape: z } = e,
    { enableZoomControls: B = !0 } = e,
    { enableZoom: O = !0 } = e,
    { enablePan: D = !0 } = e;
  const {
    rootRect: W,
    imageCropRect: _,
    imageSelectionRectPresentation: Z,
    imageAnnotation: V,
    imageDecoration: j,
    imageSize: N,
    imageTransforms: H,
    imageTransformsInterpolated: U,
    imageRotation: X,
    imageFlipX: Y,
    imageFlipY: G,
  } = $;
  return (
    dn(t, W, (t) => o(44, (s = t))),
    dn(t, Z, (t) => o(47, (p = t))),
    dn(t, N, (t) => o(45, (l = t))),
    dn(t, H, (t) => o(46, (c = t))),
    dn(t, U, (t) => o(43, (a = t))),
    dn(t, X, (t) => o(29, (h = t))),
    dn(t, Y, (t) => o(25, (d = t))),
    dn(t, G, (t) => o(26, (u = t))),
    (t.$$set = (t) => {
      "isActive" in t && o(0, (m = t.isActive)),
        "isActiveFraction" in t && o(1, (g = t.isActiveFraction)),
        "isVisible" in t && o(2, (f = t.isVisible)),
        "stores" in t && o(3, ($ = t.stores)),
        "locale" in t && o(4, (y = t.locale)),
        "stickers" in t && o(5, (b = t.stickers)),
        "stickerStickToImage" in t && o(6, (x = t.stickerStickToImage)),
        "stickerEnableSelectImage" in t &&
          o(7, (v = t.stickerEnableSelectImage)),
        "stickersEnableButtonFlipVertical" in t &&
          o(8, (w = t.stickersEnableButtonFlipVertical)),
        "stickersWillRenderShapePresetToolbar" in t &&
          o(9, (S = t.stickersWillRenderShapePresetToolbar)),
        "willRenderShapeControls" in t &&
          o(10, (k = t.willRenderShapeControls)),
        "markupEditorToolSelectRadius" in t &&
          o(11, (C = t.markupEditorToolSelectRadius)),
        "markupEditorWillStartInteraction" in t &&
          o(12, (M = t.markupEditorWillStartInteraction)),
        "markupEditorZoomLevels" in t && o(13, (T = t.markupEditorZoomLevels)),
        "markupEditorZoomAdjustStep" in t &&
          o(14, (P = t.markupEditorZoomAdjustStep)),
        "markupEditorZoomAdjustFactor" in t &&
          o(15, (R = t.markupEditorZoomAdjustFactor)),
        "willRenderShapePresetToolbar" in t &&
          o(16, (A = t.willRenderShapePresetToolbar)),
        "beforeAddShape" in t && o(17, (E = t.beforeAddShape)),
        "beforeRemoveShape" in t && o(18, (I = t.beforeRemoveShape)),
        "beforeDeselectShape" in t && o(19, (L = t.beforeDeselectShape)),
        "beforeSelectShape" in t && o(20, (F = t.beforeSelectShape)),
        "beforeUpdateShape" in t && o(21, (z = t.beforeUpdateShape)),
        "enableZoomControls" in t && o(22, (B = t.enableZoomControls)),
        "enableZoom" in t && o(23, (O = t.enableZoom)),
        "enablePan" in t && o(24, (D = t.enablePan));
    }),
    (t.$$.update = () => {
      4096 & t.$$.dirty[1] && o(42, (i = a ? a.scale : 1)),
        (100663360 & t.$$.dirty[0]) | (129024 & t.$$.dirty[1]) &&
          o(
            27,
            (n = x
              ? (t) =>
                  $$(
                    t,
                    s,
                    l,
                    a.origin,
                    a.translation,
                    c.rotation.z,
                    a.scale,
                    d,
                    u
                  )
              : (t) => {
                  const e = q(t);
                  return (e.x -= p.x), (e.y -= p.y), (e.x /= i), (e.y /= i), e;
                })
          ),
        (100663360 & t.$$.dirty[0]) | (129024 & t.$$.dirty[1]) &&
          o(
            28,
            (r = x
              ? (t) =>
                  f$(
                    t,
                    s,
                    l,
                    a.origin,
                    a.translation,
                    c.rotation.z,
                    a.scale,
                    d,
                    u
                  )
              : (t) => {
                  const e = q(t);
                  return (e.x *= i), (e.y *= i), (e.x += p.x), (e.y += p.y), e;
                })
          );
    }),
    [
      m,
      g,
      f,
      $,
      y,
      b,
      x,
      v,
      w,
      S,
      k,
      C,
      M,
      T,
      P,
      R,
      A,
      E,
      I,
      L,
      F,
      z,
      B,
      O,
      D,
      d,
      u,
      n,
      r,
      h,
      W,
      _,
      Z,
      V,
      j,
      N,
      H,
      U,
      X,
      Y,
      G,
      "sticker",
      i,
      a,
      s,
      l,
      c,
      p,
      function (e) {
        tr(t, e);
      },
    ]
  );
}
var M$ = {
  util: [
    "sticker",
    class extends Br {
      constructor(t) {
        super(),
          zr(
            this,
            t,
            C$,
            k$,
            sn,
            {
              name: 41,
              isActive: 0,
              isActiveFraction: 1,
              isVisible: 2,
              stores: 3,
              locale: 4,
              stickers: 5,
              stickerStickToImage: 6,
              stickerEnableSelectImage: 7,
              stickersEnableButtonFlipVertical: 8,
              stickersWillRenderShapePresetToolbar: 9,
              willRenderShapeControls: 10,
              markupEditorToolSelectRadius: 11,
              markupEditorWillStartInteraction: 12,
              markupEditorZoomLevels: 13,
              markupEditorZoomAdjustStep: 14,
              markupEditorZoomAdjustFactor: 15,
              willRenderShapePresetToolbar: 16,
              beforeAddShape: 17,
              beforeRemoveShape: 18,
              beforeDeselectShape: 19,
              beforeSelectShape: 20,
              beforeUpdateShape: 21,
              enableZoomControls: 22,
              enableZoom: 23,
              enablePan: 24,
            },
            [-1, -1]
          );
      }
      get name() {
        return this.$$.ctx[41];
      }
      get isActive() {
        return this.$$.ctx[0];
      }
      set isActive(t) {
        this.$set({ isActive: t }), hr();
      }
      get isActiveFraction() {
        return this.$$.ctx[1];
      }
      set isActiveFraction(t) {
        this.$set({ isActiveFraction: t }), hr();
      }
      get isVisible() {
        return this.$$.ctx[2];
      }
      set isVisible(t) {
        this.$set({ isVisible: t }), hr();
      }
      get stores() {
        return this.$$.ctx[3];
      }
      set stores(t) {
        this.$set({ stores: t }), hr();
      }
      get locale() {
        return this.$$.ctx[4];
      }
      set locale(t) {
        this.$set({ locale: t }), hr();
      }
      get stickers() {
        return this.$$.ctx[5];
      }
      set stickers(t) {
        this.$set({ stickers: t }), hr();
      }
      get stickerStickToImage() {
        return this.$$.ctx[6];
      }
      set stickerStickToImage(t) {
        this.$set({ stickerStickToImage: t }), hr();
      }
      get stickerEnableSelectImage() {
        return this.$$.ctx[7];
      }
      set stickerEnableSelectImage(t) {
        this.$set({ stickerEnableSelectImage: t }), hr();
      }
      get stickersEnableButtonFlipVertical() {
        return this.$$.ctx[8];
      }
      set stickersEnableButtonFlipVertical(t) {
        this.$set({ stickersEnableButtonFlipVertical: t }), hr();
      }
      get stickersWillRenderShapePresetToolbar() {
        return this.$$.ctx[9];
      }
      set stickersWillRenderShapePresetToolbar(t) {
        this.$set({ stickersWillRenderShapePresetToolbar: t }), hr();
      }
      get willRenderShapeControls() {
        return this.$$.ctx[10];
      }
      set willRenderShapeControls(t) {
        this.$set({ willRenderShapeControls: t }), hr();
      }
      get markupEditorToolSelectRadius() {
        return this.$$.ctx[11];
      }
      set markupEditorToolSelectRadius(t) {
        this.$set({ markupEditorToolSelectRadius: t }), hr();
      }
      get markupEditorWillStartInteraction() {
        return this.$$.ctx[12];
      }
      set markupEditorWillStartInteraction(t) {
        this.$set({ markupEditorWillStartInteraction: t }), hr();
      }
      get markupEditorZoomLevels() {
        return this.$$.ctx[13];
      }
      set markupEditorZoomLevels(t) {
        this.$set({ markupEditorZoomLevels: t }), hr();
      }
      get markupEditorZoomAdjustStep() {
        return this.$$.ctx[14];
      }
      set markupEditorZoomAdjustStep(t) {
        this.$set({ markupEditorZoomAdjustStep: t }), hr();
      }
      get markupEditorZoomAdjustFactor() {
        return this.$$.ctx[15];
      }
      set markupEditorZoomAdjustFactor(t) {
        this.$set({ markupEditorZoomAdjustFactor: t }), hr();
      }
      get willRenderShapePresetToolbar() {
        return this.$$.ctx[16];
      }
      set willRenderShapePresetToolbar(t) {
        this.$set({ willRenderShapePresetToolbar: t }), hr();
      }
      get beforeAddShape() {
        return this.$$.ctx[17];
      }
      set beforeAddShape(t) {
        this.$set({ beforeAddShape: t }), hr();
      }
      get beforeRemoveShape() {
        return this.$$.ctx[18];
      }
      set beforeRemoveShape(t) {
        this.$set({ beforeRemoveShape: t }), hr();
      }
      get beforeDeselectShape() {
        return this.$$.ctx[19];
      }
      set beforeDeselectShape(t) {
        this.$set({ beforeDeselectShape: t }), hr();
      }
      get beforeSelectShape() {
        return this.$$.ctx[20];
      }
      set beforeSelectShape(t) {
        this.$set({ beforeSelectShape: t }), hr();
      }
      get beforeUpdateShape() {
        return this.$$.ctx[21];
      }
      set beforeUpdateShape(t) {
        this.$set({ beforeUpdateShape: t }), hr();
      }
      get enableZoomControls() {
        return this.$$.ctx[22];
      }
      set enableZoomControls(t) {
        this.$set({ enableZoomControls: t }), hr();
      }
      get enableZoom() {
        return this.$$.ctx[23];
      }
      set enableZoom(t) {
        this.$set({ enableZoom: t }), hr();
      }
      get enablePan() {
        return this.$$.ctx[24];
      }
      set enablePan(t) {
        this.$set({ enablePan: t }), hr();
      }
    },
  ],
};
function T$(t) {
  let e,
    o,
    i,
    n,
    r,
    a = (t[13](t[29].value) || "") + "",
    s = (S(t[29].label) ? t[29].label(t[1]) : t[29].label) + "";
  return {
    c() {
      (e = Tn("div")),
        (i = An()),
        (n = Tn("span")),
        (r = Rn(s)),
        (o = new _n(i)),
        zn(e, "slot", "option");
    },
    m(t, s) {
      Cn(t, e, s), o.m(a, e), kn(e, i), kn(e, n), kn(n, r);
    },
    p(t, e) {
      536870912 & e && a !== (a = (t[13](t[29].value) || "") + "") && o.p(a),
        536870914 & e &&
          s !== (s = (S(t[29].label) ? t[29].label(t[1]) : t[29].label) + "") &&
          On(r, s);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function P$(t) {
  let e, o;
  return (
    (e = new dd({
      props: {
        locale: t[1],
        layout: "row",
        options: t[2],
        selectedIndex: t[10],
        onchange: t[11],
        $$slots: {
          option: [
            T$,
            ({ option: t }) => ({ 29: t }),
            ({ option: t }) => (t ? 536870912 : 0),
          ],
        },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        2 & o && (i.locale = t[1]),
          4 & o && (i.options = t[2]),
          1610612738 & o && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function R$(t) {
  let e, o, i, n, r;
  return (
    (o = new Rf({
      props: {
        locale: t[1],
        shape: t[5],
        onchange: t[12],
        controls: t[3],
        scrollElasticity: t[4],
      },
    })),
    (n = new Ql({
      props: {
        elasticity: t[8],
        $$slots: { default: [P$] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (e = Tn("div")),
          Ir(o.$$.fragment),
          (i = An()),
          Ir(n.$$.fragment),
          zn(e, "slot", "footer"),
          zn(e, "style", t[6]);
      },
      m(t, a) {
        Cn(t, e, a), Lr(o, e, null), kn(e, i), Lr(n, e, null), (r = !0);
      },
      p(t, i) {
        const a = {};
        2 & i && (a.locale = t[1]),
          32 & i && (a.shape = t[5]),
          8 & i && (a.controls = t[3]),
          16 & i && (a.scrollElasticity = t[4]),
          o.$set(a);
        const s = {};
        1073741830 & i && (s.$$scope = { dirty: i, ctx: t }),
          n.$set(s),
          (!r || 64 & i) && zn(e, "style", t[6]);
      },
      i(t) {
        r || (vr(o.$$.fragment, t), vr(n.$$.fragment, t), (r = !0));
      },
      o(t) {
        wr(o.$$.fragment, t), wr(n.$$.fragment, t), (r = !1);
      },
      d(t) {
        t && Mn(e), Fr(o), Fr(n);
      },
    }
  );
}
function A$(t) {
  let e, o;
  return (
    (e = new vm({ props: { $$slots: { footer: [R$] }, $$scope: { ctx: t } } })),
    e.$on("measure", t[21]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, [o]) {
        const i = {};
        1073741950 & o && (i.$$scope = { dirty: o, ctx: t }), e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function E$(t, e, o) {
  let i,
    n,
    r,
    a,
    s,
    l,
    c = Qi,
    d = () => (c(), (c = ln(u, (t) => o(19, (s = t)))), u);
  t.$$.on_destroy.push(() => c());
  let { isActive: u } = e;
  d();
  let { stores: p } = e,
    { locale: h = {} } = e,
    { frameStyles: m = {} } = e,
    { frameOptions: g = [] } = e,
    { markupEditorShapeStyleControls: f } = e;
  const {
    history: $,
    animation: y,
    elasticityMultiplier: b,
    scrollElasticity: x,
    imageFrame: v,
  } = p;
  dn(t, y, (t) => o(18, (a = t))), dn(t, v, (t) => o(5, (r = t)));
  let w = r ? g.findIndex(([t]) => t === r.id) : 0,
    S = {};
  let k;
  const C = ss(a ? 20 : 0);
  return (
    dn(t, C, (t) => o(20, (l = t))),
    (t.$$set = (t) => {
      "isActive" in t && d(o(0, (u = t.isActive))),
        "stores" in t && o(16, (p = t.stores)),
        "locale" in t && o(1, (h = t.locale)),
        "frameStyles" in t && o(17, (m = t.frameStyles)),
        "frameOptions" in t && o(2, (g = t.frameOptions)),
        "markupEditorShapeStyleControls" in t &&
          o(3, (f = t.markupEditorShapeStyleControls));
    }),
    (t.$$.update = () => {
      786432 & t.$$.dirty && a && C.set(s ? 0 : 20),
        1048576 & t.$$.dirty &&
          o(6, (n = l ? `transform: translateY(${l}px)` : void 0));
    }),
    o(4, (i = b * x)),
    [
      u,
      h,
      g,
      f,
      i,
      r,
      n,
      y,
      x,
      v,
      w,
      ({ value: t }) => {
        const e = m[t];
        if (!e || !e.shape) return v.set(void 0), void $.write();
        const { shape: o } = e,
          i = {
            id: t,
            ...Io(o),
            ...Object.keys(S).reduce(
              (t, e) => (o[e] ? ((t[e] = S[e]), t) : t),
              {}
            ),
          };
        v.set(i), $.write();
      },
      function (t) {
        Je(t, "frameColor") && (S.frameColor = t.frameColor),
          r &&
            (Ti(r, t),
            v.set(r),
            clearTimeout(k),
            (k = setTimeout(() => {
              $.write();
            }, 200)));
      },
      (t) => {
        const e = m[t];
        var o;
        if (e && e.thumb)
          return (
            (o = e.thumb),
            /div/i.test(o) || Df(o)
              ? o
              : /rect|path|circle|line|<g>/i.test(o)
              ? `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" stroke-width="1" stroke="currentColor" fill="none" aria-hidden="true" focusable="false" stroke-linecap="round" stroke-linejoin="round">${o}</svg>`
              : `<img src="${o}" alt=""/>`
          );
      },
      C,
      "frame",
      p,
      m,
      a,
      s,
      l,
      function (e) {
        tr(t, e);
      },
    ]
  );
}
var I$ = {
  util: [
    "frame",
    class extends Br {
      constructor(t) {
        super(),
          zr(this, t, E$, A$, sn, {
            name: 15,
            isActive: 0,
            stores: 16,
            locale: 1,
            frameStyles: 17,
            frameOptions: 2,
            markupEditorShapeStyleControls: 3,
          });
      }
      get name() {
        return this.$$.ctx[15];
      }
      get isActive() {
        return this.$$.ctx[0];
      }
      set isActive(t) {
        this.$set({ isActive: t }), hr();
      }
      get stores() {
        return this.$$.ctx[16];
      }
      set stores(t) {
        this.$set({ stores: t }), hr();
      }
      get locale() {
        return this.$$.ctx[1];
      }
      set locale(t) {
        this.$set({ locale: t }), hr();
      }
      get frameStyles() {
        return this.$$.ctx[17];
      }
      set frameStyles(t) {
        this.$set({ frameStyles: t }), hr();
      }
      get frameOptions() {
        return this.$$.ctx[2];
      }
      set frameOptions(t) {
        this.$set({ frameOptions: t }), hr();
      }
      get markupEditorShapeStyleControls() {
        return this.$$.ctx[3];
      }
      set markupEditorShapeStyleControls(t) {
        this.$set({ markupEditorShapeStyleControls: t }), hr();
      }
    },
  ],
};
function L$(t) {
  let e, o, i, n, r, a, s, l;
  return {
    c() {
      (e = Tn("div")),
        (o = Tn("label")),
        (i = Rn(t[1])),
        (n = An()),
        (r = Tn("input")),
        zn(o, "for", t[0]),
        zn(o, "title", t[2]),
        zn(o, "aria-label", t[2]),
        zn(r, "id", t[0]),
        zn(r, "type", "text"),
        zn(r, "inputmode", "numeric"),
        zn(r, "pattern", "[0-9]*"),
        zn(r, "data-state", t[3]),
        zn(r, "autocomplete", "off"),
        zn(r, "placeholder", t[4]),
        (r.value = a = void 0 === t[5] ? "" : t[7](t[5] + "")),
        zn(e, "class", "PinturaInputDimension");
    },
    m(a, c) {
      Cn(a, e, c),
        kn(e, o),
        kn(o, i),
        kn(e, n),
        kn(e, r),
        s || ((l = In(r, "input", t[8])), (s = !0));
    },
    p(t, [e]) {
      2 & e && On(i, t[1]),
        1 & e && zn(o, "for", t[0]),
        4 & e && zn(o, "title", t[2]),
        4 & e && zn(o, "aria-label", t[2]),
        1 & e && zn(r, "id", t[0]),
        8 & e && zn(r, "data-state", t[3]),
        16 & e && zn(r, "placeholder", t[4]),
        160 & e &&
          a !== (a = void 0 === t[5] ? "" : t[7](t[5] + "")) &&
          r.value !== a &&
          (r.value = a);
    },
    i: Qi,
    o: Qi,
    d(t) {
      t && Mn(e), (s = !1), l();
    },
  };
}
function F$(t, e, o) {
  let { id: i } = e,
    { label: n } = e,
    { title: r } = e,
    { state: a } = e,
    { placeholder: s } = e,
    { value: l } = e,
    { onchange: c } = e,
    { format: d = (t) => t.replace(/\D/g, "") } = e;
  return (
    (t.$$set = (t) => {
      "id" in t && o(0, (i = t.id)),
        "label" in t && o(1, (n = t.label)),
        "title" in t && o(2, (r = t.title)),
        "state" in t && o(3, (a = t.state)),
        "placeholder" in t && o(4, (s = t.placeholder)),
        "value" in t && o(5, (l = t.value)),
        "onchange" in t && o(6, (c = t.onchange)),
        "format" in t && o(7, (d = t.format));
    }),
    [i, n, r, a, s, l, c, d, (t) => c(d(t.currentTarget.value))]
  );
}
class z$ extends Br {
  constructor(t) {
    super(),
      zr(this, t, F$, L$, sn, {
        id: 0,
        label: 1,
        title: 2,
        state: 3,
        placeholder: 4,
        value: 5,
        onchange: 6,
        format: 7,
      });
  }
}
function B$(t) {
  let e;
  return {
    c() {
      e = Pn("g");
    },
    m(o, i) {
      Cn(o, e, i), (e.innerHTML = t[2]);
    },
    p(t, o) {
      4 & o && (e.innerHTML = t[2]);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function O$(t) {
  let e, o, i, n, r, a, s, l;
  return (
    (r = new zl({
      props: { $$slots: { default: [B$] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        (e = Tn("div")),
          (o = Tn("input")),
          (i = An()),
          (n = Tn("label")),
          Ir(r.$$.fragment),
          zn(o, "id", t[0]),
          zn(o, "class", "implicit"),
          zn(o, "type", "checkbox"),
          (o.checked = t[1]),
          zn(n, "for", t[0]),
          zn(n, "title", t[3]);
      },
      m(c, d) {
        Cn(c, e, d),
          kn(e, o),
          kn(e, i),
          kn(e, n),
          Lr(r, n, null),
          (a = !0),
          s || ((l = In(o, "change", t[5])), (s = !0));
      },
      p(t, [e]) {
        (!a || 1 & e) && zn(o, "id", t[0]), (!a || 2 & e) && (o.checked = t[1]);
        const i = {};
        68 & e && (i.$$scope = { dirty: e, ctx: t }),
          r.$set(i),
          (!a || 1 & e) && zn(n, "for", t[0]),
          (!a || 8 & e) && zn(n, "title", t[3]);
      },
      i(t) {
        a || (vr(r.$$.fragment, t), (a = !0));
      },
      o(t) {
        wr(r.$$.fragment, t), (a = !1);
      },
      d(t) {
        t && Mn(e), Fr(r), (s = !1), l();
      },
    }
  );
}
function D$(t, e, o) {
  let { id: i } = e,
    { locked: n } = e,
    { icon: r } = e,
    { title: a } = e,
    { onchange: s } = e;
  return (
    (t.$$set = (t) => {
      "id" in t && o(0, (i = t.id)),
        "locked" in t && o(1, (n = t.locked)),
        "icon" in t && o(2, (r = t.icon)),
        "title" in t && o(3, (a = t.title)),
        "onchange" in t && o(4, (s = t.onchange));
    }),
    [i, n, r, a, s, (t) => s(t.currentTarget.checked)]
  );
}
class W$ extends Br {
  constructor(t) {
    super(),
      zr(this, t, D$, O$, sn, {
        id: 0,
        locked: 1,
        icon: 2,
        title: 3,
        onchange: 4,
      });
  }
}
function _$(t) {
  let e;
  return {
    c() {
      e = Rn("Save");
    },
    m(t, o) {
      Cn(t, e, o);
    },
    d(t) {
      t && Mn(e);
    },
  };
}
function Z$(t) {
  let e,
    o,
    i,
    n,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    h,
    m = t[1].resizeLabelFormCaption + "";
  return (
    (l = new Jd({ props: { items: t[3] } })),
    (d = new Vl({
      props: {
        type: "submit",
        class: "implicit",
        $$slots: { default: [_$] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (e = Tn("form")),
          (o = Tn("div")),
          (i = Tn("fieldset")),
          (n = Tn("legend")),
          (r = Rn(m)),
          (a = An()),
          (s = Tn("div")),
          Ir(l.$$.fragment),
          (c = An()),
          Ir(d.$$.fragment),
          zn(n, "class", "implicit"),
          zn(s, "class", "PinturaFieldsetInner"),
          zn(o, "class", "PinturaFormInner"),
          zn(e, "slot", "footer"),
          zn(e, "style", t[4]);
      },
      m(m, g) {
        Cn(m, e, g),
          kn(e, o),
          kn(o, i),
          kn(i, n),
          kn(n, r),
          kn(i, a),
          kn(i, s),
          Lr(l, s, null),
          t[64](s),
          kn(o, c),
          Lr(d, o, null),
          (u = !0),
          p ||
            ((h = [
              In(s, "focusin", t[14]),
              In(s, "focusout", t[15]),
              In(e, "submit", Ln(t[16])),
            ]),
            (p = !0));
      },
      p(t, o) {
        (!u || 2 & o[0]) &&
          m !== (m = t[1].resizeLabelFormCaption + "") &&
          On(r, m);
        const i = {};
        8 & o[0] && (i.items = t[3]), l.$set(i);
        const n = {};
        67108864 & o[2] && (n.$$scope = { dirty: o, ctx: t }),
          d.$set(n),
          (!u || 16 & o[0]) && zn(e, "style", t[4]);
      },
      i(t) {
        u || (vr(l.$$.fragment, t), vr(d.$$.fragment, t), (u = !0));
      },
      o(t) {
        wr(l.$$.fragment, t), wr(d.$$.fragment, t), (u = !1);
      },
      d(o) {
        o && Mn(e), Fr(l), t[64](null), Fr(d), (p = !1), rn(h);
      },
    }
  );
}
function V$(t) {
  let e, o;
  return (
    (e = new vm({ props: { $$slots: { footer: [Z$] }, $$scope: { ctx: t } } })),
    e.$on("measure", t[65]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        (30 & o[0]) | (67108864 & o[2]) && (i.$$scope = { dirty: o, ctx: t }),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function j$(t, e, o) {
  let i,
    n,
    r,
    a,
    s,
    l,
    c,
    d,
    u,
    p,
    h,
    m,
    g,
    f,
    $,
    y,
    b,
    x,
    v,
    S,
    k,
    C,
    M,
    P,
    R,
    A,
    E,
    I,
    L,
    F = Qi,
    z = () => (F(), (F = ln(O, (t) => o(41, (m = t)))), O);
  t.$$.on_destroy.push(() => F());
  const B = (t, e = 0, o = 9999) => {
    if (w(t) && !(t = t.replace(/\D/g, "")).length) return;
    const i = Math.round(t);
    return Number.isNaN(i) ? void 0 : na(i, e, o);
  };
  let { isActive: O } = e;
  z();
  let { stores: _ } = e,
    { locale: Z = {} } = e,
    { resizeMinSize: V = xt(1, 1) } = e,
    { resizeMaxSize: j = xt(9999, 9999) } = e,
    { resizeSizePresetOptions: N } = e,
    { resizeWidthPresetOptions: H } = e,
    { resizeHeightPresetOptions: U } = e,
    { resizeWillRenderFooter: X = W } = e;
  const Y = ss(0, { stiffness: 0.15, damping: 0.3 });
  dn(t, Y, (t) => o(60, (A = t)));
  const {
    animation: G,
    imageSize: q,
    imageCropRect: K,
    imageCropRectAspectRatio: J,
    imageCropAspectRatio: Q,
    imageOutputSize: tt,
    imageSelectionRect: et,
    imageSelectionZoom: ot,
    history: it,
    env: nt,
  } = _;
  dn(t, G, (t) => o(62, (I = t))),
    dn(t, q, (t) => o(71, (y = t))),
    dn(t, K, (t) => o(40, (p = t))),
    dn(t, J, (t) => o(43, (f = t))),
    dn(t, Q, (t) => o(70, ($ = t))),
    dn(t, tt, (t) => o(42, (g = t))),
    dn(t, ot, (t) => o(69, (h = t))),
    dn(t, nt, (t) => o(61, (E = t)));
  const rt = T();
  let at,
    st,
    lt,
    ct,
    dt,
    ut = !1;
  const pt = (t, e, o, i, n) =>
      null != t && o !== e
        ? t >= i[e] && t <= n[e]
          ? "valid"
          : "invalid"
        : "undetermined",
    ht = (t, e, o) => Math.round(null != t ? t / e : o.height),
    mt = () => {
      ut &&
        st &&
        lt &&
        ("width" === ct
          ? o(37, (lt = Math.round(st / f)))
          : "height" === ct
          ? o(36, (st = Math.round(lt * f)))
          : ("width" === dt
              ? o(37, (lt = Math.round(st / f)))
              : "height" === dt && o(36, (st = Math.round(lt * f))),
            gt()));
    },
    gt = (t) => {
      let e = B(st),
        i = B(lt),
        n = e,
        r = i,
        a = n && r,
        s = t || f;
      if (!n && !r) return;
      n && !r ? (r = Math.round(n / s)) : r && !n && (n = Math.round(r * s)),
        (s = t || a ? D(n, r) : f);
      let l = xt(n, r);
      Ct(j, l) || (l = Qt(j, s)),
        Ct(l, V) || (l = Jt(V, s)),
        o(36, (st = null != e ? Math.round(l.width) : void 0)),
        o(37, (lt = null != i ? Math.round(l.height) : void 0));
    },
    ft = () => {
      gt();
      const { width: t, height: e } = g || {};
      (t === st && e === lt) ||
        (st || lt
          ? (st && lt && fn(Q, ($ = st / lt), $), fn(tt, (g = xt(st, lt)), g))
          : (fn(Q, ($ = y.width / y.height), $),
            fn(Q, ($ = void 0), $),
            fn(tt, (g = void 0), g)),
        it.write());
    },
    $t = tt.subscribe((t) => {
      if (!t) return o(36, (st = void 0)), void o(37, (lt = void 0));
      o(36, (st = t.width)), o(37, (lt = t.height)), gt();
    }),
    bt = Q.subscribe((t) => {
      (st || lt) &&
        t &&
        (st && lt && D(st, lt) !== t ? (o(37, (lt = st / t)), gt(t)) : gt());
    }),
    vt = (t) =>
      w(t[0]) ? ((t[1] = t[1].map(vt)), t) : qe(t) ? [t, "" + t] : t,
    wt = (t) => {
      if (w(t[0])) return (t[1] = t[1].map(wt)), t;
      let [e, o] = t;
      if (qe(e) && qe(o)) {
        const [t, i] = [e, o];
        (o = `${t} Ã— ${i}`), (e = [t, i]);
      }
      return [e, o];
    },
    St = Wr();
  dn(t, St, (t) => o(44, (b = t)));
  const kt = Wr();
  dn(t, kt, (t) => o(45, (x = t)));
  const Mt = Wr();
  dn(t, Mt, (t) => o(46, (v = t)));
  const Tt = Wr();
  dn(t, Tt, (t) => o(47, (S = t)));
  const Pt = Wr();
  dn(t, Pt, (t) => o(48, (k = t)));
  const Rt = Wr();
  dn(t, Rt, (t) => o(49, (C = t)));
  const At = _r([tt, kt], ([t, e], o) => {
    if (!e) return o(-1);
    const i = e.findIndex(([e]) => {
      if (!e && !t) return !0;
      if (!e) return !1;
      const [o, i] = e;
      return t.width === o && t.height === i;
    });
    o(i < 0 ? 0 : i);
  });
  dn(t, At, (t) => o(51, (M = t)));
  const Et = _r([tt, Tt], ([t, e], o) => {
    if (!e) return o(-1);
    const i = e.findIndex(([e]) => (!e && !t) || (!!e && t.width === e));
    o(i < 0 ? 0 : i);
  });
  dn(t, Et, (t) => o(53, (P = t)));
  const It = _r([tt, Rt], ([t, e], o) => {
    if (!e) return o(-1);
    const i = e.findIndex(([e]) => (!e && !t) || (!!e && t.height === e));
    o(i < 0 ? 0 : i);
  });
  dn(t, It, (t) => o(55, (R = t)));
  let Lt = void 0,
    Ft = void 0;
  let zt = {};
  const Bt = ss(I ? 20 : 0);
  return (
    dn(t, Bt, (t) => o(63, (L = t))),
    qn(() => {
      $t(), bt();
    }),
    (t.$$set = (t) => {
      "isActive" in t && z(o(0, (O = t.isActive))),
        "stores" in t && o(28, (_ = t.stores)),
        "locale" in t && o(1, (Z = t.locale)),
        "resizeMinSize" in t && o(29, (V = t.resizeMinSize)),
        "resizeMaxSize" in t && o(30, (j = t.resizeMaxSize)),
        "resizeSizePresetOptions" in t &&
          o(31, (N = t.resizeSizePresetOptions)),
        "resizeWidthPresetOptions" in t &&
          o(32, (H = t.resizeWidthPresetOptions)),
        "resizeHeightPresetOptions" in t &&
          o(33, (U = t.resizeHeightPresetOptions)),
        "resizeWillRenderFooter" in t && o(34, (X = t.resizeWillRenderFooter));
    }),
    (t.$$.update = () => {
      var e;
      8193 & t.$$.dirty[1] &&
        N &&
        (fn(St, (b = N.map(wt)), b), fn(kt, (x = Fc(b)), x)),
        8192 & t.$$.dirty[1] && o(56, (a = !!b)),
        1064960 & t.$$.dirty[1] && o(50, (i = M > -1 && x[M][1])),
        32770 & t.$$.dirty[1] &&
          H &&
          (fn(Mt, (v = H.map(vt)), v), fn(Tt, (S = Fc(v)), S)),
        33587200 & t.$$.dirty[1] && o(57, (s = !a && v)),
        4259840 & t.$$.dirty[1] && o(52, (n = P > -1 && S[P][1])),
        131076 & t.$$.dirty[1] &&
          U &&
          (fn(Pt, (k = U.map(vt)), k), fn(Rt, (C = Fc(k)), C)),
        33685504 & t.$$.dirty[1] && o(58, (l = !a && k)),
        17039360 & t.$$.dirty[1] && o(54, (r = R > -1 && C[R][1])),
        234881024 & t.$$.dirty[1] && o(59, (c = !a && !s && !l)),
        (1610612738 & t.$$.dirty[0]) | (2147136504 & t.$$.dirty[1]) &&
          o(
            3,
            (d =
              zt &&
              fu(() => {
                return X(
                  [
                    a && [
                      "Dropdown",
                      "size-presets",
                      {
                        label: i,
                        options: b,
                        onchange: (t) => {
                          return (
                            (e = t.value) && !Lt && ((Lt = { ...p }), (Ft = $)),
                            e
                              ? (fn(Q, ($ = D(e[0], e[1])), $),
                                fn(tt, (g = yt(e)), g))
                              : (fn(K, (p = Lt), p),
                                fn(Q, ($ = Ft), $),
                                fn(tt, (g = void 0), g),
                                (Lt = void 0),
                                (Ft = void 0)),
                            void it.write()
                          );
                          var e;
                        },
                        selectedIndex: M,
                      },
                    ],
                    s && [
                      "Dropdown",
                      "width-presets",
                      {
                        label: n,
                        options: v,
                        onchange: (t) => {
                          o(36, (st = t.value)), ft();
                        },
                        selectedIndex: P,
                      },
                    ],
                    s &&
                      l && [
                        "span",
                        "times",
                        { class: "PinturaResizeLabel", innerHTML: "&times;" },
                      ],
                    l && [
                      "Dropdown",
                      "height-presets",
                      {
                        label: r,
                        options: k,
                        onchange: (t) => {
                          o(37, (lt = t.value)), ft();
                        },
                        selectedIndex: R,
                      },
                    ],
                    c && [
                      z$,
                      "width-input",
                      {
                        id: "width-" + rt,
                        title: Z.resizeTitleInputWidth,
                        label: Z.resizeLabelInputWidth,
                        placeholder:
                          ((t = B(lt)),
                          (e = f),
                          (d = p),
                          Math.round(null != t ? t * e : d.width)),
                        value: st,
                        state: pt(B(st), "width", ct, V, j),
                        onchange: (t) => {
                          o(36, (st = t)), mt();
                        },
                      },
                    ],
                    c && [
                      W$,
                      "aspect-ratio-lock",
                      {
                        id: "aspect-ratio-lock-" + rt,
                        title: Z.resizeTitleButtonMaintainAspectRatio,
                        icon: w(Z.resizeIconButtonMaintainAspectRatio)
                          ? Z.resizeIconButtonMaintainAspectRatio
                          : Z.resizeIconButtonMaintainAspectRatio(ut, A),
                        locked: ut,
                        onchange: (t) => {
                          o(35, (ut = t)), mt();
                        },
                      },
                    ],
                    c && [
                      z$,
                      "height-input",
                      {
                        id: "height-" + rt,
                        title: Z.resizeTitleInputHeight,
                        label: Z.resizeLabelInputHeight,
                        placeholder: ht(B(st), f, p),
                        value: lt,
                        state: pt(B(lt), "height", ct, V, j),
                        onchange: (t) => {
                          o(37, (lt = t)), mt();
                        },
                      },
                    ],
                  ].filter(Boolean),
                  { ...E },
                  () => o(39, (zt = {}))
                );
                var t, e, d;
              }).filter(Boolean))
          ),
        16 & t.$$.dirty[1] && Y.set(ut ? 1 : 0),
        128 & t.$$.dirty[1] && ct && (dt = ct),
        3072 & t.$$.dirty[1] &&
          (m
            ? fn(
                ot,
                (h =
                  (e = g) && p ? e.width / p.width || e.height / p.height : 1),
                h
              )
            : fn(ot, (h = void 0), h)),
        (1024 & t.$$.dirty[1]) | (1 & t.$$.dirty[2]) && I && Bt.set(m ? 0 : 20),
        2 & t.$$.dirty[2] &&
          o(4, (u = L ? `transform: translateY(${L}px)` : void 0));
    }),
    [
      O,
      Z,
      at,
      d,
      u,
      Y,
      G,
      q,
      K,
      J,
      Q,
      tt,
      ot,
      nt,
      (t) => {
        const e = t.target.id;
        /width/.test(e)
          ? o(38, (ct = "width"))
          : /height/.test(e)
          ? o(38, (ct = "height"))
          : /aspectRatio/i.test(e)
          ? o(38, (ct = "lock"))
          : o(38, (ct = void 0));
      },
      (t) => {
        at.contains(t.relatedTarget) || ft(), o(38, (ct = void 0));
      },
      ft,
      St,
      kt,
      Mt,
      Tt,
      Pt,
      Rt,
      At,
      Et,
      It,
      Bt,
      "resize",
      _,
      V,
      j,
      N,
      H,
      U,
      X,
      ut,
      st,
      lt,
      ct,
      zt,
      p,
      m,
      g,
      f,
      b,
      x,
      v,
      S,
      k,
      C,
      i,
      M,
      n,
      P,
      r,
      R,
      a,
      s,
      l,
      c,
      A,
      E,
      I,
      L,
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (at = t), o(2, at);
        });
      },
      function (e) {
        tr(t, e);
      },
    ]
  );
}
var N$ = {
  util: [
    "resize",
    class extends Br {
      constructor(t) {
        super(),
          zr(
            this,
            t,
            j$,
            V$,
            sn,
            {
              name: 27,
              isActive: 0,
              stores: 28,
              locale: 1,
              resizeMinSize: 29,
              resizeMaxSize: 30,
              resizeSizePresetOptions: 31,
              resizeWidthPresetOptions: 32,
              resizeHeightPresetOptions: 33,
              resizeWillRenderFooter: 34,
            },
            [-1, -1, -1]
          );
      }
      get name() {
        return this.$$.ctx[27];
      }
      get isActive() {
        return this.$$.ctx[0];
      }
      set isActive(t) {
        this.$set({ isActive: t }), hr();
      }
      get stores() {
        return this.$$.ctx[28];
      }
      set stores(t) {
        this.$set({ stores: t }), hr();
      }
      get locale() {
        return this.$$.ctx[1];
      }
      set locale(t) {
        this.$set({ locale: t }), hr();
      }
      get resizeMinSize() {
        return this.$$.ctx[29];
      }
      set resizeMinSize(t) {
        this.$set({ resizeMinSize: t }), hr();
      }
      get resizeMaxSize() {
        return this.$$.ctx[30];
      }
      set resizeMaxSize(t) {
        this.$set({ resizeMaxSize: t }), hr();
      }
      get resizeSizePresetOptions() {
        return this.$$.ctx[31];
      }
      set resizeSizePresetOptions(t) {
        this.$set({ resizeSizePresetOptions: t }), hr();
      }
      get resizeWidthPresetOptions() {
        return this.$$.ctx[32];
      }
      set resizeWidthPresetOptions(t) {
        this.$set({ resizeWidthPresetOptions: t }), hr();
      }
      get resizeHeightPresetOptions() {
        return this.$$.ctx[33];
      }
      set resizeHeightPresetOptions(t) {
        this.$set({ resizeHeightPresetOptions: t }), hr();
      }
      get resizeWillRenderFooter() {
        return this.$$.ctx[34];
      }
      set resizeWillRenderFooter(t) {
        this.$set({ resizeWillRenderFooter: t }), hr();
      }
    },
  ],
};
function H$(t) {
  let e, o;
  return (
    (e = new g$({
      props: {
        stores: t[3],
        locale: t[4],
        isActive: t[0],
        isActiveFraction: t[1],
        isVisible: t[2],
        mapScreenPointToImagePoint: t[14],
        mapImagePointToScreenPoint: t[15],
        enableZoomControls: t[5],
        enableZoom: t[6],
        enablePan: t[7],
        zoomOptions: t[9],
        zoomAdjustStep: t[10],
        zoomAdjustFactor: t[11],
        utilKey: "redact",
        imageRotation: t[16],
        imageFlipX: t[12],
        imageFlipY: t[13],
        shapes: t[17],
        toolbar: ["rect"],
        toolShapes: { rectangle: [{ x: 0, y: 0, width: 0, height: 0 }] },
        toolActive: "rectangle",
        parentRect: t[19],
        enablePresetDropImage: !1,
        enablePresetSelectImage: !1,
        willStartInteraction: t[8],
        hooks: { willRenderShapeControls: t[30] },
      },
    })),
    e.$on("measure", t[31]),
    {
      c() {
        Ir(e.$$.fragment);
      },
      m(t, i) {
        Lr(e, t, i), (o = !0);
      },
      p(t, o) {
        const i = {};
        8 & o[0] && (i.stores = t[3]),
          16 & o[0] && (i.locale = t[4]),
          1 & o[0] && (i.isActive = t[0]),
          2 & o[0] && (i.isActiveFraction = t[1]),
          4 & o[0] && (i.isVisible = t[2]),
          16384 & o[0] && (i.mapScreenPointToImagePoint = t[14]),
          32768 & o[0] && (i.mapImagePointToScreenPoint = t[15]),
          32 & o[0] && (i.enableZoomControls = t[5]),
          64 & o[0] && (i.enableZoom = t[6]),
          128 & o[0] && (i.enablePan = t[7]),
          512 & o[0] && (i.zoomOptions = t[9]),
          1024 & o[0] && (i.zoomAdjustStep = t[10]),
          2048 & o[0] && (i.zoomAdjustFactor = t[11]),
          65536 & o[0] && (i.imageRotation = t[16]),
          4096 & o[0] && (i.imageFlipX = t[12]),
          8192 & o[0] && (i.imageFlipY = t[13]),
          256 & o[0] && (i.willStartInteraction = t[8]),
          e.$set(i);
      },
      i(t) {
        o || (vr(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        wr(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        Fr(e, t);
      },
    }
  );
}
function U$(t, e, o) {
  let i, n, r, a, s, l, c, d, u;
  let { isActive: p } = e,
    { isActiveFraction: h } = e,
    { isVisible: m } = e,
    { stores: g } = e,
    { locale: f = {} } = e,
    { enableZoomControls: $ = !0 } = e,
    { enableZoom: y = !0 } = e,
    { enablePan: b = !0 } = e,
    { markupEditorWillStartInteraction: x } = e,
    { markupEditorZoomLevels: v } = e,
    { markupEditorZoomAdjustStep: w } = e,
    { markupEditorZoomAdjustFactor: S } = e;
  const {
    imageRedaction: k,
    rootRect: C,
    imageSize: M,
    imageRotation: T,
    imageFlipX: P,
    imageFlipY: R,
    imageTransforms: A,
    imageTransformsInterpolated: E,
  } = g;
  dn(t, C, (t) => o(26, (r = t))),
    dn(t, M, (t) => o(27, (a = t))),
    dn(t, T, (t) => o(16, (u = t))),
    dn(t, P, (t) => o(12, (c = t))),
    dn(t, R, (t) => o(13, (d = t))),
    dn(t, A, (t) => o(29, (l = t))),
    dn(t, E, (t) => o(28, (s = t)));
  return (
    (t.$$set = (t) => {
      "isActive" in t && o(0, (p = t.isActive)),
        "isActiveFraction" in t && o(1, (h = t.isActiveFraction)),
        "isVisible" in t && o(2, (m = t.isVisible)),
        "stores" in t && o(3, (g = t.stores)),
        "locale" in t && o(4, (f = t.locale)),
        "enableZoomControls" in t && o(5, ($ = t.enableZoomControls)),
        "enableZoom" in t && o(6, (y = t.enableZoom)),
        "enablePan" in t && o(7, (b = t.enablePan)),
        "markupEditorWillStartInteraction" in t &&
          o(8, (x = t.markupEditorWillStartInteraction)),
        "markupEditorZoomLevels" in t && o(9, (v = t.markupEditorZoomLevels)),
        "markupEditorZoomAdjustStep" in t &&
          o(10, (w = t.markupEditorZoomAdjustStep)),
        "markupEditorZoomAdjustFactor" in t &&
          o(11, (S = t.markupEditorZoomAdjustFactor));
    }),
    (t.$$.update = () => {
      1006645248 & t.$$.dirty[0] &&
        o(
          14,
          (i = (t) =>
            $$(t, r, a, s.origin, s.translation, l.rotation.z, s.scale, c, d))
        ),
        1006645248 & t.$$.dirty[0] &&
          o(
            15,
            (n = (t) =>
              f$(t, r, a, s.origin, s.translation, l.rotation.z, s.scale, c, d))
          );
    }),
    [
      p,
      h,
      m,
      g,
      f,
      $,
      y,
      b,
      x,
      v,
      w,
      S,
      c,
      d,
      i,
      n,
      u,
      k,
      C,
      M,
      T,
      P,
      R,
      A,
      E,
      "redact",
      r,
      a,
      s,
      l,
      (t) => {
        const e = ep(t[0]);
        return sp("to-front", e), t;
      },
      function (e) {
        tr(t, e);
      },
    ]
  );
}
var X$ = {
  util: [
    "redact",
    class extends Br {
      constructor(t) {
        super(),
          zr(
            this,
            t,
            U$,
            H$,
            sn,
            {
              name: 25,
              isActive: 0,
              isActiveFraction: 1,
              isVisible: 2,
              stores: 3,
              locale: 4,
              enableZoomControls: 5,
              enableZoom: 6,
              enablePan: 7,
              markupEditorWillStartInteraction: 8,
              markupEditorZoomLevels: 9,
              markupEditorZoomAdjustStep: 10,
              markupEditorZoomAdjustFactor: 11,
            },
            [-1, -1]
          );
      }
      get name() {
        return this.$$.ctx[25];
      }
      get isActive() {
        return this.$$.ctx[0];
      }
      set isActive(t) {
        this.$set({ isActive: t }), hr();
      }
      get isActiveFraction() {
        return this.$$.ctx[1];
      }
      set isActiveFraction(t) {
        this.$set({ isActiveFraction: t }), hr();
      }
      get isVisible() {
        return this.$$.ctx[2];
      }
      set isVisible(t) {
        this.$set({ isVisible: t }), hr();
      }
      get stores() {
        return this.$$.ctx[3];
      }
      set stores(t) {
        this.$set({ stores: t }), hr();
      }
      get locale() {
        return this.$$.ctx[4];
      }
      set locale(t) {
        this.$set({ locale: t }), hr();
      }
      get enableZoomControls() {
        return this.$$.ctx[5];
      }
      set enableZoomControls(t) {
        this.$set({ enableZoomControls: t }), hr();
      }
      get enableZoom() {
        return this.$$.ctx[6];
      }
      set enableZoom(t) {
        this.$set({ enableZoom: t }), hr();
      }
      get enablePan() {
        return this.$$.ctx[7];
      }
      set enablePan(t) {
        this.$set({ enablePan: t }), hr();
      }
      get markupEditorWillStartInteraction() {
        return this.$$.ctx[8];
      }
      set markupEditorWillStartInteraction(t) {
        this.$set({ markupEditorWillStartInteraction: t }), hr();
      }
      get markupEditorZoomLevels() {
        return this.$$.ctx[9];
      }
      set markupEditorZoomLevels(t) {
        this.$set({ markupEditorZoomLevels: t }), hr();
      }
      get markupEditorZoomAdjustStep() {
        return this.$$.ctx[10];
      }
      set markupEditorZoomAdjustStep(t) {
        this.$set({ markupEditorZoomAdjustStep: t }), hr();
      }
      get markupEditorZoomAdjustFactor() {
        return this.$$.ctx[11];
      }
      set markupEditorZoomAdjustFactor(t) {
        this.$set({ markupEditorZoomAdjustFactor: t }), hr();
      }
    },
  ],
};
const Y$ =
    '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em"><path d="M18 6L6 18M6 6l12 12"></path></path></g>',
  G$ =
    '<path fill="none" d="M9 15 L12 9 L15 15 M10 13.5 h3" stroke="currentColor" stroke-width=".125em"/>';
var q$ = {
  labelReset: "Reset",
  labelDefault: "Default",
  labelAuto: "Auto",
  labelNone: "None",
  labelEdit: "Edit",
  labelClose: "Close",
  labelSupportError: (t) => t.join(", ") + " not supported on this browser",
  labelColor: "Color",
  labelWidth: "Width",
  labelSize: "Size",
  labelOffset: "Offset",
  labelAmount: "Amount",
  labelInset: "Inset",
  labelRadius: "Radius",
  labelSizeExtraSmall: "Extra small",
  labelSizeSmall: "Small",
  labelSizeMediumSmall: "Medium small",
  labelSizeMedium: "Medium",
  labelSizeMediumLarge: "Medium large",
  labelSizeLarge: "Large",
  labelSizeExtraLarge: "Extra large",
  labelButtonCancel: "Cancel",
  labelButtonUndo: "Undo",
  labelButtonRedo: "Redo",
  labelButtonRevert: "Revert",
  labelButtonExport: "Done",
  labelZoomIn: "Zoom in",
  labelZoomOut: "Zoom out",
  labelZoomFit: "Fit to view",
  labelZoomActual: "Actual size",
  iconZoomIn:
    '<path stroke="currentColor" stroke-width=".125em" d="M8 12 h8 M12 8 v8" />',
  iconZoomOut:
    '<path stroke="currentColor" stroke-width=".125em" d="M9 12 h6" />',
  iconSupportError:
    '<g fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><g><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></g>',
  iconButtonClose: Y$,
  iconButtonRevert:
    '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em"><path d="M7.388 18.538a8 8 0 10-2.992-9.03"/><path fill="currentColor" d="M2.794 11.696L2.37 6.714l5.088 3.18z"/><path d="M12 8v4M12 12l4 2"/></g>',
  iconButtonUndo:
    '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em"><path d="M10 8h4c2.485 0 5 2 5 5s-2.515 5-5 5h-4"/><path fill="currentColor" d="M5 8l4-3v6z"/></g>',
  iconButtonRedo:
    '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em"><path d="M14 8h-4c-2.485 0-5 2-5 5s2.515 5 5 5h4"/><path fill="currentColor" d="M19 8l-4-3v6z"/></g>',
  iconButtonExport:
    '<polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" stroke-width=".125em"></polyline>',
  statusLabelButtonClose: "Close",
  statusIconButtonClose: Y$,
  statusLabelLoadImage: (t) =>
    t && t.task
      ? t.error
        ? "IMAGE_TOO_SMALL" === t.error.code
          ? "Minimum image size is {minWidth} Ã— {minHeight}"
          : "Error loading image"
        : "blob-to-bitmap" === t.task
        ? "Creating previewâ€¦"
        : "Loading imageâ€¦"
      : "Waiting for image",
  statusLabelProcessImage: (t) => {
    if (t && t.task)
      return "store" === t.task
        ? t.error
          ? "Error uploading image"
          : "Uploading imageâ€¦"
        : t.error
        ? "Error processing image"
        : "Processing imageâ€¦";
  },
};
const K$ = {
  shapeLabelButtonSelectSticker: "Select image",
  shapeIconButtonSelectSticker:
    '<g fill="none" stroke="currentColor" stroke-width="0.0625em"><path d="M8 21 L15 11 L19 15"/><path d="M15 2 v5 h5"/><path d="M8 2 h8 l4 4 v12 q0 4 -4 4 h-8 q-4 0 -4 -4 v-12 q0 -4 4 -4z"/></g><circle fill="currentColor" cx="10" cy="8" r="1.5"/>',
  shapeIconButtonFlipHorizontal:
    '<g stroke="currentColor" stroke-width=".125em"><path fill="none" d="M6 6.5h5v11H6z"/><path fill="currentColor" d="M15 6.5h3v11h-3z"/><path d="M11 4v16" fill="currentColor"/></g>',
  shapeIconButtonFlipVertical:
    '<g stroke="currentColor" stroke-width=".125em"><rect x="7" y="8" width="11" height="5" fill="none"/><rect x="7" y="17" width="11" height="2" fill="currentColor"/><line x1="5" y1="13" x2="20" y2="13"/></g>',
  shapeIconButtonRemove:
    '<g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M7.5 7h9z"/><path d="M7.916 9h8.168a1 1 0 01.99 1.14l-.972 6.862a2 2 0 01-1.473 1.653c-.877.23-1.753.345-2.629.345-.876 0-1.752-.115-2.628-.345a2 2 0 01-1.473-1.653l-.973-6.862A1 1 0 017.916 9z" fill="currentColor"/><rect fill="currentColor" x="10" y="5" width="4" height="3" rx="1"/></g>',
  shapeIconButtonDuplicate:
    '<g fill="none" fill-rule="evenodd"><path d="M15 13.994V16a2 2 0 01-2 2H8a2 2 0 01-2-2v-5a2 2 0 012-2h2.142" stroke="currentColor" stroke-width=".125em"/><path d="M15 9V8a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1zm-4-4h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2V7a2 2 0 012-2z" fill="currentColor"/></g>',
  shapeIconButtonMoveToFront:
    '<g fill="none" fill-rule="evenodd"><rect fill="currentColor" x="11" y="13" width="8" height="2" rx="1"/><rect fill="currentColor" x="9" y="17" width="10" height="2" rx="1"/><path d="M11.364 8H10a5 5 0 000 10M12 6.5L14.5 8 12 9.5z" stroke="currentColor" stroke-width=".125em" stroke-linecap="round"/></g>',
  shapeIconButtonTextLayoutAutoWidth: "" + G$,
  shapeIconButtonTextLayoutAutoHeight:
    '<g fill="currentColor"><circle cx="4" cy="12" r="1.5"/><circle cx="20" cy="12" r="1.5"/></g>' +
    G$,
  shapeIconButtonTextLayoutFixedSize:
    '<g fill="currentColor"><circle cx="5" cy="6" r="1.5"/><circle cx="19" cy="6" r="1.5"/><circle cx="19" cy="19" r="1.5"/><circle cx="5" cy="19" r="1.5"/></g>' +
    G$,
  shapeTitleButtonTextLayoutAutoWidth: "Auto width",
  shapeTitleButtonTextLayoutAutoHeight: "Auto height",
  shapeTitleButtonTextLayoutFixedSize: "Fixed size",
  shapeTitleButtonFlipHorizontal: "Flip Horizontal",
  shapeTitleButtonFlipVertical: "Flip Vertical",
  shapeTitleButtonRemove: "Remove",
  shapeTitleButtonDuplicate: "Duplicate",
  shapeTitleButtonMoveToFront: "Move to front",
  shapeLabelInputText: "Edit text",
  shapeIconInputCancel:
    '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em"><path d="M18 6L6 18M6 6l12 12"/></g>',
  shapeIconInputConfirm:
    '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em"><polyline points="20 6 9 17 4 12"/></g>',
  shapeLabelInputCancel: "Cancel",
  shapeLabelInputConfirm: "Confirm",
  shapeLabelStrokeNone: "No outline",
  shapeLabelFontStyleNormal: "Normal",
  shapeLabelFontStyleBold: "Bold",
  shapeLabelFontStyleItalic: "Italic",
  shapeLabelFontStyleItalicBold: "Bold Italic",
  shapeTitleBackgroundColor: "Fill color",
  shapeTitleFontFamily: "Font",
  shapeTitleFontSize: "Font size",
  shapeTitleFontStyle: "Font style",
  shapeTitleLineHeight: "Line height",
  shapeTitleLineStart: "Start",
  shapeTitleLineEnd: "End",
  shapeTitleStrokeWidth: "Line width",
  shapeTitleStrokeColor: "Line color",
  shapeTitleLineDecorationBar: "Bar",
  shapeTitleLineDecorationCircle: "Circle",
  shapeTitleLineDecorationSquare: "Square",
  shapeTitleLineDecorationArrow: "Arrow",
  shapeTitleLineDecorationCircleSolid: "Circle solid",
  shapeTitleLineDecorationSquareSolid: "Square solid",
  shapeTitleLineDecorationArrowSolid: "Arrow solid",
  shapeIconLineDecorationBar:
    '<g stroke="currentColor" stroke-linecap="round" stroke-width=".125em"><path d="M5,12 H16"/><path d="M16,8 V16"/></g>',
  shapeIconLineDecorationCircle:
    '<g stroke="currentColor" stroke-linecap="round"><path stroke-width=".125em" d="M5,12 H12"/><circle fill="none" stroke-width=".125em" cx="16" cy="12" r="4"/></g>',
  shapeIconLineDecorationSquare:
    '<g stroke="currentColor" stroke-linecap="round"><path stroke-width=".125em" d="M5,12 H12"/><rect fill="none" stroke-width=".125em" x="12" y="8" width="8" height="8"/></g>',
  shapeIconLineDecorationArrow:
    '<g stroke="currentColor" stroke-linecap="round" stroke-width=".125em"><path d="M5,12 H16 M13,7 l6,5 l-6,5" fill="none"/></g>',
  shapeIconLineDecorationCircleSolid:
    '<g stroke="currentColor" stroke-linecap="round"><path stroke-width=".125em" d="M5,12 H12"/><circle fill="currentColor" cx="16" cy="12" r="4"/></g>',
  shapeIconLineDecorationSquareSolid:
    '<g stroke="currentColor" stroke-linecap="round"><path stroke-width=".125em" d="M5,12 H12"/><rect fill="currentColor" x="12" y="8" width="8" height="8"/></g>',
  shapeIconLineDecorationArrowSolid:
    '<g stroke="currentColor" stroke-linecap="round" stroke-width=".125em"><path d="M5,12 H16"/><path d="M13,7 l6,5 l-6,5z" fill="currentColor"/></g>',
  shapeTitleColorTransparent: "Transparent",
  shapeTitleColorWhite: "White",
  shapeTitleColorSilver: "Silver",
  shapeTitleColorGray: "Gray",
  shapeTitleColorBlack: "Black",
  shapeTitleColorNavy: "Navy",
  shapeTitleColorBlue: "Blue",
  shapeTitleColorAqua: "Aqua",
  shapeTitleColorTeal: "Teal",
  shapeTitleColorOlive: "Olive",
  shapeTitleColorGreen: "Green",
  shapeTitleColorYellow: "Yellow",
  shapeTitleColorOrange: "Orange",
  shapeTitleColorRed: "Red",
  shapeTitleColorMaroon: "Maroon",
  shapeTitleColorFuchsia: "Fuchsia",
  shapeTitleColorPurple: "Purple",
  shapeTitleTextColor: "Font color",
  shapeTitleTextAlign: "Text align",
  shapeTitleTextAlignLeft: "Left align text",
  shapeTitleTextAlignCenter: "Center align text",
  shapeTitleTextAlignRight: "Right align text",
  shapeIconTextAlignLeft:
    '<g stroke-width=".125em" stroke="currentColor"><line x1="5" y1="8" x2="15" y2="8"/><line x1="5" y1="12" x2="19" y2="12"/><line x1="5" y1="16" x2="14" y2="16"/></g>',
  shapeIconTextAlignCenter:
    '<g stroke-width=".125em" stroke="currentColor"><line x1="7" y1="8" x2="17" y2="8"/><line x1="5" y1="12" x2="19" y2="12"/><line x1="8" y1="16" x2="16" y2="16"/></g>',
  shapeIconTextAlignRight:
    '<g stroke-width=".125em" stroke="currentColor"><line x1="9" y1="8" x2="19" y2="8"/><line x1="5" y1="12" x2="19" y2="12"/><line x1="11" y1="16" x2="19" y2="16"/></g>',
  shapeLabelToolSharpie: "Sharpie",
  shapeLabelToolEraser: "Eraser",
  shapeLabelToolRectangle: "Rectangle",
  shapeLabelToolEllipse: "Ellipse",
  shapeLabelToolArrow: "Arrow",
  shapeLabelToolLine: "Line",
  shapeLabelToolText: "Text",
  shapeLabelToolPreset: "Stickers",
  shapeIconToolSharpie:
    '<g stroke-width=".125em" stroke="currentColor" fill="none"><path d="M2.025 5c5.616-2.732 8.833-3.857 9.65-3.374C12.903 2.351.518 12.666 2.026 14 3.534 15.334 16.536.566 17.73 2.566 18.924 4.566 3.98 17.187 4.831 18c.851.813 9.848-6 11.643-6 1.087 0-2.53 5.11-2.92 7-.086.41 3.323-1.498 4.773-1 .494.17.64 2.317 1.319 3 .439.443 1.332.776 2.679 1" stroke="currentColor" stroke-width=".125em" fill="none" fill-rule="evenodd" stroke-linejoin="round"/></g>',
  shapeIconToolEraser:
    '<g stroke-width=".125em" stroke="currentColor" stroke-linecap="round" fill="none"><g transform="translate(3, 15) rotate(-45)"><rect x="0" y="0" width="18" height="10" rx="3"/></g><line x1="11" y1="21" x2="18" y2="21"/><line x1="20" y1="21" x2="22" y2="21"/></g>',
  shapeIconToolRectangle:
    '<g stroke-width=".125em" stroke="currentColor" fill="none"><rect x="2" y="2" width="20" height="20" rx="3"/></g>',
  shapeIconToolEllipse:
    '<g stroke-width=".125em" stroke="currentColor" fill="none"><circle cx="12" cy="12" r="11"/></g>',
  shapeIconToolArrow:
    '<g stroke-width=".125em" stroke="currentColor" fill="none"><line x1="20" y1="3" x2="6" y2="21"/><path d="m10 5 L22 1 L21 13" fill="currentColor" stroke="none"/></g>',
  shapeIconToolLine:
    '<g stroke-width=".125em" stroke="currentColor" fill="none"><line x1="20" y1="3" x2="6" y2="21"/></g>',
  shapeIconToolText:
    '<g stroke="none" fill="currentColor" transform="translate(6,0)"><path d="M8.14 20.085c.459 0 .901-.034 1.329-.102a8.597 8.597 0 001.015-.21v1.984c-.281.135-.695.247-1.242.336a9.328 9.328 0 01-1.477.133c-3.312 0-4.968-1.745-4.968-5.235V6.804H.344v-1.25l2.453-1.078L3.89.819h1.5v3.97h4.97v2.015H5.39v10.078c0 1.031.245 1.823.735 2.375s1.161.828 2.015.828z"/>',
  shapeIconToolPreset:
    '<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em"><path d="M12 22c2.773 0 1.189-5.177 3-7 1.796-1.808 7-.25 7-3 0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10z"></path><path d="M20 17c-3 3-5 5-8 5"></path></g>',
};
var J$ = {
    cropLabel: "Crop",
    cropIcon:
      '<g stroke-width=".125em" stroke="currentColor" fill="none"><path d="M23 17H9a2 2 0 0 1-2-2v-5m0-3V1 M1 7h14a2 2 0 0 1 2 2v7m0 4v3"/></g>',
    cropIconButtonRecenter:
      '<path stroke="currentColor" fill="none" stroke-width="2" stroke-linejoin="bevel" d="M1.5 7.5v-6h6M1.5 16.5v6h6M22.5 16.5v6h-6M22.5 7.5v-6h-6"/><circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none"/>',
    cropIconButtonRotateLeft:
      '<g stroke="none" fill="currentColor"><path fill="none" d="M-1-1h582v402H-1z"/><rect x="3" rx="1" height="12" width="12" y="9"/><path d="M15 5h-1a5 5 0 015 5 1 1 0 002 0 7 7 0 00-7-7h-1.374l.747-.747A1 1 0 0011.958.84L9.603 3.194a1 1 0 000 1.415l2.355 2.355a1 1 0 001.415-1.414l-.55-.55H15z"/></g>',
    cropIconButtonRotateRight:
      '<g stroke="none" fill="currentColor"><path fill="none" d="M-1-1h582v402H-1z"/><path d="M11.177 5H10a5 5 0 00-5 5 1 1 0 01-2 0 7 7 0 017-7h1.374l-.747-.747A1 1 0 0112.042.84l2.355 2.355a1 1 0 010 1.415l-2.355 2.354a1 1 0 01-1.415-1.414l.55-.55z"/><rect rx="1" height="12" width="12" y="9" x="9"/></g>',
    cropIconButtonFlipVertical:
      '<g stroke="none" fill="currentColor"><path d="M19.993 12.143H7a1 1 0 0 1-1-1V5.994a1 1 0 0 1 1.368-.93l12.993 5.15a1 1 0 0 1-.368 1.93z"/><path d="M19.993 14a1 1 0 0 1 .368 1.93L7.368 21.078A1 1 0 0 1 6 20.148V15a1 1 0 0 1 1-1h12.993z" opacity=".6"/></g>',
    cropIconButtonFlipHorizontal:
      '<g stroke="none" fill="currentColor"><path d="M11.93 7.007V20a1 1 0 0 1-1 1H5.78a1 1 0 0 1-.93-1.368l5.15-12.993a1 1 0 0 1 1.929.368z"/><path d="M14 7.007V20a1 1 0 0 0 1 1h5.149a1 1 0 0 0 .93-1.368l-5.15-12.993A1 1 0 0 0 14 7.007z" opacity=".6"/></g>',
    cropIconSelectPreset: (t, e) => {
      const [o, i, n] = e
        ? [e < 1 ? 1 : 0.3, 1 === e ? 0.85 : 0.5, e > 1 ? 1 : 0.3]
        : [0.2, 0.3, 0.4];
      return `<g fill="currentColor">\n            <rect opacity="${o}" x="2" y="4" width="10" height="18" rx="1"/>\n            <rect opacity="${i}" x="4" y="8" width="14" height="14" rx="1"/>\n            <rect opacity="${n}" x="6" y="12" width="17" height="10" rx="1"/>\n        </g>`;
    },
    cropIconCropBoundary: (t, e) => {
      const [o, i, n, r] = e ? [0.3, 1, 0, 0] : [0, 0, 0.3, 1];
      return `<g fill="currentColor">\n            <rect opacity="${o}" x="2" y="3" width="20" height="20" rx="1"/>\n            <rect opacity="${i}" x="7" y="8" width="10" height="10" rx="1"/>\n            <rect opacity="${n}" x="4" y="8" width="14" height="14" rx="1"/>\n            <rect opacity="${r}" x="12" y="4" width="10" height="10" rx="1"/>\n        </g>`;
    },
    cropLabelButtonRecenter: "Recenter",
    cropLabelButtonRotateLeft: "Rotate left",
    cropLabelButtonRotateRight: "Rotate right",
    cropLabelButtonFlipHorizontal: "Flip horizontal",
    cropLabelButtonFlipVertical: "Flip vertical",
    cropLabelSelectPreset: "Crop shape",
    cropLabelCropBoundary: "Crop boundary",
    cropLabelCropBoundaryEdge: "Edge of image",
    cropLabelCropBoundaryNone: "None",
    cropLabelTabRotation: "Rotation",
    cropLabelTabZoom: "Zoom",
  },
  Q$ = {
    frameLabel: "Frame",
    frameIcon:
      '<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em">\n            <rect x="2" y="2" width="20" height="20" rx="4"/>\n            <rect x="6" y="6" width="12" height="12" rx="1"/>\n        </g>',
    frameLabelMatSharp: "Mat",
    frameLabelMatRound: "Bevel",
    frameLabelLineSingle: "Line",
    frameLabelLineMultiple: "Zebra",
    frameLabelEdgeSeparate: "Inset",
    frameLabelEdgeOverlap: "Plus",
    frameLabelEdgeCross: "Lumber",
    frameLabelCornerHooks: "Hook",
    frameLabelPolaroid: "Polaroid",
  },
  ty = {
    redactLabel: "Redact",
    redactIcon:
      '<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em">\n        <path d="M 4 5 l 1 -1"/>\n        <path d="M 4 10 l 6 -6"/>\n        <path d="M 4 15 l 11 -11"/>\n        <path d="M 4 20 l 16 -16"/>\n        <path d="M 9 20 l 11 -11"/>\n        <path d="M 14 20 l 6 -6"/>\n        <path d="M 19 20 l 1 -1"/>\n    </g>',
  },
  ey = (t, e) => {
    const o = Object.getOwnPropertyDescriptors(t);
    Object.keys(o).forEach((i) => {
      o[i].get
        ? Object.defineProperty(e, i, {
            get: () => t[i],
            set: (e) => (t[i] = e),
          })
        : (e[i] = t[i]);
    });
  },
  oy = (t) => {
    const e = {},
      { sub: o, pub: i } = ho();
    (c() && null !== document.doctype) ||
      console.warn(
        "Browser is in quirks mode, add <!DOCTYPE html> to page to fix render issues"
      );
    const r = wa();
    ey(r, e);
    const a = ((t, e) => {
      const o = {},
        i = new Zu({
          target: t,
          props: { stores: e, pluginComponents: Array.from(Xu) },
        });
      let n = !1;
      const r = () => {
        n ||
          (c() && window.removeEventListener("pagehide", r),
          i && ((n = !0), i.$destroy()));
      };
      Nu || (Nu = new Set(Rl(Zu).filter((t) => !ju.includes(t)))),
        Nu.forEach((t) => {
          Object.defineProperty(o, t, {
            get: () => i[t],
            set: (e) => (i[t] = e),
          });
        }),
        Object.defineProperty(o, "previewImageData", {
          get: () => i.imagePreviewCurrent,
        }),
        Hu.forEach((t) => {
          const e = Uu[t],
            n = e[0];
          Object.defineProperty(o, t, {
            get: () => i.pluginInterface[n][t],
            set: (o) => {
              const n = e.reduce(
                (e, n) => ((e[n] = { ...i.pluginOptions[n], [t]: o }), e),
                {}
              );
              i.pluginOptions = { ...i.pluginOptions, ...n };
            },
          });
        }),
        Object.defineProperty(o, "element", {
          get: () => i.root,
          set: () => {},
        });
      const a = i.history;
      return (
        qr(o, {
          on: (t, e) => {
            if (n) return () => {};
            if (/undo|redo|revert/.test(t)) return a.on(t, e);
            const o = [
              i.sub(t, e),
              i.$on(t, (t) =>
                e(t instanceof CustomEvent && !t.detail ? void 0 : t)
              ),
            ].filter(Boolean);
            return () => o.forEach((t) => t());
          },
          updateImagePreview: (t) => {
            i.imagePreviewSrc = t;
          },
          close: () => !n && i.pub("close"),
          destroy: r,
        }),
        Object.defineProperty(o, "history", {
          get: () => ({
            undo: () => a.undo(),
            redo: () => a.redo(),
            revert: () => a.revert(),
            get: () => a.get(),
            getCollapsed: () => a.get().splice(0, a.index + 1),
            set: (t) => a.set(t),
            write: (t) => a.write(t),
            get length() {
              return a.length();
            },
            get index() {
              return a.index;
            },
          }),
        }),
        c() && window.addEventListener("pagehide", r),
        o
      );
    })(t, r.stores);
    ey(a, e);
    const s = [
        "loadImage",
        "processImage",
        "abortProcessImage",
        "abortLoadImage",
      ].map((t) =>
        a.on(t, (e) => {
          const o = r[t](e && e.detail);
          o instanceof Promise && o.catch(n);
        })
      ),
      l = (t, e) => {
        const i = o(t, e),
          n = r.on(t, e),
          s = a.on(t, e);
        return () => {
          i(), n(), s();
        };
      };
    e.handleEvent = n;
    const d = Gu.map((t) => l(t, (o) => e.handleEvent(t, o)));
    return (
      qr(e, {
        on: l,
        updateImage: (t) =>
          new Promise((o, i) => {
            const n = e.history.get(),
              a = e.imageState;
            r.loadImage(t)
              .then((t) => {
                e.history.set(n), (e.imageState = a), o(t);
              })
              .catch(i);
          }),
        close: () => {
          i("close");
        },
        destroy: () => {
          [...s, ...d].forEach((t) => t()),
            a.destroy(),
            r.destroy(),
            i("destroy");
        },
      }),
      setTimeout(() => i("init", e), 0),
      e
    );
  };
var iy = (t, e = {}) => {
  const o = w(t) ? document.querySelector(t) : t;
  if (!ue(o)) return;
  e.class = e.class ? "pintura-editor " + e.class : "pintura-editor";
  const i = oy(o);
  return Object.assign(i, e);
};
const { document: ny, window: ry } = Cr;
function ay(t) {
  let e, o, i, n;
  return (
    cr(t[27]),
    {
      c() {
        (e = An()), (o = Tn("div")), zn(o, "class", t[5]), zn(o, "style", t[4]);
      },
      m(r, a) {
        Cn(r, e, a),
          Cn(r, o, a),
          t[28](o),
          i ||
            ((n = [
              In(ry, "keydown", t[10]),
              In(ry, "orientationchange", t[11]),
              In(ry, "resize", t[27]),
              In(ny.body, "focusin", function () {
                an(!t[1] && t[7]) && (!t[1] && t[7]).apply(this, arguments);
              }),
              In(ny.body, "focusout", function () {
                an(t[2] && t[8]) && (t[2] && t[8]).apply(this, arguments);
              }),
              In(o, "wheel", t[9], { passive: !1 }),
            ]),
            (i = !0));
      },
      p(e, i) {
        (t = e),
          32 & i[0] && zn(o, "class", t[5]),
          16 & i[0] && zn(o, "style", t[4]);
      },
      i: Qi,
      o: Qi,
      d(r) {
        r && Mn(e), r && Mn(o), t[28](null), (i = !1), rn(n);
      },
    }
  );
}
function sy(t, e, o) {
  let i, n, r, a, s, l, d, u;
  const p = Kn();
  let { root: m } = e,
    { preventZoomViewport: g = !0 } = e,
    { preventScrollBodyIfNeeded: f = !0 } = e,
    { preventFooterOverlapIfNeeded: $ = !0 } = e,
    { class: y } = e,
    b = !0,
    x = !1,
    v = !1,
    w = c() && document.documentElement,
    S = c() && document.body,
    k = c() && document.head;
  const C = ss(0, { precision: 0.001, damping: 0.5 });
  dn(t, C, (t) => o(23, (u = t)));
  const M = C.subscribe((t) => {
    v && t >= 1
      ? (o(19, (v = !1)), o(1, (b = !1)), p("show"))
      : x && t <= 0 && (o(18, (x = !1)), o(1, (b = !0)), p("hide"));
  });
  let T = !1,
    P = void 0,
    R = void 0,
    A = void 0;
  const E = () => document.querySelector("meta[name=viewport]"),
    I = () => Array.from(document.querySelectorAll("meta[name=theme-color]"));
  let L;
  const F = (t, e) => {
    const o = () => {
      t() ? e() : requestAnimationFrame(o);
    };
    requestAnimationFrame(o);
  };
  let z,
    B,
    O = 0,
    D = void 0;
  const W = () => {
    B ||
      ((B = h("div", { style: "position:fixed;height:100vh;top:0" })),
      S.append(B));
  };
  Yn(() => {
    $ && ze() && W();
  }),
    Gn(() => {
      B && (o(21, (D = B.offsetHeight)), B.remove(), (B = void 0));
    });
  let _ = void 0;
  const Z = () =>
    w.style.setProperty("--pintura-document-height", window.innerHeight + "px");
  return (
    qn(() => {
      w.classList.remove("PinturaModalBodyLock"), M();
    }),
    (t.$$set = (t) => {
      "root" in t && o(0, (m = t.root)),
        "preventZoomViewport" in t && o(12, (g = t.preventZoomViewport)),
        "preventScrollBodyIfNeeded" in t &&
          o(13, (f = t.preventScrollBodyIfNeeded)),
        "preventFooterOverlapIfNeeded" in t &&
          o(14, ($ = t.preventFooterOverlapIfNeeded)),
        "class" in t && o(15, (y = t.class));
    }),
    (t.$$.update = () => {
      9175042 & t.$$.dirty[0] && o(22, (i = v || x ? u : b ? 0 : 1)),
        4096 & t.$$.dirty[0] &&
          (n =
            "width=device-width,height=device-height,initial-scale=1" +
            (g ? ",maximum-scale=1,user-scalable=0" : "")),
        786434 & t.$$.dirty[0] && o(24, (r = !v && !b && !x)),
        12 & t.$$.dirty[0] && (T || o(20, (z = O))),
        2097160 & t.$$.dirty[0] &&
          o(25, (a = qe(D) ? "--viewport-pad-footer:" + (D > O ? 0 : 1) : "")),
        38797312 & t.$$.dirty[0] &&
          o(4, (s = `opacity:${i};height:${z}px;--editor-modal:1;${a}`)),
        32768 & t.$$.dirty[0] &&
          o(5, (l = ll(["pintura-editor", "PinturaModal", y]))),
        8192 & t.$$.dirty[0] &&
          o(26, (d = f && ze() && /15_/.test(navigator.userAgent))),
        83886080 & t.$$.dirty[0] &&
          d &&
          ((t) => {
            t
              ? ((_ = window.scrollY),
                w.classList.add("PinturaDocumentLock"),
                Z(),
                window.addEventListener("resize", Z))
              : (window.removeEventListener("resize", Z),
                w.classList.remove("PinturaDocumentLock"),
                qe(_) && window.scrollTo(0, _),
                (_ = void 0));
          })(r);
    }),
    [
      m,
      b,
      T,
      O,
      s,
      l,
      C,
      (t) => {
        ou(t.target) && (o(2, (T = !0)), (L = O));
      },
      (t) => {
        if (ou(t.target))
          if ((clearTimeout(undefined), L === O)) o(2, (T = !1));
          else {
            const t = O;
            F(
              () => O !== t,
              () => o(2, (T = !1))
            );
          }
      },
      (t) => {
        t.target &&
          /PinturaStage/.test(t.target.className) &&
          t.preventDefault();
      },
      (t) => {
        const { key: e } = t;
        if (!/escape/i.test(e)) return;
        const o = t.target;
        if (o && /input|textarea/i.test(o.nodeName)) return;
        const i = document.querySelectorAll(".PinturaModal");
        i[i.length - 1] === m && p("close");
      },
      W,
      g,
      f,
      $,
      y,
      () => {
        if (v || !b) return;
        o(19, (v = !0));
        const t = E() || h("meta", { name: "viewport" });
        (P = !P && t.getAttribute("content")),
          t.setAttribute(
            "content",
            n + (/cover/.test(P) ? ",viewport-fit=cover" : "")
          ),
          t.parentNode || k.append(t);
        const e = getComputedStyle(m).getPropertyValue("--color-background"),
          i = I();
        if (i.length) R = i.map((t) => t.getAttribute("content"));
        else {
          const t = h("meta", { name: "theme-color" });
          k.append(t), i.push(t);
        }
        i.forEach((t) => t.setAttribute("content", `rgb(${e})`)),
          clearTimeout(A),
          (A = setTimeout(() => C.set(1), 250));
      },
      () => {
        if (x || b) return;
        clearTimeout(A), o(18, (x = !0));
        const t = E();
        P ? t.setAttribute("content", P) : t.remove();
        const e = I();
        R
          ? e.forEach((t, e) => {
              t.setAttribute("content", R[e]);
            })
          : e.forEach((t) => t.remove()),
          C.set(0);
      },
      x,
      v,
      z,
      D,
      i,
      u,
      r,
      a,
      d,
      function () {
        o(3, (O = ry.innerHeight));
      },
      function (t) {
        or[t ? "unshift" : "push"](() => {
          (m = t), o(0, m);
        });
      },
    ]
  );
}
class ly extends Br {
  constructor(t) {
    super(),
      zr(
        this,
        t,
        sy,
        ay,
        sn,
        {
          root: 0,
          preventZoomViewport: 12,
          preventScrollBodyIfNeeded: 13,
          preventFooterOverlapIfNeeded: 14,
          class: 15,
          show: 16,
          hide: 17,
        },
        [-1, -1]
      );
  }
  get root() {
    return this.$$.ctx[0];
  }
  set root(t) {
    this.$set({ root: t }), hr();
  }
  get preventZoomViewport() {
    return this.$$.ctx[12];
  }
  set preventZoomViewport(t) {
    this.$set({ preventZoomViewport: t }), hr();
  }
  get preventScrollBodyIfNeeded() {
    return this.$$.ctx[13];
  }
  set preventScrollBodyIfNeeded(t) {
    this.$set({ preventScrollBodyIfNeeded: t }), hr();
  }
  get preventFooterOverlapIfNeeded() {
    return this.$$.ctx[14];
  }
  set preventFooterOverlapIfNeeded(t) {
    this.$set({ preventFooterOverlapIfNeeded: t }), hr();
  }
  get class() {
    return this.$$.ctx[15];
  }
  set class(t) {
    this.$set({ class: t }), hr();
  }
  get show() {
    return this.$$.ctx[16];
  }
  get hide() {
    return this.$$.ctx[17];
  }
}
const cy = (t, e, o, i) => {
    const n = X(e.x - t.x, e.y - t.y),
      r = tt(n),
      a = 5 * o;
    let s;
    s = i ? 0.5 * a : Math.ceil(0.5 * (a - 1));
    const l = at(q(r), s);
    return {
      anchor: q(t),
      offset: l,
      normal: r,
      solid: i,
      size: a,
      sizeHalf: s,
    };
  },
  dy = (
    {
      anchor: t,
      solid: e,
      normal: o,
      offset: i,
      size: n,
      sizeHalf: r,
      strokeWidth: a,
      strokeColor: s,
    },
    l
  ) => {
    const c = t.x,
      d = t.y,
      u = at(q(o), n),
      p = X(c + u.x, d + u.y);
    if ((at(u, 0.55), e)) {
      nt(l, i);
      const t = at(q(o), 0.5 * r);
      return [
        {
          points: [
            X(c - t.x, d - t.y),
            X(p.x - u.y, p.y + u.x),
            X(p.x + u.y, p.y - u.x),
          ],
          backgroundColor: s,
        },
      ];
    }
    {
      const t = at(
          ((t) => {
            const e = t.x;
            return (t.x = -t.y), (t.y = e), t;
          })(q(o)),
          0.5
        ),
        e = X(c - t.x, d - t.y),
        i = X(c + t.x, d + t.y);
      return [
        {
          points: [
            X(p.x + u.y, p.y - u.x),
            e,
            X(c, d),
            i,
            X(p.x - u.y, p.y + u.x),
          ],
          strokeWidth: a,
          strokeColor: s,
        },
      ];
    }
  },
  uy = (
    {
      anchor: t,
      solid: e,
      offset: o,
      normal: i,
      sizeHalf: n,
      strokeWidth: r,
      strokeColor: a,
    },
    s
  ) => (
    nt(s, o),
    e && nt(s, K(q(i))),
    [
      {
        x: t.x,
        y: t.y,
        rx: n,
        ry: n,
        backgroundColor: e ? a : void 0,
        strokeWidth: e ? void 0 : r,
        strokeColor: e ? void 0 : a,
      },
    ]
  ),
  py = ({ anchor: t, offset: e, strokeWidth: o, strokeColor: i }) => [
    {
      points: [X(t.x - e.y, t.y + e.x), X(t.x + e.y, t.y - e.x)],
      strokeWidth: o,
      strokeColor: i,
    },
  ],
  hy = (
    {
      anchor: t,
      solid: e,
      offset: o,
      normal: i,
      sizeHalf: n,
      strokeWidth: r,
      strokeColor: a,
    },
    s
  ) => {
    return (
      nt(s, o),
      [
        {
          x: t.x - n,
          y: t.y - n,
          width: 2 * n,
          height: 2 * n,
          rotation: ((l = i), Math.atan2(l.y, l.x)),
          backgroundColor: e ? a : void 0,
          strokeWidth: e ? void 0 : r,
          strokeColor: e ? void 0 : a,
        },
      ]
    );
    var l;
  },
  my =
    (t = {}) =>
    (e) => {
      if (!Je(e, "lineStart") && !Je(e, "lineEnd")) return;
      const o = [],
        { lineStart: i, lineEnd: n, strokeWidth: r, strokeColor: a } = e,
        s = X(e.x1, e.y1),
        l = X(e.x2, e.y2),
        c = [s, l];
      if (i) {
        const [e, n] = i.split("-"),
          c = t[e];
        if (c) {
          const t = cy(s, l, r, !!n);
          o.push(...c({ ...t, strokeColor: a, strokeWidth: r }, s));
        }
      }
      if (n) {
        const [e, i] = n.split("-"),
          c = t[e];
        if (c) {
          const t = cy(l, s, r, !!i);
          o.push(...c({ ...t, strokeColor: a, strokeWidth: r }, l));
        }
      }
      return [{ points: c, strokeWidth: r, strokeColor: a }, ...o];
    },
  gy = () => ({ arrow: dy, circle: uy, square: hy, bar: py }),
  fy = (t, e) => {
    const o = parseFloat(t) * e;
    return w(t) ? o + "%" : o;
  },
  $y = (t, e) => (w(t) ? bi(t, e) : t),
  yy = (t) => [
    {
      ...t,
      frameStyle: "line",
      frameInset: 0,
      frameOffset: 0,
      frameSize: t.frameSize ? fy(t.frameSize, 2) : "2.5%",
      frameRadius: t.frameRound ? fy(t.frameSize, 2) : 0,
    },
  ],
  by = (
    {
      width: t,
      height: e,
      frameImage: o,
      frameSize: i = "15%",
      frameSlices: n = { x1: 0.15, y1: 0.15, x2: 0.85, y2: 0.85 },
    },
    { isPreview: r }
  ) => {
    if (!o) return [];
    const a = Math.sqrt(t * e),
      s = $y(i, a),
      l = r ? s : Math.round(s),
      c = l,
      { x1: d, x2: u, y1: p, y2: h } = n,
      m = {
        x0: 0,
        y0: 0,
        x1: l,
        y1: c,
        x2: t - l,
        y2: e - c,
        x3: t,
        y3: e,
        cw: l,
        ch: c,
        ew: t - l - l,
        eh: e - c - c,
      },
      g = r ? 1 : 0,
      f = 2 * g,
      $ = { width: m.cw, height: m.ch, backgroundImage: o };
    return [
      {
        x: m.x1 - g,
        y: m.y0,
        width: m.ew + f,
        height: m.ch,
        backgroundCorners: [
          { x: d, y: 0 },
          { x: u, y: 0 },
          { x: u, y: p },
          { x: d, y: p },
        ],
        backgroundImage: o,
      },
      {
        x: m.x1 - g,
        y: m.y2,
        width: m.ew + f,
        height: m.ch,
        backgroundCorners: [
          { x: d, y: h },
          { x: u, y: h },
          { x: u, y: 1 },
          { x: d, y: 1 },
        ],
        backgroundImage: o,
      },
      {
        x: m.x0,
        y: m.y1 - g,
        width: m.cw,
        height: m.eh + f,
        backgroundCorners: [
          { x: 0, y: p },
          { x: d, y: p },
          { x: d, y: h },
          { x: 0, y: h },
        ],
        backgroundImage: o,
      },
      {
        x: m.x2,
        y: m.y1 - g,
        width: m.cw,
        height: m.eh + f,
        backgroundCorners: [
          { x: u, y: p },
          { x: 1, y: p },
          { x: 1, y: h },
          { x: u, y: h },
        ],
        backgroundImage: o,
      },
      {
        ...$,
        x: m.x0,
        y: m.y0,
        backgroundCorners: [
          { x: 0, y: 0 },
          { x: d, y: 0 },
          { x: d, y: p },
          { x: 0, y: p },
        ],
      },
      {
        ...$,
        x: m.x2,
        y: m.y0,
        backgroundCorners: [
          { x: u, y: 0 },
          { x: 1, y: 0 },
          { x: 1, y: p },
          { x: u, y: p },
        ],
      },
      {
        ...$,
        x: m.x2,
        y: m.y2,
        backgroundCorners: [
          { x: u, y: h },
          { x: 1, y: h },
          { x: 1, y: 1 },
          { x: u, y: 1 },
        ],
      },
      {
        ...$,
        x: m.x0,
        y: m.y2,
        backgroundCorners: [
          { x: 0, y: h },
          { x: d, y: h },
          { x: d, y: 1 },
          { x: 0, y: 1 },
        ],
      },
    ];
  },
  xy = (
    {
      x: t,
      y: e,
      width: o,
      height: i,
      frameInset: n = "3.5%",
      frameSize: r = ".25%",
      frameColor: a = [1, 1, 1],
      frameOffset: s = "5%",
      frameAmount: l = 1,
      frameRadius: c = 0,
      expandsCanvas: d = !1,
    },
    { isPreview: u }
  ) => {
    const p = Math.sqrt(o * i);
    let h = $y(r, p);
    const m = $y(n, p),
      g = $y(s, p);
    let f = 0;
    u || ((h = Math.max(1, Math.round(h))), (f = h % 2 == 0 ? 0 : 0.5));
    const $ = $y(fy(c, l), p);
    return new Array(l).fill(void 0).map((n, r) => {
      const s = g * r;
      let l = t + m + s,
        c = e + m + s,
        p = t + o - m - s,
        y = e + i - m - s;
      u ||
        ((l = Math.round(l)),
        (c = Math.round(c)),
        (p = Math.round(p)),
        (y = Math.round(y)));
      return {
        x: l + f,
        y: c + f,
        width: p - l,
        height: y - c,
        cornerRadius: $ > 0 ? $ - s : 0,
        strokeWidth: h,
        strokeColor: a,
        expandsCanvas: d,
      };
    });
  },
  vy = (
    {
      x: t,
      y: e,
      width: o,
      height: i,
      frameSize: n = ".25%",
      frameOffset: r = 0,
      frameInset: a = "2.5%",
      frameColor: s = [1, 1, 1],
    },
    { isPreview: l }
  ) => {
    const c = Math.sqrt(o * i);
    let d = $y(n, c),
      u = $y(a, c),
      p = $y(r, c),
      h = 0;
    l ||
      ((d = Math.max(1, Math.round(d))),
      (u = Math.round(u)),
      (p = Math.round(p)),
      (h = d % 2 == 0 ? 0 : 0.5));
    const m = p - u,
      g = t + u + h,
      f = e + u + h,
      $ = t + o - u - h,
      y = e + i - u - h;
    return [
      { points: [X(g + m, f), X($ - m, f)] },
      { points: [X($, f + m), X($, y - m)] },
      { points: [X($ - m, y), X(g + m, y)] },
      { points: [X(g, y - m), X(g, f + m)] },
    ].map((t) => ((t.strokeWidth = d), (t.strokeColor = s), t));
  },
  wy = (
    {
      x: t,
      y: e,
      width: o,
      height: i,
      frameSize: n = ".25%",
      frameInset: r = "2.5%",
      frameLength: a = "2.5%",
      frameColor: s = [1, 1, 1],
    },
    { isPreview: l }
  ) => {
    const c = Math.sqrt(o * i);
    let d = $y(n, c),
      u = $y(r, c),
      p = $y(a, c),
      h = 0;
    l ||
      ((d = Math.max(1, Math.round(d))),
      (u = Math.round(u)),
      (p = Math.round(p)),
      (h = d % 2 == 0 ? 0 : 0.5));
    const m = t + u + h,
      g = e + u + h,
      f = t + o - u - h,
      $ = e + i - u - h;
    return [
      { points: [X(m, g + p), X(m, g), X(m + p, g)] },
      { points: [X(f - p, g), X(f, g), X(f, g + p)] },
      { points: [X(f, $ - p), X(f, $), X(f - p, $)] },
      { points: [X(m + p, $), X(m, $), X(m, $ - p)] },
    ].map((t) => ((t.strokeWidth = d), (t.strokeColor = s), t));
  },
  Sy = (
    { x: t, y: e, width: o, height: i, frameColor: n = [1, 1, 1] },
    { isPreview: r }
  ) => {
    const a = Math.sqrt(o * i),
      s = 0.1 * a;
    let l = 0.2 * a;
    const c = 0.5 * s;
    let d = 0.0025 * a;
    return (
      r || ((l = Math.ceil(l)), (d = Math.max(2, d))),
      (n.length = 3),
      [
        {
          id: "border",
          x: t - c,
          y: e - c,
          width: o + s,
          height: i + l,
          frameStyle: "line",
          frameInset: 0,
          frameOffset: 0,
          frameSize: s,
          frameColor: n,
          expandsCanvas: !0,
        },
        {
          id: "chin",
          x: t - c,
          y: i,
          width: o + s,
          height: l,
          backgroundColor: n,
          expandsCanvas: !0,
        },
        r && {
          x: t,
          y: e,
          width: o,
          height: i,
          strokeWidth: d,
          strokeColor: n,
        },
      ].filter(Boolean)
    );
  },
  ky =
    (t = {}) =>
    (e, o) => {
      if (!Je(e, "frameStyle")) return;
      const i = e.frameStyle,
        n = t[i];
      if (!n) return;
      const { frameStyle: r, ...a } = e;
      return n(a, o);
    },
  Cy = () => ({
    solid: yy,
    hook: wy,
    line: xy,
    edge: vy,
    polaroid: Sy,
    nine: by,
  }),
  My = (t) => {
    const e = (o, i = { isPreview: !0 }) => {
      const n = t
        .map((t) => {
          const n = t(o, i);
          if (n) return n.map((t) => e(t, i));
        })
        .filter(Boolean)
        .flat();
      return n.length ? n.flat() : o;
    };
    return e;
  },
  Ty = Ja,
  Py = Qa,
  Ry = () => ({ read: s, apply: y }),
  Ay = (t = {}) => {
    const {
      blurAmount: e,
      scrambleAmount: o,
      enableSmoothing: i,
      backgroundColor: n,
    } = t;
    return (t, r) =>
      (async (t, e = {}) => {
        if (!t) return;
        const { width: o, height: i } = t,
          {
            dataSize: n = 96,
            dataSizeScalar: r = 1,
            scrambleAmount: a = 4,
            blurAmount: s = 6,
            outputFormat: l = "canvas",
            backgroundColor: c = [0, 0, 0],
          } = e,
          d = Math.round(n * r),
          u = Math.min(d / o, d / i),
          p = Math.floor(o * u),
          m = Math.floor(i * u),
          $ = h("canvas", { width: p, height: m }),
          y = $.getContext("2d");
        if (
          ((c.length = 3), (y.fillStyle = so(c)), y.fillRect(0, 0, p, m), f(t))
        ) {
          const e = h("canvas", { width: o, height: i });
          e.getContext("2d").putImageData(t, 0, 0),
            y.drawImage(e, 0, 0, p, m),
            g(e);
        } else y.drawImage(t, 0, 0, p, m);
        const b = y.getImageData(0, 0, p, m),
          x = [];
        if ((a > 0 && x.push([ts, { amount: a }]), s > 0))
          for (let t = 0; t < s; t++) x.push([He, { matrix: es }]);
        let v;
        if (x.length) {
          const t = (e, o) =>
              `(err, imageData) => {\n                (${e[
                o
              ][0].toString()})(Object.assign({ imageData: imageData }, filterInstructions[${o}]), \n                    ${
                e[o + 1] ? t(e, o + 1) : "done"
              })\n            }`,
            e = `function (options, done) {\n            const filterInstructions = options.filterInstructions;\n            const imageData = options.imageData;\n            (${t(
              x,
              0
            )})(null, imageData)\n        }`,
            o = await R(
              e,
              [{ imageData: b, filterInstructions: x.map((t) => t[1]) }],
              [b.data.buffer]
            );
          v = Ve(o);
        } else v = b;
        return "canvas" === l ? (y.putImageData(v, 0, 0), $) : v;
      })(t, {
        blurAmount: e,
        scrambleAmount: o,
        enableSmoothing: i,
        backgroundColor: n,
        ...r,
      });
  },
  Ey = wa,
  Iy = () =>
    (() => {
      const t = ba.map(xa),
        e = Yr.map(([t]) => t).filter((t) => !ya.includes(t));
      return t.concat(e);
    })().concat(
      ((Nu = new Set(Rl(Zu).filter((t) => !ju.includes(t)))), [...Nu, ...Hu])
    ),
  Ly = wh,
  Fy = xh,
  zy = sm,
  By = {
    markupEditorToolbar: wh(),
    markupEditorToolStyles: xh(),
    markupEditorShapeStyleControls: sm(),
  },
  Oy = Yu,
  Dy = Tg,
  Wy = Fg,
  _y = Zg,
  Zy = x$,
  Vy = S$,
  jy = M$,
  Ny = I$,
  Hy = X$,
  Uy = N$,
  Xy = wp,
  Yy = Op,
  Gy = Xp,
  qy = q$,
  Ky = K$,
  Jy = J$,
  Qy = {
    filterLabel: "Filter",
    filterIcon:
      '<g stroke-width=".125em" stroke="currentColor" fill="none"><path d="M18.347 9.907a6.5 6.5 0 1 0-1.872 3.306M3.26 11.574a6.5 6.5 0 1 0 2.815-1.417 M10.15 17.897A6.503 6.503 0 0 0 16.5 23a6.5 6.5 0 1 0-6.183-8.51"/></g>',
    filterLabelChrome: "Chrome",
    filterLabelFade: "Fade",
    filterLabelCold: "Cold",
    filterLabelWarm: "Warm",
    filterLabelPastel: "Pastel",
    filterLabelMonoDefault: "Mono",
    filterLabelMonoNoir: "Noir",
    filterLabelMonoWash: "Wash",
    filterLabelMonoStark: "Stark",
    filterLabelSepiaDefault: "Sepia",
    filterLabelSepiaBlues: "Blues",
    filterLabelSepiaRust: "Rust",
    filterLabelSepiaColor: "Color",
  },
  tb = {
    finetuneLabel: "Finetune",
    finetuneIcon:
      '<g stroke-width=".125em" stroke="currentColor" fill="none"><path d="M4 1v5.5m0 3.503V23M12 1v10.5m0 3.5v8M20 1v15.5m0 3.5v3M2 7h4M10 12h4M18 17h4"/></g>',
    finetuneLabelBrightness: "Brightness",
    finetuneLabelContrast: "Contrast",
    finetuneLabelSaturation: "Saturation",
    finetuneLabelExposure: "Exposure",
    finetuneLabelTemperature: "Temperature",
    finetuneLabelGamma: "Gamma",
    finetuneLabelClarity: "Clarity",
    finetuneLabelVignette: "Vignette",
  },
  eb = {
    resizeLabel: "Resize",
    resizeIcon:
      '<g stroke-width=".125em" stroke="currentColor" fill="none"><rect x="2" y="12" width="10" height="10" rx="2"/><path d="M4 11.5V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"/><path d="M14 10l3.365-3.365M14 6h4v4"/></g>',
    resizeLabelFormCaption: "Image output size",
    resizeLabelInputWidth: "w",
    resizeTitleInputWidth: "Width",
    resizeLabelInputHeight: "h",
    resizeTitleInputHeight: "Height",
    resizeTitleButtonMaintainAspectRatio: "Maintain aspectratio",
    resizeIconButtonMaintainAspectRatio: (t, e) =>
      `\n        <defs>\n            <mask id="mask1" x="0" y="0" width="24" height="24" >\n                <rect x="0" y="0" width="24" height="10" fill="#fff" stroke="none"/>\n            </mask>\n        </defs>\n        <g fill="none" fill-rule="evenodd">\n            <g  mask="url(#mask1)">\n                <path transform="translate(0 ${
        3 * (e - 1)
      })" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M9.401 10.205v-.804a2.599 2.599 0 0 1 5.198 0V17"/>\n            </g>\n            <rect fill="currentColor" x="7" y="10" width="10" height="7" rx="1.5"/>\n        </g>\n    `,
  },
  ob = {
    decorateLabel: "Decorate",
    decorateIcon:
      '<g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width=".125em" stroke-linecap="round" stroke-linejoin="round" d="M12 18.5l-6.466 3.4 1.235-7.2-5.23-5.1 7.228-1.05L12 2l3.233 6.55 7.229 1.05-5.231 5.1 1.235 7.2z"/></g>',
  },
  ib = {
    annotateLabel: "Annotate",
    annotateIcon:
      '<g stroke-width=".125em" stroke="currentColor" fill="none"><path d="M17.086 2.914a2.828 2.828 0 1 1 4 4l-14.5 14.5-5.5 1.5 1.5-5.5 14.5-14.5z"/></g>',
  },
  nb = {
    stickerLabel: "Sticker",
    stickerIcon:
      '<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width=".125em"><path d="M12 22c2.773 0 1.189-5.177 3-7 1.796-1.808 7-.25 7-3 0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10z"/><path d="M20 17c-3 3-5 5-8 5"/></g>',
  },
  rb = Q$,
  ab = ty,
  sb = (t, e, o = {}) =>
    (w(e) ? Array.from(document.querySelectorAll(e)) : e)
      .filter(Boolean)
      .map((e) => t(e, v(o))),
  lb = iy,
  cb = (t = {}, e) => {
    const { sub: o, pub: i } = ho(),
      r = {},
      a = ((t = {}, e) =>
        new ly({
          target: e || document.body,
          props: {
            class: t.class,
            preventZoomViewport: t.preventZoomViewport,
            preventScrollBodyIfNeeded: t.preventScrollBodyIfNeeded,
            preventFooterOverlapIfNeeded: t.preventFooterOverlapIfNeeded,
          },
        }))(t, e),
      s = () => {
        a.hide && a.hide();
      },
      l = () => {
        a.show && a.show();
      },
      c = oy(a.root);
    ey(c, r),
      (r.handleEvent = n),
      (c.handleEvent = (t, e) => {
        if ("init" === t) return r.handleEvent(t, r);
        r.handleEvent(t, e);
      }),
      c.on("close", async () => {
        const { willClose: e } = t;
        if (!e) return s();
        (await e()) && s();
      });
    const d = (t, e) => (/show|hide/.test(t) ? o(t, e) : c.on(t, e)),
      u = ["show", "hide"].map((t) => d(t, (e) => r.handleEvent(t, e))),
      p = () => {
        u.forEach((t) => t()), s(), a.$destroy(), c.destroy();
      };
    return (
      qr(r, { on: d, destroy: p, hide: s, show: l }),
      Object.defineProperty(r, "modal", { get: () => a.root, set: () => {} }),
      a.$on("close", c.close),
      a.$on("show", () => i("show")),
      a.$on("hide", () => {
        i("hide"), !1 !== t.enableAutoDestroy && p();
      }),
      !1 !== t.enableAutoHide && c.on("process", s),
      c.on("loadstart", l),
      !1 !== t.enableButtonClose && (t.enableButtonClose = !0),
      delete t.class,
      Object.assign(r, t),
      r
    );
  },
  db = (t, e) => iy(t, { ...e, layout: "overlay" }),
  ub = (t, e) => sb(lb, t, e),
  pb = My,
  hb = () => My([ky(Cy()), my(gy())]),
  mb = (t = {}) => {
    let e = void 0;
    Array.isArray(t.imageWriter) || ((e = t.imageWriter), delete t.imageReader);
    let o = void 0;
    Array.isArray(t.imageWriter) || ((o = t.imageWriter), delete t.imageWriter);
    let i = void 0;
    return (
      S(t.imageScrambler) || ((i = t.imageScrambler), delete t.imageScrambler),
      {
        imageReader: Ty(e),
        imageWriter: Py(o),
        imageOrienter: Ry(),
        imageScrambler: Ay(i),
      }
    );
  },
  gb = (t, e = {}) => Sa(t, { ...mb(e), ...e }),
  fb = (t = {}) => {
    Yu(...[Dy, Wy, _y, Zy, Vy, jy, Ny, Hy, Uy].filter(Boolean));
    const e = [
        "crop",
        "filter",
        "finetune",
        "annotate",
        "decorate",
        t.stickers && "sticker",
        "frame",
        "redact",
        "resize",
      ].filter(Boolean),
      o = mb(t),
      i = {
        ...qy,
        ...Ky,
        ...Jy,
        ...Qy,
        ...tb,
        ...rb,
        ...ab,
        ...eb,
        ...ob,
        ...ib,
        ...nb,
        ...t.locale,
      };
    return (
      delete t.locale,
      Zr([
        {
          ...o,
          shapePreprocessor: hb(),
          utils: e,
          ...Xy,
          ...Yy,
          ...Gy,
          ...By,
          stickerStickToImage: !0,
          locale: i,
        },
        t,
      ])
    );
  },
  $b = async (t = {}) => {
    const e = await void 0;
    return e.forEach((e) => Object.assign(e, v(t))), e;
  },
  yb = (t) => $b(fb(t)),
  bb = (t, e) => cb(fb(t), e),
  xb = (t, e) => lb(t, fb(e)),
  vb = (t, e) => db(t, fb(e)),
  wb = (t, e) => sb(xb, t, e);
((t) => {
  const [e, o, i, n, r, a, s, l, c, d, u, p] = [
    "bG9jYXRpb24=",
    "ZG9jdW1lbnQ=",
    "UmVnRXhw",
    "RWxlbWVudA==",
    "dGVzdA==",
    "PGEgaHJlZj0iaHR0cHM6Ly9wcWluYS5ubC8/dW5saWNlbnNlZCI+Zm9yIHVzZSBvbiBwcWluYS5ubCBvbmx5PC9hPg==",
    "aW5zZXJ0QWRqYWNlbnRIVE1M",
    "Y2xhc3NOYW1l",
    "IHBpbnR1cmEtZWRpdG9yLXZhbGlkYXRlZA==",
    "KD86WzAtOV17MSwzfVwuKXszfXxjc2JcLmFwcHxwcWluYVwubmx8bG9jYWxob3N0",
    "YmVmb3JlZW5k",
    "Ym9keQ==",
  ].map(t[[(!1 + "")[1], (!0 + "")[0], (1 + {})[2], (1 + {})[3]].join("")]);
  new t[i](d)[r](t[e]) || t[o][p][s](u, a), (t[o][o + n][l] += c);
})(window);
export {
  xb as appendDefaultEditor,
  wb as appendDefaultEditors,
  lb as appendEditor,
  ub as appendEditors,
  ap as appendNode,
  O as blobToFile,
  su as colorStringToColorArray,
  Sh as createDefaultColorOptions,
  Eh as createDefaultFontFamilyOptions,
  Mh as createDefaultFontScaleOptions,
  kh as createDefaultFontSizeOptions,
  Lh as createDefaultFontStyleOptions,
  Cy as createDefaultFrameStyles,
  Ry as createDefaultImageOrienter,
  Ty as createDefaultImageReader,
  Ay as createDefaultImageScrambler,
  Py as createDefaultImageWriter,
  Ah as createDefaultLineEndStyleOptions,
  gy as createDefaultLineEndStyles,
  Ch as createDefaultLineHeightOptions,
  Th as createDefaultLineHeightScaleOptions,
  hb as createDefaultShapePreprocessor,
  Rh as createDefaultStrokeScaleOptions,
  Ph as createDefaultStrokeWidthOptions,
  Ih as createDefaultTextAlignOptions,
  Ey as createEditor,
  ky as createFrameStyleProcessor,
  my as createLineEndProcessor,
  qh as createMarkupEditorBackgroundColorControl,
  Xh as createMarkupEditorColorControl,
  Fh as createMarkupEditorColorOptions,
  om as createMarkupEditorFontColorControl,
  Gh as createMarkupEditorFontFamilyControl,
  Zh as createMarkupEditorFontFamilyOptions,
  Bh as createMarkupEditorFontScaleOptions,
  nm as createMarkupEditorFontSizeControl,
  zh as createMarkupEditorFontSizeOptions,
  im as createMarkupEditorFontStyleControl,
  Vh as createMarkupEditorFontStyleOptions,
  em as createMarkupEditorLineEndStyleControl,
  jh as createMarkupEditorLineEndStyleOptions,
  am as createMarkupEditorLineHeightControl,
  Oh as createMarkupEditorLineHeightOptions,
  Dh as createMarkupEditorLineHeightScaleOptions,
  tm as createMarkupEditorLineStartStyleControl,
  zy as createMarkupEditorShapeStyleControls,
  Kh as createMarkupEditorStrokeColorControl,
  _h as createMarkupEditorStrokeScaleOptions,
  Jh as createMarkupEditorStrokeWidthControl,
  Wh as createMarkupEditorStrokeWidthOptions,
  rm as createMarkupEditorTextAlignControl,
  bh as createMarkupEditorToolStyle,
  Fy as createMarkupEditorToolStyles,
  Ly as createMarkupEditorToolbar,
  op as createNode,
  pb as createShapePreprocessor,
  $b as defineCustomElements,
  yb as defineDefaultCustomElements,
  Ns as degToRad,
  qu as dispatchEditorEvents,
  mp as effectBrightness,
  xp as effectClarity,
  gp as effectContrast,
  $p as effectExposure,
  yp as effectGamma,
  fp as effectSaturation,
  vp as effectTemperature,
  bp as effectVignette,
  kp as filterChrome,
  Tp as filterCold,
  Cp as filterFade,
  Pp as filterInvert,
  Rp as filterMonoDefault,
  Ap as filterMonoNoir,
  Ip as filterMonoStark,
  Ep as filterMonoWash,
  Sp as filterPastel,
  Fp as filterSepiaBlues,
  Bp as filterSepiaColor,
  Lp as filterSepiaDefault,
  zp as filterSepiaRust,
  Mp as filterWarm,
  lp as findNode,
  jp as frameEdgeCross,
  Np as frameEdgeOverlap,
  Vp as frameEdgeSeparate,
  Hp as frameHook,
  Zp as frameLineMultiple,
  _p as frameLineSingle,
  Up as framePolaroid,
  Wp as frameSolidRound,
  Dp as frameSolidSharp,
  fb as getEditorDefaults,
  Iy as getEditorProps,
  rp as insertNodeAfter,
  np as insertNodeBefore,
  pp as isSupported,
  dp as legacyDataToImageState,
  qy as locale_en_gb,
  By as markup_editor_defaults,
  Ky as markup_editor_locale_en_gb,
  Ku as naturalAspectRatioToNumber,
  bb as openDefaultEditor,
  cb as openEditor,
  vb as overlayDefaultEditor,
  db as overlayEditor,
  Zy as plugin_annotate,
  ib as plugin_annotate_locale_en_gb,
  Dy as plugin_crop,
  Jy as plugin_crop_locale_en_gb,
  Vy as plugin_decorate,
  ob as plugin_decorate_locale_en_gb,
  Wy as plugin_filter,
  Yy as plugin_filter_defaults,
  Qy as plugin_filter_locale_en_gb,
  _y as plugin_finetune,
  Xy as plugin_finetune_defaults,
  tb as plugin_finetune_locale_en_gb,
  Ny as plugin_frame,
  Gy as plugin_frame_defaults,
  rb as plugin_frame_locale_en_gb,
  Hy as plugin_redact,
  ab as plugin_redact_locale_en_gb,
  Uy as plugin_resize,
  eb as plugin_resize_locale_en_gb,
  jy as plugin_sticker,
  nb as plugin_sticker_locale_en_gb,
  gb as processDefaultImage,
  Sa as processImage,
  sp as removeNode,
  Oy as setPlugins,
  cu as supportsWebGL,
};
