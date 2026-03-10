async function getWeather(){

let city=document.getElementById("city").value;

let weather=document.getElementById("weather");
let loading=document.getElementById("loading");
let error=document.getElementById("error");

weather.textContent="";
error.textContent="";

loading.textContent="Loading weather...";

try{

let response=await fetch(`https://wttr.in/${city}?format=j1`);

let data=await response.json();

loading.textContent="";

let temp=data.current_condition[0].temp_C;
let condition=data.current_condition[0].weatherDesc[0].value;

weather.textContent=`Temperature: ${temp}°C | Condition: ${condition}`;

}

catch{

loading.textContent="";
error.textContent="Error fetching weather data";

}

}