"use strict";
var d = Object.defineProperty;
var y = Object.getOwnPropertyDescriptor;
var A = Object.getOwnPropertyNames;
var i = Object.prototype.hasOwnProperty;
var s = (t, e) => {
  for (var n in e)
    d(t, n, { get: e[n], enumerable: !0 });
}, _ = (t, e, n, a) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let o of A(e))
      !i.call(t, o) && o !== n && d(t, o, { get: () => e[o], enumerable: !(a = y(e, o)) || a.enumerable });
  return t;
};
var T = (t) => _(d({}, "__esModule", { value: !0 }), t);

// src/types/index.ts
var m = {};
s(m, {
  Addon_TypesEnum: () => p
});
module.exports = T(m);

// src/types/modules/addons.ts
var p = /* @__PURE__ */ ((r) => (r.TAB = "tab", r.PANEL = "panel", r.TOOL = "tool", r.TOOLEXTRA = "toolextra", r.PREVIEW = "preview", r.experimental_PAGE =
"page", r.experimental_SIDEBAR_BOTTOM = "sidebar-bottom", r.experimental_SIDEBAR_TOP = "sidebar-top", r))(p || {});
