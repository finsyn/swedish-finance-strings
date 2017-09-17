const { compose } = require('ramda')

module.exports = {
  hrPrice,
  hrSum
}

function hrPrice (price) {
  return parseFloat(price).toFixed(2)
}

function hrSum (sum) {

  const decToInt = (sum) => parseInt(sum).toFixed()
  const intToSuf = (str) => {
    let amount, suffix
    const l = str.length
    switch (true) {
    case (l > 9):
      const billions = (parseFloat(str)/(1E9)).toFixed(2)
      amount = `${billions}`
      suffix = 'MD'
      break
    case (l > 6):
      const millions = (parseFloat(str)/(1E6)).toFixed(2)
      amount = `${millions}`
      suffix = 'M'
      break
    case (l > 3):
      const thousands = str.substr(0, str.length - 3)
      const rest = str.substr(str.length - 3)
      amount = `${thousands},${rest}`
      suffix = ''
      break
    default:
      amount = `${str}`
      suffix = ''
    }

    return `${amount} ${suffix}`
  }

  return compose(intToSuf, decToInt)(sum)
}


