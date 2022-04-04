import React from "react"
import labirinth from "../../../images/labirinth.svg"
import * as content from "../../../constants/content/signUp"
import * as styles  from "./SignUp.module.css"

const SignUp = () => (
  <div className={"container"}>
    <div className={styles.signUpWrap}>
      <div className={styles.signUpContent}>
        <div className={styles.titleWrap}>
          <h2>{content.TITLE} <br /><span>{content.TITLE_COLORED}</span></h2>
          <p>{content.DESCRIPTION}</p>
        </div>
        <a href="/" className={styles.btn}>{content.BTN_TEXT}</a>
      </div>
      <img src={labirinth} className={styles.img} alt={"labirinth"}/>
    </div>
  </div>
)

export default SignUp