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


const btns_burger = document.querySelectorAll('.burger');

// function abc(){
//   console.log('in function');
//   console.log(this);
//   this.style.backgroundColor = 'red';
// }

// let p = document.querySelectorAll('p');
// p.forEach(function(e) {
//   e.onClick = abc;
// })

// function abc(){
//   this.classList.toggle('show');
// }

        // btns_burger.forEach(btn => {
        //   btn.addEventListener('click', () =>{
        //     const block = document.querySelectorAll('.container_btns');
        //     block.forEach(block => {
        //       block.classList.toggle('show');
        //     })
        //   })
        // })    

        btns_burger.forEach((btn,i) => {
          console.log(`Is btns_burger ${i}`);
        })
        const block = document.querySelectorAll('.container_btns');

        function b(){
          block.forEach((block,e) => {
            console.log(`Is block ${e}`);
          })
        }
 
        function c(){
          btns_burger.forEach((btn,i) => {
            btn.addEventListener('click',)
          });
        }

        function a(){
          if(b = c){
            console.log('end');
          }
        }
        a()
        btns_burger.forEach((btn,i) => {
          btn.addEventListener('click', btns => {
          console.log(`It's btn number ${i}`)
          block.forEach((block,e) => {
            console.log(`Is block ${e}`);
          })
        })
        })

        // const buttons = document.querySelectorAll('.burger');
        // const divs = document.querySelectorAll('.container_btns');
        
        // buttons.forEach(button => {
        //   button.addEventListener('click', () => {
        //     const targetId = button.dataset.target;
        //     const targetDiv = document.querySelector(`#${targetId}`);
        //     targetDiv.classList.toggle('show');
        //   });
        // });