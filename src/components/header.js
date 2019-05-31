import { Link } from "gatsby"
import React from "react"

import Container from "./container"
import headerStyles from "../styles/layout/header.module.css"

const Header = () => (
  <header className={ headerStyles.navBar }>
    <Container>
      <Link className={ headerStyles.navLink } activeClassName={ headerStyles.activeNavLink } to="/"> Jackson Weber </Link>
      <Link className={ headerStyles.navLink } activeClassName={ headerStyles.activeNavLink } to={"/notes/"}> Notes </Link>
      <Link className={ headerStyles.navLink } activeClassName={ headerStyles.activeNavLink } to={"/projects/"}> Projects </Link>
      <Link className={ headerStyles.navLink } activeClassName={ headerStyles.activeNavLink } to={"/contact/"}> Contact </Link>
    </Container>
  </header>
)

export default Header
