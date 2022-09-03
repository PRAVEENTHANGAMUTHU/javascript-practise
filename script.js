/* FSD22A JS_1 */
/* Basic JavaScript Program */

let name = prompt("What is your name?");
/* "let" is the keyword to assign variables, "const" is also a keyword but it is static, "var" is also the keyword but it is too old. */
/* "name" is the variable */
/* "prompt" is used to take a input from the user */
/* "prompt('What is your name?');" is the value of name*/
let welcomeMessage = "Hello " + name + " Welcome to the session!";
/* Here we add two variables */
alert(welcomeMessage);
/* Alert is used for poping alert message */

/* String Functions */
/* What is String?
      String is the data type for storing words */

/* String Concadination 
      If we adding two strings or two string variables are called String Concadination. For Example,*/
let firstname = "Peter";
let lastname = "Parker";
let fullname = firstname + " " + lastname;
console.log(
  "His first name is " +
    firstname +
    " and last name is " +
    lastname +
    ". Hence, his full name is, " +
    fullname +
    "."
);
/* Output: His first name is Peter and last name is Parker. Hence, his full name is, Peter Parker. */

console.log(fullname[6]);
/* It is called index function. It will print index letter
         Output: P */

/* To change Uppercase */
console.log(fullname.toUpperCase()); /* Output: PETER PARKER */

/* To change Lowercase */
console.log(fullname.toLowerCase()); /* Output: peter parker */

/* "substring()" It is sub string. This function used to print (any number) index to this (any number)index. For Example, */
console.log(fullname.substring(2, 7)); /* Output: ter P */

/* FSD22A JS_2 */
/* Types of Data types
      a) Primitive data types
            i) Number
            ii) String
            iii) Boolean
            iv) Un-defined
            v) Null

      b) Non-Primitive data types 
            i) Arrays
            ii) Functions
            iii) Objects
      */

/* To know the type of data type, use typeof(). Example, */
let a = 5;
let b = "five";
let c = true;
let d;
let e = null;
console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);
console.log(c);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
/* "console.log()" is used for print */

/* Output:
         a
         number
         b
         string
         c
         boolean
         undefined
         object */

/* Number Functions */

/* Rounding off */
let roone = 5.4;
let rotwo = 5.5;
let rothree = 5.8;
console.log(Math.round(roone));
console.log(Math.round(rotwo));
console.log(Math.round(rothree));

/* Output:
         5
         6
         6 */

/* If Number <= 0.4 (0 to 0.4) = 0 | If Number >= 0.5 (0.5 to 1) = 1*/

/* Rounding off (Floor, Ceil, Trunc) */
/* Floor */
let flr = 0.8;
console.log(Math.floor(flr)); /* Output: 0 */
/* Ceil */
let cl = 0.2;
console.log(Math.ceil(cl)); /* Output: 1 */
/* Trunc */
let trc = 2.5;
console.log(Math.trunc(trc)); /* Output: 2 */

/*  Min & Max (-Infinity & Infinity) */
let mn = Math.min();
console.log(mn); /* Output: infinity */
let mx = Math.max();
console.log(mx); /* Output: -infinity */
let mnv = Math.min(-5, 1, 5);
console.log(mnv); /* Output: -5 */
let mxv = Math.max(-5, 1, 5);
console.log(mxv); /* Output: 5 */

/* Random Numbers */
let rdmnums = Math.random();
console.log(rdmnums);
/* It will generates random (decimal) numbers in between >0 to <1 For example, 
    Output: 0.27768281799971306 */
/* But, If we multiple like this "Math.random()*"any number"" For example,*/
let rdmnumsv = Math.random() * 10;
console.log(rdmnumsv);
/* It will generates random (decimal) numbers in between >0 to <10 For example, 
    Output: 9.6248731496377156 */

