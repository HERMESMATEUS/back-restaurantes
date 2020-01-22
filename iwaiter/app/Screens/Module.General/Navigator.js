import React from 'react';
import { Text, View, Image } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator, navigationOptions } from 'react-navigation';
import IndexPubsScreen from '../Module.General/Module.Pubs/index.Pubs.screen';
import IndexProfileScreen from '../Module.General/Module.Profile/index.Profile.screen';
import { ImagesApp } from '../../Assets/ImagesApp';
import { Colors } from '../../Constants/Constants';
import EstablishScreen from './Module.Pubs/Establish.screen';
import IndexPeopleScreen from './Module.People/index.People.screen';
import IndexChatScreen from './Module.Chat/index.Chat.screen';


const ImageStyle = {
    top: 0,
    width: 25,
    height: 25,
    marginRight: 10,
    resizeMode: 'contain',
}


const Tabs = createMaterialTopTabNavigator(
    {
        Tab1: {
            screen: IndexProfileScreen,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor, focused }) =>
                    focused ? <Image style={ImageStyle} source={ImagesApp.Profile_focuse} /> : < Image style={ImageStyle} source={ImagesApp.Profile} />
            }),
        },
        Tab2: {
            screen: IndexPubsScreen,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor, focused }) =>
                    focused ? <Image style={ImageStyle} source={ImagesApp.Establish_focuse} /> : < Image style={ImageStyle} source={ImagesApp.Establish} />
            }),
        },

        Tab4: {
            screen: IndexChatScreen,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor, focused }) =>
                    focused ? <Image style={ImageStyle} source={ImagesApp.Chat_focuse} /> : < Image style={ImageStyle} source={ImagesApp.Chat} />
            }),
        },
    },
    {
        initialRouteName: 'Tab2',
        lazy: true,
        swipeEnabled: false,
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'grey',
            showIcon: true,
            showLabel: false,
            tabStyle: {},
            indicatorStyle: { backgroundColor: Colors.RED },
            style: { backgroundColor: Colors.BACKGROUND_BLACK, borderBottomColor: Colors.RED, borderBottomWidth: 1 }
        },
    },
);

Tabs.navigationOptions = ({ navigation }) => { return { header: null } };

const TabNavigator = createStackNavigator(
    {
        Main: { screen: Tabs },
        Establish: { screen: EstablishScreen },
    },
);

export default createAppContainer(TabNavigator);