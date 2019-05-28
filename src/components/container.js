import React from "react"
import containerStyles from "../styles/layout/container.module.css"

const Container = ({ children }) => (
  <div className={ containerStyles.container }>
    { children }
  </div>
)

export default Container