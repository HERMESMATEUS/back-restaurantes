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
                source={ImagesApp.ImageTest}
              />
            </View>
          </View>

          <View style={{ flex: 3, justifyContent: 'center' }}>
            <Text style={Styles.Text3}>Loren Sturt</Text>
            <Text style={Styles.Text4}>Lorem ipsum dol</Text>
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
        {this.userBlocked()}
        {this.userBlocked()}
      </View>

    );
  }
}