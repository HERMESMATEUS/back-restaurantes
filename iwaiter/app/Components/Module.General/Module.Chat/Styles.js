import { StyleSheet } from 'react-native';
import { Colors } from '../../../Constants/Constants';

export const Styles = StyleSheet.create({

  View1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND_BLACK,
  },
  View2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginVertical: 15
  },
  View3: {
    width: '100%',
    height: 60
  },
  View4: {
    flex: 1,
    alignItems: 'center',
  },
  View5: {
    width: '90%',
    height: 60,
    flexDirection: 'row',

  },
  View6: {
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },

  Text1: {
    marginVertical: 10,
    color: Colors.WHITE,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  Text2: {
    marginVertical: 10,
    color: Colors.RED,
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.8
  },
  Text3: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold'
  },
  Text4: {
    color: Colors.WHITE,
    fontSize: 18,
  },
  Text5: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  Text6: {
    color: Colors.WHITE,
    fontSize: 15,
    opacity: 0.6
  },

  TouchableOpacity1: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },

  TextInput1: {
    width: '100%',
    height: 40,
    borderRadius: 25,
    backgroundColor: Colors.WHITE
  },

});