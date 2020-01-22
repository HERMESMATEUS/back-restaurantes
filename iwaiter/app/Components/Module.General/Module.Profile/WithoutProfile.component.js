import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text } from "react-native";
import { Styles } from "./Styles";
import { ImagesApp } from "../../../Assets/ImagesApp";
import { Colors } from '../../../Constants/Constants';
import BackgroundLinesModule from '../../../Components/Globals/BackgroundLines.component';

export default class WithoutProfileComponent extends Component {

    render() {

        const {
            callBackLogin
        } = this.props;

        return (
            <View style={Styles.View1}>
                <BackgroundLinesModule >
                    <View style={Styles.View2}>
                        <Image style={{
                            resizeMode: 'contain',
                            width: 50,
                            height: 70,
                        }} source={ImagesApp.ProfileWithoutBackground} />
                    </View>

                    <View style={Styles.View2}>
                        <Text style={Styles.Text2}>Con el inicio de sesion rapido puede ver el contenido del menu del restaurante</Text>
                    </View>

                    <View style={Styles.View2}>
                        <Text style={Styles.Text6}>- Puede visualizar el menu general.</Text>
                    </View>

                    <View style={Styles.View2}>
                        <Text style={Styles.Text6}>- Podra seleccionar platas para ver su contenido ycomo puede modificarlo segun su gusto. </Text>
                    </View>

                    <View style={Styles.View2}>
                        <Text style={Styles.Text6}>- No realizar un pedido hasta no haber iniciado sesion. </Text>
                    </View>

                    <View style={Styles.View2}>
                        <TouchableOpacity
                            onPress={callBackLogin}
                            style={{
                                height: 50,
                                width: '100%',
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth:1,
                                borderColor:'white'
                            }}
                        ><Text style={Styles.Text4}>Iniciar sesion</Text>
                        </TouchableOpacity>
                    </View>
                </BackgroundLinesModule>
            </View >
        );
    }

}
