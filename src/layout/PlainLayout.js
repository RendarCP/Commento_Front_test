import React from 'react'
import './PlainLayout.scss'

function PlainLayout({ children }){
  return(
    <div className='PlainLayout'>
      {children}
    </div>
  )
}

export default PlainLayout