import React from "react"

import Container from "./container"
import ProjectCard from "../components/projectCard"
import bannerStyles from "../styles/layout/project-banner.module.css"

const Banner = ({ data }) => (
  <div className={ bannerStyles.banner }>
    <Container>
      <h3 className={ bannerStyles.text }>
      Projects
      </h3>
      {
        data.map(({ node }, index) => {
          // Displays two most recent project banners.
          if (index > 1) {
            return;
          }

          return (
            <ProjectCard data={ node }/>
          );
        })
      }
    </Container>
  </div>
)

export default Banner