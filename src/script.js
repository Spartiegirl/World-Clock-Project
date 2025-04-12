
function updateTime() {

let philadelphiaElement = document.querySelector("#philadelphia");
if (philadelphiaElement) {
let philadelphiaDateElement = philadelphiaElement.querySelector(".date");
let philadelphiaTimeElement = philadelphiaElement.querySelector(".time");
let philadelphiaTime = moment().tz("America/Philadelphia");
philadelphiaDateElement.innerHTML = philadelphiaTime.format("MMMM Do, YYYY");
philadelphiaTimeElement.innerHTML = philadelphiaTime.format("h:mm:ss [<small>]A[</small>]");
}


let sydneyElement = document.querySelector("#sydney");
if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement =sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement= document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

