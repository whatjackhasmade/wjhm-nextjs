import React from 'react';
import { useEffect, useState } from 'react';
// import MailtoUI from 'mailtoui/dist/mailtoui-min.js';

import HeaderComponent from './header.styles';

import { Link } from 'wjhm';
import { Logo } from 'wjhm';
import { Bars } from '../../atoms/icons/solid';
import { Times } from '../../atoms/icons/solid';

import { MenuItem } from 'wjhm';

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  useEffect(() => {
    // if (typeof window !== `undefined`) {
    //   MailtoUI.run(); // <--- Run MailtoUI manually
    // }
  });

  const menus = [];
  const [menuOpen, toggleMenu] = useState(false);

  const hasMenus = menus?.length > 0;
  if (!hasMenus) return null;

  const headerMenu = menus.nodes.find(menu => menu.slug === `header-menu`);
  if (!headerMenu) return null;

  const menuLength = headerMenu.menuItems.nodes.length;
  const lastItem = headerMenu.menuItems.nodes[menuLength - 1];
  const otherItems = headerMenu.menuItems.nodes.filter((item, index) => index !== menuLength - 1);

  const handleClick = e => {
    e.preventDefault();
    toggleMenu(!menuOpen);
  };

  return (
    <HeaderComponent>
      <div className="header__contents">
        <Link to="/" className="header__logo">
          <Logo />
        </Link>
        <nav className={menuOpen ? `header__menu--show` : undefined}>
          {otherItems.map(item => (
            <MenuItem key={`header-nav-${item?.id}`} {...item} />
          ))}
        </nav>
        <a className="mailtoui" href={lastItem.url}>
          {lastItem.label}
        </a>
        <button onClick={handleClick}>
          <span>{menuOpen ? `Close` : `Open`} Menu</span>
          <span> Navigation</span>
          {menuOpen ? <Times /> : <Bars />}
        </button>
      </div>
    </HeaderComponent>
  );
};

export default Header;
