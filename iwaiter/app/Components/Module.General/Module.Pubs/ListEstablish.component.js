import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, FlatList } from "react-native";
import { Styles } from "./Styles";
import { ImagesApp } from "../../../Assets/ImagesApp";
import { Colors } from '../../../Constants/Constants';

export default class ListEstablishComponent extends Component {

  mountEachEtablish() {
    const { JoinEstablish } = this.props;
    return (
      <View style={{ flexDirection: 'row', width: '100%', height: 60, marginVertical: 10, backgroundColor: Colors.FONT_GREY, borderRadius: 15 }}>

        <TouchableOpacity
          style={{ flexDirection: 'row', width: '100%', height: 60, marginVertical: 10 }}
        >
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 2, borderColor: Colors.RED, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ height: 54, width: 54, borderRadius: 27 }}
                source={{ uri: 'https://images.epto.it/imgbig/VX245614.jpg' }}
              />
            </View>
          </View>

          <View style={{ flex: 3, justifyContent: 'center' }}>

            <View style={{ flex: 1 }}>
              <Text style={Styles.Text3}>Bandeja paisa</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={Styles.Text4}>Mediana</Text>
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={Styles.Text4}>$$</Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={Styles.Text3}>24.000</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { children, } = this.props;
    return (
      <View style={Styles.View1}>
        <View style={{ padding: 10, flex: 1 }}>

          <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 20 }}>
            <Text style={Styles.Text1}>Selecciona tu plato</Text>
            <Text style={Styles.Text2}>Platos generales</Text>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {this.mountEachEtablish()}
            {this.mountEachEtablish()}
            {this.mountEachEtablish()}
            {this.mountEachEtablish()}
          </View>

        </View>
      </View>
    );
  }
}