import React from 'react'
import { Parallax } from 'react-scroll-parallax';

import padlock from '../../../../../../assets/images/padlock.svg';
import key from '../../../../../../assets/images/key.svg';
import anonMask from '../../../../../../assets/images/anon-mask.svg';
import shield from '../../../../../../assets/images/shield.svg';

import * as styles from './DecorIcons.module.css';

const DecorIcons = () => (
  <div className={styles.decorWrap}>
    <Parallax speed={80}>
      <img src={padlock} className={styles.padlock} alt="" loading="eager" />
    </Parallax>
    <Parallax speed={30}>
      <img src={key} className={styles.key} alt="" loading="eager" />
    </Parallax>
    <Parallax speed={-15}>
      <img src={anonMask} className={styles.anonMask} alt="" loading="eager" />
    </Parallax>
    <Parallax speed={50}>
      <img src={shield} className={styles.shield} alt="" loading="eager" />
    </Parallax>
  </div>
)

export default DecorIcons;
