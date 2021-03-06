import React from 'react';

import labirinth from '../../../../assets/images/labirinth.svg';
import decor1 from '../../../../assets/images/decor/key-up.svg';
import decor2 from '../../../../assets/images/decor/fingerprint.svg';
import * as content from '../../../../constants/content/signUp';
import * as styles from './SignUp.module.css';

const SignUp = () => (
  <div id="join-waitlist" className="container">
    <div className={styles.signUpWrap}>
      <div className={styles.signUpContent}>
        <img src={decor1} className={styles.decorKeyUp} alt="diagram" loading="lazy" />
        <img src={decor2} className={styles.decorFingerPrint} alt="diagram" loading="lazy" />
        <div className={styles.titleWrap}>
          <h2>{content.TITLE}</h2>
          <p>{content.DESCRIPTION}</p>
        </div>
        <a href={content.BTN_URL} className={styles.btn} target="_blank" rel="noreferrer">
          <span>{content.BTN_TEXT}</span>
        </a>
      </div>
      <img src={labirinth} className={styles.labirinth} alt="labirinth" loading="lazy" />
    </div>
  </div>
);

export default SignUp;
