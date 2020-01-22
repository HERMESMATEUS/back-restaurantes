import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import { Styles } from "./Styles";
import { ImagesApp } from "../../../Assets/ImagesApp";
import { Colors } from '../../../Constants/Constants';
import Swiper from 'react-native-swiper';
import BackgroundOpacitiesHorizontalComponent from '../../Globals/BackgroundOpacitiesHorizontal.component';

export default class EstablishComponent extends Component {

  mountEachSong() {
    const { JoinEstablish } = this.props;
    return (
      <View style={{ flexDirection: 'row', width: '100%', height: 80, marginVertical: 10, backgroundColor: Colors.FONT_GREY }}>

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
            <Text style={Styles.Text3}>Armando records</Text>
            <Text style={Styles.Text4}>Calle 89</Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flex: 1 }}>
              <Image
                source={ImagesApp.DisLike}
                style={{ resizeMode: 'contain', height: 25, width: 25 }} />
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={Styles.Text3}>244 </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  mountSongAlready() {
    const { JoinEstablish } = this.props;
    return (
      <View style={{ flexDirection: 'row', width: '100%', height: 80, marginVertical: 10, }}>
        <BackgroundOpacitiesHorizontalComponent StylesProps={{ borderRadius: 10 }} >
          <TouchableOpacity
            onPress={JoinEstablish}
            style={{ flexDirection: 'row', width: '100%', height: 60, marginVertical: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', borderRadius: 20 }}>
              <View style={{ height: 60, width: 60, borderRadius: 30, borderWidth: 2, borderColor: Colors.RED, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  style={{ height: 54, width: 54, borderRadius: 27 }}
                  source={{ uri: 'https://images.epto.it/imgbig/VX245614.jpg' }}
                />
              </View>
            </View>

            <View style={{ flex: 3, justifyContent: 'center' }}>
              <Text style={Styles.Text3}>Don`t speak</Text>
              <Text style={Styles.Text4}>Far east movement...</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              <View style={{ flex: 1 }}>
                <Image
                  source={ImagesApp.Like}
                  style={{ resizeMode: 'contain', height: 25, width: 25 }} />
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Text style={Styles.Text3}>244 </Text>
                  </View>
                </View>
              </View>
            </View>

          </TouchableOpacity>
        </BackgroundOpacitiesHorizontalComponent>
      </View>
    );
  }

  MountImageReproductor() {
    return (
      <View style={styles.slide1}>

        <View style={{ flex: 4 }}>
          <Image style={{ resizeMode: 'contain', flex: 1 }} source={ImagesApp.ImageTest} />
          {/* <View style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end' }}> */}
          {/* </View> */}
        </View>

        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}><Image style={{ resizeMode: 'contain', width: 25, height: 20, marginHorizontal: 20 }} source={ImagesApp.Logo} /> Move your boddy</Text>
          <Text style={{ color: 'white' }}>SIA</Text>
        </View>
      </View>
    )
  }

  render() {

    const {
      FilterSong,
    } = this.props;

    return (

      <View style={Styles.View1}>

        <View style={{ flex: 1 }}>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={FilterSong}
              style={{ paddingHorizontal: 10, backgroundColor: Colors.BLACK_MATE, width: '80%', borderRadius: 20, flexDirection: 'row', height: 40 }} >
              <View style={{ flex: 4, justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Pide tu cancion ...</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image style={{ resizeMode: 'contain', width: 20, height: 20, marginHorizontal: 20 }} source={ImagesApp.Search} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 4, paddingHorizontal: 20 }}>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}><Text>Lista de reproduccion</Text></View>
            <Swiper
              loop={false}
              showsPagination={false}
              style={styles.wrapper}
              showsButtons={true}
              nextButton={<Text style={{ fontSize: 50, color: 'white', fontWeight: 'bold' }}>›</Text>}
              prevButton={<Text style={{ fontSize: 50, color: 'white', fontWeight: 'bold' }}>‹</Text>}
              buttonWrapperStyle={{ backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
              {this.MountImageReproductor()}
              {this.MountImageReproductor()}
            </Swiper>
          </View>
        </View>

        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 18, color: Colors.RED, opacity: 0.7, textAlign: 'center' }}>Dale like a las canciones para que suenen primero</Text>
          <ScrollView indicatorStyle={('white', 'white', 'black')} >
            {this.mountSongAlready()}
            {this.mountEachSong()}
            {this.mountEachSong()}
          </ScrollView>
        </View>

      </View>

    );
  }


}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})