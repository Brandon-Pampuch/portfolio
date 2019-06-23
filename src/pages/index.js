import React from "react"
import Link from "gatsby-link"
import Layout from "../layouts/Layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>Brandon's portfolio</h1>

    {/* {data.allFile.edges.map(({ node }) => (
      <div>
        <h4>Info for each page</h4>
        <ul>
          <li>{node.relativePath}</li>
          <li>{node.prettySize}</li>
          <li>{node.extension}</li>
          <li>{node.birthTime}</li>
        </ul>
      </div>
    ))} */}
  </Layout>
)

// export const query = graphql`
//   query MyFilesQuery {
//     allFile {
//       edges {
//         node {
//           relativePath
//           prettySize
//           extension
//           birthTime(fromNow: true)
//         }
//       }
//     }
//   }
// `

// export const query = graphql`
//     query FirstQuery {
//         site {
//             siteMetadata {
//                 title
//                 author
//             }
//         }
//     }
// `
