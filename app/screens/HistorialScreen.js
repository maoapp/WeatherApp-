import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// @components
import BottomBar from '../components/bottomBar/BottomBar';
import HistorialList from '../components/historialList/HistorialList';

// @styles
import theme from '../styles/theme';

// @assets
const backgroundImage = require('../assets/jpg/historial.jpg');

const HistorialScreen = ({historial, navigation}) => (
  <ImageBackground style={styles.background} source={backgroundImage}>
    <View style={styles.container}>
      <HistorialList {...{historial}} />
    </View>
    <BottomBar title="SEARCH WEATHER BY CITY" navigation={navigation} screen="WeatherScreen"/>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: theme.blue_opacity,
    paddingTop: 10,
  },
  background: {
    width: '100%', 
    height: '100%',
  },
  regularText: {
    color: theme.sticker_grey,
    fontSize: 14,
    fontWeight: 'bold'
  },
  IconWeather: {
    width: 30,
    height: 30
  },
  emptyInfo: {
    color: theme.alert_red,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center'
  }
})

HistorialScreen.propTypes = {
  historial: PropTypes.array
};

export default HistorialScreen;
