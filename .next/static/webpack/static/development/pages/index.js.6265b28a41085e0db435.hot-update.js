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
        className: "jsx-1541495846" + " " + "hero-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1541495846" + " " + ((this.state.dark_mode ? "dark-mode" : "light-mode") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1541495846" + " " + "m-container hero-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1541495846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Hi \uD83D\uDC4B\uD83C\uDFFC, I'm Nhat & I'm a Front-End Developer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1541495846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "I'm passionate about designing and building beautifully-crafted software applications.", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-1541495846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.toggleMode,
        className: "jsx-1541495846" + " " + "action-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "DARK MODE")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1541495846" + " " + "waves-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        width: "100vw",
        height: "100%",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "jsx-1541495846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
        fill: "white",
        className: "jsx-1541495846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("animate", {
        repeatCount: "indefinite",
        fill: "freeze",
        attributeName: "d",
        dur: "4s",
        values: "M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z ",
        className: "jsx-1541495846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1541495846",
        __self: this
      }, ".hero-container.jsx-1541495846{height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.hero-container.jsx-1541495846 h1.jsx-1541495846{font-size:50px;-webkit-animation:hello-animation-jsx-1541495846 2.5s;animation:hello-animation-jsx-1541495846 2.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;opacity:0;}@media (max-width:640px){.hero-container.jsx-1541495846 h1.jsx-1541495846{font-size:34px;}.hero-container.jsx-1541495846 p.jsx-1541495846{font-size:26px;}}@-webkit-keyframes hello-animation-jsx-1541495846{0%{opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}@keyframes hello-animation-jsx-1541495846{0%{opacity:0;-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{opacity:1;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL25oYXRkaW5oLW5leHRqcy9jb21wb25lbnRzL0hlcm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RvQixBQUcwQixBQU1FLEFBT0UsQUFJQSxBQU1MLEFBSUEsVUFIaUIsQUFJRCxHQTNCaEIsRUFNbUIsQUFPL0IsQUFJQSxVQWhCYSwwRUFFZixDQXlCRSxHQUpBLFlBakI2QixrRUFDbkIsVUFDWiIsImZpbGUiOiIvVXNlcnMvTmhhdC9EZXNrdG9wL0dpdGh1Yi9uaGF0ZGluaC1uZXh0anMvY29tcG9uZW50cy9IZXJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBIZXJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhcmtfbW9kZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgdG9nZ2xlTW9kZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGFya19tb2RlOiAhdGhpcy5zdGF0ZS5kYXJrX21vZGUgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmRhcmtfbW9kZSA/IFwiZGFyay1tb2RlXCIgOiBcImxpZ2h0LW1vZGVcIn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWNvbnRhaW5lciBoZXJvLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMT5IaSDwn5GL8J+PvCwgSSdtIE5oYXQgJiBJJ20gYSBGcm9udC1FbmQgRGV2ZWxvcGVyPC9oMT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJJ20gcGFzc2lvbmF0ZSBhYm91dCBkZXNpZ25pbmcgYW5kIGJ1aWxkaW5nIGJlYXV0aWZ1bGx5LWNyYWZ0ZWRcbiAgICAgICAgICAgICAgc29mdHdhcmUgYXBwbGljYXRpb25zLlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ0blwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kZX0+XG4gICAgICAgICAgICAgIERBUksgTU9ERVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDB2d1wiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwid2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJmcmVlemVcIlxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cImRcIlxuICAgICAgICAgICAgICAgICAgZHVyPVwiNHNcIlxuICAgICAgICAgICAgICAgICAgdmFsdWVzPVwiTTAgMjUuOTA4NkMyNzcgODQuNTgyMSA0MzMgNjUuNzM2IDcyMCAyNS45MDg2QzkzNC44MTggLTMuOTAxOSAxMjE0LjA2IC01LjIzNjY5IDE0NDIgOC4wNjU5N0MyMDc5IDQ1LjI0MjEgMjIwOCA2My41MDA3IDI1NjAgMjUuOTA4OFYxNzEuOTFMMCAxNzEuOTFWMjUuOTA4Nlo7XG4gICAgICAgICAgICAgICAgTTAgODYuMzE0OUMzMTYgODYuMzE1IDQ0NCAxNTkuMTU1IDg4NCA1MS4xNTU0QzEzMjQgLTU2Ljg0NDYgMTMyMC4yOSAzNC4xMjE0IDE1MzggNzAuNDA2M0MxODE0IDExNi40MDcgMjE1NiAxODguNDA4IDI1NjAgODYuMzE1VjIzMi4zMTdMMCAyMzIuMzE2Vjg2LjMxNDlaO1xuICAgICAgICAgICAgICAgIE0wIDUzLjY1ODRDMTU4IDExLjAwMDEgMjEzIDAgMzYzIDBDNTEzIDAgODU1LjU1NSAxMTUuMDAxIDExNTQgMTE1LjAwMUMxNDQwIDExNS4wMDEgMTYyNiAtMzguMDAwNCAyNTYwIDUzLjY1ODVWMTk5LjY2TDAgMTk5LjY2VjUzLjY1ODRaO1xuICAgICAgICAgICAgICAgIE0wIDI1LjkwODZDMjc3IDg0LjU4MjEgNDMzIDY1LjczNiA3MjAgMjUuOTA4NkM5MzQuODE4IC0zLjkwMTkgMTIxNC4wNiAtNS4yMzY2OSAxNDQyIDguMDY1OTdDMjA3OSA0NS4yNDIxIDIyMDggNjMuNTAwNyAyNTYwIDI1LjkwODhWMTcxLjkxTDAgMTcxLjkxVjI1LjkwODZaXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGVyby1jb250YWluZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlcm8tY29udGFpbmVyIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogaGVsbG8tYW5pbWF0aW9uIDIuNXM7XG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgLmhlcm8tY29udGFpbmVyIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVyby1jb250YWluZXIgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIGhlbGxvLWFuaW1hdGlvbiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXX0= */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/nhatdinh-nextjs/components/Hero.js */"));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=index.js.6265b28a41085e0db435.hot-update.js.map