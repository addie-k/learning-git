// // console.log('Hello => number 1');

// // setImmediate(() => {
// //   console.log('Running before the timeout => number 3');
// // });

// // setTimeout(() => {
// //   console.log('The timeout running last => number 4');
// // }, 0);

// // process.nextTick(() => {
// //   console.log('Running at next tick => number 2');
// // });
// setTimeout(() => {
//   console.log("settimeout")
// }, 20);

// setImmediate(() => {
//   console.log("hello..");
// });

// let p = new Promise((res, rej) => {
//   res("hritik")
// });
// p.then((d) => {
//   console.log(d);
// })

// process.nextTick(() => {
//   console.log("nexttick");
// })


const fs = require('fs')
fs.readFile('./file.txt',()=>{
  console.log('read file')
})
setImmediate(() => {
  console.log('Immediate');
});

setTimeout(() => {
  console.log('Timers');
}, 0);


process.nextTick(() => {
  console.log('Next Tick');
});

const p = Promise.resolve(12);
p.then((d) => {
  console.log('Microtask');
});
