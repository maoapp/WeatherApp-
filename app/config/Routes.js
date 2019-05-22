import LoginScreen from '../containers/Login';
import SignupScreen from '../containers/Signup';
import WeatherScreen from '../containers/Weather';
import HistorialScreen from '../containers/Historial';

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
  },
  HistorialScreen: {
    screen: HistorialScreen,
    navigationOptions: { header: null }
  }
}

export default Routes;
