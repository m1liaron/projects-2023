'use strict';

// Set the initial function to showTime
var updateTimeFunction = showTime;

function showTime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = 'AM'

    second ++;
    if(hour > 12){
        hour = hour - 12;
         session = 'PM'
    }

    if(second > 59){
        minute++;
        second = 0 + second;
    }
    if(minute > 59){
        hour++;
        minute = 0;
        second = 0; 
    }

    hour = (hour < 10) ? '0' + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time = hour + ':' + minute + ':' + second + ' ' + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(updateTimeFunction, 1000);

    const timeset = document.getElementById('return-time');
    timeset.addEventListener('click', e => {
        updateTimeFunction = showTime
    });
}

function showTimeItaly(){
    const date = new Date();
    const options = {
    timeZone: 'Europe/Rome',
    hour12: false,
    hour: 'numeric',
    };

    var hour = date.toLocaleString('en-US', options);
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = 'AM'

    second ++;
    if(hour > 12){
        hour = hour - 12;
         session = 'PM'
    }

    if(second > 59){
        minute++;
        second = 0 + second;
    }
    if(minute > 59){
        hour++;
        minute = 0;
        second = 0; 
    }

    hour = (hour < 10) ? '0' + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time = hour + ':' + minute + ':' + second + ' ' + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(updateTimeFunction, 1000);

    
}

showTime();

const burger = document.getElementById('burger');
const countries = document.getElementById('countries-time');
const Italy = document.getElementById('Italy');

burger.addEventListener('click', e => {
    countries.classList.toggle('show');
});

Italy.addEventListener('click', e => {
    // Update the global variable to the new function
    updateTimeFunction = showTimeItaly;
});




// returnTime();