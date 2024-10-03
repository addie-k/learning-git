// const path = require("path")
// // console.log(path.extname(__filename))
// const pathObj = path.parse(__filename)
// // console.log(path.format(pathObj))
// // console.log(path.format())
// const path2 = path.resolve(__dirname,path.basename(__filename))
// console.log(path2)
// console.log(path.basename(__filename))
const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.on('order-pizza',(data,args)=>{
    console.log(data,args)
})
emitter.emit('order-pizza',[1,2,3,4],'string','jvasdjvsad','lakddd')






