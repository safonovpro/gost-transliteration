import { translit } from '../src/index'

// Русский язык

test('Транслитерация русского языка (стандартное поведение букв)', () => {
  expect(translit("АБВГЃДЕЁЄЖЗЅИЙЈIЇКЌЛЉМНЊОПРСТУЎФХЦЧЏШЩЪЫЬЭЮЯ'ѢѲѴѪ")).toBe("ABVGDEYOZHZIJI'KLMNOPRSTUFXCZCHSHSHH''Y''E'YUYA'YEFHYH")
  expect(translit("абвгѓдеёєжзѕийјiїкќлљмнњопрстуўфхцчџшщъыьэюя'ѣѳѵѫ")).toBe("abvgdeyozhziji'klmnoprstufxczchshshh''y''e'yuya'yefhyh")
  expect(translit("АбВгЃдЕёЄжЗѕИйЈiЇкЌлЉмНњОпРсТуЎфХцЧџШщЪыЬэЮя'ѢѳѴѫ")).toBe("AbVgdEyozhZIji'klmNOpRsTufXczChShshh''y''e'Yuya'YefhYh")
})

test('Транслитерация русского языка (хитрости с I И Ц)', () => {
  expect(translit("IАiбIВiгIЃiдIЕiёIЄiжIЗiѕIИiйIЈiiIЇiкIЌiлIЉiмIНiњIОiпIРiсIТiуIЎiфIХiцIЧiџIШiщIЪiыIЬiэIЮiяI'IѢiѳIѴiѫI")).toBe("IAi'bI'Vi'gIi'dIEiyoIi'zhI'ZiIIi'jIiiIi'kIi'lIi'mI'NiIOi'pI'Ri'sI'TiuIi'fI'Xi'cI'ChiI'Shi'shhI''iy'I'ie'IYuiyaI'IYei'fhIYhiI")
  expect(translit("ЦИцiЦЕцэЦЁцыЦЮцяЦѢцѵЦАцбЦВцгЦЃц'ЦДц")).toBe("CIci'CEce'CYocy'CYucyaCYecyhCzAczbCzVczgCzcz'CzDcz")
  expect(translit("IЃЄЅЈЇЌЉЊЎЏѪБЦЃЄЅЈЇЌЉЊЎЏѪИ|IЃЄЅЈЇЌЉЊЎЏѪ@БЦЃЄЅЈЇЌЉЊЎЏѪ@И")).toBe("I'BCI|I@BCZ@I")
})

// Беларусский язык

test('Транслитерация беларусского языка (стандартное поведение букв)', () => {
  expect(translit("АБВГЃДЕЁЄЖЗЅИЙЈIЇКЌЛЉМНЊОПРСТУЎФХЦЧЏШЩЪЫЬЭЮЯ'ѢѲѴѪ", 'be')).toBe("ABVGDEYOZHZJIKLMNOPRSTUU'FXCZCHSHY''E'YUYA'")
  expect(translit("абвгѓдеёєжзѕийјiїкќлљмнњопрстуўфхцчџшщъыьэюя'ѣѳѵѫ", 'be')).toBe("abvgdeyozhzjiklmnoprstuu'fxczchshy''e'yuya'")
  expect(translit("АбВгЃдЕёЄжЗѕИйЈiЇкЌлЉмНњОпРсТуЎфХцЧџШщЪыЬэЮя'ѢѳѴѫ", 'be')).toBe("AbVgdEyozhZjiklmNOpRsTuU'fXczChShy''e'Yuya'")
})