/* If we don't want any decimal numbers, we can do like this, */
let rdmnumsvtrc = Math.trunc(Math.random() * 10);
console.log(rdmnumsvtrc);
/* It will generates random numbers in between >0 to <10 For example, 
    Output: 7 */

/* If we want to generate from (any number) to (any number), we can do like this,*/
let min = 5;
let max = 10;
let rdmnumsibn = Math.trunc(Math.random() * (max - min) + min);
/* It will generates random numbers in between from (min) to (max) For example, 
    Output: 8 */

/* Type Coercion */
/* It computes calculations except addition in these two different data types, Number and String. For Example,*/
let num = 6;
let str = "5";
console.log(typeof num); /* Output: number */
console.log(typeof str); /* Output: string */
console.log(
  num + str
); /* Output: 65 (Here we see, its just added the data type)*/
console.log(num - str); /* Output: 1 */
console.log(num * str); /* Output: 30 */
console.log(num / str); /* Output: 1.2 */

/* FSD22A JS_3 */

/* Comparison Operators */
/* It is used to compare two Values */
let coa = 5;
let cob = 7;
let coc = "5";
let cod = "six";
/* Equal to */
console.log(coa == cob); /* Output: false */
console.log(coa == coc); /* Output: true */

/* If we use three operators like this "===" or "!==", It will check the data types also. It is called as Strict Comparison. It is also comes from Type coeration.*/
console.log(coa === coc); /* Output: false */

/* Not Equal to */
console.log(coa != cob); /* Output: true */
console.log(coa != coc); /* Output: false */
console.log(coa !== coc); /* Output: true */

/* Greater than */
console.log(coa > cob); /* Output: false */

/* Lesser than */
console.log(coa < cob); /* Output: True */

/* Greater than or Equal to */
console.log(coa > cob); /* Output: false */

/* Lesser than or Equal to*/
console.log(coa < cob); /* Output: True */

/* Arithmetic Operators */

let aoa = 5;
let aob = 4;

/* Addition */
console.log(aoa + aob); /* Output: 9 */
/* Substraction */
console.log(aoa - aob); /* Output: 1 */
/* Multiplication */
console.log(aoa * aob); /* Output: 20 */
/* Division */
console.log(aoa / aob); /* Output: 1.25 */
/* Remainder */
console.log(aoa % aob); /* Output: 1 */
/* Powerof */
console.log(aoa ** aob); /* Output: 625 */

/* Type Casting */
/* It is used to convert one data type to another data type */

/* String to Number */
let tca = 5;
let tcb = "5";
let stn =
  parseInt(
    tcb
  ); /* Another ways: "let stn = Number(tcb);","let stn = +(tcb);" */
/* parseFloat is used for decimal values */
console.log(typeof tca); /* Output: number */
console.log(typeof tcb); /* Output: string */
console.log(typeof stn); /* Output: number */

/* Logical Operators
   "&&" - AND
   "||" - OR */
let loa = 5;
let lob = 3;
let loc = 4;
let lod = 6;
console.log(loa > lob && loc < lod); /* Output: true */
console.log(loa > lob && loc > lod); /* Output: false */
/* It will check both condition is true */
console.log(loa > lob || loc < lod); /* Output: true */
console.log(loa > lob || loc > lod); /* Output: true */
/* It will check any one condition is true */

/* Truthy Values and Falsy Values */
/* Truthy Values:
      All Numbers both positive and negative except "0" (Zero) and All the Strings except ''. Even space (' ') is also truthy value.
   Falsy Values:
      (0,'',0n,NaN,null)
 */

/* FSD22A JS_4 */

/* This is one of the ES6 feature  */
let aa = 5;
let bb = 5;
console.log(`The addition of aa and bb is ${aa + bb}`);
/* Output: The addition of aa and bb is 10 */

/* To fixed function */
let ffa = Math.random();
console.log(ffa); /* Output: 0.655196400209521 */
console.log(ffa.toFixed(2)); /* Output: 0.65 */

