import axios from "axios"
import React, { useEffect, useState } from "react"
import JobCard from "./JobCard"
import styles from "./JoblistSection.module.css"
function JoblistSection() {
  const [joblist, setJobList] = useState([])
  useEffect(() => {
    axios.get("http://localhost:2500/jobs").then(({ data }) => {
      console.log("data:", data)
      setJobList([...data.jobs])
    })
  }, [])
  return (
    <div className={styles.rootCont}>
      <div className={styles.listCont}>
        {joblist.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  )
}

export default JoblistSection
