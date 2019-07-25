import React from "react"
import { graphql } from "gatsby"

import ContainerlessLayout from "../components/layoutContainerless"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"
import RowsByColumns from "../components/utils/RowsByColumns"
import ProjectsHero from "../components/projectsHero"
import Container from "../components/container"

const Projects = ({ data }) => (
<ContainerlessLayout>
  <SEO title="Projects" />
  <ProjectsHero/>
  <Container>
    <RowsByColumns columns={2}
                   data={ data.allNodeProject.edges }
                   render={ data => <ProjectCard node={ data.node }/> }/>
  </Container>
</ContainerlessLayout>
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