var Qt = Object.create;
var st = Object.defineProperty;
var te = Object.getOwnPropertyDescriptor;
var ee = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf, ne = Object.prototype.hasOwnProperty;
var i = (t, e) => st(t, "name", { value: e, configurable: !0 }), U = /* @__PURE__ */ ((t) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(t, {
  get: (e, r) => (typeof require < "u" ? require : e)[r]
}) : t)(function(t) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var oe = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var ae = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let a of ee(e))
      !ne.call(t, a) && a !== r && st(t, a, { get: () => e[a], enumerable: !(n = te(e, a)) || n.enumerable });
  return t;
};
var ie = (t, e, r) => (r = t != null ? Qt(re(t)) : {}, ae(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  e || !t || !t.__esModule ? st(r, "default", { value: t, enumerable: !0 }) : r,
  t
));

// ../node_modules/memoizerific/memoizerific.js
var At = oe((Ot, ct) => {
  (function(t) {
    if (typeof Ot == "object" && typeof ct < "u")
      ct.exports = t();
    else if (typeof define == "function" && define.amd)
      define([], t);
    else {
      var e;
      typeof window < "u" ? e = window : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = this, e.memoizerific = t();
    }
  })(function() {
    var t, e, r;
    return (/* @__PURE__ */ i(function n(a, l, s) {
      function c(u, p) {
        if (!l[u]) {
          if (!a[u]) {
            var d = typeof U == "function" && U;
            if (!p && d) return d(u, !0);
            if (o) return o(u, !0);
            var g = new Error("Cannot find module '" + u + "'");
            throw g.code = "MODULE_NOT_FOUND", g;
          }
          var y = l[u] = { exports: {} };
          a[u][0].call(y.exports, function(m) {
            var v = a[u][1][m];
            return c(v || m);
          }, y, y.exports, n, a, l, s);
        }
        return l[u].exports;
      }
      i(c, "s");
      for (var o = typeof U == "function" && U, h = 0; h < s.length; h++) c(s[h]);
      return c;
    }, "e"))({ 1: [function(n, a, l) {
      a.exports = function(s) {
        if (typeof Map != "function" || s) {
          var c = n("./similar");
          return new c();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(n, a, l) {
      function s() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      i(s, "Similar"), s.prototype.get = function(c) {
        var o;
        if (this.lastItem && this.isEqual(this.lastItem.key, c))
          return this.lastItem.val;
        if (o = this.indexOf(c), o >= 0)
          return this.lastItem = this.list[o], this.list[o].val;
      }, s.prototype.set = function(c, o) {
        var h;
        return this.lastItem && this.isEqual(this.lastItem.key, c) ? (this.lastItem.val = o, this) : (h = this.indexOf(c), h >= 0 ? (this.lastItem =
        this.list[h], this.list[h].val = o, this) : (this.lastItem = { key: c, val: o }, this.list.push(this.lastItem), this.size++, this));
      }, s.prototype.delete = function(c) {
        var o;
        if (this.lastItem && this.isEqual(this.lastItem.key, c) && (this.lastItem = void 0), o = this.indexOf(c), o >= 0)
          return this.size--, this.list.splice(o, 1)[0];
      }, s.prototype.has = function(c) {
        var o;
        return this.lastItem && this.isEqual(this.lastItem.key, c) ? !0 : (o = this.indexOf(c), o >= 0 ? (this.lastItem = this.list[o], !0) :
        !1);
      }, s.prototype.forEach = function(c, o) {
        var h;
        for (h = 0; h < this.size; h++)
          c.call(o || this, this.list[h].val, this.list[h].key, this);
      }, s.prototype.indexOf = function(c) {
        var o;
        for (o = 0; o < this.size; o++)
          if (this.isEqual(this.list[o].key, c))
            return o;
        return -1;
      }, s.prototype.isEqual = function(c, o) {
        return c === o || c !== c && o !== o;
      }, a.exports = s;
    }, {}], 3: [function(n, a, l) {
      var s = n("map-or-similar");
      a.exports = function(u) {
        var p = new s(!1), d = [];
        return function(g) {
          var y = /* @__PURE__ */ i(function() {
            var m = p, v, C, w = arguments.length - 1, I = Array(w + 1), P = !0, j;
            if ((y.numArgs || y.numArgs === 0) && y.numArgs !== w + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (j = 0; j < w; j++) {
              if (I[j] = {
                cacheItem: m,
                arg: arguments[j]
              }, m.has(arguments[j])) {
                m = m.get(arguments[j]);
                continue;
              }
              P = !1, v = new s(!1), m.set(arguments[j], v), m = v;
            }
            return P && (m.has(arguments[w]) ? C = m.get(arguments[w]) : P = !1), P || (C = g.apply(null, arguments), m.set(arguments[w], C)),
            u > 0 && (I[w] = {
              cacheItem: m,
              arg: arguments[w]
            }, P ? c(d, I) : d.push(I), d.length > u && o(d.shift())), y.wasMemoized = P, y.numArgs = w + 1, C;
          }, "memoizerific");
          return y.limit = u, y.wasMemoized = !1, y.cache = p, y.lru = d, y;
        };
      };
      function c(u, p) {
        var d = u.length, g = p.length, y, m, v;
        for (m = 0; m < d; m++) {
          for (y = !0, v = 0; v < g; v++)
            if (!h(u[m][v].arg, p[v].arg)) {
              y = !1;
              break;
            }
          if (y)
            break;
        }
        u.push(u.splice(m, 1)[0]);
      }
      i(c, "moveToMostRecentLru");
      function o(u) {
        var p = u.length, d = u[p - 1], g, y;
        for (d.cacheItem.delete(d.arg), y = p - 2; y >= 0 && (d = u[y], g = d.cacheItem.get(d.arg), !g || !g.size); y--)
          d.cacheItem.delete(d.arg);
      }
      i(o, "removeCachedResult");
      function h(u, p) {
        return u === p || u !== u && p !== p;
      }
      i(h, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});

// ../node_modules/@storybook/global/dist/index.mjs
var b = (() => {
  let t;
  return typeof window < "u" ? t = window : typeof globalThis < "u" ? t = globalThis : typeof global < "u" ? t = global : typeof self < "u" ?
  t = self : t = {}, t;
})();

// src/channels/main.ts
var se = /* @__PURE__ */ i((t) => t.transports !== void 0, "isMulti"), le = /* @__PURE__ */ i(() => Math.random().toString(16).slice(2), "ge\
nerateRandomId"), lt = class lt {
  constructor(e = {}) {
    this.sender = le();
    this.events = {};
    this.data = {};
    this.transports = [];
    this.isAsync = e.async || !1, se(e) ? (this.transports = e.transports || [], this.transports.forEach((r) => {
      r.setHandler((n) => this.handleEvent(n));
    })) : this.transports = e.transport ? [e.transport] : [], this.transports.forEach((r) => {
      r.setHandler((n) => this.handleEvent(n));
    });
  }
  get hasTransport() {
    return this.transports.length > 0;
  }
  addListener(e, r) {
    this.events[e] = this.events[e] || [], this.events[e].push(r);
  }
  emit(e, ...r) {
    let n = { type: e, args: r, from: this.sender }, a = {};
    r.length >= 1 && r[0] && r[0].options && (a = r[0].options);
    let l = /* @__PURE__ */ i(() => {
      this.transports.forEach((s) => {
        s.send(n, a);
      }), this.handleEvent(n);
    }, "handler");
    this.isAsync ? setImmediate(l) : l();
  }
  last(e) {
    return this.data[e];
  }
  eventNames() {
    return Object.keys(this.events);
  }
  listenerCount(e) {
    let r = this.listeners(e);
    return r ? r.length : 0;
  }
  listeners(e) {
    return this.events[e] || void 0;
  }
  once(e, r) {
    let n = this.onceListener(e, r);
    this.addListener(e, n);
  }
  removeAllListeners(e) {
    e ? this.events[e] && delete this.events[e] : this.events = {};
  }
  removeListener(e, r) {
    let n = this.listeners(e);
    n && (this.events[e] = n.filter((a) => a !== r));
  }
  on(e, r) {
    this.addListener(e, r);
  }
  off(e, r) {
    this.removeListener(e, r);
  }
  handleEvent(e) {
    let r = this.listeners(e.type);
    r && r.length && r.forEach((n) => {
      n.apply(e, e.args);
    }), this.data[e.type] = e.args;
  }
  onceListener(e, r) {
    let n = /* @__PURE__ */ i((...a) => (this.removeListener(e, n), r(...a)), "onceListener");
    return n;
  }
};
i(lt, "Channel");
var z = lt;

// src/channels/postmessage/index.ts
import { logger as Ht, pretty as qt } from "@storybook/core/client-logger";
import * as Qn from "@storybook/core/core-events";

// ../node_modules/telejson/dist/chunk-465TF3XA.mjs
var ce = Object.create, St = Object.defineProperty, fe = Object.getOwnPropertyDescriptor, wt = Object.getOwnPropertyNames, ue = Object.getPrototypeOf,
pe = Object.prototype.hasOwnProperty, x = /* @__PURE__ */ i((t, e) => /* @__PURE__ */ i(function() {
  return e || (0, t[wt(t)[0]])((e = { exports: {} }).exports, e), e.exports;
}, "__require"), "__commonJS"), ye = /* @__PURE__ */ i((t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let a of wt(e))
      !pe.call(t, a) && a !== r && St(t, a, { get: /* @__PURE__ */ i(() => e[a], "get"), enumerable: !(n = fe(e, a)) || n.enumerable });
  return t;
}, "__copyProps"), tt = /* @__PURE__ */ i((t, e, r) => (r = t != null ? ce(ue(t)) : {}, ye(
  e || !t || !t.__esModule ? St(r, "default", { value: t, enumerable: !0 }) : r,
  t
)), "__toESM"), de = [
  "bubbles",
  "cancelBubble",
  "cancelable",
  "composed",
  "currentTarget",
  "defaultPrevented",
  "eventPhase",
  "isTrusted",
  "returnValue",
  "srcElement",
  "target",
  "timeStamp",
  "type"
], he = ["detail"];
function Et(t) {
  let e = de.filter((r) => t[r] !== void 0).reduce((r, n) => ({ ...r, [n]: t[n] }), {});
  return t instanceof CustomEvent && he.filter((r) => t[r] !== void 0).forEach((r) => {
    e[r] = t[r];
  }), e;
}
i(Et, "extractEventHiddenProperties");

// ../node_modules/telejson/dist/index.mjs
var Ut = ie(At(), 1);
var Tt = x({
  "node_modules/has-symbols/shams.js"(t, e) {
    "use strict";
    e.exports = /* @__PURE__ */ i(function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
      if (typeof Symbol.iterator == "symbol")
        return !0;
      var n = {}, a = Symbol("test"), l = Object(a);
      if (typeof a == "string" || Object.prototype.toString.call(a) !== "[object Symbol]" || Object.prototype.toString.call(l) !== "[object \
Symbol]")
        return !1;
      var s = 42;
      n[a] = s;
      for (a in n)
        return !1;
      if (typeof Object.keys == "function" && Object.keys(n).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(
      n).length !== 0)
        return !1;
      var c = Object.getOwnPropertySymbols(n);
      if (c.length !== 1 || c[0] !== a || !Object.prototype.propertyIsEnumerable.call(n, a))
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var o = Object.getOwnPropertyDescriptor(n, a);
        if (o.value !== s || o.enumerable !== !0)
          return !1;
      }
      return !0;
    }, "hasSymbols");
  }
}), Ft = x({
  "node_modules/has-symbols/index.js"(t, e) {
    "use strict";
    var r = typeof Symbol < "u" && Symbol, n = Tt();
    e.exports = /* @__PURE__ */ i(function() {
      return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 :
      n();
    }, "hasNativeSymbols");
  }
}), ge = x({
  "node_modules/function-bind/implementation.js"(t, e) {
    "use strict";
    var r = "Function.prototype.bind called on incompatible ", n = Array.prototype.slice, a = Object.prototype.toString, l = "[object Functi\
on]";
    e.exports = /* @__PURE__ */ i(function(c) {
      var o = this;
      if (typeof o != "function" || a.call(o) !== l)
        throw new TypeError(r + o);
      for (var h = n.call(arguments, 1), u, p = /* @__PURE__ */ i(function() {
        if (this instanceof u) {
          var v = o.apply(
            this,
            h.concat(n.call(arguments))
          );
          return Object(v) === v ? v : this;
        } else
          return o.apply(
            c,
            h.concat(n.call(arguments))
          );
      }, "binder"), d = Math.max(0, o.length - h.length), g = [], y = 0; y < d; y++)
        g.push("$" + y);
      if (u = Function("binder", "return function (" + g.join(",") + "){ return binder.apply(this,arguments); }")(p), o.prototype) {
        var m = /* @__PURE__ */ i(function() {
        }, "Empty2");
        m.prototype = o.prototype, u.prototype = new m(), m.prototype = null;
      }
      return u;
    }, "bind");
  }
}), ut = x({
  "node_modules/function-bind/index.js"(t, e) {
    "use strict";
    var r = ge();
    e.exports = Function.prototype.bind || r;
  }
}), me = x({
  "node_modules/has/src/index.js"(t, e) {
    "use strict";
    var r = ut();
    e.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
  }
}), Nt = x({
  "node_modules/get-intrinsic/index.js"(t, e) {
    "use strict";
    var r, n = SyntaxError, a = Function, l = TypeError, s = /* @__PURE__ */ i(function(T) {
      try {
        return a('"use strict"; return (' + T + ").constructor;")();
      } catch {
      }
    }, "getEvalledConstructor"), c = Object.getOwnPropertyDescriptor;
    if (c)
      try {
        c({}, "");
      } catch {
        c = null;
      }
    var o = /* @__PURE__ */ i(function() {
      throw new l();
    }, "throwTypeError"), h = c ? function() {
      try {
        return arguments.callee, o;
      } catch {
        try {
          return c(arguments, "callee").get;
        } catch {
          return o;
        }
      }
    }() : o, u = Ft()(), p = Object.getPrototypeOf || function(T) {
      return T.__proto__;
    }, d = {}, g = typeof Uint8Array > "u" ? r : p(Uint8Array), y = {
      "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
      "%ArrayIteratorPrototype%": u ? p([][Symbol.iterator]()) : r,
      "%AsyncFromSyncIteratorPrototype%": r,
      "%AsyncFunction%": d,
      "%AsyncGenerator%": d,
      "%AsyncGeneratorFunction%": d,
      "%AsyncIteratorPrototype%": d,
      "%Atomics%": typeof Atomics > "u" ? r : Atomics,
      "%BigInt%": typeof BigInt > "u" ? r : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? r : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
      "%Function%": a,
      "%GeneratorFunction%": d,
      "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": u ? p(p([][Symbol.iterator]())) : r,
      "%JSON%": typeof JSON == "object" ? JSON : r,
      "%Map%": typeof Map > "u" ? r : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !u ? r : p((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? r : Promise,
      "%Proxy%": typeof Proxy > "u" ? r : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect > "u" ? r : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? r : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !u ? r : p((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": u ? p(""[Symbol.iterator]()) : r,
      "%Symbol%": u ? Symbol : r,
      "%SyntaxError%": n,
      "%ThrowTypeError%": h,
      "%TypedArray%": g,
      "%TypeError%": l,
      "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet
    }, m = /* @__PURE__ */ i(function T(_) {
      var E;
      if (_ === "%AsyncFunction%")
        E = s("async function () {}");
      else if (_ === "%GeneratorFunction%")
        E = s("function* () {}");
      else if (_ === "%AsyncGeneratorFunction%")
        E = s("async function* () {}");
      else if (_ === "%AsyncGenerator%") {
        var S = T("%AsyncGeneratorFunction%");
        S && (E = S.prototype);
      } else if (_ === "%AsyncIteratorPrototype%") {
        var O = T("%AsyncGenerator%");
        O && (E = p(O.prototype));
      }
      return y[_] = E, E;
    }, "doEval2"), v = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    }, C = ut(), w = me(), I = C.call(Function.call, Array.prototype.concat), P = C.call(Function.apply, Array.prototype.splice), j = C.call(
    Function.call, String.prototype.replace), V = C.call(Function.call, String.prototype.slice), Vt = C.call(Function.call, RegExp.prototype.
    exec), Kt = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Yt = /\\(\\)?/g, Zt = /* @__PURE__ */ i(
    function(_) {
      var E = V(_, 0, 1), S = V(_, -1);
      if (E === "%" && S !== "%")
        throw new n("invalid intrinsic syntax, expected closing `%`");
      if (S === "%" && E !== "%")
        throw new n("invalid intrinsic syntax, expected opening `%`");
      var O = [];
      return j(_, Kt, function(F, R, A, K) {
        O[O.length] = A ? j(K, Yt, "$1") : R || F;
      }), O;
    }, "stringToPath3"), Xt = /* @__PURE__ */ i(function(_, E) {
      var S = _, O;
      if (w(v, S) && (O = v[S], S = "%" + O[0] + "%"), w(y, S)) {
        var F = y[S];
        if (F === d && (F = m(S)), typeof F > "u" && !E)
          throw new l("intrinsic " + _ + " exists, but is not available. Please file an issue!");
        return {
          alias: O,
          name: S,
          value: F
        };
      }
      throw new n("intrinsic " + _ + " does not exist!");
    }, "getBaseIntrinsic2");
    e.exports = /* @__PURE__ */ i(function(_, E) {
      if (typeof _ != "string" || _.length === 0)
        throw new l("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof E != "boolean")
        throw new l('"allowMissing" argument must be a boolean');
      if (Vt(/^%?[^%]*%?$/, _) === null)
        throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var S = Zt(_), O = S.length > 0 ? S[0] : "", F = Xt("%" + O + "%", E), R = F.name, A = F.value, K = !1, it = F.alias;
      it && (O = it[0], P(S, I([0, 1], it)));
      for (var Y = 1, L = !0; Y < S.length; Y += 1) {
        var N = S[Y], Z = V(N, 0, 1), X = V(N, -1);
        if ((Z === '"' || Z === "'" || Z === "`" || X === '"' || X === "'" || X === "`") && Z !== X)
          throw new n("property names with quotes must have matching quotes");
        if ((N === "constructor" || !L) && (K = !0), O += "." + N, R = "%" + O + "%", w(y, R))
          A = y[R];
        else if (A != null) {
          if (!(N in A)) {
            if (!E)
              throw new l("base intrinsic for " + _ + " exists, but the property is not available.");
            return;
          }
          if (c && Y + 1 >= S.length) {
            var Q = c(A, N);
            L = !!Q, L && "get" in Q && !("originalValue" in Q.get) ? A = Q.get : A = A[N];
          } else
            L = w(A, N), A = A[N];
          L && !K && (y[R] = A);
        }
      }
      return A;
    }, "GetIntrinsic");
  }
}), ve = x({
  "node_modules/call-bind/index.js"(t, e) {
    "use strict";
    var r = ut(), n = Nt(), a = n("%Function.prototype.apply%"), l = n("%Function.prototype.call%"), s = n("%Reflect.apply%", !0) || r.call(
    l, a), c = n("%Object.getOwnPropertyDescriptor%", !0), o = n("%Object.defineProperty%", !0), h = n("%Math.max%");
    if (o)
      try {
        o({}, "a", { value: 1 });
      } catch {
        o = null;
      }
    e.exports = /* @__PURE__ */ i(function(d) {
      var g = s(r, l, arguments);
      if (c && o) {
        var y = c(g, "length");
        y.configurable && o(
          g,
          "length",
          { value: 1 + h(0, d.length - (arguments.length - 1)) }
        );
      }
      return g;
    }, "callBind");
    var u = /* @__PURE__ */ i(function() {
      return s(r, a, arguments);
    }, "applyBind2");
    o ? o(e.exports, "apply", { value: u }) : e.exports.apply = u;
  }
}), _e = x({
  "node_modules/call-bind/callBound.js"(t, e) {
    "use strict";
    var r = Nt(), n = ve(), a = n(r("String.prototype.indexOf"));
    e.exports = /* @__PURE__ */ i(function(s, c) {
      var o = r(s, !!c);
      return typeof o == "function" && a(s, ".prototype.") > -1 ? n(o) : o;
    }, "callBoundIntrinsic");
  }
}), be = x({
  "node_modules/has-tostringtag/shams.js"(t, e) {
    "use strict";
    var r = Tt();
    e.exports = /* @__PURE__ */ i(function() {
      return r() && !!Symbol.toStringTag;
    }, "hasToStringTagShams");
  }
}), Se = x({
  "node_modules/is-regex/index.js"(t, e) {
    "use strict";
    var r = _e(), n = be()(), a, l, s, c;
    n && (a = r("Object.prototype.hasOwnProperty"), l = r("RegExp.prototype.exec"), s = {}, o = /* @__PURE__ */ i(function() {
      throw s;
    }, "throwRegexMarker"), c = {
      toString: o,
      valueOf: o
    }, typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = o));
    var o, h = r("Object.prototype.toString"), u = Object.getOwnPropertyDescriptor, p = "[object RegExp]";
    e.exports = /* @__PURE__ */ i(n ? function(g) {
      if (!g || typeof g != "object")
        return !1;
      var y = u(g, "lastIndex"), m = y && a(y, "value");
      if (!m)
        return !1;
      try {
        l(g, c);
      } catch (v) {
        return v === s;
      }
    } : function(g) {
      return !g || typeof g != "object" && typeof g != "function" ? !1 : h(g) === p;
    }, "isRegex");
  }
}), we = x({
  "node_modules/is-function/index.js"(t, e) {
    e.exports = n;
    var r = Object.prototype.toString;
    function n(a) {
      if (!a)
        return !1;
      var l = r.call(a);
      return l === "[object Function]" || typeof a == "function" && l !== "[object RegExp]" || typeof window < "u" && (a === window.setTimeout ||
      a === window.alert || a === window.confirm || a === window.prompt);
    }
    i(n, "isFunction3");
  }
}), Ee = x({
  "node_modules/is-symbol/index.js"(t, e) {
    "use strict";
    var r = Object.prototype.toString, n = Ft()();
    n ? (a = Symbol.prototype.toString, l = /^Symbol\(.*\)$/, s = /* @__PURE__ */ i(function(o) {
      return typeof o.valueOf() != "symbol" ? !1 : l.test(a.call(o));
    }, "isRealSymbolObject"), e.exports = /* @__PURE__ */ i(function(o) {
      if (typeof o == "symbol")
        return !0;
      if (r.call(o) !== "[object Symbol]")
        return !1;
      try {
        return s(o);
      } catch {
        return !1;
      }
    }, "isSymbol3")) : e.exports = /* @__PURE__ */ i(function(o) {
      return !1;
    }, "isSymbol3");
    var a, l, s;
  }
}), Oe = tt(Se()), Ae = tt(we()), Pe = tt(Ee());
function xe(t) {
  return t != null && typeof t == "object" && Array.isArray(t) === !1;
}
i(xe, "isObject");
var Ce = typeof global == "object" && global && global.Object === Object && global, Ie = Ce, je = typeof self == "object" && self && self.Object ===
Object && self, Te = Ie || je || Function("return this")(), pt = Te, Fe = pt.Symbol, M = Fe, Rt = Object.prototype, Ne = Rt.hasOwnProperty, Re = Rt.
toString, W = M ? M.toStringTag : void 0;
function Me(t) {
  var e = Ne.call(t, W), r = t[W];
  try {
    t[W] = void 0;
    var n = !0;
  } catch {
  }
  var a = Re.call(t);
  return n && (e ? t[W] = r : delete t[W]), a;
}
i(Me, "getRawTag");
var $e = Me, ke = Object.prototype, De = ke.toString;
function Le(t) {
  return De.call(t);
}
i(Le, "objectToString");
var Ue = Le, ze = "[object Null]", We = "[object Undefined]", Pt = M ? M.toStringTag : void 0;
function Be(t) {
  return t == null ? t === void 0 ? We : ze : Pt && Pt in Object(t) ? $e(t) : Ue(t);
}
i(Be, "baseGetTag");
var Mt = Be;
function He(t) {
  return t != null && typeof t == "object";
}
i(He, "isObjectLike");
var qe = He, Ge = "[object Symbol]";
function Je(t) {
  return typeof t == "symbol" || qe(t) && Mt(t) == Ge;
}
i(Je, "isSymbol");
var yt = Je;
function Ve(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, a = Array(n); ++r < n; )
    a[r] = e(t[r], r, t);
  return a;
}
i(Ve, "arrayMap");
var Ke = Ve, Ye = Array.isArray, dt = Ye, Ze = 1 / 0, xt = M ? M.prototype : void 0, Ct = xt ? xt.toString : void 0;
function $t(t) {
  if (typeof t == "string")
    return t;
  if (dt(t))
    return Ke(t, $t) + "";
  if (yt(t))
    return Ct ? Ct.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Ze ? "-0" : e;
}
i($t, "baseToString");
var Xe = $t;
function Qe(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
i(Qe, "isObject2");
var kt = Qe, tr = "[object AsyncFunction]", er = "[object Function]", rr = "[object GeneratorFunction]", nr = "[object Proxy]";
function or(t) {
  if (!kt(t))
    return !1;
  var e = Mt(t);
  return e == er || e == rr || e == tr || e == nr;
}
i(or, "isFunction");
var ar = or, ir = pt["__core-js_shared__"], ft = ir, It = function() {
  var t = /[^.]+$/.exec(ft && ft.keys && ft.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function sr(t) {
  return !!It && It in t;
}
i(sr, "isMasked");
var lr = sr, cr = Function.prototype, fr = cr.toString;
function ur(t) {
  if (t != null) {
    try {
      return fr.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
i(ur, "toSource");
var pr = ur, yr = /[\\^$.*+?()[\]{}|]/g, dr = /^\[object .+?Constructor\]$/, hr = Function.prototype, gr = Object.prototype, mr = hr.toString,
vr = gr.hasOwnProperty, _r = RegExp(
  "^" + mr.call(vr).replace(yr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function br(t) {
  if (!kt(t) || lr(t))
    return !1;
  var e = ar(t) ? _r : dr;
  return e.test(pr(t));
}
i(br, "baseIsNative");
var Sr = br;
function wr(t, e) {
  return t?.[e];
}
i(wr, "getValue");
var Er = wr;
function Or(t, e) {
  var r = Er(t, e);
  return Sr(r) ? r : void 0;
}
i(Or, "getNative");
var Dt = Or;
function Ar(t, e) {
  return t === e || t !== t && e !== e;
}
i(Ar, "eq");
var Pr = Ar, xr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Cr = /^\w*$/;
function Ir(t, e) {
  if (dt(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || yt(t) ? !0 : Cr.test(t) || !xr.test(t) || e != null && t in Object(
  e);
}
i(Ir, "isKey");
var jr = Ir, Tr = Dt(Object, "create"), B = Tr;
function Fr() {
  this.__data__ = B ? B(null) : {}, this.size = 0;
}
i(Fr, "hashClear");
var Nr = Fr;
function Rr(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
i(Rr, "hashDelete");
var Mr = Rr, $r = "__lodash_hash_undefined__", kr = Object.prototype, Dr = kr.hasOwnProperty;
function Lr(t) {
  var e = this.__data__;
  if (B) {
    var r = e[t];
    return r === $r ? void 0 : r;
  }
  return Dr.call(e, t) ? e[t] : void 0;
}
i(Lr, "hashGet");
var Ur = Lr, zr = Object.prototype, Wr = zr.hasOwnProperty;
function Br(t) {
  var e = this.__data__;
  return B ? e[t] !== void 0 : Wr.call(e, t);
}
i(Br, "hashHas");
var Hr = Br, qr = "__lodash_hash_undefined__";
function Gr(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = B && e === void 0 ? qr : e, this;
}
i(Gr, "hashSet");
var Jr = Gr;
function $(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
i($, "Hash");
$.prototype.clear = Nr;
$.prototype.delete = Mr;
$.prototype.get = Ur;
$.prototype.has = Hr;
$.prototype.set = Jr;
var jt = $;
function Vr() {
  this.__data__ = [], this.size = 0;
}
i(Vr, "listCacheClear");
var Kr = Vr;
function Yr(t, e) {
  for (var r = t.length; r--; )
    if (Pr(t[r][0], e))
      return r;
  return -1;
}
i(Yr, "assocIndexOf");
var rt = Yr, Zr = Array.prototype, Xr = Zr.splice;
function Qr(t) {
  var e = this.__data__, r = rt(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : Xr.call(e, r, 1), --this.size, !0;
}
i(Qr, "listCacheDelete");
var tn = Qr;
function en(t) {
  var e = this.__data__, r = rt(e, t);
  return r < 0 ? void 0 : e[r][1];
}
i(en, "listCacheGet");
var rn = en;
function nn(t) {
  return rt(this.__data__, t) > -1;
}
i(nn, "listCacheHas");
var on = nn;
function an(t, e) {
  var r = this.__data__, n = rt(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
i(an, "listCacheSet");
var sn = an;
function k(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
i(k, "ListCache");
k.prototype.clear = Kr;
k.prototype.delete = tn;
k.prototype.get = rn;
k.prototype.has = on;
k.prototype.set = sn;
var ln = k, cn = Dt(pt, "Map"), fn = cn;
function un() {
  this.size = 0, this.__data__ = {
    hash: new jt(),
    map: new (fn || ln)(),
    string: new jt()
  };
}
i(un, "mapCacheClear");
var pn = un;
function yn(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
i(yn, "isKeyable");
var dn = yn;
function hn(t, e) {
  var r = t.__data__;
  return dn(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
i(hn, "getMapData");
var nt = hn;
function gn(t) {
  var e = nt(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
i(gn, "mapCacheDelete");
var mn = gn;
function vn(t) {
  return nt(this, t).get(t);
}
i(vn, "mapCacheGet");
var _n = vn;
function bn(t) {
  return nt(this, t).has(t);
}
i(bn, "mapCacheHas");
var Sn = bn;
function wn(t, e) {
  var r = nt(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
i(wn, "mapCacheSet");
var En = wn;
function D(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
i(D, "MapCache");
D.prototype.clear = pn;
D.prototype.delete = mn;
D.prototype.get = _n;
D.prototype.has = Sn;
D.prototype.set = En;
var Lt = D, On = "Expected a function";
function ht(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(On);
  var r = /* @__PURE__ */ i(function() {
    var n = arguments, a = e ? e.apply(this, n) : n[0], l = r.cache;
    if (l.has(a))
      return l.get(a);
    var s = t.apply(this, n);
    return r.cache = l.set(a, s) || l, s;
  }, "memoized");
  return r.cache = new (ht.Cache || Lt)(), r;
}
i(ht, "memoize");
ht.Cache = Lt;
var An = ht, Pn = 500;
function xn(t) {
  var e = An(t, function(n) {
    return r.size === Pn && r.clear(), n;
  }), r = e.cache;
  return e;
}
i(xn, "memoizeCapped");
var Cn = xn, In = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, jn = /\\(\\)?/g, Tn = Cn(
function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(In, function(r, n, a, l) {
    e.push(a ? l.replace(jn, "$1") : n || r);
  }), e;
}), Fn = Tn;
function Nn(t) {
  return t == null ? "" : Xe(t);
}
i(Nn, "toString");
var Rn = Nn;
function Mn(t, e) {
  return dt(t) ? t : jr(t, e) ? [t] : Fn(Rn(t));
}
i(Mn, "castPath");
var $n = Mn, kn = 1 / 0;
function Dn(t) {
  if (typeof t == "string" || yt(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -kn ? "-0" : e;
}
i(Dn, "toKey");
var Ln = Dn;
function Un(t, e) {
  e = $n(e, t);
  for (var r = 0, n = e.length; t != null && r < n; )
    t = t[Ln(e[r++])];
  return r && r == n ? t : void 0;
}
i(Un, "baseGet");
var zn = Un;
function Wn(t, e, r) {
  var n = t == null ? void 0 : zn(t, e);
  return n === void 0 ? r : n;
}
i(Wn, "get");
var Bn = Wn, et = xe, Hn = /* @__PURE__ */ i((t) => {
  let e = null, r = !1, n = !1, a = !1, l = "";
  if (t.indexOf("//") >= 0 || t.indexOf("/*") >= 0)
    for (let s = 0; s < t.length; s += 1)
      !e && !r && !n && !a ? t[s] === '"' || t[s] === "'" || t[s] === "`" ? e = t[s] : t[s] === "/" && t[s + 1] === "*" ? r = !0 : t[s] === "\
/" && t[s + 1] === "/" ? n = !0 : t[s] === "/" && t[s + 1] !== "/" && (a = !0) : (e && (t[s] === e && t[s - 1] !== "\\" || t[s] === `
` && e !== "`") && (e = null), a && (t[s] === "/" && t[s - 1] !== "\\" || t[s] === `
`) && (a = !1), r && t[s - 1] === "/" && t[s - 2] === "*" && (r = !1), n && t[s] === `
` && (n = !1)), !r && !n && (l += t[s]);
  else
    l = t;
  return l;
}, "removeCodeComments"), qn = (0, Ut.default)(1e4)(
  (t) => Hn(t).replace(/\n\s*/g, "").trim()
), Gn = /* @__PURE__ */ i(function(e, r) {
  let n = r.slice(0, r.indexOf("{")), a = r.slice(r.indexOf("{"));
  if (n.includes("=>") || n.includes("function"))
    return r;
  let l = n;
  return l = l.replace(e, "function"), l + a;
}, "convertShorthandMethods2"), Jn = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/, H = /* @__PURE__ */ i((t) => t.match(/^[\[\{\"\}].*[\]\}\"]$/),
"isJSON");
function zt(t) {
  if (!et(t))
    return t;
  let e = t, r = !1;
  return typeof Event < "u" && t instanceof Event && (e = Et(e), r = !0), e = Object.keys(e).reduce((n, a) => {
    try {
      e[a] && e[a].toJSON, n[a] = e[a];
    } catch {
      r = !0;
    }
    return n;
  }, {}), r ? e : t;
}
i(zt, "convertUnconventionalData");
var Vn = /* @__PURE__ */ i(function(e) {
  let r, n, a, l;
  return /* @__PURE__ */ i(function(c, o) {
    try {
      if (c === "")
        return l = [], r = /* @__PURE__ */ new Map([[o, "[]"]]), n = /* @__PURE__ */ new Map(), a = [], o;
      let h = n.get(this) || this;
      for (; a.length && h !== a[0]; )
        a.shift(), l.pop();
      if (typeof o == "boolean")
        return o;
      if (o === void 0)
        return e.allowUndefined ? "_undefined_" : void 0;
      if (o === null)
        return null;
      if (typeof o == "number")
        return o === -1 / 0 ? "_-Infinity_" : o === 1 / 0 ? "_Infinity_" : Number.isNaN(o) ? "_NaN_" : o;
      if (typeof o == "bigint")
        return `_bigint_${o.toString()}`;
      if (typeof o == "string")
        return Jn.test(o) ? e.allowDate ? `_date_${o}` : void 0 : o;
      if ((0, Oe.default)(o))
        return e.allowRegExp ? `_regexp_${o.flags}|${o.source}` : void 0;
      if ((0, Ae.default)(o)) {
        if (!e.allowFunction)
          return;
        let { name: p } = o, d = o.toString();
        return d.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        ) ? `_function_${p}|${(() => {
        }).toString()}` : `_function_${p}|${qn(Gn(c, d))}`;
      }
      if ((0, Pe.default)(o)) {
        if (!e.allowSymbol)
          return;
        let p = Symbol.keyFor(o);
        return p !== void 0 ? `_gsymbol_${p}` : `_symbol_${o.toString().slice(7, -1)}`;
      }
      if (a.length >= e.maxDepth)
        return Array.isArray(o) ? `[Array(${o.length})]` : "[Object]";
      if (o === this)
        return `_duplicate_${JSON.stringify(l)}`;
      if (o instanceof Error && e.allowError)
        return {
          __isConvertedError__: !0,
          errorProperties: {
            ...o.cause ? { cause: o.cause } : {},
            ...o,
            name: o.name,
            message: o.message,
            stack: o.stack,
            "_constructor-name_": o.constructor.name
          }
        };
      if (o.constructor && o.constructor.name && o.constructor.name !== "Object" && !Array.isArray(o) && !e.allowClass)
        return;
      let u = r.get(o);
      if (!u) {
        let p = Array.isArray(o) ? o : zt(o);
        if (o.constructor && o.constructor.name && o.constructor.name !== "Object" && !Array.isArray(o) && e.allowClass)
          try {
            Object.assign(p, { "_constructor-name_": o.constructor.name });
          } catch {
          }
        return l.push(c), a.unshift(p), r.set(o, JSON.stringify(l)), o !== p && n.set(o, p), p;
      }
      return `_duplicate_${u}`;
    } catch {
      return;
    }
  }, "replace");
}, "replacer2"), Kn = /* @__PURE__ */ i(function reviver(options) {
  let refs = [], root;
  return /* @__PURE__ */ i(function revive(key, value) {
    if (key === "" && (root = value, refs.forEach(({ target: t, container: e, replacement: r }) => {
      let n = H(r) ? JSON.parse(r) : r.split(".");
      n.length === 0 ? e[t] = root : e[t] = Bn(root, n);
    })), key === "_constructor-name_")
      return value;
    if (et(value) && value.__isConvertedError__) {
      let { message: t, ...e } = value.errorProperties, r = new Error(t);
      return Object.assign(r, e), r;
    }
    if (et(value) && value["_constructor-name_"] && options.allowFunction) {
      let t = value["_constructor-name_"];
      if (t !== "Object") {
        let e = new Function(`return function ${t.replace(/[^a-zA-Z0-9$_]+/g, "")}(){}`)();
        Object.setPrototypeOf(value, new e());
      }
      return delete value["_constructor-name_"], value;
    }
    if (typeof value == "string" && value.startsWith("_function_") && options.allowFunction) {
      let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [], sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, "");
      if (!options.lazyEval)
        return eval(`(${sourceSanitized})`);
      let result = /* @__PURE__ */ i((...args) => {
        let f = eval(`(${sourceSanitized})`);
        return f(...args);
      }, "result");
      return Object.defineProperty(result, "toString", {
        value: /* @__PURE__ */ i(() => sourceSanitized, "value")
      }), Object.defineProperty(result, "name", {
        value: name
      }), result;
    }
    if (typeof value == "string" && value.startsWith("_regexp_") && options.allowRegExp) {
      let [, t, e] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
      return new RegExp(e, t);
    }
    return typeof value == "string" && value.startsWith("_date_") && options.allowDate ? new Date(value.replace("_date_", "")) : typeof value ==
    "string" && value.startsWith("_duplicate_") ? (refs.push({ target: key, container: this, replacement: value.replace(/^_duplicate_/, "") }),
    null) : typeof value == "string" && value.startsWith("_symbol_") && options.allowSymbol ? Symbol(value.replace("_symbol_", "")) : typeof value ==
    "string" && value.startsWith("_gsymbol_") && options.allowSymbol ? Symbol.for(value.replace("_gsymbol_", "")) : typeof value == "string" &&
    value === "_-Infinity_" ? -1 / 0 : typeof value == "string" && value === "_Infinity_" ? 1 / 0 : typeof value == "string" && value === "_\
NaN_" ? NaN : typeof value == "string" && value.startsWith("_bigint_") && typeof BigInt == "function" ? BigInt(value.replace("_bigint_", "")) :
    value;
  }, "revive");
}, "reviver"), Wt = {
  maxDepth: 10,
  space: void 0,
  allowFunction: !0,
  allowRegExp: !0,
  allowDate: !0,
  allowClass: !0,
  allowError: !0,
  allowUndefined: !0,
  allowSymbol: !0,
  lazyEval: !0
}, ot = /* @__PURE__ */ i((t, e = {}) => {
  let r = { ...Wt, ...e };
  return JSON.stringify(zt(t), Vn(r), e.space);
}, "stringify"), Yn = /* @__PURE__ */ i(() => {
  let t = /* @__PURE__ */ new Map();
  return /* @__PURE__ */ i(function e(r) {
    et(r) && Object.entries(r).forEach(([n, a]) => {
      a === "_undefined_" ? r[n] = void 0 : t.get(a) || (t.set(a, !0), e(a));
    }), Array.isArray(r) && r.forEach((n, a) => {
      n === "_undefined_" ? (t.set(n, !0), r[a] = void 0) : t.get(n) || (t.set(n, !0), e(n));
    });
  }, "mutateUndefined");
}, "mutator"), at = /* @__PURE__ */ i((t, e = {}) => {
  let r = { ...Wt, ...e }, n = JSON.parse(t, Kn(r));
  return Yn()(n), n;
}, "parse");

// ../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var Zn = !1, gt = "Invariant failed";
function q(t, e) {
  if (!t) {
    if (Zn)
      throw new Error(gt);
    var r = typeof e == "function" ? e() : e, n = r ? "".concat(gt, ": ").concat(r) : gt;
    throw new Error(n);
  }
}
i(q, "invariant");

// src/channels/postmessage/getEventSourceUrl.ts
import { logger as Xn } from "@storybook/core/client-logger";
var Bt = /* @__PURE__ */ i((t) => {
  let e = Array.from(
    document.querySelectorAll("iframe[data-is-storybook]")
  ), [r, ...n] = e.filter((l) => {
    try {
      return l.contentWindow?.location.origin === t.source.location.origin && l.contentWindow?.location.pathname === t.source.location.pathname;
    } catch {
    }
    try {
      return l.contentWindow === t.source;
    } catch {
    }
    let s = l.getAttribute("src"), c;
    try {
      if (!s)
        return !1;
      ({ origin: c } = new URL(s, document.location.toString()));
    } catch {
      return !1;
    }
    return c === t.origin;
  }), a = r?.getAttribute("src");
  if (a && n.length === 0) {
    let { protocol: l, host: s, pathname: c } = new URL(a, document.location.toString());
    return `${l}//${s}${c}`;
  }
  return n.length > 0 && Xn.error("found multiple candidates for event source"), null;
}, "getEventSourceUrl");

// src/channels/postmessage/index.ts
var { document: mt, location: vt } = b, Gt = "storybook-channel", to = { allowFunction: !1, maxDepth: 25 }, _t = class _t {
  constructor(e) {
    this.config = e;
    this.connected = !1;
    if (this.buffer = [], typeof b?.addEventListener == "function" && b.addEventListener("message", this.handleEvent.bind(this), !1), e.page !==
    "manager" && e.page !== "preview")
      throw new Error(`postmsg-channel: "config.page" cannot be "${e.page}"`);
  }
  setHandler(e) {
    this.handler = (...r) => {
      e.apply(this, r), !this.connected && this.getLocalFrame().length && (this.flush(), this.connected = !0);
    };
  }
  /**
   * Sends `event` to the associated window. If the window does not yet exist the event will be
   * stored in a buffer and sent when the window exists.
   *
   * @param event
   */
  send(e, r) {
    let {
      target: n,
      // telejson options
      allowRegExp: a,
      allowFunction: l,
      allowSymbol: s,
      allowDate: c,
      allowError: o,
      allowUndefined: h,
      allowClass: u,
      maxDepth: p,
      space: d,
      lazyEval: g
    } = r || {}, y = Object.fromEntries(
      Object.entries({
        allowRegExp: a,
        allowFunction: l,
        allowSymbol: s,
        allowDate: c,
        allowError: o,
        allowUndefined: h,
        allowClass: u,
        maxDepth: p,
        space: d,
        lazyEval: g
      }).filter(([I, P]) => typeof P < "u")
    ), m = {
      ...to,
      ...b.CHANNEL_OPTIONS || {},
      ...y
    }, v = this.getFrames(n), C = new URLSearchParams(vt?.search || ""), w = ot(
      {
        key: Gt,
        event: e,
        refId: C.get("refId")
      },
      m
    );
    return v.length ? (this.buffer.length && this.flush(), v.forEach((I) => {
      try {
        I.postMessage(w, "*");
      } catch {
        Ht.error("sending over postmessage fail");
      }
    }), Promise.resolve(null)) : new Promise((I, P) => {
      this.buffer.push({ event: e, resolve: I, reject: P });
    });
  }
  flush() {
    let { buffer: e } = this;
    this.buffer = [], e.forEach((r) => {
      this.send(r.event).then(r.resolve).catch(r.reject);
    });
  }
  getFrames(e) {
    if (this.config.page === "manager") {
      let n = Array.from(
        mt.querySelectorAll("iframe[data-is-storybook][data-is-loaded]")
      ).flatMap((a) => {
        try {
          return a.contentWindow && a.dataset.isStorybook !== void 0 && a.id === e ? [a.contentWindow] : [];
        } catch {
          return [];
        }
      });
      return n?.length ? n : this.getCurrentFrames();
    }
    return b && b.parent && b.parent !== b.self ? [b.parent] : [];
  }
  getCurrentFrames() {
    return this.config.page === "manager" ? Array.from(
      mt.querySelectorAll('[data-is-storybook="true"]')
    ).flatMap((r) => r.contentWindow ? [r.contentWindow] : []) : b && b.parent ? [b.parent] : [];
  }
  getLocalFrame() {
    return this.config.page === "manager" ? Array.from(
      mt.querySelectorAll("#storybook-preview-iframe")
    ).flatMap((r) => r.contentWindow ? [r.contentWindow] : []) : b && b.parent ? [b.parent] : [];
  }
  handleEvent(e) {
    try {
      let { data: r } = e, { key: n, event: a, refId: l } = typeof r == "string" && H(r) ? at(r, b.CHANNEL_OPTIONS || {}) : r;
      if (n === Gt) {
        let s = this.config.page === "manager" ? '<span style="color: #37D5D3; background: black"> manager </span>' : '<span style="color: #\
1EA7FD; background: black"> preview </span>', c = Object.values(Qn).includes(a.type) ? `<span style="color: #FF4785">${a.type}</span>` : `<s\
pan style="color: #FFAE00">${a.type}</span>`;
        if (l && (a.refId = l), a.source = this.config.page === "preview" ? e.origin : Bt(e), !a.source) {
          qt.error(
            `${s} received ${c} but was unable to determine the source of the event`
          );
          return;
        }
        let o = `${s} received ${c} (${r.length})`;
        qt.debug(
          vt.origin !== a.source ? o : `${o} <span style="color: gray">(on ${vt.origin} from ${a.source})</span>`,
          ...a.args
        ), q(this.handler, "ChannelHandler should be set"), this.handler(a);
      }
    } catch (r) {
      Ht.error(r);
    }
  }
};
i(_t, "PostMessageTransport");
var G = _t;

// src/channels/websocket/index.ts
import * as Jt from "@storybook/core/core-events";
var { WebSocket: eo } = b, bt = class bt {
  constructor({ url: e, onError: r, page: n }) {
    this.buffer = [];
    this.isReady = !1;
    this.socket = new eo(e), this.socket.onopen = () => {
      this.isReady = !0, this.flush();
    }, this.socket.onmessage = ({ data: a }) => {
      let l = typeof a == "string" && H(a) ? at(a) : a;
      q(this.handler, "WebsocketTransport handler should be set"), this.handler(l);
    }, this.socket.onerror = (a) => {
      r && r(a);
    }, this.socket.onclose = () => {
      q(this.handler, "WebsocketTransport handler should be set"), this.handler({ type: Jt.CHANNEL_WS_DISCONNECT, args: [], from: n || "prev\
iew" });
    };
  }
  setHandler(e) {
    this.handler = e;
  }
  send(e) {
    this.isReady ? this.sendNow(e) : this.sendLater(e);
  }
  sendLater(e) {
    this.buffer.push(e);
  }
  sendNow(e) {
    let r = ot(e, {
      maxDepth: 15,
      allowFunction: !1,
      ...b.CHANNEL_OPTIONS
    });
    this.socket.send(r);
  }
  flush() {
    let { buffer: e } = this;
    this.buffer = [], e.forEach((r) => this.send(r));
  }
};
i(bt, "WebsocketTransport");
var J = bt;

// src/channels/index.ts
var { CONFIG_TYPE: ro } = b, Mo = z;
function $o({ page: t, extraTransports: e = [] }) {
  let r = [new G({ page: t }), ...e];
  if (ro === "DEVELOPMENT") {
    let n = window.location.protocol === "http:" ? "ws" : "wss", { hostname: a, port: l } = window.location, s = `${n}://${a}:${l}/storybook\
-server-channel`;
    r.push(new J({ url: s, onError: /* @__PURE__ */ i(() => {
    }, "onError"), page: t }));
  }
  return new z({ transports: r });
}
i($o, "createBrowserChannel");
export {
  z as Channel,
  G as PostMessageTransport,
  J as WebsocketTransport,
  $o as createBrowserChannel,
  Mo as default
};
