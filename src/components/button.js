import React from "react"
import { Link } from "gatsby"

import buttonStyles from "../styles/layout/button.module.css"

const Button = ( { href, target, children, internal }) => {
  if (internal) {
    return (
      <Link className={ buttonStyles.buttonStyle } to={ href }>
        { children }
      </Link>
    )
  }
  else {
    return (
      <a className={ buttonStyles.buttonStyle } href={ href } target={ target }>
        { children }
      </a>
    )
  }
}

export default Button