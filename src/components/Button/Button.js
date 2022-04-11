import React from "react"
import { Link } from "gatsby"

const Button = ({url, title, btnStyles, target = "_self"}) => {
  return (
    <Link to={url} className={btnStyles} target={target}>
      <span>{title}</span>
    </Link>
  )
}

export default Button
