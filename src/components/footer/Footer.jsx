import React from 'react';
import './FooterStyles.css'
import {GiScales} from 'react-icons/gi';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="content">
          <div className="logo-footer">
            <GiScales className='icon-footer' />
            <div className="logo-nome">
              <p>CAMILA BERNARDO</p>
              <p className='advogada'>ADVOGADA</p>
            </div>
            <span>Todos os direitos reservados a Camila Bernardo Advocacia - Desenvolvido por <a href="https://www.linkedin.com/in/everton-nascimento-de-oliveira" target="_blank">Everton Bruce</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer