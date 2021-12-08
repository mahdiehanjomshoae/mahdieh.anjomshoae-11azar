const logType=Object.freeze({
    INFO:Symbol(),
    ERR:Symbol()
})
function log(type,message){
     if (type===logType.INFO) {
         console.log("a.importert"+message)  
     }else if (type===logType.ERR) {
        console.log("housten"+message)  
     }else{
         throw "error"
         }
 }
 log(logType.INFO,"hi")