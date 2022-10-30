import React from 'react';
import './NavbarStyles.css'
import logo from '../../assets/logo-camila-adv.png'
import { NavLink } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import {GiScales} from 'react-icons/gi'
import { useState } from 'react';

const Header = () => {
    const [nav, SetNav] = useState(false);
    const handleNav = () => SetNav(!nav);

    return (
      // <header>
      //   <div className="logo-wrapper">
      //     <NavLink to="/" className="logo-link">
      //       <img src={logo} alt="logo" />
      //     </NavLink>
      //     <button className="icon">
      //       <i className="fa fa-bars"></i>
      //     </button>
      //   </div>
      //   <div className="nav-menu">
      //     <ul className="topnav">
      //       <li>
      //         <NavLink to="/contato">Contato</NavLink>
      //       </li>
      //     </ul>
      //   </div>
      // </header>
      <div className='navbar'>
        <div className="container">
          <a className="logo" href='/'>
            <GiScales className='icon'/>
            <div className="logo-nome">
              <p>CAMILA</p>
              <p>BERNARDO</p>
              <p className='advogada'>ADVOGADA</p>
            </div>
          </a>

          <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
            <li>Home</li>
            <li>Contato</li>
            <li>Áreas de atuação</li>
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