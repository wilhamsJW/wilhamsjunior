"use strict";
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 2280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const type = {
    NAV: "NAV",
    COLOR: "COLOR",
    TRANSTION: "TRANSTION"
};
const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const reducer = (state, action)=>{
    switch(action.type){
        case type.NAV:
            return {
                ...state,
                nav: action.payload
            };
        case type.COLOR:
            return {
                ...state,
                color: action.payload
            };
        case type.TRANSTION:
            return {
                ...state,
                transition: action.payload
            };
        default:
            return state;
    }
};
const State = (props)=>{
    const initialState = {
        nav: "home",
        color: "deeporange",
        transition: false
    };
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const sectionToggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        dispatch({
            type: type.TRANSTION,
            payload: true
        });
        setTimeout(()=>{
            dispatch({
                type: type.NAV,
                payload: value
            });
        }, 500);
        setTimeout(()=>{
            dispatch({
                type: type.TRANSTION,
                payload: false
            });
        }, 2000);
    }, []);
    const setActiveStyleSheet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        dispatch({
            type: type.COLOR,
            payload: value
        });
    }, []);
    const { nav , color , transition  } = state;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: {
            nav,
            sectionToggle,
            color,
            setActiveStyleSheet,
            transition
        },
        children: props.children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);



/***/ })

};
;