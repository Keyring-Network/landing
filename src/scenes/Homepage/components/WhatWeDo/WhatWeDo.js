import React from "react";
import classNames from "classnames/bind";
import mainImg from "../../../../assets/images/what_we_do_1.jpg";
import decor1 from "../../../../assets/images/decor/arrow.svg";
import decor2 from "../../../../assets/images/decor/padlock.svg";
import * as content from "../../../../constants/content/whatWeDo";
import * as styles from "./WhatWeDo.module.css";

const WhatWeDo = () => (
  <div id="how-works" className={styles.partnersWrap}>
    <div className={classNames("container", styles.container)}>
      <div className={styles.contentWrap}>
        <div className={classNames(styles.imageWrap)}>
          <div className={classNames(styles.image)}>
            <img src={mainImg} alt="" className={styles.mainImage} />
            <img
              src={decor1}
              className={styles.decorArrow}
              alt="decor icon"
              loading="lazy"
            />
            <img
              src={decor2}
              className={styles.decorLock}
              alt="decor icon"
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.titleWrap}>
            <h2>{content.TITLE}</h2>
            <p>{content.DESCRIPTION}</p>
          </div>
          <div className={classNames(styles.imageWrap, styles.imageWrapMobile)}>
            <div className={classNames(styles.image)}>
              <img src={mainImg} alt="" className={styles.mainImage} />
              <img
                src={decor1}
                className={styles.decorArrow}
                alt="decor icon"
                loading="lazy"
              />
              <img
                src={decor2}
                className={styles.decorLock}
                alt="decor icon"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            {content.LIST.map((el, idx) => (
              <div
                className={classNames(styles.itemListWrap)}
                // eslint-disable-next-line react/no-array-index-key
                key={`${el.title}, ${idx}`}
              >
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
    </div>
  </div>
);

export default WhatWeDo;
