import React from 'react';
import { useState } from 'react';

// if (typeof window !== `undefined`) {
//   // Make scroll behavior of internal links smooth
//   // eslint-disable-next-line global-require
//   require(`mailtoui/dist/mailtoui-min.js`)(`MailtoUI.run()`);
// }

import HeaderComponent from './header.styles';

import { Link } from 'wjhm';
import { Logo } from 'wjhm';
import { Bars } from '../../atoms/icons/solid';
import { Times } from '../../atoms/icons/solid';

import { MenuItem } from 'wjhm';

import { Menu } from 'wjhmtypes';

type HeaderProps = {
  menu: Menu;
};

const Header = (props: HeaderProps) => {
  const headerMenu = props?.menu;
  const menuItems = headerMenu?.menuItems?.nodes;

  const [menuOpen, toggleMenu] = useState(false);

  const menuLength = menuItems?.length;
  const hasItems = menuLength > 0;
  const lastItem = !hasItems ? null : menuItems[menuLength - 1];
  const otherItems = !hasItems ? null : menuItems.filter((item, index) => index !== menuLength - 1);

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
        {hasItems && (
          <nav className={menuOpen ? `header__menu--show` : undefined}>
            {otherItems.map(item => (
              <MenuItem key={`header-nav-${item?.id}`} {...item} />
            ))}
          </nav>
        )}
        {hasItems && (
          <a className="mailtoui" href={lastItem.url}>
            {lastItem.label}
          </a>
        )}
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
