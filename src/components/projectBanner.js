import React from "react"

import Container from "./container"
import ProjectCard from "../components/projectCard"
import bannerStyles from "../styles/layout/project-banner.module.css"
import RowsByColumns from "./uitls/RowsByColumns"

const Banner = ({ data }) => (
  <div className={ bannerStyles.banner }>
    <Container>
      <h3 className={ bannerStyles.text }>
      Projects
      </h3>
      <RowsByColumns columns={3}
                     data={ data }
                     render={ data => <ProjectCard node={ data.node }/> }/>
    </Container>
  </div>
)

export default Banner