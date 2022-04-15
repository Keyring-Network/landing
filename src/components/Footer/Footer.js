import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames/bind';
import Logo from '../Logo';
import * as menu from '../../constants/navMenu';
import * as content from '../../constants/footer';
import * as styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={classNames('container', styles.footerContainer)}>
      <Logo color='#ffffff' />
      <ul className={styles.menu}>
        {menu.navMenu.map((el) => (
          <li key={el.url}>
            <Link to={el.url}>{el.text}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className={classNames('container', styles.footerContainer)}>
      <p className={styles.footerInfo}>{content.INFO_TEXT}</p>
      <ul className={styles.mobileMenu}>
        {menu.navMenu.map((el) => (
          <li key={el.url}>
            <Link to={el.url}>{el.text}</Link>
          </li>
        ))}
      </ul>
      <ul className={styles.socials}>
        {content.SOCIAL.map((el) => (
          <li key={el.icon}>
            <a href={el.url} target="_blank" rel="noreferrer">
              <img src={el.icon} alt="social icon" loading="lazy" />
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className={classNames('container', styles.footerContainer)}>
      <hr />
      <p className={styles.rights}>{content.RIGHTS_RESERVED_TEXT}</p>
      <ul className={styles.termsMenu}>
        {content.TERMS_MENU.map((el) => (
          <li key={el.text}>
            <a href={el.url} title={el.text} target="_blank" rel="noreferrer">
              {el.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
