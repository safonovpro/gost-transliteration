"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Output = function (prop) {
    return (react_1.default.createElement("div", { className: "form-group" },
        react_1.default.createElement("label", null, prop.label),
        react_1.default.createElement("textarea", { className: "form-control", value: prop.value, disabled: true })));
};
exports.default = Output;
