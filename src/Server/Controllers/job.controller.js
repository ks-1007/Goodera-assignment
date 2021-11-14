const express = require("express")

const Job = require("../Models/job.model")

const router = express.Router()

// get all jobs list

router.get("", async (req, res) => {
  const title = req.query.title || ""
  const location = req.query.location || ""
  const query = {}
  if (title) {
    query.title = title
  }
  if (location) {
    query.location = location
  }
  const jobs = await Job.find(query).lean().exec()
  return res.status(200).json({ jobs })
})

// get job of a particular id
router.get("/:id", async (req, res) => {
  const job = await Job.find({ id: req.params.id }).lean().exec()
  return res.status(200).json({ job })
})

module.exports = router
