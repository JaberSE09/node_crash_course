const eventEmitter = require("events")
const uuid = require("uuid")

class Logger extends eventEmitter{

    log(msg){
        this.emit("message", {id: uuid.v5 , msg })
    }


}

module.exports=Logger