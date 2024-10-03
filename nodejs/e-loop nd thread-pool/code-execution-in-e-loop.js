const dateNow = Date.now()
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")
// console.log('First took: ',(Date.now() - dateNow )," seconds")


// setTimeout(() => {
//     console.log('setTimeout took: ', (Date.now() - dateNow), " mili- seconds")
//     // const promise = Promise.resolve('Yay')
//     // promise.then(yay => { console.log("Promise inside setTimeout executed") })
//     // process.nextTick(() => {
//     //     console.log('Next tick inside setTimeout executed')
//     // })
   
// },0);



// setImmediate(() => {
//     console.log('setimmediate executed')
// })
// setTimeout(() => {
//     console.log('setTimeout took: ', (Date.now() - dateNow), " mili- seconds")
   
// },0);
// const promise = Promise.resolve(true)
// // const promise2 = Promise.reject(true)
// promise.then(data => {
//     console.log(data)

// })

// process.nextTick(() => {
//     console.log('Next tick executed') //1
// })





// promise2.catch(err=>{console.log('promise2 err')
    // process.nextTick(()=>{
    //     console.log('next tick inside promise2')
    // })
// })

console.log('Hello => number 1');//1 

setImmediate(() => {
  console.log('immeditat 3');
});

setTimeout(() => {
  console.log('settimeout 4');
},0);

process.nextTick(() => {
  console.log('process 2'); 
});
