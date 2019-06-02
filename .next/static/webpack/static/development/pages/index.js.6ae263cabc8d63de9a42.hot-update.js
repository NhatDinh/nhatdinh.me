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
        dark_mode: !_this.state.dark_mode
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
        className: "jsx-3799548747" + " " + "hero-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3799548747" + " " + ((this.state.dark_mode ? "dark-mode grid is-center" : "light-mode grid is-center") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3799548747" + " " + "m-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3799548747",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Hi \uD83D\uDC4B\uD83C\uDFFC, I'm Nhat & I'm a Front-End Developer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-3799548747",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "I'm passionate about designing and building beautifully-crafted software applications.", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-3799548747",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), " Reading about startups on IndieHackers.com and checking out cool products on Product Hunt is")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3799548747" + " " + "mode-wrapper m-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.toggleMode,
        className: "jsx-3799548747" + " " + "action-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "DARK MODE")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3799548747" + " " + "waves-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        width: "100vw",
        height: "100%",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "jsx-3799548747",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        fill: "white",
        className: "jsx-3799548747",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("animate", {
        repeatCount: "indefinite",
        fill: "freeze",
        attributeName: "d",
        dur: "4s",
        values: "M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z ",
        className: "jsx-3799548747",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3799548747",
        __self: this
      }, ".grid.jsx-3799548747{display:grid;grid-template-rows:repleat(3,1fr);grid-gap:20px;}.hero-section.jsx-3799548747{height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.hero-container.jsx-3799548747 h1.jsx-3799548747{font-size:50px;-webkit-animation:hello-animation-jsx-3799548747 2.5s;animation:hello-animation-jsx-3799548747 2.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;opacity:0;}@media (max-width:640px){.hero-container.jsx-3799548747 h1.jsx-3799548747{font-size:34px;}.hero-container.jsx-3799548747 p.jsx-3799548747{font-size:26px;}}@-webkit-keyframes hello-animation-jsx-3799548747{0%{opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes hello-animation-jsx-3799548747{0%{opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL25oYXRkaW5oLW5leHRqcy9jb21wb25lbnRzL0hlcm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUcwQixBQUtBLEFBS0UsQUFPRSxBQUlBLEFBTUwsQUFJQSxVQUhpQixBQUlELEdBL0JPLEFBS3ZCLEVBS21CLEFBTy9CLEFBSUEsVUFmYSxzQkFMQyxjQUNoQixzQ0FLQSxDQXlCRSxHQUpBLFlBakI2QixrRUFDbkIsVUFDWiIsImZpbGUiOiIvVXNlcnMvTmhhdC9EZXNrdG9wL0dpdGh1Yi9uaGF0ZGluaC1uZXh0anMvY29tcG9uZW50cy9IZXJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBIZXJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhcmtfbW9kZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgdG9nZ2xlTW9kZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGFya19tb2RlOiAhdGhpcy5zdGF0ZS5kYXJrX21vZGUgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2VjdGlvblwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGFya19tb2RlXG4gICAgICAgICAgICAgID8gXCJkYXJrLW1vZGUgZ3JpZCBpcy1jZW50ZXJcIlxuICAgICAgICAgICAgICA6IFwibGlnaHQtbW9kZSBncmlkIGlzLWNlbnRlclwiXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPkhpIPCfkYvwn4+8LCBJJ20gTmhhdCAmIEknbSBhIEZyb250LUVuZCBEZXZlbG9wZXI8L2gxPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEknbSBwYXNzaW9uYXRlIGFib3V0IGRlc2lnbmluZyBhbmQgYnVpbGRpbmcgYmVhdXRpZnVsbHktY3JhZnRlZFxuICAgICAgICAgICAgICBzb2Z0d2FyZSBhcHBsaWNhdGlvbnMuIFxuICAgICAgICAgICAgICA8YnIgLz4gUmVhZGluZyBhYm91dCBzdGFydHVwcyBvbiBJbmRpZUhhY2tlcnMuY29tIGFuZCBjaGVja2luZyBvdXQgY29vbCBwcm9kdWN0cyBvbiBQcm9kdWN0IEh1bnQgaXMgXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlLXdyYXBwZXIgbS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ0blwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kZX0+XG4gICAgICAgICAgICAgIERBUksgTU9ERVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhdmVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB3aWR0aD1cIjEwMHZ3XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwiZFwiXG4gICAgICAgICAgICAgICAgICBkdXI9XCI0c1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM9XCJNMCAyNS45MDg2QzI3NyA4NC41ODIxIDQzMyA2NS43MzYgNzIwIDI1LjkwODZDOTM0LjgxOCAtMy45MDE5IDEyMTQuMDYgLTUuMjM2NjkgMTQ0MiA4LjA2NTk3QzIwNzkgNDUuMjQyMSAyMjA4IDYzLjUwMDcgMjU2MCAyNS45MDg4VjE3MS45MUwwIDE3MS45MVYyNS45MDg2WjtcbiAgICAgICAgICAgICAgICBNMCA4Ni4zMTQ5QzMxNiA4Ni4zMTUgNDQ0IDE1OS4xNTUgODg0IDUxLjE1NTRDMTMyNCAtNTYuODQ0NiAxMzIwLjI5IDM0LjEyMTQgMTUzOCA3MC40MDYzQzE4MTQgMTE2LjQwNyAyMTU2IDE4OC40MDggMjU2MCA4Ni4zMTVWMjMyLjMxN0wwIDIzMi4zMTZWODYuMzE0OVo7XG4gICAgICAgICAgICAgICAgTTAgNTMuNjU4NEMxNTggMTEuMDAwMSAyMTMgMCAzNjMgMEM1MTMgMCA4NTUuNTU1IDExNS4wMDEgMTE1NCAxMTUuMDAxQzE0NDAgMTE1LjAwMSAxNjI2IC0zOC4wMDA0IDI1NjAgNTMuNjU4NVYxOTkuNjZMMCAxOTkuNjZWNTMuNjU4NFo7XG4gICAgICAgICAgICAgICAgTTAgMjUuOTA4NkMyNzcgODQuNTgyMSA0MzMgNjUuNzM2IDcyMCAyNS45MDg2QzkzNC44MTggLTMuOTAxOSAxMjE0LjA2IC01LjIzNjY5IDE0NDIgOC4wNjU5N0MyMDc5IDQ1LjI0MjEgMjIwOCA2My41MDA3IDI1NjAgMjUuOTA4OFYxNzEuOTFMMCAxNzEuOTFWMjUuOTA4NlpcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGxlYXQoMywgMWZyKTtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVyby1zZWN0aW9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVyby1jb250YWluZXIgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBoZWxsby1hbmltYXRpb24gMi41cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAuaGVyby1jb250YWluZXIgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZXJvLWNvbnRhaW5lciBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgaGVsbG8tYW5pbWF0aW9uIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdfQ== */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/nhatdinh-nextjs/components/Hero.js */"));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=index.js.6ae263cabc8d63de9a42.hot-update.js.map