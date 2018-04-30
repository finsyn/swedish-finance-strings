const moment = require('moment-business-days')

const holidaysSe = [
  '01-05-2018',
  '10-05-2018',
  '06-06-2018',
  '22-06-2018',
  '24-12-2018',
  '25-12-2018',
  '26-12-2018',
  '31-12-2018'
]

moment.locale('se', {
  holidays: holidaysSe,
  holidayFormat: 'DD-MM-YYYY'
})

// Date -> Bool
exports.isBusinessDay = date => moment(date).isBusinessDay()
