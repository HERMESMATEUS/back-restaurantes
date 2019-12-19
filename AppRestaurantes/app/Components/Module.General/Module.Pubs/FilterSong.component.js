import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, ScrollView, TextInput } from "react-native";
import { Styles } from "./Styles";
import { ImagesApp } from "../../../Assets/ImagesApp";
import { Colors } from '../../../Constants/Constants';

export default class FilterSongComponent extends Component {


    constructor(props) {
        super(props)

        this.state = {
            filterOnChange: '',
        }
    }


    mountEachSong() {
        const { JoinEstablish } = this.props;
        return (
            <View style={{ flexDirection: 'row', width: '100%', height: 80, marginVertical: 10 }}>

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

                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const {
            goBack
        }  = this.props;
        return (
            <View style={Styles.View1}>

                <View style={{ marginVertical: 20, alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 5, backgroundColor: Colors.BLACK_MATE, width: '90%', borderRadius: 20 }}>

                        <View styles={{ flex: 1, justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={{
                                    flex: 1, justifyContent: 'center'
                                }}
                                onPress={() => goBack()}>
                                <Image style={{ resizeMode: 'contain', width: 25, height: 25, marginRight: 20 }} source={ImagesApp.ImageBack} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 4 }}>
                            <TextInput
                                style={{
                                    width: '100%',
                                    height: 50,
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}
                                placeholderTextColor='white'
                                placeholder={'Pide tu cancion ...'}
                                onChange={(filter) => this.setState({ filter })}
                                value={this.state.filter}
                            />
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Image style={{ resizeMode: 'contain', width: 20, height: 20, marginHorizontal: 20 }} source={ImagesApp.Search} />
                        </View>

                    </View>

                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <ScrollView>
                        {this.mountEachSong()}
                        {this.mountEachSong()}
                    </ScrollView>
                </View>

            </View>

        );
    }


}