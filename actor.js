const { concat, replace, test, pipe, __, 
        ifElse, identity } = require('ramda')

const cleaner = pipe(
  replace(/\s\(.*\)$/, ''),
  replace(/\sAB$/, '')
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

module.exports = {
  hrActor
};
