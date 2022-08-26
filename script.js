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
let mx = Math.min();
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
console.log(coa==cob);  /* Output: false */
console.log(coa==coc);  /* Output: true */

/* If we use three operators like this "===" or "!==", It will check the data types also. It is called as Strict Comparison. It is also comes from Type coeration.*/
console.log(coa===coc);  /* Output: false */

/* Not Equal to */
console.log(coa!=cob);  /* Output: true */
console.log(coa!=coc);  /* Output: false */
console.log(coa!==coc);  /* Output: true */

/* Greater than */
console.log(coa>cob);  /* Output: false */

/* Lesser than */
console.log(coa<cob);  /* Output: True */

/* Greater than or Equal to */
console.log(coa>cob);  /* Output: false */

/* Lesser than or Equal to*/
console.log(coa<cob);  /* Output: True */

/* Arithmetic Operators */

let aoa = 5;
let aob = 4;

/* Addition */
console.log(aoa+aob);  /* Output: 9 */
/* Substraction */
console.log(aoa-aob);  /* Output: 1 */
/* Multiplication */
console.log(aoa*aob);  /* Output: 20 */
/* Division */
console.log(aoa/aob);  /* Output: 1.25 */
/* Remainder */
console.log(aoa%aob);  /* Output: 1 */
/* Powerof */
console.log(aoa**aob); /* Output: 625 */

/* Type Casting */
/* It is used to convert one data type to another data type */

/* String to Number */
let tca = 5;
let tcb ='5';
let stn = parseInt(tcb);  /* Another ways: "let stn = Number(tcb);","let stn = +(tcb);" */
/* parseFloat is used for decimal values */
console.log(typeof(tca));  /* Output: number */
console.log(typeof(tcb));  /* Output: string */
console.log(typeof(stn));  /* Output: number */

/* Logical Operators
   "&&" - AND
   "||" - OR */
   let loa = 5;
   let lob = 3;
   let loc = 4;
   let lod = 6;
   console.log(loa>lob && loc<lod);  /* Output: true */
   console.log(loa>lob && loc>lod);  /* Output: false */
   /* It will check both condition is true */
   console.log(loa>lob || loc<lod);  /* Output: true */
   console.log(loa>lob || loc>lod);  /* Output: true */
   /* It will check any one condition is true */

/* Truthy Values and Falsy Values */
/* Truthy Values:
      All Numbers both positive and negative except "0" (Zero) and All the Strings except ''. Even space (' ') is also truthy value.
   Falsy Values:
      (0,'',0n,NaN,null)
 */