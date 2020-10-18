// Data types and variables
// typeof <variable name> - tells type of var
// 1 Number
var i = 10; // Obsolete global variable
let j = -100; // Local variable
const c = 10.10; // Constant local variable
// operators
let res = i + j;
res = i - j;
res = i * j;
res = i / j;
res = i ** j;
res += i;
res -= i;
res *= i;
res = --i;
res = ++i;
res = i++;
// 2 String
const str = 'Hello world!';
const str1 = "Hello world!";
const str2 = `Lorem ipsum dolor amet
              Lorem ipsum dolor amet
              Lorem ipsum dolor amet  
             `;
let strres = str1 + str2; // concatenation
strres = '5';
+strres;
// 3 Object
const obj = new Object({
    field1: 100,
    field2: "Hello world"
});
const obj1 = {
    field1: 100,
    field2: "Hello world"
};
// obj1['field1'] - value of field1
// obj1.field1 - value of field 1
let objres = {...obj1} // spread operator for object
/*
Object.keys(obj1) // get obj keys
(2) ["field1", "field2"]
Object.values(obj1) // ket obj values
(2) [200, "Hello world"]
Object.entries(obj1) // get obj entries [array of key-value pairs arrays]
(2) [Array(2), Array(2)]
Object.assign({}, obj1); // merge objects
{field1: 200, field2: "Hello world"}
* */
// 3.1 Array (Object sub-type)
const arr = [1, "sdfsdf", [1,2,3], {a:10, b:20}];
// arr[0] - 1-st elem of array
let arrres = [...arr];
// 4 function
const func = function() {return 0};
// 5 Boolean
const bool = true;
// 6 Null
const n = null
// 7 undefined
const undef = undefined // Not initialized

// Other operators
0 === false; // will be false

/*
* if (<condition>) {
*   <body>
* } else if (<condition 2>) {
*   <elseif body>
* } else {
*   <else body>
* }
* */
if (true) {
    let cond = 6;
}
/*
* switch (<var>) {
*   case <value>:
*          <case 1 body>
            break;
    case <value 2>:
          <case 2 body>
    default: <value 3>:
          <default body>

* }
* */

/*
* for(<start>, <condition>, <step>) {
*   <for body>
* }
*
* while(<condition>) {
*   <while body>
* }
*
* do {
* } while(<condition>)
*
* for (<var> in <iterable>) {
*   console.log(<var>) // iterate keys
* }
*
* for (<var> of <iterable>) {
*   console.log(<var>) // iterate values
* }
* */

// Basic interaction wit browser
console.log('Hello');
alert('ALERT!');



