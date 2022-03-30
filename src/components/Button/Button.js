import React from "react"
import { Link } from "gatsby"

const Button = ({url, title, btnStyles}) => {
  return (
    <Link to={url} className={btnStyles}>{title}</Link>
  )
}

export default Button
