/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames/bind';
import { Popup } from 'react-typeform-embed';
import AnimatedBlock from './components/AnimatedBlock';
import * as styles from './Hero.module.css';
import * as content from '../../../../constants/content/hero';

import useMediaQuery from '../../../../hooks/useMediaQuery';

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 991px)');

  return (
    <>
      <div id='hero' className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroText}>
            <h1>{content.TITLE}</h1>
            <p className={styles.description}>{content.DESCRIPTION}</p>

            <div className={styles.ctaBlock}>
              <Popup id='PF5a05ot' size={80}>
                <a
                  className={classNames(
                    'button-green button-green-gradient',
                    styles.heroBtn
                  )}
                  title={content.CTA_BUTTON}
                >
                  <span>{content.CTA_BUTTON}</span>
                </a>
              </Popup>
              <p className={styles.ctaText}>{content.CTA_TEXT}</p>
            </div>

            {!isMobile ? <AnimatedBlock /> : null}
          </div>

          {isMobile ? <AnimatedBlock isMobile={isMobile} /> : null}
        </div>
      </div>
    </>
  );
};

export default Hero;
