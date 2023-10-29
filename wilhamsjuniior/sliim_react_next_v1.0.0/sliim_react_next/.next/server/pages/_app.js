(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(2280);
;// CONCATENATED MODULE: ./src/layouts/PreLoader.js


const PreLoader = ()=>{
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            document.querySelector("body").classList.add("loaded");
        }, 1000);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "loader-wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "loader"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "loader-section section-left"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "loader-section section-right"
            })
        ]
    });
};
/* harmony default export */ const layouts_PreLoader = (PreLoader);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/layouts/SliimHead.js




const colors = [
    {
        id: 1,
        name: "amber"
    },
    {
        id: 2,
        name: "blue"
    },
    {
        id: 3,
        name: "brown"
    },
    {
        id: 4,
        name: "cyan"
    },
    {
        id: 5,
        name: "deeporange"
    },
    {
        id: 6,
        name: "deeppurple"
    },
    {
        id: 7,
        name: "green"
    },
    {
        id: 8,
        name: "grey"
    },
    {
        id: 9,
        name: "indigo"
    },
    {
        id: 10,
        name: "lightblue"
    },
    {
        id: 11,
        name: "pink"
    },
    {
        id: 12,
        name: "purple"
    },
    {
        id: 13,
        name: "red"
    },
    {
        id: 14,
        name: "teal"
    }
];
const SliimHead = ()=>{
    const { color  } = (0,external_react_.useContext)(context/* Context */._);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Sliim - React NextJS Personal Portfolio "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
                    rel: "stylesheet"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap",
                    rel: "stylesheet"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "css/bootstrap.min.css"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "css/simplebar.min.css"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "css/font-awesome.min.css"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "css/owl.carousel.min.css"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "css/owl.theme.default.min.css"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "css/style.css"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    type: "text/css",
                    media: "all",
                    href: `css/skins/${color}.css`,
                    rel: "stylesheet"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "css/styleswitcher.css"
                })
            ]
        })
    });
};
/* harmony default export */ const layouts_SliimHead = (SliimHead);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(8722);
;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    const [loaded, setLoaded] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoaded(false);
        }, 1000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(context/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_SliimHead, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_PreLoader, {}),
            !loaded && /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [280], () => (__webpack_exec__(9801)));
module.exports = __webpack_exports__;

})();