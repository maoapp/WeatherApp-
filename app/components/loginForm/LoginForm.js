// @vendors
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 6,
    width: '100%'
  },
  error: {
    color: 'tomato',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  title: {
    fontSize: 18, 
    color: '#e4e9e9',
    textAlign: 'center',
    marginBottom: 20
  },
  formGroup: {
    marginBottom: 15
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    color: 'white',
    fontSize: 16,
    width: '100%',
    height: 40,
    padding: 8
  },
  button: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 15
  },
  disabledButton: {
    backgroundColor: 'lightgray'
  },
  activeButton: {
    backgroundColor: '#304052'
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default LoginForm; 
