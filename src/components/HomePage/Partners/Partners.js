import React from "react"
import * as content from "../../../constants/content/partners"
import * as styles  from "./Partners.module.css"
import logo1 from "../../../images/Logo-1.svg"
import logo2 from "../../../images/Logo-2.svg"
import logo3 from "../../../images/Logo-3.svg"
import logo4 from "../../../images/Logo-4.svg"
import logo5 from "../../../images/Logo-5.svg"

const logos = [
  logo1, logo2, logo3, logo4, logo5
]

const Partners = () => (
  <div className={styles.partnersWrap}>
    <div className={"container flex"}>
      <h3>{content.TITLE} {content.TITLE_COLORED}</h3>
      <div className={styles.logosWrap}>
        {logos.map((logo) => (
          <div className={styles.logo}>
            <img src={logo} alt="partner" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Partners
