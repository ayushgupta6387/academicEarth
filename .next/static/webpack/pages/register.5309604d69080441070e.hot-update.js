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
    e.preventDefault(); // console.table(name, email, password);
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
    }, buttonText)));
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-5 register-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/images/r1.jpg",
    alt: "imageHere",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Join Us"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Academic Earth"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "E-learning Platform"), __jsx("button", {
    type: "button",
    "class": "btn btn-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "About")), __jsx("div", {
    className: "full col-md-7 register-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Register Here"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }), registerForm(), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJzdWNjZXNzIiwiYnV0dG9uVGV4dCIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlZ2lzdGVyRm9ybSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkI7QUFDQTtBQUhtQixrQkFJT0Msc0RBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFLEVBRHlCO0FBRS9CQyxTQUFLLEVBQUUsRUFGd0I7QUFHL0JDLFlBQVEsRUFBRSxFQUhxQjtBQUkvQjtBQUNBQyxTQUFLLEVBQUUsRUFMd0I7QUFNL0I7QUFDQUMsV0FBTyxFQUFFLEVBUHNCO0FBUS9CO0FBQ0FDLGNBQVUsRUFBRTtBQVRtQixHQUFELENBSmY7QUFBQSxNQUlaQyxLQUpZO0FBQUEsTUFJTEMsUUFKSyxpQkFpQm5COzs7QUFqQm1CLE1Ba0JaUCxJQWxCWSxHQWtCeUNNLEtBbEJ6QyxDQWtCWk4sSUFsQlk7QUFBQSxNQWtCTkMsS0FsQk0sR0FrQnlDSyxLQWxCekMsQ0FrQk5MLEtBbEJNO0FBQUEsTUFrQkNDLFFBbEJELEdBa0J5Q0ksS0FsQnpDLENBa0JDSixRQWxCRDtBQUFBLE1Ba0JXQyxLQWxCWCxHQWtCeUNHLEtBbEJ6QyxDQWtCV0gsS0FsQlg7QUFBQSxNQWtCa0JDLE9BbEJsQixHQWtCeUNFLEtBbEJ6QyxDQWtCa0JGLE9BbEJsQjtBQUFBLE1Ba0IyQkMsVUFsQjNCLEdBa0J5Q0MsS0FsQnpDLENBa0IyQkQsVUFsQjNCLEVBb0J2Qjs7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QUEsS0FDUTtBQUFLLE9BQUcsRUFBRSxnQkFBVjtBQUE0QixPQUFHLEVBQUMsV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURSLEVBRVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZSLEVBR1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIUixFQUlRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSlIsRUFLUTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU0saUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMUixDQURBLEVBUUk7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHS1MsWUFBWSxFQUhqQixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtLQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVYsS0FBZixDQUxMLENBUkosQ0FEQSxDQURBLENBREE7QUFzQkgsQ0FsRkQ7O0dBQU1SLFE7O0tBQUFBLFE7QUFvRlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjUzMDk2MDRkNjkwODA0NDEwNzBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG4vLyBpbXBvcnQgZXllcyBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL3IxLmpwZyc7XHJcblxyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gdXNpbmcgaG9va3NcclxuICAgIC8vIGFycmF5IGRlc3RydWN0dXJpbmdcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgLy8gaWYgdHdvIHVzZXIgdHJ5IHRvIHJlZ2lzdGVyIHdpdGggc2FtZSBlbWFpbCB0aGVuIHdlIHdpbGwgZ2l2ZSBlcnJvclxyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICAvLyBhZnRlciByZWdpc3RlcmluZyB3ZSB3aWxsIGdpdmUgc3VjY2VzcyBtc2dcclxuICAgICAgICBzdWNjZXNzOiAnJyxcclxuICAgICAgICAvLyB3ZSB3aWxsIGNoYW5nZSBkeW5hbWljYWxseSBidXR0b24gdGV4dFxyXG4gICAgICAgIGJ1dHRvblRleHQ6ICdSZWdpc3RlciBNZSdcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBub3cgd2UgdXNlIGRpcmVjdGx5IGxpa2UgYnV0dG9uVGV4dCBpbiBmb3JtIHdoZXJlIGJ1dHRuIGNyZWF0ZWRcclxuICAgIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBzdWNjZXNzLCBidXR0b25UZXh0fSA9IHN0YXRlO1xyXG5cclxuLy8gdXNpbmcgZnVuY3Rpb24gaW5zaWRlIGFub3RoZXIgZnVuY3Rpb24gZSBpcyBhbiBldmVudFxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLCBlcnJvcjogJycsIHN1Y2Nlc3M6ICcnLCBidXR0b25UZXh0OiAnUmVnaXN0ZXIgTWUnfSlcclxuICAgIH07XHJcblxyXG5jb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgIC8vIHRvIHByZXZlbnQgcmVsb2FkaW5nIG9mIHBhZ2VcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUudGFibGUobmFtZSwgZW1haWwsIHBhc3N3b3JkKTtcclxufVxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgcmVnaXN0ZXJGb3JtID0gKCkgPT4gXHJcbiAgICA8Zm9ybSBjbGFzc05hbWUgb25TdWJtaXQgPSB7aGFuZGxlU3VibWl0fT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbDFcIiBmb3I9XCJcIj5Vc2VyTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgey8qIGJ5IHBhc3NpbmcgcGFyYW0uIGluIG9oYW5kbGVoYW5nZSBmdW5jLiB3ZSB3aWxsIGtub3cgZnJvbSB3aGVyZSBpdCBpcyBjb21pbmcoZnJvbSBuYW1lIG9yIGVtYWlsLi4uKSAgKi99XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfSAgdmFsdWU9e25hbWV9IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiaW5wdXQgZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJUeXBlIFlvdXIgbmFtZVwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbDFcIiBmb3I9XCJcIj5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX0gdmFsdWU9e2VtYWlsfSB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJpbnB1dCBmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgWW91ciBlbWFpbFwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsMVwiIGZvcj1cIlwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9IHZhbHVlPXtwYXNzd29yZH0gdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiaW5wdXQgZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJUeXBlIFlvdXIgcGFzc3dvcmRcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb3JtYnRuIGJ0biBidG4tb3V0bGluZS13YXJuaW5nXCI+e2J1dHRvblRleHR9PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IHJlZ2lzdGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e1wiL2ltYWdlcy9yMS5qcGdcIn0gYWx0PVwiaW1hZ2VIZXJlXCIgLz5cclxuICAgICAgICAgICAgPGgzPkpvaW4gVXM8L2gzPlxyXG4gICAgICAgICAgICA8aDE+QWNhZGVtaWMgRWFydGg8L2gxPlxyXG4gICAgICAgICAgICA8cD5FLWxlYXJuaW5nIFBsYXRmb3JtPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkFib3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbCBjb2wtbWQtNyByZWdpc3Rlci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8aDE+UmVnaXN0ZXIgSGVyZTwvaDE+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7cmVnaXN0ZXJGb3JtKCl9XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==