import React, { Component } from 'react';
import LoginModule from '../../Components/Module.Login/Login.component';
import { login } from '../../Connect/redux/actions/auth';
import { connect } from 'react-redux';
import SignUp from './signUp.screen';

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Register: false
        }
    }

    Login() {
        this.props.login({
            user: true,
            typeLogin: 'Login',
            token: "accessToken"
        });
    }

    loginType(type) {
        if (type == 1) this.Login();
        if (type == 2) this.props.login({
            user: true,
            typeLogin: 'temporal',
            token: false
        });
    }

    render() {
        const { Register } = this.state;

        if (Register) return (
            <SignUp
                onPressLogin={() => this.setState({ Register: false })}
            />
        );

        return (
            <LoginModule
                onPressLogin={() => this.loginType(1)}
                onPressWithoutLogin={() => this.loginType(2)}
                onPressSignUp={() => this.setState({ Register: true })}
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
