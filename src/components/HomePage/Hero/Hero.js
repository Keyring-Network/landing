import React from "react"
import * as styles  from "./Hero.module.css"
import * as content from "../../../constants/content/hero"
import Button from "../../Button"
import heroAnon from "../../../images/hero-anon.png"
import padlock from "../../../images/padlock.svg"
import key from "../../../images/key.svg"
import anonMask from "../../../images/anon-mask.svg"

const Hero = () => (
  <div className={styles.hero}>
    <div className={"container"}>
      <div className={styles.heroText}>
        <h1>{content.TITLE}
          <span>{content.TITLE_COLORED}</span>
          {content.TITLE_LAST}
        </h1>
        <p>{content.DESCRIPTION}</p>
        <Button url={"#section"} btnStyles={"btn_colorBorder"} title={content.CTA_BUTTON} />
        <p>{content.CTA_TEXT}</p>
      </div>
      <div className={styles.heroImageWrap}>
        <img src={heroAnon} alt="anon" />
        <div className={styles.imagesGroup}>
          <img src={padlock} alt="padlock" />
          <img src={key} alt="key" />
          <img src={anonMask} alt="anon mask" />
        </div>
      </div>
    </div>
  </div>
)

export default Hero
