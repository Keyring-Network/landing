import React, {useState} from "react"
import classNames from "classnames/bind"
import * as content from "../../../constants/content/whatWeDo"
import * as styles  from "./WhatWeDo.module.css"

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={styles.partnersWrap}>
      <div className={classNames("container", styles.container)}>
        <div className={styles.titleWrap}>
          <h2>{content.TITLE} <span>{content.TITLE_COLORED}</span></h2>
          <p>{content.DESCRIPTION}</p>
        </div>
        <div className={styles.listWrap}>
          {content.LIST.map((el,idx) => (
            <div
              className={classNames(styles.itemListWrap, activeTab === idx ? styles.active : '')}
              onClick={() => {setActiveTab(idx)}}
              key={idx}
            >
              <div className={classNames(styles.itemListImage)}>
                <img src={el.img} alt={"diagram"} />
              </div>
              <div className={classNames(styles.itemList)}>
                <div className={styles.icon}>{el.icon}</div>
                <div className={styles.itemInfo}>
                  <p className={styles.title}>{el.title}</p>
                  <p className={styles.text}>{el.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
