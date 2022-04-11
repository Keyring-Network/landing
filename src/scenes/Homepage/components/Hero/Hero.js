import React from 'react';
import classNames from 'classnames/bind';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './Hero.module.css';
import * as content from '../../../../constants/content/hero';
import Button from '../../../../components/Button';

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
        <StaticImage src="../../../../assets/images/padlock.svg" className={styles.padlock} alt="padlock" placeholder="blurred" loading="eager" />
        <StaticImage src="../../../../assets/images/key.svg" className={styles.key} alt="key" placeholder="blurred" loading="eager" />
        <StaticImage src="../../../../assets/images/anon-mask.svg" className={styles.anonMask} alt="anon mask" placeholder="blurred" loading="eager" />
        <StaticImage src="../../../../assets/images/shield.svg" className={styles.shield} alt="shield" placeholder="blurred" loading="eager" />
      </div>
    </div>
  </div>
);

export default Hero;
