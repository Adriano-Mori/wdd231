const currentWeather = document.querySelector('#weather-data');
const weatherForecast = document.querySelector('#forecast-data');
const weatherIcon = document.querySelector('#weather-icon');
const lat = -9.127780146259427
const lon = -78.51347342219296
const apiKey = "d9a1604d79c23b4e785676b035eb98b7"
const currentURL = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
async function apiFetch() {
    try {
        const currentRes = await fetch(currentURL);
        const forecastRes = await fetch(forecastURL);

        if (currentRes.ok && forecastRes.ok) {
            const currentData = await currentRes.json();
            const forecastData = await forecastRes.json();

            displayResults(currentData);
            displayForecast(forecastData);
            //console.log(currentData)
            //console.log(forecastData)

        } else {
            console.error('One of the API responses failed');
        }
    } catch (error) {
        console.error(error);
    }
}
//time format
function formatTime(timestamp, timezone) {
    return new Date((timestamp + timezone) * 1000)
        .toLocaleTimeString('es-PE', {
            hour: '2-digit',
            minute: '2-digit'
        });
}
function displayResults(data) {
    // convert sunrise and sunset data to time formt
    const sunrise = formatTime(data.sys.sunrise, data.timezone);
    const sunset = formatTime(data.sys.sunset, data.timezone);
    //weatherinfo
    const weatherInfo = [
        { value: `${data.main.temp} °C` },
        { value: `${data.weather[0].description}` },
        { value: `${data.main.temp_max} °C` },
        { value: `${data.main.temp_min} °C` },
        { value: `${data.main.humidity} °C` },
        { value: sunrise },
        { value: sunset },

    ];
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
    currentWeather.innerHTML = '';
    const ul = document.createElement('ul');

    weatherInfo.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.value;
        ul.appendChild(li);
    });
    currentWeather.appendChild(ul);
}
function displayForecast(data) {
    const index = [0, 8, 16];
    const forecastInfo = index.map(i => {
        const date = new Date(data.list[i].dt * 1000);
        let dayLabel;

        if (i === 0) {
            dayLabel = "Today";
        } else {
            dayLabel = date.toLocaleDateString('en-US', { weekday: 'long' });
        }

        return {
            label: dayLabel,
            value: `${data.list[i].main.temp} °C`
        };
    });
    const todayTemp = data.list[0].main.temp;
    const tomorrowTemp = data.list[8].main.temp;
    const dayAfterTemp = data.list[16].main.temp;

    weatherForecast.innerHTML = '';
    const ul = document.createElement('ul');

    forecastInfo.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.label}: ${item.value}`;
        ul.appendChild(li);
    });
    weatherForecast.appendChild(ul);
}
apiFetch();