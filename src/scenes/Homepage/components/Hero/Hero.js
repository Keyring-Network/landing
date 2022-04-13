import React from 'react';
import classNames from 'classnames/bind';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './Hero.module.css';
import * as content from '../../../../constants/content/hero';

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
        <a
          href={content.CTA_BUTTON_URL}
          className={classNames('button b-green', styles.heroBtn)}
          title={content.CTA_BUTTON}
          target="_blank"
          rel="noreferrer"
        >
          <span>{content.CTA_BUTTON}</span>
        </a>

        <p className={styles.ctaText}>{content.CTA_TEXT}</p>
        <div className={styles.padlock}>
          <StaticImage src="../../../../assets/images/padlock.svg" alt="padlock" loading="eager" placeholder="blurred" />
        </div>
        <div className={styles.key}>
          <StaticImage src="../../../../assets/images/key.svg" alt="key" loading="eager" placeholder="blurred" />
        </div>
        <div className={styles.anonMask}>
          <StaticImage src="../../../../assets/images/anon-mask.svg" alt="anon mask" loading="eager" placeholder="blurred" />
        </div>
        <div className={styles.shield}>
          <StaticImage src="../../../../assets/images/shield.svg" alt="shield" loading="eager" placeholder="blurred" />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
