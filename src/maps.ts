import { TMap } from './types'

const getSymbolIndexFunc = (symbols: Array<string>) => {
  return (nextLetter: string): number => {
    return nextLetter && symbols.includes(nextLetter.toLocaleUpperCase()) ? 1 : 0
  }
} 

const map: TMap = {
  "7.79-2000": {
    "А": {
      "ru": { symbols: ["a"] },
      "be": { symbols: ["a"] },
      "uk": { symbols: ["a"] },
      "bg": { symbols: ["a"] },
      "mk": { symbols: ["a"] },
    },
    "Б": {
      "ru": { symbols: ["b"] },
      "be": { symbols: ["b"] },
      "uk": { symbols: ["b"] },
      "bg": { symbols: ["b"] },
      "mk": { symbols: ["b"] },
    },
    "В": {
      "ru": { symbols: ["v"] },
      "be": { symbols: ["v"] },
      "uk": { symbols: ["v"] },
      "bg": { symbols: ["v"] },
      "mk": { symbols: ["v"] },
    },
    "Г": {
      "ru": { symbols: ["g"] },
      "be": { symbols: ["g"] },
      "uk": { symbols: ["g"] },
      "bg": { symbols: ["g"] },
      "mk": { symbols: ["g"] },
    },
    "Ѓ": {
      "ru": { symbols: [] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: [] },
      "mk": { symbols: ["g'"] },
    },
    "Д": {
      "ru": { symbols: ["d"] },
      "be": { symbols: ["d"] },
      "uk": { symbols: ["d"] },
      "bg": { symbols: ["d"] },
      "mk": { symbols: ["d"] },
    },
    "Е": {
      "ru": { symbols: ["e"] },
      "be": { symbols: ["e"] },
      "uk": { symbols: ["e"] },
      "bg": { symbols: ["e"] },
      "mk": { symbols: ["e"] },
    },
    "Ё": {
      "ru": { symbols: ["yo"] },
      "be": { symbols: ["yo"] },
      "uk": { symbols: [] },
      "bg": { symbols: [] },
      "mk": { symbols: [] },
    },
    "Є": {
      "ru": { symbols: [] },
      "be": { symbols: [] },
      "uk": { symbols: ["ye"] },
      "bg": { symbols: [] },
      "mk": { symbols: [] },
    },
    "Ж": {
      "ru": { symbols: ["zh"] },
      "be": { symbols: ["zh"] },
      "uk": { symbols: ["zh"] },
      "bg": { symbols: ["zh"] },
      "mk": { symbols: ["zh"] },
    },
    "З": {
      "ru": { symbols: ["z"] },
      "be": { symbols: ["z"] },
      "uk": { symbols: ["z"] },
      "bg": { symbols: ["z"] },
      "mk": { symbols: ["z"] },
    },
    "Ѕ": {
      "ru": { symbols: [] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: [] },
      "mk": { symbols: ["z'"] },
    },
    "И": {
      "ru": { symbols: ["i"] },
      "be": { symbols: [] },
      "uk": { symbols: ["y'"] },
      "bg": { symbols: ["i"] },
      "mk": { symbols: ["i"] },
    },
    "Й": {
      "ru": { symbols: ["j"] },
      "be": { symbols: ["j"] },
      "uk": { symbols: ["j"] },
      "bg": { symbols: ["j"] },
      "mk": { symbols: ["j"] },
    },
    "Ј": {
      "ru": { symbols: [] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: [] },
      "mk": { symbols: ["j"] },
    },
    "I": {
      "ru": {
        symbols: ["i","i'"],
        getSymbolIndex: getSymbolIndexFunc(["Б", "В", "Г", "Д", "Ж", "З", "Й", "К", "Л", "М", "Н", "П", "Р", "С", "Т", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ѳ"]),
      },
      "be": { symbols: ["i"] },
      "uk": { symbols: ["i"] },
      "bg": {
        symbols: ["i","i'"],
        getSymbolIndex: getSymbolIndexFunc(["Б", "В", "Г", "Д", "Ж", "З", "Й", "К", "Л", "М", "Н", "П", "Р", "С", "Т", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ѳ"]),
      },
      "mk": { symbols: [] },
    },
    "Ї": {
      "ru": { symbols: [] },
      "be": { symbols: [] },
      "uk": { symbols: ["yi"] },
      "bg": { symbols: [] },
      "mk": { symbols: [] },
    },
    "К": {
      "ru": { symbols: ["k"] },
      "be": { symbols: ["k"] },
      "uk": { symbols: ["k"] },
      "bg": { symbols: ["k"] },
      "mk": { symbols: ["k"] },
    },
    "Ќ": {
      "ru": { symbols: [] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: [] },
      "mk": { symbols: ["k'"] },
    },
    "Л": {
      "ru": { symbols: ["l"] },
      "be": { symbols: ["l"] },
      "uk": { symbols: ["l"] },
      "bg": { symbols: ["l"] },
      "mk": { symbols: ["l"] },
    },
    "Љ": {
      "ru": { symbols: [] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: [] },
      "mk": { symbols: ["l'"] },
    },
    "М": {
      "ru": { symbols: ["m"] },
      "be": { symbols: ["m"] },
      "uk": { symbols: ["m"] },
      "bg": { symbols: ["m"] },
      "mk": { symbols: ["m"] },
    },
    "Н": {
      "ru": { symbols: ["n"] },
      "be": { symbols: ["n"] },
      "uk": { symbols: ["n"] },
      "bg": { symbols: ["n"] },
      "mk": { symbols: ["n"] },
    },
    "Њ": {
      "ru": { symbols: [] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: [] },
      "mk": { symbols: ["n'"] },
    },
    "О": {
      "ru": { symbols: ["o"] },
      "be": { symbols: ["o"] },
      "uk": { symbols: ["o"] },
      "bg": { symbols: ["o"] },
      "mk": { symbols: ["o"] },
    },
    "П": {
      "ru": { symbols: ["p"] },
      "be": { symbols: ["p"] },
      "uk": { symbols: ["p"] },
      "bg": { symbols: ["p"] },
      "mk": { symbols: ["p"] },
    },
    "Р": {
      "ru": { symbols: ["r"] },
      "be": { symbols: ["r"] },
      "uk": { symbols: ["r"] },
      "bg": { symbols: ["r"] },
      "mk": { symbols: ["r"] },
    },
    "С": {
      "ru": { symbols: ["s"] },
      "be": { symbols: ["s"] },
      "uk": { symbols: ["s"] },
      "bg": { symbols: ["s"] },
      "mk": { symbols: ["s"] },
    },
    "Т": {
      "ru": { symbols: ["t"] },
      "be": { symbols: ["t"] },
      "uk": { symbols: ["t"] },
      "bg": { symbols: ["t"] },
      "mk": { symbols: ["t"] },
    },
    "У": {
      "ru": { symbols: ["u"] },
      "be": { symbols: ["u"] },
      "uk": { symbols: ["u"] },
      "bg": { symbols: ["u"] },
      "mk": { symbols: ["u"] },
    },
    "Ў": {
      "ru": { symbols: [] },
      "be": { symbols: ["u'"] },
      "uk": { symbols: [] },
      "bg": { symbols: [] },
      "mk": { symbols: [] },
    },
    "Ф": {
      "ru": { symbols: ["f"] },
      "be": { symbols: ["f"] },
      "uk": { symbols: ["f"] },
      "bg": { symbols: ["f"] },
      "mk": { symbols: ["f"] },
    },
    "Х": {
      "ru": { symbols: ["x"] },
      "be": { symbols: ["x"] },
      "uk": { symbols: ["x"] },
      "bg": { symbols: ["x"] },
      "mk": { symbols: ["x"] },
    },
    "Ц": {
      "ru": {
        symbols: ["cz", "c"],
        getSymbolIndex: getSymbolIndexFunc(["И", "I", "Е", "Э", "Ё", "Ы", "Ю", "Я", "Ѣ", "Ѵ"])
      },
      "be": {
        symbols: ["cz", "c"],
        getSymbolIndex: getSymbolIndexFunc(["I", "Е", "Э", "Ё", "Ы", "Ю", "Я"])
      },
      "uk": {
        symbols: ["cz", "c"],
        getSymbolIndex: getSymbolIndexFunc(["И", "I", "Е", "Ю", "Я"])
      },
      "bg": {
        symbols: ["cz", "c"],
        getSymbolIndex: getSymbolIndexFunc(["И", "I", "Е", "Ю", "Я", "Ѣ", "Ѵ"])
      },
      "mk": {
        symbols: ["cz", "c"],
        getSymbolIndex: getSymbolIndexFunc(["И", "Е"])
      },
    },
    "Ч": {
      "ru": { symbols: ["ch"] },
      "be": { symbols: ["ch"] },
      "uk": { symbols: ["ch"] },
      "bg": { symbols: ["ch"] },
      "mk": { symbols: ["ch"] },
    },
    "Џ": {
      "ru": { symbols: [] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: [] },
      "mk": { symbols: ["dh"] },
    },
    "Ш": {
      "ru": { symbols: ["sh"] },
      "be": { symbols: ["sh"] },
      "uk": { symbols: ["sh"] },
      "bg": { symbols: ["sh"] },
      "mk": { symbols: ["sh"] },
    },
    "а": {
      "ru": { symbols: [] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: [] },
      "mk": { symbols: [] },
    },
    "Щ": {
      "ru": { symbols: ["shh"] },
      "be": { symbols: [] },
      "uk": { symbols: ["shh"] },
      "bg": { symbols: ["sth"] },
      "mk": { symbols: [] },
    },
    "Ъ": {
      "ru": { symbols: ["''"] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: ["a'"] },
      "mk": { symbols: [] },
    },
    "Ы": {
      "ru": { symbols: ["y'"] },
      "be": { symbols: ["y'"] },
      "uk": { symbols: [] },
      "bg": { symbols: [] },
      "mk": { symbols: [] },
    },
    "Ь": {
      "ru": { symbols: ["'"] },
      "be": { symbols: ["'"] },
      "uk": { symbols: ["'"] },
      "bg": { symbols: ["'"] },
      "mk": { symbols: [] },
    },
    "Э": {
      "ru": { symbols: ["e'"] },
      "be": { symbols: ["e'"] },
      "uk": { symbols: [] },
      "bg": { symbols: [] },
      "mk": { symbols: [] },
    },
    "Ю": {
      "ru": { symbols: ["yu"] },
      "be": { symbols: ["yu"] },
      "uk": { symbols: ["yu"] },
      "bg": { symbols: ["yu"] },
      "mk": { symbols: [] },
    },
    "Я": {
      "ru": { symbols: ["ya"] },
      "be": { symbols: ["ya"] },
      "uk": { symbols: ["ya"] },
      "bg": { symbols: ["ya"] },
      "mk": { symbols: [] },
    },
    "Ѣ": {
      "ru": { symbols: ["ye"] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: ["ye"] },
      "mk": { symbols: [] },
    },
    "Ѳ": {
      "ru": { symbols: ["fh"] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: ["fh"] },
      "mk": { symbols: [] },
    },
    "Ѵ": {
      "ru": { symbols: ["yh"] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: ["yh"] },
      "mk": { symbols: [] },
    },
    "Ѫ": {
      "ru": { symbols: [] },
      "be": { symbols: [] },
      "uk": { symbols: [] },
      "bg": { symbols: ["o'"] },
      "mk": { symbols: [] },
    },
  }
}

export default map
