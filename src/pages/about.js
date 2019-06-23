import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <h1>About</h1>
        <p>I am a student</p>
        <p>
          <Link to="/contact">reach out!</Link>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
