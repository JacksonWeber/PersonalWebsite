import React from "react"

import Container from "./container"
import heroStyles from "../styles/layout/projects-hero.module.css"

const ProjectHero = () => (
  <div className={ heroStyles.hero }>
    <Container>
      <div className={ heroStyles.header } >
        <h3>
          Featured Project
        </h3>
      </div>
    </Container>
  </div>
)

export default ProjectHero