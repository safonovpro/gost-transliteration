"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Select_1 = __importDefault(require("./Select"));
var Input_1 = __importDefault(require("./Input"));
var Output_1 = __importDefault(require("./Output"));
var index_1 = require("./../../index");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rules = [
            { value: '7.79-2000', title: 'ГОСТ 7.79-2000 (ISO 9-95)' },
        ];
        _this.langs = [
            { value: 'ru', title: 'Русский язык' },
            { value: 'be', title: 'Белорусский язык' },
            { value: 'uk', title: 'Украинский язык' },
            { value: 'bg', title: 'Болгарский язык' },
            { value: 'mk', title: 'Македонский язык' },
        ];
        _this.state = {
            rule: _this.rules[0].value,
            lang: _this.langs[0].value,
            input: '',
            output: '',
        };
        _this.handlerChangeRule = function (inputRule) {
            var input = _this.state.input;
            var lang = _this.state.lang;
            var rule = inputRule;
            _this.setState({
                rule: rule,
                output: index_1.translit(input, lang, rule),
            });
        };
        _this.handlerChangeLang = function (inputLang) {
            var input = _this.state.input;
            var lang = inputLang;
            var rule = _this.state.rule;
            _this.setState({
                lang: lang,
                output: index_1.translit(input, lang, rule),
            });
        };
        _this.handlerChangeInput = function (input) {
            var lang = _this.state.lang;
            var rule = _this.state.rule;
            _this.setState({
                input: input,
                output: index_1.translit(input, lang, rule),
            });
        };
        return _this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement("div", { id: "translit" },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col-sm-6" },
                    react_1.default.createElement(Select_1.default, { label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0442\u0440\u0430\u043D\u0441\u043B\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438", items: this.rules, onChange: this.handlerChangeRule })),
                react_1.default.createElement("div", { className: "col-sm-6" },
                    react_1.default.createElement(Select_1.default, { label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044F\u0437\u044B\u043A", items: this.langs, onChange: this.handlerChangeLang }))),
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col-sm-6" },
                    react_1.default.createElement(Input_1.default, { label: "\u0412\u0432\u043E\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442", value: this.state.input, onChange: this.handlerChangeInput })),
                react_1.default.createElement("div", { className: "col-sm-6" },
                    react_1.default.createElement(Output_1.default, { label: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u0440\u0430\u043D\u0441\u043B\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438", value: this.state.output })))));
    };
    return App;
}(react_1.Component));
exports.default = App;
