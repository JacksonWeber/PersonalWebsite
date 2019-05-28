const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const noteTemplate = path.resolve(`src/templates/noteTemplate.js`)
  // Query for recipe nodes to use in creating pages.
  return graphql(
    `
    {
      allNodeNote {
        edges {
          node {
            path {
              alias
            }
          }
        }
      }
    }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allNodeNote.edges.forEach(({ node }) => {
      createPage({
        path: node.path.alias,
        component: noteTemplate,
        context: {
          slug: node.path.alias,
        },
      })
    })
  })
}
