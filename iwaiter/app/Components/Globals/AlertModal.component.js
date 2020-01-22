import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import Modal from "react-native-modal";
import { Colors } from "../../Constants/Constants";
import BackgroundOpacitiesHorizontalComponent from './BackgroundOpacitiesHorizontal.component';

const styles = {

  View: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  View2: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  View3: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  View6: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  View7: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  Text: {
    fontSize: 18,
    color: Colors.WHITE,
    fontWeight: 'bold'
  },
  Text2: {
    fontSize: 18,
    color: Colors.WHITE,

  },
  Text3: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  Text4: {
    fontSize: 18,
    color: Colors.RED,
    fontWeight: 'bold',
  },
}


export default class AlertModalComponent extends Component {


  render() {

    const { Visible, cancel, confirm, HeaderTitle, SubHeaderTitle, CancelText, ConfirmText } = this.props;

    return (
      <View style={{ width: '100%' }}>
        <Modal isVisible={Visible}>

          <View style={styles.View}>
            <View style={styles.View2}>
              <BackgroundOpacitiesHorizontalComponent>
                <View style={styles.View3}>
                  <Text style={styles.Text}>{HeaderTitle}</Text>
                  <Text style={styles.Text2} >{SubHeaderTitle}</Text>
                </View>
                <View style={styles.View6}>
                  <View style={styles.View7}>
                    <TouchableOpacity
                      style={{
                        height: 40,
                        width: 150,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: Colors.WHITE,
                        borderWidth: 1,
                      }}
                      onPress={cancel}
                    >
                      <Text style={styles.Text3} >{CancelText}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.View7}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Colors.WHITE,
                        height: 40,
                        width: 150,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onPress={confirm}>
                      <Text style={styles.Text4}>{ConfirmText}</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </BackgroundOpacitiesHorizontalComponent>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
