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
    zIndex: 10,
    backgroundColor: theme.harder_gray
  },
  title: {
    color: theme.blue_primary, 
    fontWeight: 'bold', 
    fontSize: 16
  }
});

export default styles;
