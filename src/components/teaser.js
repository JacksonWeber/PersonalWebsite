import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import teaserStyles from "../styles/layout/notes-teaser.module.css"

const Teaser = (data) => {
  let node = data.node;

  return (
  <article className={ teaserStyles.teaserBox }>
    <div className={ teaserStyles.teaserImageWrapper }>
      <Img className={ teaserStyles.teaserImageWrapper } fluid={ node.relationships.field_image[0].localFile.childImageSharp.fluid } />
    </div>
    <div className={ teaserStyles.teaserContent }>
      <Link className={ teaserStyles.teaserLink } to={ node.path.alias }>
        <h2>
          { node.title }
        </h2>
      </Link>
      <p>
        { node.body.summary }
      </p>
    </div>
  </article>
)}

export default Teaser