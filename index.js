const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer((req, res) => {

    if (req.url == "/") {

        fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
            res.end(content)
            res.writeHead(200, { "Content-Type": "text/html" })
            if (err) throw err
        })

    }
    if (req.url == "/about") {

        fs.readFile(path.join(__dirname, "public", "about.html"), (err, content) => {
            res.end(content)
            res.writeHead(200, { "Content-Type": "text/html" })
            if (err) throw err
        })

    }
})

PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))

