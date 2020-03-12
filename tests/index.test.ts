import { transilt, retranslit } from '../src/index'

test('Транслитерация русского языка', () => {
  expect(transilt('АБВГЃДЕЁЄЖЗЅИЙЈIЇКЌЛЉМНЊОПРСТУЎФХЦЧЏШЩЪЫЬЭЮЯ\'ѢѲѴѪ')).toBe('ABVGDEYOZHZIJIKLMNOPRSTUFXCZCHSHSHH\'\'Y\'\'E\'YUYA\'YEFHYH')
  expect(transilt('абвгѓдеёєжзѕийјiїкќлљмнњопрстуўфхцчџшщъыьэюя\'ѣѳѵѫ')).toBe('abvgdeyozhzijiklmnoprstufxczchshshh\'\'y\'\'e\'yuya\'yefhyh')
  expect(transilt('АбВгЃдЕёЄжЗѕИйЈiЇкЌлЉмНњОпРсТуЎфХцЧџШщЪыЬэЮя\'ѢѳѴѫ')).toBe('AbVgdEyozhZIjiklmNOpRsTufXczChShshh\'\'y\'\'e\'Yuya\'YefhYh')
})
