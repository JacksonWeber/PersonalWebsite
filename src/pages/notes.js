import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Teaser from "../components/teaser"

const Notes = ({ data }) => (
  <Layout>
    <SEO title="Notes" />
    <h1>Notes</h1>

    { data.allNodeNote.edges.map(({ node }, index) => (
        <Teaser data={ node }/>
      ))}
  </Layout>
)

export default Notes

export const query = graphql`  
  query {
    allNodeNote {
      edges {
        node {
          path {
            alias
          }
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
                  fluid(maxWidth: 150, maxHeight: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`