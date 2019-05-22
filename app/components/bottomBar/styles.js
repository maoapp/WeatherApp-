import { StyleSheet } from 'react-native';

// @THEME
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    position: 'absolute', 
    bottom: 0, 
    paddingVertical: 20, 
    borderTopColor: theme.white, 
    borderTopWidth: 1, 
    justifyContent: 'center', 
    width: '100%', 
    alignItems: 'center',
    zIndex: 10
  },
  title: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16
  }
});

export default styles;
