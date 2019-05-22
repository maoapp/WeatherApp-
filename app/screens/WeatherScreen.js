import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ImageBackground, 
  TextInput, 
  StyleSheet 
} from 'react-native';

//@components
import WeatherInfo from '../components/weatherInfo/WeatherInfo';

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
  }

  render() {
    const { city } = this.state;
    const { weather } = this.props;

    let content = null;
    console.log(weather, 'propeidades');

    if(weather.data) {
      content = <WeatherInfo weather={weather.data}/>
    }

    if(weather.failure) {
      content = <Text>The city has no been found</Text>;
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
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "rgba(42, 40, 68, 0.9)",
  },
  background: {
    width: '100%', 
    height: '100%',
  },
  title: {
    fontSize: 20,
    color: 'white'
  },
  input: {
    color: 'white',
    width: '80%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    textAlign: 'center',
    paddingBottom: 8,
    marginVertical: 30,
    fontSize: 16
  },
  button: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 60,
    width: '80%'
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  disabledButton: {
    backgroundColor: 'lightgray'
  },
  activeButton: {
    backgroundColor: '#304052'
  }
});

export default weatherScreen; 
