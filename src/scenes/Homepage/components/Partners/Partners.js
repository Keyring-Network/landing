import React from 'react';
import classNames from 'classnames/bind';
import * as content from '../../../../constants/content/partners';
import * as styles from './Partners.module.css';
import logo1 from '../../../../assets/images/Logo-1.svg';
import logo2 from '../../../../assets/images/Logo-2.svg';
import logo3 from '../../../../assets/images/Logo-3.svg';
import logo4 from '../../../../assets/images/Logo-4.svg';
import logo5 from '../../../../assets/images/Logo-5.svg';

const logos = [
  logo1, logo2, logo3, logo4, logo5,
];

const Partners = () => (
  <div className={styles.partnersWrap}>
    <div className={classNames('container', styles.container)}>
      <h3>
        {content.TITLE}
        {' '}
        <span>{content.TITLE_COLORED}</span>
      </h3>
      <div className={styles.logosWrap}>
        {logos.map((logo) => (
          <div className={styles.logo} key={logo}>
            <img src={logo} alt="partner" loading="eager" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Partners;
