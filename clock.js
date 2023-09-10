document.body.style.backgroundColor="black";
let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let digitalClock = document.getElementById("digital");
let day = document.getElementById("date");
setInterval(() => {
    let date = new Date();
    day.innerHTML = date.toDateString();
    let secToDeg = date.getSeconds()*6;
    second.style.transform = `rotate(${secToDeg}deg)`;
    let minToDeg = date.getMinutes()*6;
    minute.style.transform = `rotate(${minToDeg}deg)`;
    let hrToDeg = date.getHours()*30 + (minToDeg/12);
    hour.style.transform = `rotate(${hrToDeg}deg)`;
    digitalClock.innerHTML = "<h1>" + date.getHours() + ":"
     + date.getMinutes() + ":" + date.getSeconds() + "</h1>";
},1000);
