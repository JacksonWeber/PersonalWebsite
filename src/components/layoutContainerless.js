import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Container from "./container"

const ContainerlessLayout = ({ children }) => (
  <div>
    <Header/>
      <main>{ children }</main>
      <Container>
        <footer>
          © { new Date().getFullYear() } Jackson Weber
        </footer>
      </Container>
  </div>
)

ContainerlessLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContainerlessLayout