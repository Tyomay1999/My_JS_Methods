let arr1 = [12, 12, 145, 49, 748, 154, 44, 15, 45];

//Method----------------------------------------Push----------------------------------------

// Array.prototype.myPush = function (param) {
//     const array = this;
//     array[array.length] = param
// }
// arr1.myPush(15)
// console.log(arr1)

//Method----------------------------------------Pop----------------------------------------

// Array.prototype.myPop = function (){
//     const array = this;
//     array.length = array.length - 1;
// }
// arr1.myPop()
// console.log("arr1", arr1)

//Method----------------------------------------UnShift----------------------------------------

// Array.prototype.myUnShift = function (param) {
//     if (param == undefined) {
//         alert("Write Parametrs")
//     }
//     let array = this;
//     let falseArray = [];
//     falseArray[0] = param;
//     for (let i = 0; i < array.length; i++) {
//         falseArray[falseArray.length] = array[i];
//     };
//     for (let i = 0; i < falseArray.length; i++) {
//         array[i] = falseArray[i]
//     };
// };
// arr1.myUnShift(1005)
// console.log(arr1)

//Method----------------------------------------Shift----------------------------------------

// Array.prototype.myShift = function () {
//     let array = this;
//     let falseArray = [];
//     for (let i = 1; i < array.length; i++) {
//         falseArray[i - 1] = array[i];
//     };
//     console.log("Array.prototype.myShift -> falseArray", falseArray)
//     for (let i = 0; i < falseArray.length; i++) {
//         array[i] = falseArray[i];
//     };
//     array.length = array.length - 1
// };
// arr1.myShift()
// console.log("arr1", arr1)

//Method----------------------------------------ForEach----------------------------------------

// Array.prototype.myForeEach = function (callBack) {
//     let array = this
//     for (let i = 0; i < array.length; i++) {
//         callBack(array[i], index, array)
//     }
// }
// arr1.myForeEach((a, b, c) => {
//     console.log('number', a)
//     console.log('index', b)
//     console.log('array', c)
// })

// console.log("arr1", arr1)

//Method----------------------------------------Map----------------------------------------

// Array.prototype.myMap = function (callBack) {
//     let array = this;
//     let results = [];
//     for (let i = 0; i < array.length; i++) {
//         results.push(callBack(array[i], i, array))
//     }
//     return results
// }

// const x = arr1.myMap((item, i, array) => {
//     return item * 10
// })
// console.log("x", x)