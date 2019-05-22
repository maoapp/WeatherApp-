import { StyleSheet } from 'react-native';

// @THEME
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  containerCard: {
    padding: 15, 
    borderBottomColor: 'white', 
    borderBottomWidth: 1, 
    paddingVertical: 15, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  regularText: {
    color: '#e9e9e8',
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
});

export default styles;




