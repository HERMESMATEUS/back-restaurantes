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
                        <Text style={Styles.Text2}>Para ver y editar tu perfil debes ingresar usando Facebook</Text>
                    </View>

                    <View style={Styles.View2}>
                        <Text style={Styles.Text6}>- Tendrás la opción de sugerir canciones en el establecimiento donde te encuentres.</Text>
                    </View>

                    <View style={Styles.View2}>
                        <Text style={Styles.Text6}>- Podrás enviar y recibir mensajes de otros usuarios. </Text>
                    </View>

                    <View style={Styles.View2}>
                        <Text style={Styles.Text6}>- Podrás editar tu perfil incluyendo tu foto. </Text>
                    </View>

                    <View style={Styles.View2}>
                        <TouchableOpacity
                            onPress={callBackLogin}
                            style={{
                                backgroundColor: Colors.BlueFacebook,
                                height: 50,
                                width: '100%',
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        ><Text style={Styles.Text4}>Iniciar usando Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </BackgroundLinesModule>
            </View >
        );
    }

}
