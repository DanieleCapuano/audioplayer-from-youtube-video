import { jsxs as lt, jsx as de } from "react/jsx-runtime";
import * as ce from "react";
import { forwardRef as In, useContext as Nn, useState as Ue, useRef as Mn, useEffect as Dt, useCallback as dr } from "react";
let Qr = "", Jr, Zr, bt = new Promise((e) => {
  Zr = e;
});
function Dn(e) {
  Qr = e;
  var t = document.createElement("script");
  t.src = "https://www.youtube.com/iframe_api";
  var r = document.getElementsByTagName("script")[0];
  return r.parentNode.insertBefore(t, r), Object.assign(window, {
    onYouTubeIframeAPIReady: Bn
  }), bt;
}
function Bn() {
  const e = window.YT;
  Jr = new e.Player("player", {
    height: "390",
    width: "640",
    videoId: Qr,
    playerVars: {
      playsinline: 0,
      controls: 0,
      autoplay: 0
    },
    events: {
      onReady: Fn
    }
  });
}
function Fn() {
  Zr(Jr);
}
async function Vn() {
  bt.then((e) => {
    e.playVideo();
  });
}
async function jn() {
  bt.then((e) => {
    e.pauseVideo();
  });
}
async function Ln() {
  bt.then((e) => {
    e.stopVideo();
  });
}
const pr = (e) => e, zn = () => {
  let e = pr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = pr;
    }
  };
}, Wn = zn();
function Oe(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Ie(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Oe(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ot = { exports: {} }, it = { exports: {} }, U = {};
var mr;
function Yn() {
  if (mr) return U;
  mr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, s = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, l = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, d = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, p = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, g = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, v = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, h = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, c = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, y = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, w = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, O = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function k(b) {
    if (typeof b == "object" && b !== null) {
      var C = b.$$typeof;
      switch (C) {
        case t:
          switch (b = b.type, b) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case d:
                case h:
                case v:
                case s:
                  return b;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function E(b) {
    return k(b) === f;
  }
  return U.AsyncMode = u, U.ConcurrentMode = f, U.ContextConsumer = l, U.ContextProvider = s, U.Element = t, U.ForwardRef = d, U.Fragment = n, U.Lazy = h, U.Memo = v, U.Portal = r, U.Profiler = i, U.StrictMode = o, U.Suspense = p, U.isAsyncMode = function(b) {
    return E(b) || k(b) === u;
  }, U.isConcurrentMode = E, U.isContextConsumer = function(b) {
    return k(b) === l;
  }, U.isContextProvider = function(b) {
    return k(b) === s;
  }, U.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, U.isForwardRef = function(b) {
    return k(b) === d;
  }, U.isFragment = function(b) {
    return k(b) === n;
  }, U.isLazy = function(b) {
    return k(b) === h;
  }, U.isMemo = function(b) {
    return k(b) === v;
  }, U.isPortal = function(b) {
    return k(b) === r;
  }, U.isProfiler = function(b) {
    return k(b) === i;
  }, U.isStrictMode = function(b) {
    return k(b) === o;
  }, U.isSuspense = function(b) {
    return k(b) === p;
  }, U.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === i || b === o || b === p || b === g || typeof b == "object" && b !== null && (b.$$typeof === h || b.$$typeof === v || b.$$typeof === s || b.$$typeof === l || b.$$typeof === d || b.$$typeof === y || b.$$typeof === w || b.$$typeof === O || b.$$typeof === c);
  }, U.typeOf = k, U;
}
var Y = {};
var hr;
function qn() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, s = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, l = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, d = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, p = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, g = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, v = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, h = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, c = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, y = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, w = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, O = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function k(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === n || x === f || x === i || x === o || x === p || x === g || typeof x == "object" && x !== null && (x.$$typeof === h || x.$$typeof === v || x.$$typeof === s || x.$$typeof === l || x.$$typeof === d || x.$$typeof === y || x.$$typeof === w || x.$$typeof === O || x.$$typeof === c);
    }
    function E(x) {
      if (typeof x == "object" && x !== null) {
        var ve = x.$$typeof;
        switch (ve) {
          case t:
            var nt = x.type;
            switch (nt) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case p:
                return nt;
              default:
                var fr = nt && nt.$$typeof;
                switch (fr) {
                  case l:
                  case d:
                  case h:
                  case v:
                  case s:
                    return fr;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var b = u, C = f, A = l, oe = s, Q = t, re = d, J = n, a = h, _ = v, T = r, P = i, B = o, ae = p, be = !1;
    function Mt(x) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(x) || E(x) === u;
    }
    function S(x) {
      return E(x) === f;
    }
    function $(x) {
      return E(x) === l;
    }
    function D(x) {
      return E(x) === s;
    }
    function N(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function R(x) {
      return E(x) === d;
    }
    function F(x) {
      return E(x) === n;
    }
    function I(x) {
      return E(x) === h;
    }
    function M(x) {
      return E(x) === v;
    }
    function V(x) {
      return E(x) === r;
    }
    function q(x) {
      return E(x) === i;
    }
    function j(x) {
      return E(x) === o;
    }
    function ue(x) {
      return E(x) === p;
    }
    Y.AsyncMode = b, Y.ConcurrentMode = C, Y.ContextConsumer = A, Y.ContextProvider = oe, Y.Element = Q, Y.ForwardRef = re, Y.Fragment = J, Y.Lazy = a, Y.Memo = _, Y.Portal = T, Y.Profiler = P, Y.StrictMode = B, Y.Suspense = ae, Y.isAsyncMode = Mt, Y.isConcurrentMode = S, Y.isContextConsumer = $, Y.isContextProvider = D, Y.isElement = N, Y.isForwardRef = R, Y.isFragment = F, Y.isLazy = I, Y.isMemo = M, Y.isPortal = V, Y.isProfiler = q, Y.isStrictMode = j, Y.isSuspense = ue, Y.isValidElementType = k, Y.typeOf = E;
  })()), Y;
}
var gr;
function en() {
  return gr || (gr = 1, process.env.NODE_ENV === "production" ? it.exports = Yn() : it.exports = qn()), it.exports;
}
var Bt, yr;
function Gn() {
  if (yr) return Bt;
  yr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Bt = o() ? Object.assign : function(i, s) {
    for (var l, u = n(i), f, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var p in l)
        t.call(l, p) && (u[p] = l[p]);
      if (e) {
        f = e(l);
        for (var g = 0; g < f.length; g++)
          r.call(l, f[g]) && (u[f[g]] = l[f[g]]);
      }
    }
    return u;
  }, Bt;
}
var Ft, br;
function tr() {
  if (br) return Ft;
  br = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ft = e, Ft;
}
var Vt, vr;
function tn() {
  return vr || (vr = 1, Vt = Function.call.bind(Object.prototype.hasOwnProperty)), Vt;
}
var jt, Sr;
function Hn() {
  if (Sr) return jt;
  Sr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ tr(), r = {}, n = /* @__PURE__ */ tn();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, l, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var p;
          try {
            if (typeof i[d] != "function") {
              var g = Error(
                (u || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            p = i[d](s, d, u, l, null, t);
          } catch (h) {
            p = h;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var v = f ? f() : "";
            e(
              "Failed " + l + " type: " + p.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, jt = o, jt;
}
var Lt, Cr;
function Kn() {
  if (Cr) return Lt;
  Cr = 1;
  var e = en(), t = Gn(), r = /* @__PURE__ */ tr(), n = /* @__PURE__ */ tn(), o = /* @__PURE__ */ Hn(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var u = "Warning: " + l;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Lt = function(l, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(S) {
      var $ = S && (f && S[f] || S[d]);
      if (typeof $ == "function")
        return $;
    }
    var g = "<<anonymous>>", v = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: O(),
      arrayOf: k,
      element: E(),
      elementType: b(),
      instanceOf: C,
      node: re(),
      objectOf: oe,
      oneOf: A,
      oneOfType: Q,
      shape: a,
      exact: _
    };
    function h(S, $) {
      return S === $ ? S !== 0 || 1 / S === 1 / $ : S !== S && $ !== $;
    }
    function c(S, $) {
      this.message = S, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function y(S) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, D = 0;
      function N(F, I, M, V, q, j, ue) {
        if (V = V || g, j = j || M, ue !== r) {
          if (u) {
            var x = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw x.name = "Invariant Violation", x;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = V + ":" + M;
            !$[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[ve] = !0, D++);
          }
        }
        return I[M] == null ? F ? I[M] === null ? new c("The " + q + " `" + j + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new c("The " + q + " `" + j + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : S(I, M, V, q, j);
      }
      var R = N.bind(null, !1);
      return R.isRequired = N.bind(null, !0), R;
    }
    function w(S) {
      function $(D, N, R, F, I, M) {
        var V = D[N], q = B(V);
        if (q !== S) {
          var j = ae(V);
          return new c(
            "Invalid " + F + " `" + I + "` of type " + ("`" + j + "` supplied to `" + R + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return y($);
    }
    function O() {
      return y(s);
    }
    function k(S) {
      function $(D, N, R, F, I) {
        if (typeof S != "function")
          return new c("Property `" + I + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var M = D[N];
        if (!Array.isArray(M)) {
          var V = B(M);
          return new c("Invalid " + F + " `" + I + "` of type " + ("`" + V + "` supplied to `" + R + "`, expected an array."));
        }
        for (var q = 0; q < M.length; q++) {
          var j = S(M, q, R, F, I + "[" + q + "]", r);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return y($);
    }
    function E() {
      function S($, D, N, R, F) {
        var I = $[D];
        if (!l(I)) {
          var M = B(I);
          return new c("Invalid " + R + " `" + F + "` of type " + ("`" + M + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(S);
    }
    function b() {
      function S($, D, N, R, F) {
        var I = $[D];
        if (!e.isValidElementType(I)) {
          var M = B(I);
          return new c("Invalid " + R + " `" + F + "` of type " + ("`" + M + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(S);
    }
    function C(S) {
      function $(D, N, R, F, I) {
        if (!(D[N] instanceof S)) {
          var M = S.name || g, V = Mt(D[N]);
          return new c("Invalid " + F + " `" + I + "` of type " + ("`" + V + "` supplied to `" + R + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return y($);
    }
    function A(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function $(D, N, R, F, I) {
        for (var M = D[N], V = 0; V < S.length; V++)
          if (h(M, S[V]))
            return null;
        var q = JSON.stringify(S, function(ue, x) {
          var ve = ae(x);
          return ve === "symbol" ? String(x) : x;
        });
        return new c("Invalid " + F + " `" + I + "` of value `" + String(M) + "` " + ("supplied to `" + R + "`, expected one of " + q + "."));
      }
      return y($);
    }
    function oe(S) {
      function $(D, N, R, F, I) {
        if (typeof S != "function")
          return new c("Property `" + I + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var M = D[N], V = B(M);
        if (V !== "object")
          return new c("Invalid " + F + " `" + I + "` of type " + ("`" + V + "` supplied to `" + R + "`, expected an object."));
        for (var q in M)
          if (n(M, q)) {
            var j = S(M, q, R, F, I + "." + q, r);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return y($);
    }
    function Q(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var $ = 0; $ < S.length; $++) {
        var D = S[$];
        if (typeof D != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + be(D) + " at index " + $ + "."
          ), s;
      }
      function N(R, F, I, M, V) {
        for (var q = [], j = 0; j < S.length; j++) {
          var ue = S[j], x = ue(R, F, I, M, V, r);
          if (x == null)
            return null;
          x.data && n(x.data, "expectedType") && q.push(x.data.expectedType);
        }
        var ve = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new c("Invalid " + M + " `" + V + "` supplied to " + ("`" + I + "`" + ve + "."));
      }
      return y(N);
    }
    function re() {
      function S($, D, N, R, F) {
        return T($[D]) ? null : new c("Invalid " + R + " `" + F + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return y(S);
    }
    function J(S, $, D, N, R) {
      return new c(
        (S || "React class") + ": " + $ + " type `" + D + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function a(S) {
      function $(D, N, R, F, I) {
        var M = D[N], V = B(M);
        if (V !== "object")
          return new c("Invalid " + F + " `" + I + "` of type `" + V + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var q in S) {
          var j = S[q];
          if (typeof j != "function")
            return J(R, F, I, q, ae(j));
          var ue = j(M, q, R, F, I + "." + q, r);
          if (ue)
            return ue;
        }
        return null;
      }
      return y($);
    }
    function _(S) {
      function $(D, N, R, F, I) {
        var M = D[N], V = B(M);
        if (V !== "object")
          return new c("Invalid " + F + " `" + I + "` of type `" + V + "` " + ("supplied to `" + R + "`, expected `object`."));
        var q = t({}, D[N], S);
        for (var j in q) {
          var ue = S[j];
          if (n(S, j) && typeof ue != "function")
            return J(R, F, I, j, ae(ue));
          if (!ue)
            return new c(
              "Invalid " + F + " `" + I + "` key `" + j + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(D[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var x = ue(M, j, R, F, I + "." + j, r);
          if (x)
            return x;
        }
        return null;
      }
      return y($);
    }
    function T(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(T);
          if (S === null || l(S))
            return !0;
          var $ = p(S);
          if ($) {
            var D = $.call(S), N;
            if ($ !== S.entries) {
              for (; !(N = D.next()).done; )
                if (!T(N.value))
                  return !1;
            } else
              for (; !(N = D.next()).done; ) {
                var R = N.value;
                if (R && !T(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function P(S, $) {
      return S === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function B(S) {
      var $ = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : P($, S) ? "symbol" : $;
    }
    function ae(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var $ = B(S);
      if ($ === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function be(S) {
      var $ = ae(S);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function Mt(S) {
      return !S.constructor || !S.constructor.name ? g : S.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, Lt;
}
var zt, Er;
function Xn() {
  if (Er) return zt;
  Er = 1;
  var e = /* @__PURE__ */ tr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, zt = function() {
    function n(s, l, u, f, d, p) {
      if (p !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, zt;
}
var Tr;
function Qn() {
  if (Tr) return ot.exports;
  if (Tr = 1, process.env.NODE_ENV !== "production") {
    var e = en(), t = !0;
    ot.exports = /* @__PURE__ */ Kn()(e.isElement, t);
  } else
    ot.exports = /* @__PURE__ */ Xn()();
  return ot.exports;
}
var Jn = /* @__PURE__ */ Qn();
const L = /* @__PURE__ */ Un(Jn);
function rn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = rn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function nn() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = rn(e)) && (n && (n += " "), n += t);
  return n;
}
function Zn(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", l = !0;
    for (let u = 0; u < i.length; u += 1) {
      const f = i[u];
      f && (s += (l === !0 ? "" : " ") + t(f), l = !1, r && r[f] && (s += " " + r[f]));
    }
    n[o] = s;
  }
  return n;
}
var at = { exports: {} }, K = {};
var wr;
function eo() {
  if (wr) return K;
  wr = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.consumer"), s = /* @__PURE__ */ Symbol.for("react.context"), l = /* @__PURE__ */ Symbol.for("react.forward_ref"), u = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.suspense_list"), d = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), g = /* @__PURE__ */ Symbol.for("react.view_transition"), v = /* @__PURE__ */ Symbol.for("react.client.reference");
  function h(c) {
    if (typeof c == "object" && c !== null) {
      var y = c.$$typeof;
      switch (y) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case u:
            case f:
            case g:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case s:
                case l:
                case p:
                case d:
                  return c;
                case i:
                  return c;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return K.ContextConsumer = i, K.ContextProvider = s, K.Element = e, K.ForwardRef = l, K.Fragment = r, K.Lazy = p, K.Memo = d, K.Portal = t, K.Profiler = o, K.StrictMode = n, K.Suspense = u, K.SuspenseList = f, K.isContextConsumer = function(c) {
    return h(c) === i;
  }, K.isContextProvider = function(c) {
    return h(c) === s;
  }, K.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, K.isForwardRef = function(c) {
    return h(c) === l;
  }, K.isFragment = function(c) {
    return h(c) === r;
  }, K.isLazy = function(c) {
    return h(c) === p;
  }, K.isMemo = function(c) {
    return h(c) === d;
  }, K.isPortal = function(c) {
    return h(c) === t;
  }, K.isProfiler = function(c) {
    return h(c) === o;
  }, K.isStrictMode = function(c) {
    return h(c) === n;
  }, K.isSuspense = function(c) {
    return h(c) === u;
  }, K.isSuspenseList = function(c) {
    return h(c) === f;
  }, K.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === u || c === f || typeof c == "object" && c !== null && (c.$$typeof === p || c.$$typeof === d || c.$$typeof === s || c.$$typeof === i || c.$$typeof === l || c.$$typeof === v || c.getModuleId !== void 0);
  }, K.typeOf = h, K;
}
var X = {};
var xr;
function to() {
  return xr || (xr = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var y = c.$$typeof;
        switch (y) {
          case t:
            switch (c = c.type, c) {
              case n:
              case i:
              case o:
              case f:
              case d:
              case v:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case l:
                  case u:
                  case g:
                  case p:
                    return c;
                  case s:
                    return c;
                  default:
                    return y;
                }
            }
          case r:
            return y;
        }
      }
    }
    var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), l = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), f = /* @__PURE__ */ Symbol.for("react.suspense"), d = /* @__PURE__ */ Symbol.for("react.suspense_list"), p = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.view_transition"), h = /* @__PURE__ */ Symbol.for("react.client.reference");
    X.ContextConsumer = s, X.ContextProvider = l, X.Element = t, X.ForwardRef = u, X.Fragment = n, X.Lazy = g, X.Memo = p, X.Portal = r, X.Profiler = i, X.StrictMode = o, X.Suspense = f, X.SuspenseList = d, X.isContextConsumer = function(c) {
      return e(c) === s;
    }, X.isContextProvider = function(c) {
      return e(c) === l;
    }, X.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, X.isForwardRef = function(c) {
      return e(c) === u;
    }, X.isFragment = function(c) {
      return e(c) === n;
    }, X.isLazy = function(c) {
      return e(c) === g;
    }, X.isMemo = function(c) {
      return e(c) === p;
    }, X.isPortal = function(c) {
      return e(c) === r;
    }, X.isProfiler = function(c) {
      return e(c) === i;
    }, X.isStrictMode = function(c) {
      return e(c) === o;
    }, X.isSuspense = function(c) {
      return e(c) === f;
    }, X.isSuspenseList = function(c) {
      return e(c) === d;
    }, X.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === i || c === o || c === f || c === d || typeof c == "object" && c !== null && (c.$$typeof === g || c.$$typeof === p || c.$$typeof === l || c.$$typeof === s || c.$$typeof === u || c.$$typeof === h || c.getModuleId !== void 0);
    }, X.typeOf = e;
  })()), X;
}
var $r;
function ro() {
  return $r || ($r = 1, process.env.NODE_ENV === "production" ? at.exports = /* @__PURE__ */ eo() : at.exports = /* @__PURE__ */ to()), at.exports;
}
var mt = /* @__PURE__ */ ro();
function xe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function on(e) {
  if (/* @__PURE__ */ ce.isValidElement(e) || mt.isValidElementType(e) || !xe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = on(e[r]);
  }), t;
}
function me(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return xe(e) && xe(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ ce.isValidElement(t[o]) || mt.isValidElementType(t[o]) ? n[o] = t[o] : xe(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && xe(e[o]) ? n[o] = me(e[o], t[o], r) : r.clone ? n[o] = xe(t[o]) ? on(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function Ke(e, t) {
  return t ? me(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ae = process.env.NODE_ENV !== "production" ? L.oneOfType([L.number, L.string, L.object, L.array]) : {};
function Or(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    const i = /min-width:\s*([0-9.]+)/;
    return +(n.match(i)?.[1] || 0) - +(o.match(i)?.[1] || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function no(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function oo(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Oe(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function io(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function r(i, s) {
    i.up = (...l) => t(e.breakpoints.up(...l), s), i.down = (...l) => t(e.breakpoints.down(...l), s), i.between = (...l) => t(e.breakpoints.between(...l), s), i.only = (...l) => t(e.breakpoints.only(...l), s), i.not = (...l) => {
      const u = t(e.breakpoints.not(...l), s);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const vt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, _r = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${vt[e]}px)`
}, ao = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : vt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function $e(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || _r;
    return t.reduce((s, l, u) => (s[i.up(i.keys[u])] = r(t[u]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || _r;
    return Object.keys(t).reduce((s, l) => {
      if (no(i.keys, l)) {
        const u = oo(n.containerQueries ? n : ao, l);
        u && (s[u] = r(t[l], l));
      } else if (Object.keys(i.values || vt).includes(l)) {
        const u = i.up(l);
        s[u] = r(t[l], l);
      } else {
        const u = l;
        s[u] = t[u];
      }
      return s;
    }, {});
  }
  return r(t);
}
function so(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function Ar(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function St(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function ht(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = St(e, r) || n, t && (o = t(o, n, e)), o;
}
function ne(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], u = s.theme, f = St(u, n) || {};
    return $e(s, l, (p) => {
      let g = ht(f, o, p);
      return p === g && typeof p == "string" && (g = ht(f, o, `${t}${p === "default" ? "" : Ie(p)}`, p)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ae
  } : {}, i.filterProps = [t], i;
}
function co(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const lo = {
  m: "margin",
  p: "padding"
}, uo = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, kr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, fo = co((e) => {
  if (e.length > 2)
    if (kr[e])
      e = kr[e];
    else
      return [e];
  const [t, r] = e.split(""), n = lo[t], o = uo[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Ct = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Et = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], po = [...Ct, ...Et];
function et(e, t, r, n) {
  const o = St(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function rr(e) {
  return et(e, "spacing", 8, "spacing");
}
function tt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function mo(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = tt(t, r), n), {});
}
function ho(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = fo(r), i = mo(o, n), s = e[r];
  return $e(e, s, i);
}
function an(e, t) {
  const r = rr(e.theme);
  return Object.keys(e).map((n) => ho(e, t, n, r)).reduce(Ke, {});
}
function ee(e) {
  return an(e, Ct);
}
ee.propTypes = process.env.NODE_ENV !== "production" ? Ct.reduce((e, t) => (e[t] = Ae, e), {}) : {};
ee.filterProps = Ct;
function te(e) {
  return an(e, Et);
}
te.propTypes = process.env.NODE_ENV !== "production" ? Et.reduce((e, t) => (e[t] = Ae, e), {}) : {};
te.filterProps = Et;
process.env.NODE_ENV !== "production" && po.reduce((e, t) => (e[t] = Ae, e), {});
function Tt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Ke(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ge(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ye(e, t) {
  return ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const go = ye("border", ge), yo = ye("borderTop", ge), bo = ye("borderRight", ge), vo = ye("borderBottom", ge), So = ye("borderLeft", ge), Co = ye("borderColor"), Eo = ye("borderTopColor"), To = ye("borderRightColor"), wo = ye("borderBottomColor"), xo = ye("borderLeftColor"), $o = ye("outline", ge), Oo = ye("outlineColor"), wt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = et(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: tt(t, n)
    });
    return $e(e, e.borderRadius, r);
  }
  return null;
};
wt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ae
} : {};
wt.filterProps = ["borderRadius"];
Tt(go, yo, bo, vo, So, Co, Eo, To, wo, xo, wt, $o, Oo);
const xt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = et(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: tt(t, n)
    });
    return $e(e, e.gap, r);
  }
  return null;
};
xt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ae
} : {};
xt.filterProps = ["gap"];
const $t = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = et(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: tt(t, n)
    });
    return $e(e, e.columnGap, r);
  }
  return null;
};
$t.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ae
} : {};
$t.filterProps = ["columnGap"];
const Ot = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = et(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: tt(t, n)
    });
    return $e(e, e.rowGap, r);
  }
  return null;
};
Ot.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ae
} : {};
Ot.filterProps = ["rowGap"];
const _o = ne({
  prop: "gridColumn"
}), Ao = ne({
  prop: "gridRow"
}), ko = ne({
  prop: "gridAutoFlow"
}), Po = ne({
  prop: "gridAutoColumns"
}), Ro = ne({
  prop: "gridAutoRows"
}), Io = ne({
  prop: "gridTemplateColumns"
}), No = ne({
  prop: "gridTemplateRows"
}), Mo = ne({
  prop: "gridTemplateAreas"
}), Do = ne({
  prop: "gridArea"
});
Tt(xt, $t, Ot, _o, Ao, ko, Po, Ro, Io, No, Mo, Do);
function Ve(e, t) {
  return t === "grey" ? t : e;
}
const Bo = ne({
  prop: "color",
  themeKey: "palette",
  transform: Ve
}), Fo = ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ve
}), Vo = ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ve
});
Tt(Bo, Fo, Vo);
function pe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const jo = ne({
  prop: "width",
  transform: pe
}), nr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || vt[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: pe(r)
      };
    };
    return $e(e, e.maxWidth, t);
  }
  return null;
};
nr.filterProps = ["maxWidth"];
const Lo = ne({
  prop: "minWidth",
  transform: pe
}), zo = ne({
  prop: "height",
  transform: pe
}), Wo = ne({
  prop: "maxHeight",
  transform: pe
}), Uo = ne({
  prop: "minHeight",
  transform: pe
});
ne({
  prop: "size",
  cssProperty: "width",
  transform: pe
});
ne({
  prop: "size",
  cssProperty: "height",
  transform: pe
});
const Yo = ne({
  prop: "boxSizing"
});
Tt(jo, nr, Lo, zo, Wo, Uo, Yo);
const _t = {
  // borders
  border: {
    themeKey: "borders",
    transform: ge
  },
  borderTop: {
    themeKey: "borders",
    transform: ge
  },
  borderRight: {
    themeKey: "borders",
    transform: ge
  },
  borderBottom: {
    themeKey: "borders",
    transform: ge
  },
  borderLeft: {
    themeKey: "borders",
    transform: ge
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ge
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: wt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ve
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ve
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ve
  },
  // spacing
  p: {
    style: te
  },
  pt: {
    style: te
  },
  pr: {
    style: te
  },
  pb: {
    style: te
  },
  pl: {
    style: te
  },
  px: {
    style: te
  },
  py: {
    style: te
  },
  padding: {
    style: te
  },
  paddingTop: {
    style: te
  },
  paddingRight: {
    style: te
  },
  paddingBottom: {
    style: te
  },
  paddingLeft: {
    style: te
  },
  paddingX: {
    style: te
  },
  paddingY: {
    style: te
  },
  paddingInline: {
    style: te
  },
  paddingInlineStart: {
    style: te
  },
  paddingInlineEnd: {
    style: te
  },
  paddingBlock: {
    style: te
  },
  paddingBlockStart: {
    style: te
  },
  paddingBlockEnd: {
    style: te
  },
  m: {
    style: ee
  },
  mt: {
    style: ee
  },
  mr: {
    style: ee
  },
  mb: {
    style: ee
  },
  ml: {
    style: ee
  },
  mx: {
    style: ee
  },
  my: {
    style: ee
  },
  margin: {
    style: ee
  },
  marginTop: {
    style: ee
  },
  marginRight: {
    style: ee
  },
  marginBottom: {
    style: ee
  },
  marginLeft: {
    style: ee
  },
  marginX: {
    style: ee
  },
  marginY: {
    style: ee
  },
  marginInline: {
    style: ee
  },
  marginInlineStart: {
    style: ee
  },
  marginInlineEnd: {
    style: ee
  },
  marginBlock: {
    style: ee
  },
  marginBlockStart: {
    style: ee
  },
  marginBlockEnd: {
    style: ee
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: xt
  },
  rowGap: {
    style: Ot
  },
  columnGap: {
    style: $t
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: pe
  },
  maxWidth: {
    style: nr
  },
  minWidth: {
    transform: pe
  },
  height: {
    transform: pe
  },
  maxHeight: {
    transform: pe
  },
  minHeight: {
    transform: pe
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function qo(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Go(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ho() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, l = i[r];
    if (!l)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: f,
      transform: d,
      style: p
    } = l;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = St(o, f) || {};
    return p ? p(s) : $e(s, n, (h) => {
      let c = ht(g, d, h);
      return h === c && typeof h == "string" && (c = ht(g, d, `${r}${h === "default" ? "" : Ie(h)}`, h)), u === !1 ? c : {
        [u]: c
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {},
      nested: i
    } = r || {};
    if (!n)
      return null;
    const s = o.unstable_sxConfig ?? _t;
    function l(u) {
      let f = u;
      if (typeof u == "function")
        f = u(o);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const d = so(o.breakpoints), p = Object.keys(d);
      let g = d;
      return Object.keys(f).forEach((v) => {
        const h = Go(f[v], o);
        if (h != null)
          if (typeof h == "object")
            if (s[v])
              g = Ke(g, e(v, h, o, s));
            else {
              const c = $e({
                theme: o
              }, h, (y) => ({
                [v]: y
              }));
              qo(c, h) ? g[v] = t({
                sx: h,
                theme: o,
                nested: !0
              }) : g = Ke(g, c);
            }
          else
            g = Ke(g, e(v, h, o, s));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Or(o, Ar(p, g))
      } : Or(o, Ar(p, g));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return t;
}
const Le = Ho();
Le.filterProps = ["sx"];
function Gt() {
  return Gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gt.apply(null, arguments);
}
function Ko(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Xo(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Qo = /* @__PURE__ */ (function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Xo(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ko(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
})(), le = "-ms-", gt = "-moz-", z = "-webkit-", sn = "comm", or = "rule", ir = "decl", Jo = "@import", cn = "@keyframes", Zo = "@layer", ei = Math.abs, At = String.fromCharCode, ti = Object.assign;
function ri(e, t) {
  return se(e, 0) ^ 45 ? (((t << 2 ^ se(e, 0)) << 2 ^ se(e, 1)) << 2 ^ se(e, 2)) << 2 ^ se(e, 3) : 0;
}
function ln(e) {
  return e.trim();
}
function ni(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function W(e, t, r) {
  return e.replace(t, r);
}
function Ht(e, t) {
  return e.indexOf(t);
}
function se(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xe(e, t, r) {
  return e.slice(t, r);
}
function Ce(e) {
  return e.length;
}
function ar(e) {
  return e.length;
}
function st(e, t) {
  return t.push(e), e;
}
function oi(e, t) {
  return e.map(t).join("");
}
var kt = 1, ze = 1, un = 0, fe = 0, ie = 0, We = "";
function Pt(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: kt, column: ze, length: s, return: "" };
}
function Ye(e, t) {
  return ti(Pt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ii() {
  return ie;
}
function ai() {
  return ie = fe > 0 ? se(We, --fe) : 0, ze--, ie === 10 && (ze = 1, kt--), ie;
}
function he() {
  return ie = fe < un ? se(We, fe++) : 0, ze++, ie === 10 && (ze = 1, kt++), ie;
}
function Te() {
  return se(We, fe);
}
function ut() {
  return fe;
}
function rt(e, t) {
  return Xe(We, e, t);
}
function Qe(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function fn(e) {
  return kt = ze = 1, un = Ce(We = e), fe = 0, [];
}
function dn(e) {
  return We = "", e;
}
function ft(e) {
  return ln(rt(fe - 1, Kt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function si(e) {
  for (; (ie = Te()) && ie < 33; )
    he();
  return Qe(e) > 2 || Qe(ie) > 3 ? "" : " ";
}
function ci(e, t) {
  for (; --t && he() && !(ie < 48 || ie > 102 || ie > 57 && ie < 65 || ie > 70 && ie < 97); )
    ;
  return rt(e, ut() + (t < 6 && Te() == 32 && he() == 32));
}
function Kt(e) {
  for (; he(); )
    switch (ie) {
      // ] ) " '
      case e:
        return fe;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Kt(ie);
        break;
      // (
      case 40:
        e === 41 && Kt(e);
        break;
      // \
      case 92:
        he();
        break;
    }
  return fe;
}
function li(e, t) {
  for (; he() && e + ie !== 57; )
    if (e + ie === 84 && Te() === 47)
      break;
  return "/*" + rt(t, fe - 1) + "*" + At(e === 47 ? e : he());
}
function ui(e) {
  for (; !Qe(Te()); )
    he();
  return rt(e, fe);
}
function fi(e) {
  return dn(dt("", null, null, null, [""], e = fn(e), 0, [0], e));
}
function dt(e, t, r, n, o, i, s, l, u) {
  for (var f = 0, d = 0, p = s, g = 0, v = 0, h = 0, c = 1, y = 1, w = 1, O = 0, k = "", E = o, b = i, C = n, A = k; y; )
    switch (h = O, O = he()) {
      // (
      case 40:
        if (h != 108 && se(A, p - 1) == 58) {
          Ht(A += W(ft(O), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        A += ft(O);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        A += si(h);
        break;
      // \
      case 92:
        A += ci(ut() - 1, 7);
        continue;
      // /
      case 47:
        switch (Te()) {
          case 42:
          case 47:
            st(di(li(he(), ut()), t, r), u);
            break;
          default:
            A += "/";
        }
        break;
      // {
      case 123 * c:
        l[f++] = Ce(A) * w;
      // } ; \0
      case 125 * c:
      case 59:
      case 0:
        switch (O) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + d:
            w == -1 && (A = W(A, /\f/g, "")), v > 0 && Ce(A) - p && st(v > 32 ? Rr(A + ";", n, r, p - 1) : Rr(W(A, " ", "") + ";", n, r, p - 2), u);
            break;
          // @ ;
          case 59:
            A += ";";
          // { rule/at-rule
          default:
            if (st(C = Pr(A, t, r, f, d, o, l, k, E = [], b = [], p), i), O === 123)
              if (d === 0)
                dt(A, t, C, C, E, i, p, l, b);
              else
                switch (g === 99 && se(A, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    dt(e, C, C, n && st(Pr(e, C, C, 0, 0, o, l, k, o, E = [], p), b), o, b, p, l, n ? E : b);
                    break;
                  default:
                    dt(A, C, C, C, [""], b, 0, l, b);
                }
        }
        f = d = v = 0, c = w = 1, k = A = "", p = s;
        break;
      // :
      case 58:
        p = 1 + Ce(A), v = h;
      default:
        if (c < 1) {
          if (O == 123)
            --c;
          else if (O == 125 && c++ == 0 && ai() == 125)
            continue;
        }
        switch (A += At(O), O * c) {
          // &
          case 38:
            w = d > 0 ? 1 : (A += "\f", -1);
            break;
          // ,
          case 44:
            l[f++] = (Ce(A) - 1) * w, w = 1;
            break;
          // @
          case 64:
            Te() === 45 && (A += ft(he())), g = Te(), d = p = Ce(k = A += ui(ut())), O++;
            break;
          // -
          case 45:
            h === 45 && Ce(A) == 2 && (c = 0);
        }
    }
  return i;
}
function Pr(e, t, r, n, o, i, s, l, u, f, d) {
  for (var p = o - 1, g = o === 0 ? i : [""], v = ar(g), h = 0, c = 0, y = 0; h < n; ++h)
    for (var w = 0, O = Xe(e, p + 1, p = ei(c = s[h])), k = e; w < v; ++w)
      (k = ln(c > 0 ? g[w] + " " + O : W(O, /&\f/g, g[w]))) && (u[y++] = k);
  return Pt(e, t, r, o === 0 ? or : l, u, f, d);
}
function di(e, t, r) {
  return Pt(e, t, r, sn, At(ii()), Xe(e, 2, -2), 0);
}
function Rr(e, t, r, n) {
  return Pt(e, t, r, ir, Xe(e, 0, n), Xe(e, n + 1, -1), n);
}
function je(e, t) {
  for (var r = "", n = ar(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function pi(e, t, r, n) {
  switch (e.type) {
    case Zo:
      if (e.children.length) break;
    case Jo:
    case ir:
      return e.return = e.return || e.value;
    case sn:
      return "";
    case cn:
      return e.return = e.value + "{" + je(e.children, n) + "}";
    case or:
      e.value = e.props.join(",");
  }
  return Ce(r = je(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function mi(e) {
  var t = ar(e);
  return function(r, n, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](r, n, o, i) || "";
    return s;
  };
}
function hi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function pn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var gi = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Te(), o === 38 && i === 12 && (r[n] = 1), !Qe(i); )
    he();
  return rt(t, fe);
}, yi = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Qe(o)) {
      case 0:
        o === 38 && Te() === 12 && (r[n] = 1), t[n] += gi(fe - 1, r, n);
        break;
      case 2:
        t[n] += ft(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Te() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += At(o);
    }
  while (o = he());
  return t;
}, bi = function(t, r) {
  return dn(yi(fn(t), r));
}, Ir = /* @__PURE__ */ new WeakMap(), vi = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Ir.get(n)) && !o) {
      Ir.set(t, !0);
      for (var i = [], s = bi(r, i), l = n.props, u = 0, f = 0; u < s.length; u++)
        for (var d = 0; d < l.length; d++, f++)
          t.props[f] = i[u] ? s[u].replace(/&\f/g, l[d]) : l[d] + " " + s[u];
    }
  }
}, Si = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function mn(e, t) {
  switch (ri(e, t)) {
    // color-adjust
    case 5103:
      return z + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return z + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return z + e + gt + e + le + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return z + e + le + e + e;
    // order
    case 6165:
      return z + e + le + "flex-" + e + e;
    // align-items
    case 5187:
      return z + e + W(e, /(\w+).+(:[^]+)/, z + "box-$1$2" + le + "flex-$1$2") + e;
    // align-self
    case 5443:
      return z + e + le + "flex-item-" + W(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return z + e + le + "flex-line-pack" + W(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return z + e + le + W(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return z + e + le + W(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return z + "box-" + W(e, "-grow", "") + z + e + le + W(e, "grow", "positive") + e;
    // transition
    case 4554:
      return z + W(e, /([^-])(transform)/g, "$1" + z + "$2") + e;
    // cursor
    case 6187:
      return W(W(W(e, /(zoom-|grab)/, z + "$1"), /(image-set)/, z + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return W(e, /(image-set\([^]*)/, z + "$1$`$1");
    // justify-content
    case 4968:
      return W(W(e, /(.+:)(flex-)?(.*)/, z + "box-pack:$3" + le + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + z + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(e, /(.+)-inline(.+)/, z + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ce(e) - 1 - t > 6) switch (se(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (se(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return W(e, /(.+:)(.+)-([^]+)/, "$1" + z + "$2-$3$1" + gt + (se(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Ht(e, "stretch") ? mn(W(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (se(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (se(e, Ce(e) - 3 - (~Ht(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return W(e, ":", ":" + z) + e;
        // (inline-)?fl(e)x
        case 101:
          return W(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + z + (se(e, 14) === 45 ? "inline-" : "") + "box$3$1" + z + "$2$3$1" + le + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (se(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return z + e + le + W(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return z + e + le + W(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return z + e + le + W(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return z + e + le + e + e;
  }
  return e;
}
var Ci = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ir:
      t.return = mn(t.value, t.length);
      break;
    case cn:
      return je([Ye(t, {
        value: W(t.value, "@", "@" + z)
      })], o);
    case or:
      if (t.length) return oi(t.props, function(i) {
        switch (ni(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return je([Ye(t, {
              props: [W(i, /:(read-\w+)/, ":" + gt + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return je([Ye(t, {
              props: [W(i, /:(plac\w+)/, ":" + z + "input-$1")]
            }), Ye(t, {
              props: [W(i, /:(plac\w+)/, ":" + gt + "$1")]
            }), Ye(t, {
              props: [W(i, /:(plac\w+)/, le + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Ei = [Ci], Ti = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(c) {
      var y = c.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(c), c.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Ei, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(c) {
      for (var y = c.getAttribute("data-emotion").split(" "), w = 1; w < y.length; w++)
        i[y[w]] = !0;
      l.push(c);
    }
  );
  var u, f = [vi, Si];
  {
    var d, p = [pi, hi(function(c) {
      d.insert(c);
    })], g = mi(f.concat(o, p)), v = function(y) {
      return je(fi(y), g);
    };
    u = function(y, w, O, k) {
      d = O, v(y ? y + "{" + w.styles + "}" : w.styles), k && (h.inserted[w.name] = !0);
    };
  }
  var h = {
    key: r,
    sheet: new Qo({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return h.sheet.hydrate(l), h;
}, wi = !0;
function xi(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var hn = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  wi === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, $i = function(t, r, n) {
  hn(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Oi(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var _i = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ai = /[A-Z]|^ms/g, ki = /_EMO_([^_]+?)_([^]*?)_EMO_/g, gn = function(t) {
  return t.charCodeAt(1) === 45;
}, Nr = function(t) {
  return t != null && typeof t != "boolean";
}, Wt = /* @__PURE__ */ pn(function(e) {
  return gn(e) ? e : e.replace(Ai, "-$&").toLowerCase();
}), Mr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ki, function(n, o, i) {
          return Ee = {
            name: o,
            styles: i,
            next: Ee
          }, o;
        });
  }
  return _i[t] !== 1 && !gn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Je(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ee = {
          name: o.name,
          styles: o.styles,
          next: Ee
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Ee = {
              name: s.name,
              styles: s.styles,
              next: Ee
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return Pi(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = Ee, f = r(e);
        return Ee = u, Je(e, t, f);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function Pi(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Je(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? n += i + "{" + t[l] + "}" : Nr(l) && (n += Wt(i) + ":" + Mr(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var u = 0; u < s.length; u++)
          Nr(s[u]) && (n += Wt(i) + ":" + Mr(i, s[u]) + ";");
      else {
        var f = Je(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Wt(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var Dr = /label:\s*([^\s;{]+)\s*(;|$)/g, Ee;
function yn(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ee = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Je(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Je(r, t, e[l]), n) {
      var u = i;
      o += u[l];
    }
  Dr.lastIndex = 0;
  for (var f = "", d; (d = Dr.exec(o)) !== null; )
    f += "-" + d[1];
  var p = Oi(o) + f;
  return {
    name: p,
    styles: o,
    next: Ee
  };
}
var Ri = function(t) {
  return t();
}, Ii = ce.useInsertionEffect ? ce.useInsertionEffect : !1, Ni = Ii || Ri, bn = /* @__PURE__ */ ce.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ti({
    key: "css"
  }) : null
);
bn.Provider;
var Mi = function(t) {
  return /* @__PURE__ */ In(function(r, n) {
    var o = Nn(bn);
    return t(r, o, n);
  });
}, Di = /* @__PURE__ */ ce.createContext({}), Bi = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fi = /* @__PURE__ */ pn(
  function(e) {
    return Bi.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Vi = Fi, ji = function(t) {
  return t !== "theme";
}, Br = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Vi : ji;
}, Fr = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Li = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return hn(r, n, o), Ni(function() {
    return $i(r, n, o);
  }), null;
}, zi = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var l = Fr(t, r, n), u = l || Br(o), f = !u("as");
  return function() {
    var d = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      var g = d[0];
      p.push(g[0]);
      for (var v = d.length, h = 1; h < v; h++)
        p.push(d[h], g[h]);
    }
    var c = Mi(function(y, w, O) {
      var k = f && y.as || o, E = "", b = [], C = y;
      if (y.theme == null) {
        C = {};
        for (var A in y)
          C[A] = y[A];
        C.theme = ce.useContext(Di);
      }
      typeof y.className == "string" ? E = xi(w.registered, b, y.className) : y.className != null && (E = y.className + " ");
      var oe = yn(p.concat(b), w.registered, C);
      E += w.key + "-" + oe.name, s !== void 0 && (E += " " + s);
      var Q = f && l === void 0 ? Br(k) : u, re = {};
      for (var J in y)
        f && J === "as" || Q(J) && (re[J] = y[J]);
      return re.className = E, O && (re.ref = O), /* @__PURE__ */ ce.createElement(ce.Fragment, null, /* @__PURE__ */ ce.createElement(Li, {
        cache: w,
        serialized: oe,
        isStringTag: typeof k == "string"
      }), /* @__PURE__ */ ce.createElement(k, re));
    });
    return c.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", c.defaultProps = t.defaultProps, c.__emotion_real = c, c.__emotion_base = o, c.__emotion_styles = p, c.__emotion_forwardProp = l, Object.defineProperty(c, "toString", {
      value: function() {
        return "." + s;
      }
    }), c.withComponent = function(y, w) {
      var O = e(y, Gt({}, r, w, {
        shouldForwardProp: Fr(c, w, !0)
      }));
      return O.apply(void 0, p);
    }, c;
  };
}, Wi = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Xt = zi.bind(null);
Wi.forEach(function(e) {
  Xt[e] = Xt(e);
});
function Ui(e, t) {
  const r = Xt(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Yi(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Vr = [];
function Re(e) {
  return Vr[0] = e, yn(Vr);
}
const qi = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Gi(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = qi(t), s = Object.keys(i);
  function l(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function u(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function f(g, v) {
    const h = s.indexOf(v);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(h !== -1 && typeof t[s[h]] == "number" ? t[s[h]] : v) - n / 100}${r})`;
  }
  function d(g) {
    return s.indexOf(g) + 1 < s.length ? f(g, s[s.indexOf(g) + 1]) : l(g);
  }
  function p(g) {
    const v = s.indexOf(g);
    return v === 0 ? l(s[1]) : v === s.length - 1 ? u(s[v]) : f(g, s[s.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: l,
    down: u,
    between: f,
    only: d,
    not: p,
    unit: r,
    ...o
  };
}
const Hi = {
  borderRadius: 4
};
function vn(e = 8, t = rr({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function Ki(e, t) {
  const r = this;
  if (r.vars) {
    if (!r.colorSchemes?.[e] || typeof r.getColorSchemeSelector != "function")
      return {};
    let n = r.getColorSchemeSelector(e);
    return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
      [n]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Sn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = Gi(r), u = vn(o);
  let f = me({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...Hi,
      ...i
    }
  }, s);
  return f = io(f), f.applyStyles = Ki, f = t.reduce((d, p) => me(d, p), f), f.unstable_sxConfig = {
    ..._t,
    ...s?.unstable_sxConfig
  }, f.unstable_sx = function(p) {
    return Le({
      sx: p,
      theme: this
    });
  }, f;
}
const Xi = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function sr(e, t, r = "Mui") {
  const n = Xi[t];
  return n ? `${r}-${n}` : `${Wn.generate(e)}-${t}`;
}
function Qi(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = sr(e, o, r);
  }), n;
}
function Cn(e, t = "") {
  return e.displayName || e.name || t;
}
function jr(e, t, r) {
  const n = Cn(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Ji(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Cn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case mt.ForwardRef:
          return jr(e, e.render, "ForwardRef");
        case mt.Memo:
          return jr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function En(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Re(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Re(o.style));
  }), n;
}
const Zi = Sn();
function Ut(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Pe(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function ea(e) {
  return e ? (t, r) => r[e] : null;
}
function ta(e, t, r) {
  e.theme = ia(e.theme) ? r : e.theme[t] || e.theme;
}
function pt(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => pt(e, o, r));
  if (Array.isArray(n?.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? Pe(n.style, r) : n.style;
    else {
      const {
        variants: i,
        ...s
      } = n;
      o = r ? Pe(Re(s), r) : s;
    }
    return Tn(e, n.variants, [o], r);
  }
  return n?.isProcessed ? r ? Pe(Re(n.style), r) : n.style : r ? Pe(Re(n), r) : n;
}
function Tn(e, t, r = [], n = void 0) {
  let o;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !s.props(o))
        continue;
    } else
      for (const l in s.props)
        if (e[l] !== s.props[l] && e.ownerState?.[l] !== s.props[l])
          continue e;
    typeof s.style == "function" ? (o ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, r.push(n ? Pe(Re(s.style(o)), n) : s.style(o))) : r.push(n ? Pe(Re(s.style), n) : s.style);
  }
  return r;
}
function ra(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Zi,
    rootShouldForwardProp: n = Ut,
    slotShouldForwardProp: o = Ut
  } = e;
  function i(l) {
    ta(l, t, r);
  }
  return (l, u = {}) => {
    Yi(l, (C) => C.filter((A) => A !== Le));
    const {
      name: f,
      slot: d,
      skipVariantsResolver: p,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = ea(wn(d)),
      ...h
    } = u, c = f && f.startsWith("Mui") || d ? "components" : "custom", y = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), w = g || !1;
    let O = Ut;
    d === "Root" || d === "root" ? O = n : d ? O = o : aa(l) && (O = void 0);
    const k = Ui(l, {
      shouldForwardProp: O,
      label: oa(f, d),
      ...h
    }), E = (C) => {
      if (C.__emotion_real === C)
        return C;
      if (typeof C == "function")
        return function(oe) {
          return pt(oe, C, oe.theme.modularCssLayers ? c : void 0);
        };
      if (xe(C)) {
        const A = En(C);
        return function(Q) {
          return A.variants ? pt(Q, A, Q.theme.modularCssLayers ? c : void 0) : Q.theme.modularCssLayers ? Pe(A.style, c) : A.style;
        };
      }
      return C;
    }, b = (...C) => {
      const A = [], oe = C.map(E), Q = [];
      if (A.push(i), f && v && Q.push(function(_) {
        const P = _.theme.components?.[f]?.styleOverrides;
        if (!P)
          return null;
        const B = {};
        for (const ae in P)
          B[ae] = pt(_, P[ae], _.theme.modularCssLayers ? "theme" : void 0);
        return v(_, B);
      }), f && !y && Q.push(function(_) {
        const P = _.theme?.components?.[f]?.variants;
        return P ? Tn(_, P, [], _.theme.modularCssLayers ? "theme" : void 0) : null;
      }), w || Q.push(Le), Array.isArray(oe[0])) {
        const a = oe.shift(), _ = new Array(A.length).fill(""), T = new Array(Q.length).fill("");
        let P;
        P = [..._, ...a, ...T], P.raw = [..._, ...a.raw, ...T], A.unshift(P);
      }
      const re = [...A, ...oe, ...Q], J = k(...re);
      return l.muiName && (J.muiName = l.muiName), process.env.NODE_ENV !== "production" && (J.displayName = na(f, d, l)), J;
    };
    return k.withConfig && (b.withConfig = k.withConfig), b;
  };
}
function na(e, t, r) {
  return e ? `${e}${Ie(t || "")}` : `Styled(${Ji(r)})`;
}
function oa(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${wn(t || "Root")}`), r;
}
function ia(e) {
  for (const t in e)
    return !1;
  return !0;
}
function aa(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function wn(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Qt(e, t, r = !1) {
  const n = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const s = e[i], l = t[i];
        if (!l)
          n[i] = s || {};
        else if (!s)
          n[i] = l;
        else {
          n[i] = {
            ...l
          };
          for (const u in s)
            if (Object.prototype.hasOwnProperty.call(s, u)) {
              const f = u;
              n[i][f] = Qt(s[f], l[f], r);
            }
        }
      } else i === "className" && r && t.className ? n.className = nn(e?.className, t?.className) : i === "style" && r && t.style ? n.style = {
        ...e?.style,
        ...t?.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
function sa(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function cr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), sa(e, t, r);
}
function ca(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function _e(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return _e(ca(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Oe(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Oe(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const la = (e) => {
  const t = _e(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Ge = (e, t) => {
  try {
    return la(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Rt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function xn(e) {
  e = _e(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (f, d = (f + r / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const u = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", u.push(t[3])), Rt({
    type: l,
    values: u
  });
}
function Jt(e) {
  e = _e(e);
  let t = e.type === "hsl" || e.type === "hsla" ? _e(xn(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Lr(e, t) {
  const r = Jt(e), n = Jt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function $n(e, t) {
  return e = _e(e), t = cr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Rt(e);
}
function ke(e, t, r) {
  try {
    return $n(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function It(e, t) {
  if (e = _e(e), t = cr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Rt(e);
}
function G(e, t, r) {
  try {
    return It(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Nt(e, t) {
  if (e = _e(e), t = cr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Rt(e);
}
function H(e, t, r) {
  try {
    return Nt(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ua(e, t = 0.15) {
  return Jt(e) > 0.5 ? It(e, t) : Nt(e, t);
}
function ct(e, t, r) {
  try {
    return ua(e, t);
  } catch {
    return e;
  }
}
const fa = /* @__PURE__ */ ce.createContext(void 0);
process.env.NODE_ENV !== "production" && (L.node, L.object);
function da(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Qt(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Qt(o, n, t.components.mergeClassNameAndStyle) : n;
}
function pa({
  props: e,
  name: t
}) {
  const r = ce.useContext(fa);
  return da({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const zr = {
  theme: void 0
};
function ma(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (zr.theme = o.theme, i = En(e(zr)), t = i, r = o.theme), i;
  };
}
function ha(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Wr = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, ga = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([l, u]) => {
      (!r || r && !r([...i, l])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, l], Array.isArray(u) ? [...s, l] : s) : t([...i, l], u, s));
    });
  }
  n(e);
}, ya = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Yt(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return ga(
    e,
    (l, u, f) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(l, u))) {
        const d = `--${r ? `${r}-` : ""}${l.join("-")}`, p = ya(l, u);
        Object.assign(o, {
          [d]: p
        }), Wr(i, l, `var(${d})`, f), Wr(s, l, `var(${d}, ${p})`, f);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function ba(e, t = {}) {
  const {
    getSelector: r = w,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: s = {},
    components: l,
    defaultColorScheme: u = "light",
    ...f
  } = e, {
    vars: d,
    css: p,
    varsWithDefaults: g
  } = Yt(f, t);
  let v = g;
  const h = {}, {
    [u]: c,
    ...y
  } = s;
  if (Object.entries(y || {}).forEach(([E, b]) => {
    const {
      vars: C,
      css: A,
      varsWithDefaults: oe
    } = Yt(b, t);
    v = me(v, oe), h[E] = {
      css: A,
      vars: C
    };
  }), c) {
    const {
      css: E,
      vars: b,
      varsWithDefaults: C
    } = Yt(c, t);
    v = me(v, C), h[u] = {
      css: E,
      vars: b
    };
  }
  function w(E, b) {
    let C = o;
    if (o === "class" && (C = ".%s"), o === "data" && (C = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (C = `[${o}="%s"]`), E) {
      if (C === "media")
        return e.defaultColorScheme === E ? ":root" : {
          [`@media (prefers-color-scheme: ${s[E]?.palette?.mode || E})`]: {
            ":root": b
          }
        };
      if (C)
        return e.defaultColorScheme === E ? `:root, ${C.replace("%s", String(E))}` : C.replace("%s", String(E));
    }
    return ":root";
  }
  return {
    vars: v,
    generateThemeVars: () => {
      let E = {
        ...d
      };
      return Object.entries(h).forEach(([, {
        vars: b
      }]) => {
        E = me(E, b);
      }), E;
    },
    generateStyleSheets: () => {
      const E = [], b = e.defaultColorScheme || "light";
      function C(Q, re) {
        Object.keys(re).length && E.push(typeof Q == "string" ? {
          [Q]: {
            ...re
          }
        } : Q);
      }
      C(r(void 0, {
        ...p
      }), p);
      const {
        [b]: A,
        ...oe
      } = h;
      if (A) {
        const {
          css: Q
        } = A, re = s[b]?.palette?.mode, J = !n && re ? {
          colorScheme: re,
          ...Q
        } : {
          ...Q
        };
        C(r(b, {
          ...J
        }), J);
      }
      return Object.entries(oe).forEach(([Q, {
        css: re
      }]) => {
        const J = s[Q]?.palette?.mode, a = !n && J ? {
          colorScheme: J,
          ...re
        } : {
          ...re
        };
        C(r(Q, {
          ...a
        }), a);
      }), i && E.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), E;
    }
  };
}
function va(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Ze = {
  black: "#000",
  white: "#fff"
}, Sa = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ne = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Me = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, qe = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, De = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Be = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Fe = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function On() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Ze.white,
      default: Ze.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const _n = On();
function An() {
  return {
    text: {
      primary: Ze.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Ze.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Zt = An();
function Ur(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Nt(e.main, o) : t === "dark" && (e.dark = It(e.main, i)));
}
function Yr(e, t, r, n, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Ca(e = "light") {
  return e === "dark" ? {
    main: De[200],
    light: De[50],
    dark: De[400]
  } : {
    main: De[700],
    light: De[400],
    dark: De[800]
  };
}
function Ea(e = "light") {
  return e === "dark" ? {
    main: Ne[200],
    light: Ne[50],
    dark: Ne[400]
  } : {
    main: Ne[500],
    light: Ne[300],
    dark: Ne[700]
  };
}
function Ta(e = "light") {
  return e === "dark" ? {
    main: Me[500],
    light: Me[300],
    dark: Me[700]
  } : {
    main: Me[700],
    light: Me[400],
    dark: Me[800]
  };
}
function wa(e = "light") {
  return e === "dark" ? {
    main: Be[400],
    light: Be[300],
    dark: Be[700]
  } : {
    main: Be[700],
    light: Be[500],
    dark: Be[900]
  };
}
function xa(e = "light") {
  return e === "dark" ? {
    main: Fe[400],
    light: Fe[300],
    dark: Fe[700]
  } : {
    main: Fe[800],
    light: Fe[500],
    dark: Fe[900]
  };
}
function $a(e = "light") {
  return e === "dark" ? {
    main: qe[400],
    light: qe[300],
    dark: qe[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: qe[500],
    dark: qe[900]
  };
}
function Oa(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function lr(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || Ca(t), l = e.secondary || Ea(t), u = e.error || Ta(t), f = e.info || wa(t), d = e.success || xa(t), p = e.warning || $a(t);
  function g(y) {
    if (o)
      return Oa(y);
    const w = Lr(y, Zt.text.primary) >= r ? Zt.text.primary : _n.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = Lr(y, w);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${w} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return w;
  }
  const v = ({
    color: y,
    name: w,
    mainShade: O = 500,
    lightShade: k = 300,
    darkShade: E = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[O] && (y.main = y[O]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : Oe(11, w ? ` (${w})` : "", O));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Oe(12, w ? ` (${w})` : "", JSON.stringify(y.main)));
    return o ? (Yr(o, y, "light", k, n), Yr(o, y, "dark", E, n)) : (Ur(y, "light", k, n), Ur(y, "dark", E, n)), y.contrastText || (y.contrastText = g(y.main)), y;
  };
  let h;
  return t === "light" ? h = On() : t === "dark" && (h = An()), process.env.NODE_ENV !== "production" && (h || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), me({
    // A collection of common colors.
    common: {
      ...Ze
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: v({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: v({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: v({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: v({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: v({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: v({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Sa,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: v,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...h
  }, i);
}
function _a(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Aa(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function ka(e) {
  return Math.round(e * 1e5) / 1e5;
}
const qr = {
  textTransform: "uppercase"
}, Gr = '"Roboto", "Helvetica", "Arial", sans-serif';
function Pa(e, t) {
  const {
    fontFamily: r = Gr,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: d,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, v = d || ((y) => `${y / u * g}rem`), h = (y, w, O, k, E) => ({
    fontFamily: r,
    fontWeight: y,
    fontSize: v(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Gr ? {
      letterSpacing: `${ka(k / w)}em`
    } : {},
    ...E,
    ...f
  }), c = {
    h1: h(o, 96, 1.167, -1.5),
    h2: h(o, 60, 1.2, -0.5),
    h3: h(i, 48, 1.167, 0),
    h4: h(i, 34, 1.235, 0.25),
    h5: h(i, 24, 1.334, 0),
    h6: h(s, 20, 1.6, 0.15),
    subtitle1: h(i, 16, 1.75, 0.15),
    subtitle2: h(s, 14, 1.57, 0.1),
    body1: h(i, 16, 1.5, 0.15),
    body2: h(i, 14, 1.43, 0.15),
    button: h(s, 14, 1.75, 0.4, qr),
    caption: h(i, 12, 1.66, 0.4),
    overline: h(i, 12, 2.66, 1, qr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return me({
    htmlFontSize: u,
    pxToRem: v,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...c
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Ra = 0.2, Ia = 0.14, Na = 0.12;
function Z(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ra})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ia})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Na})`].join(",");
}
const Ma = ["none", Z(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Z(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Z(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Z(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Z(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Z(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Z(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Z(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Z(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Z(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Z(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Z(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Z(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Z(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Z(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Z(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Z(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Z(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Z(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Z(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Z(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Z(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Z(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Z(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Da = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ba = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Hr(e) {
  return `${Math.round(e)}ms`;
}
function Fa(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Va(e) {
  const t = {
    ...Da,
    ...e.easing
  }, r = {
    ...Ba,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Fa,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: l = t.easeInOut,
        delay: u = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const d = (g) => typeof g == "string", p = (g) => !Number.isNaN(parseFloat(g));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !p(u) && !d(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof s == "string" ? s : Hr(s)} ${l} ${typeof u == "string" ? u : Hr(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const ja = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function La(e) {
  return xe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function kn(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !La(l) || s.startsWith("unstable_") ? delete n[s] : xe(l) && (n[s] = {
        ...l
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Kr(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const za = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let n = 0; n < t.length; n += 1)
    r += +t[n];
  return r;
};
function Wa(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : $n(t, za(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Kr(r)})` : Nt(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Kr(r)})` : It(t, r);
    }
  });
}
function er(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: l = {},
    shape: u,
    colorSpace: f,
    ...d
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Oe(20));
  const p = lr({
    ...i,
    colorSpace: f
  }), g = Sn(e);
  let v = me(g, {
    mixins: Aa(g.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ma.slice(),
    typography: Pa(p, l),
    transitions: Va(s),
    zIndex: {
      ...ja
    }
  });
  if (v = me(v, d), v = t.reduce((h, c) => me(h, c), v), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], c = (y, w) => {
      let O;
      for (O in y) {
        const k = y[O];
        if (h.includes(O) && Object.keys(k).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = sr("", O);
            console.error([`MUI: The \`${w}\` component increases the CSS specificity of the \`${O}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: k
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[O] = {};
        }
      }
    };
    Object.keys(v.components).forEach((y) => {
      const w = v.components[y].styleOverrides;
      w && y.startsWith("Mui") && c(w, y);
    });
  }
  return v.unstable_sxConfig = {
    ..._t,
    ...d?.unstable_sxConfig
  }, v.unstable_sx = function(c) {
    return Le({
      sx: c,
      theme: this
    });
  }, v.toRuntimeSource = kn, Wa(v), v;
}
function Ua(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Ya = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Ua(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Pn(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Rn(e) {
  return e === "dark" ? Ya : [];
}
function qa(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, s = lr({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...Pn(s.mode),
      ...r
    },
    overlays: n || Rn(s.mode),
    ...i
  };
}
function Ga(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Ha = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ka = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Ha(e.cssVarPrefix).forEach((l) => {
        s[l] = r[l], delete r[l];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function Xa(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function m(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function He(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : xn(e);
}
function we(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ge(He(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Qa(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Se = (e) => {
  try {
    return e();
  } catch {
  }
}, Ja = (e = "mui") => ha(e);
function qt(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = qa({
      ...r,
      palette: {
        mode: i,
        ...r?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: s,
    ...l
  } = er({
    ...n,
    palette: {
      mode: i,
      ...r?.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: s,
    opacity: {
      ...Pn(i),
      ...r?.opacity
    },
    overlays: r?.overlays || Rn(i)
  }, l;
}
function Za(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = Ga,
    colorSchemeSelector: u = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...d
  } = e, p = Object.keys(r)[0], g = n || (r.light && p !== "light" ? "light" : p), v = Ja(i), {
    [g]: h,
    light: c,
    dark: y,
    ...w
  } = r, O = {
    ...w
  };
  let k = h;
  if ((g === "dark" && !("dark" in r) || g === "light" && !("light" in r)) && (k = !0), !k)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : Oe(21, g));
  let E;
  s && (E = "oklch");
  const b = qt(E, O, k, d, g);
  c && !O.light && qt(E, O, c, void 0, "light"), y && !O.dark && qt(E, O, y, void 0, "dark");
  let C = {
    defaultColorScheme: g,
    ...b,
    cssVarPrefix: i,
    colorSchemeSelector: u,
    rootSelector: f,
    getCssVar: v,
    colorSchemes: O,
    font: {
      ..._a(b.typography),
      ...b.font
    },
    spacing: Qa(d.spacing)
  };
  Object.keys(C.colorSchemes).forEach((J) => {
    const a = C.colorSchemes[J].palette, _ = (P) => {
      const B = P.split("-"), ae = B[1], be = B[2];
      return v(P, a[ae][be]);
    };
    a.mode === "light" && (m(a.common, "background", "#fff"), m(a.common, "onBackground", "#000")), a.mode === "dark" && (m(a.common, "background", "#000"), m(a.common, "onBackground", "#fff"));
    function T(P, B, ae) {
      if (E) {
        let be;
        return P === ke && (be = `transparent ${((1 - ae) * 100).toFixed(0)}%`), P === G && (be = `#000 ${(ae * 100).toFixed(0)}%`), P === H && (be = `#fff ${(ae * 100).toFixed(0)}%`), `color-mix(in ${E}, ${B}, ${be})`;
      }
      return P(B, ae);
    }
    if (Xa(a, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), a.mode === "light") {
      m(a.Alert, "errorColor", T(G, a.error.light, 0.6)), m(a.Alert, "infoColor", T(G, a.info.light, 0.6)), m(a.Alert, "successColor", T(G, a.success.light, 0.6)), m(a.Alert, "warningColor", T(G, a.warning.light, 0.6)), m(a.Alert, "errorFilledBg", _("palette-error-main")), m(a.Alert, "infoFilledBg", _("palette-info-main")), m(a.Alert, "successFilledBg", _("palette-success-main")), m(a.Alert, "warningFilledBg", _("palette-warning-main")), m(a.Alert, "errorFilledColor", Se(() => a.getContrastText(a.error.main))), m(a.Alert, "infoFilledColor", Se(() => a.getContrastText(a.info.main))), m(a.Alert, "successFilledColor", Se(() => a.getContrastText(a.success.main))), m(a.Alert, "warningFilledColor", Se(() => a.getContrastText(a.warning.main))), m(a.Alert, "errorStandardBg", T(H, a.error.light, 0.9)), m(a.Alert, "infoStandardBg", T(H, a.info.light, 0.9)), m(a.Alert, "successStandardBg", T(H, a.success.light, 0.9)), m(a.Alert, "warningStandardBg", T(H, a.warning.light, 0.9)), m(a.Alert, "errorIconColor", _("palette-error-main")), m(a.Alert, "infoIconColor", _("palette-info-main")), m(a.Alert, "successIconColor", _("palette-success-main")), m(a.Alert, "warningIconColor", _("palette-warning-main")), m(a.AppBar, "defaultBg", _("palette-grey-100")), m(a.Avatar, "defaultBg", _("palette-grey-400")), m(a.Button, "inheritContainedBg", _("palette-grey-300")), m(a.Button, "inheritContainedHoverBg", _("palette-grey-A100")), m(a.Chip, "defaultBorder", _("palette-grey-400")), m(a.Chip, "defaultAvatarColor", _("palette-grey-700")), m(a.Chip, "defaultIconColor", _("palette-grey-700")), m(a.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), m(a.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), m(a.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), m(a.LinearProgress, "primaryBg", T(H, a.primary.main, 0.62)), m(a.LinearProgress, "secondaryBg", T(H, a.secondary.main, 0.62)), m(a.LinearProgress, "errorBg", T(H, a.error.main, 0.62)), m(a.LinearProgress, "infoBg", T(H, a.info.main, 0.62)), m(a.LinearProgress, "successBg", T(H, a.success.main, 0.62)), m(a.LinearProgress, "warningBg", T(H, a.warning.main, 0.62)), m(a.Skeleton, "bg", E ? T(ke, a.text.primary, 0.11) : `rgba(${_("palette-text-primaryChannel")} / 0.11)`), m(a.Slider, "primaryTrack", T(H, a.primary.main, 0.62)), m(a.Slider, "secondaryTrack", T(H, a.secondary.main, 0.62)), m(a.Slider, "errorTrack", T(H, a.error.main, 0.62)), m(a.Slider, "infoTrack", T(H, a.info.main, 0.62)), m(a.Slider, "successTrack", T(H, a.success.main, 0.62)), m(a.Slider, "warningTrack", T(H, a.warning.main, 0.62));
      const P = E ? T(G, a.background.default, 0.6825) : ct(a.background.default, 0.8);
      m(a.SnackbarContent, "bg", P), m(a.SnackbarContent, "color", Se(() => E ? Zt.text.primary : a.getContrastText(P))), m(a.SpeedDialAction, "fabHoverBg", ct(a.background.paper, 0.15)), m(a.StepConnector, "border", _("palette-grey-400")), m(a.StepContent, "border", _("palette-grey-400")), m(a.Switch, "defaultColor", _("palette-common-white")), m(a.Switch, "defaultDisabledColor", _("palette-grey-100")), m(a.Switch, "primaryDisabledColor", T(H, a.primary.main, 0.62)), m(a.Switch, "secondaryDisabledColor", T(H, a.secondary.main, 0.62)), m(a.Switch, "errorDisabledColor", T(H, a.error.main, 0.62)), m(a.Switch, "infoDisabledColor", T(H, a.info.main, 0.62)), m(a.Switch, "successDisabledColor", T(H, a.success.main, 0.62)), m(a.Switch, "warningDisabledColor", T(H, a.warning.main, 0.62)), m(a.TableCell, "border", T(H, T(ke, a.divider, 1), 0.88)), m(a.Tooltip, "bg", T(ke, a.grey[700], 0.92));
    }
    if (a.mode === "dark") {
      m(a.Alert, "errorColor", T(H, a.error.light, 0.6)), m(a.Alert, "infoColor", T(H, a.info.light, 0.6)), m(a.Alert, "successColor", T(H, a.success.light, 0.6)), m(a.Alert, "warningColor", T(H, a.warning.light, 0.6)), m(a.Alert, "errorFilledBg", _("palette-error-dark")), m(a.Alert, "infoFilledBg", _("palette-info-dark")), m(a.Alert, "successFilledBg", _("palette-success-dark")), m(a.Alert, "warningFilledBg", _("palette-warning-dark")), m(a.Alert, "errorFilledColor", Se(() => a.getContrastText(a.error.dark))), m(a.Alert, "infoFilledColor", Se(() => a.getContrastText(a.info.dark))), m(a.Alert, "successFilledColor", Se(() => a.getContrastText(a.success.dark))), m(a.Alert, "warningFilledColor", Se(() => a.getContrastText(a.warning.dark))), m(a.Alert, "errorStandardBg", T(G, a.error.light, 0.9)), m(a.Alert, "infoStandardBg", T(G, a.info.light, 0.9)), m(a.Alert, "successStandardBg", T(G, a.success.light, 0.9)), m(a.Alert, "warningStandardBg", T(G, a.warning.light, 0.9)), m(a.Alert, "errorIconColor", _("palette-error-main")), m(a.Alert, "infoIconColor", _("palette-info-main")), m(a.Alert, "successIconColor", _("palette-success-main")), m(a.Alert, "warningIconColor", _("palette-warning-main")), m(a.AppBar, "defaultBg", _("palette-grey-900")), m(a.AppBar, "darkBg", _("palette-background-paper")), m(a.AppBar, "darkColor", _("palette-text-primary")), m(a.Avatar, "defaultBg", _("palette-grey-600")), m(a.Button, "inheritContainedBg", _("palette-grey-800")), m(a.Button, "inheritContainedHoverBg", _("palette-grey-700")), m(a.Chip, "defaultBorder", _("palette-grey-700")), m(a.Chip, "defaultAvatarColor", _("palette-grey-300")), m(a.Chip, "defaultIconColor", _("palette-grey-300")), m(a.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), m(a.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), m(a.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), m(a.LinearProgress, "primaryBg", T(G, a.primary.main, 0.5)), m(a.LinearProgress, "secondaryBg", T(G, a.secondary.main, 0.5)), m(a.LinearProgress, "errorBg", T(G, a.error.main, 0.5)), m(a.LinearProgress, "infoBg", T(G, a.info.main, 0.5)), m(a.LinearProgress, "successBg", T(G, a.success.main, 0.5)), m(a.LinearProgress, "warningBg", T(G, a.warning.main, 0.5)), m(a.Skeleton, "bg", E ? T(ke, a.text.primary, 0.13) : `rgba(${_("palette-text-primaryChannel")} / 0.13)`), m(a.Slider, "primaryTrack", T(G, a.primary.main, 0.5)), m(a.Slider, "secondaryTrack", T(G, a.secondary.main, 0.5)), m(a.Slider, "errorTrack", T(G, a.error.main, 0.5)), m(a.Slider, "infoTrack", T(G, a.info.main, 0.5)), m(a.Slider, "successTrack", T(G, a.success.main, 0.5)), m(a.Slider, "warningTrack", T(G, a.warning.main, 0.5));
      const P = E ? T(H, a.background.default, 0.985) : ct(a.background.default, 0.98);
      m(a.SnackbarContent, "bg", P), m(a.SnackbarContent, "color", Se(() => E ? _n.text.primary : a.getContrastText(P))), m(a.SpeedDialAction, "fabHoverBg", ct(a.background.paper, 0.15)), m(a.StepConnector, "border", _("palette-grey-600")), m(a.StepContent, "border", _("palette-grey-600")), m(a.Switch, "defaultColor", _("palette-grey-300")), m(a.Switch, "defaultDisabledColor", _("palette-grey-600")), m(a.Switch, "primaryDisabledColor", T(G, a.primary.main, 0.55)), m(a.Switch, "secondaryDisabledColor", T(G, a.secondary.main, 0.55)), m(a.Switch, "errorDisabledColor", T(G, a.error.main, 0.55)), m(a.Switch, "infoDisabledColor", T(G, a.info.main, 0.55)), m(a.Switch, "successDisabledColor", T(G, a.success.main, 0.55)), m(a.Switch, "warningDisabledColor", T(G, a.warning.main, 0.55)), m(a.TableCell, "border", T(G, T(ke, a.divider, 1), 0.68)), m(a.Tooltip, "bg", T(ke, a.grey[700], 0.92));
    }
    we(a.background, "default"), we(a.background, "paper"), we(a.common, "background"), we(a.common, "onBackground"), we(a, "divider"), Object.keys(a).forEach((P) => {
      const B = a[P];
      P !== "tonalOffset" && B && typeof B == "object" && (B.main && m(a[P], "mainChannel", Ge(He(B.main))), B.light && m(a[P], "lightChannel", Ge(He(B.light))), B.dark && m(a[P], "darkChannel", Ge(He(B.dark))), B.contrastText && m(a[P], "contrastTextChannel", Ge(He(B.contrastText))), P === "text" && (we(a[P], "primary"), we(a[P], "secondary")), P === "action" && (B.active && we(a[P], "active"), B.selected && we(a[P], "selected")));
    });
  }), C = t.reduce((J, a) => me(J, a), C);
  const A = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: Ka(C),
    enableContrastVars: s
  }, {
    vars: oe,
    generateThemeVars: Q,
    generateStyleSheets: re
  } = ba(C, A);
  return C.vars = oe, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([J, a]) => {
    C[J] = a;
  }), C.generateThemeVars = Q, C.generateStyleSheets = re, C.generateSpacing = function() {
    return vn(d.spacing, rr(this));
  }, C.getColorSchemeSelector = va(u), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = l, C.unstable_sxConfig = {
    ..._t,
    ...d?.unstable_sxConfig
  }, C.unstable_sx = function(a) {
    return Le({
      sx: a,
      theme: this
    });
  }, C.toRuntimeSource = kn, C;
}
function Xr(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: lr({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function es(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r?.mode,
    ...s
  } = e, l = i || "light", u = o?.[l], f = {
    ...o,
    ...r ? {
      [l]: {
        ...typeof u != "boolean" && u,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return er(e, ...t);
    let d = r;
    "palette" in e || f[l] && (f[l] !== !0 ? d = f[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const p = er({
      ...e,
      palette: d
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = f, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: p.palette
    }, Xr(p, "dark", f.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: p.palette
    }, Xr(p, "light", f.light)), p;
  }
  return !r && !("light" in f) && l === "light" && (f.light = !0), Za({
    ...s,
    colorSchemes: f,
    defaultColorScheme: l,
    ...typeof n != "boolean" && n
  }, ...t);
}
const ts = es(), rs = "$$material";
function ns(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const os = (e) => ns(e) && e !== "classes", is = ra({
  themeId: rs,
  defaultTheme: ts,
  rootShouldForwardProp: os
}), as = ma;
process.env.NODE_ENV !== "production" && (L.node, L.object.isRequired);
function ss(e) {
  return pa(e);
}
function cs(e) {
  return sr("MuiSvgIcon", e);
}
Qi("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const ls = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Ie(t)}`, `fontSize${Ie(r)}`]
  };
  return Zn(o, cs, n);
}, us = is("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Ie(r.color)}`], t[`fontSize${Ie(r.fontSize)}`]];
  }
})(as(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: e.transitions?.create?.("fill", {
    duration: (e.vars ?? e).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (t) => !t.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => ({
      props: {
        color: t
      },
      style: {
        color: (e.vars ?? e).palette?.[t]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), yt = /* @__PURE__ */ ce.forwardRef(function(t, r) {
  const n = ss({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: l = "svg",
    fontSize: u = "medium",
    htmlColor: f,
    inheritViewBox: d = !1,
    titleAccess: p,
    viewBox: g = "0 0 24 24",
    ...v
  } = n, h = /* @__PURE__ */ ce.isValidElement(o) && o.type === "svg", c = {
    ...n,
    color: s,
    component: l,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: g,
    hasSvgAsChild: h
  }, y = {};
  d || (y.viewBox = g);
  const w = ls(c);
  return /* @__PURE__ */ lt(us, {
    as: l,
    className: nn(w.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r,
    ...y,
    ...v,
    ...h && o.props,
    ownerState: c,
    children: [h ? o.props.children : o, p ? /* @__PURE__ */ de("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (yt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: L.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: L.object,
  /**
   * @ignore
   */
  className: L.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: L.oneOfType([L.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), L.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: L.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: L.oneOfType([L.oneOf(["inherit", "large", "medium", "small"]), L.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: L.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: L.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: L.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: L.oneOfType([L.arrayOf(L.oneOfType([L.func, L.object, L.bool])), L.func, L.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: L.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: L.string
});
yt.muiName = "SvgIcon";
function ur(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ de(yt, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = yt.muiName, /* @__PURE__ */ ce.memo(/* @__PURE__ */ ce.forwardRef(r));
}
const fs = ur(/* @__PURE__ */ de("path", {
  d: "M6 19h4V5H6zm8-14v14h4V5z"
}), "Pause"), ds = ur(/* @__PURE__ */ de("path", {
  d: "M8 5v14l11-7z"
}), "PlayArrow"), ps = ur(/* @__PURE__ */ de("path", {
  d: "M6 6h12v12H6z"
}), "Stop"), ms = 20;
function hs({ videoId: e }) {
  const [t, r] = Ue("stop"), [n, o] = Ue(null), [i, s] = Ue({}), [l, u] = Ue(null), [f, d] = Ue(0), p = Mn(document.createElement("div"));
  Dt(() => {
    e && Dn(e).then((h) => {
      o(h);
    });
  }, [e]), Dt(() => {
    if (!p?.current) return;
    const { current: h } = p, { size: c } = h.computedStyleMap(), y = 100 / c * ms;
    d(y);
  }, [p]), Dt(() => {
    !n || !t || (t === "start" && !l ? u(setInterval(() => {
      const h = n.getCurrentTime() / n.getDuration() * 100 - f;
      s({ time: h });
    }, 500)) : (clearInterval(l), u(null), t === "stop" && s({ time: 0 })));
  }, [
    n,
    t,
    f
  ]);
  const g = dr((h) => {
    if (!n) return;
    const { nativeEvent: c } = h, { offsetX: y, target: w } = c, { size: O } = w.computedStyleMap(), k = f / 100, E = (y + k) / O, b = E * n.getDuration(), C = E * 100;
    n.seekTo(b), s({ time: C });
  }, [
    n,
    f
  ]), v = dr((h) => {
    r(h), {
      start: Vn,
      pause: jn,
      stop: Ln
    }[h]();
  }, [t]);
  return /* @__PURE__ */ lt("div", { className: "audio-player", children: [
    /* @__PURE__ */ lt("div", { className: "controls", children: [
      /* @__PURE__ */ de("div", { className: `ctl start ${t === "start" && "active"}`, onClick: () => v("start"), children: /* @__PURE__ */ de(ds, {}) }),
      /* @__PURE__ */ de("div", { className: `ctl pause ${t === "pause" && "active"}`, onClick: () => v("pause"), children: /* @__PURE__ */ de(fs, {}) }),
      /* @__PURE__ */ de("div", { className: `ctl stop ${t === "stop" && "active"}`, onClick: () => v("stop"), children: /* @__PURE__ */ de(ps, {}) })
    ] }),
    /* @__PURE__ */ lt(
      "div",
      {
        className: "status-container",
        ref: p,
        onClick: g,
        children: [
          /* @__PURE__ */ de("div", { className: "base" }),
          /* @__PURE__ */ de("div", { className: "status", style: { width: (i.time || 0) + "%" } })
        ]
      }
    )
  ] });
}
const bs = { AudioPlayer: hs };
export {
  hs as AudioPlayer,
  bs as default
};
