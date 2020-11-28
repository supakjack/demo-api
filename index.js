const express = require("express")
const app = express()
const port = process.env.PORT || 80
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  const message = "Hello World!"
  res.send({ message })
})

app.get("/api", (req, res) => {
  const message = "Hello World API!!"
  res.send({ message })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
