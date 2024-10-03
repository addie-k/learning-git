//testing the concept of threading:

const crypto = require('crypto')
const https = require('https')
const fs = require('fs')
// console.log('first')
// fs.readFile('./file.txt','utf-8',(err,data)=>{
//     console.log('file content',data)
// })
// console.log('last')


// process.env.UV_THREADPOOL_SIZE = 2; //shouldnt extend threads beyond cpu's capabilities,as it is used to increase performance but that is limited by the number of available cpu cores.


const start = Date.now()
let MAX_CALLS = 1

for (let i = 1; i <= MAX_CALLS; i++) {
    // crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    //     console.log(`operation ${i} finished in : `, (Date.now() - start)/1000 + ' seconds')
    // })
    https.request("https:www.google.com", (res) => {
        res.on("data", () => {})
        console.log('data received')
        res.on("end", () => {
            console.log(`Request ${i}`, (Date.now() - start) / 1000 + ' seconds')
        })
    }).end()

}

