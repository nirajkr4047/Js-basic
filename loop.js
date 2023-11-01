// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
        
    }
}
//let myArray = ["flash","batman","superman"]
//console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
    //console.log(element);
//}

// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        //console.log(`detected 5`);
        break
    }
    //console.log(`value of i is ${i}`);
    
}

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }

// let myArray = ['flash',"batman","superman"]

// let arr = 0
// while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1
// }


let score = 1
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);

