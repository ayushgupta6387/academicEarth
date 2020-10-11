webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");


var _this = undefined,
    _jsxFileName = "A:\\react_Project\\pages\\register.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import eyes from '../public/images/r1.jpg';

var Register = function Register() {
  _s();

  // using hooks
  // array destructuring
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    email: '',
    password: '',
    // if two user try to register with same email then we will give error
    error: '',
    // after registering we will give success msg
    success: '',
    // we will change dynamically button text
    buttonText: 'Register Me'
  }),
      state = _useState[0],
      setState = _useState[1]; // now we use directly like buttonText in form where buttn created


  var name = state.name,
      email = state.email,
      password = state.password,
      error = state.error,
      success = state.success,
      buttonText = state.buttonText; // using function inside another function e is an event

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, name, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "error", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "success", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "buttonText", 'Register Me'), _objectSpread2)));
    };
  };

  var handleSubmit = function handleSubmit(e) {
    // to prevent reloading of page
    e.preventDefault();
    console.table(name, email, password);
  };

  var registerForm = function registerForm() {
    return __jsx("form", {
      className: true,
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, __jsx("label", {
      className: "label1",
      "for": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, "UserName"), __jsx("input", {
      onChange: handleChange('name'),
      value: name,
      type: "text",
      className: "input form-control",
      placeholder: "Type Your name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("label", {
      className: "label1",
      "for": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, "E-mail"), __jsx("input", {
      onChange: handleChange('email'),
      value: email,
      type: "email",
      className: "input form-control",
      placeholder: "Type Your email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx("label", {
      className: "label1",
      "for": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, "Password"), __jsx("input", {
      onChange: handleChange('password'),
      value: password,
      type: "password",
      className: "input form-control",
      placeholder: "Type Your password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, __jsx("button", {
      className: "formbtn btn btn-outline-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, buttonText)), __jsx("div", {
      className: "form-group forgot",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }, "Forgot Password?")));
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-5 register-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/images/r1.jpg",
    alt: "imageHere",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Join Us"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "Academic Earth"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "E-learning Platform"), __jsx("button", {
    type: "button",
    "class": "btn btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "About")), __jsx("div", {
    className: "full col-md-7 register-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "Register Here"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), registerForm(), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), JSON.stringify(state)))));
};

_s(Register, "MJRib/f+F+4eOg9Oduy+w7GvsPY=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJzdWNjZXNzIiwiYnV0dG9uVGV4dCIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJ0YWJsZSIsInJlZ2lzdGVyRm9ybSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkI7QUFDQTtBQUhtQixrQkFJT0Msc0RBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFLEVBRHlCO0FBRS9CQyxTQUFLLEVBQUUsRUFGd0I7QUFHL0JDLFlBQVEsRUFBRSxFQUhxQjtBQUkvQjtBQUNBQyxTQUFLLEVBQUUsRUFMd0I7QUFNL0I7QUFDQUMsV0FBTyxFQUFFLEVBUHNCO0FBUS9CO0FBQ0FDLGNBQVUsRUFBRTtBQVRtQixHQUFELENBSmY7QUFBQSxNQUlaQyxLQUpZO0FBQUEsTUFJTEMsUUFKSyxpQkFpQm5COzs7QUFqQm1CLE1Ba0JaUCxJQWxCWSxHQWtCeUNNLEtBbEJ6QyxDQWtCWk4sSUFsQlk7QUFBQSxNQWtCTkMsS0FsQk0sR0FrQnlDSyxLQWxCekMsQ0FrQk5MLEtBbEJNO0FBQUEsTUFrQkNDLFFBbEJELEdBa0J5Q0ksS0FsQnpDLENBa0JDSixRQWxCRDtBQUFBLE1Ba0JXQyxLQWxCWCxHQWtCeUNHLEtBbEJ6QyxDQWtCV0gsS0FsQlg7QUFBQSxNQWtCa0JDLE9BbEJsQixHQWtCeUNFLEtBbEJ6QyxDQWtCa0JGLE9BbEJsQjtBQUFBLE1Ba0IyQkMsVUFsQjNCLEdBa0J5Q0MsS0FsQnpDLENBa0Iy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O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFBSyxPQUFHLEVBQUUsZ0JBQVY7QUFBNEIsT0FBRyxFQUFDLFdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUixFQUVRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUixFQUdRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSFIsRUFJUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpSLEVBS1E7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFNLGlCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTFIsQ0FEQSxFQVFJO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0tXLFlBQVksRUFIakIsRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLS0MsSUFBSSxDQUFDQyxTQUFMLENBQWVaLEtBQWYsQ0FMTCxDQVJKLENBREEsQ0FEQSxDQURBO0FBc0JILENBdEZEOztHQUFNUixROztLQUFBQSxRO0FBd0ZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci45MGExOTkxNWRhZWM5YTdlZmExMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuLy8gaW1wb3J0IGV5ZXMgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9yMS5qcGcnO1xyXG5cclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIHVzaW5nIGhvb2tzXHJcbiAgICAvLyBhcnJheSBkZXN0cnVjdHVyaW5nXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIC8vIGlmIHR3byB1c2VyIHRyeSB0byByZWdpc3RlciB3aXRoIHNhbWUgZW1haWwgdGhlbiB3ZSB3aWxsIGdpdmUgZXJyb3JcclxuICAgICAgICBlcnJvcjogJycsXHJcbiAgICAgICAgLy8gYWZ0ZXIgcmVnaXN0ZXJpbmcgd2Ugd2lsbCBnaXZlIHN1Y2Nlc3MgbXNnXHJcbiAgICAgICAgc3VjY2VzczogJycsXHJcbiAgICAgICAgLy8gd2Ugd2lsbCBjaGFuZ2UgZHluYW1pY2FsbHkgYnV0dG9uIHRleHRcclxuICAgICAgICBidXR0b25UZXh0OiAnUmVnaXN0ZXIgTWUnXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbm93IHdlIHVzZSBkaXJlY3RseSBsaWtlIGJ1dHRvblRleHQgaW4gZm9ybSB3aGVyZSBidXR0biBjcmVhdGVkXHJcbiAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgc3VjY2VzcywgYnV0dG9uVGV4dH0gPSBzdGF0ZTtcclxuXHJcbi8vIHVzaW5nIGZ1bmN0aW9uIGluc2lkZSBhbm90aGVyIGZ1bmN0aW9uIGUgaXMgYW4gZXZlbnRcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6ICcnLCBzdWNjZXNzOiAnJywgYnV0dG9uVGV4dDogJ1JlZ2lzdGVyIE1lJ30pXHJcbiAgICB9O1xyXG5cclxuY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XHJcbiAgICAvLyB0byBwcmV2ZW50IHJlbG9hZGluZyBvZiBwYWdlXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLnRhYmxlKG5hbWUsIGVtYWlsLCBwYXNzd29yZCk7XHJcbn1cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICgpID0+IFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lIG9uU3VibWl0ID0ge2hhbmRsZVN1Ym1pdH0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwxXCIgZm9yPVwiXCI+VXNlck5hbWU8L2xhYmVsPlxyXG4gICAgICAgIHsvKiBieSBwYXNzaW5nIHBhcmFtLiBpbiBvaGFuZGxlaGFuZ2UgZnVuYy4gd2Ugd2lsbCBrbm93IGZyb20gd2hlcmUgaXQgaXMgY29taW5nKGZyb20gbmFtZSBvciBlbWFpbC4uLikgICovfVxyXG5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ25hbWUnKX0gIHZhbHVlPXtuYW1lfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0IGZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBZb3VyIG5hbWVcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwxXCIgZm9yPVwiXCI+RS1tYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9IHZhbHVlPXtlbWFpbH0gdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiaW5wdXQgZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJUeXBlIFlvdXIgZW1haWxcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbDFcIiBmb3I9XCJcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfSB2YWx1ZT17cGFzc3dvcmR9IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImlucHV0IGZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBZb3VyIHBhc3N3b3JkXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZm9ybWJ0biBidG4gYnRuLW91dGxpbmUtd2FybmluZ1wiPntidXR0b25UZXh0fTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3Jnb3RcIj5cclxuICAgICAgICA8YSBocmVmPVwiXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Zvcm0+XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IHJlZ2lzdGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e1wiL2ltYWdlcy9yMS5qcGdcIn0gYWx0PVwiaW1hZ2VIZXJlXCIgLz5cclxuICAgICAgICAgICAgPGgzPkpvaW4gVXM8L2gzPlxyXG4gICAgICAgICAgICA8aDE+QWNhZGVtaWMgRWFydGg8L2gxPlxyXG4gICAgICAgICAgICA8cD5FLWxlYXJuaW5nIFBsYXRmb3JtPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkFib3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbCBjb2wtbWQtNyByZWdpc3Rlci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8aDE+UmVnaXN0ZXIgSGVyZTwvaDE+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7cmVnaXN0ZXJGb3JtKCl9XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==