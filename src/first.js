// function changes_done(response) {
//   let city = response.data.city;
//   let city_change = document.querySelector("#city");
//   city_change.innerHTML = city;
// }
// function input_city(event) {
//   event.preventDefault();
//   let search_city = document.querySelector("#search-city");
//   let query = search_city.ariaValueMax;
//   let key = "c5a6a83t0ob243459ee2e0a001fc9827 ";
//   let apiUrl =
//     "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";

//   axios.get(apiUrl).then(changes_done);
// }
// let form_input = document.querySelector(".search-forcast");
// form_input.addEventListener("submit", input_city);

let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let day = now.getDay();
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let week_day = document.querySelector("#week-day");
week_day.innerHTML = days[day];

let current_hour = document.querySelector("#current-hour");
current_hour.innerHTML = hour;

let current_minute = document.querySelector("#current-minute");
current_minute.innerHTML = min;

function change_weather(response) {
  let today_weather_condition = document.querySelector(
    "#today-weather-condition"
  );
  today_weather_condition.innerHTML = response.data.condition.description;
  let temp = document.querySelector("#temp");
  temp.innerHTML = Math.round(response.data.temperature.current);

  let humidity_percentage = document.querySelector("#humidity-percentage");
  humidity_percentage.innerHTML = response.data.temperature.humidity;

  let wind_speed = document.querySelector("#wind-speed");
  wind_speed.innerHTML = response.data.wind.speed;

  let icon = document.querySelector("#icon");
  let icon_link = response.data.condition.icon_url;
  icon.innerHTML = `<img src="${icon_link}" >`;
}

function search(event) {
  event.preventDefault();
  let search_city = document.querySelector("#search-city");
  let city_web = document.querySelector("#city");
  let city = search_city.value;
  city_web.innerHTML = city;
  let key = "c5a6a83t0ob243459ee2e0a001fc9827";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(apiUrl).then(change_weather);
}
let search_form = document.querySelector(".search-forcast");
search_form.addEventListener("submit", search);
