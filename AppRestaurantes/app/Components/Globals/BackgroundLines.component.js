import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { ImagesApp } from "../../Assets/ImagesApp";


export default class BackgroundLinesModule extends Component {

    render() {
        const { StylesProps } = this.props;

        return (
            <View style={{ flex: 1, flexDirection: 'row', ...StylesProps }}>
                <ImageBackground style={{
                    resizeMode: 'contain',
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    ...StylesProps

                }} source={ImagesApp.BackgroundLines} />

                <View style={{
                    width: '100%', height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2,
                    position: 'absolute',
                    ...StylesProps
                }}>
                    {this.props.children}
                </View>


            </View>
        );
    }
}