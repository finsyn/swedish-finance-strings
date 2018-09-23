const t = require('tap')
const { firstIsin } = require('./isin')

// https://rosettacode.org/wiki/Validate_International_Securities_Identification_Number
const validIsins = [
  'US0378331005',
  'AU0000XVGZA3',
  'AU0000VXGZA3',
  'FR0000988040',
  'SE0005468717'
]

t.test('should get the first valid ISIN from string', t => {

  const strings = [
    `bfdaj ${validIsins[0]} US43294323232`,
    `dfdf${validIsins[2]} ${validIsins[1]} fdskfdsj`
  ]

  strings.forEach((s,i) => {
    const out = firstIsin(s)
    t.equals(validIsins[i], out)
  })

  t.done()
})
