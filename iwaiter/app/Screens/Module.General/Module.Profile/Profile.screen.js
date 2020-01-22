import React from 'react';
import ProfileComponent from '../../../Components/Module.General/Module.Profile/Profile.component';
import WithoutProfileComponent from '../../../Components/Module.General/Module.Profile/WithoutProfile.component';
import { connect } from 'react-redux';
import { logout, login } from '../../../Connect/redux/actions/auth';


class ProfileScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    logout() {
        this.props.logout();
    }

    login() {
        this.props.login({
            user: true,
            typeLogin: 'Login',
            token: 'accessToken'
        });
    }

    render() {
        const { typeLogin } = this.props;
        if (typeLogin == 'Login')
            return <ProfileComponent
                callBackLogout={() => this.logout()}
                callUserBlocked={() => this.props.navigation.navigate('UserBlocked')}
            />;
        else
            return <WithoutProfileComponent
                callBackLogin={() => this.login()}
            />;
    }

}


const mapStateToProps = (state) => {
    return {
        typeLogin: state.auth.typeLogin
    };
}

export default connect(mapStateToProps, {
    logout,
    login
})(ProfileScreen);