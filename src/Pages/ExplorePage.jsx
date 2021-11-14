import HeroSection from "../Components/ExplorePageComponents/HeroSection"
import JoblistSection from "../Components/ExplorePageComponents/JoblistSection"
import React, { useEffect, useState } from "react"
import axios from "axios"

function ExplorePage() {
  const [joblist, setJobList] = useState([])
  const handleFilter = ({ title, location }) => {
    if (title && location) {
      axios
        .get(`http://localhost:2500/jobs?title=${title}&location=${location}`)
        .then(({ data }) => {
          console.log("data:", data)
          setJobList([...data.jobs])
        })
    } else if (title) {
      axios
        .get(`http://localhost:2500/jobs?title=${title}`)
        .then(({ data }) => {
          console.log("data:", data)
          setJobList([...data.jobs])
        })
    } else if (location) {
      axios
        .get(`http://localhost:2500/jobs?location=${title}`)
        .then(({ data }) => {
          console.log("data:", data)
          setJobList([...data.jobs])
        })
    }
  }
  useEffect(() => {
    axios.get("http://localhost:2500/jobs").then(({ data }) => {
      console.log("data:", data)
      setJobList([...data.jobs])
    })
  }, [])
  return (
    <div>
      <HeroSection handleFilter={handleFilter} />
      <JoblistSection joblist={joblist} />
    </div>
  )
}

export default ExplorePage
