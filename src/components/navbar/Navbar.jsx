import React from 'react';
import './NavbarStyles.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {GiScales} from 'react-icons/gi'
import { useState } from 'react';
import scrollToElement from '../../Utils.js'

const Header = () => {
    const [nav, SetNav] = useState(false);
    const handleNav = () => SetNav(!nav);

    return (
      <div className='navbar'>
        <div className="container">
          <a className="logo" href='/'>
            <GiScales className='icon'/>
            <div className="logo-nome">
              <p>CAMILA BERNARDO</p>
              <p className='advogada'>ADVOGADA</p>
            </div>
          </a>

          <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
            <li><a href='/'>Home</a></li>
            <li>
              <a
                href='#contato'
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#contato');
                  handleNav();
                }}
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="#areas-atuacao"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#areas-atuacao');
                  handleNav();
                }}
              >
                Áreas de atuação
              </a>
            </li>
          </ul>
          <div className='hamburger' onClick={handleNav}>
            {!nav
              ? <FaBars className='icon' />
              : <FaTimes className='icon' />}
          </div>
        </div>
      </div>
    )
  }

export default Header;