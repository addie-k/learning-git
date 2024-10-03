const http = require('http')
const { Worker } = require('worker_threads')
const fs = require('fs')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Home-Page")
    } else if (req.url === '/slow') {
        //creating new worker thread
        const worker = new Worker("./worker-thread.js")
        worker.on("message", (j) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(`Slow-page ${j}`);
        })
    }

})
server.listen(3000, () => {
    console.log('listening at port 3000')
})