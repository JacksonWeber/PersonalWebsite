import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import noteStyles from "../styles/layout/note-template.module.css"

const noteTemplate = ({ data }) => (
  <Layout>
    <artice>
      <SEO title={ data.nodeNote.title }/>
      <div>
        <h2>{ data.nodeNote.title }</h2>
      </div>
      <div>
        <Img className={ noteStyles.noteImage } fluid={ data.nodeNote.relationships.field_image[0].localFile.childImageSharp.fluid } />
      </div>
      <div className={ noteStyles.noteInformation }>
        { data.nodeNote.created } by Jackson Weber
      </div>
      <div>
        <ReactMarkdown source={ data.nodeNote.body.value } />
      </div>
    </artice>
  </Layout>
)

export default noteTemplate

export const query = graphql`
  query($slug: String!) {
    nodeNote( path: { alias: {eq:$slug}}) {
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
