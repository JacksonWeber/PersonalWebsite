/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Container from "./container"
import "../styles/layout/layout.css"

const Layout = ({ children }) => (
  <div>
    <Header siteTitle={"Personal Website"}/>
    <Container>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Jackson Weber
      </footer>
    </Container>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
