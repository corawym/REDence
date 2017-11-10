import React from 'react'
import moment from 'moment'

import './styles.css'

const currentTime = moment().format('LT');

const DashTime = () => (
  <div className="dash-time-wrapper">
    <p className="dash-today-time">{currentTime}</p>
    <p className="dash-today-date">{moment().isoWeekday() === 6 || moment().isoWeekday() === 7 ? moment().day(1).format('ddd, MMM D, YYYY'): moment().format('dddd, MMMM D, YYYY')}</p>
    <p className="dash-time-date">{moment().isoWeekday() === 6 || moment().isoWeekday() === 7 ? moment().day(1).fromNow(): "Today"}</p>
  </div>
)

export default DashTime