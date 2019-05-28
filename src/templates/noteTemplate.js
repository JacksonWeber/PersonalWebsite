import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const noteTemplate = ({ data }) => (
  <Layout>
    <SEO title={ data.nodeNote.title }/>
    <h2>{ data.nodeNote.title }</h2>
    <p>{ data.nodeNote.body.value }</p>
    <Img fluid={ data.nodeNote.relationships.field_image[0].localFile.childImageSharp.fluid } />
  </Layout>
)

export default noteTemplate

export const query = graphql`
  query($slug: String!) {
    nodeNote( path: { alias: {eq:$slug}}) {
      title
      body {
        value
        format
        processed
        summary
      }
      relationships {
        field_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 240, maxHeight: 240) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
