import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ImageBackground, 
  TextInput, 
  StyleSheet 
} from 'react-native';
import PropTypes from 'prop-types';

//@components
import WeatherInfo from '../components/weatherInfo/WeatherInfo';
import BottomBar from '../components/bottomBar/BottomBar';

// @styles
import theme from '../styles/theme';

// @assets
const backgroundImage = require('../assets/jpg/home.jpg');

class weatherScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      city: ''
    }
  
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onSearchWeather = this.onSearchWeather.bind(this);
  }

  onChangeCity(city) {
    this.setState({city})
  }

  onSearchWeather() {
    const { city } = this.state;
    const { fetchWeatherByCity } = this.props;

    fetchWeatherByCity(city);
    this.setState({city: ''})
  }

  render() {
    const { city } = this.state;
    const { weather, navigation } = this.props;
    let content = null;

    if(weather.data) {
      content = <WeatherInfo weather={weather.data}/>
    }

    if(weather.failure) {
      content = <Text style={styles.errorMessage}>The city has no been found</Text>;
    }

    return (
      <ImageBackground style={styles.background} source={backgroundImage}>
        <View style={styles.container} >
          <Text style={styles.title}>Search by city</Text>
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={(text) => this.onChangeCity(text)}
            underlineColorAndroid="transparent"
            selectionColor="white"
          />
           <TouchableOpacity 
              style={[styles.button, city ? styles.activeButton : styles.disabledButton]} 
              onPress={() => this.onSearchWeather(city)}
              disabled={!city}
            >
              <Text style={styles.buttonText}>SEARCH</Text>
            </TouchableOpacity>
            {content}
        </View>
        <BottomBar title="SEARCH HISTORY" navigation={navigation} screen="HistorialScreen"/>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    flex: 1,
    backgroundColor: theme.blue_opacity,
  },
  background: {
    width: '100%', 
    height: '100%',
  },
  title: {
    fontSize: 20,
    color: theme.white
  },
  input: {
    color: theme.white,
    width: '80%',
    borderBottomColor: theme.white,
    borderBottomWidth: 1,
    textAlign: 'center',
    paddingBottom: 8,
    marginVertical: 20,
    fontSize: 16
  },
  button: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 15,
    width: '80%'
  },
  buttonText:{
    color: theme.white,
    fontSize: 16,
    fontWeight: 'bold'
  },
  disabledButton: {
    backgroundColor: theme.harder_gray
  },
  activeButton: {
    backgroundColor: theme.blue_primary
  },
  errorMessage: {
    color: theme.alert_red,
    fontWeight: 'bold',
    fontSize: 20
  }
});

weatherScreen.propTypes = {
  weather: PropTypes.object
};

export default weatherScreen; 
