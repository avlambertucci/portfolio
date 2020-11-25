import React from 'react'
import styles from './styles.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* <img src="./home-img.jpg" alt=""/> */}
      <aside>
        <div className={styles.avatarContainer}>
          <img src="./profile-picture.jpg" alt=""/>
          <h1>Hi! I am Armando Lambertucci</h1>
        </div>
        <div>
          <h3> A Full-stack developer working as a Zendesk's partner, building integrations between systems</h3>
        </div>
      </aside>
    </div>
  )
}

export default HomePage
