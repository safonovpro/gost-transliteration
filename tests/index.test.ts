import { transilt, retranslit } from '../src/index'

test('Транслитерация русского языка', () => {
  expect(transilt('АБВГЃДЕЁЄЖЗЅИЙЈIЇКЌЛЉМНЊОПРСТУЎФХЦЧЏШЩЪЫЬЭЮЯ\'ѢѲѴѪ')).toBe('ABVGDEYoZhZIJIKLMNOPRSTUFXCzChShShh\'\'Y\'\'E\'YuYa\'YeFhYh')
  expect(transilt('абвгѓдеёєжзѕийјiїкќлљмнњопрстуўфхцчџшщъыьэюя\'ѣѳѵѫ')).toBe('abvgdeyozhzijiklmnoprstufxczchshshh\'\'y\'\'e\'yuya\'yefhyh')
})
