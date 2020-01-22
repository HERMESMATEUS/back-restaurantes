import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { ImagesApp } from "../../Assets/ImagesApp";


export default class BackgroundOpacitiesHorizontalComponent extends Component {

  render() {
    const { StylesProps } = this.props;

    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <ImageBackground style={{
          resizeMode: 'contain',
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
          imageStyle={{ ...StylesProps }}
          source={ImagesApp.Degrade} />

        <View style={{
          width: '100%', height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
          position: 'absolute',
        }}>
          {this.props.children}
        </View>
      </View>
    );
  }
}