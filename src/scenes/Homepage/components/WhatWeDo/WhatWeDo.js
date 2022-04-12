import React, { useState } from 'react';
import classNames from 'classnames/bind';
import decor1 from '../../../../assets/images/decor/arrow.svg';
import decor2 from '../../../../assets/images/decor/padlock.svg';
import * as content from '../../../../constants/content/whatWeDo';
import * as styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="how-works" className={styles.partnersWrap}>
      <div className={classNames('container', styles.container)}>
        <div className={styles.titleWrap}>
          <h2>
            {content.TITLE}
            {' '}
            <span>{content.TITLE_COLORED}</span>
          </h2>
          <p>{content.DESCRIPTION}</p>
        </div>
        <div className={styles.listWrap}>
          {content.LIST.map((el, idx) => (
            <div
              className={classNames(styles.itemListWrap, activeTab === idx ? styles.active : '')}
              onClick={() => { setActiveTab(idx); }}
              onKeyDown={() => { setActiveTab(idx); }}
              // eslint-disable-next-line react/no-array-index-key
              key={`${el.title}, ${idx}`}
              role="button"
              tabIndex="0"
            >
              <div className={classNames(styles.itemListImageWrap)}>
                <div className={classNames(styles.itemListImage)}>
                  <img src={el.img} className={styles.mainImg} alt="diagram" loading="lazy" />
                  <img src={decor1} className={styles.decorArrow} alt="diagram" loading="lazy" />
                  <img src={decor2} className={styles.decorLock} alt="diagram" loading="lazy" />
                </div>
              </div>
              <div className={classNames(styles.itemList)}>
                <div className={styles.icon}>{el.icon}</div>
                <div className={classNames(styles.itemListContent)}>
                  <p className={styles.title}>{el.title}</p>
                  <p className={styles.text}>{el.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
