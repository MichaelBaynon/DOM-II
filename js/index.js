// Your code goes here



let test = document.querySelector(".nav");

// mouse enter ////////////////////////////////////////////

test.addEventListener("mouseenter", function (event) {

    event.target.style.color = "purple";


    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);

// mouseOver ////////////////////////////////////////////////////

test.addEventListener("mouseover", function (event) {

    event.target.style.color = "orange";


    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);

// double click ///////////////////////////////////////////////

const card = document.querySelector('.logo-heading');

card.addEventListener('dblclick', function (e) {
    card.classList.toggle('large');
});

// const copyright = document.querySelector('.footer');

// copyright.addEventListener('dblclick', function (e) {
//     card.classList.toggle('large');
// });



// drag ///////////////////////////////////////////////////////


// note: explain drag and drop idea ///////////////////////

var dragged;
// drag
document.addEventListener("drag", function (event) {

}, false);
// dragStart
document.addEventListener("dragstart", function (event) {

    dragged = event.target;

    event.target.style.opacity = .5;
}, false);
// dragEnd
document.addEventListener("dragend", function (event) {

    event.target.style.opacity = "";
}, false);

// dragOver
document.addEventListener("dragover", function (event) {

    event.preventDefault();
}, false);
// dragEnter
document.addEventListener("dragenter", function (event) {

    if (event.target.className == "dropzone") {
        event.target.style.background = "purple";
    }

}, false);
// dragLeave
document.addEventListener("dragleave", function (event) {

    if (event.target.className == "dropzone") {
        event.target.style.background = "";
    }

}, false);
// drop
document.addEventListener("drop", function (event) {

    event.preventDefault();

    if (event.target.className == "dropzone") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);


// // prevent reload 

// const preventReload = document

const nav = document.querySelector('nav')
nav.addEventListener('click', navEvent => {
    navEvent.preventDefault();
})



// /////////////

const div = document.querySelector('.content-destination');
div.addEventListener('click', (e) => {
    div.style.background = 'dodgerblue';
});

const image = document.querySelector('.content-destination > img');
image.addEventListener('click', (event) => {
    image.style.filter = 'blur(3px)';
    event.stopPropagation();
});

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.setAttribute('draggable', true);
    button.ondrag = (event) => {
        button.textContent = 'Whats up I am being dragged';
    };
})