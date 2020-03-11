import { TGost, TLang, TMap } from './types'
import maps from './maps'

const isInUpperCase = (value: string): boolean => (value === value.toLocaleUpperCase()) ? true : false

export function transilt(input: string, lang: TLang = 'ru', gost: TGost = '7.79-2000'): string {
  return input.split('').map((letter: string): string => {
    if (!maps[gost][letter.toUpperCase()]) return letter
    if (maps[gost][letter.toUpperCase()][lang].symbols.length === 0) return ''

    const letterAfterTranslit: string = maps[gost][letter.toUpperCase()][lang].symbols[0]
    let result: string = letterAfterTranslit

    if(isInUpperCase(letter)) {
      result = letterAfterTranslit.split('').map((letter, i) => (i === 0) ? letter.toLocaleUpperCase() : letter).join('')
    }
    
    return result
  }).join('')
}

export function retranslit(input: string, lang: TLang = 'ru', gost: TGost = '7.79-2000'): string {
  return input
}
