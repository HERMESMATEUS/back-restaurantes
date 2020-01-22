import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../Constants/Constants';

export const Styles = StyleSheet.create({
  View1: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_BLACK
  },
  Text1: {
    marginVertical: 10,
    color: Colors.WHITE,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: Fonts.OpenSansCondensed
  },
  Text2: {
    marginVertical: 10,
    color: Colors.RED,
    fontSize: 18,
    fontFamily: Fonts.OpenSans,
    textAlign: 'center',
  },
  Text3: {
    color: Colors.WHITE,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: Fonts.OpenSansCondensed,
  },
  Text4: {
    color: Colors.WHITE,
    fontFamily: Fonts.OpenSansCondensed,
    fontSize: 15,
  },
});