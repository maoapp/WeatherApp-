import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// @components
import LoginForm from '../components/loginForm/LoginForm';

// @styles
import theme from '../styles/theme';

// @assets
const backgroundImage = require('../assets/jpg/backgroundLogin.jpg');

class LoginScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        email: '',
        password: ''
      }
    };
  
    this.onChangeField = this.onChangeField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { isLogged } = nextProps;
    const { navigation } = this.props;

		if (isLogged) {
			navigation.navigate('WeatherScreen');
		}
	}

  onChangeField(value, key) {
      const { user } = this.state;
      this.setState({ user: {...user, [key]: value }});
  }

  onSubmit() {
    const { user } = this.state;
    const { loginRequest } = this.props;
    
    loginRequest(user);
  }

  render() {
    const { user } = this.state;
    const { navigation, errorLogin } = this.props;

    return(
      <ImageBackground style={styles.background} source={backgroundImage}>
        <View style={styles.container} >
        
        <Text style={styles.logo}>WEATHER APP</Text>
        <LoginForm {...
          {
            ...user, 
            onChangeField: this.onChangeField,
            onSubmit: this.onSubmit, 
            errorLogin,
            navigation
          }}/>
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: theme.blue_opacity,
  },
  background: {
    width: '100%', 
    height: '100%',
  },
  logo: {
    fontSize: 20,
    color: theme.white
  }
});

LoginScreen.propTypes = {
  user: PropTypes.object,
  loginRequest: PropTypes.func,
  errorLogin: PropTypes.bool
};

export default LoginScreen;
