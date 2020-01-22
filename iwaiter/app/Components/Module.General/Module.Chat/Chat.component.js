import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, TextInput, Switch, Alert, FlatList } from "react-native";
import { Styles } from "./Styles";
import BannerUserComponent from '../../Globals/BannerUser.component';
import { ImagesApp } from "../../../Assets/ImagesApp";
import { Colors } from '../../../Constants/Constants';
import BackgroundLinesModule from '../../Globals/BackgroundLines.component';
import BackgroundOpacitiesHorizontalComponent from '../../Globals/BackgroundOpacitiesHorizontal.component';


export default class ChatComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          id: 2,
          text: "que tal todo? ",
          createdAt: new Date(),
        },
        {
          id: 2,
          text: "Hola! ",
          createdAt: new Date(),
        },
      ],
      message: '',
    }
  }

  Messages({ item }) {
    console.log('item: ', item);
    const id = 1;
    let StyleS = {
      marginVertical: 5,
      borderRadius: 10,
      borderWidth: 1,
      padding: 5,
    }

    if (parseInt(item.id) == id) {
      return (
        <View style={{ width: '100%', alignItems: 'flex-end', marginVertical: 10 }}>
          <View style={{ width: '80%', alignItems: 'flex-end' }}>
            <View style={{ ...StyleS, alignItems: 'flex-end', borderColor: Colors.RED }}>
              < View >
                <Text style={{ color: 'white' }}>{item.text}</Text>
              </View>
            </View >
          </View >
        </View>
      );
    } else {
      return (
        <View style={{ width: '100%', margin: 10 }}>
          <View style={{ width: '80%' }}>
            <View style={{ ...StyleS, borderColor: Colors.LILA }}>
              < View >
                <Text style={{ color: 'white' }}>{item.text}</Text>
              </View>
            </View >
          </View >
        </View>
      );
    }

  }

  SendMessage() {
    const { messages, message } = this.state;
    if (message && message != '') {
      this.setState({
        messages: [
          {
            id: 1,
            text: message,
            createdAt: new Date(),
          },
          ...messages,
        ],
        message: '',
      });
    }
  }


  render() {

    const { messages } = this.state;

    return (
      <BackgroundLinesModule>

        <View style={Styles.View3}>
          <BackgroundOpacitiesHorizontalComponent>
            <View style={[Styles.View4, { flexDirection: 'row', paddingHorizontal: 20 }]}>
              <TouchableOpacity
                onPress={this.props.callBackOnpressBack}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 10, height: 30, resizeMode: 'contain' }}
                  source={ImagesApp.ImageBack}
                />
              </TouchableOpacity>

              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 56, height: 56, borderRadius: 18, resizeMode: 'contain' }}
                  source={ImagesApp.ImageTest} />
              </View>

              <View style={{ flex: 4, marginHorizontal: 10 }}>
                <Text style={Styles.Text3}>Andrea Chacon</Text>
              </View>
            </View>
          </BackgroundOpacitiesHorizontalComponent>
        </View>


        <View style={Styles.View6}>

          <FlatList
            inverted={true}
            keyExtractor={(item, index) => index}
            data={messages}
            renderItem={this.Messages.bind(this)}
          />

          <View style={Styles.View5}>
            <View style={{ flex: 1 }} >
              <TextInput
                placeholder={'Escribe tu mensaje'}
                style={Styles.TextInput1}
                onChangeText={(message) => this.setState({ message })}
                value={this.state.message}
              />
            </View>
            <TouchableOpacity onPress={() => this.SendMessage()}>
              <Image source={ImagesApp.SendMessage} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
            </TouchableOpacity>
          </View>

        </View>

      </BackgroundLinesModule>
    );
  }
}