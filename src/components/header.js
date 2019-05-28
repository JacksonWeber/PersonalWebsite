import { Link } from "gatsby"
import React from "react"

import Container from "./container"
import headerStyles from "../styles/layout/header.module.css"

const Header = () => (
  <header className={ headerStyles.navBar }>
    <Container>
      <Link className={ headerStyles.navLink } to="/" > Jackson Weber </Link>
      <Link className={ headerStyles.navLink } to={"/notes/"}> Notes </Link>
      <Link className={ headerStyles.navLink } to={"/projects/"}> Projects </Link>
      <Link className={ headerStyles.navLink } to={"/contact/"}> Contact </Link>
    </Container>
  </header>
)

export default Header
