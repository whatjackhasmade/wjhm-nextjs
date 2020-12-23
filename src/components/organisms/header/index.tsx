import { useState } from 'react';
import { useQuery } from 'react-query';

import { Link } from 'wjhm';
import { Logo } from 'wjhm';
import { Bars } from '../../atoms/icons/solid';
import { Times } from '../../atoms/icons/solid';

import { callGetMenu } from 'wjhm';

import { MenuItem } from 'wjhm';

import HeaderComponent from './header.styles';

import type { Menu } from 'wjhmtypes';

declare type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [menuOpen, toggleMenu] = useState(false);

  const { data, error, isLoading: loading } = useQuery([`callGetMenu`, { slug: `header-menu` }], callGetMenu);
  const headerMenu: Menu = data?.menus?.nodes?.[0];
  const menuItems = headerMenu?.menuItems?.nodes;

  const menuLength: number = menuItems?.length;
  const hasItems: boolean = menuLength > 0;
  const lastItem = !hasItems ? null : menuItems[menuLength - 1];
  const otherLength = (i: number): boolean => i !== menuLength - 1;
  const otherItems = !hasItems ? null : menuItems.filter((_, i) => otherLength(i));

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    toggleMenu(!menuOpen);
  };

  if (error) console.error(error);

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
