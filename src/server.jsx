const fs = require("fs")
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const list = JSON.parse(fs.readFileSync('./list.JSON'))

app.get('/list', (req, res) => {
    res.send(list)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))