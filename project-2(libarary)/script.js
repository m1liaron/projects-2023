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

function renderCard() {
  const cards = document.createElement('div');
  cards.className = 'anime_flex';
   console.log("add");
   for(let i = 1; i < 2; i++) {
    cards.innerHTML = 
    `
    <div class="wallpaper">
                            <div class="card">
                                <div class="image-container">
                                    <img src="/project-2(libarary)/img/black clover.jpg" alt="your-image">
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
                                  <button class="btn_category btn-add-scheduled">Запланировано</button>
                                  <button class="btn_category">Отложенно</button>
                                  <button class="btn_category">Брошенно</button>
                                  <button class="btn_category btn_add_genre" id="button0" >Добавить в....</button>
                                </li>
                              </ul>
                            </div>
                            <div class="container_btns_genre ">
                              <ul>
                                <li>
                                  <button class="btn_genre">Драму</button>
                                  <button class="btn_genre">Комедия</button>
                                  <button class="btn_genre">Сёнен</button>
                                  <button class="btn_genre">Детектив</button>
                                  <button class="btn_genre">Фантастика</button>
                                </li>
                              </ul>
                            </div>
                        </div>
                        <div class="wallpaper">
                            <div class="card">
                                <div class="image-container">
                                    <img src="/project-2(libarary)/img/black clover.jpg" alt="your-image">
                                    <div class="container_btn">
                                    <button class="btn btn-add-reading">Смотрю</button>
                                    <button class="btn btn-add-read">Просмотренно</button>
                                    <button class="btn burger" id="button1">...</button>
                                </div>
                            </div>
                            </div>
                            <div class="container_btns">
                              <ul>
                                <li class="list_category">
                                  <button class="btn_category btn-add-scheduled">Запланировано</button>
                                  <button class="btn_category">Отложенно</button>
                                  <button class="btn_category">Брошенно</button>
                                  <button class="btn_category btn_add_genre" id="button1" >Добавить в....</button>
                                </li>
                              </ul>
                            </div>
                            <div class="container_btns_genre ">
                              <ul>
                                <li>
                                  <button class="btn_genre">Драму</button>
                                  <button class="btn_genre">Комедия</button>
                                  <button class="btn_genre">Сёнен</button>
                                  <button class="btn_genre">Детектив</button>
                                  <button class="btn_genre">Фантастика</button>
                                </li>
                              </ul>
                            </div>
                        </div>
                        <div class="wallpaper">
                            <div class="card">
                                <div class="image-container">
                                    <img src="/project-2(libarary)/img/black clover.jpg" alt="your-image">
                                    <div class="container_btn">
                                    <button class="btn btn-add-reading">Смотрю</button>
                                    <button class="btn btn-add-read">Просмотренно</button>
                                    <button class="btn burger" id="button1">...</button>
                                </div>
                            </div>
                            </div>
                            <div class="container_btns">
                              <ul>
                                <li class="list_category">
                                  <button class="btn_category btn-add-scheduled">Запланировано</button>
                                  <button class="btn_category">Отложенно</button>
                                  <button class="btn_category">Брошенно</button>
                                  <button class="btn_category btn_add_genre" id="button1" >Добавить в....</button>
                                </li>
                              </ul>
                            </div>
                            <div class="container_btns_genre ">
                              <ul>
                                <li>
                                  <button class="btn_genre">Драму</button>
                                  <button class="btn_genre">Комедия</button>
                                  <button class="btn_genre">Сёнен</button>
                                  <button class="btn_genre">Детектив</button>
                                  <button class="btn_genre">Фантастика</button>
                                </li>
                              </ul>
                            </div>
                        </div>
    `;

   }
   const anime = document.querySelector('.container_anime');
   anime.append(cards);
   addRead();
   addScheduled();
   addReading();
}
renderCard(0);
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
                                            <img src="/project-2(libarary)/img/black clover.jpg" alt="your-image">
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
                                          <button class="btn_category btn-add-scheduled">Запланировано</button>
                                          <button class="btn_category">Отложенно</button>
                                          <button class="btn_category">Брошенно</button>
                                          <button class="btn_category btn_add_genre" id="button0" >Добавить в....</button>
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="container_btns_genre ">
                                      <ul>
                                        <li>
                                          <button class="btn_genre">Драму</button>
                                          <button class="btn_genre">Комедия</button>
                                          <button class="btn_genre">Сёнен</button>
                                          <button class="btn_genre">Детектив</button>
                                          <button class="btn_genre">Фантастика</button>
                                        </li>
                                      </ul>
                                    </div>
                                </div>
                                <div class="wallpaper">
                                    <div class="card">
                                        <div class="image-container">
                                            <img src="/project-2(libarary)/img/black clover.jpg" alt="your-image">
                                            <div class="container_btn">
                                            <button class="btn btn-add-reading">Смотрю</button>
                                            <button class="btn btn-add-read">Просмотренно</button>
                                            <button class="btn burger" id="button1">...</button>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="container_btns">
                                      <ul>
                                        <li class="list_category">
                                          <button class="btn_category btn-add-scheduled">Запланировано</button>
                                          <button class="btn_category">Отложенно</button>
                                          <button class="btn_category">Брошенно</button>
                                          <button class="btn_category btn_add_genre" id="button1" >Добавить в....</button>
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="container_btns_genre ">
                                      <ul>
                                        <li>
                                          <button class="btn_genre">Драму</button>
                                          <button class="btn_genre">Комедия</button>
                                          <button class="btn_genre">Сёнен</button>
                                          <button class="btn_genre">Детектив</button>
                                          <button class="btn_genre">Фантастика</button>
                                        </li>
                                      </ul>
                                    </div>
                                </div>
                                <div class="wallpaper">
                                    <div class="card">
                                        <div class="image-container">
                                            <img src="/project-2(libarary)/img/black clover.jpg" alt="your-image">
                                            <div class="container_btn">
                                            <button class="btn btn-add-reading">Смотрю</button>
                                            <button class="btn btn-add-read">Просмотренно</button>
                                            <button class="btn burger" id="button2">...</button>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="container_btns">
                                      <ul>
                                        <li class="list_category">
                                          <button class="btn_category btn-add-scheduled">Запланировано</button>
                                          <button class="btn_category">Отложенно</button>
                                          <button class="btn_category">Брошенно</button>
                                          <button class="btn_category btn_add_genre" id="button2" >Добавить в....</button>
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="container_btns_genre ">
                                      <ul>
                                        <li>
                                          <button class="btn_genre">Драму</button>
                                          <button class="btn_genre">Комедия</button>
                                          <button class="btn_genre">Сёнен</button>
                                          <button class="btn_genre">Детектив</button>
                                          <button class="btn_genre">Фантастика</button>
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
    addCategories();
      
    
    
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
    addGenries();
//genres

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
addDrama();

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
addComedy();

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
addShonen();

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
addDetective();

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
addFantastic();

  
// filter genre

const filterCard = document.querySelectorAll('.wallpaper');


document.querySelector('nav').addEventListener('click', e => {
  let filterClass = e.target.dataset['f'];
  console.log(filterClass);
  filterCard.forEach( elem => {
    if(!elem.classList.contains(filterClass)){
      elem.classList.add('hide-filter');
    }else{
      elem.classList.remove('hide-filter');
      e.classList.add('active');
    }
  });
});