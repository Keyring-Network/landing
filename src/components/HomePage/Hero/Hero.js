import React from "react"
import classNames from "classnames/bind"
import * as styles  from "./Hero.module.css"
import * as content from "../../../constants/content/hero"
import Button from "../../Button"
import heroAnon from "../../../images/hero-anon.png"
import padlock from "../../../images/padlock.svg"
import key from "../../../images/key.svg"
import anonMask from "../../../images/anon-mask.svg"
import shield from "../../../images/shield.svg"

const Hero = () => (
  <div className={styles.hero}>
    <div className={"container"}>
      <div className={styles.heroText}>
        <h1>{content.TITLE}
          <span>{content.TITLE_COLORED}</span>
          {content.TITLE_LAST}
        </h1>
        <p className={styles.description}>{content.DESCRIPTION}</p>
        <Button
          url={"#section"}
          btnStyles={classNames("btn_colorBorder", styles.heroBtn)}
          title={content.CTA_BUTTON}
        />
        <p className={styles.ctaText}>{content.CTA_TEXT}</p>
        <img src={padlock} className={styles.padlock} alt="padlock" />
        <img src={key} className={styles.key} alt="key" />
        <img src={anonMask} className={styles.anonMask} alt="anon mask" />
        <img src={shield} className={styles.shield} alt="shield" />
      </div>
    </div>
  </div>
)

export default Hero
