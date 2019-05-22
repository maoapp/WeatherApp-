import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherInfo = ({weather}) => {
  const { location, current } = weather;
  const { name, region, country, localtime } = location;
  const { temp_c, condition, humidity, wind_degree, cloud } = current;
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
      <View style={styles.description}>
        <Text style={styles.conditionsType}>{text}</Text>
        <Image 
          source={{uri: urlImage}} style={styles.picture}
        />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%'
  },
  timeText: {
    color: '#e9e9e8',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  regularText: {
    color: '#e9e9e8',
    fontSize: 14,
    fontWeight: 'bold'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  description: {
    marginTop: 30
  },
  picture: {
    width: 100,
    height: 100,
    marginTop: 15,
  },
  conditionsType: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18
  }
})
export default WeatherInfo;
