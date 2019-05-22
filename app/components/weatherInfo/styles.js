import { StyleSheet } from 'react-native';

// @THEME
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '80%'
  },
  timeText: {
    color: theme.sticker_grey,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  regularText: {
    color: theme.sticker_grey,
    fontSize: 14,
    fontWeight: 'bold'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingBottom: 8,
    borderBottomColor: theme.sticker_grey,
    borderBottomWidth: 0.5,
  },
  picture: {
    width: 100,
    height: 100,
    marginTop: 15,
  },
  conditionsType: {
    fontWeight: 'bold',
    color: theme.white,
    fontSize: 18
  }  
});

export default styles;
