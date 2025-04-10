
function updateTime() {

let philadelphiaElement = document.querySelector("#philadelphia");
let philadelphiaDateElement = philadelphiaElement.querySelector(".date");
let philadelphiaTimeElement = philadelphiaElement.querySelector(".time");
let philadelphiaTime = moment().tz("America/Philadelphia");
philadelphiaDateElement.innerHTML = philadelphiaTime.format("MMMM Do, YYYY");
philadelphiaTimeElement.innerHTML = philadelphiaTime.format("h:mm:ss [<small>]A[</small>]");


let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement =sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");
sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
}
updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);

