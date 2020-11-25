import React from 'react'
import styles from './Header.module.css'

  const Header = () => {
  return (
    
    <div className={styles.header}>
      <a className={styles.link} href="">Home</a>
      <a className={styles.link} href="">About</a>
      <a className={styles.link} href="">Projects</a>
      <a className={styles.link} href="">Contact</a>
      <a className={styles.link} href="">Blog</a>
    </div>
    
  )
}

export default Header;