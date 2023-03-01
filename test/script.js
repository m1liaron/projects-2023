// // console.log('simple');
// // console.log(this);

// // function abc(){
// //     console.log('in function');
// //     console.log(this);
// //     this.classList.toggle('show');
// //   }
  
// //   let block = document.querySelectorAll('block')
// //   let p = document.querySelectorAll('p');
// //   p.forEach(function(e) {
// //     e.addEventListener('click',abc)

// //   })

// //   const buttons1 = document.querySelectorAll('.button');
// //   const divs = document.querySelectorAll('.box');
  
// //   buttons.forEach(button => {
// //     button.addEventListener('click', () => {
// //       const targetId = button.dataset.target;
// //       const targetDiv = document.querySelector(`#${targetId}`);
// //       targetDiv.classList.toggle('blue');
// //     });
// //   });

// //   // Get all list items
// // const items = document.querySelectorAll('.item');

// // Add click event listener to each item
// // items.forEach(item => {
// //   item.addEventListener('click', function() {
// //     console.log(this.textContent); // logs the text content of the clicked item
// //     this.classList.toggle('selected'); // toggles the 'selected' class of the clicked item
// //   });
// // });

// // // Add click event listener to the button
// // const btn = document.getElementById('btn');
// // btn.addEventListener('click', function() {
// //   console.log(this.textContent); // logs the text content of the button
// // }); 

// // Get all the paragraph elements
// var paragraphs = document.querySelectorAll(".par");

// // Get all the button elements
// var buttons = document.querySelectorAll(".btn");

// // Define a function that performs an action on a paragraph element
// function actionOnParagraph(index) {
//   paragraphs[index].classList.toggle("hide");
// }

// // Assign an onclick event to each button using a loop
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     // Get the index of the clicked button
//     var index = parseInt(this.id.replace("button", ""));
//     // Call the function to perform the action on the corresponding paragraph
//     actionOnParagraph(index);
//   });
// }


// var paragraphs = document.querySelectorAll(".container_btns");

// // Get all the button elements
// var buttons = document.querySelectorAll(".burger");

// // Define a function that performs an action on a paragraph element
// function actionOnParagraph(index) {
//   paragraphs[index].classList.toggle("show");
//   console.log(index);
// }

// // Assign an onclick event to each button using a loop
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     // Get the index of the clicked button
//     var index = parseInt(this.id.replace("button", ""));
//     // Call the function to perform the action on the corresponding paragraph
//     actionOnParagraph(index);
//   });
// }



var paragraphs = document.querySelectorAll(".container_btns");

// Get all the button elements
var buttons = document.querySelectorAll(".burger");

// Define a function that performs an action on a paragraph element
function actionOnParagraph(index) {
  paragraphs[index].classList.toggle("show");
  console.log(index);
  if(block[index].classList.contains("show")){
    block[index].classList.remove("show");
  }
}

// Assign an onclick event to each button using a loop
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // Get the index of the clicked button
    var index = parseInt(this.id.replace("button", ""));
    // Call the function to perform the action on the corresponding paragraph
    actionOnParagraph(index);
  });
}

// add Genre


var block = document.querySelectorAll(".container_btns_genre");

// Get all the button elements
var burger_add_genre = document.querySelectorAll(".btn_add_genre");

// Define a function that performs an action on a paragraph element
function actionOnParagraphs(index) {
  block[index].classList.toggle("show");
  console.log(index);
}

// Assign an onclick event to each button using a loop
for (var i = 0; i < burger_add_genre.length; i++) {
  burger_add_genre[i].addEventListener("click", function() {
    // Get the index of the clicked button
    var index = parseInt(this.id.replace("button", ""));
    // Call the function to perform the action on the corresponding paragraph
    actionOnParagraphs(index);
  });
}

// add Genre
