const api_key = '36da10c2410c9d4f8e409c462e441f1c';
const input = document.querySelector('input');
const kartinka_temp = document.querySelector('#kartinka_temp');
const pogoda_date = document.querySelector('.date');
const weather_description = document.querySelector('#weather_description');
const min_temp = document.querySelector('#min_temp');
const max_temp = document.querySelector('#max_temp');
const ochuchenye = document.querySelector('#ochuchenye');
const btn = document.querySelector(".btn");
// input.addEventListener('keypress', a);
// function a(event){
//     console.log(event);
// }



const getWeather = async () => {
    try{
    const city = input.value;
    console.log("ozhidanye otveta servera");
    
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36da10c2410c9d4f8e409c462e441f1c&units=metric`);
    console.log("dannye blat polucheny")
    const json_data = await weather.json()
    console.log(json_data);
    min_temp.innerHTML = Math.ceil(json_data.main.temp_min)
    max_temp.innerHTML = Math.ceil(json_data.main.temp_max)
    ochuchenye.innerHTML = Math.ceil(json_data.main.feels_like)
    kartinka_temp.innerHTML = Math.ceil(json_data.main.feels_like)
    }

    catch (error) {
        console.log("ERROR:", error.message);
    }
}

btn.addEventListener("click", getWeather);