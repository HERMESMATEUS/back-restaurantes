import React, { Component } from 'react';
import LoginModule from '../../Components/Module.Login/Login.component';
import { login } from '../../Connect/redux/actions/auth';
import { connect } from 'react-redux';

class LoginScreen extends Component {

    loginFacebook() {
        this.props.login({
            user: true,
            typeLogin: 'facebook',
            token: 'data.accessToken'
        });
    }

    loginType(type) {
        if (type == 1) this.loginFacebook();
        if (type == 2) this.props.login({
            user: true,
            typeLogin: 'temporal',
            token: false
        });
    }

    render() {
        return (
            <LoginModule
                onPressLoginFacebook={() => this.loginType(1)}
                onPressWithoutLogin={() => this.loginType(2)}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,

    };
}

export default connect(mapStateToProps, {
    login
})(LoginScreen);
