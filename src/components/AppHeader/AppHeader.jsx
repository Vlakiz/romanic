import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';
import clsx from 'clsx';

const AppHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  const hideTopMenu = function(event) {
    let currentScrollY = window.scrollY;

    if (lastScrollY > currentScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', hideTopMenu);
  });

  useEffect(() => {
    document.querySelectorAll('.menu-collapser').forEach((linkElement) => {
      linkElement.addEventListener('click', () => { setOpen(false) });
    });
  });

  return (
    <header>
      <nav className={clsx("navbar border-top border-bottom border-3 border-secondary-subtle bg-body-tertiary navbar-expand-lg fixed-top", {
        hidden: !isVisible
      })}>
        <div className="container">
          <NavLink to="/" className="navbar-brand menu-collapser">
            Manic
          </NavLink>
          <button className="btn navbar-toggler" onClick={() => setOpen(!open)} type="button" aria-controls="navbar" aria-expanded={open}>
            <span className="hamburger-icon"></span>
          </button>
          <Collapse in={open}>
            <div className="navbar-collapse hamburger-menu" id='navbar'>
              <ul className="navbar-nav">
                <li className='nav-item'>
                  <NavLink to="/"
                           className={({ isActive }) => clsx("nav-link menu-collapser", {
                                                                 active: isActive,
                                                                 underline: isActive
                                                               })} 
                  >
                    O mnie
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/services"
                           className={({ isActive }) => clsx("nav-link menu-collapser", {
                                                                 active: isActive,
                                                                 underline: isActive
                                                               })} 
                  >
                    Uslugi
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/courses"
                           className={({ isActive }) => clsx("nav-link menu-collapser", {
                                                                 active: isActive,
                                                                 underline: isActive
                                                               })} 
                  >
                    Szkolenia
                  </NavLink>
                </li>
              </ul>
            </div>
          </Collapse>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;