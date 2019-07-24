import React from "react"
import Img from "gatsby-image"

import Button from "./button.js"
import cardStyles from "../styles/layout/project-card.module.css"

class ProjectCard extends React.Component {
  render() {
    let data = this.props.data;

    return (
      <article className={ cardStyles.cardBox }>
        <div className={ cardStyles.projectHeader }>
          <h2>
            { data.title }
          </h2>
          <div>
            <Img className={ cardStyles.cardImage } fluid={ data.relationships.field_languages[0].relationships.field_image.localFile.childImageSharp.fluid }/>
          </div>
        </div>
        <div className={ cardStyles.projectSubheader }>
          <div className={ cardStyles.projectSummary }>
            { data.body.summary }
          </div>
        </div>
        <div className={ cardStyles.projectDescription }>
          { data.body.value }
        </div>
        <div className={ cardStyles.spacer }/>
        <div className={ cardStyles.buttonWrapper }>
          <Button href={ data.field_link[0].uri } target={ "_blank" }>{ data.field_link[0].title }</Button>
        </div>
      </article>
    );
  }
}

export default ProjectCard
