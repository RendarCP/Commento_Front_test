import React from 'react'
import './Card.scss'
import '../../css/Global.scss'
import dayjs from 'dayjs'

function Card({ categoryId, contents, create, title, userId }) {
  const content = "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent"
  return( 
    <>
      <div className="CardContainer">
        <div className="CardHeader">
          <div>{categoryId[0].name}</div>
          <div>{categoryId[0].id}</div>
        </div>
        <div className="CardSpacer"/>
        <div className="flex">
          <div className="CardUserId">{userId}</div>
          <div className="UserSpacer"/>
          <div className="CardDate">{dayjs(create).format("YYYY-MM-DD")}</div>
        </div>
        <div style={{ marginTop: 17 }}>
          <div className="CartTitle">{title}</div>
          <div className="CardContent">{contents}</div>
        </div>
      </div>
      {/* <div className="CardContainer">
        <div className="CardSponsored">sponsored</div>
        <div className="CardAd">
          <div style={{ border: '1px solid black', width: 310, height: 179, marginRight: 30 }}>이미지</div>
          <div className="flexColumn">
            <div className="CartTitle">title</div>
            <div className="AdContent">{content}</div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Card