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
      className: "label",
      "for": "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }
    }), __jsx("input", {
      type: "text",
      value: name,
      onChange: handleChange('name'),
      className: "input form-control",
      placeholder: "Type Your Email",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJoYW5kbGVDaGFuZ2UiLCJzaWduaW5Gb3JtIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFFcEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSyxDQUFFLENBQTVCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FDbkI7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsY0FBUSxFQUFFRCxZQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBTyxlQUFTLEVBQUMsUUFBakI7QUFBMEIsYUFBSSxFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUk7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixXQUFLLEVBQUVFLElBQTFCO0FBQWdDLGNBQVEsRUFBRUYsWUFBWSxDQUFDLE1BQUQsQ0FBdEQ7QUFBZ0UsZUFBUyxFQUFDLG9CQUExRTtBQUErRixpQkFBVyxFQUFDLGlCQUEzRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FEQSxFQUtBO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQU8sZUFBUyxFQUFDLE9BQWpCO0FBQXlCLGFBQUksRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUk7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixXQUFLLEVBQUVFLElBQTFCO0FBQWdDLGNBQVEsRUFBRUYsWUFBWSxDQUFDLE1BQUQsQ0FBdEQ7QUFBZ0UsZUFBUyxFQUFDLG9CQUExRTtBQUErRixpQkFBVyxFQUFDLGlCQUEzRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FMQSxDQURtQjtBQUFBLEdBQW5COztBQVlJLFNBQU8sTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1g7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRO0FBQUssT0FBRyxFQUFFLGdCQUFWO0FBQTRCLE9BQUcsRUFBQyxXQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFIsRUFFUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZSLEVBR1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIUixFQUlRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSlIsRUFLUTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU0saUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMUixDQURBLEVBUUk7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHS0MsVUFBVSxFQUhmLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBUkosQ0FESixDQURXLENBQVA7QUFvQkgsQ0FwQ0Q7O0tBQU1GLEs7QUFzQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjYzY2M0NjgwOTliOGFmYTk1MGFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5cclxuLy8gYnkgc2VhcmNoaW5nIGxpa2UgaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luIHdlIHdpbGwgZ2V0IHRoaXMgcGFnZSBvciBhbnkgb3RoZXIgcGFnZSBqdXN0IHdyaXRlIG5hbWUgb2YgZmlsZVxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbmNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+e31cclxuXHJcbmNvbnN0IHNpZ25pbkZvcm0gPSAoKSA9PlxyXG48Zm9ybSBjbGFzc05hbWUgb25TdWJtaXQ9e2hhbmRsZUNoYW5nZX0+XHJcbjxkaXYgY2xhc3NOYW1lPVwiZm9ybSBncm91cFwiPlxyXG4gICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsMVwiIGZvcj1cIlwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfSBjbGFzc05hbWU9XCJpbnB1dCBmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgWW91ciBFbWFpbFwiIC8+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImZvcm0gZ3JvdXBcIj5cclxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGZvcj1cIlwiPjwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfSBjbGFzc05hbWU9XCJpbnB1dCBmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlR5cGUgWW91ciBFbWFpbFwiIC8+XHJcbjwvZGl2PlxyXG48L2Zvcm0+XHJcblxyXG4gICAgcmV0dXJuIDxMYXlvdXQ+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNSByZWdpc3Rlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9pbWFnZXMvcjEuanBnXCJ9IGFsdD1cImltYWdlSGVyZVwiIC8+XHJcbiAgICAgICAgICAgIDxoMz5Mb2cgaW4gZm9yIG1vcmUgZnVuITwvaDM+XHJcbiAgICAgICAgICAgIDxoMT5BY2FkZW1pYyBFYXJ0aDwvaDE+XHJcbiAgICAgICAgICAgIDxwPkUtbGVhcm5pbmcgUGxhdGZvcm08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QWJvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsIGNvbC1tZC03IHJlZ2lzdGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxoMT5Mb2dpbiBIZXJlPC9oMT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHtzaWduaW5Gb3JtKCl9XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KHN0YXRlKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9