import React from "react"
import styles from "./JoblistSection.module.css"
function JobCard({ title, image, description }) {
  return (
    <div className={styles.jobCardRoot}>
      <div className={styles.imgBox}>
        <img src={image} alt="job" />
      </div>
      <div className={styles.textBox}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default JobCard
