import React from 'react'
import moment from 'moment'

import './styles.css'

const currentTime = moment().format('LT');

const DashTime = ({dashTime}) => (
  <div className="dash-time-wrapper">
    <p className="dash-today-time">{dashTime}</p>
    <p className="dash-today-date">{moment().isoWeekday() === 6 || moment().isoWeekday() === 7 ? moment().day(1).format('dddd, MMMM D, YYYY'): moment().format('dddd, MMMM D, YYYY')}</p>
    <p className="dash-time-date">{moment().isoWeekday() === 6 || moment().isoWeekday() === 7 ? moment().day(1).fromNow(): "Today"}</p>
  </div>
)

export default DashTime