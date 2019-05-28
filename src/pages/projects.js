import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = ({ data }) => (
<Layout>
  <SEO title="Notes" />
  <h1>Projects</h1>

  { data.allNodeProject.edges.map(({ node }, { relationships }, index) => (
    <atricle>
      <h2>
        { node.title }
      </h2>
      <p>
        { node.relationships.field_languages[0].name }
      </p>
      <p>
        { node.body.value }
      </p>
    </atricle>
  ))}
</Layout>
)

export default Projects

export const query = graphql`
  query {
    allNodeProject {
      edges {
        node {
          title
          body {
            value
            format
            processed
            summary
          }
          relationships {
            field_languages {
              name
            }
          }
        }
      }
    }
  }
`