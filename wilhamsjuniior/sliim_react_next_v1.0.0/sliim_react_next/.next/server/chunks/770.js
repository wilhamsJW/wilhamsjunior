"use strict";
exports.id = 770;
exports.ids = [770];
exports.modules = {

/***/ 770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Portfolio_PortfolioIsotope)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "isotope-layout"
var external_isotope_layout_ = __webpack_require__(2349);
var external_isotope_layout_default = /*#__PURE__*/__webpack_require__.n(external_isotope_layout_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/utilits.js
const portfolioHover = ()=>{
    const dizme_tm_portfolio_animation_wrap = document.querySelectorAll(".grid__item a"), dizme_tm_portfolio_titles = document.querySelector(".item-title-hover");
    dizme_tm_portfolio_animation_wrap.forEach((element)=>{
        element.addEventListener("mousemove", ()=>{
            let title = element.getAttribute("data-title"), category = element.getAttribute("data-category");
            if (title) {
                dizme_tm_portfolio_titles.classList.add("visible");
                dizme_tm_portfolio_titles.innerHTML = title + '<span class="item-category">' + category + "</span>";
            }
            document.addEventListener("mousemove", (e)=>{
                dizme_tm_portfolio_titles.style.left = `${e.clientX - 10}px`;
                dizme_tm_portfolio_titles.style.top = `${e.clientY + 25}px`;
            });
        });
        element.addEventListener("mouseleave", ()=>{
            dizme_tm_portfolio_titles.classList.remove("visible");
        });
    });
};

;// CONCATENATED MODULE: ./src/components/Portfolio/PortfolioDetails.js


const PortfolioDetails = ({ openClass , portfolioDetails , setPortfolioDetails  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `preview ${portfolioDetails ? openClass : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "action action--close",
                    onClick: ()=>setPortfolioDetails(),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "position-relative d-block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "navigation-close-line"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "navigation-close-line"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "description description--preview",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: portfolioDetails && portfolioDetails.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "details",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-unstyled",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Project : "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: portfolioDetails && portfolioDetails.project
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Client : "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: portfolioDetails && portfolioDetails.client
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Langages : "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        " ",
                                                        portfolioDetails && portfolioDetails.langages.map((langages, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                                                                children: [
                                                                    langages,
                                                                    ", "
                                                                ]
                                                            }, langages))
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Duration : "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: portfolioDetails && portfolioDetails.duration
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Bugdet : "
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        "$",
                                                        portfolioDetails && portfolioDetails.bugdet
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "btn main-btn d-none d-md-inline-block",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "preview"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "original",
                    style: {
                        opacity: portfolioDetails ? 1 : 0
                    },
                    src: portfolioDetails ? portfolioDetails.img : "/images/projects/4.jpg"
                })
            ]
        })
    });
};
/* harmony default export */ const Portfolio_PortfolioDetails = (PortfolioDetails);

;// CONCATENATED MODULE: ./src/components/Portfolio/PortfolioIsotope.js





const PortfolioIsotope = ()=>{
    const isotope = (0,external_react_.useRef)();
    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            isotope.current = new (external_isotope_layout_default())(".grid", {
                itemSelector: ".col-12",
                percentPosition: true,
                masonry: {
                    columnWidth: ".col-12"
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false
                }
            });
        }, 5000);
    });
    (0,external_react_.useEffect)(()=>{
        portfolioHover();
    });
    const [portfolioDetails, setPortfolioDetails] = (0,external_react_.useState)(null);
    const [className, setClassName] = (0,external_react_.useState)("");
    const onClick = (data)=>{
        setPortfolioDetails(data);
        setClassName("preview--open");
        setTimeout(()=>{
            setClassName("preview--open preview--image-loaded");
        }, 1000);
    };
    (0,external_react_.useEffect)(()=>{
        if (portfolioDetails) {
            document.querySelector("body").classList.add("open-portfolio-details");
        } else {
            document.querySelector("body").classList.remove("open-portfolio-details");
        }
    }, [
        portfolioDetails
    ]);
    const datas = [
        {
            id: 4,
            img: "images/projects/4.jpg",
            title: "Autumn Papers",
            project: "Mobile Application",
            client: "Envato",
            langages: [
                "html",
                "css",
                "Js"
            ],
            duration: "3 Months",
            bugdet: 33000
        },
        {
            id: 1,
            img: "images/projects/1.jpg",
            title: "Globe",
            project: "Website Design",
            client: "Envato",
            langages: [
                "html",
                "css",
                "Js"
            ],
            duration: "3 Months",
            bugdet: 33000
        },
        {
            id: 3,
            img: "images/projects/3.jpg",
            title: "Colored Pens",
            project: "Photo Shooting",
            client: "Envato",
            langages: [
                "html",
                "css",
                "Js"
            ],
            duration: "3 Months",
            bugdet: 33000
        },
        {
            id: 8,
            img: "images/projects/8.jpg",
            title: "Woman Bag",
            project: "3d Object",
            client: "Envato",
            langages: [
                "html",
                "css",
                "Js"
            ],
            duration: "3 Months",
            bugdet: 33000
        },
        {
            id: 5,
            img: "images/projects/5.jpg",
            title: "halloween",
            project: "After Effect Video",
            client: "Envato",
            langages: [
                "html",
                "css",
                "Js"
            ],
            duration: "3 Months",
            bugdet: 33000
        },
        {
            id: 2,
            img: "images/projects/2.jpg",
            title: "Beautiful cat",
            project: "mobile application",
            client: "Envato",
            langages: [
                "html",
                "css",
                "Js"
            ],
            duration: "3 Months",
            bugdet: 33000
        },
        {
            id: 7,
            img: "images/projects/7.jpg",
            title: "Sofa",
            project: "Relaxing chairs",
            client: "Envato",
            langages: [
                "html",
                "css",
                "Js"
            ],
            duration: "3 Months",
            bugdet: 33000
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container portfolio-container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid row w-100 m-0 text-left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "item-title-hover"
                        }),
                        datas.map((data)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid__item col-12 col-md-6 col-lg-4",
                                "data-size": "960x640",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "d-block",
                                        href: "#",
                                        "data-title": data.title,
                                        "data-category": data.project,
                                        onClick: ()=>onClick(data),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "img-fluid",
                                            src: data.img,
                                            alt: data.title
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "btn main-btn d-inline-block d-md-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "preview"
                                        })
                                    })
                                ]
                            }, data.id))
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Portfolio_PortfolioDetails, {
                    openClass: className,
                    portfolioDetails: portfolioDetails,
                    setPortfolioDetails: ()=>setPortfolioDetails(false)
                })
            ]
        })
    });
};
/* harmony default export */ const Portfolio_PortfolioIsotope = (PortfolioIsotope);


/***/ })

};
;