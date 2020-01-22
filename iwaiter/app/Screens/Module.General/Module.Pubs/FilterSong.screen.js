import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, Platform } from 'react-native';
import { ImagesApp } from '../../../Assets/ImagesApp';
import FilterSongComponent from '../../../Components/Module.General/Module.Pubs/FilterSong.component';


class FilterSongScreen extends Component {


    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }

    render() {
        return (
            <FilterSongComponent
                goBack={() => this.props.navigation.goBack(false)}
            />
        );
    }

}

export default FilterSongScreen;