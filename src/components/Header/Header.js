import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames/bind';
import { useWindowScroll } from 'react-use';
import { globalHistory as history } from '@reach/router';
import { Popup } from 'react-typeform-embed';

import MobileMenu from './components/MobileMenu';
import Logo from '../Logo';
import * as menu from '../../constants/navMenu';
import * as styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledDown, setScrollDown] = useState(false);
  const { y: verticalScrollCoordinate } = useWindowScroll();

  useEffect(() => {
    if (!verticalScrollCoordinate) {
      setScrollDown(false);
    }

    if (isScrolledDown) {
      return;
    }

    if (verticalScrollCoordinate) {
      setScrollDown(true);
    }
  }, [verticalScrollCoordinate]);

  const onCLickMenu = () => setIsOpen(!isOpen);

  const {
    location: { hash },
  } = history;

  return (
    <header
      className={classNames(
        styles.header,
        isScrolledDown && styles.scrolledHeader
      )}
    >
      <div className={classNames('container', styles.container)}>
        <Link to="/">
          <Logo color={isOpen ? '#0f2830' : '#ffffff'} />
        </Link>
        <MobileMenu
          menuList={menu.navMenu}
          open={isOpen}
          onCLickMenu={onCLickMenu}
        />
        <ul className={styles.menu}>
          {menu.navMenu.map((el) => (
            <li key={el.text}>
              <Link
                to={el.url}
                title={el.text}
                className={classNames({
                  [styles.active]: el.url === hash && hash !== '#join-waitlist',
                })}
              >
                {el.text}
              </Link>
            </li>
          ))}
          <li>
            <Popup id="PF5a05ot" size={80}>
              <button
                title={menu.CTA_BUTTON}
                type="button"
                className="btn_whiteBorder"
              >
                {menu.CTA_BUTTON}
              </button>
            </Popup>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
