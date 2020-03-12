import { TGost, TLang, TMap } from './types'
import maps from './maps'

const isInUpperCase = (value: string): boolean => (value === value.toLocaleUpperCase()) ? true : false

export function transilt(input: string, lang: TLang = 'ru', gost: TGost = '7.79-2000'): string {
  const inputArray: Array<string> = input.split('')
  let countOfLetter: number = 0
  let countOfLetterInUpperCase: number = 0
  let result: string
  
  result = inputArray.map((letter: string): string => {
    if (!maps[gost][letter.toUpperCase()]) return letter
    if (maps[gost][letter.toUpperCase()][lang].symbols.length === 0) return ''

    const letterAfterTranslit: string = maps[gost][letter.toUpperCase()][lang].symbols[0]
    let result: string = letterAfterTranslit

    countOfLetter += 1

    if(isInUpperCase(letter)) {
      result = letterAfterTranslit.split('').map((letter, i) => (i === 0) ? letter.toLocaleUpperCase() : letter).join('')
      countOfLetterInUpperCase += 1
    }
    
    return result
  }).join('')

  return (countOfLetter === countOfLetterInUpperCase) ? result.toLocaleUpperCase() : result
}

export function retranslit(input: string, lang: TLang = 'ru', gost: TGost = '7.79-2000'): string {
  return input
}
