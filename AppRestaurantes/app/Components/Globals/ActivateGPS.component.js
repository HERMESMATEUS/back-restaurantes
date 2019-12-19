import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text } from "react-native";
import { Styles } from "./Styles";
import { ImagesApp } from "../../Assets/ImagesApp";
import { Colors } from '../../Constants/Constants';
import BackgroundLinesModule from './BackgroundLines.component';

export default class ActivateGPSComponent extends Component {

    render() {

        const {
            callBackActivateGps
        } = this.props;

        return (
            <View style={Styles.View1}>
                <BackgroundLinesModule >
                    <View style={Styles.View2}>
                        <Image style={{
                            resizeMode: 'contain',
                            width: 50,
                            height: 70,
                        }} source={ImagesApp.Marker} />
                    </View>

                    <View style={Styles.View2}>
                        <Text style={Styles.Text2}>Activa el GPS para encontrar la rumba más cercana</Text>
                    </View>

                    <View style={Styles.View2}>
                        <Text style={Styles.Text6}>Para disfrutar de las características de IDj por favor activa el GPS</Text>
                    </View>

                    <View style={Styles.View2}>
                        <TouchableOpacity
                            onPress={callBackActivateGps}
                            style={{
                                height: 50,
                                width: '100%',
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: Colors.WHITE
                            }}
                        ><Text style={Styles.Text4}>Activar GPS</Text>
                        </TouchableOpacity>
                    </View>
                </BackgroundLinesModule>
            </View >
        );
    }

}
