import React from 'react'
import dayjs from 'dayjs'

import './CardDetail.scss'

function CardDetail({ title, content, create }){
  return(
    <div className="DetailContainer">
      <div className="DetailTitle">
        {title}
      </div>
      <div style={{ marginTop: 6 }}/>
      <div className="DetailContent">
        {content}
      </div>
      <div style={{ marginTop: 15 }}/>
      <div className="DetailDate">
        {dayjs(create).format("YYYY-MM-DD")}
      </div>
    </div>
  )
}

export default CardDetail