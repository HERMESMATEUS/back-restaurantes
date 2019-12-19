import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import BackgroundLinesModule from '../../../Components/Globals/BackgroundLines.component';
import BackgroundOpacitiesHorizontalComponent from '../../../Components/Globals/BackgroundOpacitiesHorizontal.component';
import { Styles } from './Styles';
import { ImagesApp } from '../../../Assets/ImagesApp';

export default class HeaderChatMdoule extends Component {
  render() {
    return (
      <View style={Styles.View4}>
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
      </View>
    )
  }
}