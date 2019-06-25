import React from "react"
import Link from "gatsby-link"
import Layout from "../layouts/Layout"
import { graphql } from "gatsby"
import styles from './index.module.scss'

export default ({ data }) => (
  <Layout >
    <div className={styles.background}>
      <h1 className={styles.heroText}>hello, welcome.</h1>
    </div>
</Layout>
)

