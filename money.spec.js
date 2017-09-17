const { hrSum } = require('./money.js')
const t = require('tap')

t.test('it should make some large sum human readable', t => {

  const sums = [
    ['100.00', '100 '],
    ['20000', '20,000 '],
    ['3210000', '3.21 M'],
    ['3210000.00', '3.21 M'],
    ['3210089.21', '3.21 M'],
    ['3210089000.21', '3.21 MD']
  ]

  sums.forEach(([input, ans]) => {
    t.equals(hrSum(input), ans)
  })
  t.end()
})

