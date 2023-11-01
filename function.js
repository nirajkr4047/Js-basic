function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyName()
//function addTwoNumbers(number1,number2){
    //console.log(number1+number2);
//}
//addTwoNumbers(3,4)

function addTwoNumbers(number1,number2){
    let result = number1+number2
    return result
}
const result = addTwoNumbers(3,5)
//console.log("Result :",result);

function loginUserMessage(username){
    if (username === undefined){
        console.log("please enter a username");
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500))

const user = {
    username:"Hitesh",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is,${anyObject.username} and price is${anyObject.price}`);
}
handleObject(user)

const myNewArray = [200,400,600,100]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));