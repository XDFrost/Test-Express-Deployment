require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/twitter', (req, res) => {
    res.send("This is twitter url")
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login here </h1>')
})

app.get('/youtube' , (req, res) => {
    res.send("<h2> This is YT url </h2>")
})

// app.listen(port, () => {
//     console.log(`Example app listening to port ${port}`);
// })

app.listen(port, () => {
    console.log(`Example app listening to port ${port}`);
})
 