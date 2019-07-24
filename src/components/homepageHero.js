import React from "react"

import heroStyles from "../styles/layout/hero.module.css"
import Button from "./button"
import Container from "./container"
import IDEHero from "./ide-hero"

import Icon from "@mdi/react"
import {mdiGithubCircle, mdiLinkedinBox } from "@mdi/js"

const Hero = () => (
  <div className={ heroStyles.hero }>
    <Container>
      <div className={ heroStyles.buttonGroup }>
        <h3>See Some of My Other Work</h3>
        <div className={ heroStyles.spacer }/>
          <Button href="https://github.com/JacksonWeber" target={ "_blank" }>
            <Icon path={ mdiGithubCircle } size={ "1rem" }/>
            Github
          </Button>
          <Button href="https://www.linkedin.com/in/jackson-weber" target={ "_blank" }>
            <Icon path={ mdiLinkedinBox } size={ "1rem" }/>
            LinkedIn
          </Button>
        </div>
      <div>
        <IDEHero/>
      </div>
    </Container>
  </div>
)

export default Hero