import {
  GET_WEATHER_SUCCESS_RESPONSE,
  GET_WEATHER_FAILURE_RESPONSE,
} from '../../actionTypes/weather.actionTypes';
import reducer from '../';

const initialState = {
  loading: false,
};

describe('Reducer', () => {
  // it('should return initial state', () => {
  //     const result = reducer(undefined, {});
  //     expect(result).toEqual(initialState);
  // });

  it('should return new state for FETCH_WEATHER_SUCCESS', () => {
    const expectedResult = {
      weatherData: { message: 'success' },
      loading: false,
    };
    const result = reducer(undefined, {
      type: GET_WEATHER_SUCCESS_RESPONSE,
      data: { message: 'success' },
    });
    expect(result).toEqual(expectedResult);
  });

  it('should return current/initial state for FETCH_WEATHER_FAILED', () => {
    const result = reducer(undefined, {
      type: GET_WEATHER_FAILURE_RESPONSE,
    });
    expect(result).toEqual({ ...initialState, loading: false });
  });

  // it('should return new state for TOGGLE_LOADING', () => {
  //     const expectedResult = {
  //         loading: false,
  //     };
  //     const result = reducer(undefined, {
  //         type: GET_WEATHER_LOADING_RESPONSE,
  //     });
  //     expect(result).toEqual(expectedResult);
  // });
});
