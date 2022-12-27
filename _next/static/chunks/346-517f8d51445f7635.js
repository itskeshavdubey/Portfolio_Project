(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [346],
  {
    3454: function (t, e, n) {
      "use strict";
      var i, r;
      t.exports =
        (null == (i = n.g.process) ? void 0 : i.env) &&
        "object" == typeof (null == (r = n.g.process) ? void 0 : r.env)
          ? n.g.process
          : n(7663);
    },
    227: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getDomainLocale = function (t, e, n, i) {
          return !1;
        }),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    1551: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = n(2648).Z,
        r = n(7273).Z,
        o = i(n(7294)),
        s = n(1003),
        a = n(7795),
        l = n(4465),
        u = n(2692),
        c = n(8245),
        h = n(9246),
        d = n(227),
        p = n(3468);
      let f = new Set();
      function m(t, e, n, i) {
        if (s.isLocalURL(e)) {
          if (!i.bypassPrefetchedCheck) {
            let r =
                void 0 !== i.locale
                  ? i.locale
                  : "locale" in t
                  ? t.locale
                  : void 0,
              o = e + "%" + n + "%" + r;
            if (f.has(o)) return;
            f.add(o);
          }
          Promise.resolve(t.prefetch(e, n, i)).catch((t) => {});
        }
      }
      function v(t) {
        return "string" == typeof t ? t : a.formatUrl(t);
      }
      let g = o.default.forwardRef(function (t, e) {
        let n, i;
        let {
            href: a,
            as: f,
            children: g,
            prefetch: y,
            passHref: x,
            replace: b,
            shallow: w,
            scroll: E,
            locale: P,
            onClick: S,
            onMouseEnter: T,
            onTouchStart: A,
            legacyBehavior: V = !0 !== Boolean(!0),
          } = t,
          C = r(t, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = g),
          V &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = o.default.createElement("a", null, n));
        let M = !1 !== y,
          R = o.default.useContext(u.RouterContext),
          k = o.default.useContext(c.AppRouterContext),
          O = null != R ? R : k,
          L = !R,
          { href: j, as: D } = o.default.useMemo(() => {
            if (!R) {
              let t = v(a);
              return { href: t, as: f ? v(f) : t };
            }
            let [e, n] = s.resolveHref(R, a, !0);
            return { href: e, as: f ? s.resolveHref(R, f) : n || e };
          }, [R, a, f]),
          F = o.default.useRef(j),
          B = o.default.useRef(D);
        V && (i = o.default.Children.only(n));
        let U = V ? i && "object" == typeof i && i.ref : e,
          [I, N, $] = h.useIntersection({ rootMargin: "200px" }),
          z = o.default.useCallback(
            (t) => {
              (B.current !== D || F.current !== j) &&
                ($(), (B.current = D), (F.current = j)),
                I(t),
                U &&
                  ("function" == typeof U
                    ? U(t)
                    : "object" == typeof U && (U.current = t));
            },
            [D, U, j, $, I]
          );
        o.default.useEffect(() => {
          O && N && M && m(O, j, D, { locale: P });
        }, [D, j, N, P, M, null == R ? void 0 : R.locale, O]);
        let Y = {
          ref: z,
          onClick(t) {
            V || "function" != typeof S || S(t),
              V &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(t),
              O &&
                !t.defaultPrevented &&
                (function (t, e, n, i, r, a, l, u, c, h) {
                  let { nodeName: d } = t.currentTarget,
                    p = "A" === d.toUpperCase();
                  if (
                    p &&
                    ((function (t) {
                      let { target: e } = t.currentTarget;
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      !s.isLocalURL(n))
                  )
                    return;
                  t.preventDefault();
                  let f = () => {
                    "beforePopState" in e
                      ? e[r ? "replace" : "push"](n, i, {
                          shallow: a,
                          locale: u,
                          scroll: l,
                        })
                      : e[r ? "replace" : "push"](i || n, {
                          forceOptimisticNavigation: !h,
                        });
                  };
                  c ? o.default.startTransition(f) : f();
                })(t, O, j, D, b, w, E, P, L, M);
          },
          onMouseEnter(t) {
            V || "function" != typeof T || T(t),
              V &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(t),
              O &&
                (M || !L) &&
                m(O, j, D, {
                  locale: P,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart(t) {
            V || "function" != typeof A || A(t),
              V &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(t),
              O &&
                (M || !L) &&
                m(O, j, D, {
                  locale: P,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if (!V || x || ("a" === i.type && !("href" in i.props))) {
          let H = void 0 !== P ? P : null == R ? void 0 : R.locale,
            W =
              (null == R ? void 0 : R.isLocaleDomain) &&
              d.getDomainLocale(
                D,
                H,
                null == R ? void 0 : R.locales,
                null == R ? void 0 : R.domainLocales
              );
          Y.href =
            W ||
            p.addBasePath(
              l.addLocale(D, H, null == R ? void 0 : R.defaultLocale)
            );
        }
        return V
          ? o.default.cloneElement(i, Y)
          : o.default.createElement("a", Object.assign({}, C, Y), n);
      });
      (e.default = g),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    9246: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.useIntersection = function (t) {
          let { rootRef: e, rootMargin: n, disabled: l } = t,
            u = l || !o,
            [c, h] = i.useState(!1),
            [d, p] = i.useState(null);
          i.useEffect(() => {
            if (o) {
              if (!u && !c && d && d.tagName) {
                let t = (function (t, e, n) {
                  let {
                    id: i,
                    observer: r,
                    elements: o,
                  } = (function (t) {
                    let e;
                    let n = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      i = a.find(
                        (t) => t.root === n.root && t.margin === n.margin
                      );
                    if (i && (e = s.get(i))) return e;
                    let r = new Map(),
                      o = new IntersectionObserver((t) => {
                        t.forEach((t) => {
                          let e = r.get(t.target),
                            n = t.isIntersecting || t.intersectionRatio > 0;
                          e && n && e(n);
                        });
                      }, t);
                    return (
                      (e = { id: n, observer: o, elements: r }),
                      a.push(n),
                      s.set(n, e),
                      e
                    );
                  })(n);
                  return (
                    o.set(t, e),
                    r.observe(t),
                    function () {
                      if ((o.delete(t), r.unobserve(t), 0 === o.size)) {
                        r.disconnect(), s.delete(i);
                        let e = a.findIndex(
                          (t) => t.root === i.root && t.margin === i.margin
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(d, (t) => t && h(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: n,
                });
                return t;
              }
            } else if (!c) {
              let i = r.requestIdleCallback(() => h(!0));
              return () => r.cancelIdleCallback(i);
            }
          }, [d, u, n, e, c]);
          let f = i.useCallback(() => {
            h(!1);
          }, []);
          return [p, c, f];
        });
      var i = n(7294),
        r = n(4686);
      let o = "function" == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    7663: function (t) {
      !(function () {
        var e = {
            229: function (t) {
              var e,
                n,
                i,
                r = (t.exports = {});
              function o() {
                throw Error("setTimeout has not been defined");
              }
              function s() {
                throw Error("clearTimeout has not been defined");
              }
              function a(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === o || !e) && setTimeout)
                  return (e = setTimeout), setTimeout(t, 0);
                try {
                  return e(t, 0);
                } catch (i) {
                  try {
                    return e.call(null, t, 0);
                  } catch (n) {
                    return e.call(this, t, 0);
                  }
                }
              }
              !(function () {
                try {
                  e = "function" == typeof setTimeout ? setTimeout : o;
                } catch (t) {
                  e = o;
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (i) {
                  n = s;
                }
              })();
              var l = [],
                u = !1,
                c = -1;
              function h() {
                u &&
                  i &&
                  ((u = !1),
                  i.length ? (l = i.concat(l)) : (c = -1),
                  l.length && d());
              }
              function d() {
                if (!u) {
                  var t = a(h);
                  u = !0;
                  for (var e = l.length; e; ) {
                    for (i = l, l = []; ++c < e; ) i && i[c].run();
                    (c = -1), (e = l.length);
                  }
                  (i = null),
                    (u = !1),
                    (function (t) {
                      if (n === clearTimeout) return clearTimeout(t);
                      if ((n === s || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(t);
                      try {
                        n(t);
                      } catch (i) {
                        try {
                          return n.call(null, t);
                        } catch (e) {
                          return n.call(this, t);
                        }
                      }
                    })(t);
                }
              }
              function p(t, e) {
                (this.fun = t), (this.array = e);
              }
              function f() {}
              (r.nextTick = function (t) {
                var e = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                l.push(new p(t, e)), 1 !== l.length || u || a(d);
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (r.title = "browser"),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ""),
                (r.versions = {}),
                (r.on = f),
                (r.addListener = f),
                (r.once = f),
                (r.off = f),
                (r.removeListener = f),
                (r.removeAllListeners = f),
                (r.emit = f),
                (r.prependListener = f),
                (r.prependOnceListener = f),
                (r.listeners = function (t) {
                  return [];
                }),
                (r.binding = function (t) {
                  throw Error("process.binding is not supported");
                }),
                (r.cwd = function () {
                  return "/";
                }),
                (r.chdir = function (t) {
                  throw Error("process.chdir is not supported");
                }),
                (r.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function i(t) {
          var r = n[t];
          if (void 0 !== r) return r.exports;
          var o = (n[t] = { exports: {} }),
            s = !0;
          try {
            e[t](o, o.exports, i), (s = !1);
          } finally {
            s && delete n[t];
          }
          return o.exports;
        }
        i.ab = "//";
        var r = i(229);
        t.exports = r;
      })();
    },
    9008: function (t, e, n) {
      t.exports = n(3121);
    },
    1664: function (t, e, n) {
      t.exports = n(1551);
    },
    1163: function (t, e, n) {
      t.exports = n(880);
    },
    7005: function (t, e, n) {
      var i = n(7294),
        r = i && "object" == typeof i && "default" in i ? i : { default: i },
        o = function () {
          return (o =
            Object.assign ||
            function (t) {
              for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var r in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }).apply(this, arguments);
        };
      !(function (t) {
        if (!t || "undefined" == typeof window) return;
        let e = document.createElement("style");
        e.setAttribute("type", "text/css"),
          (e.innerHTML = t),
          document.head.appendChild(e);
      })(
        '.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}'
      );
      var s = function (t) {
        var e,
          n,
          s,
          a,
          l = t.style,
          u = t.className,
          c = t.play,
          h = void 0 === c || c,
          d = t.pauseOnHover,
          p = void 0 !== d && d,
          f = t.pauseOnClick,
          m = void 0 !== f && f,
          v = t.direction,
          g = void 0 === v ? "left" : v,
          y = t.speed,
          x = void 0 === y ? 20 : y,
          b = t.delay,
          w = void 0 === b ? 0 : b,
          E = t.loop,
          P = void 0 === E ? 0 : E,
          S = t.gradient,
          T = t.gradientColor,
          A = void 0 === T ? [255, 255, 255] : T,
          V = t.gradientWidth,
          C = void 0 === V ? 200 : V,
          M = t.onFinish,
          R = t.onCycleComplete,
          k = t.children,
          O = i.useState(0),
          L = O[0],
          j = O[1],
          D = i.useState(0),
          F = D[0],
          B = D[1],
          U = i.useState(!1),
          I = U[0],
          N = U[1],
          $ = i.useRef(null),
          z = i.useRef(null);
        i.useEffect(
          function () {
            if (I) {
              var t = function () {
                z.current &&
                  $.current &&
                  (j($.current.getBoundingClientRect().width),
                  B(z.current.getBoundingClientRect().width));
              };
              return (
                t(),
                window.addEventListener("resize", t),
                function () {
                  window.removeEventListener("resize", t);
                }
              );
            }
          },
          [I]
        ),
          i.useEffect(function () {
            N(!0);
          }, []);
        var Y = "rgba(" + A[0] + ", " + A[1] + ", " + A[2],
          H = F < L ? L / x : F / x;
        return r.default.createElement(
          i.Fragment,
          null,
          I
            ? r.default.createElement(
                "div",
                {
                  ref: $,
                  style: o(
                    o({}, void 0 === l ? {} : l),
                    (((e = {})["--pause-on-hover"] =
                      !h || p ? "paused" : "running"),
                    (e["--pause-on-click"] =
                      !h || (p && !m) || m ? "paused" : "running"),
                    e)
                  ),
                  className: (void 0 === u ? "" : u) + " marquee-container",
                },
                (void 0 === S || S) &&
                  r.default.createElement("div", {
                    style:
                      (((n = {})["--gradient-color"] =
                        Y + ", 1), " + Y + ", 0)"),
                      (n["--gradient-width"] =
                        "number" == typeof C ? C + "px" : C),
                      n),
                    className: "overlay",
                  }),
                r.default.createElement(
                  "div",
                  {
                    ref: z,
                    style:
                      (((s = {})["--play"] = h ? "running" : "paused"),
                      (s["--direction"] = "left" === g ? "normal" : "reverse"),
                      (s["--duration"] = H + "s"),
                      (s["--delay"] = w + "s"),
                      (s["--iteration-count"] = P ? "" + P : "infinite"),
                      s),
                    className: "marquee",
                    onAnimationIteration: R,
                    onAnimationEnd: M,
                  },
                  k
                ),
                r.default.createElement(
                  "div",
                  {
                    style:
                      (((a = {})["--play"] = h ? "running" : "paused"),
                      (a["--direction"] = "left" === g ? "normal" : "reverse"),
                      (a["--duration"] = H + "s"),
                      (a["--delay"] = w + "s"),
                      (a["--iteration-count"] = P ? "" + P : "infinite"),
                      a),
                    className: "marquee",
                    "aria-hidden": "true",
                  },
                  k
                )
              )
            : null
        );
      };
      e.Z = s;
    },
    5820: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return y;
        },
      });
      var i = n(7294),
        r = n(9304),
        o = n(4735),
        s = n(8868);
      function a() {
        let t = (0, i.useRef)(!1);
        return (
          (0, s.L)(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            []
          ),
          t
        );
      }
      var l = n(240),
        u = n(6681);
      class c extends i.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let n = this.props.sizeRef.current;
            (n.height = e.offsetHeight || 0),
              (n.width = e.offsetWidth || 0),
              (n.top = e.offsetTop),
              (n.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function h({ children: t, isPresent: e }) {
        let n = (0, i.useId)(),
          r = (0, i.useRef)(null),
          o = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: t, height: i, top: s, left: a } = o.current;
            if (e || !r.current || !t || !i) return;
            r.current.dataset.motionPopId = n;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [e]),
          i.createElement(
            c,
            { isPresent: e, childRef: r, sizeRef: o },
            i.cloneElement(t, { ref: r })
          )
        );
      }
      let d = ({
        children: t,
        initial: e,
        isPresent: n,
        onExitComplete: r,
        custom: o,
        presenceAffectsLayout: s,
        mode: a,
      }) => {
        let c = (0, u.h)(p),
          d = (0, i.useId)(),
          f = (0, i.useMemo)(
            () => ({
              id: d,
              initial: e,
              isPresent: n,
              custom: o,
              onExitComplete(t) {
                for (let e of (c.set(t, !0), c.values())) if (!e) return;
                r && r();
              },
              register: (t) => (c.set(t, !1), () => c.delete(t)),
            }),
            s ? void 0 : [n]
          );
        return (
          (0, i.useMemo)(() => {
            c.forEach((t, e) => c.set(e, !1));
          }, [n]),
          i.useEffect(() => {
            n || c.size || !r || r();
          }, [n]),
          "popLayout" === a && (t = i.createElement(h, { isPresent: n }, t)),
          i.createElement(l.O.Provider, { value: f }, t)
        );
      };
      function p() {
        return new Map();
      }
      var f = n(5364),
        m = n(5411),
        v = n(6034);
      let g = (t) => t.key || "",
        y = ({
          children: t,
          custom: e,
          initial: n = !0,
          onExitComplete: l,
          exitBeforeEnter: u,
          presenceAffectsLayout: c = !0,
          mode: h = "sync",
        }) => {
          u &&
            ((h = "wait"),
            (0, v.O)(!1, "Replace exitBeforeEnter with mode='wait'"));
          let [p] = (function () {
              let t = a(),
                [e, n] = (0, i.useState)(0),
                r = (0, i.useCallback)(() => {
                  t.current && n(e + 1);
                }, [e]),
                s = (0, i.useCallback)(() => o.ZP.postRender(r), [r]);
              return [s, e];
            })(),
            y = (0, i.useContext)(f.p).forceRender;
          y && (p = y);
          let x = a(),
            b = (function (t) {
              let e = [];
              return (
                i.Children.forEach(t, (t) => {
                  (0, i.isValidElement)(t) && e.push(t);
                }),
                e
              );
            })(t),
            w = b,
            E = new Set(),
            P = (0, i.useRef)(w),
            S = (0, i.useRef)(new Map()).current,
            T = (0, i.useRef)(!0);
          if (
            ((0, s.L)(() => {
              (T.current = !1),
                (function (t, e) {
                  t.forEach((t) => {
                    let n = g(t);
                    e.set(n, t);
                  });
                })(b, S),
                (P.current = w);
            }),
            (0, m.z)(() => {
              (T.current = !0), S.clear(), E.clear();
            }),
            T.current)
          )
            return i.createElement(
              i.Fragment,
              null,
              w.map((t) =>
                i.createElement(
                  d,
                  {
                    key: g(t),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: c,
                    mode: h,
                  },
                  t
                )
              )
            );
          w = [...w];
          let A = P.current.map(g),
            V = b.map(g),
            C = A.length;
          for (let M = 0; M < C; M++) {
            let R = A[M];
            -1 === V.indexOf(R) && E.add(R);
          }
          return (
            "wait" === h && E.size && (w = []),
            E.forEach((t) => {
              if (-1 !== V.indexOf(t)) return;
              let n = S.get(t);
              if (!n) return;
              let r = A.indexOf(t),
                o = () => {
                  S.delete(t), E.delete(t);
                  let e = P.current.findIndex((e) => e.key === t);
                  if ((P.current.splice(e, 1), !E.size)) {
                    if (((P.current = b), !1 === x.current)) return;
                    p(), l && l();
                  }
                };
              w.splice(
                r,
                0,
                i.createElement(
                  d,
                  {
                    key: g(n),
                    isPresent: !1,
                    onExitComplete: o,
                    custom: e,
                    presenceAffectsLayout: c,
                    mode: h,
                  },
                  n
                )
              );
            }),
            (w = w.map((t) => {
              let e = t.key;
              return E.has(e)
                ? t
                : i.createElement(
                    d,
                    {
                      key: g(t),
                      isPresent: !0,
                      presenceAffectsLayout: c,
                      mode: h,
                    },
                    t
                  );
            })),
            "production" !== r.O &&
              "wait" === h &&
              w.length > 1 &&
              console.warn(
                'You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'
              ),
            i.createElement(
              i.Fragment,
              null,
              E.size ? w : w.map((t) => (0, i.cloneElement)(t))
            )
          );
        };
    },
    5364: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return r;
        },
      });
      var i = n(7294);
      let r = (0, i.createContext)({});
    },
    240: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return r;
        },
      });
      var i = n(7294);
      let r = (0, i.createContext)(null);
    },
    3387: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return ot;
        },
      });
      var i,
        r,
        o,
        s,
        a,
        l = n(7294);
      let u = (0, l.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        c = (0, l.createContext)({});
      var h = n(240),
        d = n(8868);
      let p = (0, l.createContext)({ strict: !1 });
      function f(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function m(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function v(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let g = [
        "initial",
        "animate",
        "exit",
        "whileHover",
        "whileDrag",
        "whileTap",
        "whileFocus",
        "whileInView",
      ];
      function y(t) {
        return v(t.animate) || g.some((e) => m(t[e]));
      }
      function x(t) {
        return Boolean(y(t) || t.variants);
      }
      function b(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let w = (t) => ({ isEnabled: (e) => t.some((t) => !!e[t]) }),
        E = {
          measureLayout: w(["layout", "layoutId", "drag"]),
          animation: w([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: w(["exit"]),
          drag: w(["drag", "dragControls"]),
          focus: w(["whileFocus"]),
          hover: w(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: w(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: w(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: w(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      var P = n(1741),
        S = n(6681);
      let T = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        A = 1;
      var V = n(5364);
      class C extends l.Component {
        getSnapshotBeforeUpdate() {
          let { visualElement: t, props: e } = this.props;
          return t && t.setProps(e), null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      let M = (0, l.createContext)({}),
        R = Symbol.for("motionComponentSymbol"),
        k = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "svg",
          "switch",
          "symbol",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function O(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (k.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let L = {},
        j = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        D = new Set(j);
      function F(t, { layout: e, layoutId: n }) {
        return (
          D.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== n) && (!!L[t] || "opacity" === t))
        );
      }
      let B = (t) => !!(null == t ? void 0 : t.getVelocity),
        U = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        I = (t, e) => j.indexOf(t) - j.indexOf(e);
      function N(t) {
        return t.startsWith("--");
      }
      let $ = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        z = (t, e) => (n) => Math.max(Math.min(n, e), t),
        Y = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        H = /(-)?([\d]*\.?[\d])+/g,
        W =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        q =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function Z(t) {
        return "string" == typeof t;
      }
      let _ = (t) => ({
          test: (e) => Z(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        X = _("deg"),
        G = _("%"),
        K = _("px"),
        J = _("vh"),
        Q = _("vw"),
        tt = Object.assign(Object.assign({}, G), {
          parse: (t) => G.parse(t) / 100,
          transform: (t) => G.transform(100 * t),
        }),
        te = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        tn = Object.assign(Object.assign({}, te), { transform: z(0, 1) }),
        ti = Object.assign(Object.assign({}, te), { default: 1 }),
        tr = { ...te, transform: Math.round },
        to = {
          borderWidth: K,
          borderTopWidth: K,
          borderRightWidth: K,
          borderBottomWidth: K,
          borderLeftWidth: K,
          borderRadius: K,
          radius: K,
          borderTopLeftRadius: K,
          borderTopRightRadius: K,
          borderBottomRightRadius: K,
          borderBottomLeftRadius: K,
          width: K,
          maxWidth: K,
          height: K,
          maxHeight: K,
          size: K,
          top: K,
          right: K,
          bottom: K,
          left: K,
          padding: K,
          paddingTop: K,
          paddingRight: K,
          paddingBottom: K,
          paddingLeft: K,
          margin: K,
          marginTop: K,
          marginRight: K,
          marginBottom: K,
          marginLeft: K,
          rotate: X,
          rotateX: X,
          rotateY: X,
          rotateZ: X,
          scale: ti,
          scaleX: ti,
          scaleY: ti,
          scaleZ: ti,
          skew: X,
          skewX: X,
          skewY: X,
          distance: K,
          translateX: K,
          translateY: K,
          translateZ: K,
          x: K,
          y: K,
          z: K,
          perspective: K,
          transformPerspective: K,
          opacity: tn,
          originX: tt,
          originY: tt,
          originZ: K,
          zIndex: tr,
          fillOpacity: tn,
          strokeOpacity: tn,
          numOctaves: tr,
        };
      function ts(t, e, n, i) {
        let {
          style: r,
          vars: o,
          transform: s,
          transformKeys: a,
          transformOrigin: l,
        } = t;
        a.length = 0;
        let u = !1,
          c = !1,
          h = !0;
        for (let d in e) {
          let p = e[d];
          if (N(d)) {
            o[d] = p;
            continue;
          }
          let f = to[d],
            m = $(p, f);
          if (D.has(d)) {
            if (((u = !0), (s[d] = m), a.push(d), !h)) continue;
            p !== (f.default || 0) && (h = !1);
          } else d.startsWith("origin") ? ((c = !0), (l[d] = m)) : (r[d] = m);
        }
        if (
          (!e.transform &&
            (u || i
              ? (r.transform = (function (
                  { transform: t, transformKeys: e },
                  {
                    enableHardwareAcceleration: n = !0,
                    allowTransformNone: i = !0,
                  },
                  r,
                  o
                ) {
                  let s = "";
                  for (let a of (e.sort(I), e)) s += `${U[a] || a}(${t[a]}) `;
                  return (
                    n && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    o ? (s = o(t, r ? "" : s)) : i && r && (s = "none"),
                    s
                  );
                })(t, n, h, i))
              : r.transform && (r.transform = "none")),
          c)
        ) {
          let { originX: v = "50%", originY: g = "50%", originZ: y = 0 } = l;
          r.transformOrigin = `${v} ${g} ${y}`;
        }
      }
      let ta = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {},
      });
      function tl(t, e, n) {
        for (let i in e) B(e[i]) || F(i, n) || (t[i] = e[i]);
      }
      function tu(t, e, n) {
        let i = {},
          r = (function (t, e, n) {
            let i = t.style || {},
              r = {};
            return (
              tl(r, i, t),
              Object.assign(
                r,
                (function ({ transformTemplate: t }, e, n) {
                  return (0, l.useMemo)(() => {
                    let i = ta();
                    return (
                      ts(i, e, { enableHardwareAcceleration: !n }, t),
                      Object.assign({}, i.vars, i.style)
                    );
                  }, [e]);
                })(t, e, n)
              ),
              t.transformValues ? t.transformValues(r) : r
            );
          })(t, e, n);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((i.draggable = !1),
            (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
            (r.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          (i.style = r),
          i
        );
      }
      let tc = new Set([
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "onHoverStart",
        "onHoverEnd",
        "layoutScroll",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
        "whileInView",
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
      ]);
      function th(t) {
        return tc.has(t);
      }
      let td = (t) => !th(t);
      try {
        (i = require("@emotion/is-prop-valid").default) &&
          (td = (t) => (t.startsWith("on") ? !th(t) : i(t)));
      } catch (tp) {}
      function tf(t, e, n) {
        return "string" == typeof t ? t : K.transform(e + n * t);
      }
      let tm = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tv = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tg(
        t,
        {
          attrX: e,
          attrY: n,
          originX: i,
          originY: r,
          pathLength: o,
          pathSpacing: s = 1,
          pathOffset: a = 0,
          ...l
        },
        u,
        c
      ) {
        ts(t, l, u, c), (t.attrs = t.style), (t.style = {});
        let { attrs: h, style: d, dimensions: p } = t;
        h.transform && (p && (d.transform = h.transform), delete h.transform),
          p &&
            (void 0 !== i || void 0 !== r || d.transform) &&
            (d.transformOrigin = (function (t, e, n) {
              let i = tf(e, t.x, t.width),
                r = tf(n, t.y, t.height);
              return `${i} ${r}`;
            })(p, void 0 !== i ? i : 0.5, void 0 !== r ? r : 0.5)),
          void 0 !== e && (h.x = e),
          void 0 !== n && (h.y = n),
          void 0 !== o &&
            (function (t, e, n = 1, i = 0, r = !0) {
              t.pathLength = 1;
              let o = r ? tm : tv;
              t[o.offset] = K.transform(-i);
              let s = K.transform(e),
                a = K.transform(n);
              t[o.array] = `${s} ${a}`;
            })(h, o, s, a, !1);
      }
      let ty = () => ({ ...ta(), attrs: {} });
      function tx(t, e) {
        let n = (0, l.useMemo)(() => {
          let n = ty();
          return (
            tg(n, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
            { ...n.attrs, style: { ...n.style } }
          );
        }, [e]);
        if (t.style) {
          let i = {};
          tl(i, t.style, t), (n.style = { ...i, ...n.style });
        }
        return n;
      }
      let tb = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function tw(t, { style: e, vars: n }, i, r) {
        for (let o in (Object.assign(t.style, e, r && r.getProjectionStyles(i)),
        n))
          t.style.setProperty(o, n[o]);
      }
      let tE = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function tP(t, e, n, i) {
        for (let r in (tw(t, e, void 0, i), e.attrs))
          t.setAttribute(tE.has(r) ? r : tb(r), e.attrs[r]);
      }
      function tS(t) {
        let { style: e } = t,
          n = {};
        for (let i in e) (B(e[i]) || F(i, t)) && (n[i] = e[i]);
        return n;
      }
      function tT(t) {
        let e = tS(t);
        for (let n in t)
          if (B(t[n])) {
            let i = "x" === n || "y" === n ? "attr" + n.toUpperCase() : n;
            e[i] = t[n];
          }
        return e;
      }
      function tA(t, e, n, i = {}, r = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
          e
        );
      }
      let tV = (t) => Array.isArray(t),
        tC = (t) => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        tM = (t) => (tV(t) ? t[t.length - 1] || 0 : t);
      function tR(t) {
        let e = B(t) ? t.get() : t;
        return tC(e) ? e.toValue() : e;
      }
      let tk = (t) => (e, n) => {
          let i = (0, l.useContext)(c),
            r = (0, l.useContext)(h.O),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: n,
                },
                i,
                r,
                o
              ) {
                let s = {
                  latestValues: (function (t, e, n, i) {
                    let r = {},
                      o = i(t);
                    for (let s in o) r[s] = tR(o[s]);
                    let { initial: a, animate: l } = t,
                      u = y(t),
                      c = x(t);
                    e &&
                      c &&
                      !u &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === l && (l = e.animate));
                    let h = !!n && !1 === n.initial;
                    h = h || !1 === a;
                    let d = h ? l : a;
                    if (d && "boolean" != typeof d && !v(d)) {
                      let p = Array.isArray(d) ? d : [d];
                      p.forEach((e) => {
                        let n = tA(t, e);
                        if (!n) return;
                        let { transitionEnd: i, transition: o, ...s } = n;
                        for (let a in s) {
                          let l = s[a];
                          if (Array.isArray(l)) {
                            let u = h ? l.length - 1 : 0;
                            l = l[u];
                          }
                          null !== l && (r[a] = l);
                        }
                        for (let c in i) r[c] = i[c];
                      });
                    }
                    return r;
                  })(i, r, o, t),
                  renderState: e(),
                };
                return n && (s.mount = (t) => n(i, t, s)), s;
              })(t, e, i, r);
          return n ? o() : (0, S.h)(o);
        },
        tO = {
          useVisualState: tk({
            scrapeMotionValuesFromProps: tT,
            createRenderState: ty,
            onMount(t, e, { renderState: n, latestValues: i }) {
              try {
                n.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (r) {
                n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              tg(n, i, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                tP(e, n);
            },
          }),
        },
        tL = {
          useVisualState: tk({
            scrapeMotionValuesFromProps: tS,
            createRenderState: ta,
          }),
        };
      function tj(t, e, n, i = { passive: !0 }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
      }
      function tD(t, e, n, i) {
        (0, l.useEffect)(() => {
          let r = t.current;
          if (n && r) return tj(r, e, n, i);
        }, [t, e, n, i]);
      }
      function tF(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function tB(t) {
        let e = !!t.touches;
        return e;
      }
      ((r = s || (s = {})).Animate = "animate"),
        (r.Hover = "whileHover"),
        (r.Tap = "whileTap"),
        (r.Drag = "whileDrag"),
        (r.Focus = "whileFocus"),
        (r.InView = "whileInView"),
        (r.Exit = "exit");
      let tU = { pageX: 0, pageY: 0 };
      function tI(t, e = "page") {
        return {
          point: tB(t)
            ? (function (t, e = "page") {
                let n = t.touches[0] || t.changedTouches[0],
                  i = n || tU;
                return { x: i[e + "X"], y: i[e + "Y"] };
              })(t, e)
            : (function (t, e = "page") {
                return { x: t[e + "X"], y: t[e + "Y"] };
              })(t, e),
        };
      }
      let tN = (t, e = !1) => {
          let n = (e) => t(e, tI(e));
          return e
            ? (t) => {
                let e = t instanceof MouseEvent,
                  i = !e || (e && 0 === t.button);
                i && n(t);
              }
            : n;
        },
        t$ = () => P.j && null === window.onpointerdown,
        tz = () => P.j && null === window.ontouchstart,
        tY = () => P.j && null === window.onmousedown,
        tH = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        tW = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function tq(t) {
        if (t$());
        else if (tz()) return tW[t];
        else if (tY()) return tH[t];
        return t;
      }
      function tZ(t, e, n, i) {
        return tj(t, tq(e), tN(n, "pointerdown" === e), i);
      }
      function t_(t, e, n, i) {
        return tD(t, tq(e), n && tN(n, "pointerdown" === e), i);
      }
      function tX(t) {
        let e = null;
        return () => {
          let n = () => {
            e = null;
          };
          return null === e && ((e = t), n);
        };
      }
      let tG = tX("dragHorizontal"),
        tK = tX("dragVertical");
      function tJ(t) {
        let e = !1;
        if ("y" === t) e = tK();
        else if ("x" === t) e = tG();
        else {
          let n = tG(),
            i = tK();
          n && i
            ? (e = () => {
                n(), i();
              })
            : (n && n(), i && i());
        }
        return e;
      }
      function tQ() {
        let t = tJ(!0);
        return !t || (t(), !1);
      }
      function t0(t, e, n) {
        return (i, r) => {
          !(!tF(i) || tQ()) &&
            (t.animationState && t.animationState.setActive(s.Hover, e),
            n && n(i, r));
        };
      }
      let t1 = (t, e) => !!e && (t === e || t1(t, e.parentElement));
      var t2 = n(5411);
      let t5 = (t, e) => (n) => e(t(n)),
        t3 = (...t) => t.reduce(t5);
      var t4 = n(9304),
        t6 = n(6034);
      let t7 = new WeakMap(),
        t8 = new WeakMap(),
        t9 = (t) => {
          let e = t7.get(t.target);
          e && e(t);
        },
        et = (t) => {
          t.forEach(t9);
        },
        ee = { some: 0, all: 1 };
      function en(
        t,
        e,
        n,
        { root: i, margin: r, amount: o = "some", once: a }
      ) {
        (0, l.useEffect)(() => {
          if (!t || !n.current) return;
          let l = {
              root: null == i ? void 0 : i.current,
              rootMargin: r,
              threshold: "number" == typeof o ? o : ee[o],
            },
            u = (t) => {
              let { isIntersecting: i } = t;
              if (
                e.isInView === i ||
                ((e.isInView = i), a && !i && e.hasEnteredView)
              )
                return;
              i && (e.hasEnteredView = !0),
                n.animationState && n.animationState.setActive(s.InView, i);
              let r = n.getProps(),
                o = i ? r.onViewportEnter : r.onViewportLeave;
              o && o(t);
            };
          return (function (t, e, n) {
            let i = (function ({ root: t, ...e }) {
              let n = t || document;
              t8.has(n) || t8.set(n, {});
              let i = t8.get(n),
                r = JSON.stringify(e);
              return (
                i[r] ||
                  (i[r] = new IntersectionObserver(et, { root: t, ...e })),
                i[r]
              );
            })(e);
            return (
              t7.set(t, n),
              i.observe(t),
              () => {
                t7.delete(t), i.unobserve(t);
              }
            );
          })(n.current, l, u);
        }, [t, i, r, o]);
      }
      function ei(t, e, n, { fallback: i = !0 }) {
        (0, l.useEffect)(() => {
          t &&
            i &&
            ("production" !== t4.O &&
              (0, t6.O)(
                !1,
                "IntersectionObserver not available on this device. whileInView animations will trigger on mount."
              ),
            requestAnimationFrame(() => {
              e.hasEnteredView = !0;
              let { onViewportEnter: t } = n.getProps();
              t && t(null),
                n.animationState && n.animationState.setActive(s.InView, !0);
            }));
        }, [t]);
      }
      let er = (t) => (e) => (t(e), null),
        eo = {
          inView: er(function ({
            visualElement: t,
            whileInView: e,
            onViewportEnter: n,
            onViewportLeave: i,
            viewport: r = {},
          }) {
            let o = (0, l.useRef)({ hasEnteredView: !1, isInView: !1 }),
              s = Boolean(e || n || i);
            r.once && o.current.hasEnteredView && (s = !1);
            let a = "undefined" == typeof IntersectionObserver ? ei : en;
            a(s, o.current, t, r);
          }),
          tap: er(function ({
            onTap: t,
            onTapStart: e,
            onTapCancel: n,
            whileTap: i,
            visualElement: r,
          }) {
            let o = (0, l.useRef)(!1),
              a = (0, l.useRef)(null),
              u = { passive: !(e || t || n || f) };
            function c() {
              a.current && a.current(), (a.current = null);
            }
            function h() {
              return (
                c(),
                (o.current = !1),
                r.animationState && r.animationState.setActive(s.Tap, !1),
                !tQ()
              );
            }
            function d(e, i) {
              h() && (t1(r.current, e.target) ? t && t(e, i) : n && n(e, i));
            }
            function p(t, e) {
              h() && n && n(t, e);
            }
            function f(t, n) {
              c(),
                !o.current &&
                  ((o.current = !0),
                  (a.current = t3(
                    tZ(window, "pointerup", d, u),
                    tZ(window, "pointercancel", p, u)
                  )),
                  r.animationState && r.animationState.setActive(s.Tap, !0),
                  e && e(t, n));
            }
            t_(r, "pointerdown", t || e || n || i ? f : void 0, u),
              (0, t2.z)(c);
          }),
          focus: er(function ({ whileFocus: t, visualElement: e }) {
            let { animationState: n } = e,
              i = () => {
                n && n.setActive(s.Focus, !0);
              },
              r = () => {
                n && n.setActive(s.Focus, !1);
              };
            tD(e, "focus", t ? i : void 0), tD(e, "blur", t ? r : void 0);
          }),
          hover: er(function ({
            onHoverStart: t,
            onHoverEnd: e,
            whileHover: n,
            visualElement: i,
          }) {
            t_(i, "pointerenter", t || n ? t0(i, !0, t) : void 0, {
              passive: !t,
            }),
              t_(i, "pointerleave", e || n ? t0(i, !1, e) : void 0, {
                passive: !e,
              });
          }),
        };
      function es() {
        let t = (0, l.useContext)(h.O);
        if (null === t) return [!0, null];
        let { isPresent: e, onExitComplete: n, register: i } = t,
          r = (0, l.useId)();
        (0, l.useEffect)(() => i(r), []);
        let o = () => n && n(r);
        return !e && n ? [!1, o] : [!0];
      }
      function ea(t, e) {
        if (!Array.isArray(e)) return !1;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      function el(t, e) {
        var n = {};
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) &&
            0 > e.indexOf(i) &&
            (n[i] = t[i]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var r = 0, i = Object.getOwnPropertySymbols(t);
            r < i.length;
            r++
          )
            0 > e.indexOf(i[r]) &&
              Object.prototype.propertyIsEnumerable.call(t, i[r]) &&
              (n[i[r]] = t[i[r]]);
        return n;
      }
      var eu = function () {},
        ec = function () {};
      let eh = (t, e, n) => Math.min(Math.max(n, t), e);
      function ed(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let ep = ["duration", "bounce"],
        ef = ["stiffness", "damping", "mass"];
      function em(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ev(t) {
        var { from: e = 0, to: n = 1, restSpeed: i = 2, restDelta: r } = t,
          o = el(t, ["from", "to", "restSpeed", "restDelta"]);
        let s = { done: !1, value: e },
          {
            stiffness: a,
            damping: l,
            mass: u,
            velocity: c,
            duration: h,
            isResolvedFromDuration: d,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!em(t, ef) && em(t, ep)) {
              let n = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: n = 0,
                mass: i = 1,
              }) {
                let r, o;
                eu(t <= 1e4, "Spring duration must be 10 seconds or less");
                let s = 1 - e;
                (s = eh(0.05, 1, s)),
                  (t = eh(0.01, 10, t / 1e3)),
                  s < 1
                    ? ((r = (e) => {
                        let i = e * s,
                          r = i * t,
                          o = ed(e, s);
                        return 0.001 - ((i - n) / o) * Math.exp(-r);
                      }),
                      (o = (e) => {
                        let i = e * s,
                          o = i * t,
                          a = Math.pow(s, 2) * Math.pow(e, 2) * t,
                          l = ed(Math.pow(e, 2), s),
                          u = -r(e) + 0.001 > 0 ? -1 : 1;
                        return (u * ((o * n + n - a) * Math.exp(-o))) / l;
                      }))
                    : ((r = (e) => {
                        let i = Math.exp(-e * t),
                          r = (e - n) * t + 1;
                        return -0.001 + i * r;
                      }),
                      (o = (e) => {
                        let i = Math.exp(-e * t),
                          r = (n - e) * (t * t);
                        return i * r;
                      }));
                let a = 5 / t,
                  l = (function (t, e, n) {
                    let i = n;
                    for (let r = 1; r < 12; r++) i -= t(i) / e(i);
                    return i;
                  })(r, o, a);
                if (((t *= 1e3), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let u = Math.pow(l, 2) * i;
                  return {
                    stiffness: u,
                    damping: 2 * s * Math.sqrt(i * u),
                    duration: t,
                  };
                }
              })(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return e;
          })(o),
          p = eg,
          f = eg;
        function m() {
          let t = c ? -(c / 1e3) : 0,
            i = n - e,
            o = l / (2 * Math.sqrt(a * u)),
            s = Math.sqrt(a / u) / 1e3;
          if (
            (void 0 === r && (r = Math.min(Math.abs(n - e) / 100, 0.4)), o < 1)
          ) {
            let h = ed(s, o);
            (p = (e) =>
              n -
              Math.exp(-o * s * e) *
                (((t + o * s * i) / h) * Math.sin(h * e) +
                  i * Math.cos(h * e))),
              (f = (e) => {
                let n = Math.exp(-o * s * e);
                return (
                  o *
                    s *
                    n *
                    ((Math.sin(h * e) * (t + o * s * i)) / h +
                      i * Math.cos(h * e)) -
                  n *
                    (Math.cos(h * e) * (t + o * s * i) -
                      h * i * Math.sin(h * e))
                );
              });
          } else if (1 === o)
            p = (e) => n - Math.exp(-s * e) * (i + (t + s * i) * e);
          else {
            let d = s * Math.sqrt(o * o - 1);
            p = (e) => {
              let r = Math.min(d * e, 300);
              return (
                n -
                (Math.exp(-o * s * e) *
                  ((t + o * s * i) * Math.sinh(r) + d * i * Math.cosh(r))) /
                  d
              );
            };
          }
        }
        return (
          m(),
          {
            next(t) {
              let e = p(t);
              if (d) s.done = t >= h;
              else {
                let o = 1e3 * f(t),
                  a = Math.abs(n - e) <= r;
                s.done = Math.abs(o) <= i && a;
              }
              return (s.value = s.done ? n : e), s;
            },
            flipTarget() {
              (c = -c), ([e, n] = [n, e]), m();
            },
          }
        );
      }
      ev.needsInterpolation = (t, e) =>
        "string" == typeof t || "string" == typeof e;
      let eg = (t) => 0,
        ey = (t, e, n) => {
          let i = e - t;
          return 0 === i ? 1 : (n - t) / i;
        },
        ex = (t, e, n) => -n * t + n * e + t,
        eb = (t, e) => (n) =>
          Boolean(
            (Z(n) && q.test(n) && n.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        ew = (t, e, n) => (i) => {
          if (!Z(i)) return i;
          let [r, o, s, a] = i.match(H);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eE = z(0, 255),
        eP = Object.assign(Object.assign({}, te), {
          transform: (t) => Math.round(eE(t)),
        }),
        eS = {
          test: eb("rgb", "red"),
          parse: ew("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) =>
            "rgba(" +
            eP.transform(t) +
            ", " +
            eP.transform(e) +
            ", " +
            eP.transform(n) +
            ", " +
            Y(tn.transform(i)) +
            ")",
        },
        eT = {
          test: eb("#"),
          parse: function (t) {
            let e = "",
              n = "",
              i = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (i = t.substr(5, 2)),
                  (r = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (i = t.substr(3, 1)),
                  (r = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (i += i),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(i, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: eS.transform,
        },
        eA = {
          test: eb("hsl", "hue"),
          parse: ew("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            G.transform(Y(e)) +
            ", " +
            G.transform(Y(n)) +
            ", " +
            Y(tn.transform(i)) +
            ")",
        };
      function eV(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
          ? e
          : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t;
      }
      function eC({ hue: t, saturation: e, lightness: n, alpha: i }) {
        (t /= 360), (n /= 100);
        let r = 0,
          o = 0,
          s = 0;
        if ((e /= 100)) {
          let a = n < 0.5 ? n * (1 + e) : n + e - n * e,
            l = 2 * n - a;
          (r = eV(l, a, t + 1 / 3)),
            (o = eV(l, a, t)),
            (s = eV(l, a, t - 1 / 3));
        } else r = o = s = n;
        return {
          red: Math.round(255 * r),
          green: Math.round(255 * o),
          blue: Math.round(255 * s),
          alpha: i,
        };
      }
      let eM = (t, e, n) => {
          let i = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - i) + i));
        },
        eR = [eT, eS, eA],
        ek = (t) => eR.find((e) => e.test(t)),
        eO = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        eL = (t, e) => {
          let n = ek(t),
            i = ek(e);
          ec(!!n, eO(t)), ec(!!i, eO(e));
          let r = n.parse(t),
            o = i.parse(e);
          n === eA && ((r = eC(r)), (n = eS)),
            i === eA && ((o = eC(o)), (i = eS));
          let s = Object.assign({}, r);
          return (t) => {
            for (let e in s) "alpha" !== e && (s[e] = eM(r[e], o[e], t));
            return (s.alpha = ex(r.alpha, o.alpha, t)), n.transform(s);
          };
        },
        ej = {
          test: (t) => eS.test(t) || eT.test(t) || eA.test(t),
          parse: (t) =>
            eS.test(t) ? eS.parse(t) : eA.test(t) ? eA.parse(t) : eT.parse(t),
          transform: (t) =>
            Z(t)
              ? t
              : t.hasOwnProperty("red")
              ? eS.transform(t)
              : eA.transform(t),
        },
        eD = "${c}",
        eF = "${n}";
      function eB(t) {
        "number" == typeof t && (t = `${t}`);
        let e = [],
          n = 0,
          i = t.match(W);
        i &&
          ((n = i.length), (t = t.replace(W, eD)), e.push(...i.map(ej.parse)));
        let r = t.match(H);
        return (
          r && ((t = t.replace(H, eF)), e.push(...r.map(te.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function eU(t) {
        return eB(t).values;
      }
      function eI(t) {
        let { values: e, numColors: n, tokenised: i } = eB(t),
          r = e.length;
        return (t) => {
          let e = i;
          for (let o = 0; o < r; o++)
            e = e.replace(
              o < n ? eD : eF,
              o < n ? ej.transform(t[o]) : Y(t[o])
            );
          return e;
        };
      }
      let eN = (t) => ("number" == typeof t ? 0 : t),
        e$ = {
          test: function (t) {
            var e, n, i, r;
            return (
              isNaN(t) &&
              Z(t) &&
              (null !==
                (n =
                  null === (e = t.match(H)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (r =
                    null === (i = t.match(W)) || void 0 === i
                      ? void 0
                      : i.length) && void 0 !== r
                  ? r
                  : 0) >
                0
            );
          },
          parse: eU,
          createTransformer: eI,
          getAnimatableNone: function (t) {
            let e = eU(t),
              n = eI(t);
            return n(e.map(eN));
          },
        },
        ez = (t) => "number" == typeof t;
      function eY(t, e) {
        return ez(t) ? (n) => ex(t, e, n) : ej.test(t) ? eL(t, e) : eZ(t, e);
      }
      let eH = (t, e) => {
          let n = [...t],
            i = n.length,
            r = t.map((t, n) => eY(t, e[n]));
          return (t) => {
            for (let e = 0; e < i; e++) n[e] = r[e](t);
            return n;
          };
        },
        eW = (t, e) => {
          let n = Object.assign(Object.assign({}, t), e),
            i = {};
          for (let r in n)
            void 0 !== t[r] && void 0 !== e[r] && (i[r] = eY(t[r], e[r]));
          return (t) => {
            for (let e in i) n[e] = i[e](t);
            return n;
          };
        };
      function eq(t) {
        let e = e$.parse(t),
          n = e.length,
          i = 0,
          r = 0,
          o = 0;
        for (let s = 0; s < n; s++)
          i || "number" == typeof e[s] ? i++ : void 0 !== e[s].hue ? o++ : r++;
        return { parsed: e, numNumbers: i, numRGB: r, numHSL: o };
      }
      let eZ = (t, e) => {
          let n = e$.createTransformer(e),
            i = eq(t),
            r = eq(e),
            o =
              i.numHSL === r.numHSL &&
              i.numRGB === r.numRGB &&
              i.numNumbers >= r.numNumbers;
          return o
            ? t3(eH(i.parsed, r.parsed), n)
            : (eu(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              (n) => `${n > 0 ? e : t}`);
        },
        e_ = (t, e) => (n) => ex(t, e, n);
      function eX(t, e, { clamp: n = !0, ease: i, mixer: r } = {}) {
        let o = t.length;
        ec(
          o === e.length,
          "Both input and output ranges must be the same length"
        ),
          ec(
            !i || !Array.isArray(i) || i.length === o - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          t[0] > t[o - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        let s = (function (t, e, n) {
            var i;
            let r = [],
              o =
                n ||
                ("number" == typeof (i = t[0])
                  ? e_
                  : "string" == typeof i
                  ? ej.test(i)
                    ? eL
                    : eZ
                  : Array.isArray(i)
                  ? eH
                  : "object" == typeof i
                  ? eW
                  : void 0),
              s = t.length - 1;
            for (let a = 0; a < s; a++) {
              let l = o(t[a], t[a + 1]);
              if (e) {
                let u = Array.isArray(e) ? e[a] : e;
                l = t3(u, l);
              }
              r.push(l);
            }
            return r;
          })(e, i, r),
          a =
            2 === o
              ? (function ([t, e], [n]) {
                  return (i) => n(ey(t, e, i));
                })(t, s)
              : (function (t, e) {
                  let n = t.length,
                    i = n - 1;
                  return (r) => {
                    let o = 0,
                      s = !1;
                    if (
                      (r <= t[0]
                        ? (s = !0)
                        : r >= t[i] && ((o = i - 1), (s = !0)),
                      !s)
                    ) {
                      let a = 1;
                      for (; a < n && !(t[a] > r) && a !== i; a++);
                      o = a - 1;
                    }
                    let l = ey(t[o], t[o + 1], r);
                    return e[o](l);
                  };
                })(t, s);
        return n ? (e) => a(eh(t[0], t[o - 1], e)) : a;
      }
      let eG = (t) => (e) => 1 - t(1 - e),
        eK = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        eJ = (t) => (e) => e * e * ((t + 1) * e - t),
        eQ = 4 / 11,
        e0 = 8 / 11,
        e1 = (t) => t,
        e2 = (t) => Math.pow(t, 2),
        e5 = eG(e2),
        e3 = eK(e2),
        e4 = (t) => 1 - Math.sin(Math.acos(t)),
        e6 = eG(e4),
        e7 = eK(e6),
        e8 = eJ(1.525),
        e9 = eG(e8),
        nt = eK(e8),
        ne = ((t) => {
          let e = eJ(1.525);
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        })(0),
        nn = 4356 / 361,
        ni = 35442 / 1805,
        nr = 16061 / 1805,
        no = (t) => {
          if (1 === t || 0 === t) return t;
          let e = t * t;
          return t < eQ
            ? 7.5625 * e
            : t < e0
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? nn * e - ni * t + nr
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        ns = eG(no),
        na = (t) =>
          t < 0.5 ? 0.5 * (1 - no(1 - 2 * t)) : 0.5 * no(2 * t - 1) + 0.5;
      function nl({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: i,
        duration: r = 300,
      }) {
        let o = { done: !1, value: t },
          s = Array.isArray(e) ? e : [t, e],
          a = (
            i && i.length === s.length
              ? i
              : (function (t) {
                  let e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(s)
          ).map((t) => t * r);
        function l() {
          return eX(a, s, {
            ease: Array.isArray(n)
              ? n
              : s.map(() => n || e3).splice(0, s.length - 1),
          });
        }
        let u = l();
        return {
          next: (t) => ((o.value = u(t)), (o.done = t >= r), o),
          flipTarget() {
            s.reverse(), (u = l());
          },
        };
      }
      let nu = {
        keyframes: nl,
        spring: ev,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: n = 0.8,
          timeConstant: i = 350,
          restDelta: r = 0.5,
          modifyTarget: o,
        }) {
          let s = { done: !1, value: e },
            a = n * t,
            l = e + a,
            u = void 0 === o ? l : o(l);
          return (
            u !== l && (a = u - e),
            {
              next(t) {
                let e = -a * Math.exp(-t / i);
                return (
                  (s.done = !(e > r || e < -r)),
                  (s.value = s.done ? u : u + e),
                  s
                );
              },
              flipTarget() {},
            }
          );
        },
      };
      var nc = n(4735);
      function nh(t, e, n = 0) {
        return t - e - n;
      }
      let nd = (t) => {
        let e = ({ delta: e }) => t(e);
        return {
          start: () => nc.ZP.update(e, !0),
          stop: () => nc.qY.update(e),
        };
      };
      function np(t) {
        let e, n, i;
        var r,
          {
            from: o,
            autoplay: s = !0,
            driver: a = nd,
            elapsed: l = 0,
            repeat: u = 0,
            repeatType: c = "loop",
            repeatDelay: h = 0,
            onPlay: d,
            onStop: p,
            onComplete: f,
            onRepeat: m,
            onUpdate: v,
          } = t,
          g = el(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let { to: y } = g,
          x = 0,
          b = g.duration,
          w = !1,
          E = !0,
          P = (function (t) {
            if (Array.isArray(t.to)) return nl;
            if (nu[t.type]) return nu[t.type];
            let e = new Set(Object.keys(t));
            if (e.has("ease") || (e.has("duration") && !e.has("dampingRatio")));
            else if (
              e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            )
              return ev;
            return nl;
          })(g);
        (null === (r = P.needsInterpolation) || void 0 === r
          ? void 0
          : r.call(P, o, y)) &&
          ((i = eX([0, 100], [o, y], { clamp: !1 })), (o = 0), (y = 100));
        let S = P(Object.assign(Object.assign({}, g), { from: o, to: y }));
        return (
          s &&
            (null == d || d(),
            (e = a(function (t) {
              if ((E || (t = -t), (l += t), !w)) {
                let r = S.next(Math.max(0, l));
                (n = r.value), i && (n = i(n)), (w = E ? r.done : l <= 0);
              }
              if ((null == v || v(n), w)) {
                if ((0 === x && (null != b || (b = l)), x < u)) {
                  var o, s;
                  (o = l),
                    (s = b),
                    (E ? o >= s + h : o <= -h) &&
                      (x++,
                      "reverse" === c
                        ? (l = (function (t, e, n = 0, i = !0) {
                            return i ? nh(e + -t, e, n) : e - (t - e) + n;
                          })(l, b, h, (E = x % 2 == 0)))
                        : ((l = nh(l, b, h)), "mirror" === c && S.flipTarget()),
                      (w = !1),
                      m && m());
                } else e.stop(), f && f();
              }
            })).start()),
          {
            stop() {
              null == p || p(), e.stop();
            },
          }
        );
      }
      let nf = (t) => 1e3 * t,
        nm = (t, e) => 1 - 3 * e + 3 * t,
        nv = (t, e) => 3 * e - 6 * t,
        ng = (t) => 3 * t,
        ny = (t, e, n) => ((nm(e, n) * t + nv(e, n)) * t + ng(e)) * t,
        nx = (t, e, n) => 3 * nm(e, n) * t * t + 2 * nv(e, n) * t + ng(e),
        nb = {
          linear: e1,
          easeIn: e2,
          easeInOut: e3,
          easeOut: e5,
          circIn: e4,
          circInOut: e7,
          circOut: e6,
          backIn: e8,
          backInOut: nt,
          backOut: e9,
          anticipate: ne,
          bounceIn: ns,
          bounceInOut: na,
          bounceOut: no,
        },
        nw = (t) => {
          if (Array.isArray(t)) {
            ec(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, n, i, r] = t;
            return (function (t, e, n, i) {
              if (t === e && n === i) return e1;
              let r = new Float32Array(11);
              for (let o = 0; o < 11; ++o) r[o] = ny(0.1 * o, t, n);
              return (o) =>
                0 === o || 1 === o
                  ? o
                  : ny(
                      (function (e) {
                        let i = 0,
                          o = 1;
                        for (; 10 !== o && r[o] <= e; ++o) i += 0.1;
                        --o;
                        let s = (e - r[o]) / (r[o + 1] - r[o]),
                          a = i + 0.1 * s,
                          l = nx(a, t, n);
                        return l >= 0.001
                          ? (function (t, e, n, i) {
                              for (let r = 0; r < 8; ++r) {
                                let o = nx(e, n, i);
                                if (0 === o) break;
                                let s = ny(e, n, i) - t;
                                e -= s / o;
                              }
                              return e;
                            })(e, a, t, n)
                          : 0 === l
                          ? a
                          : (function (t, e, n, i, r) {
                              let o, s;
                              let a = 0;
                              do
                                (o = ny((s = e + (n - e) / 2), i, r) - t) > 0
                                  ? (n = s)
                                  : (e = s);
                              while (Math.abs(o) > 1e-7 && ++a < 10);
                              return s;
                            })(e, i, i + 0.1, t, n);
                      })(o),
                      e,
                      i
                    );
            })(e, n, i, r);
          }
          return "string" == typeof t
            ? (ec(void 0 !== nb[t], `Invalid easing type '${t}'`), nb[t])
            : t;
        },
        nE = (t) => Array.isArray(t) && "number" != typeof t[0],
        nP = (t, e) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e && e$.test(e) && !e.startsWith("url("))
          ),
        nS = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10,
        }),
        nT = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        nA = () => ({ type: "keyframes", ease: "linear", duration: 0.3 }),
        nV = (t) => ({ type: "keyframes", duration: 0.8, values: t }),
        nC = {
          x: nS,
          y: nS,
          z: nS,
          rotate: nS,
          rotateX: nS,
          rotateY: nS,
          rotateZ: nS,
          scaleX: nT,
          scaleY: nT,
          scale: nT,
          opacity: nA,
          backgroundColor: nA,
          color: nA,
          default: nT,
        },
        nM = (t, e) => ({ to: e, ...(tV(e) ? nV : nC[t] || nC.default)(e) }),
        nR = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function nk(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [i] = n.match(H) || [];
        if (!i) return t;
        let r = n.replace(i, ""),
          o = nR.has(e) ? 1 : 0;
        return i !== n && (o *= 100), e + "(" + o + r + ")";
      }
      let nO = /([a-z-]*)\(.*?\)/g,
        nL = Object.assign(Object.assign({}, e$), {
          getAnimatableNone(t) {
            let e = t.match(nO);
            return e ? e.map(nk).join(" ") : t;
          },
        }),
        nj = {
          ...to,
          color: ej,
          backgroundColor: ej,
          outlineColor: ej,
          fill: ej,
          stroke: ej,
          borderColor: ej,
          borderTopColor: ej,
          borderRightColor: ej,
          borderBottomColor: ej,
          borderLeftColor: ej,
          filter: nL,
          WebkitFilter: nL,
        },
        nD = (t) => nj[t];
      function nF(t, e) {
        var n;
        let i = nD(t);
        return (
          i !== nL && (i = e$),
          null === (n = i.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(i, e)
        );
      }
      let nB = { current: !1 };
      function nU(t, e) {
        let n = performance.now(),
          i = ({ timestamp: r }) => {
            let o = r - n;
            o >= e && (nc.qY.read(i), t(o - e));
          };
        return nc.ZP.read(i, !0), () => nc.qY.read(i);
      }
      let nI = !1;
      function nN(t) {
        return (
          0 === t ||
          ("string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" "))
        );
      }
      function n$(t) {
        return "number" == typeof t ? 0 : nF("", t);
      }
      function nz(t, e) {
        return t[e] || t.default || t;
      }
      function nY(t, e, n, i = {}) {
        return (
          nB.current && (i = { type: !1 }),
          e.start((r) => {
            let o, s;
            let a = (function (t, e, n, i, r) {
                let o = nz(i, t) || {},
                  s = void 0 !== o.from ? o.from : e.get(),
                  a = nP(t, n);
                "none" === s && a && "string" == typeof n
                  ? (s = nF(t, n))
                  : nN(s) && "string" == typeof n
                  ? (s = n$(n))
                  : !Array.isArray(n) &&
                    nN(n) &&
                    "string" == typeof s &&
                    (n = n$(s));
                let l = nP(t, s);
                return (
                  eu(
                    l === a,
                    `You are trying to animate ${t} from "${s}" to "${n}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${n} via the \`style\` property.`
                  ),
                  l && a && !1 !== o.type
                    ? function () {
                        var i, a;
                        let l = {
                          from: s,
                          to: n,
                          velocity: e.getVelocity(),
                          onComplete: r,
                          onUpdate: (t) => e.set(t),
                        };
                        return "inertia" === o.type || "decay" === o.type
                          ? (function ({
                              from: t = 0,
                              velocity: e = 0,
                              min: n,
                              max: i,
                              power: r = 0.8,
                              timeConstant: o = 750,
                              bounceStiffness: s = 500,
                              bounceDamping: a = 10,
                              restDelta: l = 1,
                              modifyTarget: u,
                              driver: c,
                              onUpdate: h,
                              onComplete: d,
                              onStop: p,
                            }) {
                              let f;
                              function m(t) {
                                return (
                                  (void 0 !== n && t < n) ||
                                  (void 0 !== i && t > i)
                                );
                              }
                              function v(t) {
                                return void 0 === n
                                  ? i
                                  : void 0 === i
                                  ? n
                                  : Math.abs(n - t) < Math.abs(i - t)
                                  ? n
                                  : i;
                              }
                              function g(t) {
                                null == f || f.stop(),
                                  (f = np(
                                    Object.assign(Object.assign({}, t), {
                                      driver: c,
                                      onUpdate(e) {
                                        var n;
                                        null == h || h(e),
                                          null === (n = t.onUpdate) ||
                                            void 0 === n ||
                                            n.call(t, e);
                                      },
                                      onComplete: d,
                                      onStop: p,
                                    })
                                  ));
                              }
                              function y(t) {
                                g(
                                  Object.assign(
                                    {
                                      type: "spring",
                                      stiffness: s,
                                      damping: a,
                                      restDelta: l,
                                    },
                                    t
                                  )
                                );
                              }
                              if (m(t)) y({ from: t, velocity: e, to: v(t) });
                              else {
                                let x,
                                  b,
                                  w = r * e + t;
                                void 0 !== u && (w = u(w));
                                let E = v(w),
                                  P = E === n ? -1 : 1,
                                  S = (t) => {
                                    var n, i;
                                    (x = b),
                                      (b = t),
                                      (n = t - x),
                                      (e = (i = (0, nc.$B)().delta)
                                        ? n * (1e3 / i)
                                        : 0),
                                      ((1 === P && t > E) ||
                                        (-1 === P && t < E)) &&
                                        y({ from: t, to: E, velocity: e });
                                  };
                                g({
                                  type: "decay",
                                  from: t,
                                  velocity: e,
                                  timeConstant: o,
                                  power: r,
                                  restDelta: l,
                                  modifyTarget: u,
                                  onUpdate: m(w) ? S : void 0,
                                });
                              }
                              return {
                                stop: () => (null == f ? void 0 : f.stop()),
                              };
                            })({ ...l, ...o })
                          : np({
                              ...((i = o),
                              Array.isArray(l.to) &&
                                void 0 === i.duration &&
                                (i.duration = 0.8),
                              Array.isArray((a = l).to) &&
                                null === a.to[0] &&
                                ((a.to = [...a.to]), (a.to[0] = a.from)),
                              !(function ({
                                when: t,
                                delay: e,
                                delayChildren: n,
                                staggerChildren: i,
                                staggerDirection: r,
                                repeat: o,
                                repeatType: s,
                                repeatDelay: a,
                                from: l,
                                ...u
                              }) {
                                return !!Object.keys(u).length;
                              })(i) && (i = { ...i, ...nM(t, l.to) }),
                              {
                                ...l,
                                ...(function ({
                                  ease: t,
                                  times: e,
                                  yoyo: n,
                                  flip: i,
                                  loop: r,
                                  ...o
                                }) {
                                  let s = { ...o };
                                  return (
                                    e && (s.offset = e),
                                    o.duration && (s.duration = nf(o.duration)),
                                    o.repeatDelay &&
                                      (s.repeatDelay = nf(o.repeatDelay)),
                                    t && (s.ease = nE(t) ? t.map(nw) : nw(t)),
                                    "tween" === o.type &&
                                      (s.type = "keyframes"),
                                    (n || r || i) &&
                                      (eu(
                                        !nI,
                                        "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."
                                      ),
                                      (nI = !0),
                                      n
                                        ? (s.repeatType = "reverse")
                                        : r
                                        ? (s.repeatType = "loop")
                                        : i && (s.repeatType = "mirror"),
                                      (s.repeat = r || n || i || o.repeat)),
                                    "spring" !== o.type &&
                                      (s.type = "keyframes"),
                                    s
                                  );
                                })(i),
                              }),
                              onUpdate(t) {
                                l.onUpdate(t), o.onUpdate && o.onUpdate(t);
                              },
                              onComplete() {
                                l.onComplete(), o.onComplete && o.onComplete();
                              },
                            });
                      }
                    : function () {
                        let t = tM(n);
                        return (
                          e.set(t),
                          r(),
                          o.onUpdate && o.onUpdate(t),
                          o.onComplete && o.onComplete(),
                          { stop() {} }
                        );
                      }
                );
              })(t, e, n, i, r),
              l = (function (t, e) {
                var n, i;
                let r = nz(t, e) || {};
                return null !==
                  (i = null !== (n = r.delay) && void 0 !== n ? n : t.delay) &&
                  void 0 !== i
                  ? i
                  : 0;
              })(i, t),
              u = () => (o = a());
            return (
              l ? (s = nU(u, nf(l))) : u(),
              () => {
                s && s(), o && o.stop();
              }
            );
          })
        );
      }
      let nH = (t) => /^\-?\d*\.?\d+$/.test(t),
        nW = (t) => /^0[^.\s]+$/.test(t);
      function nq(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function nZ(t, e) {
        let n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class n_ {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return nq(this.subscriptions, t), () => nZ(this.subscriptions, t);
        }
        notify(t, e, n) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let r = 0; r < i; r++) {
                let o = this.subscriptions[r];
                o && o(t, e, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let nX = (t) => !isNaN(parseFloat(t));
      class nG {
        constructor(t) {
          (this.version = "7.6.5"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.updateSubscribers = new n_()),
            (this.velocityUpdateSubscribers = new n_()),
            (this.renderSubscribers = new n_()),
            (this.canTrackVelocity = !1),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: n, timestamp: i } = (0, nc.$B)();
              this.lastUpdated !== i &&
                ((this.timeDelta = n),
                (this.lastUpdated = i),
                nc.ZP.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.updateSubscribers.notify(this.current),
                this.velocityUpdateSubscribers.getSize() &&
                  this.velocityUpdateSubscribers.notify(this.getVelocity()),
                e && this.renderSubscribers.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              nc.ZP.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.velocityUpdateSubscribers.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = nX(this.current));
        }
        onChange(t) {
          return this.updateSubscribers.add(t);
        }
        clearListeners() {
          this.updateSubscribers.clear();
        }
        onRenderRequest(t) {
          return t(this.get()), this.renderSubscribers.add(t);
        }
        attach(t) {
          this.passiveEffect = t;
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t, e;
          return this.canTrackVelocity
            ? ((t = parseFloat(this.current) - parseFloat(this.prev)),
              (e = this.timeDelta) ? t * (1e3 / e) : 0)
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0), (this.stopAnimation = t(e));
            }).then(() => this.clearAnimation())
          );
        }
        stop() {
          this.stopAnimation && this.stopAnimation(), this.clearAnimation();
        }
        isAnimating() {
          return !!this.stopAnimation;
        }
        clearAnimation() {
          this.stopAnimation = null;
        }
        destroy() {
          this.updateSubscribers.clear(),
            this.renderSubscribers.clear(),
            this.stop();
        }
      }
      function nK(t) {
        return new nG(t);
      }
      let nJ = (t) => (e) => e.test(t),
        nQ = [
          te,
          K,
          G,
          X,
          Q,
          J,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        n0 = (t) => nQ.find(nJ(t)),
        n1 = [...nQ, ej, e$],
        n2 = (t) => n1.find(nJ(t));
      function n5(t, e, n) {
        let i = t.getProps();
        return tA(
          i,
          e,
          void 0 !== n ? n : i.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, n) => (e[n] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, n) => (e[n] = t.getVelocity())), e;
          })(t)
        );
      }
      function n3(t) {
        return Boolean(B(t) && t.add);
      }
      function n4(t, e, n = {}) {
        var i;
        let r = n5(t, e, n.custom),
          { transition: o = t.getDefaultTransition() || {} } = r || {};
        n.transitionOverride && (o = n.transitionOverride);
        let s = r ? () => n6(t, r, n) : () => Promise.resolve(),
          a = (
            null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size
          )
            ? (i = 0) => {
                let {
                  delayChildren: r = 0,
                  staggerChildren: s,
                  staggerDirection: a,
                } = o;
                return (function (t, e, n = 0, i = 0, r = 1, o) {
                  let s = [],
                    a = (t.variantChildren.size - 1) * i,
                    l = 1 === r ? (t = 0) => t * i : (t = 0) => a - t * i;
                  return (
                    Array.from(t.variantChildren)
                      .sort(n7)
                      .forEach((t, i) => {
                        s.push(
                          n4(t, e, { ...o, delay: n + l(i) }).then(() =>
                            t.notify("AnimationComplete", e)
                          )
                        );
                      }),
                    Promise.all(s)
                  );
                })(t, e, r + i, s, a, n);
              }
            : () => Promise.resolve(),
          { when: l } = o;
        if (!l) return Promise.all([s(), a(n.delay)]);
        {
          let [u, c] = "beforeChildren" === l ? [s, a] : [a, s];
          return u().then(c);
        }
      }
      function n6(t, e, { delay: n = 0, transitionOverride: i, type: r } = {}) {
        var o;
        let {
            transition: s = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = t.makeTargetAnimatable(e),
          u = t.getValue("willChange");
        i && (s = i);
        let c = [],
          h =
            r &&
            (null === (o = t.animationState) || void 0 === o
              ? void 0
              : o.getState()[r]);
        for (let d in l) {
          let p = t.getValue(d),
            f = l[d];
          if (
            !p ||
            void 0 === f ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, n) {
                let i = t.hasOwnProperty(n) && !0 !== e[n];
                return (e[n] = !1), i;
              })(h, d))
          )
            continue;
          let m = { delay: n, ...s };
          t.shouldReduceMotion &&
            D.has(d) &&
            (m = { ...m, type: !1, delay: 0 });
          let v = nY(d, p, f, m);
          n3(u) && (u.add(d), (v = v.then(() => u.remove(d)))), c.push(v);
        }
        return Promise.all(c).then(() => {
          a &&
            (function (t, e) {
              let n = n5(t, e),
                {
                  transitionEnd: i = {},
                  transition: r = {},
                  ...o
                } = n ? t.makeTargetAnimatable(n, !1) : {};
              for (let s in (o = { ...o, ...i })) {
                var a;
                let l = tM(o[s]);
                (a = s),
                  t.hasValue(a) ? t.getValue(a).set(l) : t.addValue(a, nK(l));
              }
            })(t, a);
        });
      }
      function n7(t, e) {
        return t.sortNodePosition(e);
      }
      let n8 = [s.Animate, s.InView, s.Focus, s.Hover, s.Tap, s.Drag, s.Exit],
        n9 = [...n8].reverse(),
        it = n8.length;
      function ie(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let ii = {
          animation: er(({ visualElement: t, animate: e }) => {
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: n }) =>
                        (function (t, e, n = {}) {
                          let i;
                          if (
                            (t.notify("AnimationStart", e), Array.isArray(e))
                          ) {
                            let r = e.map((e) => n4(t, e, n));
                            i = Promise.all(r);
                          } else if ("string" == typeof e) i = n4(t, e, n);
                          else {
                            let o =
                              "function" == typeof e ? n5(t, e, n.custom) : e;
                            i = n6(t, o, n);
                          }
                          return i.then(() => t.notify("AnimationComplete", e));
                        })(t, e, n)
                      )
                    ),
                  n = {
                    [s.Animate]: ie(!0),
                    [s.InView]: ie(),
                    [s.Hover]: ie(),
                    [s.Tap]: ie(),
                    [s.Drag]: ie(),
                    [s.Focus]: ie(),
                    [s.Exit]: ie(),
                  },
                  i = !0,
                  r = (e, n) => {
                    let i = n5(t, n);
                    if (i) {
                      let { transition: r, transitionEnd: o, ...s } = i;
                      e = { ...e, ...s, ...o };
                    }
                    return e;
                  };
                function o(o, s) {
                  var a, l;
                  let u = t.getProps(),
                    c = t.getVariantContext(!0) || {},
                    h = [],
                    d = new Set(),
                    p = {},
                    f = 1 / 0;
                  for (let g = 0; g < it; g++) {
                    let y = n9[g],
                      x = n[y],
                      b = null !== (a = u[y]) && void 0 !== a ? a : c[y],
                      w = m(b),
                      E = y === s ? x.isActive : null;
                    !1 === E && (f = g);
                    let P = b === c[y] && b !== u[y] && w;
                    if (
                      (P && i && t.manuallyAnimateOnMount && (P = !1),
                      (x.protectedKeys = { ...p }),
                      (!x.isActive && null === E) ||
                        (!b && !x.prevProp) ||
                        v(b) ||
                        "boolean" == typeof b)
                    )
                      continue;
                    let S =
                        ((l = x.prevProp),
                        "string" == typeof b
                          ? b !== l
                          : !!Array.isArray(b) && !ea(b, l)),
                      T =
                        S || (y === s && x.isActive && !P && w) || (g > f && w),
                      A = Array.isArray(b) ? b : [b],
                      V = A.reduce(r, {});
                    !1 === E && (V = {});
                    let { prevResolvedValues: C = {} } = x,
                      M = { ...C, ...V },
                      R = (t) => {
                        (T = !0), d.delete(t), (x.needsAnimating[t] = !0);
                      };
                    for (let k in M) {
                      let O = V[k],
                        L = C[k];
                      p.hasOwnProperty(k) ||
                        (O !== L
                          ? tV(O) && tV(L)
                            ? !ea(O, L) || S
                              ? R(k)
                              : (x.protectedKeys[k] = !0)
                            : void 0 !== O
                            ? R(k)
                            : d.add(k)
                          : void 0 !== O && d.has(k)
                          ? R(k)
                          : (x.protectedKeys[k] = !0));
                    }
                    (x.prevProp = b),
                      (x.prevResolvedValues = V),
                      x.isActive && (p = { ...p, ...V }),
                      i && t.blockInitialAnimation && (T = !1),
                      T &&
                        !P &&
                        h.push(
                          ...A.map((t) => ({
                            animation: t,
                            options: { type: y, ...o },
                          }))
                        );
                  }
                  if (d.size) {
                    let j = {};
                    d.forEach((e) => {
                      let n = t.getBaseTarget(e);
                      void 0 !== n && (j[e] = n);
                    }),
                      h.push({ animation: j });
                  }
                  let D = Boolean(h.length);
                  return (
                    i &&
                      !1 === u.initial &&
                      !t.manuallyAnimateOnMount &&
                      (D = !1),
                    (i = !1),
                    D ? e(h) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (e, i, r) {
                    var s;
                    if (n[e].isActive === i) return Promise.resolve();
                    null === (s = t.variantChildren) ||
                      void 0 === s ||
                      s.forEach((t) => {
                        var n;
                        return null === (n = t.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(e, i);
                      }),
                      (n[e].isActive = i);
                    let a = o(r, e);
                    for (let l in n) n[l].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (n) {
                    e = n(t);
                  },
                  getState: () => n,
                };
              })(t)),
              v(e) && (0, l.useEffect)(() => e.subscribe(t), [e]);
          }),
          exit: er((t) => {
            let { custom: e, visualElement: n } = t,
              [i, r] = es(),
              o = (0, l.useContext)(h.O);
            (0, l.useEffect)(() => {
              n.isPresent = i;
              let t =
                n.animationState &&
                n.animationState.setActive(s.Exit, !i, {
                  custom: (o && o.custom) || e,
                });
              t && !i && t.then(r);
            }, [i]);
          }),
        },
        ir = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        io = (t) => ir(t) && t.hasOwnProperty("z"),
        is = (t, e) => Math.abs(t - e);
      function ia(t, e) {
        if (ez(t) && ez(e)) return is(t, e);
        if (ir(t) && ir(e)) {
          let n = is(t.x, e.x),
            i = is(t.y, e.y),
            r = io(t) && io(e) ? is(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2) + Math.pow(r, 2));
        }
      }
      class il {
        constructor(t, e, { transformPagePoint: n } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = ih(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = ia(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !n) return;
              let { point: i } = t,
                { timestamp: r } = (0, nc.$B)();
              this.history.push({ ...i, timestamp: r });
              let { onStart: o, onMove: s } = this.handlers;
              e ||
                (o && o(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                s && s(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              if (
                ((this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iu(e, this.transformPagePoint)),
                tF(t) && 0 === t.buttons)
              ) {
                this.handlePointerUp(t, e);
                return;
              }
              nc.ZP.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let { onEnd: n, onSessionEnd: i } = this.handlers,
                r = ih(iu(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, r), i && i(t, r);
            }),
            tB(t) && t.touches.length > 1)
          )
            return;
          (this.handlers = e), (this.transformPagePoint = n);
          let i = tI(t),
            r = iu(i, this.transformPagePoint),
            { point: o } = r,
            { timestamp: s } = (0, nc.$B)();
          this.history = [{ ...o, timestamp: s }];
          let { onSessionStart: a } = e;
          a && a(t, ih(r, this.history)),
            (this.removeListeners = t3(
              tZ(window, "pointermove", this.handlePointerMove),
              tZ(window, "pointerup", this.handlePointerUp),
              tZ(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            nc.qY.update(this.updatePoint);
        }
      }
      function iu(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function ic(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function ih({ point: t }, e) {
        return {
          point: t,
          delta: ic(t, id(e)),
          offset: ic(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let n = t.length - 1,
              i = null,
              r = id(t);
            for (
              ;
              n >= 0 && ((i = t[n]), !(r.timestamp - i.timestamp > nf(0.1)));

            )
              n--;
            if (!i) return { x: 0, y: 0 };
            let o = (r.timestamp - i.timestamp) / 1e3;
            if (0 === o) return { x: 0, y: 0 };
            let s = { x: (r.x - i.x) / o, y: (r.y - i.y) / o };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(e, 0),
        };
      }
      function id(t) {
        return t[t.length - 1];
      }
      function ip(t) {
        return t.max - t.min;
      }
      function im(t, e = 0, n = 0.01) {
        return ia(t, e) < n;
      }
      function iv(t, e, n, i = 0.5) {
        (t.origin = i),
          (t.originPoint = ex(e.min, e.max, t.origin)),
          (t.scale = ip(n) / ip(e)),
          (im(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = ex(n.min, n.max, t.origin) - t.originPoint),
          (im(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function ig(t, e, n, i) {
        iv(t.x, e.x, n.x, null == i ? void 0 : i.originX),
          iv(t.y, e.y, n.y, null == i ? void 0 : i.originY);
      }
      function iy(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + ip(e));
      }
      function ix(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + ip(e));
      }
      function ib(t, e, n) {
        ix(t.x, e.x, n.x), ix(t.y, e.y, n.y);
      }
      function iw(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function iE(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i }
        );
      }
      function iP(t, e, n) {
        return { min: iS(t, e), max: iS(t, n) };
      }
      function iS(t, e) {
        var n;
        return "number" == typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      let iT = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        iA = () => ({ x: iT(), y: iT() }),
        iV = () => ({ min: 0, max: 0 }),
        iC = () => ({ x: iV(), y: iV() });
      function iM(t) {
        return [t("x"), t("y")];
      }
      function iR({ top: t, left: e, right: n, bottom: i }) {
        return { x: { min: e, max: n }, y: { min: t, max: i } };
      }
      function ik(t) {
        return void 0 === t || 1 === t;
      }
      function iO({ scale: t, scaleX: e, scaleY: n }) {
        return !ik(t) || !ik(e) || !ik(n);
      }
      function iL(t) {
        return iO(t) || ij(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function ij(t) {
        var e, n;
        return ((e = t.x) && "0%" !== e) || ((n = t.y) && "0%" !== n);
      }
      function iD(t, e, n, i, r) {
        return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e;
      }
      function iF(t, e = 0, n = 1, i, r) {
        (t.min = iD(t.min, e, n, i, r)), (t.max = iD(t.max, e, n, i, r));
      }
      function iB(t, { x: e, y: n }) {
        iF(t.x, e.translate, e.scale, e.originPoint),
          iF(t.y, n.translate, n.scale, n.originPoint);
      }
      function iU(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function iI(t, e, [n, i, r]) {
        let o = void 0 !== e[r] ? e[r] : 0.5,
          s = ex(t.min, t.max, o);
        iF(t, e[n], e[i], s, e.scale);
      }
      let iN = ["x", "scaleX", "originX"],
        i$ = ["y", "scaleY", "originY"];
      function iz(t, e) {
        iI(t.x, e, iN), iI(t.y, e, i$);
      }
      function iY(t, e) {
        return iR(
          (function (t, e) {
            if (!e) return t;
            let n = e({ x: t.left, y: t.top }),
              i = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: i.y, right: i.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let iH = new WeakMap();
      class iW {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = iC()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          if (!1 === this.visualElement.isPresent) return;
          let n = (t) => {
              this.stopAnimation(), e && this.snapToCursor(tI(t, "page").point);
            },
            i = (t, e) => {
              var n;
              let {
                drag: i,
                dragPropagation: r,
                onDragStart: o,
              } = this.getProps();
              (!i ||
                r ||
                (this.openGlobalLock && this.openGlobalLock(),
                (this.openGlobalLock = tJ(i)),
                this.openGlobalLock)) &&
                ((this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                iM((t) => {
                  var e, n;
                  let i = this.getAxisMotionValue(t).get() || 0;
                  if (G.test(i)) {
                    let r =
                      null ===
                        (n =
                          null === (e = this.visualElement.projection) ||
                          void 0 === e
                            ? void 0
                            : e.layout) || void 0 === n
                        ? void 0
                        : n.actual[t];
                    if (r) {
                      let o = ip(r);
                      i = o * (parseFloat(i) / 100);
                    }
                  }
                  this.originPoint[t] = i;
                }),
                null == o || o(t, e),
                null === (n = this.visualElement.animationState) ||
                  void 0 === n ||
                  n.setActive(s.Drag, !0));
            },
            r = (t, e) => {
              let {
                dragPropagation: n,
                dragDirectionLock: i,
                onDirectionLock: r,
                onDrag: o,
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              let { offset: s } = e;
              if (i && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let n = null;
                  return (
                    Math.abs(t.y) > e
                      ? (n = "y")
                      : Math.abs(t.x) > e && (n = "x"),
                    n
                  );
                })(s)),
                  null !== this.currentDirection &&
                    (null == r || r(this.currentDirection));
                return;
              }
              this.updateAxis("x", e.point, s),
                this.updateAxis("y", e.point, s),
                this.visualElement.render(),
                null == o || o(t, e);
            },
            o = (t, e) => this.stop(t, e);
          this.panSession = new il(
            t,
            { onSessionStart: n, onStart: i, onMove: r, onSessionEnd: o },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          );
        }
        stop(t, e) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: i } = e;
          this.startAnimation(i);
          let { onDragEnd: r } = this.getProps();
          null == r || r(t, e);
        }
        cancel() {
          var t, e;
          (this.isDragging = !1),
            this.visualElement.projection &&
              (this.visualElement.projection.isAnimationBlocked = !1),
            null === (t = this.panSession) || void 0 === t || t.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            null === (e = this.visualElement.animationState) ||
              void 0 === e ||
              e.setActive(s.Drag, !1);
        }
        updateAxis(t, e, n) {
          let { drag: i } = this.getProps();
          if (!n || !iq(t, i, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            o = this.originPoint[t] + n[t];
          this.constraints &&
            this.constraints[t] &&
            (o = (function (t, { min: e, max: n }, i) {
              return (
                void 0 !== e && t < e
                  ? (t = i ? ex(e, t, i.min) : Math.max(t, e))
                  : void 0 !== n &&
                    t > n &&
                    (t = i ? ex(n, t, i.max) : Math.min(t, n)),
                t
              );
            })(o, this.constraints[t], this.elastic[t])),
            r.set(o);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: n } = this.visualElement.projection || {},
            i = this.constraints;
          t && f(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && n
            ? (this.constraints = (function (
                t,
                { top: e, left: n, bottom: i, right: r }
              ) {
                return { x: iw(t.x, n, r), y: iw(t.y, e, i) };
              })(n.actual, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iP(t, "left", "right"), y: iP(t, "top", "bottom") }
              );
            })(e)),
            i !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iM((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let n = {};
                    return (
                      void 0 !== e.min && (n.min = e.min - t.min),
                      void 0 !== e.max && (n.max = e.max - t.min),
                      n
                    );
                  })(n.actual[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: n } =
            this.getProps();
          if (!e || !f(e)) return !1;
          let i = e.current;
          ec(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let o = (function (t, e, n) {
              let i = iY(t, n),
                { scroll: r } = e;
              return r && (iU(i.x, r.x), iU(i.y, r.y)), i;
            })(i, r.root, this.visualElement.getTransformPagePoint()),
            s = { x: iE((t = r.layout.actual).x, o.x), y: iE(t.y, o.y) };
          if (n) {
            let a = n(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(s)
            );
            (this.hasMutatedConstraints = !!a), a && (s = iR(a));
          }
          return s;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: n,
              dragElastic: i,
              dragTransition: r,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s,
            } = this.getProps(),
            a = this.constraints || {},
            l = iM((s) => {
              var l;
              if (!iq(s, e, this.currentDirection)) return;
              let u =
                null !== (l = null == a ? void 0 : a[s]) && void 0 !== l
                  ? l
                  : {};
              o && (u = { min: 0, max: 0 });
              let c = {
                type: "inertia",
                velocity: n ? t[s] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...u,
              };
              return this.startAxisValueAnimation(s, c);
            });
          return Promise.all(l).then(s);
        }
        startAxisValueAnimation(t, e) {
          let n = this.getAxisMotionValue(t);
          return nY(t, n, 0, e);
        }
        stopAnimation() {
          iM((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          var e, n;
          let i = "_drag" + t.toUpperCase(),
            r = this.visualElement.getProps()[i];
          return (
            r ||
            this.visualElement.getValue(
              t,
              null !==
                (n =
                  null === (e = this.visualElement.getProps().initial) ||
                  void 0 === e
                    ? void 0
                    : e[t]) && void 0 !== n
                ? n
                : 0
            )
          );
        }
        snapToCursor(t) {
          iM((e) => {
            let { drag: n } = this.getProps();
            if (!iq(e, n, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (i && i.layout) {
              let { min: o, max: s } = i.layout.actual[e];
              r.set(t[e] - ex(o, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          var t;
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: n } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!f(n) || !i || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          iM((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let n = e.get();
              r[t] = (function (t, e) {
                let n = 0.5,
                  i = ip(t),
                  r = ip(e);
                return (
                  r > i
                    ? (n = ey(e.min, e.max - i, t.min))
                    : i > r && (n = ey(t.min, t.max - r, e.min)),
                  eh(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[t]);
            }
          });
          let { transformTemplate: o } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
            null === (t = i.root) || void 0 === t || t.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            iM((t) => {
              if (!iq(t, e, null)) return;
              let n = this.getAxisMotionValue(t),
                { min: i, max: o } = this.constraints[t];
              n.set(ex(i, o, r[t]));
            });
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          iH.set(this.visualElement, this);
          let e = this.visualElement.current,
            n = tZ(e, "pointerdown", (t) => {
              let { drag: e, dragListener: n = !0 } = this.getProps();
              e && n && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              f(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            o = r.addEventListener("measure", i);
          r &&
            !r.layout &&
            (null === (t = r.root) || void 0 === t || t.updateScroll(),
            r.updateLayout()),
            i();
          let s = tj(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            a = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iM((e) => {
                    let n = this.getAxisMotionValue(e);
                    n &&
                      ((this.originPoint[e] += t[e].translate),
                      n.set(n.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), n(), o(), null == a || a();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: r = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: o,
            dragMomentum: s,
          };
        }
      }
      function iq(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      let iZ = {
        pan: er(function ({
          onPan: t,
          onPanStart: e,
          onPanEnd: n,
          onPanSessionStart: i,
          visualElement: r,
        }) {
          let o = (0, l.useRef)(null),
            { transformPagePoint: s } = (0, l.useContext)(u),
            a = {
              onSessionStart: i,
              onStart: e,
              onMove: t,
              onEnd(t, e) {
                (o.current = null), n && n(t, e);
              },
            };
          (0, l.useEffect)(() => {
            null !== o.current && o.current.updateHandlers(a);
          }),
            t_(
              r,
              "pointerdown",
              (t || e || n || i) &&
                function (t) {
                  o.current = new il(t, a, { transformPagePoint: s });
                }
            ),
            (0, t2.z)(() => o.current && o.current.end());
        }),
        drag: er(function (t) {
          let { dragControls: e, visualElement: n } = t,
            i = (0, S.h)(() => new iW(n));
          (0, l.useEffect)(() => e && e.subscribe(i), [i, e]),
            (0, l.useEffect)(() => i.addListeners(), [i]);
        }),
      };
      function i_(t) {
        return "string" == typeof t && t.startsWith("var(--");
      }
      let iX = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function iG(t, e, n = 1) {
        ec(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [i, r] = (function (t) {
          let e = iX.exec(t);
          if (!e) return [,];
          let [, n, i] = e;
          return [n, i];
        })(t);
        if (!i) return;
        let o = window.getComputedStyle(e).getPropertyValue(i);
        return o ? o.trim() : i_(r) ? iG(r, e, n + 1) : r;
      }
      let iK = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        iJ = (t) => iK.has(t),
        iQ = (t) => Object.keys(t).some(iJ),
        i0 = (t, e) => {
          t.set(e, !1), t.set(e);
        },
        i1 = (t) => t === te || t === K;
      ((o = a || (a = {})).width = "width"),
        (o.height = "height"),
        (o.left = "left"),
        (o.right = "right"),
        (o.top = "top"),
        (o.bottom = "bottom");
      let i2 = (t, e) => parseFloat(t.split(", ")[e]),
        i5 =
          (t, e) =>
          (n, { transform: i }) => {
            if ("none" === i || !i) return 0;
            let r = i.match(/^matrix3d\((.+)\)$/);
            if (r) return i2(r[1], e);
            {
              let o = i.match(/^matrix\((.+)\)$/);
              return o ? i2(o[1], t) : 0;
            }
          },
        i3 = new Set(["x", "y", "z"]),
        i4 = j.filter((t) => !i3.has(t)),
        i6 = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: i5(4, 13),
          y: i5(5, 14),
        },
        i7 = (t, e, n) => {
          let i = e.measureViewportBox(),
            r = e.current,
            o = getComputedStyle(r),
            { display: s } = o,
            a = {};
          "none" === s && e.setStaticValue("display", t.display || "block"),
            n.forEach((t) => {
              a[t] = i6[t](i, o);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            n.forEach((n) => {
              let i = e.getValue(n);
              i0(i, a[n]), (t[n] = i6[n](l, o));
            }),
            t
          );
        },
        i8 = (t, e, n = {}, i = {}) => {
          (e = { ...e }), (i = { ...i });
          let r = Object.keys(e).filter(iJ),
            o = [],
            s = !1,
            a = [];
          if (
            (r.forEach((r) => {
              let l;
              let u = t.getValue(r);
              if (!t.hasValue(r)) return;
              let c = n[r],
                h = n0(c),
                d = e[r];
              if (tV(d)) {
                let p = d.length,
                  f = null === d[0] ? 1 : 0;
                h = n0((c = d[f]));
                for (let m = f; m < p; m++)
                  l
                    ? ec(
                        n0(d[m]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ec(
                        (l = n0(d[m])) === h || (i1(h) && i1(l)),
                        "Keyframes must be of the same dimension as the current value"
                      );
              } else l = n0(d);
              if (h !== l) {
                if (i1(h) && i1(l)) {
                  let v = u.get();
                  "string" == typeof v && u.set(parseFloat(v)),
                    "string" == typeof d
                      ? (e[r] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === K &&
                        (e[r] = d.map(parseFloat));
                } else
                  (null == h ? void 0 : h.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === c || 0 === d)
                    ? 0 === c
                      ? u.set(l.transform(c))
                      : (e[r] = h.transform(d))
                    : (s ||
                        ((o = (function (t) {
                          let e = [];
                          return (
                            i4.forEach((n) => {
                              let i = t.getValue(n);
                              void 0 !== i &&
                                (e.push([n, i.get()]),
                                i.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (s = !0)),
                      a.push(r),
                      (i[r] = void 0 !== i[r] ? i[r] : e[r]),
                      i0(u, d));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: i };
          {
            let l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              u = i7(e, t, a);
            return (
              o.length &&
                o.forEach(([e, n]) => {
                  t.getValue(e).set(n);
                }),
              t.render(),
              P.j && null !== l && window.scrollTo({ top: l }),
              { target: u, transitionEnd: i }
            );
          }
        },
        i9 = (t, e, n, i) => {
          var r, o;
          let s = (function (t, { ...e }, n) {
            let i = t.current;
            if (!(i instanceof Element)) return { target: e, transitionEnd: n };
            for (let r in (n && (n = { ...n }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!i_(e)) return;
              let n = iG(e, i);
              n && t.set(n);
            }),
            e)) {
              let o = e[r];
              if (!i_(o)) continue;
              let s = iG(o, i);
              s && ((e[r] = s), n && void 0 === n[r] && (n[r] = o));
            }
            return { target: e, transitionEnd: n };
          })(t, e, i);
          return (
            (e = s.target),
            (i = s.transitionEnd),
            (r = e),
            (o = i),
            iQ(r) ? i8(t, r, n, o) : { target: r, transitionEnd: o }
          );
        },
        rt = { current: null },
        re = { current: !1 },
        rn = Object.keys(E),
        ri = rn.length,
        rr = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "Unmount",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class ro {
        constructor(
          { parent: t, props: e, reducedMotionConfig: n, visualState: i },
          r = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.isPresent = !0),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => nc.ZP.render(this.render, !1, !0));
          let { latestValues: o, renderState: s } = i;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = s),
            (this.parent = t),
            (this.props = e),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = r),
            (this.isControllingVariants = y(e)),
            (this.isVariantNode = x(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(t && t.current));
          let { willChange: a, ...l } = this.scrapeMotionValuesFromProps(e);
          for (let u in l) {
            let c = l[u];
            void 0 !== o[u] && B(c) && (c.set(o[u], !1), n3(a) && a.add(u));
          }
          if (e.values)
            for (let h in e.values) {
              let d = e.values[h];
              void 0 !== o[h] && B(d) && d.set(o[h]);
            }
        }
        scrapeMotionValuesFromProps(t) {
          return {};
        }
        mount(t) {
          var e;
          (this.current = t),
            this.projection && this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree =
                null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            re.current ||
              (function () {
                if (((re.current = !0), P.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (rt.current = t.matches);
                    t.addListener(e), e();
                  } else rt.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rt.current)),
            this.parent && this.parent.children.add(this),
            this.setProps(this.props);
        }
        unmount() {
          var t, e, n;
          for (let i in (null === (t = this.projection) ||
            void 0 === t ||
            t.unmount(),
          nc.qY.update(this.notifyUpdate),
          nc.qY.render(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          null === (e = this.removeFromVariantTree) ||
            void 0 === e ||
            e.call(this),
          null === (n = this.parent) || void 0 === n || n.children.delete(this),
          this.events))
            this.events[i].clear();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let n = e.onChange((e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && nc.ZP.update(this.notifyUpdate, !1, !0);
            }),
            i = e.onRenderRequest(this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), i();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures(t, e, n, i, r, o) {
          let s = [];
          "production" !== t4.O &&
            n &&
            e &&
            ec(
              !1,
              "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
            );
          for (let a = 0; a < ri; a++) {
            let u = rn[a],
              { isEnabled: c, Component: h } = E[u];
            c(t) &&
              h &&
              s.push(
                (0, l.createElement)(h, { key: u, ...t, visualElement: this })
              );
          }
          if (!this.projection && r) {
            this.projection = new r(
              i,
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: d,
              layout: p,
              drag: m,
              dragConstraints: v,
              layoutScroll: g,
            } = t;
            this.projection.setOptions({
              layoutId: d,
              layout: p,
              alwaysMeasureLayout: Boolean(m) || (v && f(v)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof p ? p : "both",
              initialPromotionConfig: o,
              layoutScroll: g,
            });
          }
          return s;
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : iC();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        setProps(t) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.props = t);
          for (let e = 0; e < rr.length; e++) {
            let n = rr[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i));
          }
          this.prevMotionValues = (function (t, e, n) {
            let { willChange: i } = e;
            for (let r in e) {
              let o = e[r],
                s = n[r];
              if (B(o)) t.addValue(r, o), n3(i) && i.add(r);
              else if (B(s)) t.addValue(r, nK(o)), n3(i) && i.remove(r);
              else if (s !== o) {
                if (t.hasValue(r)) {
                  let a = t.getValue(r);
                  a.hasAnimated || a.set(o);
                } else {
                  let l = t.getStaticValue(r);
                  t.addValue(r, nK(void 0 !== l ? l : o));
                }
              }
            }
            for (let u in n) void 0 === e[u] && t.removeValue(u);
            return e;
          })(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          var e;
          return null === (e = this.props.variants) || void 0 === e
            ? void 0
            : e[t];
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          var t;
          return this.isVariantNode
            ? this
            : null === (t = this.parent) || void 0 === t
            ? void 0
            : t.getClosestVariantNode();
        }
        getVariantContext(t = !1) {
          var e, n;
          if (t)
            return null === (e = this.parent) || void 0 === e
              ? void 0
              : e.getVariantContext();
          if (!this.isControllingVariants) {
            let i =
              (null === (n = this.parent) || void 0 === n
                ? void 0
                : n.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (i.initial = this.props.initial),
              i
            );
          }
          let r = {};
          for (let o = 0; o < ra; o++) {
            let s = rs[o],
              a = this.props[s];
            (m(a) || !1 === a) && (r[s] = a);
          }
          return r;
        }
        addVariantChild(t) {
          var e;
          let n = this.getClosestVariantNode();
          if (n)
            return (
              null === (e = n.variantChildren) || void 0 === e || e.add(t),
              () => n.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          this.hasValue(t) && this.removeValue(t),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()),
            this.bindToMotionValue(t, e);
        }
        removeValue(t) {
          var e;
          this.values.delete(t),
            null === (e = this.valueSubscriptions.get(t)) ||
              void 0 === e ||
              e(),
            this.valueSubscriptions.delete(t),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n && void 0 !== e && ((n = nK(e)), this.addValue(t, n)),
            n
          );
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current
            ? this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: n } = this.props,
            i =
              "string" == typeof n || "object" == typeof n
                ? null === (e = tA(this.props, n)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || B(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new n_()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          var n;
          null === (n = this.events[t]) || void 0 === n || n.notify(...e);
        }
      }
      let rs = ["initial", ...n8],
        ra = rs.length;
      class rl extends ro {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          var n;
          return null === (n = t.style) || void 0 === n ? void 0 : n[e];
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...n },
          { transformValues: i },
          r
        ) {
          let o = (function (t, e, n) {
            var i;
            let r = {};
            for (let o in t) {
              let s = (function (t, e) {
                if (!e) return;
                let n = e[t] || e.default || e;
                return n.from;
              })(o, e);
              r[o] =
                void 0 !== s
                  ? s
                  : null === (i = n.getValue(o)) || void 0 === i
                  ? void 0
                  : i.get();
            }
            return r;
          })(n, t || {}, this);
          if ((i && (e && (e = i(e)), n && (n = i(n)), o && (o = i(o))), r)) {
            !(function (t, e, n) {
              var i, r;
              let o = Object.keys(e).filter((e) => !t.hasValue(e)),
                s = o.length;
              if (s)
                for (let a = 0; a < s; a++) {
                  let l = o[a],
                    u = e[l],
                    c = null;
                  Array.isArray(u) && (c = u[0]),
                    null === c &&
                      (c =
                        null !==
                          (r =
                            null !== (i = n[l]) && void 0 !== i
                              ? i
                              : t.readValue(l)) && void 0 !== r
                          ? r
                          : e[l]),
                    null != c &&
                      ("string" == typeof c && (nH(c) || nW(c))
                        ? (c = parseFloat(c))
                        : !n2(c) && e$.test(u) && (c = nF(l, u)),
                      t.addValue(l, nK(c)),
                      void 0 === n[l] && (n[l] = c),
                      null !== c && t.setBaseTarget(l, c));
                }
            })(this, n, o);
            let s = i9(this, n, o, e);
            (e = s.transitionEnd), (n = s.target);
          }
          return { transition: t, transitionEnd: e, ...n };
        }
      }
      class ru extends rl {
        readValueFromInstance(t, e) {
          if (D.has(e)) {
            let n = nD(e);
            return (n && n.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              r = (N(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return iY(t, e);
        }
        build(t, e, n, i) {
          ts(t, e, n, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t) {
          return tS(t);
        }
        renderInstance(t, e, n, i) {
          tw(t, e, n, i);
        }
      }
      class rc extends rl {
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          var n;
          return D.has(e)
            ? (null === (n = nD(e)) || void 0 === n ? void 0 : n.default) || 0
            : ((e = tE.has(e) ? e : tb(e)), t.getAttribute(e));
        }
        measureInstanceViewportBox() {
          return iC();
        }
        scrapeMotionValuesFromProps(t) {
          return tT(t);
        }
        build(t, e, n, i) {
          tg(t, e, n, i.transformTemplate);
        }
        renderInstance(t, e, n, i) {
          tP(t, e, n, i);
        }
      }
      let rh = (t, e) =>
        O(t)
          ? new rc(e, { enableHardwareAcceleration: !1 })
          : new ru(e, { enableHardwareAcceleration: !0 });
      function rd(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let rp = {
          correct(t, e) {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!K.test(t)) return t;
              t = parseFloat(t);
            }
            let n = rd(t, e.target.x),
              i = rd(t, e.target.y);
            return `${n}% ${i}%`;
          },
        },
        rf = "_$css";
      class rm extends l.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
              layoutId: i,
            } = this.props,
            { projection: r } = t;
          Object.assign(L, rv),
            r &&
              (e.group && e.group.add(r),
              n && n.register && i && n.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (T.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: n,
              drag: i,
              isPresent: r,
            } = this.props,
            o = n.projection;
          return (
            o &&
              ((o.isPresent = r),
              i || t.layoutDependency !== e || void 0 === e
                ? o.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? o.promote()
                  : o.relegate() ||
                    nc.ZP.postRender(() => {
                      var t;
                      (null === (t = o.getStack()) || void 0 === t
                        ? void 0
                        : t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            !t.currentAnimation && t.isLead() && this.safeToRemove());
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
            } = this.props,
            { projection: i } = t;
          i &&
            (i.scheduleCheckAfterUnmount(),
            (null == e ? void 0 : e.group) && e.group.remove(i),
            (null == n ? void 0 : n.deregister) && n.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          null == t || t();
        }
        render() {
          return null;
        }
      }
      let rv = {
          borderRadius: {
            ...rp,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: rp,
          borderTopRightRadius: rp,
          borderBottomLeftRadius: rp,
          borderBottomRightRadius: rp,
          boxShadow: {
            correct(t, { treeScale: e, projectionDelta: n }) {
              let i = t,
                r = t.includes("var("),
                o = [];
              r && (t = t.replace(iX, (t) => (o.push(t), rf)));
              let s = e$.parse(t);
              if (s.length > 5) return i;
              let a = e$.createTransformer(t),
                l = "number" != typeof s[0] ? 1 : 0,
                u = n.x.scale * e.x,
                c = n.y.scale * e.y;
              (s[0 + l] /= u), (s[1 + l] /= c);
              let h = ex(u, c, 0.5);
              "number" == typeof s[2 + l] && (s[2 + l] /= h),
                "number" == typeof s[3 + l] && (s[3 + l] /= h);
              let d = a(s);
              if (r) {
                let p = 0;
                d = d.replace(rf, () => {
                  let t = o[p];
                  return p++, t;
                });
              }
              return d;
            },
          },
        },
        rg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ry = rg.length,
        rx = (t) => ("string" == typeof t ? parseFloat(t) : t),
        rb = (t) => "number" == typeof t || K.test(t);
      function rw(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      let rE = rS(0, 0.5, e6),
        rP = rS(0.5, 0.95, e1);
      function rS(t, e, n) {
        return (i) => (i < t ? 0 : i > e ? 1 : n(ey(t, e, i)));
      }
      function rT(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function rA(t, e) {
        rT(t.x, e.x), rT(t.y, e.y);
      }
      function rV(t, e, n, i, r) {
        return (
          (t -= e),
          (t = i + (1 / n) * (t - i)),
          void 0 !== r && (t = i + (1 / r) * (t - i)),
          t
        );
      }
      function rC(t, e, [n, i, r], o, s) {
        !(function (t, e = 0, n = 1, i = 0.5, r, o = t, s = t) {
          if (G.test(e)) {
            e = parseFloat(e);
            let a = ex(s.min, s.max, e / 100);
            e = a - s.min;
          }
          if ("number" != typeof e) return;
          let l = ex(o.min, o.max, i);
          t === o && (l -= e),
            (t.min = rV(t.min, e, n, l, r)),
            (t.max = rV(t.max, e, n, l, r));
        })(t, e[n], e[i], e[r], e.scale, o, s);
      }
      let rM = ["x", "scaleX", "originX"],
        rR = ["y", "scaleY", "originY"];
      function rk(t, e, n, i) {
        rC(t.x, e, rM, null == n ? void 0 : n.x, null == i ? void 0 : i.x),
          rC(t.y, e, rR, null == n ? void 0 : n.y, null == i ? void 0 : i.y);
      }
      function rO(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function rL(t) {
        return rO(t.x) && rO(t.y);
      }
      function rj(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      function rD(t) {
        return ip(t.x) / ip(t.y);
      }
      class rF {
        constructor() {
          this.members = [];
        }
        add(t) {
          nq(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (nZ(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(t) {
          let e;
          let n = this.members.findIndex((e) => t === e);
          if (0 === n) return !1;
          for (let i = n; i >= 0; i--) {
            let r = this.members[i];
            if (!1 !== r.isPresent) {
              e = r;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          var n;
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues = i.animationValues || i.latestValues),
                (t.snapshot.isShared = !0)),
              (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) &&
                (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            var e, n, i, r, o;
            null === (n = (e = t.options).onExitComplete) ||
              void 0 === n ||
              n.call(e),
              null ===
                (o =
                  null === (i = t.resumingFrom) || void 0 === i
                    ? void 0
                    : (r = i.options).onExitComplete) ||
                void 0 === o ||
                o.call(r);
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function rB(t, e, n) {
        let i = t.x.translate / e.x,
          r = t.y.translate / e.y,
          o = `translate3d(${i}px, ${r}px, 0) `;
        if (((o += `scale(${1 / e.x}, ${1 / e.y}) `), n)) {
          let { rotate: s, rotateX: a, rotateY: l } = n;
          s && (o += `rotate(${s}deg) `),
            a && (o += `rotateX(${a}deg) `),
            l && (o += `rotateY(${l}deg) `);
        }
        let u = t.x.scale * e.x,
          c = t.y.scale * e.y;
        return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" ==
          (o += `scale(${u}, ${c})`)
          ? "none"
          : o;
      }
      let rU = (t, e) => t.depth - e.depth;
      class rI {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          nq(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          nZ(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(rU),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let rN = ["", "X", "Y", "Z"];
      function r$({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: r,
      }) {
        return class {
          constructor(t, n = {}, i = null == e ? void 0 : e()) {
            (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                this.nodes.forEach(r_), this.nodes.forEach(rX);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = n),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (let r = 0; r < this.path.length; r++)
              this.path[r].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rI());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new n_()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let n = this.eventHandlers.get(t);
            null == n || n.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e);
          }
          mount(e, n = !1) {
            var i;
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: o, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              null === (i = this.parent) ||
                void 0 === i ||
                i.children.add(this),
              this.id && this.root.potentialNodes.delete(this.id),
              n && (o || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let a;
              let l = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  a && a(),
                  (a = nU(l, 250)),
                  T.hasAnimatedSinceResize &&
                    ((T.hasAnimatedSinceResize = !1), this.nodes.forEach(rZ));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || o) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: n,
                    layout: i,
                  }) => {
                    var r, o, a, l, u;
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let c =
                        null !==
                          (o =
                            null !== (r = this.options.transition) &&
                            void 0 !== r
                              ? r
                              : s.getDefaultTransition()) && void 0 !== o
                          ? o
                          : r1,
                      {
                        onLayoutAnimationStart: h,
                        onLayoutAnimationComplete: d,
                      } = s.getProps(),
                      p = !this.targetLayout || !rj(this.targetLayout, i) || n,
                      f = !e && n;
                    if (
                      (null === (a = this.resumeFrom) || void 0 === a
                        ? void 0
                        : a.instance) ||
                      f ||
                      (e && (p || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, f);
                      let m = { ...nz(c, "layout"), onPlay: h, onComplete: d };
                      s.shouldReduceMotion && ((m.delay = 0), (m.type = !1)),
                        this.startAnimation(m);
                    } else
                      e || 0 !== this.animationProgress || rZ(this),
                        this.isLead() &&
                          (null === (u = (l = this.options).onExitComplete) ||
                            void 0 === u ||
                            u.call(l));
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this),
              null === (t = this.getStack()) || void 0 === t || t.remove(this),
              null === (e = this.parent) ||
                void 0 === e ||
                e.children.delete(this),
              (this.instance = void 0),
              nc.qY.preRender(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            var t;
            return (
              this.isAnimationBlocked ||
              (null === (t = this.parent) || void 0 === t
                ? void 0
                : t.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            var t;
            this.isUpdateBlocked() ||
              ((this.isUpdating = !0),
              null === (t = this.nodes) || void 0 === t || t.forEach(rG));
          }
          willUpdate(t = !0) {
            var e, n, i;
            if (this.root.isUpdateBlocked()) {
              null === (n = (e = this.options).onExitComplete) ||
                void 0 === n ||
                n.call(e);
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let r = 0; r < this.path.length; r++) {
              let o = this.path[r];
              (o.shouldResetTransform = !0), o.updateScroll();
            }
            let { layoutId: s, layout: a } = this.options;
            if (void 0 === s && !a) return;
            let l =
              null === (i = this.options.visualElement) || void 0 === i
                ? void 0
                : i.getProps().transformTemplate;
            (this.prevTransformTemplateValue =
              null == l ? void 0 : l(this.latestValues, "")),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          didUpdate() {
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rW);
              return;
            }
            this.isUpdating &&
              ((this.isUpdating = !1),
              this.potentialNodes.size &&
                (this.potentialNodes.forEach(r2), this.potentialNodes.clear()),
              this.nodes.forEach(rq),
              this.nodes.forEach(rz),
              this.nodes.forEach(rY),
              this.clearAllSnapshots(),
              nc.iW.update(),
              nc.iW.preRender(),
              nc.iW.render());
          }
          clearAllSnapshots() {
            this.nodes.forEach(rH), this.sharedNodes.forEach(rK);
          }
          scheduleUpdateProjection() {
            nc.ZP.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            nc.ZP.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            if (this.snapshot || !this.instance) return;
            let t = this.measure(),
              e = this.removeTransform(this.removeElementScroll(t));
            r3(e),
              (this.snapshot = { measured: t, layout: e, latestValues: {} });
          }
          updateLayout() {
            var t;
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) {
                let n = this.path[e];
                n.updateScroll();
              }
            let i = this.measure();
            r3(i);
            let r = this.layout;
            (this.layout = {
              measured: i,
              actual: this.removeElementScroll(i),
            }),
              (this.layoutCorrected = iC()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.actual),
              null === (t = this.options.visualElement) ||
                void 0 === t ||
                t.notify(
                  "LayoutMeasure",
                  this.layout.actual,
                  null == r ? void 0 : r.actual
                );
          }
          updateScroll() {
            this.options.layoutScroll &&
              this.instance &&
              ((this.isScrollRoot = i(this.instance)),
              (this.scroll = n(this.instance)));
          }
          resetTransform() {
            var t;
            if (!r) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !rL(this.projectionDelta),
              i =
                null === (t = this.options.visualElement) || void 0 === t
                  ? void 0
                  : t.getProps().transformTemplate,
              o = null == i ? void 0 : i(this.latestValues, ""),
              s = o !== this.prevTransformTemplateValue;
            e &&
              (n || iL(this.latestValues) || s) &&
              (r(this.instance, o),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure() {
            let { visualElement: t } = this.options;
            if (!t) return iC();
            let e = t.measureViewportBox(),
              { scroll: n } = this.root;
            return n && (iU(e.x, n.x), iU(e.y, n.y)), e;
          }
          removeElementScroll(t) {
            let e = iC();
            rA(e, t);
            for (let n = 0; n < this.path.length; n++) {
              let i = this.path[n],
                { scroll: r, options: o, isScrollRoot: s } = i;
              if (i !== this.root && r && o.layoutScroll) {
                if (s) {
                  rA(e, t);
                  let { scroll: a } = this.root;
                  a && (iU(e.x, -a.x), iU(e.y, -a.y));
                }
                iU(e.x, r.x), iU(e.y, r.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let n = iC();
            rA(n, t);
            for (let i = 0; i < this.path.length; i++) {
              let r = this.path[i];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                iz(n, { x: -r.scroll.x, y: -r.scroll.y }),
                iL(r.latestValues) && iz(n, r.latestValues);
            }
            return iL(this.latestValues) && iz(n, this.latestValues), n;
          }
          removeTransform(t) {
            var e;
            let n = iC();
            rA(n, t);
            for (let i = 0; i < this.path.length; i++) {
              let r = this.path[i];
              if (!r.instance || !iL(r.latestValues)) continue;
              iO(r.latestValues) && r.updateSnapshot();
              let o = iC(),
                s = r.measure();
              rA(o, s),
                rk(
                  n,
                  r.latestValues,
                  null === (e = r.snapshot) || void 0 === e ? void 0 : e.layout,
                  o
                );
            }
            return iL(this.latestValues) && rk(n, this.latestValues), n;
          }
          setTargetDelta(t) {
            (this.targetDelta = t), this.root.scheduleUpdateProjection();
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          resolveTargetDelta() {
            var t, e, n, i;
            let { layout: r, layoutId: o } = this.options;
            if (this.layout && (r || o)) {
              if (!this.targetDelta && !this.relativeTarget) {
                let s = this.getClosestProjectingParent();
                s && s.layout
                  ? ((this.relativeParent = s),
                    (this.relativeTarget = iC()),
                    (this.relativeTargetOrigin = iC()),
                    ib(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      s.layout.actual
                    ),
                    rA(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (
                (this.relativeTarget || this.targetDelta) &&
                ((this.target ||
                  ((this.target = iC()), (this.targetWithTransforms = iC())),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t
                    ? void 0
                    : t.target))
                  ? ((e = this.target),
                    (n = this.relativeTarget),
                    (i = this.relativeParent.target),
                    iy(e.x, n.x, i.x),
                    iy(e.y, n.y, i.y))
                  : this.targetDelta
                  ? (Boolean(this.resumingFrom)
                      ? (this.target = this.applyTransform(this.layout.actual))
                      : rA(this.target, this.layout.actual),
                    iB(this.target, this.targetDelta))
                  : rA(this.target, this.layout.actual),
                this.attemptToResolveRelativeTarget)
              ) {
                this.attemptToResolveRelativeTarget = !1;
                let a = this.getClosestProjectingParent();
                a &&
                Boolean(a.resumingFrom) === Boolean(this.resumingFrom) &&
                !a.options.layoutScroll &&
                a.target
                  ? ((this.relativeParent = a),
                    (this.relativeTarget = iC()),
                    (this.relativeTargetOrigin = iC()),
                    ib(this.relativeTargetOrigin, this.target, a.target),
                    rA(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                iO(this.parent.latestValues) ||
                ij(this.parent.latestValues)
              )
            )
              return (this.parent.relativeTarget || this.parent.targetDelta) &&
                this.parent.layout
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          calcProjection() {
            var t;
            let { layout: e, layoutId: n } = this.options;
            if (
              ((this.isTreeAnimating = Boolean(
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(e || n))
            )
              return;
            let i = this.getLead();
            rA(this.layoutCorrected, this.layout.actual),
              (function (t, e, n, i = !1) {
                var r, o;
                let s, a;
                let l = n.length;
                if (l) {
                  e.x = e.y = 1;
                  for (let u = 0; u < l; u++)
                    (a = (s = n[u]).projectionDelta),
                      (null ===
                        (o =
                          null === (r = s.instance) || void 0 === r
                            ? void 0
                            : r.style) || void 0 === o
                        ? void 0
                        : o.display) !== "contents" &&
                        (i &&
                          s.options.layoutScroll &&
                          s.scroll &&
                          s !== s.root &&
                          iz(t, { x: -s.scroll.x, y: -s.scroll.y }),
                        a && ((e.x *= a.x.scale), (e.y *= a.y.scale), iB(t, a)),
                        i && iL(s.latestValues) && iz(t, s.latestValues));
                }
              })(
                this.layoutCorrected,
                this.treeScale,
                this.path,
                Boolean(this.resumingFrom) || this !== i
              );
            let { target: r } = i;
            if (!r) return;
            this.projectionDelta ||
              ((this.projectionDelta = iA()),
              (this.projectionDeltaWithTransform = iA()));
            let o = this.treeScale.x,
              s = this.treeScale.y,
              a = this.projectionTransform;
            ig(
              this.projectionDelta,
              this.layoutCorrected,
              r,
              this.latestValues
            ),
              (this.projectionTransform = rB(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== a ||
                this.treeScale.x !== o ||
                this.treeScale.y !== s) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", r));
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e, n, i;
            null === (n = (e = this.options).scheduleRender) ||
              void 0 === n ||
              n.call(e),
              t &&
                (null === (i = this.getStack()) ||
                  void 0 === i ||
                  i.scheduleRender()),
              this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            var n;
            let i = this.snapshot,
              r = (null == i ? void 0 : i.latestValues) || {},
              o = { ...this.latestValues },
              s = iA();
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = iC(),
              l = null == i ? void 0 : i.isShared,
              u =
                1 >=
                ((null === (n = this.getStack()) || void 0 === n
                  ? void 0
                  : n.members.length) || 0),
              c = Boolean(
                l && !u && !0 === this.options.crossfade && !this.path.some(r0)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                var n, i, h;
                let d = e / 1e3;
                rJ(s.x, t.x, d),
                  rJ(s.y, t.y, d),
                  this.setTargetDelta(s),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    (null === (n = this.relativeParent) || void 0 === n
                      ? void 0
                      : n.layout) &&
                    (ib(
                      a,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    (i = this.relativeTarget),
                    (h = this.relativeTargetOrigin),
                    rQ(i.x, h.x, a.x, d),
                    rQ(i.y, h.y, a.y, d)),
                  l &&
                    ((this.animationValues = o),
                    (function (t, e, n, i, r, o) {
                      var s, a, l, u;
                      r
                        ? ((t.opacity = ex(
                            0,
                            null !== (s = n.opacity) && void 0 !== s ? s : 1,
                            rE(i)
                          )),
                          (t.opacityExit = ex(
                            null !== (a = e.opacity) && void 0 !== a ? a : 1,
                            0,
                            rP(i)
                          )))
                        : o &&
                          (t.opacity = ex(
                            null !== (l = e.opacity) && void 0 !== l ? l : 1,
                            null !== (u = n.opacity) && void 0 !== u ? u : 1,
                            i
                          ));
                      for (let c = 0; c < ry; c++) {
                        let h = `border${rg[c]}Radius`,
                          d = rw(e, h),
                          p = rw(n, h);
                        if (void 0 === d && void 0 === p) continue;
                        d || (d = 0), p || (p = 0);
                        let f = 0 === d || 0 === p || rb(d) === rb(p);
                        f
                          ? ((t[h] = Math.max(ex(rx(d), rx(p), i), 0)),
                            (G.test(p) || G.test(d)) && (t[h] += "%"))
                          : (t[h] = p);
                      }
                      (e.rotate || n.rotate) &&
                        (t.rotate = ex(e.rotate || 0, n.rotate || 0, i));
                    })(o, r, this.latestValues, d, c, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = d);
              }),
              this.mixTargetDelta(0);
          }
          startAnimation(t) {
            var e, n;
            this.notifyListeners("animationStart"),
              null === (e = this.currentAnimation) || void 0 === e || e.stop(),
              this.resumingFrom &&
                (null === (n = this.resumingFrom.currentAnimation) ||
                  void 0 === n ||
                  n.stop()),
              this.pendingAnimation &&
                (nc.qY.update(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = nc.ZP.update(() => {
                (T.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, n = {}) {
                    let i = B(t) ? t : nK(t);
                    return (
                      nY("", i, 1e3, n),
                      {
                        stop: () => i.stop(),
                        isAnimating: () => i.isAnimating(),
                      }
                    );
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      var n;
                      this.mixTargetDelta(e),
                        null === (n = t.onUpdate) ||
                          void 0 === n ||
                          n.call(t, e);
                    },
                    onComplete: () => {
                      var e;
                      null === (e = t.onComplete) || void 0 === e || e.call(t),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            var t;
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0)),
              null === (t = this.getStack()) ||
                void 0 === t ||
                t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            var t;
            this.currentAnimation &&
              (null === (t = this.mixTargetDelta) ||
                void 0 === t ||
                t.call(this, 1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: n,
                layout: i,
                latestValues: r,
              } = t;
            if (e && n && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                r4(this.options.animationType, this.layout.actual, i.actual)
              ) {
                n = this.target || iC();
                let o = ip(this.layout.actual.x);
                (n.x.min = t.target.x.min), (n.x.max = n.x.min + o);
                let s = ip(this.layout.actual.y);
                (n.y.min = t.target.y.min), (n.y.max = n.y.min + s);
              }
              rA(e, n),
                iz(e, r),
                ig(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            var n, i, r;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new rF());
            let o = this.sharedNodes.get(t);
            o.add(e),
              e.promote({
                transition:
                  null === (n = e.options.initialPromotionConfig) ||
                  void 0 === n
                    ? void 0
                    : n.transition,
                preserveFollowOpacity:
                  null ===
                    (r =
                      null === (i = e.options.initialPromotionConfig) ||
                      void 0 === i
                        ? void 0
                        : i.shouldPreserveFollowOpacity) || void 0 === r
                    ? void 0
                    : r.call(i, e),
              });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, n),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              n = {};
            for (let i = 0; i < rN.length; i++) {
              let r = rN[i],
                o = "rotate" + r;
              t.getStaticValue(o) &&
                ((e = !0),
                (n[o] = t.getStaticValue(o)),
                t.setStaticValue(o, 0));
            }
            if (e) {
              for (let s in (null == t || t.render(), n))
                t.setStaticValue(s, n[s]);
              t.scheduleRender();
            }
          }
          getProjectionStyles(t = {}) {
            var e, n, i;
            let r = {};
            if (!this.instance || this.isSVG) return r;
            if (!this.isVisible) return { visibility: "hidden" };
            r.visibility = "";
            let o =
              null === (e = this.options.visualElement) || void 0 === e
                ? void 0
                : e.getProps().transformTemplate;
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents = tR(t.pointerEvents) || ""),
                (r.transform = o ? o(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let a = {};
              return (
                this.options.layoutId &&
                  ((a.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (a.pointerEvents = tR(t.pointerEvents) || "")),
                this.hasProjected &&
                  !iL(this.latestValues) &&
                  ((a.transform = o ? o({}, "") : "none"),
                  (this.hasProjected = !1)),
                a
              );
            }
            let l = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = rB(
                this.projectionDeltaWithTransform,
                this.treeScale,
                l
              )),
              o && (r.transform = o(l, r.transform));
            let { x: u, y: c } = this.projectionDelta;
            for (let h in ((r.transformOrigin = `${100 * u.origin}% ${
              100 * c.origin
            }% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (n = l.opacity) && void 0 !== n
                            ? n
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : l.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== l.opacity
                      ? l.opacity
                      : ""
                    : void 0 !== l.opacityExit
                    ? l.opacityExit
                    : 0),
            L)) {
              if (void 0 === l[h]) continue;
              let { correct: d, applyTo: p } = L[h],
                f = d(l[h], s);
              if (p) {
                let m = p.length;
                for (let v = 0; v < m; v++) r[p[v]] = f;
              } else r[h] = f;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this ? tR(t.pointerEvents) || "" : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(rW),
              this.root.sharedNodes.clear();
          }
        };
      }
      function rz(t) {
        t.updateLayout();
      }
      function rY(t) {
        var e, n, i;
        let r =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
          let { actual: o, measured: s } = t.layout,
            { animationType: a } = t.options;
          "size" === a
            ? iM((t) => {
                let e = r.isShared ? r.measured[t] : r.layout[t],
                  n = ip(e);
                (e.min = o[t].min), (e.max = e.min + n);
              })
            : r4(a, r.layout, o) &&
              iM((t) => {
                let e = r.isShared ? r.measured[t] : r.layout[t],
                  n = ip(o[t]);
                e.max = e.min + n;
              });
          let l = iA();
          ig(l, o, r.layout);
          let u = iA();
          r.isShared
            ? ig(u, t.applyTransform(s, !0), r.measured)
            : ig(u, o, r.layout);
          let c = !rL(l),
            h = !1;
          if (!t.resumeFrom) {
            let d = t.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
              let { snapshot: p, layout: f } = d;
              if (p && f) {
                let m = iC();
                ib(m, r.layout, p.layout);
                let v = iC();
                ib(v, o, f.actual), rj(m, v) || (h = !0);
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: o,
            snapshot: r,
            delta: u,
            layoutDelta: l,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: h,
          });
        } else
          t.isLead() &&
            (null === (i = (n = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(n));
        t.options.transition = void 0;
      }
      function rH(t) {
        t.clearSnapshot();
      }
      function rW(t) {
        t.clearMeasurements();
      }
      function rq(t) {
        let { visualElement: e } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function rZ(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function r_(t) {
        t.resolveTargetDelta();
      }
      function rX(t) {
        t.calcProjection();
      }
      function rG(t) {
        t.resetRotation();
      }
      function rK(t) {
        t.removeLeadSnapshot();
      }
      function rJ(t, e, n) {
        (t.translate = ex(e.translate, 0, n)),
          (t.scale = ex(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function rQ(t, e, n, i) {
        (t.min = ex(e.min, n.min, i)), (t.max = ex(e.max, n.max, i));
      }
      function r0(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let r1 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function r2(t, e) {
        let n = t.root;
        for (let i = t.path.length - 1; i >= 0; i--)
          if (Boolean(t.path[i].instance)) {
            n = t.path[i];
            break;
          }
        let r = n && n !== t.root ? n.instance : document,
          o = r.querySelector(`[data-projection-id="${e}"]`);
        o && t.mount(o, !0);
      }
      function r5(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function r3(t) {
        r5(t.x), r5(t.y);
      }
      function r4(t, e, n) {
        return (
          "position" === t ||
          ("preserve-aspect" === t &&
            !(function (t, e, n = 0.1) {
              return ia(t, e) <= n;
            })(rD(e), rD(n), 0.2))
        );
      }
      let r6 = r$({
          attachResizeListener: (t, e) => tj(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        r7 = { current: void 0 },
        r8 = r$({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent() {
            if (!r7.current) {
              let t = new r6(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (r7.current = t);
            }
            return r7.current;
          },
          resetTransform(t, e) {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            Boolean("fixed" === window.getComputedStyle(t).position),
        }),
        r9 = {
          ...ii,
          ...eo,
          ...iZ,
          measureLayout: function (t) {
            let [e, n] = es(),
              i = (0, l.useContext)(V.p);
            return l.createElement(rm, {
              ...t,
              layoutGroup: i,
              switchLayoutGroup: (0, l.useContext)(M),
              isPresent: e,
              safeToRemove: n,
            });
          },
        },
        ot = (function (t) {
          function e(e, n = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              projectionNodeConstructor: n,
              useRender: i,
              useVisualState: r,
              Component: o,
            }) {
              t &&
                (function (t) {
                  for (let e in t)
                    "projectionNodeConstructor" === e
                      ? (E.projectionNodeConstructor = t[e])
                      : (E[e].Component = t[e]);
                })(t);
              let s = (0, l.forwardRef)(function (s, a) {
                var v, g;
                let x = {
                    ...(0, l.useContext)(u),
                    ...s,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, l.useContext)(V.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(s),
                  },
                  { isStatic: w } = x,
                  R = null,
                  k = (function (t) {
                    let { initial: e, animate: n } = (function (t, e) {
                      if (y(t)) {
                        let { initial: n, animate: i } = t;
                        return {
                          initial: !1 === n || m(n) ? n : void 0,
                          animate: m(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, l.useContext)(c));
                    return (0, l.useMemo)(
                      () => ({ initial: e, animate: n }),
                      [b(e), b(n)]
                    );
                  })(s),
                  O = w
                    ? void 0
                    : (0, S.h)(() => {
                        if (T.hasEverUpdated) return A++;
                      }),
                  L = r(s, w);
                if (!w && P.j) {
                  k.visualElement = (function (t, e, n, i) {
                    let r = (0, l.useContext)(c).visualElement,
                      o = (0, l.useContext)(p),
                      s = (0, l.useContext)(h.O),
                      a = (0, l.useContext)(u).reducedMotion,
                      f = (0, l.useRef)();
                    (i = i || o.renderer),
                      !f.current &&
                        i &&
                        (f.current = i(t, {
                          visualState: e,
                          parent: r,
                          props: n,
                          presenceId: s ? s.id : void 0,
                          blockInitialAnimation: !!s && !1 === s.initial,
                          reducedMotionConfig: a,
                        }));
                    let m = f.current;
                    return (
                      (0, d.L)(() => {
                        m && m.render();
                      }),
                      (0, l.useEffect)(() => {
                        m &&
                          m.animationState &&
                          m.animationState.animateChanges();
                      }),
                      (0, d.L)(() => () => m && m.notify("Unmount"), []),
                      m
                    );
                  })(o, L, x, e);
                  let j = (0, l.useContext)(p).strict,
                    D = (0, l.useContext)(M);
                  k.visualElement &&
                    (R = k.visualElement.loadFeatures(
                      x,
                      j,
                      t,
                      O,
                      n || E.projectionNodeConstructor,
                      D
                    ));
                }
                return l.createElement(
                  C,
                  { visualElement: k.visualElement, props: x },
                  R,
                  l.createElement(
                    c.Provider,
                    { value: k },
                    i(
                      o,
                      s,
                      O,
                      ((v = k.visualElement),
                      (g = a),
                      (0, l.useCallback)(
                        (t) => {
                          t && L.mount && L.mount(t),
                            v && (t ? v.mount(t) : v.unmount()),
                            g &&
                              ("function" == typeof g
                                ? g(t)
                                : f(g) && (g.current = t));
                        },
                        [v]
                      )),
                      L,
                      w,
                      k.visualElement
                    )
                  )
                );
              });
              return (s[R] = o), s;
            })(t(e, n));
          }
          if ("undefined" == typeof Proxy) return e;
          let n = new Map();
          return new Proxy(e, {
            get: (t, i) => (n.has(i) || n.set(i, e(i)), n.get(i)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, n, i, r) {
            let o = O(t) ? tO : tL;
            return {
              ...o,
              preloadedFeatures: n,
              useRender: (function (t = !1) {
                let e = (e, n, i, r, { latestValues: o }, s) => {
                  let a = O(e) ? tx : tu,
                    u = a(n, o, s),
                    c = (function (t, e, n) {
                      let i = {};
                      for (let r in t)
                        (td(r) ||
                          (!0 === n && th(r)) ||
                          (!e && !th(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                          (i[r] = t[r]);
                      return i;
                    })(n, "string" == typeof e, t),
                    h = { ...c, ...u, ref: r };
                  return (
                    i && (h["data-projection-id"] = i),
                    (0, l.createElement)(e, h)
                  );
                };
                return e;
              })(e),
              createVisualElement: i,
              projectionNodeConstructor: r,
              Component: t,
            };
          })(t, e, r9, rh, r8)
        );
    },
    1741: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return i;
        },
      });
      let i = "undefined" != typeof document;
    },
    9304: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return r;
        },
      });
      var i = n(3454);
      let r = (void 0 === i || i.env, "production");
    },
    6681: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return r;
        },
      });
      var i = n(7294);
      function r(t) {
        let e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    8868: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return o;
        },
      });
      var i = n(7294),
        r = n(1741);
      let o = r.j ? i.useLayoutEffect : i.useEffect;
    },
    5411: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return r;
        },
      });
      var i = n(7294);
      function r(t) {
        return (0, i.useEffect)(() => () => t(), []);
      }
    },
    6034: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return r;
        },
      });
      let i = new Set();
      function r(t, e, n) {
        t || i.has(e) || (console.warn(e), n && console.warn(n), i.add(e));
      }
    },
    4735: function (t, e, n) {
      "use strict";
      n.d(e, {
        qY: function () {
          return p;
        },
        ZP: function () {
          return x;
        },
        iW: function () {
          return f;
        },
        $B: function () {
          return y;
        },
      });
      let i = (1 / 60) * 1e3,
        r =
          "undefined" != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        o =
          "undefined" != typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(r()), i),
        s = !0,
        a = !1,
        l = !1,
        u = { delta: 0, timestamp: 0 },
        c = ["read", "update", "preRender", "render", "postRender"],
        h = c.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                i = 0,
                r = !1,
                o = !1,
                s = new WeakSet(),
                a = {
                  schedule(t, o = !1, a = !1) {
                    let l = a && r,
                      u = l ? e : n;
                    return (
                      o && s.add(t),
                      -1 === u.indexOf(t) &&
                        (u.push(t), l && r && (i = e.length)),
                      t
                    );
                  },
                  cancel(t) {
                    let e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), s.delete(t);
                  },
                  process(l) {
                    if (r) {
                      o = !0;
                      return;
                    }
                    if (
                      ((r = !0),
                      ([e, n] = [n, e]),
                      (n.length = 0),
                      (i = e.length))
                    )
                      for (let u = 0; u < i; u++) {
                        let c = e[u];
                        c(l), s.has(c) && (a.schedule(c), t());
                      }
                    (r = !1), o && ((o = !1), a.process(l));
                  },
                };
              return a;
            })(() => (a = !0))),
            t
          ),
          {}
        ),
        d = c.reduce((t, e) => {
          let n = h[e];
          return (
            (t[e] = (t, e = !1, i = !1) => (a || g(), n.schedule(t, e, i))), t
          );
        }, {}),
        p = c.reduce((t, e) => ((t[e] = h[e].cancel), t), {}),
        f = c.reduce((t, e) => ((t[e] = () => h[e].process(u)), t), {}),
        m = (t) => h[t].process(u),
        v = (t) => {
          (a = !1),
            (u.delta = s ? i : Math.max(Math.min(t - u.timestamp, 40), 1)),
            (u.timestamp = t),
            (l = !0),
            c.forEach(m),
            (l = !1),
            a && ((s = !1), o(v));
        },
        g = () => {
          (a = !0), (s = !0), l || o(v);
        },
        y = () => u;
      var x = d;
    },
  },
]);
