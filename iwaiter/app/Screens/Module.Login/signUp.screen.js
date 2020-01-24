import React, { Component } from 'react';
import SignUpModule from '../../Components/Module.Login/SignUp.component';
import { login } from '../../Connect/redux/actions/auth';
import { connect } from 'react-redux';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Register: false
        }
    }


    render() {
        const { Register } = this.state;


        return (
            <SignUpModule
                onPressCancel={() => this.props.onPressLogin()}
                onPressSignUp={() => null}
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
})(SignUp);
