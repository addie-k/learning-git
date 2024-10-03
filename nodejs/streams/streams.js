const fs = require('fs');
const {Transform} = require('stream');
// importing a transform stream to change the content of the readable stream first 
const readable = fs.createReadStream('./demo.txt',{
    encoding:'utf-8',
    highWaterMark:1,
});
const writeable = fs.createWriteStream('./demo2.txt');
const upperCaseTransform = new Transform({
    transform(chunk,encoding,callback){
        if (chunk) {
            const transformedChunk = chunk.toString('utf-8').toUpperCase();
            this.push(transformedChunk); // Push transformed chunk to the writable side
        }
        callback();
    }
});

readable.pipe(upperCaseTransform).pipe(writeable);

writeable.on('finish',()=>{
    console.log('writing is finished, you may check the file content.')
});
// Error handling
readable.on('error', (err) => {
    console.error('Readable Stream Error:', err);
});

upperCaseTransform.on('error', (err) => {
    console.error('Transform Stream Error:', err);
});

writeable.on('error', (err) => {
    console.error('Writable Stream Error:', err);
});









// const readableStream = fs.createReadStream('./demo.txt',{
//     encoding:'utf-8',
//     // highWaterMark:1, //dealing with data in chunks of 1 byte
// })
// const writeableStream = fs.createWriteStream('./demo2.txt')

// readableStream.on('data',(chunk)=>{
//     console.log(chunk)
//     writeableStream.write(chunk) 
// })
// readableStream.on('end',()=>{
//     console.log('reading end');
//     writeableStream.end()
// })
// writeableStream.on('finish',()=>{
//     console.log('writing finished')
// }) this shit is handled by pipes instead of doing it all manually