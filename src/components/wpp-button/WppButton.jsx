import React from 'react'
import './WppButtonStyle.css'

const WppButton = () => {
  return (
    <>
      <a
        href="https://wa.me/5531993824670?text=Olá%20Gostaria%20de%20conversar%20sobre%20uma%20consultoria"
        className='wpp-btn'
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
    </>
  )
}

export default WppButton;