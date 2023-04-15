(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        8312: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function() {
                    return s(1507);
                },
            ]);
        },
        1507: function(e, t, s) {
            "use strict";
            s.r(t),
                s.d(t, {
                    default: function() {
                        return b;
                    },
                });
            var l = s(5893),
                n = s(9008),
                i = s.n(n),
                a = s(8781),
                r = s(7294),
                c = s(8267),
                o = s(1163);
            let d = [{
                        id: 1,
                        title: "Snuxplore - Complete Student Guide Website",
                        description: "Led a team of 14 people and worked across the web development, design and content teams.",
                        tags: ["React", "Next.js", "Prisma", "SCSS"],
                        link: "https://snuxplore.com/",
                        type: "Design & Development",
                    },
                    {
                        id: 2,
                        title: "Frieghtemissions - Govt. Project, IIM Bangalore ",
                        description: "It is a project given by IIM, Bangalore. It is a government project that is a dashboard based website where a user can track their carbon emissions after entering their shipment details and can download their carbon emission report.",
                        link: "https://freightemissions.com/",
                        type: "UI/UX Design",
                    },
                    {
                        id: 3,
                        title: "Glitch Hackathon: Where Creativity and Innovation Collides",
                        description: "Hackathon Event Organiser & UI/UX Designer.  Led a team of 75 individuals with diverse backgrounds and skill sets, including developers, marketers, and designers.",
                        link: "https://glitch23.live/",
                        type: "Event Management & Design",
                    },
                    {
                        id: 4,
                        title: "Surge SNIoE - Sport Fest Website",
                        description: "Worked on designing a fully responsive dynamic Surge Website with wireframing and prototyping, worked on developing the frontend.",
                        tags: ["React", "Next.js", "Figma", "Adobe Photoshop"],
                        link: "https://surgesnu.in/",
                        type: "Design & Development",
                    },
                    {
                        id: 5,
                        title: "Bucks - Simplifies UPI payments",
                        description: "Bucks simplifies UPI payments, eliminating transaction fees and saving you time and money and gives an event organizing team a dashboard where they can track their payments and registrations.",
                        tags: ["React", "Next.js", "Figma", "Adobe Photoshop"],
                        link: "https://www.figma.com/file/g9fPj66xhyeq50OmSnMTqU/Bucks?node-id=0%3A1&t=pPf3dBFWAhUBqVgV-1",
                        type: "UI/UX Design",
                    },
                    {
                        id: 6,
                        title: "Parkezy - Slot Booking Based Parking App",
                        description: "Parkezy is a slot booking based parking app for Shiv Nadar University. It keeps a record of all the vehicles parked inside the parking, including the in-time and out-time of the vehicles, to reduce the crowd inside the campus.",
                        tags: ["React", "Next.js", "Figma", "Adobe Photoshop"],
                        link: "https://www.figma.com/file/s21awr8a9SooC0Pbsqfvse/Parkezy?node-id=0%3A1&t=IeLmGOf9rqa89t1q-1",
                        type: "Application Design, UI/UX Design",
                    },

                ],
                m = () => {
                    let [e, t] = (0, r.useState)([]),
                    s = (0, o.useRouter)();
                    async function n(e) {
                        let t =
                            arguments.length > 1 && void 0 !== arguments[1] ?
                            arguments[1] : {},
                            s = await fetch("https://api.hashnode.com/", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ query: e, variables: t }),
                            });
                        return s.json();
                    }
                    return (
                        (0, r.useEffect)(() => {
                            n(
                                '\n    query GetUserArticles($page: Int!) {\n      user(username: "keshavdubey") {\n        publication {\n          posts(page: $page) {\n            title\n            brief\n            slug\n           totalReactions\n            replyCount\n          }\n        }\n      }\n    }\n', { page: 0 }
                            ).then((e) => {
                                console.log(e.data.user.publication.posts),
                                    e.data.user.publication.posts.length &&
                                    t(
                                        e.data.user.publication.posts
                                        .sort((e, t) => t.totalReactions - e.totalReactions)
                                        .slice(0, 2)
                                    );
                            });
                        }, []),
                        (0, l.jsxs)("div", {})
                    );
                };
            var x = s(7098),
                p = s(3387),
                h = s(327),
                g = s(5940);
            let u = () =>
                (0, l.jsx)("div", {
                    className: "mt-20",
                    children: (0, l.jsxs)("div", {
                        className: "p-2 md:p-0 flex flex-col items-center",
                        children: [
                            (0, l.jsxs)("div", {
                                className: "flex flex-col items-center md:hidden",
                                children: [
                                    (0, l.jsx)(x.Z, {
                                        classesMain: "text-center text-2xl font-bold",
                                        classesSpan: "ml-2",
                                        isMobile: !0,
                                        children: "Hi, I’m Keshav Dubey.",
                                    }),
                                    (0, l.jsx)(x.Z, {
                                        classesMain: "text-center text-2xl font-bold",
                                        classesSpan: "ml-2",
                                        isMobile: !0,
                                        children: "I design, code and",
                                    }),
                                    (0, l.jsx)(x.Z, {
                                        classesMain: "text-center text-2xl font-bold",
                                        classesSpan: "ml-2",
                                        isMobile: !0,
                                        children: "grow internet software.",
                                    }),
                                ],
                            }),
                            (0, l.jsx)(x.Z, {
                                classesMain: "hidden md:flex text-center text-md md:text-2xl lg:text-3xl xl:text-6xl font-bold",
                                classesSpan: "ml-2 xl:ml-4",
                                children: "Hi, I’m Keshav Dubey.",
                            }),
                            (0, l.jsx)(x.Z, {
                                classesMain: "hidden md:flex xs:text-md md:mt-2 text-center text-md md:text-2xl lg:text-3xl xl:text-6xl font-bold",
                                classesSpan: "ml-2 xl:ml-4",
                                children: "I design, code and grow internet software.",
                            }),
                            (0, l.jsx)(p.E.p, {
                                className: "mt-2 xl:mt-5 text-md sm:text-sm md:text-md xl:text-2xl w-4/5 text-center opacity-50",
                                children: "I’m a student @ Shiv Nadar Institute of Eminence pursuing B.tech Computer Science and Engineering. I am a UI/UX Designer and Frontend Web Developer who enjoys turning problems and opportunities into simple interfaces through design and code.",
                            }),
                            (0, l.jsx)(h.Z, { classes: "mt-5" }),
                            (0, l.jsx)(g.Z, {
                                classes: "mt-10 px-5 py-3 md:px-10 md:py-6 text-xl",
                                children: "Hire Me",
                            }),
                        ],
                    }),
                }),
                f = () =>
                (0, l.jsxs)("div", {
                    className: "mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5",
                    children: [
                        (0, l.jsxs)("div", {
                            className: "col-span-1 xl:col-span-2 p-5 rounded-3xl",
                            children: [
                                (0, l.jsx)("h3", {
                                    className: "text-3xl font-bold",
                                    children: "Things I do",
                                }),
                                (0, l.jsx)("p", {
                                    className: "mt-5 text-xl leading-8 font-normal opacity-50",
                                    children: "As a seasoned professional with over a decade of experience in design, strategy, management, creative direction, and development, I have honed my skills to deliver exceptional results. I believe that effective workflows, excellent communication, and self-discipline are crucial for success, and my strong work ethic has enabled me to excel in a variety of areas. Whether working on a project solo or as part of a team, I am committed to delivering high-quality work and meeting the needs of my clients.",
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: "rounded-3xl col-span-1 m-2 xl:m-0 p-5 bg-gray-50 flex flex-col justify-between",
                            children: [
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)("h3", {
                                            className: "text-3xl font-bold",
                                            children: "Skills",
                                        }),
                                        (0, l.jsx)("p", {
                                            className: "mt-5 font-normal opacity-50",
                                            children: "HTML / CSS / JS / React / Figma / Adobe Photoshp / Adobe After Effects / Davinci Resolve",
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(c.Z, {
                                    classes: "w-1/2 mt-5",
                                    onClick: () =>
                                        window.open(
                                            "https://publuu.com/flip-book/67371/195542/page/1"
                                        ),
                                    children: "Download CV",
                                }),
                            ],
                        }),
                    ],
                });
            var j = s(9804);
            let w = () => {
                let e = (0, o.useRouter)();
                return (0, l.jsxs)("div", {
                    className: "text-center mt-20 flex flex-col items-center",
                    children: [
                        (0, l.jsx)("h2", {
                            className: "text-4xl font-black",
                            children: "Selected Work",
                        }),
                        (0, l.jsx)("div", {
                            className: "mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                            children: d.map((e) => {
                                let { id: t, title: s, description: n, type: i, link: a } = e;
                                return (0, l.jsx)(
                                    j.Z, { title: s, description: n, type: i, link: a },
                                    t
                                );
                            }),
                        }),
                        (0, l.jsx)(c.Z, {
                            onClick: () => e.push("/work"),
                            children: "See More",
                        }),
                    ],
                });
            };
            var y = s(832);

            function b() {
                return (0, l.jsxs)(y.Z, {
                    children: [
                        (0, l.jsxs)(i(), {
                            children: [
                                (0, l.jsx)("title", {
                                    children: "Keshav Dubey - Design + Code",
                                }),
                                (0, l.jsx)(
                                    "meta", { property: "og:title", content: "Keshav Dubey" },
                                    "title"
                                ),
                                (0, l.jsx)("meta", {
                                    name: "description",
                                    content: "I’m a student @ Shiv Nadar Institute of Eminence pursuing B.tech Computer Science and Engineering. I am a UI/UX Designer and Frontend Web Developer who enjoys turning problems and opportunities into simple interfaces through design and code.",
                                }),
                            ],
                        }),
                        (0, l.jsx)(u, {}),
                        (0, l.jsx)(w, {}),
                        (0, l.jsx)(f, {}),
                        (0, l.jsx)(m, {}),
                        (0, l.jsx)(a.Z, {}),
                    ],
                });
            }
        },
    },
    function(e) {
        e.O(0, [346, 491, 419, 774, 888, 179], function() {
                return e((e.s = 8312));
            }),
            (_N_E = e.O());
    },
]);