

const elements = document.querySelectorAll('.element');

elements.forEach(element => {
  const buttons = element.querySelectorAll('button');
  const bober = element.querySelector('.bober');
  
  // let clickCount = 0;
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // clickCount++;
      bober.classList.toggle('show');
      // if (clickCount === 3) {
      // }
    });
  });
});

const cards = document.querySelectorAll('.wallpaper');

function addCategories(){
  cards.forEach(element => {
    const buttons = element.querySelectorAll('.burger');
    const bober = element.querySelector('.container_btns');
    
    // let clickCount = 0;
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // clickCount++;
        bober.classList.toggle('show');
        // if (clickCount === 3) {
        // }
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

