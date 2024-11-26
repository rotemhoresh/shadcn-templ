"use strict";
var Ce = Object.create;
var q = Object.defineProperty;
var Ae = Object.getOwnPropertyDescriptor;
var xe = Object.getOwnPropertyNames;
var Ie = Object.getPrototypeOf, je = Object.prototype.hasOwnProperty;
var a = (t, e) => q(t, "name", { value: e, configurable: !0 });
var z = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports), Te = (t, e) => {
  for (var r in e)
    q(t, r, { get: e[r], enumerable: !0 });
}, ie = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let o of xe(e))
      !je.call(t, o) && o !== r && q(t, o, { get: () => e[o], enumerable: !(n = Ae(e, o)) || n.enumerable });
  return t;
};
var j = (t, e, r) => (r = t != null ? Ce(Ie(t)) : {}, ie(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  e || !t || !t.__esModule ? q(r, "default", { value: t, enumerable: !0 }) : r,
  t
)), Me = (t) => ie(q({}, "__esModule", { value: !0 }), t);

// ../node_modules/@storybook/global/dist/index.js
var Z = z((et, le) => {
  "use strict";
  var Q = Object.defineProperty, Fe = Object.getOwnPropertyDescriptor, Ne = Object.getOwnPropertyNames, Re = Object.prototype.hasOwnProperty,
  De = /* @__PURE__ */ a((t, e) => {
    for (var r in e)
      Q(t, r, { get: e[r], enumerable: !0 });
  }, "__export"), $e = /* @__PURE__ */ a((t, e, r, n) => {
    if (e && typeof e == "object" || typeof e == "function")
      for (let o of Ne(e))
        !Re.call(t, o) && o !== r && Q(t, o, { get: /* @__PURE__ */ a(() => e[o], "get"), enumerable: !(n = Fe(e, o)) || n.enumerable });
    return t;
  }, "__copyProps"), ke = /* @__PURE__ */ a((t) => $e(Q({}, "__esModule", { value: !0 }), t), "__toCommonJS"), se = {};
  De(se, {
    global: /* @__PURE__ */ a(() => Le, "global")
  });
  le.exports = ke(se);
  var Le = (() => {
    let t;
    return typeof window < "u" ? t = window : typeof globalThis < "u" ? t = globalThis : typeof global < "u" ? t = global : typeof self < "u" ?
    t = self : t = {}, t;
  })();
});

// ../node_modules/map-or-similar/src/similar.js
var ue = z((ot, ce) => {
  function x() {
    return this.list = [], this.lastItem = void 0, this.size = 0, this;
  }
  a(x, "Similar");
  x.prototype.get = function(t) {
    var e;
    if (this.lastItem && this.isEqual(this.lastItem.key, t))
      return this.lastItem.val;
    if (e = this.indexOf(t), e >= 0)
      return this.lastItem = this.list[e], this.list[e].val;
  };
  x.prototype.set = function(t, e) {
    var r;
    return this.lastItem && this.isEqual(this.lastItem.key, t) ? (this.lastItem.val = e, this) : (r = this.indexOf(t), r >= 0 ? (this.lastItem =
    this.list[r], this.list[r].val = e, this) : (this.lastItem = { key: t, val: e }, this.list.push(this.lastItem), this.size++, this));
  };
  x.prototype.delete = function(t) {
    var e;
    if (this.lastItem && this.isEqual(this.lastItem.key, t) && (this.lastItem = void 0), e = this.indexOf(t), e >= 0)
      return this.size--, this.list.splice(e, 1)[0];
  };
  x.prototype.has = function(t) {
    var e;
    return this.lastItem && this.isEqual(this.lastItem.key, t) ? !0 : (e = this.indexOf(t), e >= 0 ? (this.lastItem = this.list[e], !0) : !1);
  };
  x.prototype.forEach = function(t, e) {
    var r;
    for (r = 0; r < this.size; r++)
      t.call(e || this, this.list[r].val, this.list[r].key, this);
  };
  x.prototype.indexOf = function(t) {
    var e;
    for (e = 0; e < this.size; e++)
      if (this.isEqual(this.list[e].key, t))
        return e;
    return -1;
  };
  x.prototype.isEqual = function(t, e) {
    return t === e || t !== t && e !== e;
  };
  ce.exports = x;
});

// ../node_modules/map-or-similar/src/map-or-similar.js
var pe = z((it, fe) => {
  fe.exports = function(t) {
    if (typeof Map != "function" || t) {
      var e = ue();
      return new e();
    } else
      return /* @__PURE__ */ new Map();
  };
});

// ../node_modules/memoizerific/src/memoizerific.js
var he = z((st, de) => {
  var ye = pe();
  de.exports = function(t) {
    var e = new ye(process.env.FORCE_SIMILAR_INSTEAD_OF_MAP === "true"), r = [];
    return function(n) {
      var o = /* @__PURE__ */ a(function() {
        var s = e, l, c, i = arguments.length - 1, d = Array(i + 1), p = !0, u;
        if ((o.numArgs || o.numArgs === 0) && o.numArgs !== i + 1)
          throw new Error("Memoizerific functions should always be called with the same number of arguments");
        for (u = 0; u < i; u++) {
          if (d[u] = {
            cacheItem: s,
            arg: arguments[u]
          }, s.has(arguments[u])) {
            s = s.get(arguments[u]);
            continue;
          }
          p = !1, l = new ye(process.env.FORCE_SIMILAR_INSTEAD_OF_MAP === "true"), s.set(arguments[u], l), s = l;
        }
        return p && (s.has(arguments[i]) ? c = s.get(arguments[i]) : p = !1), p || (c = n.apply(null, arguments), s.set(arguments[i], c)), t >
        0 && (d[i] = {
          cacheItem: s,
          arg: arguments[i]
        }, p ? qe(r, d) : r.push(d), r.length > t && ze(r.shift())), o.wasMemoized = p, o.numArgs = i + 1, c;
      }, "memoizerific");
      return o.limit = t, o.wasMemoized = !1, o.cache = e, o.lru = r, o;
    };
  };
  function qe(t, e) {
    var r = t.length, n = e.length, o, s, l;
    for (s = 0; s < r; s++) {
      for (o = !0, l = 0; l < n; l++)
        if (!Ge(t[s][l].arg, e[l].arg)) {
          o = !1;
          break;
        }
      if (o)
        break;
    }
    t.push(t.splice(s, 1)[0]);
  }
  a(qe, "moveToMostRecentLru");
  function ze(t) {
    var e = t.length, r = t[e - 1], n, o;
    for (r.cacheItem.delete(r.arg), o = e - 2; o >= 0 && (r = t[o], n = r.cacheItem.get(r.arg), !n || !n.size); o--)
      r.cacheItem.delete(r.arg);
  }
  a(ze, "removeCachedResult");
  function Ge(t, e) {
    return t === e || t !== t && e !== e;
  }
  a(Ge, "isEqual");
});

