"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Select = function (prop) {
    var label = prop.label;
    return (react_1.default.createElement("div", { className: "form-group" },
        react_1.default.createElement("label", null, prop.label),
        react_1.default.createElement("select", { className: "form-control", onChange: function (event) { return prop.onChange(event.target.value); }, disabled: prop.items.length <= 1 }, prop.items.map(function (item, index) {
            return (react_1.default.createElement("option", { key: index, value: item.value }, item.title));
        }))));
};
exports.default = Select;
