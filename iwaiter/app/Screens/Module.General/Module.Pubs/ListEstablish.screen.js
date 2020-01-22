import React from 'react';
import { View } from 'react-native';
import ListEstablishComponent from '../../../Components/Module.General/Module.Pubs/ListEstablish.component';
import AlertModalComponent from '../../../Components/Globals/AlertModal.component';
import ActivateGPSComponent from '../../../Components/Globals/ActivateGPS.component';



class LsitEstablishScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      ImEstablish: false,
      active: false
    }
    this.JoinEstablish = this.JoinEstablish.bind(this);
  }

  JoinEstablish() {
    this.setState({ ImEstablish: !this.state.ImEstablish });
    this.props.navigation.navigate('Establish');
  }

  render() {

    if (this.state.active) {
      return (
        <View style={{ flex: 1 }}>
          <ActivateGPSComponent
            callBackActivateGps={() => this.setState({ active: true })}
          />
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>

          <AlertModalComponent
            HeaderTitle={'¿Ya estás en Armando Records?'}
            SubHeaderTitle={'Calle 85 No. 14-46'}
            Visible={this.state.ImEstablish}
            cancel={() => this.setState({ ImEstablish: !this.state.ImEstablish })}
            confirm={() => { this.JoinEstablish() }}
            CancelText={'Cancelar'}
            ConfirmText={'Si, estoy aqui'}
          />

          <ListEstablishComponent
            JoinEstablish={() => this.setState({ ImEstablish: true })}
          />

        </View>

      );
    }

  }
}

export default LsitEstablishScreen;