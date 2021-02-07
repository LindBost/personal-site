import React from 'react'

const StatusTag = ({status}) => {
    switch(status) {
      case 'IN_PROGRESS':
        return (<span className="inProgress" style={{ marginRight: 20 }}>In Progress</span>)
      case 'ARCHIVED':
        return (<span className="archived" style={{ marginRight: 20 }}>Archived</span>)
      default:
        return (<span></span>)
    }
  }

  export default StatusTag;