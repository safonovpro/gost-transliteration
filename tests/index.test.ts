import { translit, retranslit } from '../src/index'

test('Транслитерация русского языка (стандартное поведение букв)', () => {
  expect(translit("АБВГЃДЕЁЄЖЗЅИЙЈIЇКЌЛЉМНЊОПРСТУЎФХЦЧЏШЩЪЫЬЭЮЯ'ѢѲѴѪ")).toBe("ABVGDEYOZHZIJIKLMNOPRSTUFXCZCHSHSHH''Y''E'YUYA'YEFHYH")
  expect(translit("абвгѓдеёєжзѕийјiїкќлљмнњопрстуўфхцчџшщъыьэюя'ѣѳѵѫ")).toBe("abvgdeyozhzijiklmnoprstufxczchshshh''y''e'yuya'yefhyh")
  expect(translit("АбВгЃдЕёЄжЗѕИйЈiЇкЌлЉмНњОпРсТуЎфХцЧџШщЪыЬэЮя'ѢѳѴѫ")).toBe("AbVgdEyozhZIjiklmNOpRsTufXczChShshh''y''e'Yuya'YefhYh")
})

test('Транслитерация русского языка (хитрости с I И Ц)', () => {
  expect(translit("IАiбIВiгIЃiдIЕiёIЄiжIЗiѕIИiйIЈiiIЇiкIЌiлIЉiмIНiњIОiпIРiсIТiуIЎiфIХiцIЧiџIШiщIЪiыIЬiэIЮiяI'IѢiѳIѴiѫI")).toBe("IAi'bI'Vi'gIi'dIEiyoIi'zhI'ZiIIi'jIiiIi'kIi'lIi'mI'NiIOi'pI'Ri'sI'TiuIi'fI'Xi'cI'ChiI'Shi'shhI''iy'I'ie'IYuiyaI'IYei'fhIYhiI")
  expect(translit("ЦИцiЦЕцэЦЁцыЦЮцяЦѢцѵЦАцбЦВцгЦЃц'ЦДц")).toBe("CIci'CEce'CYocy'CYucyaCYecyhCzAczbCzVczgCzcz'CzDcz")
})
