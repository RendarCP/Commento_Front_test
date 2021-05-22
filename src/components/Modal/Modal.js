import React from 'react'
import './Modal.scss'
import '../../css/Global.scss'

import Button from '../Button/Button'

function Modal({ children, close }) {
  return(
    <div className="ModalContainer">
      <div className="ModalContentView">
        <div className="flexCenterBetween">
          <div className="Font_22_bold">
            필터
          </div>
          <div onClick={close}>닫기</div>
        </div>
        <div>
          {children}
        </div>
        <div className="btnModal">
          <Button>저장하기</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal