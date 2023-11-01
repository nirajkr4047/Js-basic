//let score ="33"
//console.log(typeof score );
//let value=3
//let negValue = -value
//console.log(negValue);
//let str1="hello"
//let str2=" hitesh"
//let str3= str1 + str2
//console.log(str3);
//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1" +2 +2);
//console.log(1+ 2+ "2");
//console.log("2">1);
//console.log("02">1);
//console.log(null > 0);
//console.log(null == 0);
//console.log(null >= 0);

//console.log("2"=== 2);

// Primitive

// 7 types : string,Number,Boolean,,null,undefined,Symbol,BigInt

//const score =100
//const scoreValue = 100.3

//const isLoggedIn = false
//const outsideTemp= null
//let userEmail;

//const id= symbol('123')
//const anotherId = symbol('123')

// Reference(Non Primitive)

// Array ,Objects,Functions

//const heros= ["Shaktikant","Naagraj","doga"];
//let myObj = {
    //Name : "Hitesh",
    //age:22,
//}
//const myFunction = function() {
    //console.log("Hello World");
//}

//stack(primitive) and heap(Non-primitive)
const name ="hitesh"
const repocount = 50

//console.log(name + repocount +"value");

const gamename = new String('hiteshhc');
//console.log(gamename[0]);
//console.log(gamename.__proto__);
//console.log(gamename.length);

const newstring = gamename.substring(0,4)
//console.log(newstring);

const score =100
const balance = new Number(100)
//console.log(balance);
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber =123.8966
//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));
 
//++++++++++++++Maths+++++++++++++++

//console.log(Math.abs(-4));
//console.log(Math.round(4.6));
//console.log(Math.ceil(4.6));
//console.log(Math.floor(4.6));
//console.log(Math.min(3,4,6,8));
//console.log(Math.max(3,4,6,8));

//Dates
let myDate = new Date
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
 
let myCreatedDate =new Date(2023,0,23)
//console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()
//console.log(myTimeStamp);