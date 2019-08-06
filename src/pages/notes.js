import React from "react"
import { graphql } from "gatsby"

import ContainerlessLayout from "../components/layoutContainerless"
import SEO from "../components/seo"
import Teaser from "../components/teaser"
import Container from "../components/container"
import RowsByColumns from "../components/utils/RowsByColumns"
import NotesHero from "../components/notesHero"

const Notes = ({ data }) => (
  <ContainerlessLayout>
    <SEO title="Notes" />
    <NotesHero/>

    <Container>
      <RowsByColumns columns={ 2 }
                     data={ data.allNodeNote.edges }
                     render={ data => <Teaser data={ data.node }/> }/>
    </Container>
  </ContainerlessLayout>
)

export default Notes

export const query = graphql`  
  query {
    allNodeNote (sort: { fields: [created], order: DESC }){
      edges {
        node {
          path {
            alias
          }
          title
            created(formatString: "DD MMMM, YYYY")
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
                  fluid(maxWidth: 1024, maxHeight: 1024) {
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