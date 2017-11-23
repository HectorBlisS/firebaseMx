import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {LoginPageDisplay} from './LoginPageDisplay';

class LoginPage extends Component {

    state = {};

    render() {
        return (
            <div>
                <LoginPageDisplay/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);