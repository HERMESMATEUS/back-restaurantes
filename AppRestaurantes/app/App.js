import React, { Component } from 'react';
import Main from './Main';
import { SafeAreaView } from "react-navigation";
import { Provider } from "react-redux";
import store from "./Connect/redux";
import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <Main />
        </Provider>
      </SafeAreaView>
    );
  }
}
AppRegistry.registerComponent(appName, () => App);