import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

// @styles
import styles from './styles';

const WeatherInfo = ({weather}) => {
  const { location, current } = weather;
  const { name, region, country, localtime } = location;
  const { 
    cloud,
    condition,
    gust_kph,
    humidity,
    precip_mm , 
    temp_c,  
    uv,
    wind_degree,
    vis_km
  } = current;
  const { text, icon } = condition;
  const urlImage = `https:${icon}`;

  console.log(urlImage, 'image')
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <View>
          <Text style={styles.regularText}>{localtime}</Text>
          <Text style={styles.regularText}>{name}</Text>
        </View>
        <View>
          <Text style={styles.regularText}>{region}</Text>
          <Text style={styles.regularText}>{country}</Text>
        </View>
      </View>
      <View style={styles.flexRow}>
        <View style={styles.conditions}>
          <Text style={styles.conditionsType}>Tem</Text>
          <Text style={styles.regularText}>{temp_c} °C</Text>
        </View>
        <View style={styles.conditions}>
          <Text style={styles.conditionsType}>Hum</Text>
          <Text style={styles.regularText}>{humidity} %</Text>
        </View>
        <View style={styles.conditions}>
          <Text style={styles.conditionsType}>Win</Text>
          <Text style={styles.regularText}>{wind_degree} °C</Text>
        </View>
        <View style={styles.conditions}>
          <Text style={styles.conditionsType}>Cloud</Text>
          <Text style={styles.regularText}>{cloud} %</Text>
        </View>
      </View>
      <View style={styles.flexRow}>
        <View style={styles.conditions}>
          <Text style={styles.conditionsType}>Precip</Text>
          <Text style={styles.regularText}>{precip_mm} mm</Text>
        </View>
        <View style={styles.conditions}>
          <Text style={styles.conditionsType}>Vis</Text>
          <Text style={styles.regularText}>{vis_km} Km</Text>
        </View>
        <View style={styles.conditions}>
          <Text style={styles.conditionsType}>uv</Text>
          <Text style={styles.regularText}>{uv}</Text>
        </View>
        <View style={styles.conditions}>
          <Text style={styles.conditionsType}>Gust</Text>
          <Text style={styles.regularText}>{gust_kph} Kph</Text>
        </View>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.conditionsType}>{text}</Text>
        <Image 
          source={{uri: urlImage}} style={styles.picture}
        />
        </View>
    </View>
  )
}

WeatherInfo.propTypes = {
  weather: PropTypes.object
};

export default WeatherInfo;
