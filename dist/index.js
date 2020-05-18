"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translit = void 0;
var maps_1 = __importDefault(require("./maps"));
var isInUpperCase = function (value) { return (value === value.toLocaleUpperCase()) ? true : false; };
function translit(input, lang, gost) {
    if (lang === void 0) { lang = 'ru'; }
    if (gost === void 0) { gost = '7.79-2000'; }
    var inputArray = input.split('');
    var countOfLetter = 0;
    var countOfLetterInUpperCase = 0;
    var result;
    result = inputArray.map(function (letter, index) {
        if (!maps_1.default[gost][letter.toLocaleUpperCase()])
            return letter;
        if (maps_1.default[gost][letter.toLocaleUpperCase()][lang].symbols.length === 0)
            return '';
        var letterObj = maps_1.default[gost][letter.toLocaleUpperCase()][lang];
        var result = letterObj.symbols[0];
        countOfLetter += 1;
        if (index !== inputArray.length - 1 && letterObj.symbols.length > 1 && letterObj.getSymbolIndex) {
            for (var i = index + 1; i < inputArray.length; i += 1) {
                var nextLetter = inputArray[i];
                if (!maps_1.default[gost][nextLetter.toLocaleUpperCase()])
                    break;
                else {
                    var isNextLetterTransliterable = maps_1.default[gost][nextLetter.toLocaleUpperCase()][lang].symbols.length !== 0;
                    if (isNextLetterTransliterable) {
                        result = letterObj.symbols[letterObj.getSymbolIndex(nextLetter)];
                        break;
                    }
                }
            }
        }
        if (isInUpperCase(letter)) {
            result = result.split('').map(function (letter, i) { return (i === 0) ? letter.toLocaleUpperCase() : letter; }).join('');
            countOfLetterInUpperCase += 1;
        }
        return result;
    }).join('');
    return (countOfLetter === countOfLetterInUpperCase) ? result.toLocaleUpperCase() : result;
}
exports.translit = translit;
