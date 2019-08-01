import React from "react"

import Container from "./container"
import heroStyles from "../styles/layout/projects-hero.module.css"
import ProjectCard from "../components/projectCard"

const ProjectHero = ({ data }) => (
  <div className={ heroStyles.hero }>
    <Container>
      <div className={ heroStyles.header } >
        <h3>
          Featured Project
        </h3>
        <div>
          <ProjectCard node={ data }/>
        </div>
      </div>
    </Container>
  </div>
)

export default ProjectHero