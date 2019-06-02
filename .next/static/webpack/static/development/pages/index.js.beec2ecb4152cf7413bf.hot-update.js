webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/Nhat/Desktop/Github/nhatdinh-nextjs/components/Hero.js";



var Hero =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Hero, _React$Component);

  function Hero(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hero);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Hero).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleMode", function () {
      _this.setState({
        mode: !_this.state.dark_mode
      });
    });

    _this.state = {
      dark_mode: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hero, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "about",
        className: "jsx-1405880075" + " " + ((this.state.dark_mode ? "dark-mode" : "light-mode") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1405880075",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Hi \uD83D\uDC4B\uD83C\uDFFC, I'm Nhat & I'm a Front-End Developer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1405880075",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "I'm passionate about designing and building intuitive and beautiful software applications.", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-1405880075",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), "When I'm not working on my craft, I'm probably hanging out with my family."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.toggleMode,
        className: "jsx-1405880075" + " " + "action-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "SWITCH MODE"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1405880075" + " " + "waves-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        width: "100%",
        height: "100%",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "jsx-1405880075",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        fill: "white",
        className: "jsx-1405880075",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("animate", {
        repeatCount: "indefinite",
        fill: "freeze",
        attributeName: "d",
        dur: "4s",
        values: "M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z ",
        className: "jsx-1405880075",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1405880075",
        __self: this
      }, "@media (max-width:640px){.hero-container.jsx-1405880075 h1.jsx-1405880075{font-size:34px;}.hero-container.jsx-1405880075 p.jsx-1405880075{font-size:26px;}}@-webkit-keyframes hero-animation-jsx-1405880075{0%{opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes hero-animation-jsx-1405880075{0%{opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL25oYXRkaW5oLW5leHRqcy9jb21wb25lbnRzL0hlcm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RvQixBQUk4QixBQUlBLEFBTUwsQUFJQSxVQUhpQixBQUlELEtBZDVCLEFBSUEscUZBV0EsR0FKQSIsImZpbGUiOiIvVXNlcnMvTmhhdC9EZXNrdG9wL0dpdGh1Yi9uaGF0ZGluaC1uZXh0anMvY29tcG9uZW50cy9IZXJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBIZXJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhcmtfbW9kZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgdG9nZ2xlTW9kZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kZTogIXRoaXMuc3RhdGUuZGFya19tb2RlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZGFya19tb2RlID8gXCJkYXJrLW1vZGVcIiA6IFwibGlnaHQtbW9kZVwifVxuICAgICAgICBpZD1cImFib3V0XCJcbiAgICAgID5cbiAgICAgICAgPGgxPkhpIPCfkYvwn4+8LCBJJ20gTmhhdCAmIEknbSBhIEZyb250LUVuZCBEZXZlbG9wZXI8L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJJ20gcGFzc2lvbmF0ZSBhYm91dCBkZXNpZ25pbmcgYW5kIGJ1aWxkaW5nIGludHVpdGl2ZSBhbmQgYmVhdXRpZnVsXG4gICAgICAgICAgc29mdHdhcmUgYXBwbGljYXRpb25zLlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIFdoZW4gSSdtIG5vdCB3b3JraW5nIG9uIG15IGNyYWZ0LCBJJ20gcHJvYmFibHkgaGFuZ2luZyBvdXQgd2l0aCBteVxuICAgICAgICAgIGZhbWlseS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idG5cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGV9PlxuICAgICAgICAgIFNXSVRDSCBNT0RFXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2F2ZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggZmlsbD1cIndoaXRlXCI+XG4gICAgICAgICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwiZFwiXG4gICAgICAgICAgICAgICAgZHVyPVwiNHNcIlxuICAgICAgICAgICAgICAgIHZhbHVlcz1cIk0wIDI1LjkwODZDMjc3IDg0LjU4MjEgNDMzIDY1LjczNiA3MjAgMjUuOTA4NkM5MzQuODE4IC0zLjkwMTkgMTIxNC4wNiAtNS4yMzY2OSAxNDQyIDguMDY1OTdDMjA3OSA0NS4yNDIxIDIyMDggNjMuNTAwNyAyNTYwIDI1LjkwODhWMTcxLjkxTDAgMTcxLjkxVjI1LjkwODZaO1xuICAgICAgICAgICAgICAgIE0wIDg2LjMxNDlDMzE2IDg2LjMxNSA0NDQgMTU5LjE1NSA4ODQgNTEuMTU1NEMxMzI0IC01Ni44NDQ2IDEzMjAuMjkgMzQuMTIxNCAxNTM4IDcwLjQwNjNDMTgxNCAxMTYuNDA3IDIxNTYgMTg4LjQwOCAyNTYwIDg2LjMxNVYyMzIuMzE3TDAgMjMyLjMxNlY4Ni4zMTQ5WjtcbiAgICAgICAgICAgICAgICBNMCA1My42NTg0QzE1OCAxMS4wMDAxIDIxMyAwIDM2MyAwQzUxMyAwIDg1NS41NTUgMTE1LjAwMSAxMTU0IDExNS4wMDFDMTQ0MCAxMTUuMDAxIDE2MjYgLTM4LjAwMDQgMjU2MCA1My42NTg1VjE5OS42NkwwIDE5OS42NlY1My42NTg0WjtcbiAgICAgICAgICAgICAgICBNMCAyNS45MDg2QzI3NyA4NC41ODIxIDQzMyA2NS43MzYgNzIwIDI1LjkwODZDOTM0LjgxOCAtMy45MDE5IDEyMTQuMDYgLTUuMjM2NjkgMTQ0MiA4LjA2NTk3QzIwNzkgNDUuMjQyMSAyMjA4IDYzLjUwMDcgMjU2MCAyNS45MDg4VjE3MS45MUwwIDE3MS45MVYyNS45MDg2WlxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAuaGVyby1jb250YWluZXIgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZXJvLWNvbnRhaW5lciBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgaGVyby1hbmltYXRpb24ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuIl19 */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/nhatdinh-nextjs/components/Hero.js */"));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=index.js.beec2ecb4152cf7413bf.hot-update.js.map