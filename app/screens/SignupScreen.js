import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// @components
import SignupForm from '../components/signupForm/SignupForm';

// @styles
import theme from '../styles/theme';

// @assets
const backgroundImage = require('../assets/jpg/register.jpg');

class SignupScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      formErrors: {email: '', password: '', confirmPassword: ''},
      emailValid: false,
      passwordValid: false,
      passwordsMatched: true,
      formValid: false
    };
  
    this.onChangeField = this.onChangeField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onValidateField = this.onValidateField.bind(this);
    this.onValidateForm = this.onValidateForm.bind(this);
  }

  onChangeField(value, key) {
      const { user } = this.state;
      this.setState({ user: {...user, [key]: value }}, () => this.onValidateField(key));
  }


  onValidateField(fieldName) {
    const { emailValid, formErrors, passwordValid, user } = this.state;
    const { email, password, confirmPassword } = user;
    const passwordsMatch = password.length === confirmPassword.length;

    let fieldValidationErrors = formErrors;
    let emailIsValid = emailValid;
    let passwordIsValid = passwordValid;
    
    switch(fieldName) {
      case 'email':
        emailIsValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailIsValid ? '' : ' is invalid';

        break;
      case 'password':
        passwordIsValid = password.length >= 6; 
        fieldValidationErrors.password = passwordIsValid ? '' : 'should has minimium 6 character'; 
        fieldValidationErrors.confirmPassword = passwordsMatch  ? '' : 'Dont match with password';

        break;
      case 'confirmPassword':
        fieldValidationErrors.confirmPassword = passwordsMatch ? '' : 'Dont match with password';

        break;  
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailIsValid,
      passwordValid: passwordIsValid,
      passwordsMatched: passwordsMatch
    }, this.onValidateForm);
  }

  onValidateForm() {
    const { emailValid, passwordValid, passwordsMatched, user } = this.state;
    const { firstName, lastName } = user;
    const validations = emailValid && passwordValid && passwordsMatched && firstName && lastName;

    this.setState({formValid: validations});
  }

  onSubmit() {
    const { user, formValid } = this.state;
    const { navigation } = this.props;

    if(formValid) {
      const { signup } = this.props;

      signup(user);
      navigation.navigate('LoginScreen');
    }
  }

  render() {
    const { user, formErrors, formValid } = this.state;
    const { navigation } = this.props;

    return(
      <ImageBackground style={styles.background} source={backgroundImage}>
        <View style={styles.container} >
        <Text style={styles.logo}>WEATHER APP</Text>
          <SignupForm {...
            {
              ...user, 
              onChangeField: this.onChangeField,
              onSubmit: this.onSubmit, 
              navigation, 
              errors: formErrors,
              formValid: formValid
            }
          }/>
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
    paddingVertical: 30,
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

SignupScreen.propTypes = {
  signup: PropTypes.func
};

export default SignupScreen;
