import React from "react"

import sourceBarStyles from "../styles/layout/sourceBar.module.css"
import Container from "./container"

import Icon from "@mdi/react"
import { mdiGatsby, mdiGithubCircle } from "@mdi/js"
import Button from "./button"

const SourceBar = () => (
  <div className={ sourceBarStyles.bar }>
    <Container>
      <h3 className={ sourceBarStyles.text } >
        This Website is Open Source
      </h3>
      <div className={ sourceBarStyles.iconWrapper }>
        <Icon path={ mdiGatsby } size={ "20rem" }/>
      </div>
      <div className={ sourceBarStyles.buttonWrapper }>
        <Button href="https://github.com/JacksonWeber" target={ "_blank" }>
          <Icon path={ mdiGithubCircle } size={ "1rem" }/>
          Source
        </Button>
      </div>
    </Container>
  </div>
)

export default SourceBar