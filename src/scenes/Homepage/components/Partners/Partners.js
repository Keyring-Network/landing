import React from 'react';
import classNames from 'classnames/bind';
import * as content from '../../../../constants/content/partners';
import * as styles from './Partners.module.css';

const Partners = () => (
  <div className={styles.partnersWrap}>
    <div className={classNames('container', styles.container)}>
      <h3>
        {content.TITLE}
        {' '}
        <span>{content.TITLE_COLORED}</span>
      </h3>
      <div className={styles.logosWrap}>
        {content.LOGOS_LIST.map(({logo, url}) => (
          <a href={url ? url : "/"} className={styles.logo} key={logo}>
            <img src={logo} alt="partner" loading="eager" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Partners;
