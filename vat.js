const { replace, pipe, concat, __ } = require('ramda')

// orgNumber -> VATNumber
const orgToVat = pipe(
  replace(/\-/g, ''),
  concat('SE'),
  concat(__, '01')
)

module.exports = {
  orgToVat
}
