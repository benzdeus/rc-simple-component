"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: props === null || props === void 0 ? void 0 : props.onClick,
    className: props === null || props === void 0 ? void 0 : props.className
  }, props === null || props === void 0 ? void 0 : props.text);
}