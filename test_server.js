var http = require('http')

var server = http.createServer((req, res)=>{
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.end("arguments: " + process.argv.join() +"\n")
}).listen(process.argv[2])

console.log("Server started")
