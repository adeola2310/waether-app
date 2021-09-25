import { weatherTypes } from '../actionTypes/weather.actionTypes';

const weatherInitialState = {
  loading: false,
};

/**
 * This reducer changes the weather state of the application
 *
 * @param {Object} [state=weatherInitialState]
 * @param action = weatherActions
 *
 * @returns {Object} state
 */
export default (state = weatherInitialState, action) => {
  switch (action.type) {
    case weatherTypes.GET_WEATHER_LOADING_RESPONSE:
      return {
        ...state,
        loading: true,
      };

    case weatherTypes.GET_WEATHER_SUCCESS_RESPONSE:
      return {
        ...state,
        weather: action.payload,
        loading: false,
      };

    case weatherTypes.GET_WEATHER_FAILURE_RESPONSE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
