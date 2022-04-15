import React, { useState } from 'react';
import classNames from 'classnames/bind';
import AddonsMobile from './components/AddonsMobile';
import * as content from '../../../../constants/content/faq';
import * as styles from './FAQ.module.css';
import arrow from '../../../../assets/images/arrow.svg';
import discord from '../../../../assets/images/discord.svg';
import download from '../../../../assets/images/download.svg';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="faq" className={styles.faqWrap}>
      <div className={classNames('container', styles.container)}>
        <div className={styles.leftContent}>
          <div className={styles.titleWrap}>
            <h2>
              {content.TITLE}
              {' '}
              <span>{content.TITLE_COLORED}</span>
            </h2>
          </div>
          <div className={styles.faqAddons}>
            <h3 className={styles.faqAddon}>{content.FAQ_ADDON}</h3>
            <a
              href={content.READ_DOCS}
              className={classNames('link_colored', styles.link)}
              target="_blank"
              rel="noreferrer"
            >
              <img src={download} alt="download" />
              {content.DOWNLOAD_DOCS}
            </a>
            <br />
            <a href={content.LINK_DISCORD} className={classNames('link_colored', styles.link)} target="_blank" rel="noreferrer">
              <img src={discord} alt="discord" loading="lazy" />
              {content.ASK_DISCORD}
            </a>
          </div>
        </div>
        <div className={styles.tabsWrap}>
          {content.FAQS.map((el, idx) => (
            <div
              className={classNames(styles.itemListWrap, activeTab === idx ? styles.active : '')}
              onClick={() => { setActiveTab(idx); }}
              // eslint-disable-next-line react/no-array-index-key
              key={`${el.question}, ${idx}`}
              onKeyDown={() => { setActiveTab(idx); }}
              role="button"
              tabIndex="0"
            >
              <div className={styles.itemListContent}>
                <img src={arrow} className={styles.arrow} alt={arrow} />
                <div>
                  <p className={styles.question}>{el.question}</p>
                  <p className={styles.answear}>{el.answear}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <AddonsMobile
          defaultStyles={styles}
          discordIcon={discord}
          downloadIcon={download}
        />
      </div>
    </div>
  );
};

export default FAQ;
