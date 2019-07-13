import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Container from "./container"
import "../styles/layout/layout.css"

const Layout = ({ children }) => (
  <div>
    <Header/>
    <Container>
      <main>{ children }</main>
      <footer>
        © { new Date().getFullYear() } Jackson Weber
      </footer>
    </Container>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
