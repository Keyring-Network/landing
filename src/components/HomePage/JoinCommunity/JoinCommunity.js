import React from "react"
import * as content from "../../../constants/content/joinCommunity"
import * as styles  from "./JoinCommunity.module.css"

const JoinCommunity = () => (
  <div className={styles.communityWrap}>
    <div className={"container"}>
      <div className={styles.titleWrap}>
        <h2>{content.TITLE} <span>{content.TITLE_COLORED}</span></h2>
        <p>{content.DESCRIPTION}</p>
      </div>
      {content.SOCIAL_LIST.map((el,idx) => (
        <div key={idx} >
          <div>{el.icon}</div>
          <div>{el.title}</div>
          <div>{el.text}</div>
          <a href="/">{el.btn_text}</a>
        </div>
      ))}
    </div>
  </div>
)

export default JoinCommunity
