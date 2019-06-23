import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/index.scss"
import styles from "./layouts.module.scss"

const Layout = props => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
