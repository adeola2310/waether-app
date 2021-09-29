import {
  GET_WEATHER_SUCCESS_RESPONSE,
  GET_WEATHER_LOADING_RESPONSE,
} from '../../actionTypes/weather.actionTypes';
import reducer from '../';

describe('Reducer', () => {
  it('should return new state for FETCH_WEATHER_SUCCESS', () => {
    const expectedResult = {
      weather: { loading: false },
    };
    const result = reducer(undefined, {
      type: GET_WEATHER_SUCCESS_RESPONSE,
      data: { message: 'success' },
    });
    expect(result).toEqual(expectedResult);
  });

  it('should return new state for Loading', () => {
    const expectedResult = {
      weather: { loading: false },
    };
    const result = reducer(undefined, {
      type: GET_WEATHER_LOADING_RESPONSE,
    });
    expect(result).toEqual(expectedResult);
  });
});
