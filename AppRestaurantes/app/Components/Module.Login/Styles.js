import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Constants/Constants';

export const Styles = StyleSheet.create({
  View1: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  View2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  View3: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  Image1: {
    height: 126.26,
    width: 100,
    resizeMode: 'contain'
  },

  TouchableOpacity1: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    width: 302,
    backgroundColor: Colors.BlueFacebook
  },
  TouchableOpacity2: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'white',
    height: 50,
    width: 302,
  },

  Text1: {
    fontSize: 19,
    fontFamily: Fonts.OpenSansCondensed,
    fontWeight: 'bold',
    color: 'white',
  },

});