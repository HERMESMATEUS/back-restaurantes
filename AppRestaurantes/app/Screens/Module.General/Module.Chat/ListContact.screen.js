import React from 'react';
import ListContactComponent from '../../../Components/Module.General/Module.Chat/ListContact.component';

class ListContantScreen extends React.Component {

  static navigationOptions = ({ navigation }) => { return { header: null } }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return <ListContactComponent
      CallBackNavigateChatUser={(user) => {
        this.props.navigation.navigate('Chat', { user });
      }}
    />;
  }
}

export default ListContantScreen;