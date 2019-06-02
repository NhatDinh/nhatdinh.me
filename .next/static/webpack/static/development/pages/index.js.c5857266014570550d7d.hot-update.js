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
        className: "jsx-1554524228" + " " + "hero-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1554524228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1554524228" + " " + ((this.state.dark_mode ? "dark-mode" : "light-mode") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1554524228" + " " + "m-container hero-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1554524228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Hi \uD83D\uDC4B\uD83C\uDFFC, I'm Nhat & I'm a Front-End Developer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1554524228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "I'm passionate about designing and building beautifully-crafted software applications.", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-1554524228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.toggleMode,
        className: "jsx-1554524228" + " " + "action-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "DARK MODE")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1554524228" + " " + "waves-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        width: "100vw",
        height: "100%",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "jsx-1554524228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        fill: "white",
        className: "jsx-1554524228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("animate", {
        repeatCount: "indefinite",
        fill: "freeze",
        attributeName: "d",
        dur: "4s",
        values: "M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z ",
        className: "jsx-1554524228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1554524228",
        __self: this
      }, ".hero-section.jsx-1554524228{height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.hero-container.jsx-1554524228 h1.jsx-1554524228{font-size:50px;-webkit-animation:hello-animation-jsx-1554524228 2.5s;animation:hello-animation-jsx-1554524228 2.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;opacity:0;}@media (max-width:640px){.hero-container.jsx-1554524228 h1.jsx-1554524228{font-size:34px;}.hero-container.jsx-1554524228 p.jsx-1554524228{font-size:26px;}}@-webkit-keyframes hello-animation-jsx-1554524228{0%{opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes hello-animation-jsx-1554524228{0%{opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL25oYXRkaW5oLW5leHRqcy9jb21wb25lbnRzL0hlcm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RvQixBQUcwQixBQUtFLEFBT0UsQUFJQSxBQU1MLEFBSUEsVUFIaUIsQUFJRCxHQTFCaEIsRUFLbUIsQUFPL0IsQUFJQSxVQWZhLDBFQUNmLENBeUJFLEdBSkEsWUFqQjZCLGtFQUNuQixVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL25oYXRkaW5oLW5leHRqcy9jb21wb25lbnRzL0hlcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEhlcm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGFya19tb2RlOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICB0b2dnbGVNb2RlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXJrX21vZGU6ICF0aGlzLnN0YXRlLmRhcmtfbW9kZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZGFya19tb2RlID8gXCJkYXJrLW1vZGVcIiA6IFwibGlnaHQtbW9kZVwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1jb250YWluZXIgaGVyby1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoMT5IaSDwn5GL8J+PvCwgSSdtIE5oYXQgJiBJJ20gYSBGcm9udC1FbmQgRGV2ZWxvcGVyPC9oMT5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgSSdtIHBhc3Npb25hdGUgYWJvdXQgZGVzaWduaW5nIGFuZCBidWlsZGluZyBiZWF1dGlmdWxseS1jcmFmdGVkXG4gICAgICAgICAgICAgICAgc29mdHdhcmUgYXBwbGljYXRpb25zLlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ0blwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kZX0+XG4gICAgICAgICAgICAgICAgREFSSyBNT0RFXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhdmVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDB2d1wiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cImRcIlxuICAgICAgICAgICAgICAgICAgICBkdXI9XCI0c1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcz1cIk0wIDI1LjkwODZDMjc3IDg0LjU4MjEgNDMzIDY1LjczNiA3MjAgMjUuOTA4NkM5MzQuODE4IC0zLjkwMTkgMTIxNC4wNiAtNS4yMzY2OSAxNDQyIDguMDY1OTdDMjA3OSA0NS4yNDIxIDIyMDggNjMuNTAwNyAyNTYwIDI1LjkwODhWMTcxLjkxTDAgMTcxLjkxVjI1LjkwODZaO1xuICAgICAgICAgICAgICAgIE0wIDg2LjMxNDlDMzE2IDg2LjMxNSA0NDQgMTU5LjE1NSA4ODQgNTEuMTU1NEMxMzI0IC01Ni44NDQ2IDEzMjAuMjkgMzQuMTIxNCAxNTM4IDcwLjQwNjNDMTgxNCAxMTYuNDA3IDIxNTYgMTg4LjQwOCAyNTYwIDg2LjMxNVYyMzIuMzE3TDAgMjMyLjMxNlY4Ni4zMTQ5WjtcbiAgICAgICAgICAgICAgICBNMCA1My42NTg0QzE1OCAxMS4wMDAxIDIxMyAwIDM2MyAwQzUxMyAwIDg1NS41NTUgMTE1LjAwMSAxMTU0IDExNS4wMDFDMTQ0MCAxMTUuMDAxIDE2MjYgLTM4LjAwMDQgMjU2MCA1My42NTg1VjE5OS42NkwwIDE5OS42NlY1My42NTg0WjtcbiAgICAgICAgICAgICAgICBNMCAyNS45MDg2QzI3NyA4NC41ODIxIDQzMyA2NS43MzYgNzIwIDI1LjkwODZDOTM0LjgxOCAtMy45MDE5IDEyMTQuMDYgLTUuMjM2NjkgMTQ0MiA4LjA2NTk3QzIwNzkgNDUuMjQyMSAyMjA4IDYzLjUwMDcgMjU2MCAyNS45MDg4VjE3MS45MUwwIDE3MS45MVYyNS45MDg2WlxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGVyby1zZWN0aW9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVyby1jb250YWluZXIgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBoZWxsby1hbmltYXRpb24gMi41cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAuaGVyby1jb250YWluZXIgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZXJvLWNvbnRhaW5lciBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgaGVsbG8tYW5pbWF0aW9uIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdfQ== */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/nhatdinh-nextjs/components/Hero.js */"));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=index.js.c5857266014570550d7d.hot-update.js.map