// @vendors
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

// @styles
import styles from './styles';

// @components
import ErrorsSummary from '../errorsSummary/ErrorsSummary';

const SignupForm = (
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
   <ScrollView style={styles.container}>
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
   </ScrollView> 
  
);

SignupForm.propTypes = {
  confirmPassword: PropTypes.string, 
  email: PropTypes.string,
  errors: PropTypes.object,
  errorLogin: PropTypes.bool,
  firstName: PropTypes.string,
  formValid: PropTypes.bool,  
  password: PropTypes.string,
  lastName: PropTypes.string,
  onChangeField: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SignupForm; 
        