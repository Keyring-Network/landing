import React from 'react';
import classNames from 'classnames/bind';

import * as styles from './Hero.module.css';
import * as content from '../../../../constants/content/hero';
import Button from '../../../../components/Button';
import padlock from '../../../../assets/images/padlock.svg';
import key from '../../../../assets/images/key.svg';
import anonMask from '../../../../assets/images/anon-mask.svg';
import shield from '../../../../assets/images/shield.svg';

const Hero = () => (
  <div className={styles.hero}>
    <div className="container">
      <div className={styles.heroText}>
        <h1>
          {content.TITLE}
          <span>{content.TITLE_COLORED}</span>
          {content.TITLE_LAST}
        </h1>
        <p className={styles.description}>{content.DESCRIPTION}</p>
        <Button
          url={content.CTA_BUTTON_URL}
          btnStyles={classNames('button b-green', styles.heroBtn)}
          title={content.CTA_BUTTON}
        />

        <p className={styles.ctaText}>{content.CTA_TEXT}</p>
        <img src={padlock} className={styles.padlock} alt="padlock" loading="eager" />
        <img src={key} className={styles.key} alt="key" loading="eager" />
        <img src={anonMask} className={styles.anonMask} alt="anon mask" loading="eager" />
        <img src={shield} className={styles.shield} alt="shield" loading="eager" />
      </div>
    </div>
  </div>
);

export default Hero;