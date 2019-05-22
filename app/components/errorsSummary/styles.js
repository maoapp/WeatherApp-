import { StyleSheet } from 'react-native';

// @THEME
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15
  },
  errorMessage: {
    fontSize: 16,
    color: theme.alert_red,
    fontWeight: 'bold'
  }
});

export default styles;
