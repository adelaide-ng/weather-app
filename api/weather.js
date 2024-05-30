import axios from "axios";

const apiKey = '8b4757b7c0da4c9897d55807243005';
const apiURL = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.country}&days=${params.days}&aqi=no&alerts=no`;

const apiCall = async (URL) => {
    const options = {
        method: 'GET',
        url: URL
    }
    try{
        const response = await axios.request(options);
        return response.data;
    } catch(err) {
        console.log('error', err);
        return null;
    }
}

export const fetchWeatherForecast = params => {
    return apiCall(apiURL(params));
}