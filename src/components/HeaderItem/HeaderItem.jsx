import React from 'react';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from 'clsx';

const HeaderItem = ({ itemName, itemRef }) => {
  const { t } = useTranslation('header');

  return (
    <li className='nav-item mx-lg-5'>
      <NavLink to={itemRef}
              className={({ isActive }) => clsx("nav-link menu-collapser text-uppercase fw-normal", {
                active: isActive,
                underline: isActive
              })} 
      >
        {t(itemName)}
      </NavLink>
    </li>
  );
};

export default HeaderItem;