const t = require('tap')
const { isBusinessDay } = require('./business-days')

t.test('should know that some days are business days', t => {
  const bdays = [
    '2018-05-02',
    '2018-04-30',
    '2018-05-09'
  ]

  const allOk = bdays.every(d => isBusinessDay(new Date(d)))
  t.ok(allOk)
  t.done()
})

t.test('should know that some days are NOT business days', t => {
  const bdays = [
    '2018-05-01',
    '2018-05-10',
    '2018-12-24'
  ]

  const allOk = bdays.every(d => !isBusinessDay(new Date(d)))
  t.ok(allOk)
  t.done()
})
