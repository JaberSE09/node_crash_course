const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer((req, res) =>{

    if (req.url == "/"){
        res.end("<h1>HomePage</h1>")
        res.writeHead(200 , {"Content-Type": "text/html"})
    }
} )

PORT= process.env.PORT || 5000 

server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))

