import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/weather';

import LoginScreen from '../screens/LoginScreen';

const mapStateToProps = ({ weatherReducer }) => {
	return {
    isLogged: weatherReducer.user.isLogged,
    user: weatherReducer.user,
    errorLogin: weatherReducer.errorLogin
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen);
