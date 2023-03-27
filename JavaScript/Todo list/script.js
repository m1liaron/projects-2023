'use strict';

const addBtn = document.getElementById('add-class-list'),
      container = document.querySelector('.container'),
      list_input = document.querySelector('.list__input'),
      list = document.getElementById('todo_list'),
      main = document.querySelector('.main');


addBtn.addEventListener('click', addNewList);


 function addNewList(){
    const newDiv = document.createElement('div');

    newDiv.classList.add(container);
    newDiv.innerHTML = `
    <input class="${list_input}" type="text">
    `
    main.append(newDiv);
    // console.log(list_input)
 }

//  list_input.addEventListener('keydown', (e) => {
//     if(e.code === "Enter" &&  container.classList.contains('show')) {
//         list.append(container);
//     }
// });