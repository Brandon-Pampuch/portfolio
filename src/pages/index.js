import React from "react"
import Layout from "../layouts/Layout"
import styles from "./index.module.scss"

export default ({ data }) => (
  <Layout>
    <div className={styles.background}>
      <p className={styles.inspiredText}>INSPIRED</p>

      <div className={styles.box}></div>
      <h1 className={styles.heroText}>hello, welcome.</h1>

      <div className={styles.border}></div>
    </div>
  </Layout>
)
