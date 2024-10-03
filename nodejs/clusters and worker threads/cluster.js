const cluster = require('cluster');
const http = require('http')
const os = require('os')
console.log(os.cpus().length)
// const cluster= {}
if(cluster.isMaster){
    console.log('master process ',process.pid, 'is runnning') 
    cluster.fork()
    cluster.fork()
   
}else{
    console.log('worker process ',process.pid, 'started');
    const server = http.createServer((req,res)=>{
        if(req.url === '/'){
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.end("Home-Page")
        }else if(req.url === '/slow'){
            for(let i = 0 ; i < 6000000000;i++){};
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end("Slow-Page");
        }
        
    })
    server.listen(3000,()=>{
        console.log('listening at port 3000')
    })
}