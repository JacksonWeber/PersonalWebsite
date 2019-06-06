import React from "react"

import buttonStyles from "../styles/layout/button.module.css"

const Button = ( { href, target, children }) => (
  <a className={ buttonStyles.buttonStyle } href={ href } target={ target }>
    { children }
  </a>
)

export default Button