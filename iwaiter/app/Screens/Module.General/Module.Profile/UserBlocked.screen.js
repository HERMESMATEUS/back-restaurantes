import React from 'react';
import UserBlockedComponent from '../../../Components/Module.General/Module.Profile/UserBlocked.component';
import { connect } from 'react-redux';


class UserBlockedScreen extends React.Component {

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


    render() {
        return < UserBlockedComponent />
    }

}


const mapStateToProps = (state) => {
    return {
        typeLogin: state.auth.typeLogin
    };
}

export default connect(mapStateToProps, {

})(UserBlockedScreen);