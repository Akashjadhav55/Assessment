import React from 'react'
import styles from "./navbar.module.css"

export function Navbar() {
  return (
    <div className={styles.Navdiv} >
        <h1>Title</h1>
        <div className={styles.menus} >
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p className={styles.navButton}>Button</p>
        </div>
    </div>
  )
}

