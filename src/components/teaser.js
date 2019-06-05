import { Link } from "gatsby"
import React from "react"
import teaserStyles from "../styles/layout/notes-teaser.module.css"
import Img from "gatsby-image"

const Teaser = ({ data }) => (
  <article className={ teaserStyles.teaserBox }>
    <div>
      <Img className={ teaserStyles.teaserImage } fluid={ data.relationships.field_image[0].localFile.childImageSharp.fluid } />
    </div>
    <div>
      <Link className={ teaserStyles.teaserLink } to={ data.path.alias }><h2>{ data.title }</h2></Link>
      <p>
        { data.body.summary }
      </p>
    </div>
  </article>
)

export default Teaser