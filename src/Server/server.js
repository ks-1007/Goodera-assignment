const express = require("express")
const cors = require("cors")
const connect = require("./Configs/db")

const app = express()
app.use(express.json())
app.use(cors())
const jobsController = require("./Controllers/job.controller")

app.use("/jobs", jobsController)

app.listen(2500, async function () {
  await connect()
  console.log("listening on port 2500")
})
