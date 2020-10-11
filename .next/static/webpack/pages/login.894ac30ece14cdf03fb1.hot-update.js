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
    _jsxFileName = "A:\\react_Project\\pages\\login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // by searching like http://localhost:3000/login we will get this page or any other page just write name of file

var Login = function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    email: '',
    password: '',
    error: '',
    success: ''
  }),
      state = _useState[0],
      setState = _useState[1];

  var email = state.email,
      password = state.password;

  var handleChange = function handleChange() {};

  var handleSubmit = function handleSubmit() {};

  var signinForm = function signinForm() {
    return __jsx("form", {
      className: true,
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 1
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 1
      }
    }, __jsx("label", {
      className: "label1",
      "for": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }
    }, "E-mail"), __jsx("input", {
      type: "email",
      onChange: handleChange('email'),
      value: email,
      className: "input form-control",
      placeholder: "Type Your Email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 1
      }
    }, __jsx("label", {
      className: "label1",
      "for": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }
    }, "Password"), __jsx("input", {
      type: "password",
      onChange: handleChange('password'),
      className: "input form-control",
      placeholder: "Type Your Password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }
    })));
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-5 register-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/images/r1.jpg",
    alt: "imageHere",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Log in for more fun!"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Academic Earth"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "E-learning Platform"), __jsx("button", {
    type: "button",
    "class": "btn btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "About")), __jsx("div", {
    className: "full col-md-7 register-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Login Here"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), signinForm(), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })))));
};

_s(Login, "qocREfDVXM9mPKPAHx+p+Id0dDs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsInN1Y2Nlc3MiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0Iiwic2lnbmluRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFFVUMsc0RBQVEsQ0FBQztBQUMvQkMsU0FBSyxFQUFFLEVBRHdCO0FBRS9CQyxZQUFRLEVBQUUsRUFGcUI7QUFHL0JDLFNBQUssRUFBRSxFQUh3QjtBQUkvQkMsV0FBTyxFQUFFO0FBSnNCLEdBQUQsQ0FGbEI7QUFBQSxNQUVUQyxLQUZTO0FBQUEsTUFFRkMsUUFGRTs7QUFBQSxNQVNiTCxLQVRhLEdBU01JLEtBVE4sQ0FTYkosS0FUYTtBQUFBLE1BU05DLFFBVE0sR0FTTUcsS0FUTixDQVNOSCxRQVRNOztBQVdwQixNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFLLENBQUUsQ0FBNUI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSyxDQUFFLENBQTVCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FDbkI7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsY0FBUSxFQUFFRCxZQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBTyxlQUFTLEVBQUMsUUFBakI7QUFBMEIsYUFBSSxFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUk7QUFBTyxVQUFJLEVBQUMsT0FBWjtBQUFvQixjQUFRLEVBQUVELFlBQVksQ0FBQyxPQUFELENBQTFDO0FBQXFELFdBQUssRUFBRU4sS0FBNUQ7QUFBbUUsZUFBUyxFQUFDLG9CQUE3RTtBQUFrRyxpQkFBVyxFQUFDLGlCQUE5RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FEQSxFQUtBO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQU8sZUFBUyxFQUFDLFFBQWpCO0FBQTBCLGFBQUksRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQU8sVUFBSSxFQUFDLFVBQVo7QUFBdUIsY0FBUSxFQUFFTSxZQUFZLENBQUMsVUFBRCxDQUE3QztBQUEyRCxlQUFTLEVBQUMsb0JBQXJFO0FBQTBGLGlCQUFXLEVBQUMsb0JBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixDQUxBLENBRG1CO0FBQUEsR0FBbkI7O0FBWUEsU0FDSyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTDtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFBSyxPQUFHLEVBQUUsZ0JBQVY7QUFBNEIsT0FBRyxFQUFDLFdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUixFQUVRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRlIsRUFHUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhSLEVBSVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKUixFQUtRO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTSxpQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxSLENBREEsRUFRSTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdLRSxVQUFVLEVBSGYsRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FSSixDQURKLENBREssQ0FETDtBQXNCQyxDQWhERDs7R0FBTVYsSzs7S0FBQUEsSztBQWtEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uODk0YWMzMGVjZTE0Y2RmMDNmYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBieSBzZWFyY2hpbmcgbGlrZSBodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4gd2Ugd2lsbCBnZXQgdGhpcyBwYWdlIG9yIGFueSBvdGhlciBwYWdlIGp1c3Qgd3JpdGUgbmFtZSBvZiBmaWxlXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgIHN1Y2Nlc3M6ICcnXHJcbiAgICB9KVxyXG5cclxuY29uc3Qge2VtYWlsLCBwYXNzd29yZH0gPSBzdGF0ZTtcclxuICAgIFxyXG5jb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9Pnt9O1xyXG5jb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9Pnt9O1xyXG5cclxuY29uc3Qgc2lnbmluRm9ybSA9ICgpID0+XHJcbjxmb3JtIGNsYXNzTmFtZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwxXCIgZm9yPVwiXCI+RS1tYWlsPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfSB2YWx1ZT17ZW1haWx9IGNsYXNzTmFtZT1cImlucHV0IGZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBZb3VyIEVtYWlsXCIgLz5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsMVwiIGZvcj1cIlwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfSBjbGFzc05hbWU9XCJpbnB1dCBmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgWW91ciBQYXNzd29yZFwiIC8+XHJcbjwvZGl2PlxyXG48L2Zvcm0+XHJcblxyXG5yZXR1cm4oXHJcbiAgICAgPExheW91dD5cclxuPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IHJlZ2lzdGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e1wiL2ltYWdlcy9yMS5qcGdcIn0gYWx0PVwiaW1hZ2VIZXJlXCIgLz5cclxuICAgICAgICAgICAgPGgzPkxvZyBpbiBmb3IgbW9yZSBmdW4hPC9oMz5cclxuICAgICAgICAgICAgPGgxPkFjYWRlbWljIEVhcnRoPC9oMT5cclxuICAgICAgICAgICAgPHA+RS1sZWFybmluZyBQbGF0Zm9ybTwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5BYm91dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwgY29sLW1kLTcgcmVnaXN0ZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPGgxPkxvZ2luIEhlcmU8L2gxPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAge3NpZ25pbkZvcm0oKX1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9