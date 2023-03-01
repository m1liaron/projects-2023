'use strict'; 
            let read_block = document.querySelector('.read'), 
                planned_block = document.querySelector('.planned'), 
                reading_block = document.querySelector('.reading');


                function addRead(){
                  let btn_add_read = document.querySelectorAll('.btn-add-read')
                btn_add_read.forEach(function(btn) {
                  btn.addEventListener('click', function() {
                    let card = this.parentNode;
                    card.classList.toggle('active_1');
                    read_block.append(card);
                  })
                })
                }
                addRead();

                function addScheduled(){
                  let btn_add_scheduled = document.querySelectorAll('.btn-add-scheduled');
                btn_add_scheduled.forEach(function(btn) {
                  btn.addEventListener('click', function() {
                    let card = this.parentNode;
                    card.classList.toggle('active_2');
                    planned_block.append(card);
                  })
                })
                }
                addScheduled();

                function addReading(){
                  let btn_add_reading = document.querySelectorAll('.btn-add-reading');
                btn_add_reading.forEach(function(btn) {
                  btn.addEventListener('click', function() {
                    let card = this.parentNode;
                    card.classList.toggle('active_3');
                    reading_block.append(card);
                  })
                })
                }
                addReading();

    //Create a new anime


    const btn = document.querySelector('.plus');
    btn.addEventListener('click',Addnew);
    
    
    function Addnew() {
        const newDiv = document.createElement('div');
        newDiv.className = 'container_anime';
         console.log("add");
         newDiv.innerHTML = 
            `
            <div class="anime_flex">
            <div class="card">
              <img id="myimage" height="200">
              <input type="file" onchange="onFileSelected(event)">
              <button class="btn-add-read">Просмотр</button>
              <button class="btn-add-scheduled">Запланировано</button>
              <button class="btn-add-reading">Смотрю</button>
            </div>
            <div class="card">
              <img id="myimage" height="200">
              <input type="file" onchange="onFileSelected(event)">
              <button class="btn-add-read">Просмотр</button>
              <button class="btn-add-scheduled">Запланировано</button>
              <button class="btn-add-reading">Смотрю</button>
            </div>
            <div class="card">
              <img id="myimage" height="200">
              <input type="file" onchange="onFileSelected(event)">
              <button class="btn-add-read">Просмотр</button>
              <button class="btn-add-scheduled">Запланировано</button>
              <button class="btn-add-reading">Смотрю</button>
            </div>
        </div>
            `;

         document.querySelectorAll('.anime').forEach(e => {
          e.appendChild(newDiv);
          
         });
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

