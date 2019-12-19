import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, TextInput, Switch, Alert } from "react-native";
import { Styles } from "./Styles";
import BannerUserComponent from '../../Globals/BannerUser.component';
import { ImagesApp } from "../../../Assets/ImagesApp";
import { Colors } from '../../../Constants/Constants';

export default class UserBlockedComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {

    return (

      <View style={Styles.View1}>
        <BannerUserComponent
          CallBackNavigateChatUser={() => { }}
          Modal={true}
          ModalDelete={false}
        />
      </View >
    );
  }
}
