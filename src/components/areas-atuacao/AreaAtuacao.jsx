import React from 'react'
import './AreaAtuacaoStyle.css'
import direitoCivelImg from '../../assets/direito-civil.png'
import direitoTributario from '../../assets/tributario.png'

const AreaAtuacao = () => {
  return (
    <div id="areas-atuacao" className='area-atuacao'>
      <div className="container">
        <div className='content'>
          <h1 >Áreas de atuação</h1>
          <div className="cards">
            {/* Primeiro Card */}
            <div className="card">
              <img src={direitoCivelImg} alt="direito cível" />
              <h1>Cível</h1>
              <div className="content">
                <ul>
                  <li>Família</li>
                  <li>Sucessões</li>
                  <li>Contratos</li>                
                </ul>
              </div>
            </div>
            {/* Segundo Card */}
            <div className="card">
              <img src={direitoTributario} alt="tributário" />
              <h1>Tributário</h1>
              <div className="content">
                <ul>
                  <li>Revisão de Inscrição em Dívida Ativa</li>
                  <li>Execução Fiscal</li>
                  <li>Bloqueio de Bens</li>
                  <li>Consultoria</li>
                </ul>
              </div>
            </div>
          </div>
            <div className='area-texto'>
              Prestamos de acessoria jurídica para empresas e pessoas, em todo o país 
              através de atendimento online ou presencial, buscando apresentar soluções 
              customizadas para cada situação.
            </div>
        </div>
      </div>
    </div>
  )
}

export default AreaAtuacao