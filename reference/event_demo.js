const eventEmitter = require("events")

class MyEmitter extends eventEmitter{}

//init object 
const myEmitter= new MyEmitter()

//event listener
myEmitter.on("event", () => console.log("Event Fired"))

//init event
myEmitter.emit("event")