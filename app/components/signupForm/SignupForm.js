// @vendors
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// @components
import ErrorsSummary from '../errorsSummary/ErrorsSummary';

const LoginForm = (
  {
    confirmPassword,
    email, 
    errors,
    firstName, 
    formValid,
    lastName, 
    password, 
    onChangeField,
    onSubmit,
    navigation
  }) => (
  <View style={styles.container}>
    <Text style={styles.title}>SIGN UP</Text>
    <View style={styles.formGroup}>
      <Text style={styles.label}>*First Name:</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={(text) => onChangeField(text, 'firstName')}
        underlineColorAndroid="transparent"
        selectionColor="white"
      />
    </View>
    <View style={styles.formGroup}>
      <Text style={styles.label}>*Last Name:</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={(text) => onChangeField(text, 'lastName')}
        underlineColorAndroid="transparent"
        selectionColor="white"
      />
    </View>
    <View style={styles.formGroup}>
      <Text style={styles.label}>*Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => onChangeField(text, 'email')}
        underlineColorAndroid="transparent"
        selectionColor="white"
      />
    </View>
    <View style={styles.formGroup}>
      <Text style={styles.label}>*Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => onChangeField(text, 'password')}
        underlineColorAndroid="transparent"
        selectionColor="white"
        secureTextEntry={true}
      />
    </View>
    <View style={styles.formGroup}>
      <Text style={styles.label}>*Confirm Password:</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={(text) => onChangeField(text, 'confirmPassword')}
        underlineColorAndroid="transparent"
        selectionColor="white"
        secureTextEntry={true}
      />
    </View>
    <ErrorsSummary {...{errors}}/>
    <TouchableOpacity 
      style={[styles.button, formValid ? styles.activateButton : styles.disabledButton]} 
      onPress={() => onSubmit()}
      disabled={!formValid}
    >
      <Text style={styles.buttonText}>SIGNUP</Text>
    </TouchableOpacity>  
    <TouchableOpacity 
      style={[styles.button, styles.activateButton]} 
      onPress={() => navigation.navigate('LoginScreen')}
    >
      <Text style={styles.buttonText}>CANCEL</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 6,
    width: '100%'
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
  activateButton: {
    backgroundColor: '#304052'
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default LoginForm; 

        