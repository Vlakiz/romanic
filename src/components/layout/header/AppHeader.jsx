import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Globe2 } from 'react-bootstrap-icons';
import Collapse from 'react-bootstrap/Collapse';
import Dropdown from 'react-bootstrap/Dropdown';
import clsx from 'clsx';

import HeaderItem from "./HeaderItem";

const AppHeader = () => {
  const { i18n } = useTranslation('header');
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

  const changeLanguage = function(event, language) {
    event.preventDefault();
    if (language === i18n.language) return;

    i18n.changeLanguage(language);
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
    <header className='container'>
      <nav
        className={clsx("navbar navbar-expand-lg fixed-top", {
          hidden: !isVisible
        })}
        data-bs-theme='dark'
      >
        <div className="container">
          <NavLink to="/" className="navbar-brand menu-collapser ps-3 py-2">
            <img src="/brand-logo.png" alt="Ro Manic" height="80px"/>
          </NavLink>
          <button className="btn navbar-toggler" onClick={() => setOpen(!open)} type="button" aria-controls="navbar" aria-expanded={open}>
            <span className="hamburger-icon"></span>
          </button>
          <Collapse in={open}>
            <div className="navbar-collapse hamburger-menu" id='navbar'>
              <div className="hamburger-wrapper mx-lg-auto">
                <ul className="navbar-nav mb-2 mb-lg-0 py-lg-2">
                  <HeaderItem itemName='about' itemRef='/' />
                  <HeaderItem itemName='services' itemRef='/services' />
                  <HeaderItem itemName='courses' itemRef='/courses' />
                  <li className='nav-item d-lg-none mt-2 pt-4 border-top fw-semibold mobile-language text-body-tertiary'>
                    <Globe2 className="me-2"/>
                    <span 
                      onClick={(e) => changeLanguage(e, 'pl')}
                      className={clsx({ 'text-white': i18n.language === 'pl' })}
                      role="button"
                    >PL</span>
                    <span className="mx-2">|</span>
                    <span
                      onClick={(e) => changeLanguage(e, 'ru')}
                      className={clsx({ 'text-white': i18n.language === 'ru' })}
                      role="button"
                    >RU</span>
                  </li>
                </ul>
              </div>
              <Dropdown className="nav-item">
                <Dropdown.Toggle id="dropdown-basic" variant="none">
                  <Globe2 className="me-2"/>
                  <span className='selected-language'>{i18n.language.toUpperCase()}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/pl" onClick={(e) => changeLanguage(e, 'pl')}>PL</Dropdown.Item>
                  <Dropdown.Item href="#/ru" onClick={(e) => changeLanguage(e, 'ru')}>RU</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Collapse>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;