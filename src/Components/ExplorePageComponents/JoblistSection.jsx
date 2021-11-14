import JobCard from "./JobCard"
import styles from "./JoblistSection.module.css"
function JoblistSection({ joblist }) {
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
