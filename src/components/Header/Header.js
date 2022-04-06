import React, {useState} from "react"
import { Link } from "gatsby"
import classNames from "classnames/bind"
import MobileMenu from "./components/MobileMenu"
import logo from "../../assets/images/logo.svg"
import * as menu from "../../constants/navMenu"
import * as styles from "./Header.module.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={classNames("container", styles.container)}>
        <Link to={"/"}>
          <img src={logo} alt={"keyring logo"} />
        </Link>
        {/*<div className={styles.burgerContainer}>*/}
        {/*  <div*/}
        {/*    className={classNames(styles.burger, isOpen && styles.active)}*/}
        {/*    onClick={() => setIsOpen(!isOpen)}*/}
        {/*  >*/}
        {/*    <div className={styles.bar} />*/}
        {/*    <div className={styles.bar} />*/}
        {/*    <div className={styles.bar} />*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<MobileMenu*/}
        {/*  menuList={menu.navMenu}*/}
        {/*/>*/}
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
}

export default Header
