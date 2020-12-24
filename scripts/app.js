const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    const cityDets = data.cityDets;
    const weather = data.weather[0];

    //update templates
    details.innerHTML = `
                <h5 class="my-3">${cityDets.EnglishName}</h5>
                    <div class="my-3">${weather.WeatherText}</div>
                    <div class="display-4 my-4">
                    <span>${weather.Temperature.Imperial.Value}</span>
                    <span>&deg;${weather.Temperature.Imperial.Unit}</span>
                </div> 
    `;

    //show icons and images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = weather.IsDayTime? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);


    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};

//--
const updateCity = async (city) => {
    console.log("L3. city:",city);

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    //console.log("L8. weather",weather);
    return {cityDets, weather};
};

//--
cityForm.addEventListener('submit', e => {
    e.preventDefault();

    //get city input value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => {
            console.log("L31. data:",data);
            updateUI(data);
        })
        .catch(err => {
            console.log("L29. err:",err.message);
        });
});
