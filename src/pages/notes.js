import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Notes = ({ data }) => (
  <Layout>
    <SEO title="Notes" />
    <h1>Notes</h1>

    { data.allNodeNote.edges.map(({ node }, index) => (
          <atricle>
            <Link to={ node.path.alias }><h2>{ node.title }</h2></Link>
            <p>
              { node.body.value }
            </p>
          </atricle>
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
        }
      }
    }
  }
`
