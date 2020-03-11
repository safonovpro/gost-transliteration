# Транслитерация по ГОСТ

Небольшой пакет для транслитерации по действующим в Российской Федерации ГОСТ.

## Транслитерация по ГОСТ 7.79-2000 (ISO 9-95)

Обратите внимание, что я решил поддерживать только транслитерацию славянских алфавитов по системе Б (транслитерация с использованием буквосочетаний) ГОСТ ГОСТ 7.79-2000 (ISO 9-95). Игнорируемая система А использует [специфические латинские символы](./img/iso-9-95-system-a.png), которые, на мой взгляд, к реальной повседневной жизни имеют мало отношения.

### Поддерживаемая транслитерация

Буква | Русский | Беларусский | Украинский | Болгарский | Македонский
--- | --- | --- | --- | --- | ---
**А** | a | a | a | a | a
**Б** | b | b | b | b | b
**В** | v | v | v | v | v
**Г** | g | g | g | g | g
**Ѓ** | - | - | - | - | g'
**Д** | d | d | d | d | d
**Е** | e | e | e | e | e
**Ё** | yo | yo | - | - | -
**Є** | - | - | ye | - | -
**Ж** | zh | zh | zh | zh | zh
**З** | z | z | z | z | z
**Ѕ** | - | - | - | - | z'
**И** | i | - | y' | i | i
**Й** | j | j | j | j | j
**Ј** | - | - | - | - | j
**I** | i, i' | i | i | i, i' | -
**Ї** | - | - | yi | - | -
**К** | k | k | k | k | k
**Ќ** | - | - | - | - | k'
**Л** | l | l | l | l | l
**Љ** | - | - | - | - | l'
**М** | m | m | m | m | m
**Н** | n | n | n | n | n
**Њ** | - | - | - | - | n'
**О** | o | o | o | o | o
**П** | p | p | p | p | p
**Р** | r | r | r | r | r
**С** | s | s | s | s | s
**Т** | t | t | t | t | t
**у** | u | u | u | u | u
**Ў** | - | u' | - | - | -
**Ф** | f | f | f | f | f
**Х** | x | x | x | x | x
**Ц** | cz, c | cz, c | cz, c | cz, c | cz, c
**Ч** | ch | ch | ch | ch | ch
**Џ** | - | - | - | - | dh
**Ш** | sh | sh | sh | sh | sh
**Щ** | shh | - | shh | sth | -
**Ъ** | '' | - | - | a' | -
**Ы** | y' | y' | - | - | -
**Ь** | ' | ' | ' | ' | -
**Э** | e' | e' | - | - | -
**Ю** | yu | yu | yu | yu | -
**Я** | ya | ya | ya | ya | -
**'** (апостроф) | ' | ' | ' | ' | '
**Ѣ** (ять) | ye | - | - | ye | -
**Ѳ** (фита) | fh | - | - | fh | -
**Ѵ** (ижица) | yh | - | - | yh | -
**Ѫ** (юс) | - | - | - | o' | -