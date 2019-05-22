import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/weather';

import HistorialScreen from '../screens/HistorialScreen';

const mapStateToProps = ({ weatherReducer }) => {
	return {
    historial: weatherReducer.historial
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HistorialScreen);
