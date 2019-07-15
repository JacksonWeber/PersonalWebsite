import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Container from "./container"
import "../styles/layout/layout.css"
import footerStyles from "../styles/layout/footer.module.css"
import Icon from "@mdi/react"
import { mdiGithubCircle, mdiLinkedinBox } from "@mdi/js"

const ContainerlessLayout = ({ children }) => (
  <div>
    <Header/>
      <main>{ children }</main>
      <Container>
        <footer>
          <div className={ footerStyles.footerGroup }>
            <span className={ footerStyles.spacer }>© { new Date().getFullYear() } Jackson Weber</span>
            <span>
            <a className={ footerStyles.icon } href="https://github.com/JacksonWeber" target={"_blank"}>
              <Icon path={ mdiGithubCircle } size={"1.3rem"}/>
            </a>
            <a className={ footerStyles.icon } href="https://www.linkedin.com/in/jackson-weber" target={"_blank"}>
              <Icon path={ mdiLinkedinBox } size={"1.3rem"}/>
            </a>
          </span>
          </div>
        </footer>
      </Container>
  </div>
)

ContainerlessLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContainerlessLayout