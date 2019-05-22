// @vendors
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ErrorsSummary = ({errors}) => (
  <View style={styles.container}>
    {Object.keys(errors).map((fieldName, index) => (errors[fieldName].length
      ? <Text style={styles.errorMessage} key={index}>
          {fieldName} {errors[fieldName]}
        </Text> : null))
    }
  </View>
);

ErrorsSummary.propTypes = {
	errors: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15
  },
  errorMessage: {
    fontSize: 16,
    color: 'tomato',
    fontWeight: 'bold'
  }
})

export default ErrorsSummary;
