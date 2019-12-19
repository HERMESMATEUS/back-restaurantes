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
          onPress={JoinEstablish}
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
              <Text style={Styles.Text3}>Armando records</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={Styles.Text4}>Calle 89</Text>
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={Styles.Text4}>22 mts</Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={Styles.Text3}>244 </Text>
                </View>
                <View>
                  <Image
                    source={ImagesApp.DancerWhite}
                    style={{ resizeMode: 'contain', height: 20, width: 15 }} />
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
            <Text style={Styles.Text1}>Selecciona donde empezar tu rumba con iDj</Text>
            <Text style={Styles.Text2}>Establecimientos y personas por lugar</Text>
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