import React from 'react'
import './HeroStyles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className='hero'>
      <div className="container">
        <div className='content'>
          <Slider {...settings}>
            <div className='carousel-item item1'>
              <h3>Seja bem-vindo</h3>
              <h1>Prestamos assessoria jurídica para pessoas e empresas</h1>
              <a className='saiba-mais hero-btn' href="#saiba-mais">Saiba mais</a>
            </div>
            <div className='carousel-item item2'>
              <h3>Tem dúvidas?</h3>
              <h1 className='faca-consultoria'>Faça uma consultoria</h1>
              <a className='nossos-servicos hero-btn' href="#saiba-mais">Nossos Serviços</a>
              <div className='plano-fundo'>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero