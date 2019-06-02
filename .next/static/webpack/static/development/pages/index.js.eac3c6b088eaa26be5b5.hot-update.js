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
        id: "about",
        className: "jsx-2229534582" + " " + ((this.state.dark_mode ? "dark-mode" : "light-mode") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2229534582" + " " + "hero-container m-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2229534582",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Hi \uD83D\uDC4B\uD83C\uDFFC, I'm Nhat & I'm a Front-End Developer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2229534582",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "I'm passionate about designing and building intuitive and beautiful software applications.", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-2229534582",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), "When I'm not working on my craft, I'm probably hanging out with my family."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.toggleMode,
        className: "jsx-2229534582" + " " + "action-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "DARK MODE"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2229534582" + " " + "waves-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        width: "100%",
        height: "100%",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "jsx-2229534582",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        fill: "white",
        className: "jsx-2229534582",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("animate", {
        repeatCount: "indefinite",
        fill: "freeze",
        attributeName: "d",
        dur: "4s",
        values: "M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z ",
        className: "jsx-2229534582",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2229534582",
        __self: this
      }, ".waves-container.jsx-2229534582{width:100vw;}@media (max-width:640px){.hero-container.jsx-2229534582 h1.jsx-2229534582{font-size:34px;}.hero-container.jsx-2229534582 p.jsx-2229534582{font-size:26px;}}@-webkit-keyframes hero-animation-jsx-2229534582{0%{opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes hero-animation-jsx-2229534582{0%{opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL25oYXRkaW5oLW5leHRqcy9jb21wb25lbnRzL0hlcm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RvQixBQUd5QixBQUlLLEFBSUEsQUFNTCxBQUlBLFVBSGlCLEFBSUQsRUFsQjlCLEdBSUUsQUFJQSxxRkFXQSxHQUpBIiwiZmlsZSI6Ii9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL25oYXRkaW5oLW5leHRqcy9jb21wb25lbnRzL0hlcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEhlcm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGFya19tb2RlOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICB0b2dnbGVNb2RlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXJrX21vZGU6ICF0aGlzLnN0YXRlLmRhcmtfbW9kZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmRhcmtfbW9kZSA/IFwiZGFyay1tb2RlXCIgOiBcImxpZ2h0LW1vZGVcIn1cbiAgICAgICAgaWQ9XCJhYm91dFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250YWluZXIgbS1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDE+SGkg8J+Ri/Cfj7wsIEknbSBOaGF0ICYgSSdtIGEgRnJvbnQtRW5kIERldmVsb3BlcjwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJJ20gcGFzc2lvbmF0ZSBhYm91dCBkZXNpZ25pbmcgYW5kIGJ1aWxkaW5nIGludHVpdGl2ZSBhbmQgYmVhdXRpZnVsXG4gICAgICAgICAgICBzb2Z0d2FyZSBhcHBsaWNhdGlvbnMuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFdoZW4gSSdtIG5vdCB3b3JraW5nIG9uIG15IGNyYWZ0LCBJJ20gcHJvYmFibHkgaGFuZ2luZyBvdXQgd2l0aCBteVxuICAgICAgICAgICAgZmFtaWx5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idG5cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGV9PlxuICAgICAgICAgICAgREFSSyBNT0RFXG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhdmVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJkXCJcbiAgICAgICAgICAgICAgICAgIGR1cj1cIjRzXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlcz1cIk0wIDI1LjkwODZDMjc3IDg0LjU4MjEgNDMzIDY1LjczNiA3MjAgMjUuOTA4NkM5MzQuODE4IC0zLjkwMTkgMTIxNC4wNiAtNS4yMzY2OSAxNDQyIDguMDY1OTdDMjA3OSA0NS4yNDIxIDIyMDggNjMuNTAwNyAyNTYwIDI1LjkwODhWMTcxLjkxTDAgMTcxLjkxVjI1LjkwODZaO1xuICAgICAgICAgICAgICAgIE0wIDg2LjMxNDlDMzE2IDg2LjMxNSA0NDQgMTU5LjE1NSA4ODQgNTEuMTU1NEMxMzI0IC01Ni44NDQ2IDEzMjAuMjkgMzQuMTIxNCAxNTM4IDcwLjQwNjNDMTgxNCAxMTYuNDA3IDIxNTYgMTg4LjQwOCAyNTYwIDg2LjMxNVYyMzIuMzE3TDAgMjMyLjMxNlY4Ni4zMTQ5WjtcbiAgICAgICAgICAgICAgICBNMCA1My42NTg0QzE1OCAxMS4wMDAxIDIxMyAwIDM2MyAwQzUxMyAwIDg1NS41NTUgMTE1LjAwMSAxMTU0IDExNS4wMDFDMTQ0MCAxMTUuMDAxIDE2MjYgLTM4LjAwMDQgMjU2MCA1My42NTg1VjE5OS42NkwwIDE5OS42NlY1My42NTg0WjtcbiAgICAgICAgICAgICAgICBNMCAyNS45MDg2QzI3NyA4NC41ODIxIDQzMyA2NS43MzYgNzIwIDI1LjkwODZDOTM0LjgxOCAtMy45MDE5IDEyMTQuMDYgLTUuMjM2NjkgMTQ0MiA4LjA2NTk3QzIwNzkgNDUuMjQyMSAyMjA4IDYzLjUwMDcgMjU2MCAyNS45MDg4VjE3MS45MUwwIDE3MS45MVYyNS45MDg2WlxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLndhdmVzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgLmhlcm8tY29udGFpbmVyIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVyby1jb250YWluZXIgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIGhlcm8tYW5pbWF0aW9uIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdfQ== */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/nhatdinh-nextjs/components/Hero.js */"));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=index.js.eac3c6b088eaa26be5b5.hot-update.js.map