/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames/bind';
import { StaticImage } from 'gatsby-plugin-image';
import Partners from '../Partners';
import { Popup } from 'react-typeform-embed';

import * as styles from './Hero.module.css';
import * as content from '../../../../constants/content/hero';
import * as partners from '../../../../constants/content/partners';


const Hero = () => (
  <div className={classNames(styles.hero, partners?.LOGOS_LIST?.length > 0 && styles.heroWithPartners)}>
    <div className={classNames("container", styles.container)}>
      <div className={styles.heroText}>
        <h1>
          {content.TITLE}
          <span>{content.TITLE_COLORED}</span>
          {content.TITLE_LAST}
        </h1>
        <p className={styles.description}>{content.DESCRIPTION}</p>
        <Popup id="PF5a05ot" size={80}>
          <a
            className={classNames('button b-green', styles.heroBtn)}
            title={content.CTA_BUTTON}
          >
            <span>{content.CTA_BUTTON}</span>
          </a>
        </Popup>
        <p className={styles.ctaText}>{content.CTA_TEXT}</p>

      </div>
      {partners?.LOGOS_LIST.length &&
        <Partners
          title={partners.TITLE}
          titleColored={partners.TITLE_COLORED}
          logosList={partners?.LOGOS_LIST}
        />
      }
    </div>
  </div>
);

export default Hero;
