const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-Type":"text/html"})
    // const html = fs.readFileSync("./index.html","utf-8")
//    fs.createReadStream(__dirname + '/index.html').pipe(res)

    // res.end(html)
    if(req.url==="/"){
        // res.writeHead(200,{"Content-Type":"text/html"})
        res.end('Landing-Page')
    }else if(req.url === "/about"){
        res.end("about")
    }else{
        res.end(req.url)
    }
})
server.listen(3000,()=>{
    console.log('listening at port 3000')
})