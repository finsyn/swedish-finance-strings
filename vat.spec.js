const { orgToVat } = require('./vat')
const t = require('tap')

t.test('should parse swedish orgnumber', t => {
  const orgs = [
    '556427-2812',
    '556029-8654'
  ]
  const vats = [
    'SE556427281201',
    'SE556029865401'
  ]

  orgs.forEach((org, idx) => {
    t.equals(orgToVat(org), vats[idx])
  })
  t.done()
})

