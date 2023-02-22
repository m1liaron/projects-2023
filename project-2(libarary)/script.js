'use strict'; 
            let read_block = document.querySelector('.read'), 
                planned_block = document.querySelector('.planned'), 
                reading_block = document.querySelector('.reading');

            document.querySelectorAll('.btn-add-read').forEach(button => {button.addEventListener('click',e => {;
                  document.querySelectorAll('.card').forEach(button => {button.addEventListener('click',e => {
            button.classList.toggle('active');
            read_block.append(button);
          });
        })
      })
    })

            document.querySelectorAll('.btn-add-scheduled').forEach(button => {button.addEventListener('click',e => {;
              document.querySelectorAll('.card').forEach(button => {button.addEventListener('click',e => {
            button.classList.toggle('active');
            planned_block.append(button);
          });
        })
      })
    })

            document.querySelectorAll('.btn-add-reading').forEach(button => {button.addEventListener('click',e => {;
              document.querySelectorAll('.card').forEach(button => {button.addEventListener('click',e => {
            button.classList.toggle('active');
            reading_block.append(button);
          }); 
        })
      })
    })

//     document.querySelectorAll('.btn-add-reading').forEach(button => {button.addEventListener('click',e => {;
//       const card = document.querySelectorAll('.card');
//       // reading_block.append(card);
//       this.cards = card; 
//       card
// })
// })


// function read(){
//   const btn_read = document.querySelectorAll('.btn-add-reading').forEach(e => {
//     e.classList.toggle('active');
//   });

// }


//   const card = document.querySelectorAll('.card');
//       this.cards = card; 


      
//       read().addEventListener('click',() => {
//       reading_block.append(cards);
//   })

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


          // btn.addEventListener('click',Addnew2);
          
        //   function Addnew2() {
        //     const newDiv = document.createElement('div');
        //     newDiv.className = 'card';
        //      console.log("add");
        //      newDiv.innerHTML = 
        //         `
        //           <img id="myimage" height="200">
        //           <input type="file" onchange="onFileSelected(event)">
        //           <button class="btn-add-read">Просмотр</button>
        //           <button class="btn-add-scheduled">Запланировано</button>
        //           <button class="btn-add-reading">Смотрю</button>
        //         `;
    
        //      document.querySelectorAll('.container_anime').forEach(e => {
        //       e.appendChild(newDiv);
        //      });
        //  }

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