const { hrTimeSince } = require('./time.js')
const t = require('tap')

t.test('it should generate human readable time passed strings', t => {

  const now = new Date().getTime()

  const timestamps = [
    [new Date(now), 'just nu'],
    [new Date(now - 5000), '5 sekunder sedan'],
    [new Date(now - 600000), '10 minuter sedan'],
    // @TODO confirm this works with timezone
    [new Date(now - 67200000), '18 timmar sedan']
  ]

  timestamps.forEach(([input, ans]) => {
    const inputString = input.toISOString()
    t.equals(hrTimeSince(input), ans)
  })
  t.end()
})
