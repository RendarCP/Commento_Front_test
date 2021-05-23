import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useList(page, ord, category) {
  const [list, setList] = useState([]);

  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: 'https://problem.comento.kr',
  //     params: { 
  //       page: page,
  //       ord: ord,
  //       category: category,
  //       limit: 100,
  //     }
  //   }).then(res => {
  //     setList(res.data)
  //   })
  // },[page,ord,category])
  // return [list]

  useEffect(() => {
    axios.get('https://problem.comento.kr/api/list',{
      params: {
        page: page,
        ord: ord,
        category: category,
        limit: 100
      }
    }).then(res => {
      setList(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  },[list])
  return list
}