const fs = require('fs')
// process.nextTick(() => { console.log('Process tick 1') })
// process.nextTick(() => {
//     console.log('Process tick 2')
//     process.nextTick(() => {
//         console.log('process inside 2nd next tick')
//     });

// });
// process.nextTick(() => {
//     console.log('Process tick 3')
//     Promise.resolve().then(() => { console.log('promise in 3rd next tick') });
// });

// Promise.resolve().then(() => { console.log('1 promise after next ticks') });
// Promise.resolve().then(() => {
//     console.log('2nd promise after next ticks')
//     process.nextTick(()=>{
//         console.log('next tick inside 2nd promise')
//     })
// });
// Promise.resolve().then(() => { console.log('promise break') });


// timer queue
// setTimeout(()=>{
//     console.log('this is settimeout 1')
//     Promise.resolve().then(data=>{
//         console.log('promise in 1st timeout')
//     })
    
   
// },1000)
// setTimeout(()=>{
//     console.log('this is settimeout 2')
//     process.nextTick(()=>{
//         console.log('process happening inside 2nd timeout')
//     })
  
// },500)
// setTimeout(()=>{
//     console.log('this is settimeout 3')
// },0)



// i?o queue
// setTimeout(()=>{
//         console.log('this is settimeout 3')
//     } )
    
// fs.readFile(__filename,()=>{console.log('this is readFile 1')
// })



// check queue
fs.readFile('__filename',()=>{
    console.log('this is readfile1 ')
    // setImmediate(()=>{
    //     console.log('inner setImmediate inside i/o')
    // })
    // process.nextTick(()=>{
    //     console.log('this is process.nextTick inside io')
    // })
    // Promise.resolve().then(()=>{console.log('this is promise.resolve inside i/o')})
    // fs.readFile('./file.txt',()=>{
    //     console.log('file read inside i/o')
    // })
})
process.nextTick(()=>{
    console.log('this is process.nextTick 1')
})
Promise.resolve().then(()=>{console.log('this is promise.resolve 1')})
setTimeout(()=>{
    console.log('this is setTimeout 1');
},0)
setImmediate(()=>{
    console.log('setImmediate 1')
})
for(let i = 0 ; i<20000000; i++){}