//http://api.openweathermap.org/data/2.5/weather?zip=04250,us&appid=2ecf96880070b925a4314f961f46fa69

let request = new XMLHttpRequest();
request.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=04250,us&units=imperial&appid=2ecf96880070b925a4314f961f46fa69");
request.send();
request.onload = () => {
    console.log(request);
    if (request.status === 200) {
        console.log(JSON.parse(request.response));
        var data = JSON.parse(request.response);
        switch (data.weather.description) {
            case "clear sky":
                document.getElementById('weather-icon').src = "graphics/sunny.gif";
            case "few clouds":
                document.getElementById('weather-icon').src = url("http://openweathermap.org/img/wn/02n@2x.png");
            case "scattered clouds":
                document.getElementById('weather-icon').src = url("http://openweathermap.org/img/wn/03d@2x.png");
            case "broken clouds":
                document.getElementById('weather-icon').src = "http://openweathermap.org/img/wn/04d@2x.png";
            case "shower rain":
                document.getElementById('weather-icon').src = "http://openweathermap.org/img/wn/09d@2x.png";
            case "rain":
                document.getElementById('weather-icon').src = "http://openweathermap.org/img/wn/10d@2x.png";
            case "thunderstorm":
                document.getElementById('weather-icon').src = "http://openweathermap.org/img/wn/11d@2x.png";
            case "snow":
                document.getElementById('weather-icon').src = "http://openweathermap.org/img/wn/13d@2x.png";
            case "mist":
                document.getElementById('weather-icon').src = "http://openweathermap.org/img/wn/02n@50d.png";
        }
        document.getElementById('weather-high').innerHTML = data.main.temp_max + "&deg";
        document.getElementById('weather-low').innerHTML = data.main.temp_min + "&deg";
        document.getElementById('weather-humid').innerHTML = data.main.humidity + "%";
        document.getElementById('weather-wind').innerHTML = data.wind.speed;
    } else {
        console.log(`error ${request.status} ${request.statusText}`)
    }
}