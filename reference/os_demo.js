const os = require("os")

//CPU platform
console.log(os.platform())

//CPU Arch
console.log(os.arch())

//CPU Core info
console.log(os.cpus())

//CPU Free Memory
console.log(os.freemem())

//CPU total memory
console.log(os.totalmem())

//home dir
console.log(os.homedir())

//Uptime
console.log(os.uptime())