import axios from 'axios';
import { weatherTypes } from '../actionTypes/weather.actionTypes';

const fetchWeatherRequest = () => ({
  type: weatherTypes.GET_WEATHER_LOADING_RESPONSE,
});

const fetchWeatherSuccess = payload => ({
  type: weatherTypes.GET_WEATHER_SUCCESS_RESPONSE,
  payload,
});

const fetchWeatherFailure = error => ({
  type: weatherTypes.GET_WEATHER_FAILURE_RESPONSE,
  error,
});

// WEATHER ENDPOINTS
/**
 * @description: GET THE WEATHER DATA DETAILS
 */
export const getWeatherDetails = unit => async dispatch => {
  try {
    dispatch(fetchWeatherRequest());
    const request = await axios.get(
      `/forecast?q=Munich,de&units=${unit}&APPID=c2f860e3c7f3712973b0a78811975611&cnt=40`
    );
    return dispatch(fetchWeatherSuccess(request));
  } catch (error) {
    return dispatch(fetchWeatherFailure(error));
  }
};
