const weatherData = {
    nagpur: { temp: "26°C", condition:"cloudy"},
    pune: {temp: "23°C",condition:"Rainy"},
    kolkata: {temp: "30°C", condition: "Hot"},
    mumbai: {temp: "35°C", condition: "Humid"},
};

function fetchWeather(city){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        const formattedCity = city.toLowerCase().trim();
        const data = weatherData[formattedCity];
 
        if(data){
            resolve(data);
        }
        else {
            reject("City Not Found");
        }
    },
     1200);
    });
}

function getWeather(){

    const city = 
    document.getElementById("city").value.trim();

    const result =
    document.getElementById("result");

    if(!city){
        result.innerHTML = "Please Enter a city name";
        return;
    }

    result.innerHTML = "Fetching Weather....";

    fetchWeather(city)
    .then((data)=>{
        result.innerHTML = `
        <h3>${city.toUpperCase()}</h3>
        <p>Temperature:<strong>${data.temp}</strong></p>`;
    })

    .catch((error)=>{
        result.innerHTML = error;
    });
}



