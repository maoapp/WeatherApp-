import LoginScreen from '../containers/Login';
import SignupScreen from '../containers/Signup';
import WeatherScreen from '../containers/Weather';

const Routes = {
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { header: null }
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: { header: null }
  },
  WeatherScreen: {
    screen: WeatherScreen,
    navigationOptions: { header: null }
  }
}

export default Routes;
