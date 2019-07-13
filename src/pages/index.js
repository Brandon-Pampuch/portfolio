import React from "react"
import Layout from "../layouts/Layout"
import styles from "./index.module.scss"
import TMSDNE from "../../public/assets/TMSDNE.png"
import RS from "../../public/assets/RS.png"

export default () => (
  <Layout>
    <div className={styles.background}>
      <p className={styles.inspiredText}>INSPIRED</p>

      <div className={styles.box}></div>
      <h1 className={styles.heroText}>hello, welcome.</h1>

      <div className={styles.border}></div>
      <div>
        <div class={styles.portfolio}>
          <div class={styles.card}>
            <h2>TMSDE</h2>
            <img src={TMSDNE} alt={"TMSDNE"}/>
          </div>
          <div class={styles.card}>
            <h2>Refugee Stories</h2>
            <img src={RS} alt={"Refugee Stories"}/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
