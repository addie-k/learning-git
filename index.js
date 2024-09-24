// const PizzaShop = require("./pizzaShop")
// const DrinkMachine = require("./drinkMachine")
// const drinkMachine = new DrinkMachine()
// const pizza = new PizzaShop()
// console.log(pizza)
// // pizza.on('an-event',(data=>{console.log('data is : ',data)}))
// pizza.placeOrder()

// console.log(drinkMachine.serveDrink('large'))



// const buf2 = Buffer.alloc(10);
// const buffer = new Buffer.from('adityaaaaaaa','utf-8');
// buffer.write("Codevolution")

// console.log(buffer)
// console.log(buffer.toJSON())
// console.log(buffer.toString())  

// const fs = require("fs")
// console.log(fs)
const fs = require("fs")
// fs.readFile('./demo.txt',(err,data)=>{
//    return data
// })
// console.log('2nd content: ',content)
// console.log(content)
// const content = " hey this is some content im trying to add to the txt file, yayyyy!"
// const contentUpdate = fs.writeFile('./demo.txt', content,{flag:"a"}, (err) => {
//     if (err) {
//         console.log(err)
//     } 
// })
// // console.log(content)
// fs.readFile('demo.txt','utf-8')
// .then(data=>{console.log(data)})
// .catch(err=>{console.log("err: ",err.path)})

// async function readFile(){
//     try {
//         const data = await fs.readFile('./demo.txt','utf-8');
//         console.log(data)
        
//     } catch (error) {
//         console.error(error.path)
//     }
// }
// console.log(1)
// console.log(2)
// readFile()
// console.log(3)

const readableStream = fs.createReadStream('./demo.txt',{
    encoding:'utf-8',
    // highWaterMark:1, //dealing with data in chunks of 1 byte
})
const writeableStream = fs.createWriteStream('./demo2.txt')

readableStream.on('data',(chunk)=>{
    console.log(chunk)
    writeableStream.write(chunk)
})
readableStream.on('end',()=>{
    console.log('reading end');
    writeableStream.end()
})
writeableStream.on('finish',()=>{
    console.log('writing finished')
})
// readableStream.on('end',(x)=>{
//     console.log('finished reading data')
// })
// readableStream.on('close', () => {
//     console.log('stream has been closed');
// });
// // readableStream.pipe(writeableStream)
// readableStream.pipe(writeableStream);
// writeableStream.on('finish',()=>{
//     console.log('process finished')
// })