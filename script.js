const key = '36da10c2410c9d4f8e409c462e441f1c';
const input = document.querySelector('input');
const karinka_temp = document.querySelector('#karinka_temp');
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

btn.addEventListener("click", a);

massiv = [];
function a(event){
    let znachenye = input.value;
    input.value = '';
    massiv.push(znachenye);
}
