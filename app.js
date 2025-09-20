let time = () =>{
    let left = document.getElementById("left");
    let date = new Date();
    left.innerHTML = date.getHours() + " : " + date.getMinutes();
}
let myInterval = setInterval(time, 1000);

// let apiKey = "eb41e176c172278258865cfbba21fe57";

async function checkWeather(){
    let weatherImage = document.getElementById("weatherImage");
    let input = document.getElementById("input").value.trim();
    if(!input) {
        alert("Please enter a city name!");
        return;
    }
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=70f61d33bf6cd9eea2dc5f329e350704&units=metric`;
    try{
        const response = await fetch(apiURL);
        if(!response.ok){
            throw new Error("City not found!");
        }
        let data = await response.json();
        console.log(data);
        document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + " °C";
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main === "Clouds"){
            weatherImage.src = "images/clouds.png";
        }
        else if(data.weather[0].main === "Clear"){
            weatherImage.src = "images/clear.png";
        }
        else if(data.weather[0].main === "Rain"){
            weatherImage.src = "images/rain.png";
        }
        else if(data.weather[0].main === "Drizzle"){
            weatherImage.src = "images/drizzle.png";
        }
        else if(data.weather[0].main === "Mist"){
            weatherImage.src = "images/mist.png";
        }
        else if(data.weather[0].main === "Snow"){
            weatherImage.src = "images/snow.png";
        }
    }
    catch(error){
        alert(error.message);
    }

}

let inputBtn = document.getElementById("checkBtn");
inputBtn.addEventListener("click",  checkWeather);