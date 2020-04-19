import { TGost, TLang } from './types'
import maps from './maps'

const isInUpperCase = (value: string): boolean => (value === value.toLocaleUpperCase()) ? true : false

export function translit(input: string, lang: TLang = 'ru', gost: TGost = '7.79-2000'): string {
  const inputArray: Array<string> = input.split('')
  let countOfLetter: number = 0
  let countOfLetterInUpperCase: number = 0
  let result: string
  
  result = inputArray.map((letter: string, index: number): string => {
    if (!maps[gost][letter.toLocaleUpperCase()]) return letter
    if (maps[gost][letter.toLocaleUpperCase()][lang].symbols.length === 0) return ''

    const letterObj = maps[gost][letter.toLocaleUpperCase()][lang]
    let result: string = letterObj.symbols[0]

    countOfLetter += 1

    if (letterObj.symbols.length > 1 && letterObj.getSymbolIndex) {
      result = letterObj.symbols[letterObj.getSymbolIndex(input[index + 1])]
    }

    if (isInUpperCase(letter)) {
      result = result.split('').map((letter, i) => (i === 0) ? letter.toLocaleUpperCase() : letter).join('')
      countOfLetterInUpperCase += 1
    }
    
    return result
  }).join('')

  return (countOfLetter === countOfLetterInUpperCase) ? result.toLocaleUpperCase() : result
}
