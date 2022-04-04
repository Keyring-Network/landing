import React from "react"
import { Link } from "gatsby"
import classNames from "classnames/bind"
import logo from "../../images/logo.svg"
import * as menu from "../../constants/navMenu"
import * as content from "../../constants/footer"
import * as styles from "./Footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={classNames("container", styles.footerContainer)}>
      <Link to={"/"}>
        <img src={logo} alt={"keyring logo"} />
      </Link>
      <ul className={styles.menu}>
        {menu.navMenu.map((el, idx) => (
          <li key={idx}>
            <Link to={el.url}>{el.text}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className={classNames("container", styles.footerContainer)}>
      <p>{content.INFO_TEXT}</p>
      <ul className={styles.socials}>
        {content.SOCIAL.map((el, idx) => (
          <li key={idx}>
            <Link to={el.url}>
              {el.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className={classNames("container", styles.footerContainer)}>
      <p>{content.RIGHTS_RESERVED_TEXT}</p>
      <ul className={styles.socials}>
        {content.TERMS_MENU.map((el, idx) => (
          <li key={idx}>
            <Link to={el.url}>
              {el.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </footer>
)

export default Footer
