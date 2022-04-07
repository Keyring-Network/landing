import React, {useState} from "react"
import classNames from "classnames/bind"
import * as content from "../../../../constants/content/faq"
import * as styles  from "./FAQ.module.css"
import postImage from "../../../../assets/images/post_image.jpg"
import arrow from "../../../../assets/images/arrow.svg"
import discord from "../../../../assets/images/discord-black.svg"
import download from "../../../../assets/images/download.svg"

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div id={"faq"} className={styles.faqWrap}>
      <div className={classNames("container", styles.container)}>
        <div className={styles.leftContent}>
          <div className={styles.titleWrap}>
            <h2>{content.TITLE} <span>{content.TITLE_COLORED}</span></h2>
          </div>
          <div className={styles.faqAddons}>
            <h3 className={styles.faqAddon}>{content.FAQ_ADDON}</h3>
            <a href="/" className={styles.link}>
              <img src={download} alt="download"/>
              {content.DOWNLOAD_DOCS}
            </a>
            <a href="/" className={styles.link}>
              <img src={discord} alt="discord"/>
              {content.ASK_DISCORD}
            </a>
          </div>
        </div>
        <div className={styles.tabsWrap}>
          {content.FAQS.map((el,idx) => (
            <div
              className={classNames(styles.itemListWrap, activeTab === idx ? styles.active : '')}
              onClick={() => {setActiveTab(idx)}}
              key={idx}
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
        <div className={styles.faqAddonsMobile}>
          <h3 className={styles.faqAddon}>{content.FAQ_ADDON}</h3>
          <a href="/" className={styles.link}>
            <img src={download} alt="download"/>
            {content.DOWNLOAD_DOCS}
          </a>
          <a href="/" className={styles.link}>
            <img src={discord} alt="discord"/>
            {content.ASK_DISCORD}
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQ
