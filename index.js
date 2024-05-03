'use strict';



function getWeather(city) {

    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=5d066958a60d315387d9492393935c19";


    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var data = JSON.parse(xhr.responseText);

            displayWeather(data);
        }
    };
    xhr.send();
}


function displayWeather(data) {

    let temperature = data.main.temp;
    let pressure = data.main.pressure;
    let description = data.weather[0].description;
    let humidity = data.main.humidity;
    let windSpeed = data.wind.speed;
    let windDirection = data.wind.deg;
    let iconCode = data.weather[0].icon;
    let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

    // Виводимо отримані дані у відповідні елементи HTML
    document.getElementById("temperature").textContent = "Температура: " + temperature + "°C";
    document.getElementById("pressure").textContent = "Тиск: " + pressure + " hPa";
    document.getElementById("description").textContent = "Опис: " + description;
    document.getElementById("humidity").textContent = "Вологість: " + humidity + "%";
    document.getElementById("windSpeed").textContent = "Швидкість вітру: " + windSpeed + " м/с";
    document.getElementById("windDirection").textContent = "Напрям вітру: " + windDirection + "°";
    document.getElementById("icon").src = iconUrl;
}


getWeather("LVIV");
