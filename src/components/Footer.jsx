import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerLinks}>
      <p>
        <a href="#">Help/FAQ</a>
      </p>
      <p>
        <a href="#">Terms of Use</a>
      </p>
      <p>
        <a href="#">Contact Us</a>
      </p>
    </div>
  </footer>
)

export default Footer
