// @vendors
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

// @styles
import styles from './styles';

const BottomBar = ({ title, navigation, screen }) => (
  <TouchableOpacity 
    style={styles.container} onPress={() => navigation.navigate(screen)}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
)

BottomBar.propTypes = {
  title: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired
};

export default BottomBar;
