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
    <NotesHero data={ data.featured.edges[0].node }/>

    <Container>
      <RowsByColumns columns={ 2 }
                     data={ data.notFeatured.edges }
                     render={ data => <Teaser node={ data.node }/> }/>
    </Container>
  </ContainerlessLayout>
)

export default Notes

export const query = graphql`
    query {
        featured: allNodeNote(filter: {relationships: {field_administrative_tag: {elemMatch: {name: {eq: "Featured"}}}}}) {
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

        notFeatured: allNodeNote(filter: {relationships: {field_administrative_tag: {elemMatch: {name: {ne: "Featured"}}}}}) {
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
                        summary
                    }
                    relationships {
                        field_image {
                            localFile {
                                childImageSharp {
                                    fluid(maxWidth: 1280, maxHeight: 720) {
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