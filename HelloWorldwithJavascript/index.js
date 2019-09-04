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
// const nicoInfo = {
//     name : "Nico",
//     age : 33,
//     gender : "Male",
//     isHandsome : true,
//     favMovies : ["Along the gods", "LOTR", "Oldboy"],
//     favFood : [
//         {
//             name : "Kimchi",
//             fatty : false
//         },
//         {
//             name : "Cheese burger",
//             fatty : true
//         }
//     ]

// }

// // console.log(nicoInfo.gender);

// // nicoInfo.gender = "Female";

// // console.log(nicoInfo.gender);
// console.log(nicoInfo);
// console.log(nicoInfo.favFood[0].name);

// #2.1 Your first JS Function
/*
function sayHello(name, age) {
    console.log('Hello!', name, "you have", age, "years of age.");
}

sayHello("Nicolas", 15);
*/

// #2.1.1 More Function Fun
// function sayHello(name, age) {
//     // console.log(`Hello ${name} you are ${age} years old`);
//     return `Hello ${name} you are ${age} years old`;
// }

// const greetNicolas = sayHello("Nicolas", 14);
// console.log(greetNicolas);
// // sayHello("Nicolas", 15);

// const calculator = {
//     plus : function(a, b) {
//         return a + b;
//     },
//     minus : function(a, b) {
//         return a - b;
//     },
//     div : function(a, b) {
//         return a / b;
//     },
//     multi : function(a, b) {
//         return a * b;
//     },
//     root : function(a, b) {
//         return a ** b;
//     }
// }

// const plus = calculator.plus(5, 5);
// console.log(plus);
// console.log(calculator.minus(5, 5));
// console.log(calculator.div(5, 5));
// console.log(calculator.multi(5, 5));
// console.log(calculator.root(5, 3));

// #2.2 JS DOM Functions
// const title = document.getElementById("title");

// console.log(title);
// // DOM Document Object Model
// console.error("what?");

// title.innerHTML = "Hi! From JS";

// #2.3 Modifying the DOM with JS
// // const title = document.getElementById("title");
// const title = document.querySelector("#title");
// title.style.color = "red";
// console.dir(title);
// document.title = "I own you now";

// #2.4 Events and event handlers
// const title = document.querySelector("#title");

// // function handleResize(event) {
// //     console.log(event);
// //     console.log("I have been resized");
// // }

// // window.addEventListener('resize', handleResize);
// // // window.addEventListener('resize', handleResize());
// // // handleResize() <- 이렇게 해주면 즉시 실행해버려서 안된다.
// // // 내가 주로 쓰는 'click', function(){ ... } 이것은 함수를 정의해준것이지 실행한게 아니여서 안됬던거였다.

// function handleClick() {
//     title.style.color = "blue"
// ;}

// title.addEventListener('click', handleClick);

// #2.5 If, else, and, or

// #2.6 DOM - If else - Function practice
// const title = document.querySelector("#title");

// // const BASE_COLOR = "#34495e";
// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init() {
//     title.style.color = BASE_COLOR;
//     title.addEventListener('mouseenter', handleClick);
// }
// init();

// // https://developer.mozilla.org/ko/
// // MDN 웹 문서 참조

// #2.7 DOM - If else - Function practice part Two
const title = document.querySelector('#title');

const CLICKED_CLASS = "clicked";

function handleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // // const currentClass = title.className;
    // // if (currentClass !== CLICKED_CLASS) {
    // if (!hasClass) {
    //     // title.className = CLICKED_CLASS;
    //     title.classList.add(CLICKED_CLASS);
    // } else {
    //     // title.className = "";
    //     title.classList.remove(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
    // 클래스가 거기 있는지 체크해서 거기 있으면 add 아니면 remove 해주는걸 말함.
}

function init() {
    title.addEventListener("click", handleClick);
}
init();