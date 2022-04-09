const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname , "/test") , {} , function(err){
// if (err) throw err
// console.log("Created Folder...")
// })

//create and write file
fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello World!", function (err) {
    if (err) throw err
    console.log("Created File...")


    //Append to a file
    fs.appendFile(path.join(__dirname, "/test", "hello.txt"), " I love nodejs!", function (err) {
        if (err) throw err
        console.log("Append File...")
    })
    //Read File
    fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf-8", function (err, data) {
        if (err) throw err
        console.log(data)
    })

    //rename file
    fs.rename(path.join(__dirname, "/test" , "hello.txt"), path.join(__dirname, "/test" , "helloworld.txt"), function (err, data) {
        if (err) throw err
        console.log("Renaming File...")
    })

})

