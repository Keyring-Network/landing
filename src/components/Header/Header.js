import React from "react"
import { Link } from "gatsby"
import classNames from "classnames/bind"
import logo from "../../images/logo.svg"
import * as menu from "../../constants/navMenu"
import * as styles from "./Header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className={classNames("container", styles.container)}>
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
  </header>
)

export default Header

