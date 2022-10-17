import React from 'react'
import './HeroStyles.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import imgHero1 from '../../assets/cup-of-coffee-g3c63a3422_1920.jpg'
import imgHero2 from '../../assets/laptop-gb61cffb0e_1920.jpg'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    fade: true,
    cssEase: 'linear'
  };
  
  return (
    <div className='hero'>
      <div className="container">
        <div className='content'>
        <Slider {...settings}>
          <div className='carousel-item item1'>
            <h3 style={{margin: 0}}>Seja bem vindo</h3>
            <h1 style={{margin: 0}}>Oferecemos acessoria jurídica</h1>
          </div>
          <div className='carousel-item item2'>
          </div>
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero