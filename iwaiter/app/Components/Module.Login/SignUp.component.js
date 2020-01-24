import React, { Component } from 'react';
import BackgroundLoginComponent from '../Globals/BackgroundLogin.component';
import { TouchableOpacity, Image, View, Text, ScrollView, TextInput } from "react-native";
import { ImagesApp } from "../../Assets/ImagesApp";
import { Styles } from "./Styles";

export default class SignUpModule extends Component {
  render() {
    const { onPressCancel, onPressSignUp } = this.props;
    return (
      <BackgroundLoginComponent>

        <View style={Styles.View1}>

          <View style={Styles.View2}>
            <Image style={Styles.Image1} source={ImagesApp.Logo} />
          </View>

          <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center' }}>

            <ScrollView>

              <View style={{ margin: 10 }}>
                <View style={Styles.View4} >
                  <TextInput
                    keyboardType='numeric'
                    placeholder={'Numero de Celular o Numero de CC'}
                    style={Styles.TextInput1}
                  />
                </View>
              </View>

              <View style={{ margin: 10 }}>
                <View style={Styles.View4} >
                  <TextInput
                    placeholder={'Nombre'}
                    style={Styles.TextInput1}
                  />
                </View>
              </View>


              <View style={{ margin: 10 }}>
                <TouchableOpacity
                  onPress={onPressCancel}
                  style={Styles.TouchableOpacity2}>
                  <Text style={Styles.Text1}>Cancelar</Text>
                </TouchableOpacity>
              </View>

              <View style={{ margin: 10 }}>
                <TouchableOpacity
                  onPress={onPressSignUp}
                  style={Styles.TouchableOpacity2}>
                  <Text style={Styles.Text1}>Registrar</Text>
                </TouchableOpacity>
              </View>

            </ScrollView>

          </View>

        </View>

      </BackgroundLoginComponent >
    );
  }
}