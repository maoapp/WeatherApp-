import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/weather';

import SignupScreen from '../screens/SignupScreen';

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Actions, dispatch);
};

export default connect(
	null,
	mapDispatchToProps
)(SignupScreen);
