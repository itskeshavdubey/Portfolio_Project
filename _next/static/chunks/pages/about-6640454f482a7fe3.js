(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    29: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return h;
        },
      });
      var s = n(7294);
      function i(e = "https://app.cal.com/embed/embed.js") {
        var t;
        let n, s;
        /*!  Copying ends here. */ return (
          (t = window),
          (n = function (e, t) {
            e.q.push(t);
          }),
          (s = t.document),
          (t.Cal =
            t.Cal ||
            function () {
              let i = t.Cal,
                r = arguments;
              if (
                (i.loaded ||
                  ((i.ns = {}),
                  (i.q = i.q || []),
                  (s.head.appendChild(s.createElement("script")).src = e),
                  (i.loaded = !0)),
                "init" === r[0])
              ) {
                let a = function () {
                    n(a, arguments);
                  },
                  l = r[1];
                (a.q = a.q || []),
                  "string" == typeof l ? (i.ns[l] = a) && n(a, r) : n(i, r);
                return;
              }
              n(i, r);
            }),
          window.Cal
        );
      }
      Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        i.toString();
      var r = { exports: {} },
        a = {},
        l = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        c = Object.prototype.hasOwnProperty,
        d =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        m = { key: !0, ref: !0, __self: !0, __source: !0 };
      function u(e, t, n) {
        var s,
          i = {},
          r = null,
          a = null;
        for (s in (void 0 !== n && (r = "" + n),
        void 0 !== t.key && (r = "" + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          c.call(t, s) && !m.hasOwnProperty(s) && (i[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === i[s] && (i[s] = t[s]);
        return {
          $$typeof: l,
          type: e,
          key: r,
          ref: a,
          props: i,
          _owner: d.current,
        };
      }
      (a.Fragment = o),
        (a.jsx = u),
        (a.jsxs = u),
        (r.exports = a),
        r.exports.jsx,
        r.exports.jsxs;
      let h = () =>
        new Promise(function e(t) {
          i();
          let n = window.Cal;
          if (!n) {
            setTimeout(() => {
              e(t);
            }, 50);
            return;
          }
          t(n);
        });
    },
    9212: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return n(1473);
        },
      ]);
    },
    7098: function (e, t, n) {
      "use strict";
      var s = n(5893);
      n(7294);
      var i = n(3387);
      let r = (e) => {
        let { children: t, classesMain: n, classesSpan: r, isMobile: a } = e,
          l = t.split(" "),
          o = {
            visible: {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              transition: { type: "spring", damping: 12, stiffness: 100 },
            },
            hidden: {
              opacity: 0,
              x: a ? 10 : 20,
              y: a ? 10 : 20,
              scale: 0.9,
              transition: { type: "spring", damping: 12, stiffness: 100 },
            },
          };
        return (0, s.jsx)(i.E.div, {
          className: "flex flex-row items-center ".concat(n),
          variants: {
            hidden: { opacity: 0 },
            visible: function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              return {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.01 * e },
              };
            },
          },
          initial: "hidden",
          animate: "visible",
          children: l.map((e, t) =>
            (0, s.jsx)(
              i.E.span,
              {
                variants: o,
                className: "ml-1 md:ml-1 xl:ml-4 ".concat(r),
                children: e,
              },
              t
            )
          ),
        });
      };
      t.Z = r;
    },
    8267: function (e, t, n) {
      "use strict";
      var s = n(5893);
      n(7294);
      var i = n(3387);
      let r = (e) => {
        let { type: t, children: n, classes: r, onClick: a } = e;
        return "secondary" === t
          ? (0, s.jsx)(i.E.button, {
              onClick: a,
              whileHover: {
                scale: 1.05,
                transition: {
                  duration: 1,
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                },
              },
              whileTap: { scale: 0.99 },
              className:
                "m-1 px-3 py-2 rounded-xl flex items-center justify-center border border-gray-50 bg-gray-100 hover:bg-gray-200 hover:border-gray-100 active:border-gray-300 ".concat(
                  r
                ),
              children: n,
            })
          : (0, s.jsx)(i.E.button, {
              onClick: a,
              whileHover: {
                scale: 1.05,
                transition: {
                  duration: 1,
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                },
              },
              whileTap: { scale: 0.99 },
              className:
                "relative gradient-border m-1 px-3 py-2 rounded-xl flex items-center justify-center bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white ".concat(
                  r
                ),
              children: n,
            });
      };
      t.Z = r;
    },
    5940: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = n(5893),
        i = n(29),
        r = n(7294),
        a = n(3387);
      function l(e) {
        let { classes: t, children: n } = e;
        return (
          (0, r.useEffect)(() => {
            !(async function () {
              let e = await (0, i.o)();
              e && e("ui", { styles: { branding: { brandColor: "#000000" } } });
            })();
          }, []),
          (0, s.jsx)(a.E.button, {
            whileHover: {
              scale: 1.05,
              transition: {
                duration: 1,
                type: "spring",
                damping: 12,
                stiffness: 100,
              },
            },
            whileTap: { scale: 0.99 },
            "data-cal-link": "keshav-dubey-kyte4n/15min",
            className:
              "relative gradient-border m-1 px-3 py-2 rounded-xl flex items-center justify-center bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white ".concat(
                t
              ),
            children: n,
          })
        );
      }
    },
    832: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var s = n(5893),
        i = n(7294),
        r = n(1664),
        a = n.n(r),
        l = n(327),
        o = n(3387);
      let c = () =>
        (0, s.jsxs)("div", {
          className: "mt-10 text-center flex flex-col items-center",
          children: [
            (0, s.jsxs)("div", {
              className: "flex flex-col items-center justify-between",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col md:flex-row items-center",
                  children: [
                    (0, s.jsx)(a(), {
                      href: "/",
                      className:
                        "mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100",
                      children: "Home",
                    }),
                    (0, s.jsx)(a(), {
                      href: "/work",
                      className:
                        "mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100",
                      children: "Work",
                    }),
                    (0, s.jsx)(a(), {
                      href: "/about",
                      className:
                        "mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100",
                      children: "About",
                    }),
                    
                    (0, s.jsx)(a(), {
                      href: "/contact",
                      className:
                        "mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100",
                      children: "Contact",
                    }),
                  ],
                }),
                (0, s.jsx)(l.Z, { classes: "mt-5" }),
              ],
            }),
            (0, s.jsx)(o.E.div, {
              className: "text-5xl my-10 cursor-pointer",
              whileHover: {
                rotateZ: [0, 20, -20, 20, 0],
                rotateX: [0, 20, -20, 20, 0],
                rotateY: [0, 20, -20, 20, 0],
                scale: [1, 1.2, 1.2, 1.2, 1],
                transition: {
                  duration: 1,
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                },
              },
              whileTap: { scale: 0.99 },
              children: "⚡",
            }),
          ],
        });
      var d = n(7005),
        m = n(5820),
        u = n(1163),
        h = n(8267);
      let p = () => {
          let [e, t] = (0, i.useState)(!1),
            n = (0, u.useRouter)();
          return (0, s.jsxs)("div", {
            className: "flex items-center justify-between px-2 xl:px-0",
            children: [
              (0, s.jsx)(a(), {
                className: "font-bold",
                href: "/",
                children: "keshavdubey.",
              }),
              (0, s.jsx)(o.E.div, {
                onClick: () => n.push("/contact"),
                className: "w-96 hidden md:block",
                whileHover: {
                  scale: 1.05,
                  transition: {
                    duration: 1,
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                  },
                },
                whileTap: { scale: 0.99 },
                children: (0, s.jsx)(d.Z, {
                  gradient: !1,
                  speed: 100,
                  className:
                    "bg-gray-50 text-black p-2 rounded-full cursor-pointer border border-transparent hover:border hover:border-gray-200",
                  children: (0, s.jsxs)("span", {
                    className: "text-sm flex items-center",
                    children: [
                      (0, s.jsx)("div", {
                        className: "h-5 w-5 bg-green-400 rounded-full mr-2",
                      }),
                      "AVAILABLE FOR FREELANCE WORK",
                    ],
                  }),
                }),
              }),
              (0, s.jsxs)("div", {
                className: "relative",
                children: [
                  (0, s.jsx)(h.Z, {
                    type: "secondary",
                    onClick: () => t(!e),
                    classes: "relative",
                    children: e
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            "Close",
                            (0, s.jsx)("img", {
                              className: "h-4 ml-2",
                              src: "./icons/close.svg",
                              alt: "close",
                            }),
                          ],
                        })
                      : (0, s.jsxs)(s.Fragment, {
                          children: [
                            "Menu",
                            " ",
                            (0, s.jsx)("img", {
                              className: "h-4 ml-2",
                              src: "./icons/arrow-down.svg",
                              alt: "down",
                            }),
                          ],
                        }),
                  }),
                  (0, s.jsx)(m.M, {
                    children:
                      e &&
                      (0, s.jsx)(o.E.nav, {
                        transition: {
                          duration: 0.5,
                          type: "spring",
                          damping: 12,
                          stiffness: 100,
                        },
                        initial: { opacity: 0, y: -12 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -12 },
                        className:
                          "z-10 absolute gradient-border w-48 top-14 right-0 bg-white rounded-lg shadow-lg p-2",
                        children: (0, s.jsxs)("ul", {
                          children: [
                            (0, s.jsx)(a(), {
                              href: "/about",
                              children: (0, s.jsx)("li", {
                                className:
                                  "w-full cursor-pointer p-2 rounded-lg hover:bg-gray-50",
                                children: "About",
                              }),
                            }),
                            (0, s.jsx)(a(), {
                              href: "/work",
                              children: (0, s.jsx)("li", {
                                className:
                                  "w-full cursor-pointer p-2 rounded-lg hover:bg-gray-50",
                                children: "Work",
                              }),
                            }),
                            
                            
                            (0, s.jsx)(a(), {
                              href: "/contact",
                              children: (0, s.jsx)("li", {
                                className:
                                  "w-full cursor-pointer p-2 rounded-lg hover:bg-gray-50",
                                children: "Contact",
                              }),
                            }),
                          ],
                        }),
                      }),
                  }),
                ],
              }),
            ],
          });
        },
        x = (e) => {
          let { children: t } = e;
          return (0, s.jsxs)("div", {
            className: "container mx-auto max-w-7xl my-10",
            children: [
              (0, s.jsx)(p, {}),
              (0, s.jsx)("div", { className: "my-5", children: t }),
              (0, s.jsx)(c, {}),
            ],
          });
        };
      var f = x;
    },
    327: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(5893),
        i = n(1664),
        r = n.n(i);
      n(7294);
      let a = [
          {
            icon: "/icons/github.svg",
            link: "https://github.com/itskeshavdubey",
          },
         
          {
            icon: "/icons/linkedin.svg",
            link: "https://www.linkedin.com/in/keshavdubey2025/",
          },
          {
            icon: "/icons/dribbble.svg",
            link: "https://dribbble.com/itskeashavdubey",
          },
          
          { icon: "/icons/mail.svg", link: "mailto:kd479@snu.edu.in"},
        ],
        l = (e) => {
          let { classes: t } = e;
          return (0, s.jsx)("ul", {
            className:
              "bg-gray-100 flex items-center justify-center p-1 rounded-3xl shadow-sm ".concat(
                t
              ),
            children: a.map((e) => {
              let { link: t, icon: n } = e;
              return (0, s.jsx)(
                r(),
                {
                  className: "p-2",
                  href: t,
                  target: "_blank",
                  children: (0, s.jsx)("img", {
                    className:
                      "h-6 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100",
                    src: n,
                  }),
                },
                t
              );
            }),
          });
        };
      var o = l;
    },
    1473: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n(5893);
      n(7294);
      var i = n(832),
        r = n(7098),
        a = n(8267),
        l = n(5940),
        o = n(1163),
        c = n(9008),
        d = n.n(c);
      let m = () => {
        let e = (0, o.useRouter)();
        return (0, s.jsxs)(i.Z, {
          children: [
            (0, s.jsxs)(d(), {
              children: [
                (0, s.jsx)("title", { children: "Keshav Dubey - About" }),
                (0, s.jsx)(
                  "meta",
                  { property: "og:title", content: "Keshav Dubey - About" },
                  "title"
                ),
                (0, s.jsx)("meta", {
                  name: "description",
                  content:
                    "I'm Keshav Dubey, a frontend web developer & UI/UX designer working remotely around the world. A 19-year-old student at Shiv Nadar University, currently in my second year of a B.tech in Computer Science and Engineering. I am based in Greater Noida and have a wide range of skills, including HTML, CSS, JavaScript, React JS, and Java as Technical Skills; UI/UX design (Figma), and Graphic Design (Adobe Photoshop) as my Design Skills. In addition to my skills, I am also a professional photographer. I have a strong foundation in computer science and engineering and am always looking for new ways to improve my skills and knowledge. I am a dedicated and hardworking individual with a passion for technology and design.",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "flex flex-col items-center text-center",
              children: [
                (0, s.jsxs)("div", {
                  className: "mt-10 flex flex-col items-center md:hidden",
                  children: [
                    (0, s.jsx)(r.Z, {
                      classesMain: "text-center text-2xl font-bold",
                      classesSpan: "ml-2",
                      isMobile: !0,
                      children: "Hey, hello and",
                    }),
                    (0, s.jsx)(r.Z, {
                      classesMain: "text-center text-2xl font-bold",
                      classesSpan: "ml-2",
                      isMobile: !0,
                      children: "welcome stranger",
                    }),
                  ],
                }),
                (0, s.jsx)(r.Z, {
                  classesMain:
                    "hidden md:flex text-center text-xl md:text-4xl xl:text-6xl font-bold mt-20",
                  classesSpan: "ml-1 md:ml-2 xl:ml-4",
                  children: "Hey, hello and welcome stranger",
                }),
                (0, s.jsx)("p", {
                  className:
                    "mt-2 md:mt-5 w-4/5 md:w-2/3 text-sm md:text-lg xl:text-xl leading-6 md:leading-8 xl:leading-10 opacity-50",
                  children:
                    "I'm Keshav Dubey, a frontend web developer & UI/UX designer working remotely around the world. A 19-year-old student at Shiv Nadar University, currently in my second year of a B.tech in Computer Science and Engineering. I am based in Greater Noida and have a wide range of skills, including HTML, CSS, JavaScript, React JS, and Java as Technical Skills; UI/UX design (Figma), and Graphic Design (Adobe Photoshop) as my Design Skills. In addition to my skills, I am also a professional photographer. I have a strong foundation in computer science and engineering and am always looking for new ways to improve my skills and knowledge. I am a dedicated and hardworking individual with a passion for technology and design.",
                }),
                (0, s.jsxs)("div", {
                  className: "mt-5 md:mt-10 flex items-center",
                  children: [
                    (0, s.jsx)(l.Z, {
                      classes:
                        "px-3 md:px-5 xl:px-8 py-2 md:py-3 xl:py-4 text-sm md:text-lg ml-10",
                      children: "Schedule a call",
                    }),
                    (0, s.jsx)(a.Z, {
                      onClick: () => e.push("/contact"),
                      type: "secondary",
                      classes:
                        "px-3 md:px-5 xl:px-8 py-2 md:py-3 xl:py-4 text-sm md:text-lg ml-5 md:ml-10",
                      children: "Contact Me",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      t.default = m;
    },
  },
  function (e) {
    e.O(0, [346, 774, 888, 179], function () {
      return e((e.s = 9212));
    }),
      (_N_E = e.O());
  },
]);
