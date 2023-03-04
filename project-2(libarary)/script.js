'use strict'; 

let read_block = document.querySelector('.read'), 
    planned_block = document.querySelector('.planned'), 
    reading_block = document.querySelector('.reading');

function addRead(){
let btn_add_read = document.querySelectorAll('.btn-add-read');
btn_add_read.forEach(function(btn) {
btn.addEventListener('click', function() {
  let card = this.closest('.wallpaper');
  card.classList.toggle('active_1');
  read_block.append(card);
});
});
}
addRead();

function addScheduled(){
let btn_add_scheduled = document.querySelectorAll('.btn-add-scheduled');
btn_add_scheduled.forEach(function(btn) {
btn.addEventListener('click', function() {
  let card = this.closest('.wallpaper');
  card.classList.toggle('active_2');
  planned_block.append(card);
});
});
}
addScheduled();

function addReading(){
let btn_add_reading = document.querySelectorAll('.btn-add-reading');
btn_add_reading.forEach(function(btn) {
btn.addEventListener('click', function() {
  let card = this.closest('.wallpaper');
  card.classList.toggle('active_3');
  reading_block.append(card);
});
});
}
addReading();

    //Create a new anime


    const btn = document.querySelector('.plus');
    btn.addEventListener('click',Addnew);
    
    function Addnew() {
        const newDiv = document.createElement('div');
        newDiv.className = 'anime_flex';
         console.log("add");
         newDiv.innerHTML = 
            `
            <div class="wallpaper">
            <div class="card">
                <div class="image-container">
                    <img src="img/Bleach.png" alt="your-image">
                    <div class="container_btn">
                    <button class="btn btn-add-reading">Смотрю</button>
                    <button class="btn btn-add-read">Просмотренно</button>
                    <button class="btn burger" id="button0">...</button>
                </div>
            </div>
            </div>
            <div class="container_btns">
              <ul>
                <li class="list_category">
                  <button class="btn_category btn-add-scheduled">Заплановано</button>
                  <button class="btn_category">Відкладено</button>
                  <button class="btn_category">Покинуто</button>
                  <button class="btn_category btn_add_genre" id="button0" >Додати у....</button>
                </li>
              </ul>
            </div>
            <div class="container_btns_genre ">
              <ul>
                <li>
                  <button class="btn_genre drama">Драму</button>
                  <button class="btn_genre comedy">Комедію</button>
                  <button class="btn_genre shonen">Сьонен</button>
                  <button class="btn_genre detective">Детектив</button>
                  <button class="btn_genre fantastic">Фантастику</button>
                </li>
              </ul>
            </div>
        </div>
            `;
         const anime = document.querySelector('.container_anime');
         anime.append(newDiv);
         addRead();
         addScheduled();
         addReading();
         addDrama();
         addComedy();
         addShonen();
         addDetective();
         addFantastic();
         filter();
}

    function onFileSelected(event) {
      var selectedFile = event.target.files[0];
      var reader = new FileReader();
    
      var imgtag = document.getElementById("myimage");
      imgtag.title = selectedFile.name;
    
      reader.onload = function(event) {
        imgtag.src = event.target.result;
      };
    
      reader.readAsDataURL(selectedFile);
    }

    // Btns categories
    const cards = document.querySelectorAll('.wallpaper');

    function addCategories(){
      cards.forEach(element => {
        const buttons = element.querySelectorAll('.burger');
        const bober = element.querySelector('.container_btns');
        
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            bober.classList.toggle('show');
          });
        });
      });
    }    
    
    
    function addGenries(){
      cards.forEach(element => {
        const buttons = element.querySelectorAll('.btn_add_genre');
        const bobers = element.querySelector('.container_btns_genre');
        
        cards.forEach(element => {
          const buttons = element.querySelectorAll('.burger');
          
          buttons.forEach(button => {
            button.addEventListener('click', () => {
             if(bobers.classList.contains('show')){
              bobers.classList.remove('show');
             }
            });
          });
        });
        
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            bobers.classList.toggle('show');
          });
        });
      });
    }
    addCategories();
    addGenries();

//genre

const drama_btn = document.querySelectorAll('.drama'),
comedy_btn = document.querySelectorAll('.comedy'),
shonen_btn = document.querySelectorAll('.shonen'),
detective_btn = document.querySelectorAll('.detective'),
fantastic_btn = document.querySelectorAll('.fantastic');

let previousBtn = null;
let previousClass = null;

function addDrama() {
drama_btn.forEach((btn, i) => {
  btn.addEventListener('click', (event) => {
    let card = event.target.closest('.wallpaper');

    if (previousBtn !== null && previousBtn !== btn) {
      card.classList.remove(previousClass);
    }

    card.classList.toggle('Drama');
    previousBtn = btn;
    previousClass = 'Drama';
    console.log(card);
  });
});
}

function addComedy() {
comedy_btn.forEach((btn, i) => {
  btn.addEventListener('click', (event) => {
    let card = event.target.closest('.wallpaper');

    if (previousBtn !== null && previousBtn !== btn) {
      card.classList.remove(previousClass);
    }

    card.classList.toggle('Comedy');
    previousBtn = btn;
    previousClass = 'Comedy';
    console.log(card);
  });
});
}

function addShonen() {
shonen_btn.forEach((btn, i) => {
  btn.addEventListener('click', (event) => {
    let card = event.target.closest('.wallpaper');

    if (previousBtn !== null && previousBtn !== btn) {
      card.classList.remove(previousClass);
    }

    card.classList.toggle('Shonen');
    previousBtn = btn;
    previousClass = 'Shonen';
    console.log(card);
  });
});
}

function addDetective() {
detective_btn.forEach((btn, i) => {
  btn.addEventListener('click', (event) => {
    let card = event.target.closest('.wallpaper');

    if (previousBtn !== null && previousBtn !== btn) {
      card.classList.remove(previousClass);
    }

    card.classList.toggle('Detective');
    previousBtn = btn;
    previousClass = 'Detective';
    console.log(card);
  });
});
}

function addFantastic() {
fantastic_btn.forEach((btn, i) => {
  btn.addEventListener('click', (event) => {
    let card = event.target.closest('.wallpaper');

    if (previousBtn !== null && previousBtn !== btn) {
      card.classList.remove(previousClass);
    }

    card.classList.toggle('Fantastic');
    previousBtn = btn;
    previousClass = 'Fantastic';
    console.log(card);
  });
});
}
addDrama();
addComedy();
addShonen();
addDetective();
addFantastic();

  
// filter genre

const filterCard = document.querySelectorAll('.wallpaper');


function filter(){
  document.querySelector('nav').addEventListener('click', e => {
    let filterClass = e.target.dataset['f'];
    console.log(filterClass);
    filterCard.forEach( elem => {
      if(!elem.classList.contains(filterClass)){
        elem.classList.add('hide-filter');
      }else{
        elem.classList.remove('hide-filter');
      }
    });
  });
}
filter();