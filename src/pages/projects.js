import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"

const Projects = ({ data }) => (
<Layout>
  <SEO title="Projects" />
  <h1>Projects</h1>

  { data.allNodeProject.edges.map(({ node }, index) => (
        <ProjectCard data={ node }/>
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
          field_link {
            uri
            title
          }
          body {
            value
            format
            processed
            summary
          }
          relationships {
            field_languages {
              name
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
    }
  }
`