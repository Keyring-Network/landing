import React from 'react';
import classNames from 'classnames/bind';
import arrow from '../../../../assets/images/follow-arrow.svg';
import decor1 from '../../../../assets/images/decor/padlock-mirror.svg';
import decor2 from '../../../../assets/images/decor/key.svg';
import * as content from '../../../../constants/content/joinCommunity';
import * as styles from './JoinCommunity.module.css';

const JoinCommunity = () => (
  <div id="community" className={styles.communityWrap}>
    <div className={classNames('container', styles.communityContainer)}>
      <img src={decor1} className={styles.decorPadlock} alt="diagram" loading="lazy" />
      <img src={decor2} className={styles.decorKey} alt="diagram" loading="lazy" />
      <div className={styles.titleWrap}>
        <h2>
          {content.TITLE}
          {' '}
          <span>{content.TITLE_COLORED}</span>
        </h2>
        <p>{content.DESCRIPTION}</p>
      </div>
      <div className={styles.communitiesList}>
        {content.SOCIAL_LIST.map((el) => (
          <div className={styles.community} key={el.title}>
            <div className={styles.communityContent}>
              <div className={styles.icon}>{el.icon}</div>
              <div className={styles.title}>{el.title}</div>
              <div className={styles.text}>{el.text}</div>
              <a href="/" className={classNames('link_colored', styles.link)}>
                {el.btn_text}
                <img src={arrow} alt="follow" loading="lazy" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default JoinCommunity;
