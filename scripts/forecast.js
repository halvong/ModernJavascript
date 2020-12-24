const key = 'YqnlUYhpDhxHP8SJn4vY4GIwhHqU3nII';

//get weather condition
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);//returns Promise
    const data = await response.json();//returns Promise

    return data;
};

//get city information
const getCity = async (city) => {
    //returns Promise function

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    //fetch returns Promise
    const response = await fetch(base + query);
    const data = await response.json();

    //console.log(data[0]);
    return data[0];
};

getCity('manchester')
    .then(data => {
        console.log("City key: ",data.Key);
        return getWeather(data.Key);
    })
    .then(data =>{
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });


