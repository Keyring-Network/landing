import React from "react"
import { Link } from "gatsby"
import classNames from "classnames/bind"
import logo from "../../images/logo.svg"
import * as menu from "../../constants/headerMenu"
import * as styles from "./Header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className={classNames("container", styles.container)}>
      <Link to={"/"}>
        <img src={logo} alt={"keyring logo"} />
      </Link>
      {console.log(menu.headerMenu)}
      <ul className={styles.menu}>
        {menu.headerMenu.map((el, idx) => (
          <li key={idx}>
            <Link to={el.url}>{el.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  </header>
)

export default Header

