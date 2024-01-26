import React from 'react'

type DateProps = {
    today : Date
    tenDaysAgo : Date
}

function DateObject({}: DateProps) {
    const now = new Date()
    const tenDaysAgo = now
  return (
    <div>DateObject</div>
  )
}

export default DateObject