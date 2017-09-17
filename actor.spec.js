const t = require('tap')
const { hrActor} = require('./actor')
const { forEach , pipe, zip, map } = require('ramda')

t.test('make actor names nicer', t => {
  const names = [
    'DORO AB',
    'Collium AB',
    'Wise Group AB (publ)',
    'Boule diagnostics',
    'Boule diagnostics AB'
  ]
  const namesOut = [
    'DOROs',
    'Colliums',
    'Wise Groups',
    'Boule diagnostics',
    'Boule diagnostics'
  ]
  
  pipe(
    map(hrActor),
    zip(namesOut),
    forEach(([a, b]) => t.equal(a, b))
  )(names)
  
  t.end()
})

