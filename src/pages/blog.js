import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../layouts/Layout"

import styles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `)



  return (
    <Layout>
      <h1>Blog</h1>
      <ul className={styles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={styles.post}>
              <Link to= {`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
