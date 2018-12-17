const { concat, replace, test, pipe, __, 
        ifElse, identity } = require('ramda')

const cleaner = pipe(
  replace(/\s\(.*\)$/, ''),
  replace(/\s(AB|Aktiebolag)/, ''),
  replace(/\sför\s.*$/, '')
)

const suffixer = ifElse(
  test(/s$/),
  identity,
  concat(__, 's')
)

const hrActor = pipe(
  cleaner,
  suffixer
)

const hrCompany = cleaner

module.exports = {
  hrActor,
  hrCompany
};
