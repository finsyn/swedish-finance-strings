const { tap, test, find, split, 
        pipe, head, match } = require('ramda')

// https://rosettacode.org/wiki/Validate_International_Securities_Identification_Number
const isinRegExp = /^[A-Z]{2}[A-Z0-9]{9}\d$/

// TODO: validate checksum digit
const firstIsin = pipe(
  split(' '),
  find(
    test(isinRegExp)
  )
)

module.exports = {
  firstIsin
}
