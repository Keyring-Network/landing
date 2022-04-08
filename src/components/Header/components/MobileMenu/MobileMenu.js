import React, {useState} from "react"
import { Link } from "gatsby"
import classNames from "classnames/bind"
import * as styles from "./MobileMenu.module.css"

const MobileMenu = ({menuList, open, onCLickMenu}) => {
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={classNames(styles.hamburger, open && styles.hamburgerOpen)}
        onClick={onCLickMenu}
      >
        <span />
        <span />
        <span />
      </div>
      {open &&
        <ul className={styles.mobileMenu}>
          {menuList.map((el, idx) => (
            <li key={idx}>
              <Link to={el.url}>{el.text}</Link>
            </li>
          ))}
        </ul>
      }
    </>
  )
}

export default MobileMenu