// ../node_modules/telejson/dist/index.js
var ee = z((exports, module) => {
  "use strict";
  var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.
  getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJS = /* @__PURE__ */ a(
  (t, e) => /* @__PURE__ */ a(function() {
    return e || (0, t[__getOwnPropNames(t)[0]])((e = { exports: {} }).exports, e), e.exports;
  }, "__require"), "__commonJS"), __export = /* @__PURE__ */ a((t, e) => {
    for (var r in e)
      __defProp(t, r, { get: e[r], enumerable: !0 });
  }, "__export"), __copyProps = /* @__PURE__ */ a((t, e, r, n) => {
    if (e && typeof e == "object" || typeof e == "function")
      for (let o of __getOwnPropNames(e))
        !__hasOwnProp.call(t, o) && o !== r && __defProp(t, o, { get: /* @__PURE__ */ a(() => e[o], "get"), enumerable: !(n = __getOwnPropDesc(
        e, o)) || n.enumerable });
    return t;
  }, "__copyProps"), __toESM = /* @__PURE__ */ a((t, e, r) => (r = t != null ? __create(__getProtoOf(t)) : {}, __copyProps(
    e || !t || !t.__esModule ? __defProp(r, "default", { value: t, enumerable: !0 }) : r,
    t
  )), "__toESM"), __toCommonJS = /* @__PURE__ */ a((t) => __copyProps(__defProp({}, "__esModule", { value: !0 }), t), "__toCommonJS"), require_shams = __commonJS(
  {
    "node_modules/has-symbols/shams.js"(t, e) {
      "use strict";
      e.exports = /* @__PURE__ */ a(function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
          return !1;
        if (typeof Symbol.iterator == "symbol")
          return !0;
        var n = {}, o = Symbol("test"), s = Object(o);
        if (typeof o == "string" || Object.prototype.toString.call(o) !== "[object Symbol]" || Object.prototype.toString.call(s) !== "[objec\
t Symbol]")
          return !1;
        var l = 42;
        n[o] = l;
        for (o in n)
          return !1;
        if (typeof Object.keys == "function" && Object.keys(n).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(
        n).length !== 0)
          return !1;
        var c = Object.getOwnPropertySymbols(n);
        if (c.length !== 1 || c[0] !== o || !Object.prototype.propertyIsEnumerable.call(n, o))
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var i = Object.getOwnPropertyDescriptor(n, o);
          if (i.value !== l || i.enumerable !== !0)
            return !1;
        }
        return !0;
      }, "hasSymbols");
    }
  }), require_has_symbols = __commonJS({
    "node_modules/has-symbols/index.js"(t, e) {
      "use strict";
      var r = typeof Symbol < "u" && Symbol, n = require_shams();
      e.exports = /* @__PURE__ */ a(function() {
        return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 :
        n();
      }, "hasNativeSymbols");
    }
  }), require_implementation = __commonJS({
    "node_modules/function-bind/implementation.js"(t, e) {
      "use strict";
      var r = "Function.prototype.bind called on incompatible ", n = Array.prototype.slice, o = Object.prototype.toString, s = "[object Func\
tion]";
      e.exports = /* @__PURE__ */ a(function(c) {
        var i = this;
        if (typeof i != "function" || o.call(i) !== s)
          throw new TypeError(r + i);
        for (var d = n.call(arguments, 1), p, u = /* @__PURE__ */ a(function() {
          if (this instanceof p) {
            var P = i.apply(
              this,
              d.concat(n.call(arguments))
            );
            return Object(P) === P ? P : this;
          } else
            return i.apply(
              c,
              d.concat(n.call(arguments))
            );
        }, "binder"), g = Math.max(0, i.length - d.length), h = [], m = 0; m < g; m++)
          h.push("$" + m);
        if (p = Function("binder", "return function (" + h.join(",") + "){ return binder.apply(this,arguments); }")(u), i.prototype) {
          var C = /* @__PURE__ */ a(function() {
          }, "Empty2");
          C.prototype = i.prototype, p.prototype = new C(), C.prototype = null;
        }
        return p;
      }, "bind");
    }
  }), require_function_bind = __commonJS({
    "node_modules/function-bind/index.js"(t, e) {
      "use strict";
      var r = require_implementation();
      e.exports = Function.prototype.bind || r;
    }
  }), require_src = __commonJS({
    "node_modules/has/src/index.js"(t, e) {
      "use strict";
      var r = require_function_bind();
      e.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    }
  }), require_get_intrinsic = __commonJS({
    "node_modules/get-intrinsic/index.js"(t, e) {
      "use strict";
      var r, n = SyntaxError, o = Function, s = TypeError, l = /* @__PURE__ */ a(function(w) {
        try {
          return o('"use strict"; return (' + w + ").constructor;")();
        } catch {
        }
      }, "getEvalledConstructor"), c = Object.getOwnPropertyDescriptor;
      if (c)
        try {
          c({}, "");
        } catch {
          c = null;
        }
      var i = /* @__PURE__ */ a(function() {
        throw new s();
      }, "throwTypeError"), d = c ? function() {
        try {
          return arguments.callee, i;
        } catch {
          try {
            return c(arguments, "callee").get;
          } catch {
            return i;
          }
        }
      }() : i, p = require_has_symbols()(), u = Object.getPrototypeOf || function(w) {
        return w.__proto__;
      }, g = {}, h = typeof Uint8Array > "u" ? r : u(Uint8Array), m = {
        "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
        "%ArrayIteratorPrototype%": p ? u([][Symbol.iterator]()) : r,
        "%AsyncFromSyncIteratorPrototype%": r,
        "%AsyncFunction%": g,
        "%AsyncGenerator%": g,
        "%AsyncGeneratorFunction%": g,
        "%AsyncIteratorPrototype%": g,
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
        "%Function%": o,
        "%GeneratorFunction%": g,
        "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": p ? u(u([][Symbol.iterator]())) : r,
        "%JSON%": typeof JSON == "object" ? JSON : r,
        "%Map%": typeof Map > "u" ? r : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !p ? r : u((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
        "%SetIteratorPrototype%": typeof Set > "u" || !p ? r : u((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": p ? u(""[Symbol.iterator]()) : r,
        "%Symbol%": p ? Symbol : r,
        "%SyntaxError%": n,
        "%ThrowTypeError%": d,
        "%TypedArray%": h,
        "%TypeError%": s,
        "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet
      }, C = /* @__PURE__ */ a(function w(y) {
        var b;
        if (y === "%AsyncFunction%")
          b = l("async function () {}");
        else if (y === "%GeneratorFunction%")
          b = l("function* () {}");
        else if (y === "%AsyncGeneratorFunction%")
          b = l("async function* () {}");
        else if (y === "%AsyncGenerator%") {
          var _ = w("%AsyncGeneratorFunction%");
          _ && (b = _.prototype);
        } else if (y === "%AsyncIteratorPrototype%") {
          var S = w("%AsyncGenerator%");
          S && (b = u(S.prototype));
        }
        return m[y] = b, b;
      }, "doEval2"), P = {
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
      }, I = require_function_bind(), T = require_src(), M = I.call(Function.call, Array.prototype.concat), F = I.call(Function.apply, Array.
      prototype.splice), ae = I.call(Function.call, String.prototype.replace), W = I.call(Function.call, String.prototype.slice), Se = I.call(
      Function.call, RegExp.prototype.exec), Oe = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      Pe = /\\(\\)?/g, we = /* @__PURE__ */ a(function(y) {
        var b = W(y, 0, 1), _ = W(y, -1);
        if (b === "%" && _ !== "%")
          throw new n("invalid intrinsic syntax, expected closing `%`");
        if (_ === "%" && b !== "%")
          throw new n("invalid intrinsic syntax, expected opening `%`");
        var S = [];
        return ae(y, Oe, function(E, N, O, J) {
          S[S.length] = O ? ae(J, Pe, "$1") : N || E;
        }), S;
      }, "stringToPath3"), Ee = /* @__PURE__ */ a(function(y, b) {
        var _ = y, S;
        if (T(P, _) && (S = P[_], _ = "%" + S[0] + "%"), T(m, _)) {
          var E = m[_];
          if (E === g && (E = C(_)), typeof E > "u" && !b)
            throw new s("intrinsic " + y + " exists, but is not available. Please file an issue!");
          return {
            alias: S,
            name: _,
            value: E
          };
        }
        throw new n("intrinsic " + y + " does not exist!");
      }, "getBaseIntrinsic2");
      e.exports = /* @__PURE__ */ a(function(y, b) {
        if (typeof y != "string" || y.length === 0)
          throw new s("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof b != "boolean")
          throw new s('"allowMissing" argument must be a boolean');
        if (Se(/^%?[^%]*%?$/, y) === null)
          throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var _ = we(y), S = _.length > 0 ? _[0] : "", E = Ee("%" + S + "%", b), N = E.name, O = E.value, J = !1, X = E.alias;
        X && (S = X[0], F(_, M([0, 1], X)));
        for (var B = 1, U = !0; B < _.length; B += 1) {
          var A = _[B], K = W(A, 0, 1), V = W(A, -1);
          if ((K === '"' || K === "'" || K === "`" || V === '"' || V === "'" || V === "`") && K !== V)
            throw new n("property names with quotes must have matching quotes");
          if ((A === "constructor" || !U) && (J = !0), S += "." + A, N = "%" + S + "%", T(m, N))
            O = m[N];
          else if (O != null) {
            if (!(A in O)) {
              if (!b)
                throw new s("base intrinsic for " + y + " exists, but the property is not available.");
              return;
            }
            if (c && B + 1 >= _.length) {
              var Y = c(O, A);
              U = !!Y, U && "get" in Y && !("originalValue" in Y.get) ? O = Y.get : O = O[A];
            } else
              U = T(O, A), O = O[A];
            U && !J && (m[N] = O);
          }
        }
        return O;
      }, "GetIntrinsic");
    }
  }), require_call_bind = __commonJS({
    "node_modules/call-bind/index.js"(t, e) {
      "use strict";
      var r = require_function_bind(), n = require_get_intrinsic(), o = n("%Function.prototype.apply%"), s = n("%Function.prototype.call%"),
      l = n("%Reflect.apply%", !0) || r.call(s, o), c = n("%Object.getOwnPropertyDescriptor%", !0), i = n("%Object.defineProperty%", !0), d = n(
      "%Math.max%");
      if (i)
        try {
          i({}, "a", { value: 1 });
        } catch {
          i = null;
        }
      e.exports = /* @__PURE__ */ a(function(g) {
        var h = l(r, s, arguments);
        if (c && i) {
          var m = c(h, "length");
          m.configurable && i(
            h,
            "length",
            { value: 1 + d(0, g.length - (arguments.length - 1)) }
          );
        }
        return h;
      }, "callBind");
      var p = /* @__PURE__ */ a(function() {
        return l(r, o, arguments);
      }, "applyBind2");
      i ? i(e.exports, "apply", { value: p }) : e.exports.apply = p;
    }
  }), require_callBound = __commonJS({
    "node_modules/call-bind/callBound.js"(t, e) {
      "use strict";
      var r = require_get_intrinsic(), n = require_call_bind(), o = n(r("String.prototype.indexOf"));
      e.exports = /* @__PURE__ */ a(function(l, c) {
        var i = r(l, !!c);
        return typeof i == "function" && o(l, ".prototype.") > -1 ? n(i) : i;
      }, "callBoundIntrinsic");
    }
  }), require_shams2 = __commonJS({
    "node_modules/has-tostringtag/shams.js"(t, e) {
      "use strict";
      var r = require_shams();
      e.exports = /* @__PURE__ */ a(function() {
        return r() && !!Symbol.toStringTag;
      }, "hasToStringTagShams");
    }
  }), require_is_regex = __commonJS({
    "node_modules/is-regex/index.js"(t, e) {
      "use strict";
      var r = require_callBound(), n = require_shams2()(), o, s, l, c;
      n && (o = r("Object.prototype.hasOwnProperty"), s = r("RegExp.prototype.exec"), l = {}, i = /* @__PURE__ */ a(function() {
        throw l;
      }, "throwRegexMarker"), c = {
        toString: i,
        valueOf: i
      }, typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = i));
      var i, d = r("Object.prototype.toString"), p = Object.getOwnPropertyDescriptor, u = "[object RegExp]";
      e.exports = /* @__PURE__ */ a(n ? function(h) {
        if (!h || typeof h != "object")
          return !1;
        var m = p(h, "lastIndex"), C = m && o(m, "value");
        if (!C)
          return !1;
        try {
          s(h, c);
        } catch (P) {
          return P === l;
        }
      } : function(h) {
        return !h || typeof h != "object" && typeof h != "function" ? !1 : d(h) === u;
      }, "isRegex");
    }
  }), require_is_function = __commonJS({
    "node_modules/is-function/index.js"(t, e) {
      e.exports = n;
      var r = Object.prototype.toString;
      function n(o) {
        if (!o)
          return !1;
        var s = r.call(o);
        return s === "[object Function]" || typeof o == "function" && s !== "[object RegExp]" || typeof window < "u" && (o === window.setTimeout ||
        o === window.alert || o === window.confirm || o === window.prompt);
      }
      a(n, "isFunction3");
    }
  }), require_is_symbol = __commonJS({
    "node_modules/is-symbol/index.js"(t, e) {
      "use strict";
      var r = Object.prototype.toString, n = require_has_symbols()();
      n ? (o = Symbol.prototype.toString, s = /^Symbol\(.*\)$/, l = /* @__PURE__ */ a(function(i) {
        return typeof i.valueOf() != "symbol" ? !1 : s.test(o.call(i));
      }, "isRealSymbolObject"), e.exports = /* @__PURE__ */ a(function(i) {
        if (typeof i == "symbol")
          return !0;
        if (r.call(i) !== "[object Symbol]")
          return !1;
        try {
          return l(i);
        } catch {
          return !1;
        }
      }, "isSymbol3")) : e.exports = /* @__PURE__ */ a(function(i) {
        return !1;
      }, "isSymbol3");
      var o, s, l;
    }
  }), src_exports = {};
  __export(src_exports, {
    isJSON: /* @__PURE__ */ a(() => isJSON, "isJSON"),
    parse: /* @__PURE__ */ a(() => parse, "parse"),
    replacer: /* @__PURE__ */ a(() => replacer, "replacer"),
    reviver: /* @__PURE__ */ a(() => reviver2, "reviver"),
    stringify: /* @__PURE__ */ a(() => stringify, "stringify")
  });
  module.exports = __toCommonJS(src_exports);
  var import_is_regex = __toESM(require_is_regex()), import_is_function = __toESM(require_is_function()), import_is_symbol = __toESM(require_is_symbol());
  function isObject(t) {
    return t != null && typeof t == "object" && Array.isArray(t) === !1;
  }
  a(isObject, "isObject");
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global, freeGlobal_default = freeGlobal, freeSelf = typeof self ==
  "object" && self && self.Object === Object && self, root2 = freeGlobal_default || freeSelf || Function("return this")(), root_default = root2,
  Symbol2 = root_default.Symbol, Symbol_default = Symbol2, objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, nativeObjectToString = objectProto.
  toString, symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(t) {
    var e = hasOwnProperty.call(t, symToStringTag), r = t[symToStringTag];
    try {
      t[symToStringTag] = void 0;
      var n = !0;
    } catch {
    }
    var o = nativeObjectToString.call(t);
    return n && (e ? t[symToStringTag] = r : delete t[symToStringTag]), o;
  }
  a(getRawTag, "getRawTag");
  var getRawTag_default = getRawTag, objectProto2 = Object.prototype, nativeObjectToString2 = objectProto2.toString;
  function objectToString(t) {
    return nativeObjectToString2.call(t);
  }
  a(objectToString, "objectToString");
  var objectToString_default = objectToString, nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag2 = Symbol_default ?
  Symbol_default.toStringTag : void 0;
  function baseGetTag(t) {
    return t == null ? t === void 0 ? undefinedTag : nullTag : symToStringTag2 && symToStringTag2 in Object(t) ? getRawTag_default(t) : objectToString_default(
    t);
  }
  a(baseGetTag, "baseGetTag");
  var baseGetTag_default = baseGetTag;
  function isObjectLike(t) {
    return t != null && typeof t == "object";
  }
  a(isObjectLike, "isObjectLike");
  var isObjectLike_default = isObjectLike, symbolTag = "[object Symbol]";
  function isSymbol(t) {
    return typeof t == "symbol" || isObjectLike_default(t) && baseGetTag_default(t) == symbolTag;
  }
  a(isSymbol, "isSymbol");
  var isSymbol_default = isSymbol;
  function arrayMap(t, e) {
    for (var r = -1, n = t == null ? 0 : t.length, o = Array(n); ++r < n; )
      o[r] = e(t[r], r, t);
    return o;
  }
  a(arrayMap, "arrayMap");
  var arrayMap_default = arrayMap, isArray = Array.isArray, isArray_default = isArray, INFINITY = 1 / 0, symbolProto = Symbol_default ? Symbol_default.
  prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString(t) {
    if (typeof t == "string")
      return t;
    if (isArray_default(t))
      return arrayMap_default(t, baseToString) + "";
    if (isSymbol_default(t))
      return symbolToString ? symbolToString.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -INFINITY ? "-0" : e;
  }
  a(baseToString, "baseToString");
  var baseToString_default = baseToString;
  function isObject2(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  a(isObject2, "isObject2");
  var isObject_default = isObject2, asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]",
  proxyTag = "[object Proxy]";
  function isFunction(t) {
    if (!isObject_default(t))
      return !1;
    var e = baseGetTag_default(t);
    return e == funcTag || e == genTag || e == asyncTag || e == proxyTag;
  }
  a(isFunction, "isFunction");
  var isFunction_default = isFunction, coreJsData = root_default["__core-js_shared__"], coreJsData_default = coreJsData, maskSrcKey = function() {
    var t = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }();
  function isMasked(t) {
    return !!maskSrcKey && maskSrcKey in t;
  }
  a(isMasked, "isMasked");
  var isMasked_default = isMasked, funcProto = Function.prototype, funcToString = funcProto.toString;
  function toSource(t) {
    if (t != null) {
      try {
        return funcToString.call(t);
      } catch {
      }
      try {
        return t + "";
      } catch {
      }
    }
    return "";
  }
  a(toSource, "toSource");
  var toSource_default = toSource, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto2 = Function.
  prototype, objectProto3 = Object.prototype, funcToString2 = funcProto2.toString, hasOwnProperty2 = objectProto3.hasOwnProperty, reIsNative = RegExp(
    "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
    "$1.*?") + "$"
  );
  function baseIsNative(t) {
    if (!isObject_default(t) || isMasked_default(t))
      return !1;
    var e = isFunction_default(t) ? reIsNative : reIsHostCtor;
    return e.test(toSource_default(t));
  }
  a(baseIsNative, "baseIsNative");
  var baseIsNative_default = baseIsNative;
  function getValue(t, e) {
    return t?.[e];
  }
  a(getValue, "getValue");
  var getValue_default = getValue;
  function getNative(t, e) {
    var r = getValue_default(t, e);
    return baseIsNative_default(r) ? r : void 0;
  }
  a(getNative, "getNative");
  var getNative_default = getNative;
  function eq(t, e) {
    return t === e || t !== t && e !== e;
  }
  a(eq, "eq");
  var eq_default = eq, reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
  function isKey(t, e) {
    if (isArray_default(t))
      return !1;
    var r = typeof t;
    return r == "number" || r == "symbol" || r == "boolean" || t == null || isSymbol_default(t) ? !0 : reIsPlainProp.test(t) || !reIsDeepProp.
    test(t) || e != null && t in Object(e);
  }
  a(isKey, "isKey");
  var isKey_default = isKey, nativeCreate = getNative_default(Object, "create"), nativeCreate_default = nativeCreate;
  function hashClear() {
    this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {}, this.size = 0;
  }
  a(hashClear, "hashClear");
  var hashClear_default = hashClear;
  function hashDelete(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
  }
  a(hashDelete, "hashDelete");
  var hashDelete_default = hashDelete, HASH_UNDEFINED = "__lodash_hash_undefined__", objectProto4 = Object.prototype, hasOwnProperty3 = objectProto4.
  hasOwnProperty;
  function hashGet(t) {
    var e = this.__data__;
    if (nativeCreate_default) {
      var r = e[t];
      return r === HASH_UNDEFINED ? void 0 : r;
    }
    return hasOwnProperty3.call(e, t) ? e[t] : void 0;
  }
  a(hashGet, "hashGet");
  var hashGet_default = hashGet, objectProto5 = Object.prototype, hasOwnProperty4 = objectProto5.hasOwnProperty;
  function hashHas(t) {
    var e = this.__data__;
    return nativeCreate_default ? e[t] !== void 0 : hasOwnProperty4.call(e, t);
  }
  a(hashHas, "hashHas");
  var hashHas_default = hashHas, HASH_UNDEFINED2 = "__lodash_hash_undefined__";
  function hashSet(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = nativeCreate_default && e === void 0 ? HASH_UNDEFINED2 : e, this;
  }
  a(hashSet, "hashSet");
  var hashSet_default = hashSet;
  function Hash(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  a(Hash, "Hash");
  Hash.prototype.clear = hashClear_default;
  Hash.prototype.delete = hashDelete_default;
  Hash.prototype.get = hashGet_default;
  Hash.prototype.has = hashHas_default;
  Hash.prototype.set = hashSet_default;
  var Hash_default = Hash;
  function listCacheClear() {
    this.__data__ = [], this.size = 0;
  }
  a(listCacheClear, "listCacheClear");
  var listCacheClear_default = listCacheClear;
  function assocIndexOf(t, e) {
    for (var r = t.length; r--; )
      if (eq_default(t[r][0], e))
        return r;
    return -1;
  }
  a(assocIndexOf, "assocIndexOf");
  var assocIndexOf_default = assocIndexOf, arrayProto = Array.prototype, splice = arrayProto.splice;
  function listCacheDelete(t) {
    var e = this.__data__, r = assocIndexOf_default(e, t);
    if (r < 0)
      return !1;
    var n = e.length - 1;
    return r == n ? e.pop() : splice.call(e, r, 1), --this.size, !0;
  }
  a(listCacheDelete, "listCacheDelete");
  var listCacheDelete_default = listCacheDelete;
  function listCacheGet(t) {
    var e = this.__data__, r = assocIndexOf_default(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  a(listCacheGet, "listCacheGet");
  var listCacheGet_default = listCacheGet;
  function listCacheHas(t) {
    return assocIndexOf_default(this.__data__, t) > -1;
  }
  a(listCacheHas, "listCacheHas");
  var listCacheHas_default = listCacheHas;
  function listCacheSet(t, e) {
    var r = this.__data__, n = assocIndexOf_default(r, t);
    return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
  }
  a(listCacheSet, "listCacheSet");
  var listCacheSet_default = listCacheSet;
  function ListCache(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  a(ListCache, "ListCache");
  ListCache.prototype.clear = listCacheClear_default;
  ListCache.prototype.delete = listCacheDelete_default;
  ListCache.prototype.get = listCacheGet_default;
  ListCache.prototype.has = listCacheHas_default;
  ListCache.prototype.set = listCacheSet_default;
  var ListCache_default = ListCache, Map2 = getNative_default(root_default, "Map"), Map_default = Map2;
  function mapCacheClear() {
    this.size = 0, this.__data__ = {
      hash: new Hash_default(),
      map: new (Map_default || ListCache_default)(),
      string: new Hash_default()
    };
  }
  a(mapCacheClear, "mapCacheClear");
  var mapCacheClear_default = mapCacheClear;
  function isKeyable(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  a(isKeyable, "isKeyable");
  var isKeyable_default = isKeyable;
  function getMapData(t, e) {
    var r = t.__data__;
    return isKeyable_default(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  a(getMapData, "getMapData");
  var getMapData_default = getMapData;
  function mapCacheDelete(t) {
    var e = getMapData_default(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
  }
  a(mapCacheDelete, "mapCacheDelete");
  var mapCacheDelete_default = mapCacheDelete;
  function mapCacheGet(t) {
    return getMapData_default(this, t).get(t);
  }
  a(mapCacheGet, "mapCacheGet");
  var mapCacheGet_default = mapCacheGet;
  function mapCacheHas(t) {
    return getMapData_default(this, t).has(t);
  }
  a(mapCacheHas, "mapCacheHas");
  var mapCacheHas_default = mapCacheHas;
  function mapCacheSet(t, e) {
    var r = getMapData_default(this, t), n = r.size;
    return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
  }
  a(mapCacheSet, "mapCacheSet");
  var mapCacheSet_default = mapCacheSet;
  function MapCache(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  a(MapCache, "MapCache");
  MapCache.prototype.clear = mapCacheClear_default;
  MapCache.prototype.delete = mapCacheDelete_default;
  MapCache.prototype.get = mapCacheGet_default;
  MapCache.prototype.has = mapCacheHas_default;
  MapCache.prototype.set = mapCacheSet_default;
  var MapCache_default = MapCache, FUNC_ERROR_TEXT = "Expected a function";
  function memoize(t, e) {
    if (typeof t != "function" || e != null && typeof e != "function")
      throw new TypeError(FUNC_ERROR_TEXT);
    var r = /* @__PURE__ */ a(function() {
      var n = arguments, o = e ? e.apply(this, n) : n[0], s = r.cache;
      if (s.has(o))
        return s.get(o);
      var l = t.apply(this, n);
      return r.cache = s.set(o, l) || s, l;
    }, "memoized");
    return r.cache = new (memoize.Cache || MapCache_default)(), r;
  }
  a(memoize, "memoize");
  memoize.Cache = MapCache_default;
  var memoize_default = memoize, MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(t) {
    var e = memoize_default(t, function(n) {
      return r.size === MAX_MEMOIZE_SIZE && r.clear(), n;
    }), r = e.cache;
    return e;
  }
  a(memoizeCapped, "memoizeCapped");
  var memoizeCapped_default = memoizeCapped, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  reEscapeChar = /\\(\\)?/g, stringToPath = memoizeCapped_default(function(t) {
    var e = [];
    return t.charCodeAt(0) === 46 && e.push(""), t.replace(rePropName, function(r, n, o, s) {
      e.push(o ? s.replace(reEscapeChar, "$1") : n || r);
    }), e;
  }), stringToPath_default = stringToPath;
  function toString(t) {
    return t == null ? "" : baseToString_default(t);
  }
  a(toString, "toString");
  var toString_default = toString;
  function castPath(t, e) {
    return isArray_default(t) ? t : isKey_default(t, e) ? [t] : stringToPath_default(toString_default(t));
  }
  a(castPath, "castPath");
  var castPath_default = castPath, INFINITY2 = 1 / 0;
  function toKey(t) {
    if (typeof t == "string" || isSymbol_default(t))
      return t;
    var e = t + "";
    return e == "0" && 1 / t == -INFINITY2 ? "-0" : e;
  }
  a(toKey, "toKey");
  var toKey_default = toKey;
  function baseGet(t, e) {
    e = castPath_default(e, t);
    for (var r = 0, n = e.length; t != null && r < n; )
      t = t[toKey_default(e[r++])];
    return r && r == n ? t : void 0;
  }
  a(baseGet, "baseGet");
  var baseGet_default = baseGet;
  function get(t, e, r) {
    var n = t == null ? void 0 : baseGet_default(t, e);
    return n === void 0 ? r : n;
  }
  a(get, "get");
  var get_default = get, import_memoizerific = __toESM(he()), eventProperties = [
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
  ], customEventSpecificProperties = ["detail"];
  function extractEventHiddenProperties(t) {
    let e = eventProperties.filter((r) => t[r] !== void 0).reduce((r, n) => ({ ...r, [n]: t[n] }), {});
    return t instanceof CustomEvent && customEventSpecificProperties.filter((r) => t[r] !== void 0).forEach((r) => {
      e[r] = t[r];
    }), e;
  }
  a(extractEventHiddenProperties, "extractEventHiddenProperties");
  var isObject3 = isObject, removeCodeComments = /* @__PURE__ */ a((t) => {
    let e = null, r = !1, n = !1, o = !1, s = "";
    if (t.indexOf("//") >= 0 || t.indexOf("/*") >= 0)
      for (let l = 0; l < t.length; l += 1)
        !e && !r && !n && !o ? t[l] === '"' || t[l] === "'" || t[l] === "`" ? e = t[l] : t[l] === "/" && t[l + 1] === "*" ? r = !0 : t[l] ===
        "/" && t[l + 1] === "/" ? n = !0 : t[l] === "/" && t[l + 1] !== "/" && (o = !0) : (e && (t[l] === e && t[l - 1] !== "\\" || t[l] ===
        `
` && e !== "`") && (e = null), o && (t[l] === "/" && t[l - 1] !== "\\" || t[l] === `
`) && (o = !1), r && t[l - 1] === "/" && t[l - 2] === "*" && (r = !1), n && t[l] === `
` && (n = !1)), !r && !n && (s += t[l]);
    else
      s = t;
    return s;
  }, "removeCodeComments"), cleanCode = (0, import_memoizerific.default)(1e4)(
    (t) => removeCodeComments(t).replace(/\n\s*/g, "").trim()
  ), convertShorthandMethods = /* @__PURE__ */ a(function(e, r) {
    let n = r.slice(0, r.indexOf("{")), o = r.slice(r.indexOf("{"));
    if (n.includes("=>") || n.includes("function"))
      return r;
    let s = n;
    return s = s.replace(e, "function"), s + o;
  }, "convertShorthandMethods2"), dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/, isJSON = /* @__PURE__ */ a((t) => t.match(
  /^[\[\{\"\}].*[\]\}\"]$/), "isJSON");
  function convertUnconventionalData(t) {
    if (!isObject3(t))
      return t;
    let e = t, r = !1;
    return typeof Event < "u" && t instanceof Event && (e = extractEventHiddenProperties(e), r = !0), e = Object.keys(e).reduce((n, o) => {
      try {
        e[o] && e[o].toJSON, n[o] = e[o];
      } catch {
        r = !0;
      }
      return n;
    }, {}), r ? e : t;
  }
  a(convertUnconventionalData, "convertUnconventionalData");
  var replacer = /* @__PURE__ */ a(function(e) {
    let r, n, o, s;
    return /* @__PURE__ */ a(function(c, i) {
      try {
        if (c === "")
          return s = [], r = /* @__PURE__ */ new Map([[i, "[]"]]), n = /* @__PURE__ */ new Map(), o = [], i;
        let d = n.get(this) || this;
        for (; o.length && d !== o[0]; )
          o.shift(), s.pop();
        if (typeof i == "boolean")
          return i;
        if (i === void 0)
          return e.allowUndefined ? "_undefined_" : void 0;
        if (i === null)
          return null;
        if (typeof i == "number")
          return i === -1 / 0 ? "_-Infinity_" : i === 1 / 0 ? "_Infinity_" : Number.isNaN(i) ? "_NaN_" : i;
        if (typeof i == "bigint")
          return `_bigint_${i.toString()}`;
        if (typeof i == "string")
          return dateFormat.test(i) ? e.allowDate ? `_date_${i}` : void 0 : i;
        if ((0, import_is_regex.default)(i))
          return e.allowRegExp ? `_regexp_${i.flags}|${i.source}` : void 0;
        if ((0, import_is_function.default)(i)) {
          if (!e.allowFunction)
            return;
          let { name: u } = i, g = i.toString();
          return g.match(
            /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
          ) ? `_function_${u}|${(() => {
          }).toString()}` : `_function_${u}|${cleanCode(convertShorthandMethods(c, g))}`;
        }
        if ((0, import_is_symbol.default)(i)) {
          if (!e.allowSymbol)
            return;
          let u = Symbol.keyFor(i);
          return u !== void 0 ? `_gsymbol_${u}` : `_symbol_${i.toString().slice(7, -1)}`;
        }
        if (o.length >= e.maxDepth)
          return Array.isArray(i) ? `[Array(${i.length})]` : "[Object]";
        if (i === this)
          return `_duplicate_${JSON.stringify(s)}`;
        if (i instanceof Error && e.allowError)
          return {
            __isConvertedError__: !0,
            errorProperties: {
              ...i.cause ? { cause: i.cause } : {},
              ...i,
              name: i.name,
              message: i.message,
              stack: i.stack,
              "_constructor-name_": i.constructor.name
            }
          };
        if (i.constructor && i.constructor.name && i.constructor.name !== "Object" && !Array.isArray(i) && !e.allowClass)
          return;
        let p = r.get(i);
        if (!p) {
          let u = Array.isArray(i) ? i : convertUnconventionalData(i);
          if (i.constructor && i.constructor.name && i.constructor.name !== "Object" && !Array.isArray(i) && e.allowClass)
            try {
              Object.assign(u, { "_constructor-name_": i.constructor.name });
            } catch {
            }
          return s.push(c), o.unshift(u), r.set(i, JSON.stringify(s)), i !== u && n.set(i, u), u;
        }
        return `_duplicate_${p}`;
      } catch {
        return;
      }
    }, "replace");
  }, "replacer2"), reviver2 = /* @__PURE__ */ a(function reviver(options) {
    let refs = [], root;
    return /* @__PURE__ */ a(function revive(key, value) {
      if (key === "" && (root = value, refs.forEach(({ target: t, container: e, replacement: r }) => {
        let n = isJSON(r) ? JSON.parse(r) : r.split(".");
        n.length === 0 ? e[t] = root : e[t] = get_default(root, n);
      })), key === "_constructor-name_")
        return value;
      if (isObject3(value) && value.__isConvertedError__) {
        let { message: t, ...e } = value.errorProperties, r = new Error(t);
        return Object.assign(r, e), r;
      }
      if (isObject3(value) && value["_constructor-name_"] && options.allowFunction) {
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
        let result = /* @__PURE__ */ a((...args) => {
          let f = eval(`(${sourceSanitized})`);
          return f(...args);
        }, "result");
        return Object.defineProperty(result, "toString", {
          value: /* @__PURE__ */ a(() => sourceSanitized, "value")
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
      "string" && value.startsWith("_gsymbol_") && options.allowSymbol ? Symbol.for(value.replace("_gsymbol_", "")) : typeof value == "strin\
g" && value === "_-Infinity_" ? -1 / 0 : typeof value == "string" && value === "_Infinity_" ? 1 / 0 : typeof value == "string" && value === "\
_NaN_" ? NaN : typeof value == "string" && value.startsWith("_bigint_") && typeof BigInt == "function" ? BigInt(value.replace("_bigint_", "")) :
      value;
    }, "revive");
  }, "reviver"), defaultOptions = {
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
  }, stringify = /* @__PURE__ */ a((t, e = {}) => {
    let r = { ...defaultOptions, ...e };
    return JSON.stringify(convertUnconventionalData(t), replacer(r), e.space);
  }, "stringify"), mutator = /* @__PURE__ */ a(() => {
    let t = /* @__PURE__ */ new Map();
    return /* @__PURE__ */ a(function e(r) {
      isObject3(r) && Object.entries(r).forEach(([n, o]) => {
        o === "_undefined_" ? r[n] = void 0 : t.get(o) || (t.set(o, !0), e(o));
      }), Array.isArray(r) && r.forEach((n, o) => {
        n === "_undefined_" ? (t.set(n, !0), r[o] = void 0) : t.get(n) || (t.set(n, !0), e(n));
      });
    }, "mutateUndefined");
  }, "mutator"), parse = /* @__PURE__ */ a((t, e = {}) => {
    let r = { ...defaultOptions, ...e }, n = JSON.parse(t, reviver2(r));
    return mutator()(n), n;
  }, "parse");
});

// src/channels/index.ts
var Xe = {};
Te(Xe, {
  Channel: () => R,
  PostMessageTransport: () => $,
  WebsocketTransport: () => L,
  createBrowserChannel: () => Ze,
  default: () => Ye
});
module.exports = Me(Xe);
var be = j(Z(), 1);

// src/channels/main.ts
var He = /* @__PURE__ */ a((t) => t.transports !== void 0, "isMulti"), Ue = /* @__PURE__ */ a(() => Math.random().toString(16).slice(2), "ge\
nerateRandomId"), R = class {
  constructor(e = {}) {
    this.sender = Ue();
    this.events = {};
    this.data = {};
    this.transports = [];
    this.isAsync = e.async || !1, He(e) ? (this.transports = e.transports || [], this.transports.forEach((r) => {
      r.setHandler((n) => this.handleEvent(n));
    })) : this.transports = e.transport ? [e.transport] : [], this.transports.forEach((r) => {
      r.setHandler((n) => this.handleEvent(n));
    });
  }
  static {
    a(this, "Channel");
  }
  get hasTransport() {
    return this.transports.length > 0;
  }
  addListener(e, r) {
    this.events[e] = this.events[e] || [], this.events[e].push(r);
  }
  emit(e, ...r) {
    let n = { type: e, args: r, from: this.sender }, o = {};
    r.length >= 1 && r[0] && r[0].options && (o = r[0].options);
    let s = /* @__PURE__ */ a(() => {
      this.transports.forEach((l) => {
        l.send(n, o);
      }), this.handleEvent(n);
    }, "handler");
    this.isAsync ? setImmediate(s) : s();
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
    n && (this.events[e] = n.filter((o) => o !== r));
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
    let n = /* @__PURE__ */ a((...o) => (this.removeListener(e, n), r(...o)), "onceListener");
    return n;
  }
};

// src/channels/postmessage/index.ts
var v = j(Z(), 1), D = require("@storybook/core/client-logger"), Je = j(require("@storybook/core/core-events"), 1), k = j(ee(), 1);

// ../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var We = process.env.NODE_ENV === "production", te = "Invariant failed";
function G(t, e) {
  if (!t) {
    if (We)
      throw new Error(te);
    var r = typeof e == "function" ? e() : e, n = r ? "".concat(te, ": ").concat(r) : te;
    throw new Error(n);
  }
}
a(G, "invariant");

// src/channels/postmessage/getEventSourceUrl.ts
var _e = require("@storybook/core/client-logger");
var ge = /* @__PURE__ */ a((t) => {
  let e = Array.from(
    document.querySelectorAll("iframe[data-is-storybook]")
  ), [r, ...n] = e.filter((s) => {
    try {
      return s.contentWindow?.location.origin === t.source.location.origin && s.contentWindow?.location.pathname === t.source.location.pathname;
    } catch {
    }
    try {
      return s.contentWindow === t.source;
    } catch {
    }
    let l = s.getAttribute("src"), c;
    try {
      if (!l)
        return !1;
      ({ origin: c } = new URL(l, document.location.toString()));
    } catch {
      return !1;
    }
    return c === t.origin;
  }), o = r?.getAttribute("src");
  if (o && n.length === 0) {
    let { protocol: s, host: l, pathname: c } = new URL(o, document.location.toString());
    return `${s}//${l}${c}`;
  }
  return n.length > 0 && _e.logger.error("found multiple candidates for event source"), null;
}, "getEventSourceUrl");

// src/channels/postmessage/index.ts
var { document: re, location: ne } = v.global, me = "storybook-channel", Be = { allowFunction: !1, maxDepth: 25 }, $ = class {
  constructor(e) {
    this.config = e;
    this.connected = !1;
    if (this.buffer = [], typeof v.global?.addEventListener == "function" && v.global.addEventListener("message", this.handleEvent.bind(this),
    !1), e.page !== "manager" && e.page !== "preview")
      throw new Error(`postmsg-channel: "config.page" cannot be "${e.page}"`);
  }
  static {
    a(this, "PostMessageTransport");
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
      allowRegExp: o,
      allowFunction: s,
      allowSymbol: l,
      allowDate: c,
      allowError: i,
      allowUndefined: d,
      allowClass: p,
      maxDepth: u,
      space: g,
      lazyEval: h
    } = r || {}, m = Object.fromEntries(
      Object.entries({
        allowRegExp: o,
        allowFunction: s,
        allowSymbol: l,
        allowDate: c,
        allowError: i,
        allowUndefined: d,
        allowClass: p,
        maxDepth: u,
        space: g,
        lazyEval: h
      }).filter(([M, F]) => typeof F < "u")
    ), C = {
      ...Be,
      ...v.global.CHANNEL_OPTIONS || {},
      ...m
    }, P = this.getFrames(n), I = new URLSearchParams(ne?.search || ""), T = (0, k.stringify)(
      {
        key: me,
        event: e,
        refId: I.get("refId")
      },
      C
    );
    return P.length ? (this.buffer.length && this.flush(), P.forEach((M) => {
      try {
        M.postMessage(T, "*");
      } catch {
        D.logger.error("sending over postmessage fail");
      }
    }), Promise.resolve(null)) : new Promise((M, F) => {
      this.buffer.push({ event: e, resolve: M, reject: F });
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
        re.querySelectorAll("iframe[data-is-storybook][data-is-loaded]")
      ).flatMap((o) => {
        try {
          return o.contentWindow && o.dataset.isStorybook !== void 0 && o.id === e ? [o.contentWindow] : [];
        } catch {
          return [];
        }
      });
      return n?.length ? n : this.getCurrentFrames();
    }
    return v.global && v.global.parent && v.global.parent !== v.global.self ? [v.global.parent] : [];
  }
  getCurrentFrames() {
    return this.config.page === "manager" ? Array.from(
      re.querySelectorAll('[data-is-storybook="true"]')
    ).flatMap((r) => r.contentWindow ? [r.contentWindow] : []) : v.global && v.global.parent ? [v.global.parent] : [];
  }
  getLocalFrame() {
    return this.config.page === "manager" ? Array.from(
      re.querySelectorAll("#storybook-preview-iframe")
    ).flatMap((r) => r.contentWindow ? [r.contentWindow] : []) : v.global && v.global.parent ? [v.global.parent] : [];
  }
  handleEvent(e) {
    try {
      let { data: r } = e, { key: n, event: o, refId: s } = typeof r == "string" && (0, k.isJSON)(r) ? (0, k.parse)(r, v.global.CHANNEL_OPTIONS ||
      {}) : r;
      if (n === me) {
        let l = this.config.page === "manager" ? '<span style="color: #37D5D3; background: black"> manager </span>' : '<span style="color: #\
1EA7FD; background: black"> preview </span>', c = Object.values(Je).includes(o.type) ? `<span style="color: #FF4785">${o.type}</span>` : `<s\
pan style="color: #FFAE00">${o.type}</span>`;
        if (s && (o.refId = s), o.source = this.config.page === "preview" ? e.origin : ge(e), !o.source) {
          D.pretty.error(
            `${l} received ${c} but was unable to determine the source of the event`
          );
          return;
        }
        let i = `${l} received ${c} (${r.length})`;
        D.pretty.debug(
          ne.origin !== o.source ? i : `${i} <span style="color: gray">(on ${ne.origin} from ${o.source})</span>`,
          ...o.args
        ), G(this.handler, "ChannelHandler should be set"), this.handler(o);
      }
    } catch (r) {
      D.logger.error(r);
    }
  }
};

// src/channels/websocket/index.ts
var oe = j(Z(), 1), ve = j(require("@storybook/core/core-events"), 1), H = j(ee(), 1);
var { WebSocket: Ke } = oe.global, L = class {
  constructor({ url: e, onError: r, page: n }) {
    this.buffer = [];
    this.isReady = !1;
    this.socket = new Ke(e), this.socket.onopen = () => {
      this.isReady = !0, this.flush();
    }, this.socket.onmessage = ({ data: o }) => {
      let s = typeof o == "string" && (0, H.isJSON)(o) ? (0, H.parse)(o) : o;
      G(this.handler, "WebsocketTransport handler should be set"), this.handler(s);
    }, this.socket.onerror = (o) => {
      r && r(o);
    }, this.socket.onclose = () => {
      G(this.handler, "WebsocketTransport handler should be set"), this.handler({ type: ve.CHANNEL_WS_DISCONNECT, args: [], from: n || "prev\
iew" });
    };
  }
  static {
    a(this, "WebsocketTransport");
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
    let r = (0, H.stringify)(e, {
      maxDepth: 15,
      allowFunction: !1,
      ...oe.global.CHANNEL_OPTIONS
    });
    this.socket.send(r);
  }
  flush() {
    let { buffer: e } = this;
    this.buffer = [], e.forEach((r) => this.send(r));
  }
};

// src/channels/index.ts
var { CONFIG_TYPE: Ve } = be.global, Ye = R;
function Ze({ page: t, extraTransports: e = [] }) {
  let r = [new $({ page: t }), ...e];
  if (Ve === "DEVELOPMENT") {
    let n = window.location.protocol === "http:" ? "ws" : "wss", { hostname: o, port: s } = window.location, l = `${n}://${o}:${s}/storybook\
-server-channel`;
    r.push(new L({ url: l, onError: /* @__PURE__ */ a(() => {
    }, "onError"), page: t }));
  }
  return new R({ transports: r });
}
a(Ze, "createBrowserChannel");
