export type TGost = '7.79-2000'

export type TLang = 'ru' | 'be' | 'uk' | 'bg' | 'mk'

export type TMap = {
  [gost: string]: {
    [symbol: string]: {
      [lang: string]: {
        symbols: Array<string>,
        getSymbolIndex?: (nextLetter: string) => number
      }
    }
  }
}
