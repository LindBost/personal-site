
import React from 'react'
import { Link } from 'react-router-dom'
import StatusTag from './../StatusTag'
import moment from 'moment'

const BlogNav = ({ to, date, label, status }) => {
  
    console.log('label', label);
  return (
    <nav className="level">
      <div className="level-left">
        <Link className="link" to={to}>{label}</Link>
      </div>
      <div className="level-right">
      <StatusTag status={status} />
        <p className="level-item">
          {moment(date).calendar(null, {
            sameDay: '[Today]',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'MMM Do YYYY'
          })}
        </p>
      </div>
    </nav>
  )
}


export default BlogNav;