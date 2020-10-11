webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
var _this = undefined,
    _jsxFileName = "A:\\react_Project\\pages\\login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // by searching like http://localhost:3000/login we will get this page or any other page just write name of file

var Login = function Login() {
  var handleChange = function handleChange() {};

  var signinForm = function signinForm() {
    return __jsx("form", {
      className: true,
      onSubmit: handleChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 1
      }
    }, __jsx("div", {
      className: "form group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 1
      }
    }, __jsx("label", {
      className: "label1",
      "for": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }
    }, "E-mail"), __jsx("input", {
      type: "text",
      value: name,
      onChange: handleChange('name'),
      className: "input form-control",
      placeholder: "Type Your Email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }
    })), __jsx("div", {
      className: "form group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 1
      }
    }, __jsx("label", {
      className: "label1",
      "for": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }
    }, "Password"), __jsx("input", {
      type: "text",
      value: name,
      onChange: handleChange('name'),
      className: "input form-control",
      placeholder: "Type Your Password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }
    })));
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-5 register-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/images/r1.jpg",
    alt: "imageHere",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Log in for more fun!"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Academic Earth"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "E-learning Platform"), __jsx("button", {
    type: "button",
    "class": "btn btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "About")), __jsx("div", {
    className: "full col-md-7 register-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Login Here"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), signinForm(), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })))));
};

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJoYW5kbGVDaGFuZ2UiLCJzaWduaW5Gb3JtIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFFcEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSyxDQUFFLENBQTVCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FDbkI7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsY0FBUSxFQUFFRCxZQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBTyxlQUFTLEVBQUMsUUFBakI7QUFBMEIsYUFBSSxFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUk7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixXQUFLLEVBQUVFLElBQTFCO0FBQWdDLGNBQVEsRUFBRUYsWUFBWSxDQUFDLE1BQUQsQ0FBdEQ7QUFBZ0UsZUFBUyxFQUFDLG9CQUExRTtBQUErRixpQkFBVyxFQUFDLGlCQUEzRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FEQSxFQUtBO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQU8sZUFBUyxFQUFDLFFBQWpCO0FBQTBCLGFBQUksRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsV0FBSyxFQUFFRSxJQUExQjtBQUFnQyxjQUFRLEVBQUVGLFlBQVksQ0FBQyxNQUFELENBQXREO0FBQWdFLGVBQVMsRUFBQyxvQkFBMUU7QUFBK0YsaUJBQVcsRUFBQyxvQkFBM0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBTEEsQ0FEbUI7QUFBQSxHQUFuQjs7QUFZSSxTQUFPLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNYO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUTtBQUFLLE9BQUcsRUFBRSxnQkFBVjtBQUE0QixPQUFHLEVBQUMsV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURSLEVBRVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGUixFQUdRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSFIsRUFJUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpSLEVBS1E7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFNLGlCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTFIsQ0FEQSxFQVFJO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0tDLFVBQVUsRUFIZixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQVJKLENBREosQ0FEVyxDQUFQO0FBb0JILENBcENEOztLQUFNRixLO0FBc0NTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5iMzFiNjAwOTRhZTMyZmQyNTA0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcclxuXHJcbi8vIGJ5IHNlYXJjaGluZyBsaWtlIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbiB3ZSB3aWxsIGdldCB0aGlzIHBhZ2Ugb3IgYW55IG90aGVyIHBhZ2UganVzdCB3cml0ZSBuYW1lIG9mIGZpbGVcclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcblxyXG5jb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9Pnt9XHJcblxyXG5jb25zdCBzaWduaW5Gb3JtID0gKCkgPT5cclxuPGZvcm0gY2xhc3NOYW1lIG9uU3VibWl0PXtoYW5kbGVDaGFuZ2V9PlxyXG48ZGl2IGNsYXNzTmFtZT1cImZvcm0gZ3JvdXBcIj5cclxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbDFcIiBmb3I9XCJcIj5FLW1haWw8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ25hbWUnKX0gY2xhc3NOYW1lPVwiaW5wdXQgZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJUeXBlIFlvdXIgRW1haWxcIiAvPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJmb3JtIGdyb3VwXCI+XHJcbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwxXCIgZm9yPVwiXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ25hbWUnKX0gY2xhc3NOYW1lPVwiaW5wdXQgZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJUeXBlIFlvdXIgUGFzc3dvcmRcIiAvPlxyXG48L2Rpdj5cclxuPC9mb3JtPlxyXG5cclxuICAgIHJldHVybiA8TGF5b3V0PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgcmVnaXN0ZXItbGVmdFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17XCIvaW1hZ2VzL3IxLmpwZ1wifSBhbHQ9XCJpbWFnZUhlcmVcIiAvPlxyXG4gICAgICAgICAgICA8aDM+TG9nIGluIGZvciBtb3JlIGZ1biE8L2gzPlxyXG4gICAgICAgICAgICA8aDE+QWNhZGVtaWMgRWFydGg8L2gxPlxyXG4gICAgICAgICAgICA8cD5FLWxlYXJuaW5nIFBsYXRmb3JtPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkFib3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbCBjb2wtbWQtNyByZWdpc3Rlci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8aDE+TG9naW4gSGVyZTwvaDE+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7c2lnbmluRm9ybSgpfVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShzdGF0ZSl9ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==