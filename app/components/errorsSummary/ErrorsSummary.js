// @vendors
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// @styles
import styles from './styles';

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

export default ErrorsSummary;
