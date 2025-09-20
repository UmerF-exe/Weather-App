let time = () =>{
    let left = document.getElementById("left");
    let date = new Date();
    left.innerHTML = date.getHours() + " : " + date.getMinutes();
}
let myInterval = setInterval(time, 1000);

// let apiKey = "eb41e176c172278258865cfbba21fe57";
let input = document.getElementById("input").value;
// let inputBtn = document.getElementById("checkBtn");
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=eb41e176c172278258865cfbba21fe57&units=metric`;

async function checkWeather(){
    const response = await fetch(apiURL);
    let data = await response.json();
    console.log(data);

    document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + " °C";
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

}
// inputBtn.addEventListener("click", () => {
//     checkWeather();
// });