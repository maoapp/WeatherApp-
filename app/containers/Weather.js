import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/weather';

import WeatherScreen from '../screens/WeatherScreen';

const mapStateToProps = ({ weatherReducer }) => {
	return {
    weather: weatherReducer.weather
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WeatherScreen);
