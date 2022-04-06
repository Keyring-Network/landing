import React from "react"
import classNames from "classnames/bind"
import Button from "../../Button"
import * as content from "../../../constants/content/latestNews"
import * as styles  from "./LatestNews.module.css"
import postImage from "../../../assets/images/post_image.jpg"
import medium from "../../../assets/images/medium-black.svg"

const LatestNews = () => {
  return (
    <div className={styles.newsWrap}>
      <div className={"container"}>
        <div className={styles.titleWrap}>
          <h2>{content.TITLE} <span>{content.TITLE_COLORED}</span></h2>
          <p>{content.DESCRIPTION}</p>
        </div>
        <div className={styles.postsWrap}>
          <div className={styles.post}>
            <div className={styles.imageWrap}>
              <img src={postImage} alt=""/>
            </div>
            <div className={styles.info}>
              <h4 className={styles.title}>How to use Keyring’s extention</h4>
              <p className={styles.text}>I was amazed at how easy it was to use yours extention.</p>
              <p className={styles.author}>Alex Rives</p>
              <p className={styles.date}>March 5, 2022 • 5 min to read</p>
              <img src={medium} className={styles.mediumIcon} alt="medum"/>
            </div>
          </div>
          <div className={styles.post}>
            <div className={styles.imageWrap}>
              <img src={postImage} alt=""/>
            </div>
            <div className={styles.info}>
              <h4 className={styles.title}>How to use Keyring’s extention</h4>
              <p className={styles.text}>I was amazed at how easy it was to use yours extention.</p>
              <p className={styles.author}>Alex Rives</p>
              <p className={styles.date}>March 5, 2022 • 5 min to read</p>
              <img src={medium} className={styles.mediumIcon} alt="medum"/>
            </div>
          </div>
          <div className={styles.post}>
            <div className={styles.imageWrap}>
              <img src={postImage} alt=""/>
            </div>
            <div className={styles.info}>
              <h4 className={styles.title}>How to use Keyring’s extention</h4>
              <p className={styles.text}>I was amazed at how easy it was to use yours extention.</p>
              <p className={styles.author}>Alex Rives</p>
              <p className={styles.date}>March 5, 2022 • 5 min to read</p>
              <img src={medium} className={styles.mediumIcon} alt="medum"/>
            </div>
          </div>
        </div>
        <Button
          url={"https://medium.com"}
          btnStyles={classNames("btn_whiteBorder", styles.newsBtn)}
          title={content.BTN_TEXT}
          target={"_blank"}
        />
      </div>
    </div>
  )
}

export default LatestNews
