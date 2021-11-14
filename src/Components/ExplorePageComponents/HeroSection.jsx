import React from "react"
import styles from "./HeroSection.module.css"
function HeroSection() {
  return (
    <div className={styles.heroRoot}>
      <h1>Find Your Dream Job</h1>
      <p>Browse through thousands of full-time or part-time jobs near you</p>
      <div className={styles.searchBarCont}></div>
    </div>
  )
}

export default HeroSection
