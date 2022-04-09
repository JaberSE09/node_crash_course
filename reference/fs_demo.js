const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname , "/test") , {} , function(err){
// if (err) throw err
// console.log("Created Folder...")
// })

//create and write file
fs.writeFile(path.join(__dirname , "/test", "hello.txt") , "Hello World!" , function(err){
    if (err) throw err
    console.log("Created File...")
    })

    //Append to a file
fs.appendFile(path.join(__dirname , "/test", "hello.txt") , " I love nodejs!" , function(err){
    if (err) throw err
    console.log("Append File...")
    })