/* Conditional Statements */
/* If, Else, Elseif */

let age = 18;
if (age > 18) {
  console.log(`You are ${age} years old. So, you're eligeable for voting`);
} else if (age == 18) {
  console.log(`You are ${age} years old. Are you registerd for voting?`);
} else {
  console.log(`You are ${age} years old. So, you're not eligeable for voting`);
}
/* Output:You are 18 years old. Are you registerd for voting? */

/* Switch Statement */

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid Input");
}
/* Output: Today is Monday */

/* FSD22A JS_6 */

/* Functions */

/* a) Declarative Function */

function addition(numone, numtwo) {
  let sum = numone + numtwo;
  return sum;
}
console.log(addition(6, 5)); /* Output: 11 */

/* b) Statement Function */

const substraction = function (numone, numtwo) {
  let sub = numone - numtwo;
  return sub;
};
console.log(substraction(6, 5)); /* Output: 1 */

/* c) Anonymous Function */
/* It doesn't return anything */
(function (numone, numtwo) {
  let mul = numone * numtwo;
  console.log(mul);
})(6, 5); /* Output: 30 */

/* d) Arrow Function (Implicit & Explicit) */

/* Implicit */
const division = (numone, numtwo) => numone / numtwo;
console.log(division(100, 4)); /* Output: 25 */

/* Explicit */
/* In Explicit Arrow function, Return keyword is Mandatory */

const modulas = (numone, numtwo) => {
  let rem = numone % numtwo;
  return rem;
};
console.log(modulas(25, 20)); /* Output: 5 */

/* FSD22A JS_8 */

/* Objects */

const mydata = {
  firstname: "Peter",
  lastname: "Parker",
  age: 24,
  gender: "M",
  isMarried: false,
  college: "University of California",
  cgpa: 8.6,
  languages: ["english", "tamil"],
  skills: {
    frontend: "HTML,CSS,JavaScript",
    backend: "Express.Js,Node.Js,MongoDb",
  },
};

console.log(mydata); /* Output: 
{ firstname: 'Peter',
  lastname: 'Parker',
  age: 24,
  gender: 'M',
  isMarried: false,
  college: 'University of California',
  cgpa: 8.6,
  languages: [ 'english', 'tamil' ],
  skills:
   { frontend: 'HTML,CSS,JavaScript',
     backend: 'Express.Js,Node.Js,MongoDb' } } */

 console.log(mydata.age); /* Output: 24 */
 console.log(mydata['cgpa']); /* Output: 8.6 */

 /* Keys of Object */
console.log(Object.keys(mydata));
/* Output:
[ 'firstname',
  'lastname',
  'age',
  'gender',
  'isMarried',
  'college',
  'cgpa',
  'languages',
  'skills' ] */
console.log(Object.entries(mydata));
/* Output:
[ [ 'firstname', 'Peter' ],
  [ 'lastname', 'Parker' ],
  [ 'age', 24 ],
  [ 'gender', 'M' ],
  [ 'isMarried', false ],
  [ 'college', 'University of California' ],
  [ 'cgpa', 8.6 ],
  [ 'languages', [ 'english', 'tamil' ] ],
  [ 'skills',
    { frontend: 'HTML,CSS,JavaScript',
      backend: 'Express.Js,Node.Js,MongoDb' } ] ] */
console.log(Object.values(mydata));
/* Output:
[ 'Peter',
  'Parker',
  24,
  'M',
  false,
  'University of California',
  8.6,
  [ 'english', 'tamil' ],
  { frontend: 'HTML,CSS,JavaScript',
    backend: 'Express.Js,Node.Js,MongoDb' } ] */

/* "this" Keyword */

const thiseg ={
      firstname: 'Peter',
      lastname: 'Parker',
      fullname: function(){
            return (this.firstname+' '+this.lastname);
      }
}
console.log(thiseg.fullname());  /* Output: Peter Parker */
