"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [419],
  {
    7098: function (e, t, a) {
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
    8781: function (e, t, a) {
      var s = a(5893);
      a(7294);
      var n = a(8267),
        r = a(5940),
        i = a(1163);
      let l = () => {
        let e = (0, i.useRouter)();
        return (0, s.jsxs)("div", {
          className: "my-10 mt-20 p-5 flex flex-col items-center text-center",
          children: [
            (0, s.jsx)("h2", {
              className: "text-2xl md:text-3xl lg:text-4xl xl:text-6xl",
              children: "Let's Talk about Your Project.",
            }),
            (0, s.jsx)("p", {
              className:
                "mt-2 opacity-50 text-lg md:text-md lg:text-xl xl:text-2xl",
              children: "Something on your mind? Get in touch and let's chat!",
            }),
            (0, s.jsxs)("div", {
              className: "flex items-center mt-5",
              children: [
                (0, s.jsx)(r.Z, { children: "Schedule a call" }),
                (0, s.jsx)(n.Z, {
                  onClick: () => e.push("/contact"),
                  type: "secondary",
                  classes: "ml-5",
                  children: "Send me an email",
                }),
              ],
            }),
          ],
        });
      };
      t.Z = l;
    },
    5940: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = a(5893),
        n = a(29),
        r = a(7294),
        i = a(3387);
      function l(e) {
        let { classes: t, children: a } = e;
        return (
          (0, r.useEffect)(() => {
            !(async function () {
              let e = await (0, n.o)();
              e && e("ui", { styles: { branding: { brandColor: "#000000" } } });
            })();
          }, []),
          (0, s.jsx)(i.E.button, {
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
            children: a,
          })
        );
      }
    },
    832: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return g;
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
        h = a(5820),
        m = a(1163),
        x = a(8267);
      let u = () => {
          let [e, t] = (0, n.useState)(!1),
            a = (0, m.useRouter)();
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
                  (0, s.jsx)(x.Z, {
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
                  (0, s.jsx)(h.M, {
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
        p = (e) => {
          let { children: t } = e;
          return (0, s.jsxs)("div", {
            className: "container mx-auto max-w-7xl my-10",
            children: [
              (0, s.jsx)(u, {}),
              (0, s.jsx)("div", { className: "my-5", children: t }),
              (0, s.jsx)(o, {}),
            ],
          });
        };
      var g = p;
    },
    327: function (e, t, a) {
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
            link: "https://dribbble.com/itskeashavdubey",
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
    9804: function (e, t, a) {
      var s = a(5893);
      a(7294);
      var n = a(3346),
        r = a(3387);
      let i = (e) => {
        let { title: t, description: a, type: i, link: l } = e;
        return (0, s.jsxs)(r.E.a, {
          href: l,
          target: "_blank",
          whileHover: {
            scale: 1.02,
            transition: {
              duration: 1,
              type: "spring",
              damping: 12,
              stiffness: 100,
            },
          },
          whileTap: { scale: 0.995 },
          className:
            "p-5 m-5 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left",
          children: [
            (0, s.jsx)(n.Z, { size: 40, style: "shape", value: t }),
            (0, s.jsx)("h3", {
              className: "text-2xl mt-4 font-medium",
              children: t,
            }),
            (0, s.jsx)("p", {
              className: "mt-2 opacity-50 text-md",
              children: a.length > 80 ? a.substring(0, 80) + "..." : a,
            }),
            (0, s.jsx)("span", {
              className: "mt-4 text-sm py-2 px-4 bg-gray-200 rounded-3xl",
              children: i,
            }),
          ],
        });
      };
      t.Z = i;
    },
  },
]);
