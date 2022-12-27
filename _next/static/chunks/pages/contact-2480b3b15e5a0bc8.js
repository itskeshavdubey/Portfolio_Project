(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    1382: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return a(9493);
        },
      ]);
    },
    7098: function (e, t, a) {
      "use strict";
      var s = a(5893);
      a(7294);
      var n = a(3387);
      let r = (e) => {
        let { children: t, classesMain: a, classesSpan: r, isMobile: i } = e,
          l = t.split(" "),
          c = {
            visible: {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              transition: { type: "spring", damping: 12, stiffness: 100 },
            },
            hidden: {
              opacity: 0,
              x: i ? 10 : 20,
              y: i ? 10 : 20,
              scale: 0.9,
              transition: { type: "spring", damping: 12, stiffness: 100 },
            },
          };
        return (0, s.jsx)(n.E.div, {
          className: "flex flex-row items-center ".concat(a),
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
              n.E.span,
              {
                variants: c,
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
    8267: function (e, t, a) {
      "use strict";
      var s = a(5893);
      a(7294);
      var n = a(3387);
      let r = (e) => {
        let { type: t, children: a, classes: r, onClick: i } = e;
        return "secondary" === t
          ? (0, s.jsx)(n.E.button, {
              onClick: i,
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
              children: a,
            })
          : (0, s.jsx)(n.E.button, {
              onClick: i,
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
              children: a,
            });
      };
      t.Z = r;
    },
    832: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return f;
        },
      });
      var s = a(5893),
        n = a(7294),
        r = a(1664),
        i = a.n(r),
        l = a(327),
        c = a(3387);
      let o = () =>
        (0, s.jsxs)("div", {
          className: "mt-10 text-center flex flex-col items-center",
          children: [
            (0, s.jsxs)("div", {
              className: "flex flex-col items-center justify-between",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col md:flex-row items-center",
                  children: [
                    (0, s.jsx)(i(), {
                      href: "/",
                      className:
                        "mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100",
                      children: "Home",
                    }),
                    (0, s.jsx)(i(), {
                      href: "/work",
                      className:
                        "mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100",
                      children: "Work",
                    }),
                    (0, s.jsx)(i(), {
                      href: "/about",
                      className:
                        "mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100",
                      children: "About",
                    }),

                    (0, s.jsx)(i(), {
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
            (0, s.jsx)(c.E.div, {
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
      var d = a(7005),
        m = a(5820),
        h = a(1163),
        u = a(8267);
      let p = () => {
          let [e, t] = (0, n.useState)(!1),
            a = (0, h.useRouter)();
          return (0, s.jsxs)("div", {
            className: "flex items-center justify-between px-2 xl:px-0",
            children: [
              (0, s.jsx)(i(), {
                className: "font-bold",
                href: "/",
                children: "keshavdubey.",
              }),
              (0, s.jsx)(c.E.div, {
                onClick: () => a.push("/contact"),
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
                  (0, s.jsx)(u.Z, {
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
                      (0, s.jsx)(c.E.nav, {
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
                            (0, s.jsx)(i(), {
                              href: "/about",
                              children: (0, s.jsx)("li", {
                                className:
                                  "w-full cursor-pointer p-2 rounded-lg hover:bg-gray-50",
                                children: "About",
                              }),
                            }),
                            (0, s.jsx)(i(), {
                              href: "/work",
                              children: (0, s.jsx)("li", {
                                className:
                                  "w-full cursor-pointer p-2 rounded-lg hover:bg-gray-50",
                                children: "Work",
                              }),
                            }),

                            (0, s.jsx)(i(), {
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
              (0, s.jsx)(o, {}),
            ],
          });
        };
      var f = x;
    },
    327: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = a(5893),
        n = a(1664),
        r = a.n(n);
      a(7294);
      let i = [
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
            link: "https://dribbble.com/",
          },
          { icon: "/icons/mail.svg", link: "mailto:kd479@snu.edu.in" },
        ],
        l = (e) => {
          let { classes: t } = e;
          return (0, s.jsx)("ul", {
            className:
              "bg-gray-100 flex items-center justify-center p-1 rounded-3xl shadow-sm ".concat(
                t
              ),
            children: i.map((e) => {
              let { link: t, icon: a } = e;
              return (0, s.jsx)(
                r(),
                {
                  className: "p-2",
                  href: t,
                  target: "_blank",
                  children: (0, s.jsx)("img", {
                    className:
                      "h-6 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100",
                    src: a,
                  }),
                },
                t
              );
            }),
          });
        };
      var c = l;
    },
    9493: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(5893),
        n = a(7294),
        r = a(7098),
        i = a(7536),
        l = a(832),
        c = a(3387),
        o = a(9008),
        d = a.n(o);
      let m = () => {
        let [e, t] = (0, n.useState)(!1),
          {
            register: a,
            handleSubmit: o,
            formState: { errors: m },
          } = (0, i.cI)(),
          h = async (e) => {};
        return (0, s.jsxs)(l.Z, {
          children: [
            (0, s.jsxs)(d(), {
              children: [
                (0, s.jsx)("title", { children: "Keshav Dubey - Contact" }),
                (0, s.jsx)(
                  "meta",
                  { property: "og:title", content: "Keshav Dubey - Contact" },
                  "title"
                ),
                (0, s.jsx)("meta", {
                  name: "description",
                  content:
                    " Keshav Dubey is available for freelance work, please contact him through mail or call.",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "flex flex-col items-center",
              children: [
                (0, s.jsx)(r.Z, {
                  classesMain: "mt-60 text-center text-6xl font-bold mt-20",
                  classesSpan: "ml-4",
                  children: "Contact",
                }),
                (0, s.jsx)("p", {
                  className:
                    "mt-2 md:mt-5 w-4/5 md:w-2/3 text-sm md:text-lg xl:text-xl item-center text-center leading-6 md:leading-8 xl:leading-10 opacity-50",
                  children:
                    "Mail me @ kd479@snu.edu.in or Call me on +91 9266466987",
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
    e.O(0, [346, 536, 774, 888, 179], function () {
      return e((e.s = 1382));
    }),
      (_N_E = e.O());
  },
]);
