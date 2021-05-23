import React from 'react'
import './Reply.scss'
import dayjs from 'dayjs'

function Reply({ userId, content, create }) {
  return(
    <div className="ReplyContainer">
      <div className="ReplyTitle">
        {userId}
      </div>
      <div style={{ borderBottom: '1px solid #7E848A', margin: '10px 0' }}/>
      <div className="ReplyContent">
        {content}
      </div>
      <div className="ReplyDate">
        {dayjs(create).format("YYYY-MM-DD")}
      </div>
    </div>
  )
}

export default Reply