test('Транслитерация беларусского языка (хитрости с I И Ц)', () => {
  expect(translit("IАiбIВiгIЃiдIЕiёIЄiжIЗiѕIИiйIЈiiIЇiкIЌiлIЉiмIНiњIОiпIРiсIТiуIЎiфIХiцIЧiџIШiщIЪiыIЬiэIЮiяI'IѢiѳIѴiѫI", 'be')).toBe("IAibIVigIidIEiyoIizhIZiIijIiiIikIilIimINiIOipIRisITiuIU'ifIXicIChiIShiIiy'I'ie'IYuiyaI'IiIiI")
  expect(translit("ЦИцiЦЕцэЦЁцыЦЮцяЦѢцѵЦАцбЦВцгЦЃц'ЦДц", 'be')).toBe("CzciCEce'CYocy'CYucyaCzczCzAczbCzVczgCzcz'CzDcz")
  expect(translit("IЃЄЅИЈЇЌЉЊЏЩЪѢѲѴѪБЦЃЄЅИЈЇЌЉЊЏЩЪѢѲѴѪI|IЃЄЅИЈЇЌЉЊЏЩЪѢѲѴѪ@БЦЃЄЅИЈЇЌЉЊЏЩЪѢѲѴѪ@I", 'be')).toBe("IBCI|I@BCZ@I")
})

// Украинский язык

test('Транслитерация украинского языка (стандартное поведение букв)', () => {
  expect(translit("АБВГЃДЕЁЄЖЗЅИЙЈIЇКЌЛЉМНЊОПРСТУЎФХЦЧЏШЩЪЫЬЭЮЯ'ѢѲѴѪ", 'uk')).toBe("ABVGDEYEZHZY'JIYIKLMNOPRSTUFXCZCHSHSHH'YUYA'")
  expect(translit("абвгѓдеёєжзѕийјiїкќлљмнњопрстуўфхцчџшщъыьэюя'ѣѳѵѫ", 'uk')).toBe("abvgdeyezhzy'jiyiklmnoprstufxczchshshh'yuya'")
  expect(translit("АбВгЃдЕёЄжЗѕИйЈiЇкЌлЉмНњОпРсТуЎфХцЧџШщЪыЬэЮя'ѢѳѴѫ", 'uk')).toBe("AbVgdEYezhZY'jiYiklmNOpRsTufXczChShshh'Yuya'")
})

test('Транслитерация беларусского языка (хитрости с I И Ц)', () => {
  expect(translit("IАiбIВiгIЃiдIЕiёIЄiжIЗiѕIИiйIЈiiIЇiкIЌiлIЉiмIНiњIОiпIРiсIТiуIЎiфIХiцIЧiџIШiщIЪiыIЬiэIЮiяI'IѢiѳIѴiѫI", 'uk')).toBe("IAibIVigIidIEiIYeizhIZiIY'ijIiiIYiikIilIimINiIOipIRisITiuIifIXicIChiIShishhIiI'iIYuiyaI'IiIiI")
  expect(translit("ЦИцiЦЕцэЦЁцыЦЮцяЦѢцѵЦАцбЦВцгЦЃц'ЦДц", 'uk')).toBe("CY'ciCEczCzczCYucyaCzczCzAczbCzVczgCzcz'CzDcz")
  expect(translit("IЃЁЅЈЌЉЊЎЏЪЫЭѢѲѴѪБЦЃЁЅЈЌЉЊЎЏЪЫЭѢѲѴѪИ|IЃЁЅЈЌЉЊЎЏЪЫЭѢѲѴѪ@БЦЃЁЅЈЌЉЊЎЏЪЫЭѢѲѴѪ@И", 'uk')).toBe("IBCY'|I@BCZ@Y'")
})

// Болгарский язык

test('Транслитерация болгарского языка (стандартное поведение букв)', () => {
  expect(translit("АБВГЃДЕЁЄЖЗЅИЙЈIЇКЌЛЉМНЊОПРСТУЎФХЦЧЏШЩЪЫЬЭЮЯ'ѢѲѴѪ", 'bg')).toBe("ABVGDEZHZIJI'KLMNOPRSTUFXCZCHSHSTHA''YUYA'YEFHYHO'")
  expect(translit("абвгѓдеёєжзѕийјiїкќлљмнњопрстуўфхцчџшщъыьэюя'ѣѳѵѫ", 'bg')).toBe("abvgdezhziji'klmnoprstufxczchshstha''yuya'yefhyho'")
  expect(translit("АбВгЃдЕёЄжЗѕИйЈiЇкЌлЉмНњОпРсТуЎфХцЧџШщЪыЬэЮя'ѢѳѴѫ", 'bg')).toBe("AbVgdEzhZIji'klmNOpRsTufXczChShsthA''Yuya'YefhYho'")
})

