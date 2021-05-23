import React, { useEffect, useState } from 'react'
import './FeedDetail.scss'

import PlaneLayout from '../../layout/PlainLayout'

import CardDetail from '../../components/CardDetail/CardDetail'
import Reply from '../../components/Reply/Reply'
import { useParams } from 'react-router'
import axios from 'axios'

function FeedDetail(){
  let params = useParams()
  const [ item, setItems ] = useState([])
  const [ count, setCount ] = useState(0)

  useEffect(() => {
    axios.get(`https://problem.comento.kr/api/view?id=${params.id}`)
    .then( res => {
      console.log(res)
      setItems(res.data.data)
      setCount(res.data.data.reply.length)
    }).catch(err => {
      console.log(err) 
    })
  },[])
  return(
    console.log(item),
    <PlaneLayout>
      <div style={{ width: "100%"}}>
        <CardDetail title={item.title} content={item.contents} create={item.created_at}/>
        <div style={{ display: 'flex', marginTop: 30, marginBottom: 10 }}>
          <div style={{ color: '#495057', fontSize: 16, marginRight: 9 }}>
            답변
          </div>
          <div style={{ color: "#00C854", fontSize: 16}}>{count}</div>
        </div>
        {
          item ? 
            item?.reply?.map(re => {
              return(
                <>
                  <Reply userId={re.user_id} content={re.contents} create={re.create_ac}/>
                  <div style={{ marginTop: 30 }}/>
                </>
              )
            })
            : null
        }
      </div>
    </PlaneLayout>
  )
}

export default FeedDetail

