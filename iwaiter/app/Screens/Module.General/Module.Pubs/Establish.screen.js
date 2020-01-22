import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, Platform } from 'react-native';
import EstablishComponent from '../../../Components/Module.General/Module.Pubs/Establish.component';
import { ImagesApp } from '../../../Assets/ImagesApp';

class EstablishScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <View style={{ flex: 1, marginHorizontal: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => (navigation.goBack(null))}
                    >
                        <Image style={{ resizeMode: 'contain', width: 25, height: 25 }} source={ImagesApp.ImageBack} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 21, color: 'white' }}>Armando Records</Text>
                    </View>
                </View>
            ),
            // headerRight: (
            //         <ButtonRight
            //             onPress={state.params.publicOffer}
            //         >
            //             <Text style={{ color: colors.PRIMARY, fontWeight: 'bold' }}>{Language.Publish}</Text>
            //         </ButtonRight>
            //         : null
            // ),
            headerStyle: {
                // height: Platform.OS === 'ios' ? 40 : 48,
                // marginTop: Platform.OS === 'ios' ? -10 : 0,
                backgroundColor: 'black'
            },
        };
    };


    render() {
        return (
            <View style={{ flex: 1 }}>
                <EstablishComponent
                    FilterSong={() => this.props.navigation.navigate('FilterSong')}
                />

            </View>
        );
    }

}

export default EstablishScreen;