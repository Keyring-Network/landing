import React from "react"
import classNames from "classnames/bind"
import * as content from "../../../constants/content/whatWeDo"
import * as styles  from "./WhatWeDo.module.css"

const WhatWeDo = () => {
  return (
    <div className={styles.partnersWrap}>
      <div className={"container"}>
        <div className={styles.titleWrap}>
          <h2>{content.TITLE} <span>{content.TITLE_COLORED}</span></h2>
          <p>{content.DESCRIPTION}</p>
        </div>
        <div className={styles.listWrap}>
          {content.LIST.map((el,idx) => (
            <div
              className={classNames(styles.itemListWrap, idx === 0 ? styles.active : '')}
              onMouseOver={(e) => e.currentTarget.classList.add(styles.active)}
              onMouseOut={(e) => e.currentTarget.classList.remove(styles.active)}
              key={idx}
            >
              <div className={classNames(styles.itemListImage)}>
                <img src={el.img} alt={"diagram"} />
              </div>
              <div className={classNames(styles.itemList)}
                // onMouseOver={(e) => e.currentTarget.classList.add(styles.active)}
                // onMouseOut={(e) => e.currentTarget.classList.remove(styles.active)}
              >
                <div>{el.icon}</div>
                <p className={styles.title}>{el.title}</p>
                <p className={styles.text}>{el.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
