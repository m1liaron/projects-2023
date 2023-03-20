'use strict';


    const appendTens = document.getElementById('tens'),
          appendSeconds = document.getElementById('seconds'),
          appendMinutes = document.getElementById('minutes'),
          start = document.getElementById('buttons-start'),
          stop = document.getElementById('buttons-stop'),
          reset = document.getElementById('buttons-reset');
    let Interval;
    var seconds = '00'; 
    var tens = '00'; 
    var minutes = '00'; 
    
    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }
    
    start.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    start.addEventListener('click', startTimer);
    
    stop.addEventListener('click', stopTimer);
    
    reset.addEventListener('click', resetTimer);
    
    function stopTimer(e) {
        clearInterval(Interval);
    }
    function resetTimer(e) {
        clearInterval(Interval);
        tens = '00';
        seconds = '00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    function startTimer(e) {
        tens++;
        
        if(tens <= 9){
            appendTens.innerHTML = '0' + tens;
        }
        if(tens >= 10){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '0';
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if(seconds > 59){
            minutes++;
            tens = 0;
            seconds = 0;
            appendTens.innerHTML = '0';
            appendSeconds.innerHTML = '00';
            appendMinutes.innerHTML = '0' + minutes;
        }
    }


    