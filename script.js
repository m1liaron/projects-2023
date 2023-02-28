console.log('simple');
console.log(this);

function abc(){
    console.log('in function');
    console.log(this);
    this.classList.toggle('show');
  }
  
  let block = document.querySelectorAll('block')
  let p = document.querySelectorAll('p');
  p.forEach(function(e) {
    e.addEventListener('click',abc)

  })

  const buttons = document.querySelectorAll('.button');
  const divs = document.querySelectorAll('.box');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const targetDiv = document.querySelector(`#${targetId}`);
      targetDiv.classList.toggle('blue');
    });
  });

  // Get all list items
const items = document.querySelectorAll('.item');

// Add click event listener to each item
// items.forEach(item => {
//   item.addEventListener('click', function() {
//     console.log(this.textContent); // logs the text content of the clicked item
//     this.classList.toggle('selected'); // toggles the 'selected' class of the clicked item
//   });
// });

// // Add click event listener to the button
// const btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//   console.log(this.textContent); // logs the text content of the button
// }); 