test('Транслитерация болгарского языка (хитрости с I И Ц)', () => {
  expect(translit("IАiбIВiгIЃiдIЕiёIЄiжIЗiѕIИiйIЈiiIЇiкIЌiлIЉiмIНiњIОiпIРiсIТiуIЎiфIХiцIЧiџIШiщIЪiыIЬiэIЮiяI'IѢiѳIѴiѫI", 'bg')).toBe("IAi'bI'Vi'gIi'dIEiIi'zhI'ZiIIi'jIiiIi'kIi'lIi'mI'NiIOi'pI'Ri'sI'TiuIi'fI'Xi'cI'ChiI'Shi'sthIA'iI'iIYuiyaI'IYei'fhIYhio'I")
  expect(translit("ЦИцiЦЕцэЦЁцыЦЮцяЦѢцѵЦАцбЦВцгЦЃц'ЦДц", 'bg')).toBe("CIci'CEczCzczCYucyaCYecyhCzAczbCzVczgCzcz'CzDcz")
  expect(translit("IЁЄЅЈЇЌЉЊЎЏЫЭБЦЁЄЅЈЇЌЉЊЎЏЫЭИ|IЁЄЅЈЇЌЉЊЎЏЫЭ@БЦЁЄЅЈЇЌЉЊЎЏЫЭ@И", 'bg')).toBe("I'BCI|I@BCZ@I")
})

// Македонский язык

test('Транслитерация македонского языка (стандартное поведение букв)', () => {
  expect(translit("АБВГЃДЕЁЄЖЗЅИЙЈIЇКЌЛЉМНЊОПРСТУЎФХЦЧЏШЩЪЫЬЭЮЯ'ѢѲѴѪ", 'mk')).toBe("ABVGG'DEZHZZ'IJJKK'LL'MNN'OPRSTUFXCZCHDHSH'")
  expect(translit("абвгѓдеёєжзѕийјiїкќлљмнњопрстуўфхцчџшщъыьэюя'ѣѳѵѫ", 'mk')).toBe("abvgg'dezhzz'ijjkk'll'mnn'oprstufxczchdhsh'")
  expect(translit("АбВгЃдЕёЄжЗѕИйЈiЇкЌлЉмНњОпРсТуЎфХцЧџШщЪыЬэЮя'ѢѳѴѫ", 'mk')).toBe("AbVgG'dEzhZz'IjJkK'lL'mNn'OpRsTufXczChdhSh'")
})

test('Транслитерация македонского языка (хитрости с I И Ц)', () => {
  expect(translit("IАiбIВiгIЃiдIЕiёIЄiжIЗiѕIИiйIЈiiIЇiкIЌiлIЉiмIНiњIОiпIРiсIТiуIЎiфIХiцIЧiџIШiщIЪiыIЬiэIЮiяI'IѢiѳIѴiѫI", 'mk')).toBe("AbVgG'dEzhZz'IjJkK'lL'mNn'OpRsTufXczChdhSh'")
  expect(translit("ЦИцiЦЕцэЦЁцыЦЮцяЦѢцѵЦАцбЦВцгЦЃц'ЦДц", 'mk')).toBe("CIczCEczCzczCzczCzczCzAczbCzVczgCzG'cz'CzDcz")
  expect(translit("IЁЄЇЎЩЪЫЬЭЮЯѢѲѴѪБЦЁЄЇЎЩЪЫЬЭЮЯѢѲѴѪИ|IЁЄЇЎЩЪЫЬЭЮЯѢѲѴѪ@БЦЁЄЇЎЩЪЫЬЭЮЯѢѲѴѪ@И", 'mk')).toBe("BCI|@BCZ@I")
})
