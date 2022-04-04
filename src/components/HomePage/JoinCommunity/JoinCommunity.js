import React from "react"
import arrow from "../../../images/follow-arrow.svg"
import * as content from "../../../constants/content/joinCommunity"
import * as styles  from "./JoinCommunity.module.css"

const JoinCommunity = () => (
  <div className={styles.communityWrap}>
    <div className={"container"}>
        <div className={styles.titleWrap}>
          <h2>{content.TITLE} <span>{content.TITLE_COLORED}</span></h2>
          <p>{content.DESCRIPTION}</p>
        </div>
        <div className={styles.communitiesList}>
          {content.SOCIAL_LIST.map((el,idx) => (
            <div className={styles.community} key={idx}>
              <div className={styles.communityContent}>
                <div className={styles.icon}>{el.icon}</div>
                <div className={styles.title}>{el.title}</div>
                <div className={styles.text}>{el.text}</div>
                <a href="/" className={styles.link}>
                  {el.btn_text}
                  <img src={arrow} alt="follow"/>
                </a>
              </div>
            </div>
          ))}
        </div>
    </div>
  </div>
)

export default JoinCommunity
