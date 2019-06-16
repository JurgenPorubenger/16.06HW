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


function f() {
    setTimeout(function() {
        return Math.random();
    }, 1000);
}
function f1(func) {
    console.log(func());
}
f1(f);