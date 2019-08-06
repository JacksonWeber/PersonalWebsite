import React from "react"
import { Link } from "gatsby"
import { mdiConsole } from "@mdi/js"

import Container from "./container"
import ProjectCard from "../components/projectCard"
import bannerStyles from "../styles/layout/project-banner.module.css"
import RowsByColumns from "./utils/RowsByColumns"
import Icon from "@mdi/react"

const Banner = ({ data }) => (
  <div className={ bannerStyles.banner }>
    <Container>
      <h3 className={ bannerStyles.text }>
      Featured Projects
      </h3>
      <RowsByColumns columns={2}
                     data={ data }
                     render={ data => <ProjectCard node={ data.node }/> }/>

     <div className={ bannerStyles.buttonWrapper }>
        <Link className={ bannerStyles.button }
              to="/projects/">
          <Icon path={ mdiConsole } size={ "1rem" }/>
          See More Projects
        </Link>
     </div>
    </Container>
  </div>
)

export default Banner