const url = require("url")

const myUrl= new URL("https://www.sajidjaber.com:800?id=100&count=33")

//serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

//host or domain
console.log(myUrl.host)

//hostname does not get port
console.log(myUrl.hostname)

//pathname
console.log(myUrl.pathname)

//serialized query
console.log(myUrl.search)

//params object
console.log(myUrl.searchParams)

//add param
myUrl.searchParams.append("abc", "123")
console.log(myUrl.searchParams)

//loop param
myUrl.searchParams.forEach((name , value) => console.log(`${name}: ${value}`))


