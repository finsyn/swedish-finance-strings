const { fixedStr } = require('./format')
const t = require('tap')

t.test('should generate fixed-length left aligned strings', t => {

  const strings = [
    ['hejsan', 'he...'],
    ['SEK'   , 'SEK  '],
    ['  hej' , '  hej'],
    ['a'     , 'a    ']
  ]

  strings.forEach(([input, ans]) => {
    t.equals(fixedStr(input, 5), ans)
  })
  t.end()
})

t.test('should generate fixed-length right aligned strings', t => {

  const strings = [
    ['hejsan', 'he...'],
    ['SEK'   , '  SEK'],
    ['  hej' , '  hej'],
    ['a'     , '    a']
  ]

  strings.forEach(([input, ans]) => {
    t.equals(fixedStr(input, 5, true), ans)
  })
  t.end()
})



