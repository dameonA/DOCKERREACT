const fs = require("fs")
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var list = JSON.parse(fs.readFileSync('./list.JSON'))

app.get('/list', (req, res) => {
    res.send(list)
})

app.post('/list', (req, res) => {
    list.push(req.body)
})

app.delete('/list', (req, res) => {
    // alert(req.body.item)
    list.splice(list.indexOf(req.body), 1)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))