const input = document.querySelector('.container header .content input');
const button = document.querySelector('.container header .content button');
const main = document.querySelector('.container .main');
const country = document.querySelector('.container .main .card .country');
const cityDisplay = document.querySelector('.container .main .card .city');
const temp = document.querySelector('.container .main .card .temp');
const weather = document.querySelector('.container .main .card .weatherBlock .weather');
const icon = document.querySelector('.container .main .card .weatherBlock .icon');
const humidity = document.querySelector('.container .main .card .humidity');
const wind = document.querySelector('.container .main .card .wind');
const time = document.querySelector('.container .main .card .time');
let apiKey = '49960fd430ba475eb09154221221810';
function search() {
    if (input.value != 0) {
        let city = input.value.trim();
        let link = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
        fetch(link)
            .then(res => res.json())
                .then(result => {
                    country.innerText = result.location.country;
                    cityDisplay.innerText = result.location.region != result.location.name 
                                            ? result.location.region + ' ' + result.location.name 
                                            : result.location.name;
                    temp.innerText = result.current.temp_c + '°C';
                    weather.innerText = result.current.condition.text;
                    icon.src = 'https://' + result.current.condition.icon;
                    humidity.innerText = 'Humidity ' + result.current.humidity + '%';
                    wind.innerText = `Wind ${result.current.wind_kph} km/h`;
                    time.innerText = result.location.localtime;
                }).catch(() => {
                    alert('City not found');
                });
    }
}

button.addEventListener('click', () => search());
input.addEventListener('keydown', (e) => e.keyCode == 13 ? search() : '');

