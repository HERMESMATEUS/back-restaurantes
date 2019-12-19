import React, { Component } from 'react';
import LoginScreen from './Screens/Module.Login/login.screen';
import { connect } from 'react-redux';
import Navigator from './Screens/Module.General/Navigator';

class Main extends Component {
  render() {
    const { user } = this.props;
    if (!user) return <LoginScreen />;
    return <Navigator />
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(Main);