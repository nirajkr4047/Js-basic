let a = 300

if (true) {
    let a = 30
    const b = 20
    //console.log("Inner:",a);

}
//console.log(a);
//console.log(b);
//console.log(a);

function one(){
    const username="Hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    //two()
}
//one()

// if (true) {
//     const username = "Hitesh"
//     if (username === "Hitesh"){
//         const website = "youtube"
//         console.log(username + website);
//     }
//}
//++++++++++++++++++++ interesting +++++++++++++++
// function addone(num){
//     return num + 1
// }
// addone(5)
// const addTwo = function(num){
//     return num + 2
// }
// addTwo(5)

const user = {
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
//user.welcomeMessage()
//function chai(){
    //let username ="hitesh"
    //console.log(this.username)
//}

//const chai = function () {
    //let username ="hitesh"
    //console.log(this.username)
//}
const chai =  () => {
    let username ="hitesh"
    console.log(this.username)
}
//chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
//const addTwo = (num1,num2) =>  num1+ num2
// const addTwo = (num1,num2) => ({username:"hitesh"})

// console.log(addTwo(3,4))

//Immediately Invoked Function Expressions (IIFE)
(function chai(){
    console.log(`DB Connected`);
})();

(() => {
    console.log(`DB Connected two`);
})()