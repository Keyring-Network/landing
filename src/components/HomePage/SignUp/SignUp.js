import React from "react"
import * as content from "../../../constants/content/signUp"
import * as styles  from "./SignUp.module.css"

const SignUp = () => (
  <div className={styles.signUpWrap}>
    <div className={"container"}>
      <div className={styles.titleWrap}>
        <h2>{content.TITLE} <span>{content.TITLE_COLORED}</span></h2>
        <p>{content.DESCRIPTION}</p>
      </div>
      <a href="/">{content.BTN_TEXT}</a>
    </div>
  </div>
)

export default SignUp
