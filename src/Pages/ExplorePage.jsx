import HeroSection from "../Components/ExplorePageComponents/HeroSection"
import JoblistSection from "../Components/ExplorePageComponents/JoblistSection"
import React, { useEffect, useState } from "react"
import axios from "axios"

function ExplorePage() {
  const [joblist, setJobList] = useState([])
  const handleFilter = ({ title, location }) => {}
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
