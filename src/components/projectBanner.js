import React from "react"
import { mdiConsole } from "@mdi/js"

import Button from "./button"
import Container from "./container"
import ProjectCard from "../components/projectCard"
import bannerStyles from "../styles/layout/project-banner.module.css"
import RowsByColumns from "./utils/RowsByColumns"
import Icon from "@mdi/react"

const Banner = ({ data }) => (
  <div className={ bannerStyles.banner }>
    <Container>
      <h3 className={ bannerStyles.text }>
        Recent Projects
      </h3>
      <RowsByColumns columns={ 2 }
                     data={ data }
                     render={ data => <ProjectCard node={ data.node }/> }/>

      <div className={ bannerStyles.buttonWrapper }>
        <Button href="/projects/" internal={ true }>
          <Icon path={ mdiConsole } size={ "1rem" }/>
          See More Projects
        </Button>
      </div>
    </Container>
  </div>
)

export default Banner