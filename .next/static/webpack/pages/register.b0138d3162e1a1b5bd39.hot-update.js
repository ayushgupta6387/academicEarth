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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJzdWNjZXNzIiwiYnV0dG9uVGV4dCIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJ0YWJsZSIsInJlZ2lzdGVyRm9ybSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkI7QUFDQTtBQUhtQixrQkFJT0Msc0RBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFLEVBRHlCO0FBRS9CQyxTQUFLLEVBQUUsRUFGd0I7QUFHL0JDLFlBQVEsRUFBRSxFQUhxQjtBQUkvQjtBQUNBQyxTQUFLLEVBQUUsRUFMd0I7QUFNL0I7QUFDQUMsV0FBTyxFQUFFLEVBUHNCO0FBUS9CO0FBQ0FDLGNBQVUsRUFBRTtBQVRtQixHQUFELENBSmY7QUFBQSxNQUlaQyxLQUpZO0FBQUEsTUFJTEMsUUFKSyxpQkFpQm5COzs7QUFqQm1CLE1Ba0JaUCxJQWxCWSxHQWtCeUNNLEtBbEJ6QyxDQWtCWk4sSUFsQlk7QUFBQSxNQWtCTkMsS0FsQk0sR0FrQnlDSyxLQWxCekMsQ0FrQk5MLEtBbEJNO0FBQUEsTUFrQkNDLFFBbEJELEdBa0J5Q0ksS0FsQnpDLENBa0JDSixRQWxCRDtBQUFBLE1Ba0JXQyxLQWxCWCxHQWtCeUNHLEtBbEJ6QyxDQWtCV0gsS0FsQlg7QUFBQSxNQWtCa0JDLE9BbEJsQixHQWtCeUNFLEtBbEJ6QyxDQWtCa0JGLE9BbEJsQjtBQUFBLE1Ba0IyQkMsVUFsQjNCLEdBa0J5Q0MsS0FsQnpDLENBa0Iy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QTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRO0FBQUssT0FBRyxFQUFFLGdCQUFWO0FBQTRCLE9BQUcsRUFBQyxXQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFIsRUFFUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRlIsRUFHUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhSLEVBSVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKUixFQUtRO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTSxpQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxSLENBREEsRUFRSTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdLVyxZQUFZLEVBSGpCLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0tDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWixLQUFmLENBTEwsQ0FSSixDQURBLENBREEsQ0FEQTtBQXNCSCxDQWxGRDs7R0FBTVIsUTs7S0FBQUEsUTtBQW9GU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuYjAxMzhkMzE2MmUxYTFiNWJkMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcbi8vIGltcG9ydCBleWVzIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvcjEuanBnJztcclxuXHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuXHJcbiAgICAvLyB1c2luZyBob29rc1xyXG4gICAgLy8gYXJyYXkgZGVzdHJ1Y3R1cmluZ1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAvLyBpZiB0d28gdXNlciB0cnkgdG8gcmVnaXN0ZXIgd2l0aCBzYW1lIGVtYWlsIHRoZW4gd2Ugd2lsbCBnaXZlIGVycm9yXHJcbiAgICAgICAgZXJyb3I6ICcnLFxyXG4gICAgICAgIC8vIGFmdGVyIHJlZ2lzdGVyaW5nIHdlIHdpbGwgZ2l2ZSBzdWNjZXNzIG1zZ1xyXG4gICAgICAgIHN1Y2Nlc3M6ICcnLFxyXG4gICAgICAgIC8vIHdlIHdpbGwgY2hhbmdlIGR5bmFtaWNhbGx5IGJ1dHRvbiB0ZXh0XHJcbiAgICAgICAgYnV0dG9uVGV4dDogJ1JlZ2lzdGVyIE1lJ1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG5vdyB3ZSB1c2UgZGlyZWN0bHkgbGlrZSBidXR0b25UZXh0IGluIGZvcm0gd2hlcmUgYnV0dG4gY3JlYXRlZFxyXG4gICAgY29uc3Qge25hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIHN1Y2Nlc3MsIGJ1dHRvblRleHR9ID0gc3RhdGU7XHJcblxyXG4vLyB1c2luZyBmdW5jdGlvbiBpbnNpZGUgYW5vdGhlciBmdW5jdGlvbiBlIGlzIGFuIGV2ZW50XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZSkgPT4gKGUpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIFtuYW1lXTogZS50YXJnZXQudmFsdWUsIGVycm9yOiAnJywgc3VjY2VzczogJycsIGJ1dHRvblRleHQ6ICdSZWdpc3RlciBNZSd9KVxyXG4gICAgfTtcclxuXHJcbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgLy8gdG8gcHJldmVudCByZWxvYWRpbmcgb2YgcGFnZVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS50YWJsZShuYW1lLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG59XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCByZWdpc3RlckZvcm0gPSAoKSA9PiBcclxuICAgIDxmb3JtIGNsYXNzTmFtZSBvblN1Ym1pdCA9IHtoYW5kbGVTdWJtaXR9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsMVwiIGZvcj1cIlwiPlVzZXJOYW1lPC9sYWJlbD5cclxuICAgICAgICB7LyogYnkgcGFzc2luZyBwYXJhbS4gaW4gb2hhbmRsZWhhbmdlIGZ1bmMuIHdlIHdpbGwga25vdyBmcm9tIHdoZXJlIGl0IGlzIGNvbWluZyhmcm9tIG5hbWUgb3IgZW1haWwuLi4pICAqL31cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCduYW1lJyl9ICB2YWx1ZT17bmFtZX0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJpbnB1dCBmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgWW91ciBuYW1lXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsMVwiIGZvcj1cIlwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfSB2YWx1ZT17ZW1haWx9IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImlucHV0IGZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBZb3VyIGVtYWlsXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwxXCIgZm9yPVwiXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFzc3dvcmQnKX0gdmFsdWU9e3Bhc3N3b3JkfSB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJpbnB1dCBmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgWW91ciBwYXNzd29yZFwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZvcm1idG4gYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmdcIj57YnV0dG9uVGV4dH08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgIDxMYXlvdXQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgcmVnaXN0ZXItbGVmdFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17XCIvaW1hZ2VzL3IxLmpwZ1wifSBhbHQ9XCJpbWFnZUhlcmVcIiAvPlxyXG4gICAgICAgICAgICA8aDM+Sm9pbiBVczwvaDM+XHJcbiAgICAgICAgICAgIDxoMT5BY2FkZW1pYyBFYXJ0aDwvaDE+XHJcbiAgICAgICAgICAgIDxwPkUtbGVhcm5pbmcgUGxhdGZvcm08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QWJvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsIGNvbC1tZC03IHJlZ2lzdGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxoMT5SZWdpc3RlciBIZXJlPC9oMT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHtyZWdpc3RlckZvcm0oKX1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShzdGF0ZSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiXSwic291cmNlUm9vdCI6IiJ9