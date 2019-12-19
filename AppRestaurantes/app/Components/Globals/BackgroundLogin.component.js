import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { ImagesApp } from "../../Assets/ImagesApp";
export default class BackgroundLoginComponent extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>

                <ImageBackground style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                }} source={ImagesApp.backgroundImage} />
                <View style={{
                    flex: 1,
                    opacity: 0.3,
                    backgroundColor: '#4A0091',
                }} >
                    <View style={{
                        flex: 1,
                        opacity: 0.25,
                        backgroundColor: '#000000',
                    }} />
                </View>

                <View style={{
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>
                    {this.props.children}
                </View>

            </View>
        );
    }
}