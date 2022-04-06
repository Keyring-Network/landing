import React, {useState} from "react"
import { Link } from "gatsby"
import classNames from "classnames/bind"
import * as menu from "../../../constants/navMenu"
import * as styles from "./MobileMenu.module.css"

const MobileMenu = ({menuList}) => {
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <span
        // className={classNames(styles.hamburder, isOpen && styles.hamburderOpen)}
        // onClick={setIsOpen(!isOpen)}
      >

      </span>
      <ul className={styles.menu}>
        {menuList.map((el, idx) => (
          <li key={idx}>
            <Link to={el.url}>{el.text}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MobileMenu
