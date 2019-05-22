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

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isLogged: false
  },
  errorLogin: false,
  weather: {
    data: null,
    isFetching: false,
    successful: false,
    failure: false
  },
  registerOfQueries: []
};

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_USER: {
      return {
        ...state,
        user: action.payload
      }
    }
    case LOGIN_USER_FAILURE: {
      return {
        ...state,
        errorLogin: true
      }
    }
    case LOGIN_USER_SUCCESSFUL: {
      return {
        ...state,
        user: {
          ...state.user,
          isLogged: true
        }
      }
    }
    case LOGOUT_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          isLogged: false
        }
      }
    }
    case WEATHER_REQUEST: {
      return {
        ...state,
        weather: {
          ...state.weather,
          isFetching: true,
          failure: false
        }
      }
    }
    case WEATHER_REQUEST_SUCESSFUL: {
      return {
        ...state,
        weather: {
          ...state.weather,
          data: action.payload,
          isFetching: false,
          failure: false
        }
      }
    }
    case WEATHER_REQUEST_FAILURE: {
      return {
        ...state,
        weather: {
          ...state.weather,
          isFetching: false,
          failure: true
        }
      }
    }
    default:
      return state;
  }
};

export default weatherReducer;
