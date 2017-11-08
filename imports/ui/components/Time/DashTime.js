import React from 'react'
import moment from 'moment'

const DashTime = () => (
  <div>
    <p>09:00 am</p>
    <p>{moment().isoWeekday() === 6 || moment().isoWeekday() === 7 ? moment().day(1).format('ddd, D MMM YYYY'): moment().format('ddd, D MMM YYYY')}</p>
    <p>{moment().isoWeekday() === 6 || moment().isoWeekday() === 7 ? moment().day(1).fromNow(): "Today"}</p>
  </div>
)

export default DashTime