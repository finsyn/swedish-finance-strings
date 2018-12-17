const t = require('tap')
const { hrActor, hrCompany } = require('./actor')
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

t.test('make company names nicer', t => {
  const companies = [
    'TradeDoubler Aktiebolag',
    'Avanza Bank Holding AB för Försäkringsaktiebolaget Avanza Pension',
    'Nordströms förlag'
  ]
  const companiesOut = [
    'TradeDoubler',
    'Avanza Bank Holding',
    'Nordströms förlag'
  ]
  
  pipe(
    map(hrCompany),
    zip(companiesOut),
    forEach(([a, b]) => t.equal(a, b))
  )(companies)
  
  t.end()
})

