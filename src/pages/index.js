import React from "react"
import { graphql } from "gatsby"

import ContainerlessLayout from "../components/layoutContainerless"
import SEO from "../components/seo"
import Hero from "../components/homepageHero"
import Banner from "../components/projectBanner"
import SourceBar from "../components/sourceBar"

const IndexPage = ({ data }) => (
    <ContainerlessLayout>
      <SEO title="Home" />
      <Hero/>
      <Banner data={ data.allNodeProject.edges }/>
      <SourceBar/>
    </ContainerlessLayout>
  )

export default IndexPage

export const query = graphql`
  query {
    allNodeProject (limit:2, sort: { fields: [created], order: DESC }){
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
