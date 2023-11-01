//singleton
//object.create

//object.literals
const JsUser = {
    name : "Niraj",
    age:18,
    location : "Jaipur",
    email : "niraj@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//Object.freeze(JsUser)
JsUser.email = "hitesh@google.com"
//console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello js user");
}
//console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);
}
//console.log(JsUser.greetingTwo());

//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name="Sunny"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"some@example.com",
    fullname: {
        userfullname: {
            firstname:"Hitesh",
            lastname:"choudhary"
        }
    }

}
//console.log(regularUser.fullname.userfullname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = {obj1 , obj2}
//const obj3= Object.assign({},obj1,obj2)
const obj3= {...obj1,...obj2}

//console.log(obj3);
const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor: "Niraj"
}
// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);
