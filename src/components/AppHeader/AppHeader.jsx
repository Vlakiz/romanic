import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from 'clsx';
import { Collapse } from 'bootstrap';

const AppHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const hideTopMenu = function(event) {
    let currentScrollY = window.scrollY;

    if (lastScrollY > currentScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };

  const collapseMenu = function() {
    const navbar = document.getElementById('navbar');
    new Collapse(navbar).hide();
  };

  useEffect(() => {
    window.addEventListener('scroll', hideTopMenu);
  });

  useEffect(() => {
    document.querySelectorAll('.menu-collapser').forEach((linkElement) => {
      linkElement.addEventListener('click', collapseMenu)
    });
  });

  return (
    <header>
      <nav className={clsx("navbar border-top border-bottom border-3 border-secondary-subtle bg-body-tertiary navbar-expand-lg fixed-top", {
        hidden: !isVisible
      })}>
        <div className="container">
          <Link to="/" className="navbar-brand menu-collapser">
            Ro.manic
          </Link>
          <button className="btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="hamburger-icon"></span>
          </button>
          <div className="navbar-collapse collapse hamburger-menu" id='navbar'>
            <ul className="navbar-nav">
              <li className='nav-item'>
                <Link to="/" className="nav-link menu-collapser">
                  O mnie
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/services" className="nav-link menu-collapser">
                  Uslugi
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/courses" className="nav-link menu-collapser">
                  Szkolenia
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;