import React from 'react';
import { Image, FlatList, View, Text } from 'react-native'

import PropTypes from 'prop-types';

// @styles
import styles from './styles';

const renderCard = (weather) => {
  const { location, current } = weather;
  const { name, localtime } = location;
  const { condition, temp_c } = current;
  const { icon } = condition;
  const urlImage = `https:${icon}`;
  
  return(
    <View style={styles.containerCard}>
      <Text style={styles.regularText}>{localtime}</Text>
      <Text style={styles.regularText}>{name}</Text>
      <Text style={styles.regularText}>{temp_c} °C</Text>
      <Image source={{uri: urlImage}} style={styles.IconWeather}></Image>
    </View>
  )
}

const HistorialList = ({historial}) => (
  <React.Fragment>
    {historial.length ? <FlatList 
      data={historial}
      renderItem={({item}) => renderCard(item)}
      keyExtractor={(item, index) => `${item.name}${index}`}
    /> : <Text style={styles.emptyInfo}>There are no historial in this moment</Text>}
  </React.Fragment>
);

HistorialList.propTypes = {
	historial: PropTypes.array
};

export default HistorialList;
