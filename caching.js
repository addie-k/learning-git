// myModule.js
console.log("myModule has been loaded!");

// module.exports = {a:10, func: function() {
//     console.log('value of a is: ',this);
// }}
exports.mul = (a,b)=>{
    console.log(a*b)
}