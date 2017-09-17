const { tap, ifElse, always, isNil, reverse, find, concat, __, compose, constructN, pipe, invoker } = require('ramda')

module.exports = {
  hrTimeSince,
  hrDaysAgo
}

function hrDaysAgo (date) {
  const daysAgo = Math.floor(
    (new Date() - new Date(date)) / (24 * 60 * 60 * 1000)
  )
  const daysAgoHrDefault = `för ${daysAgo} dagar sedan`
  const daysAgoHr = [
    'idag',
    'igår'
  ]
  const hrAgo = daysAgoHr[daysAgo] || daysAgoHrDefault
  return hrAgo
}
 
function hrTimeSince (date) {

  const msPassed = time => new Date().getTime() - time

  const hrMsSum = t => {

    const roundedUnit = (time, denominator, singular, plural) => {
      const int = parseInt(time/denominator)
      const out = (int === 1) ? `${int} ${singular}` : `${int} ${plural}`
      return out
    }

    const intervals = [
      {
        singular: 'sekund',
        plural: 'sekunder',
        ms: 1000
      },
      {
        singular: 'minut',
        plural: 'minuter',
        ms: 60 * 1000
      },
      {
        singular: 'timme',
        plural: 'timmar',
        ms: 60 * 60 * 1000
      },
      {
        singular: 'dag',
        plural: 'dagar',
        ms: 24 * 60 * 60 * 1000
      }
    ]

    return pipe(
      reverse,
      find(interval => (t > interval.ms)),
      ifElse(
        isNil,
        always('just nu'),
        pipe(
          interval => roundedUnit(
            t,
            interval.ms,
            interval.singular,
            interval.plural
          ),
          concat(__, ' sedan')
        )
      )
    )(intervals)
  }

  return pipe(
    constructN(1, Date),
    invoker(0, 'getTime'),
    msPassed,
    hrMsSum
  )(date);
}
