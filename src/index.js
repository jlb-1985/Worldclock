function updateTime() {
    let tarawaElement = document.querySelector("#tarawa");
    let tarawaDateElement = tarawaElement.querySelector(".date");
    let tarawaTimeElement = tarawaElement.querySelector(".time");
    let tarawaTime = moment().tz("Pacific/Tarawa");
  
    tarawaDateElement.innerHTML = tarawaTime.format('MMMM Do YYYY');
    tarawaTimeElement.innerHTML = tarawaTime.format('h:mm:ss [<small>]A[</small>]');
  
    let pagoPagoElement = document.querySelector("#pago-pago");
    let pagoPagoDateElement = pagoPagoElement.querySelector(".date");
    let pagoPagoTimeElement = pagoPagoElement.querySelector(".time");
    let pagoPagoTime = moment().tz("Pacific/Pago_Pago");
  
    pagoPagoDateElement.innerHTML = pagoPagoTime.format('MMMM Do YYYY');
    pagoPagoTimeElement.innerHTML = pagoPagoTime.format('h:mm:ss [<small>]A[</small>]');
  }
  
  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
      </div>
    `;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
  
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);

  const video = document.getElementById('background-video');
  video.playbackRate = 0.4;

  video.addEventListener('timeupdate', () => {
    if (video.currentTime >= video.duration - 0.5) {
      video.currentTime = 0;
      video.play();
    }
  });