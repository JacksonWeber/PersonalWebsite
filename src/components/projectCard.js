import React from "react"
import Img from "gatsby-image"

import Button from "./button.js"
import cardStyles from "../styles/layout/project-card.module.css"

const ProjectCard = (data) => {
  let node = data.node;
  console.log(data);
  return (
  <article className={ cardStyles.cardBox }>
    <div className={ cardStyles.projectHeader }>
      <h2>
        { node.title }
      </h2>
      <div>
        <Img className={ cardStyles.cardImage } fluid={ node.relationships.field_languages[0].relationships.field_image.localFile.childImageSharp.fluid }/>
      </div>
    </div>
    <div className={ cardStyles.projectSubheader }/>
    <div className={ cardStyles.projectDescription }>
      { node.body.value }
    </div>
    <div className={ cardStyles.spacer }/>
    <div className={ cardStyles.buttonWrapper }>
      <Button href={ node.field_link[0].uri } target={ "_blank" }>{ node.field_link[0].title }</Button>
    </div>
  </article>
)}

export default ProjectCard
