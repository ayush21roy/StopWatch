let stop = document.getElementById("stop");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let display = document.querySelector(".displayTime");

let timerId = null;
let hour = 0;
let min = 0;
let sec = 0;

start.addEventListener('click',function(){

    if(timerId!==null)
    {
        clearInterval(timerId);
    }
  timerId = setInterval(startTimer,1000);

});

stop.addEventListener('click',function(){
    clearInterval(timerId);
});

reset.addEventListener('click',function(){
    hour = min = sec = 0;
    clearInterval(timerId);
    display.textContent = `00:00:00`;
});

function startTimer(){
  sec++;  //sec to begin to reach >= 60
   if(sec >= 60)
   {
        sec = 0;
        min++;

        if(min >= 60)
        {
            min = 0;
            hour++;
        }
   }

let s = sec<10 ? `0${sec}`:sec;
let m = min<10 ? `0${min}`:min;
let h = hour<10 ? `0${hour}`:hour;
 
 display.textContent = `${h}:${m}:${s}`;

};