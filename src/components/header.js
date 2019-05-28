import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Container from "./container"
import headerStyles from "../styles/layout/header.module.css"

const Header = ({ siteTitle }) => (
  <header className={ headerStyles.navBar }>
    <Container>
      <Link className={ headerStyles.navLink } to="/" > Jackson Weber </Link>
      <Link className={ headerStyles.navLink } to={"/notes/"}> Notes </Link>
      <Link className={ headerStyles.navLink } to={"/projects"}> Projects </Link>
      <Link className={ headerStyles.navLink } to={"/"}> Contact </Link>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
