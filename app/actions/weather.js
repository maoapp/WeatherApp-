// @vendors
import axios from 'axios';
import isEqual from 'lodash/isEqual';

// @actiontypes
import {
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_WEATHER_QUERY,
  WEATHER_REQUEST,
  WEATHER_REQUEST_SUCESSFUL,
  WEATHER_REQUEST_FAILURE
} from '../constants/actionTypes';

//@constants
import { API_KEY, API_URL } from '../constants/constants';

const signup = user => dispatch => {
  dispatch({
    type: REGISTER_USER,
    payload: user
  })
};

const loginSuccesful = () => ({
  type: LOGIN_USER_SUCCESSFUL
});

const loginFailure = () => ({
  type: LOGIN_USER_FAILURE
});

const logout = () => dispatch => dispatch({type: LOGOUT_USER});

const loginRequest = userData => (dispatch, getState) => {
  const { user } = getState().weatherReducer;
  const userRegistered = {
    email: user.email,
    password: user.password
  };

  if(isEqual(userRegistered, userData)) {
    dispatch(loginSuccesful())
  } else {
    dispatch(loginFailure())
  }
}

const fetchWeatherByCity = city => dispatch => {
  const url = `${API_URL}?key=${API_KEY}q=${city}`;
  
  dispatch(weatherRequest());
  // const url = 'http://api.apixu.com/v1/current.json?key=336a7cd929c546c996131739192205&q=medellin';
  axios.get(url)
    .then(res => dispatch(weatherRequestSuccesful(res.data)))
    .catch(() => dispatch(weatherRequestFailure()))
};

const weatherRequest = () => ({
	type: WEATHER_REQUEST
});

const weatherRequestFailure = () => ({
	type: WEATHER_REQUEST_FAILURE
});

const weatherRequestSuccesful = (data, list) => ({
  type: WEATHER_REQUEST_SUCESSFUL,
  payload: data,
  list
});

export {
  fetchWeatherByCity,
  signup,
  loginRequest
}
