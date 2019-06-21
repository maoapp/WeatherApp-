import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../containers/Signup';
import UserScreen from '../containers/User';

const Routes = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: { header: null }
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: { header: null }
  },
  UserScreen: {
    screen: UserScreen,
    navigationOptions: { header: null }
  }
}

export default Routes;
