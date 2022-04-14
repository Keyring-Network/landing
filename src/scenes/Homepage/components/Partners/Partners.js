import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './Partners.module.css';

const Partners = ({title, titleColored, logosList}) => (
  <div className={styles.partnersWrap}>
    <h3>
      {title}
      {' '}
      <span>{titleColored}</span>
    </h3>
    <div className={styles.logosWrap}>
      {logosList?.map(({logo, url}) => (
        <a href={url ? url : "/"} className={styles.logo} key={logo}>
          <img src={logo} alt="partner" loading="eager"/>
        </a>
      ))}
    </div>
  </div>
);

export default Partners;
