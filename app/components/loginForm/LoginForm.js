// @vendors
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// @styles
import styles from './styles';

const LoginForm = ({email, errorLogin, password, onChangeField, navigation, onSubmit}) => (
  <View style={styles.container}>
    <Text style={styles.title}>LOGIN</Text>
    <View style={styles.formGroup}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => onChangeField(text, 'email')}
        underlineColorAndroid="transparent"
        selectionColor="white"
      />
    </View>
    <View style={styles.formGroup}>
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => onChangeField(text, 'password')}
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        selectionColor="white"
      />
    </View>
    {errorLogin ? <Text style={styles.error}>usuario y contraseña no validos</Text> : null}
    <TouchableOpacity 
      style={[styles.button, !email || !password ? styles.disabledButton : styles.activeButton]} 
      onPress={() => onSubmit()}
      disabled={!email || !password}
    >
      <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>  
    <TouchableOpacity 
      style={[styles.button, styles.activeButton]} 
      onPress={() => navigation.navigate('SignupScreen')}
    >
      <Text style={styles.buttonText}>SIGNUP</Text>
    </TouchableOpacity>
  </View>
);

LoginForm.propTypes = {
  email: PropTypes.string,
  errorLogin: PropTypes.bool, 
  password: PropTypes.string, 
  onChangeField: PropTypes.func,
  onSubmit: PropTypes.func
};

export default LoginForm; 
