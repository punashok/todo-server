const express = require('express')
const app = express()
const port = 3300
app.get('/', (req, res) => {
    res.send("Hellow World")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
