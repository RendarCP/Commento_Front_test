import React, { useEffect, useState } from 'react'
import './Feed.scss'
import '../../css/Global.scss'
import axios from 'axios'

import PlaneLayout from '../../layout/PlainLayout'

import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import Modal from '../../components/Modal/Modal'

function Feed(){
  const [ rdoStatus, setRdoStatus] = useState('') // 라디오 박스 상태
  const [ filterStatus, setFilterStatus ] = useState(false) // 필터 모달
  const [ filterLists, setFilterLists ] = useState([]) // 필터 정보 array
  const [ checkItems, setCheckItems ] = useState([]) // 체크박스 확인용
  const [ lists, setLists ] = useState([])

  useEffect(() => {
    axios.get('https://problem.comento.kr/api/category')
    .then( res => {
      console.log(res)
      setFilterLists(res.data.category)
    }).catch(err => {
      console.log(err)
    })
  },[])

  useEffect(() => {
    axios.get('https://problem.comento.kr/api/list',{
      params: {
        page: 1,
        ord: "asc",
        category: [1],
        limit: 10
      }
    }).then(res => {
      console.log("list" ,res)
      setLists(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  },[])

  const test = (id) => {
    const category = filterLists.filter((el) => el.id === 1)
    return category
  }

  const onChangeRadioButton = ( value ) => {
    setRdoStatus(value)
  }

  const onClickCheck = (check, id) => {
    if (check) {
      setCheckItems([...checkItems, id]);
    }
    else{
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  }

  const onClickFilter = () => {
    setFilterStatus(!filterStatus)
  }
  return(
    console.log(lists),
    <div className="Feed">
      <PlaneLayout>
        <div className="btnMargin">
          <Button>로그인</Button>
        </div>
        
        {/* 피드 전체 컨테이너 */}
        <div className="FeedContainer">
          {/* 피드의 헤더 (필터,오름차순,내림차순) */}
          <div className="FeedHeader">
            <div className="rdoContainer">
              <div 
                onClick={() => onChangeRadioButton('오름차순')}
                className="rdoContainer">
                <input 
                  type='radio' 
                  id='오름차순' 
                  checked={rdoStatus === '오름차순'}
                />
                <div className="rdoFont">오름차순</div>
              </div>
              
              <div 
                onClick={() => onChangeRadioButton('내림차순')}
                className="rdoContainer">
                <input 
                  type='radio'
                  id='내림차순' 
                  checked={rdoStatus === '내림차순'}
                />
                <div className="rdoFont">내림차순</div>
              </div>
            </div>
            <div
              onClick={onClickFilter} 
              className="FilterContainer">필터</div>
          </div>
          {/* 콘텐츠 부분 */}
          <div className="FeedContent">
            {
              lists.map(list => {
                return(
                  <>
                    <Card 
                      categoryId={test(list.category_id)} 
                      contents={list.contents} 
                      create={list.created_at} 
                      title={list.title} 
                      userId={list.user_id}
                    />
                    <div style={{ marginTop: 30 }} />
                  </>
                )
              })
            }
          </div>
        </div>
      </PlaneLayout>
      <div style={{ display: filterStatus ? "block" : "none"}}>
        <Modal close={onClickFilter}>
          {
            filterLists?.map(list => {
              return(
                <label className="container">
                  <div style={{ marginTop: 3 }}>{list.name}</div>
                  <input 
                    type="checkbox" 
                    onChange={(e)=> onClickCheck(e.target.checked, list.id)}
                    checked={checkItems.includes(list.id) ? true : false}
                    />
                  <span className="checkmark"></span>
                </label>
              )
            })
          }
        </Modal>
      </div>
    </div>
  )
}

export default Feed
