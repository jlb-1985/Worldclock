//Tarawa//
function updateTime(){

let tarawaElement = document.querySelector("#tarawa");
let tarawaDateElement = tarawaElement.querySelector(".date");
let tarawaTimeElement = tarawaElement.querySelector(".time");
let tarawaTime= moment().tz("Pacific/Tarawa");

tarawaDateElement.innerHTML = tarawaTime.format('MMMM Do YYYY');
tarawaTimeElement.innerHTML = tarawaTime.format('h:mm:ss [<small>]A[</small>]');

//Pago pago//

let pagoPagoElement = document.querySelector("#pago-pago");
let pagoPagoDateElement = pagoPagoElement.querySelector(".date");
let pagoPagoTimeElement = pagoPagoElement.querySelector(".time");
let pagoPagoTime= moment().tz("Pacific/Pago_Pago");

pagoPagoDateElement.innerHTML = pagoPagoTime.format('MMMM Do YYYY');
pagoPagoTimeElement.innerHTML = pagoPagoTime.format('h:mm:ss [<small>]A[</small>]');
}

updateTime();
setInterval(updateTime, 1000);






const video = document.getElementById('background-video').playbackRate = 0.4; ;

video.addEventListener('timeupdate', () => {
    if (video.currentTime >= video.duration - 0.5) {
        video.currentTime = 0;
        video.play();
    }
});