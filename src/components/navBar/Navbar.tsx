import React from 'react'
import styles from './navbar.module.sass'


const Navbar: React.FC = (props) => {
  return (
    <nav className={styles.navbar}>
      <ul className="">
        <li><a href="/">About</a></li>
        <li><a href="/">How to?</a></li>
        <li><a href="/">For startups</a></li>
        <li><a href="/">For investors</a></li>
      </ul>

    </nav >
  )
}

export default Navbar