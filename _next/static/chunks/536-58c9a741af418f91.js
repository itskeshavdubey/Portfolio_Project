"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [536],
  {
    7536: function (e, t, r) {
      r.d(t, {
        cI: function () {
          return eh;
        },
      });
      var i = r(7294),
        a = (e) => "checkbox" === e.type,
        s = (e) => e instanceof Date,
        l = (e) => null == e;
      let n = (e) => "object" == typeof e;
      var u = (e) => !l(e) && !Array.isArray(e) && n(e) && !s(e),
        o = (e) =>
          u(e) && e.target
            ? a(e.target)
              ? e.target.checked
              : e.target.value
            : e,
        d = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
        f = (e, t) => e.has(d(t)),
        c = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
        y = (e) => void 0 === e,
        m = (e, t, r) => {
          if (!t || !u(e)) return r;
          let i = c(t.split(/[,[\].]+?/)).reduce(
            (e, t) => (l(e) ? e : e[t]),
            e
          );
          return y(i) || i === e ? (y(e[t]) ? r : e[t]) : i;
        };
      let h = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
        g = {
          onBlur: "onBlur",
          onChange: "onChange",
          onSubmit: "onSubmit",
          onTouched: "onTouched",
          all: "all",
        },
        v = {
          max: "max",
          min: "min",
          maxLength: "maxLength",
          minLength: "minLength",
          pattern: "pattern",
          required: "required",
          validate: "validate",
        };
      i.createContext(null);
      var p = (e, t, r, i = !0) => {
          let a = { defaultValues: t._defaultValues };
          for (let s in e)
            Object.defineProperty(a, s, {
              get() {
                let a = s;
                return (
                  t._proxyFormState[a] !== g.all &&
                    (t._proxyFormState[a] = !i || g.all),
                  r && (r[a] = !0),
                  e[a]
                );
              },
            });
          return a;
        },
        b = (e) => u(e) && !Object.keys(e).length,
        w = (e, t, r) => {
          let { name: i, ...a } = e;
          return (
            b(a) ||
            Object.keys(a).length >= Object.keys(t).length ||
            Object.keys(a).find((e) => t[e] === (!r || g.all))
          );
        },
        A = (e) => (Array.isArray(e) ? e : [e]),
        _ = (e) => "string" == typeof e,
        V = (e, t, r, i) => {
          let a = Array.isArray(e);
          return _(e)
            ? (i && t.watch.add(e), m(r, e))
            : a
            ? e.map((e) => (i && t.watch.add(e), m(r, e)))
            : (i && (t.watchAll = !0), r);
        },
        F = (e) => "function" == typeof e,
        k = (e) => {
          for (let t in e) if (F(e[t])) return !0;
          return !1;
        },
        S = (e, t, r, i, a) =>
          t
            ? {
                ...r[e],
                types: {
                  ...(r[e] && r[e].types ? r[e].types : {}),
                  [i]: a || !0,
                },
              }
            : {},
        x = (e) => /^\w*$/.test(e),
        D = (e) => c(e.replace(/["|']|\]/g, "").split(/\.|\[/));
      function C(e, t, r) {
        let i = -1,
          a = x(t) ? [t] : D(t),
          s = a.length,
          l = s - 1;
        for (; ++i < s; ) {
          let n = a[i],
            o = r;
          if (i !== l) {
            let d = e[n];
            o = u(d) || Array.isArray(d) ? d : isNaN(+a[i + 1]) ? {} : [];
          }
          (e[n] = o), (e = e[n]);
        }
        return e;
      }
      let O = (e, t, r) => {
        for (let i of r || Object.keys(e)) {
          let a = m(e, i);
          if (a) {
            let { _f: s, ...l } = a;
            if (s && t(s.name)) {
              if (s.ref.focus) {
                s.ref.focus();
                break;
              }
              if (s.refs && s.refs[0].focus) {
                s.refs[0].focus();
                break;
              }
            } else u(l) && O(l, t);
          }
        }
      };
      var E = (e, t, r) =>
          !r &&
          (t.watchAll ||
            t.watch.has(e) ||
            [...t.watch].some(
              (t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))
            )),
        T = (e, t, r) => {
          let i = c(m(e, r));
          return C(i, "root", t[r]), C(e, r, i), e;
        },
        L = (e) => "boolean" == typeof e,
        U = (e) => "file" === e.type,
        B = (e) => _(e) || i.isValidElement(e),
        j = (e) => "radio" === e.type,
        N = (e) => e instanceof RegExp;
      let M = { value: !1, isValid: !1 },
        q = { value: !0, isValid: !0 };
      var R = (e) => {
        if (Array.isArray(e)) {
          if (e.length > 1) {
            let t = e
              .filter((e) => e && e.checked && !e.disabled)
              .map((e) => e.value);
            return { value: t, isValid: !!t.length };
          }
          return e[0].checked && !e[0].disabled
            ? e[0].attributes && !y(e[0].attributes.value)
              ? y(e[0].value) || "" === e[0].value
                ? q
                : { value: e[0].value, isValid: !0 }
              : q
            : M;
        }
        return M;
      };
      let H = { isValid: !1, value: null };
      var I = (e) =>
        Array.isArray(e)
          ? e.reduce(
              (e, t) =>
                t && t.checked && !t.disabled
                  ? { isValid: !0, value: t.value }
                  : e,
              H
            )
          : H;
      function P(e, t, r = "validate") {
        if (B(e) || (Array.isArray(e) && e.every(B)) || (L(e) && !e))
          return { type: r, message: B(e) ? e : "", ref: t };
      }
      var $ = (e) => (u(e) && !N(e) ? e : { value: e, message: "" }),
        G = async (e, t, r, i, s) => {
          let {
            ref: n,
            refs: o,
            required: d,
            maxLength: f,
            minLength: c,
            min: y,
            max: m,
            pattern: h,
            validate: g,
            name: p,
            valueAsNumber: w,
            mount: A,
            disabled: V,
          } = e._f;
          if (!A || V) return {};
          let k = o ? o[0] : n,
            x = (e) => {
              i && _(e) && (k.setCustomValidity(e), k.reportValidity());
            },
            D = {},
            C = j(n),
            O = a(n),
            E =
              ((w || U(n)) && !n.value) ||
              "" === t ||
              (Array.isArray(t) && !t.length),
            T = S.bind(null, p, r, D),
            M = (e, t, r, i = v.maxLength, a = v.minLength) => {
              let s = e ? t : r;
              D[p] = {
                type: e ? i : a,
                message: s,
                ref: n,
                ...T(e ? i : a, s),
              };
            };
          if (
            s
              ? !Array.isArray(t) || !t.length
              : d &&
                ((!(C || O) && (E || l(t))) ||
                  (L(t) && !t) ||
                  (O && !R(o).isValid) ||
                  (C && !I(o).isValid))
          ) {
            let { value: q, message: H } = B(d)
              ? { value: !!d, message: d }
              : $(d);
            if (
              q &&
              ((D[p] = {
                type: v.required,
                message: H,
                ref: k,
                ...T(v.required, H),
              }),
              !r)
            )
              return x(H), D;
          }
          if (!E && (!l(y) || !l(m))) {
            let G, W;
            let z = $(m),
              J = $(y);
            if (l(t) || isNaN(t)) {
              let K = n.valueAsDate || new Date(t),
                Q = (e) => new Date(new Date().toDateString() + " " + e),
                X = "time" == n.type,
                Y = "week" == n.type;
              _(z.value) &&
                t &&
                (G = X
                  ? Q(t) > Q(z.value)
                  : Y
                  ? t > z.value
                  : K > new Date(z.value)),
                _(J.value) &&
                  t &&
                  (W = X
                    ? Q(t) < Q(J.value)
                    : Y
                    ? t < J.value
                    : K < new Date(J.value));
            } else {
              let Z = n.valueAsNumber || (t ? +t : t);
              l(z.value) || (G = Z > z.value), l(J.value) || (W = Z < J.value);
            }
            if ((G || W) && (M(!!G, z.message, J.message, v.max, v.min), !r))
              return x(D[p].message), D;
          }
          if ((f || c) && !E && (_(t) || (s && Array.isArray(t)))) {
            let ee = $(f),
              et = $(c),
              er = !l(ee.value) && t.length > ee.value,
              ei = !l(et.value) && t.length < et.value;
            if ((er || ei) && (M(er, ee.message, et.message), !r))
              return x(D[p].message), D;
          }
          if (h && !E && _(t)) {
            let { value: ea, message: es } = $(h);
            if (
              N(ea) &&
              !t.match(ea) &&
              ((D[p] = {
                type: v.pattern,
                message: es,
                ref: n,
                ...T(v.pattern, es),
              }),
              !r)
            )
              return x(es), D;
          }
          if (g) {
            if (F(g)) {
              let el = await g(t),
                en = P(el, k);
              if (en && ((D[p] = { ...en, ...T(v.validate, en.message) }), !r))
                return x(en.message), D;
            } else if (u(g)) {
              let eu = {};
              for (let eo in g) {
                if (!b(eu) && !r) break;
                let ed = P(await g[eo](t), k, eo);
                ed &&
                  ((eu = { ...ed, ...T(eo, ed.message) }),
                  x(ed.message),
                  r && (D[p] = eu));
              }
              if (!b(eu) && ((D[p] = { ref: k, ...eu }), !r)) return D;
            }
          }
          return x(!0), D;
        },
        W = (e) => {
          let t = e.constructor && e.constructor.prototype;
          return u(t) && t.hasOwnProperty("isPrototypeOf");
        },
        z =
          "undefined" != typeof window &&
          void 0 !== window.HTMLElement &&
          "undefined" != typeof document;
      function J(e) {
        let t;
        let r = Array.isArray(e);
        if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) t = new Set(e);
        else if (
          !(!(z && (e instanceof Blob || e instanceof FileList)) && (r || u(e)))
        )
          return e;
        else if (((t = r ? [] : {}), Array.isArray(e) || W(e)))
          for (let i in e) t[i] = J(e[i]);
        else t = e;
        return t;
      }
      var K = (e) => ({
        isOnSubmit: !e || e === g.onSubmit,
        isOnBlur: e === g.onBlur,
        isOnChange: e === g.onChange,
        isOnAll: e === g.all,
        isOnTouch: e === g.onTouched,
      });
      function Q(e, t) {
        let r;
        let i = x(t) ? [t] : D(t),
          a =
            1 == i.length
              ? e
              : (function (e, t) {
                  let r = t.slice(0, -1).length,
                    i = 0;
                  for (; i < r; ) e = y(e) ? i++ : e[t[i++]];
                  return e;
                })(e, i),
          s = i[i.length - 1];
        a && delete a[s];
        for (let l = 0; l < i.slice(0, -1).length; l++) {
          let n,
            o = -1,
            d = i.slice(0, -(l + 1)),
            f = d.length - 1;
          for (l > 0 && (r = e); ++o < d.length; ) {
            let c = d[o];
            (n = n ? n[c] : e[c]),
              f === o &&
                ((u(n) && b(n)) ||
                  (Array.isArray(n) &&
                    (function (e) {
                      for (let t in e) if (!y(e[t])) return !1;
                      return !0;
                    })(n))) &&
                (r ? delete r[c] : delete e[c]),
              (r = n);
          }
        }
        return e;
      }
      function X() {
        let e = [],
          t = (t) => {
            for (let r of e) r.next(t);
          },
          r = (t) => (
            e.push(t),
            {
              unsubscribe() {
                e = e.filter((e) => e !== t);
              },
            }
          ),
          i = () => {
            e = [];
          };
        return {
          get observers() {
            return e;
          },
          next: t,
          subscribe: r,
          unsubscribe: i,
        };
      }
      var Y = (e) => l(e) || !n(e);
      function Z(e, t) {
        if (Y(e) || Y(t)) return e === t;
        if (s(e) && s(t)) return e.getTime() === t.getTime();
        let r = Object.keys(e),
          i = Object.keys(t);
        if (r.length !== i.length) return !1;
        for (let a of r) {
          let l = e[a];
          if (!i.includes(a)) return !1;
          if ("ref" !== a) {
            let n = t[a];
            if (
              (s(l) && s(n)) ||
              (u(l) && u(n)) ||
              (Array.isArray(l) && Array.isArray(n))
                ? !Z(l, n)
                : l !== n
            )
              return !1;
          }
        }
        return !0;
      }
      var ee = (e) => {
          let t = e ? e.ownerDocument : 0,
            r = t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement;
          return e instanceof r;
        },
        et = (e) => "select-multiple" === e.type,
        er = (e) => j(e) || a(e),
        ei = (e) => ee(e) && e.isConnected;
      function ea(e, t = {}) {
        let r = Array.isArray(e);
        if (u(e) || r)
          for (let i in e)
            Array.isArray(e[i]) || (u(e[i]) && !k(e[i]))
              ? ((t[i] = Array.isArray(e[i]) ? [] : {}), ea(e[i], t[i]))
              : l(e[i]) || (t[i] = !0);
        return t;
      }
      var es = (e, t) =>
          (function e(t, r, i) {
            let a = Array.isArray(t);
            if (u(t) || a)
              for (let s in t)
                Array.isArray(t[s]) || (u(t[s]) && !k(t[s]))
                  ? y(r) || Y(i[s])
                    ? (i[s] = Array.isArray(t[s])
                        ? ea(t[s], [])
                        : { ...ea(t[s]) })
                    : e(t[s], l(r) ? {} : r[s], i[s])
                  : Z(t[s], r[s])
                  ? delete i[s]
                  : (i[s] = !0);
            return i;
          })(e, t, ea(t)),
        el = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: i }) =>
          y(e)
            ? e
            : t
            ? "" === e
              ? NaN
              : e
              ? +e
              : e
            : r && _(e)
            ? new Date(e)
            : i
            ? i(e)
            : e;
      function en(e) {
        let t = e.ref;
        return (e.refs ? e.refs.every((e) => e.disabled) : t.disabled)
          ? void 0
          : U(t)
          ? t.files
          : j(t)
          ? I(e.refs).value
          : et(t)
          ? [...t.selectedOptions].map(({ value: e }) => e)
          : a(t)
          ? R(e.refs).value
          : el(y(t.value) ? e.ref.value : t.value, e);
      }
      var eu = (e, t, r, i) => {
          let a = {};
          for (let s of e) {
            let l = m(t, s);
            l && C(a, s, l._f);
          }
          return {
            criteriaMode: r,
            names: [...e],
            fields: a,
            shouldUseNativeValidation: i,
          };
        },
        eo = (e) =>
          y(e)
            ? void 0
            : N(e)
            ? e.source
            : u(e)
            ? N(e.value)
              ? e.value.source
              : e.value
            : e,
        ed = (e) =>
          e.mount &&
          (e.required ||
            e.min ||
            e.max ||
            e.maxLength ||
            e.minLength ||
            e.pattern ||
            e.validate);
      function ef(e, t, r) {
        let i = m(e, r);
        if (i || x(r)) return { error: i, name: r };
        let a = r.split(".");
        for (; a.length; ) {
          let s = a.join("."),
            l = m(t, s),
            n = m(e, s);
          if (l && !Array.isArray(l) && r !== s) break;
          if (n && n.type) return { name: s, error: n };
          a.pop();
        }
        return { name: r };
      }
      var ec = (e, t, r, i, a) =>
          !a.isOnAll &&
          (!r && a.isOnTouch
            ? !(t || e)
            : (r ? i.isOnBlur : a.isOnBlur)
            ? !e
            : (r ? !i.isOnChange : !a.isOnChange) || e),
        ey = (e, t) => !c(m(e, t)).length && Q(e, t);
      let em = {
        mode: g.onSubmit,
        reValidateMode: g.onChange,
        shouldFocusError: !0,
      };
      function eh(e = {}) {
        let t = i.useRef(),
          [r, n] = i.useState({
            isDirty: !1,
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            errors: {},
            defaultValues: e.defaultValues,
          });
        t.current ||
          (t.current = {
            ...(function (e = {}) {
              let t,
                r = { ...em, ...e },
                i = {
                  submitCount: 0,
                  isDirty: !1,
                  isValidating: !1,
                  isSubmitted: !1,
                  isSubmitting: !1,
                  isSubmitSuccessful: !1,
                  isValid: !1,
                  touchedFields: {},
                  dirtyFields: {},
                  errors: {},
                },
                n = {},
                u = J(r.defaultValues) || {},
                d = r.shouldUnregister ? {} : J(u),
                v = { action: !1, mount: !1, watch: !1 },
                p = {
                  mount: new Set(),
                  unMount: new Set(),
                  array: new Set(),
                  watch: new Set(),
                },
                w = 0,
                k = {},
                S = {
                  isDirty: !1,
                  dirtyFields: !1,
                  touchedFields: !1,
                  isValidating: !1,
                  isValid: !1,
                  errors: !1,
                },
                x = { watch: X(), array: X(), state: X() },
                D = K(r.mode),
                B = K(r.reValidateMode),
                j = r.criteriaMode === g.all,
                N = (e) => (t) => {
                  clearTimeout(w), (w = window.setTimeout(e, t));
                },
                M = async () => {
                  let e = !1;
                  return (
                    S.isValid &&
                      (e = r.resolver
                        ? b((await $()).errors)
                        : await ea(n, !0)) !== i.isValid &&
                      ((i.isValid = e), x.state.next({ isValid: e })),
                    e
                  );
                },
                q = (e, t = [], r, a, s = !0, l = !0) => {
                  if (a && r) {
                    if (((v.action = !0), l && Array.isArray(m(n, e)))) {
                      let o = r(m(n, e), a.argA, a.argB);
                      s && C(n, e, o);
                    }
                    if (S.errors && l && Array.isArray(m(i.errors, e))) {
                      let f = r(m(i.errors, e), a.argA, a.argB);
                      s && C(i.errors, e, f), ey(i.errors, e);
                    }
                    if (
                      S.touchedFields &&
                      l &&
                      Array.isArray(m(i.touchedFields, e))
                    ) {
                      let c = r(m(i.touchedFields, e), a.argA, a.argB);
                      s && C(i.touchedFields, e, c);
                    }
                    S.dirtyFields && (i.dirtyFields = es(u, d)),
                      x.state.next({
                        isDirty: eg(e, t),
                        dirtyFields: i.dirtyFields,
                        errors: i.errors,
                        isValid: i.isValid,
                      });
                  } else C(d, e, t);
                },
                R = (e, t) => {
                  C(i.errors, e, t), x.state.next({ errors: i.errors });
                },
                H = (e, t, r, i) => {
                  let a = m(n, e);
                  if (a) {
                    let s = m(d, e, y(r) ? m(u, e) : r);
                    y(s) || (i && i.defaultChecked) || t
                      ? C(d, e, t ? s : en(a._f))
                      : eb(e, s),
                      v.mount && M();
                  }
                },
                I = (e, t, r, a, s) => {
                  let l = !1,
                    n = { name: e },
                    o = m(i.touchedFields, e);
                  if (S.isDirty) {
                    let d = i.isDirty;
                    (i.isDirty = n.isDirty = eg()), (l = d !== n.isDirty);
                  }
                  if (S.dirtyFields && (!r || a)) {
                    let f = m(i.dirtyFields, e),
                      c = Z(m(u, e), t);
                    c ? Q(i.dirtyFields, e) : C(i.dirtyFields, e, !0),
                      (n.dirtyFields = i.dirtyFields),
                      (l = l || f !== m(i.dirtyFields, e));
                  }
                  return (
                    r &&
                      !o &&
                      (C(i.touchedFields, e, r),
                      (n.touchedFields = i.touchedFields),
                      (l = l || (S.touchedFields && o !== r))),
                    l && s && x.state.next(n),
                    l ? n : {}
                  );
                },
                P = (r, a, s, l) => {
                  let n = m(i.errors, r),
                    u = S.isValid && L(a) && i.isValid !== a;
                  if (
                    (e.delayError && s
                      ? (t = N(() => R(r, s)))(e.delayError)
                      : (clearTimeout(w),
                        (t = null),
                        s ? C(i.errors, r, s) : Q(i.errors, r)),
                    (s ? !Z(n, s) : n) || !b(l) || u)
                  ) {
                    let o = {
                      ...l,
                      ...(u && L(a) ? { isValid: a } : {}),
                      errors: i.errors,
                      name: r,
                    };
                    (i = { ...i, ...o }), x.state.next(o);
                  }
                  k[r]--,
                    S.isValidating &&
                      !Object.values(k).some((e) => e) &&
                      (x.state.next({ isValidating: !1 }), (k = {}));
                },
                $ = async (e) =>
                  r.resolver
                    ? await r.resolver(
                        { ...d },
                        r.context,
                        eu(
                          e || p.mount,
                          n,
                          r.criteriaMode,
                          r.shouldUseNativeValidation
                        )
                      )
                    : {},
                W = async (e) => {
                  let { errors: t } = await $();
                  if (e)
                    for (let r of e) {
                      let a = m(t, r);
                      a ? C(i.errors, r, a) : Q(i.errors, r);
                    }
                  else i.errors = t;
                  return t;
                },
                ea = async (e, t, a = { valid: !0 }) => {
                  for (let s in e) {
                    let l = e[s];
                    if (l) {
                      let { _f: n, ...u } = l;
                      if (n) {
                        let o = p.array.has(n.name),
                          f = await G(
                            l,
                            m(d, n.name),
                            j,
                            r.shouldUseNativeValidation,
                            o
                          );
                        if (f[n.name] && ((a.valid = !1), t)) break;
                        t ||
                          (m(f, n.name)
                            ? o
                              ? T(i.errors, f, n.name)
                              : C(i.errors, n.name, f[n.name])
                            : Q(i.errors, n.name));
                      }
                      u && (await ea(u, t, a));
                    }
                  }
                  return a.valid;
                },
                eh = () => {
                  for (let e of p.unMount) {
                    let t = m(n, e);
                    t &&
                      (t._f.refs
                        ? t._f.refs.every((e) => !ei(e))
                        : !ei(t._f.ref)) &&
                      eC(e);
                  }
                  p.unMount = new Set();
                },
                eg = (e, t) => (e && t && C(d, e, t), !Z(eF(), u)),
                ev = (e, t, r) => {
                  let i = {
                    ...(v.mount ? d : y(t) ? u : _(e) ? { [e]: t } : t),
                  };
                  return V(e, p, i, r);
                },
                ep = (t) =>
                  c(
                    m(v.mount ? d : u, t, e.shouldUnregister ? m(u, t, []) : [])
                  ),
                eb = (e, t, r = {}) => {
                  let i = m(n, e),
                    s = t;
                  if (i) {
                    let u = i._f;
                    u &&
                      (u.disabled || C(d, e, el(t, u)),
                      (s = z && ee(u.ref) && l(t) ? "" : t),
                      et(u.ref)
                        ? [...u.ref.options].forEach(
                            (e) => (e.selected = s.includes(e.value))
                          )
                        : u.refs
                        ? a(u.ref)
                          ? u.refs.length > 1
                            ? u.refs.forEach(
                                (e) =>
                                  (!e.defaultChecked || !e.disabled) &&
                                  (e.checked = Array.isArray(s)
                                    ? !!s.find((t) => t === e.value)
                                    : s === e.value)
                              )
                            : u.refs[0] && (u.refs[0].checked = !!s)
                          : u.refs.forEach((e) => (e.checked = e.value === s))
                        : U(u.ref)
                        ? (u.ref.value = "")
                        : ((u.ref.value = s),
                          u.ref.type || x.watch.next({ name: e })));
                  }
                  (r.shouldDirty || r.shouldTouch) &&
                    I(e, s, r.shouldTouch, r.shouldDirty, !0),
                    r.shouldValidate && eV(e);
                },
                ew = (e, t, r) => {
                  for (let i in t) {
                    let a = t[i],
                      l = `${e}.${i}`,
                      u = m(n, l);
                    (!p.array.has(e) && Y(a) && (!u || u._f)) || s(a)
                      ? eb(l, a, r)
                      : ew(l, a, r);
                  }
                },
                eA = (e, t, r = {}) => {
                  let a = m(n, e),
                    s = p.array.has(e),
                    o = J(t);
                  C(d, e, o),
                    s
                      ? (x.array.next({ name: e, values: d }),
                        (S.isDirty || S.dirtyFields) &&
                          r.shouldDirty &&
                          ((i.dirtyFields = es(u, d)),
                          x.state.next({
                            name: e,
                            dirtyFields: i.dirtyFields,
                            isDirty: eg(e, o),
                          })))
                      : !a || a._f || l(o)
                      ? eb(e, o, r)
                      : ew(e, o, r),
                    E(e, p) && x.state.next({}),
                    x.watch.next({ name: e });
                },
                e_ = async (e) => {
                  let a = e.target,
                    s = a.name,
                    l = m(n, s);
                  if (l) {
                    let u, f;
                    let c = a.type ? en(l._f) : o(e),
                      y = e.type === h.BLUR || e.type === h.FOCUS_OUT,
                      g =
                        (!ed(l._f) &&
                          !r.resolver &&
                          !m(i.errors, s) &&
                          !l._f.deps) ||
                        ec(y, m(i.touchedFields, s), i.isSubmitted, B, D),
                      v = E(s, p, y);
                    C(d, s, c),
                      y
                        ? (l._f.onBlur && l._f.onBlur(e), t && t(0))
                        : l._f.onChange && l._f.onChange(e);
                    let w = I(s, c, y, !1),
                      A = !b(w) || v;
                    if ((y || x.watch.next({ name: s, type: e.type }), g))
                      return (
                        S.isValid && M(),
                        A && x.state.next({ name: s, ...(v ? {} : w) })
                      );
                    if (
                      (!y && v && x.state.next({}),
                      (k[s] = k[s] ? k[s] + 1 : 1),
                      x.state.next({ isValidating: !0 }),
                      r.resolver)
                    ) {
                      let { errors: _ } = await $([s]),
                        V = ef(i.errors, n, s),
                        F = ef(_, n, V.name || s);
                      (u = F.error), (s = F.name), (f = b(_));
                    } else
                      (u = (
                        await G(l, m(d, s), j, r.shouldUseNativeValidation)
                      )[s]),
                        M();
                    l._f.deps && eV(l._f.deps), P(s, f, u, w);
                  }
                },
                eV = async (e, t = {}) => {
                  let a, s;
                  let l = A(e);
                  if ((x.state.next({ isValidating: !0 }), r.resolver)) {
                    let u = await W(y(e) ? e : l);
                    (a = b(u)), (s = e ? !l.some((e) => m(u, e)) : a);
                  } else
                    e
                      ? ((s = (
                          await Promise.all(
                            l.map(async (e) => {
                              let t = m(n, e);
                              return await ea(t && t._f ? { [e]: t } : t);
                            })
                          )
                        ).every(Boolean)) ||
                          i.isValid) &&
                        M()
                      : (s = a = await ea(n));
                  return (
                    x.state.next({
                      ...(!_(e) || (S.isValid && a !== i.isValid)
                        ? {}
                        : { name: e }),
                      ...(r.resolver || !e ? { isValid: a } : {}),
                      errors: i.errors,
                      isValidating: !1,
                    }),
                    t.shouldFocus &&
                      !s &&
                      O(n, (e) => e && m(i.errors, e), e ? l : p.mount),
                    s
                  );
                },
                eF = (e) => {
                  let t = { ...u, ...(v.mount ? d : {}) };
                  return y(e) ? t : _(e) ? m(t, e) : e.map((e) => m(t, e));
                },
                ek = (e, t) => ({
                  invalid: !!m((t || i).errors, e),
                  isDirty: !!m((t || i).dirtyFields, e),
                  isTouched: !!m((t || i).touchedFields, e),
                  error: m((t || i).errors, e),
                }),
                eS = (e) => {
                  e ? A(e).forEach((e) => Q(i.errors, e)) : (i.errors = {}),
                    x.state.next({ errors: i.errors });
                },
                ex = (e, t, r) => {
                  let a = (m(n, e, { _f: {} })._f || {}).ref;
                  C(i.errors, e, { ...t, ref: a }),
                    x.state.next({ name: e, errors: i.errors, isValid: !1 }),
                    r && r.shouldFocus && a && a.focus && a.focus();
                },
                eD = (e, t) =>
                  F(e)
                    ? x.watch.subscribe({ next: (r) => e(ev(void 0, t), r) })
                    : ev(e, t, !0),
                eC = (e, t = {}) => {
                  for (let a of e ? A(e) : p.mount)
                    p.mount.delete(a),
                      p.array.delete(a),
                      m(n, a) &&
                        (t.keepValue || (Q(n, a), Q(d, a)),
                        t.keepError || Q(i.errors, a),
                        t.keepDirty || Q(i.dirtyFields, a),
                        t.keepTouched || Q(i.touchedFields, a),
                        r.shouldUnregister || t.keepDefaultValue || Q(u, a));
                  x.watch.next({}),
                    x.state.next({
                      ...i,
                      ...(t.keepDirty ? { isDirty: eg() } : {}),
                    }),
                    t.keepIsValid || M();
                },
                eO = (e, t = {}) => {
                  let i = m(n, e),
                    a = L(t.disabled);
                  return (
                    C(n, e, {
                      ...(i || {}),
                      _f: {
                        ...(i && i._f ? i._f : { ref: { name: e } }),
                        name: e,
                        mount: !0,
                        ...t,
                      },
                    }),
                    p.mount.add(e),
                    i
                      ? a && C(d, e, t.disabled ? void 0 : m(d, e, en(i._f)))
                      : H(e, !0, t.value),
                    {
                      ...(a ? { disabled: t.disabled } : {}),
                      ...(r.shouldUseNativeValidation
                        ? {
                            required: !!t.required,
                            min: eo(t.min),
                            max: eo(t.max),
                            minLength: eo(t.minLength),
                            maxLength: eo(t.maxLength),
                            pattern: eo(t.pattern),
                          }
                        : {}),
                      name: e,
                      onChange: e_,
                      onBlur: e_,
                      ref(a) {
                        if (a) {
                          eO(e, t), (i = m(n, e));
                          let s =
                              (y(a.value) &&
                                a.querySelectorAll &&
                                a.querySelectorAll(
                                  "input,select,textarea"
                                )[0]) ||
                              a,
                            l = er(s),
                            o = i._f.refs || [];
                          (l ? o.find((e) => e === s) : s === i._f.ref) ||
                            (C(n, e, {
                              _f: {
                                ...i._f,
                                ...(l
                                  ? {
                                      refs: [
                                        ...o.filter(ei),
                                        s,
                                        ...(Array.isArray(m(u, e)) ? [{}] : []),
                                      ],
                                      ref: { type: s.type, name: e },
                                    }
                                  : { ref: s }),
                              },
                            }),
                            H(e, !1, void 0, s));
                        } else
                          (i = m(n, e, {}))._f && (i._f.mount = !1),
                            (r.shouldUnregister || t.shouldUnregister) &&
                              !(f(p.array, e) && v.action) &&
                              p.unMount.add(e);
                      },
                    }
                  );
                },
                eE = () =>
                  r.shouldFocusError &&
                  O(n, (e) => e && m(i.errors, e), p.mount),
                eT = (e, t) => async (a) => {
                  a &&
                    (a.preventDefault && a.preventDefault(),
                    a.persist && a.persist());
                  let s = !0,
                    l = J(d);
                  x.state.next({ isSubmitting: !0 });
                  try {
                    if (r.resolver) {
                      let { errors: u, values: o } = await $();
                      (i.errors = u), (l = o);
                    } else await ea(n);
                    b(i.errors)
                      ? (x.state.next({ errors: {}, isSubmitting: !0 }),
                        await e(l, a))
                      : (t && (await t({ ...i.errors }, a)), eE());
                  } catch (f) {
                    throw ((s = !1), f);
                  } finally {
                    (i.isSubmitted = !0),
                      x.state.next({
                        isSubmitted: !0,
                        isSubmitting: !1,
                        isSubmitSuccessful: b(i.errors) && s,
                        submitCount: i.submitCount + 1,
                        errors: i.errors,
                      });
                  }
                },
                eL = (e, t = {}) => {
                  m(n, e) &&
                    (y(t.defaultValue)
                      ? eA(e, m(u, e))
                      : (eA(e, t.defaultValue), C(u, e, t.defaultValue)),
                    t.keepTouched || Q(i.touchedFields, e),
                    t.keepDirty ||
                      (Q(i.dirtyFields, e),
                      (i.isDirty = t.defaultValue ? eg(e, m(u, e)) : eg())),
                    !t.keepError && (Q(i.errors, e), S.isValid && M()),
                    x.state.next({ ...i }));
                },
                eU = (t, r = {}) => {
                  let a = t || u,
                    s = J(a),
                    l = t && !b(t) ? s : u;
                  if ((r.keepDefaultValues || (u = a), !r.keepValues)) {
                    if (r.keepDirtyValues)
                      for (let o of p.mount)
                        m(i.dirtyFields, o) ? C(l, o, m(d, o)) : eA(o, m(l, o));
                    else {
                      if (z && y(t))
                        for (let f of p.mount) {
                          let c = m(n, f);
                          if (c && c._f) {
                            let h = Array.isArray(c._f.refs)
                              ? c._f.refs[0]
                              : c._f.ref;
                            if (ee(h)) {
                              let g = h.closest("form");
                              if (g) {
                                g.reset();
                                break;
                              }
                            }
                          }
                        }
                      n = {};
                    }
                    (d = e.shouldUnregister
                      ? r.keepDefaultValues
                        ? J(u)
                        : {}
                      : s),
                      x.array.next({ values: l }),
                      x.watch.next({ values: l });
                  }
                  (p = {
                    mount: new Set(),
                    unMount: new Set(),
                    array: new Set(),
                    watch: new Set(),
                    watchAll: !1,
                    focus: "",
                  }),
                    (v.mount = !S.isValid || !!r.keepIsValid),
                    (v.watch = !!e.shouldUnregister),
                    x.state.next({
                      submitCount: r.keepSubmitCount ? i.submitCount : 0,
                      isDirty:
                        r.keepDirty || r.keepDirtyValues
                          ? i.isDirty
                          : !!(r.keepDefaultValues && !Z(t, u)),
                      isSubmitted: !!r.keepIsSubmitted && i.isSubmitted,
                      dirtyFields:
                        r.keepDirty || r.keepDirtyValues
                          ? i.dirtyFields
                          : r.keepDefaultValues && t
                          ? es(u, t)
                          : {},
                      touchedFields: r.keepTouched ? i.touchedFields : {},
                      errors: r.keepErrors ? i.errors : {},
                      isSubmitting: !1,
                      isSubmitSuccessful: !1,
                    });
                },
                eB = (e, t) => eU(F(e) ? e(d) : e, t),
                ej = (e, t = {}) => {
                  let r = m(n, e),
                    i = r && r._f;
                  if (i) {
                    let a = i.refs ? i.refs[0] : i.ref;
                    a.focus && (a.focus(), t.shouldSelect && a.select());
                  }
                };
              return {
                control: {
                  register: eO,
                  unregister: eC,
                  getFieldState: ek,
                  _executeSchema: $,
                  _focusError: eE,
                  _getWatch: ev,
                  _getDirty: eg,
                  _updateValid: M,
                  _removeUnmounted: eh,
                  _updateFieldArray: q,
                  _getFieldArray: ep,
                  _subjects: x,
                  _proxyFormState: S,
                  get _fields() {
                    return n;
                  },
                  get _formValues() {
                    return d;
                  },
                  get _stateFlags() {
                    return v;
                  },
                  set _stateFlags(value) {
                    v = value;
                  },
                  get _defaultValues() {
                    return u;
                  },
                  get _names() {
                    return p;
                  },
                  set _names(value) {
                    p = value;
                  },
                  get _formState() {
                    return i;
                  },
                  set _formState(value) {
                    i = value;
                  },
                  get _options() {
                    return r;
                  },
                  set _options(value) {
                    r = { ...r, ...value };
                  },
                },
                trigger: eV,
                register: eO,
                handleSubmit: eT,
                watch: eD,
                setValue: eA,
                getValues: eF,
                reset: eB,
                resetField: eL,
                clearErrors: eS,
                unregister: eC,
                setError: ex,
                setFocus: ej,
                getFieldState: ek,
              };
            })(e),
            formState: r,
          });
        let u = t.current.control;
        return (
          (u._options = e),
          !(function (e) {
            let t = i.useRef(e);
            (t.current = e),
              i.useEffect(() => {
                let r =
                  !e.disabled &&
                  t.current.subject.subscribe({ next: t.current.callback });
                return () => {
                  r && r.unsubscribe();
                };
              }, [e.disabled]);
          })({
            subject: u._subjects.state,
            callback: i.useCallback(
              (e) => {
                w(e, u._proxyFormState, !0) &&
                  ((u._formState = { ...u._formState, ...e }),
                  n({ ...u._formState }));
              },
              [u]
            ),
          }),
          i.useEffect(() => {
            u._stateFlags.mount ||
              (u._proxyFormState.isValid && u._updateValid(),
              (u._stateFlags.mount = !0)),
              u._stateFlags.watch &&
                ((u._stateFlags.watch = !1), u._subjects.state.next({})),
              u._removeUnmounted();
          }),
          i.useEffect(() => {
            r.submitCount && u._focusError();
          }, [u, r.submitCount]),
          (t.current.formState = p(r, u)),
          t.current
        );
      }
    },
  },
]);
