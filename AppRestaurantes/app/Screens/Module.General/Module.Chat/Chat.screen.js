import React from 'react';
import ChatComponent from '../../../Components/Module.General/Module.Chat/Chat.component';

class ChatScreen extends React.Component {

  static navigationOptions = ({ navigation }) => { return { header: null } }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <ChatComponent
      callBackOnpressBack={() => this.props.navigation.goBack(false)}
    />;
  }
}

export default ChatScreen;