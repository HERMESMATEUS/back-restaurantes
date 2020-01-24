import React, { Component } from 'react';
import BackgroundLoginComponent from '../Globals/BackgroundLogin.component';
import { TouchableOpacity, Image, View, Text } from "react-native";
import { ImagesApp } from "../../Assets/ImagesApp";
import { Styles } from "./Styles";

export default class LoginModule extends Component {
  render() {
    const { onPressLogin, onPressWithoutLogin, onPressSignUp } = this.props;
    return (
      <BackgroundLoginComponent>
        <View style={Styles.View1}>
          <View style={Styles.View2}>
            <Image style={Styles.Image1} source={ImagesApp.Logo} />
          </View>
          <View style={Styles.View3}>
            <View style={{ margin: 10 }}>
              <TouchableOpacity
                onPress={onPressLogin}
                style={Styles.TouchableOpacity2}>
                <Text style={Styles.Text1}>Iniciar sesion</Text>
              </TouchableOpacity>
            </View>
            <View style={{ margin: 10 }}>
              <TouchableOpacity
                onPress={onPressWithoutLogin}
                style={Styles.TouchableOpacity2}>
                <Text style={Styles.Text1}>Continuar sin registro</Text>
              </TouchableOpacity>
            </View>

            <View style={{ margin: 10 }}>
              <TouchableOpacity
                onPress={onPressSignUp}
                style={Styles.TouchableOpacity2}>
                <Text style={Styles.Text1}>Registrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BackgroundLoginComponent >
    );
  }
}