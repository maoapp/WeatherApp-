import { StyleSheet } from 'react-native';

// @THEME
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 6,
    width: '100%'
  },
  title: {
    fontSize: 18, 
    color: theme.sticker_grey,
    textAlign: 'center',
    marginBottom: 20
  },
  formGroup: {
    marginBottom: 15
  },
  label: {
    color: theme.white,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: theme.white,
    borderWidth: 1,
    borderRadius: 4,
    color: theme.white,
    fontSize: 16,
    width: '100%',
    height: 40,
    padding: 8
  },
  button: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 15
  },
  disabledButton: {
    backgroundColor: theme.harder_gray
  },
  activateButton: {
    backgroundColor: theme.blue_primary
  },
  buttonText:{
    color: theme.white,
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default styles;
