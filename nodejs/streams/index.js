const fs = require('fs')
const zlib = require('zlib') // z-lib has a builtin transform stream
const gzip = zlib.createGzip()
const gunzip = zlib.createGunzip()
const readStream = fs.createReadStream('./demo2.txt.gz')
const writeStream = fs.WriteStream('./demo2.txt')
readStream.pipe(gunzip).pipe(writeStream)