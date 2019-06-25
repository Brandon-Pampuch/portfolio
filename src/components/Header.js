import React from "react"
import { Link } from "gatsby"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
   
      <nav>
        <div>
          <ul className={styles.navList}>
            <li>
              <Link className={styles.navItem} activeClassName={styles.active} to="/contact">
                contact
              </Link>
            </li>
            <li>
              <Link className={styles.navItem} activeClassName={styles.active} to="/about">about</Link>
            </li>
            <li>
              <Link className={styles.navItem} activeClassName={styles.active} to="/">Home</Link>
            </li>
            <li>
              <Link className={styles.navItem} activeClassName={styles.active} to="/blog">blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
