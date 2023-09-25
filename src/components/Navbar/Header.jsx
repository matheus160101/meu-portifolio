import './Header.css';
import Cardapio from '../../images/cardapio.svg';
import React, { useState } from 'react';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <nav className='container'>
        <div className="menu-header">
          <a href="#">Portifolio</a>
          <div
            className="menu-portifolio"
            id='menu-portifolio'
            onClick={toggleMenu}
          >
            <img src={Cardapio} alt=""/>
          </div>
        </div>
        <div
          className={`menu-list ${menuVisible ? 'open' : ''}`}
          id='menu-list'
        >
          <h1>Bem-vindo ao meu portifolio</h1>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
