import React, {useState} from "react"
import classNames from "classnames/bind"
import * as content from "../../../constants/content/faq"
import * as styles  from "./FAQ.module.css"
import postImage from "../../../images/post_image.jpg"

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={styles.faqWrap}>
      <div className={"container"}>
        <div className={styles.titleWrap}>
          <h2>{content.TITLE} <span>{content.TITLE_COLORED}</span></h2>
        </div>
        {content.FAQS.map((el,idx) => (
          <div
            className={classNames(styles.itemListWrap, activeTab === idx ? styles.active : '')}
            onClick={() => {setActiveTab(idx)}}
            ref={tabRef}
            key={idx}
          >
            <div className={styles.question}>
              <p className={styles.question}>{el.question}</p>
            </div>
            <div className={styles.answear}>
              <p className={styles.answear}>{el.answear}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
