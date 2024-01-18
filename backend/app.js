const express = require("express")
const LoremIpsum = require("lorem-ipsum").LoremIpsum

const app = express()
const cors = require("cors")
const config = { port: process.env.PORT || 3000 }

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 10,
    min: 5
  },
  wordsPerSentence: {
    max: 20,
    min: 5
  }
})

// middleware
app.use(cors())

// your API route(s) here

app.get("/lorem/", (req, res) => {
  res.json({ lorem: `lorem: ${lorem.generateSentences(2)}` })
})

app.get("/lorem/:number", (req, res) => {
  res.json({ lorem: lorem.generateParagraphs(req.params.number) })
})

app.get("*", function (req, res) {
  res.status(404).json({ error: "route not found" })
})

// start server
app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`)
})
