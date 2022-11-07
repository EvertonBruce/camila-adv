import React from 'react'
import './ContatoStyles.css'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Contato = () => {
  return (
    <div id='contato' className="contato">
      <div className='container'>
        <h1>Contato</h1>
        <div className="content">
          <div className='fale-conosco'>
            <span><BsWhatsapp />&nbsp;(31) 99382-4670</span>
            <span><AiOutlineMail />&nbsp;exemplo@gmail.com</span>
          </div>
          <div className="sobre-mim">
            <span>Camila Bernardo Silva</span>
            <span>OAB/MG 218388</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato