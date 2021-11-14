const express = require("express")

const connect = require("./Configs/db")

const app = express()
app.use(express.json())

app.listen(2500, async function () {
  await connect()
  console.log("listening on port 2345")
})
