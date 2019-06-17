//
// let point = document.querySelector('#point');
// let main = document.querySelector('#main');
// let body = document.querySelector('body');
//
// point.addEventListener("mousedown", baba);
// function baba () {
//     main.addEventListener("mousemove", dada );
// }
// function dada () {
//     let box = main.getBoundingClientRect();
//     // console.log(box);
//     // let centerX = main.documentElement.clientWidth;
//     let X = event.clientX;
//     let Y = event.clientY;
//     if (Y>box.top+point.offsetWidth/2&&Y<box.bottom-point.offsetWidth/2
//         &&X>box.left+point.offsetWidth/2&&X<box.right-point.offsetWidth/2) {
//
//         point.style.left = (X-point.offsetWidth/2-box.left) + 'px';
//         point.style.top = (Y-point.offsetWidth/2-box.top) + 'px';
//     }
// }
//
// point.addEventListener("mouseup", function () {
//     main.removeEventListener("mousemove" ,dada);
// });
// body.addEventListener("mouseup", function () {
//     main.removeEventListener("mousemove" ,dada);
// });

//
// function f(func) {
//
//     console.log(func());
// }
// f(f1);


// function f2(a) {
//     console.log(a);
// }
// function f1(func, val) {
//     setTimeout(function () {
//         func(val);
//     }, 1000);
// }
// f1(f2, "5");



// function f(t) {
//     console.log(t);
// }
// function f1(cb,t) {
//     setTimeout(function () {
//         cb(t);
//     }, 1000);
// }
// f1(f,"ere");











setTimeout(function(){
    greet(randomGreet);
}, 1000);
function greet(greeting){
    console.log(greeting);
}

// let greetings = ["Hello", "Bonjour", "Guten Tag"],
    randomGreet = getRandom(greetings);

function getRandom(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}



