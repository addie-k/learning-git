// a =5 ;
// console.log(this.a)
// //fn that takes an argument, when we call the fn without passing the param ,what will it give:
// function x(a){
//     if(!a){
//         throw new Error('err found')
//     }
// }
// x()

// var obj = {
//     name:'adi',
//     age:25,
//     sayName(){
//         console.log(this.name,"coment")
//     }
// };

// obj.sayName();

function fun1(a){
// console.log(a)
}
fun1(1)
// let fun2 = (x,b)=>{
// console.log(x,b)

// }

// // fun1(1,2)
// fun2(4,5)
// function closure(){
//     let a = 1 ;
//    return function innerFn(){
//         return a
//     }

// }
// const x = closure()
// console.log(x())

// let str = [1,2,3,4,5,6]
// const splicedStr = str.splice(0,2)
// console.log(str)
// let obj ={
//     1:'a',
//     2:'b',
//     3:'c'
// }
// console.log(Object.hasOwnProperty('1'))

// let str = null;
// let str2;
// console.log(typeof undefined)
// let str= 'a1b2c3'
// let sum=0
// for(let i= 0 ; i<str.length ; i++){
//     let a = str[i]+1
//     console.log(a)
   
// }
// console.log(sum)let a = 10;


// let a = 10;
// let { foo, b } = require('./checkingStage.js');
// foo(a,b)
// const add = require('./caching.js')
// console.log(add.mul(2,3))
// import {a,b} from './main.mjs'
// import foo from './main.mjs'
// console.log(foo(a,b))
// import data from './data.json' assert {type:"json"}
// console.log(data)

//trying currying
function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(add(1)(2)(1))