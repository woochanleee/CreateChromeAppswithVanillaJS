// #1.5 Hello World with Javascript
// console.log('Im Working. Im JS. Im Beautiful. Im worth it');

// #1.6 Your first JS Variable
// let a = 221;
// let b = a - 5;
// a = 4;
// console.log(b, a);
/* 
    Create 생성
    Initialize 초기화
    Use 사용
*/

// #1.7 let, const, var
// const a = 221;
// let b = a - 5;
// // a = 4; error
// console.log(b, a);

// #1.8 Data Types on JS
/*
const what = "Nicolas";
*/
// const wat = true;

// console.log(wat);

// #1.9 Organizing Data with Arrays
/*
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOfWeek);
*/

// #1.10 Organizing Data with Objects
const nicoInfo = {
    name : "Nico",
    age : 33,
    gender : "Male",
    isHandsome : true,
    favMovies : ["Along the gods", "LOTR", "Oldboy"],
    favFood : [
        {
            name : "Kimchi",
            fatty : false
        },
        {
            name : "Cheese burger",
            fatty : true
        }
    ]

}

// console.log(nicoInfo.gender);

// nicoInfo.gender = "Female";

// console.log(nicoInfo.gender);
console.log(nicoInfo);
console.log(nicoInfo.favFood[0].name);