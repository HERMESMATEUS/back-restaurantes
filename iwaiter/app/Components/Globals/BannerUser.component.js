import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Colors } from "../../Constants/Constants";
import { ImagesApp } from "../../Assets/ImagesApp";
import { Styles } from "./Styles";
import Menu, { MenuItem } from 'react-native-material-menu';



export default class BannerUserComponent extends Component {

  userBlocked() {

    const { CallBackNavigateChatUser, ModalDelete } = this.props;

    let _menu = null;

    let setMenuRef = ref => {
      _menu = ref;
    };

    let hideMenu = () => {
      _menu.hide();
    }

    let showMenu = () => {
      _menu.show();
    };


    return (

      <View style={{ flexDirection: 'row', width: '100%', height: 60, marginVertical: 10, paddingHorizontal: 20 }}>

        {/* <View style={{ backgroundColor: Colors.BACKGROUND_BLACK, opacity: 0.8, position: 'absolute', zIndex: 23, flexDirection: 'row', width: '100%', height: 60, marginVertical: 10, paddingHorizontal: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'white' }}>Eliminar</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'white' }}>Bloquear</Text>
          </View>
        </View> */}

        <TouchableOpacity onPress={() => {
          // CallBackNavigateChatUser()
        }} style={{ flexDirection: 'row', width: '100%', height: 60, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }} >
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 2, borderColor: Colors.RED, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ height: 54, width: 54, borderRadius: 27 }}
                source={{ uri: 'data:image/jpeg;base64,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' }}
              />
            </View>
          </View>

          <View style={{ flex: 3, justifyContent: 'center' }}>
            <Text style={Styles.Text3}>Bandeja Paisa</Text>
            <Text style={Styles.Text4}>$ 24.000</Text>
          </View>

          {
            this.props.Modal ?
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Menu
                  style={{
                    width: '80%', height: (ModalDelete ? 80 : 40),
                    backgroundColor: Colors.BLACK_MATE,
                    opacity: 0.8, flexDirection: 'row'
                  }}
                  ref={setMenuRef}
                  button={
                    <TouchableOpacity onPress={showMenu} >
                      <Image
                        style={{ height: 20, width: 20, borderRadius: 27 }}
                        source={ImagesApp.Menu}
                      />
                    </TouchableOpacity>
                  }>
                  {
                    ModalDelete ?
                      <MenuItem
                        style={{
                          width: '100%', height: 40,
                          backgroundColor: Colors.BLACK_MATE,
                          opacity: 0.8
                        }}
                        textStyle={{
                          color: Colors.WHITE
                        }}
                        onPress={() => {
                          hideMenu();
                        }
                        }>Eliminar</MenuItem>
                      : null
                  }
                </Menu>
              </View>
              :
              null
          }
        </TouchableOpacity>

      </View >
    )
  }

  render() {

    return (

      <View style={{ flex: 1 }}>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 20 }}>
          <Text style={Styles.Text1}>Lista de su pedido</Text>
          <Text style={Styles.Text2}>Lista de platos agregados a su pedido</Text>
        </View>

        <View style={{ flex: 1 }}>
          {this.userBlocked()}
          {this.userBlocked()}
        </View>
      </View>

    );
  }
}