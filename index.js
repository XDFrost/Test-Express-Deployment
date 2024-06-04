require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000
const port = process.env.PORT

const github_data = {
    "login": "XDFrost",
    "id": 67687376,
    "node_id": "MDQ6VXNlcjY3Njg3Mzc2",
    "avatar_url": "https://avatars.githubusercontent.com/u/67687376?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/XDFrost",
    "html_url": "https://github.com/XDFrost",
    "followers_url": "https://api.github.com/users/XDFrost/followers",
    "following_url": "https://api.github.com/users/XDFrost/following{/other_user}",
    "gists_url": "https://api.github.com/users/XDFrost/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/XDFrost/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/XDFrost/subscriptions",
    "organizations_url": "https://api.github.com/users/XDFrost/orgs",
    "repos_url": "https://api.github.com/users/XDFrost/repos",
    "events_url": "https://api.github.com/users/XDFrost/events{/privacy}",
    "received_events_url": "https://api.github.com/users/XDFrost/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Pratham Gupta",
    "company": "Chitkara",
    "blog": "Discord UID: 962605552578478130",
    "location": "India",
    "email": null,
    "hireable": true,
    "bio": "CS Student || Developer || Specialization in AI || Blockchain, ML and DL Enthusiast || \r\n\r\nRepo Maintainer at @Open-Source-Chandigarh ",
    "twitter_username": null,
    "public_repos": 31,
    "public_gists": 1,
    "followers": 7,
    "following": 13,
    "created_at": "2020-07-01T10:06:37Z",
    "updated_at": "2024-05-23T12:29:26Z"
  }


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

app.get('/github', (req, res) => {
    res.json(github_data)
})

// app.listen(port, () => {
//     console.log(`Example app listening to port ${port}`);
// })

app.listen(port, () => {
    console.log(`Example app listening to port ${port}`);
})
 