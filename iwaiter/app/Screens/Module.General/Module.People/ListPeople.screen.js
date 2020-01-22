import React from 'react';
import ListPeopleComponent from '../../../Components/Module.General/Module.People/ListPeople.component';

class ListPeopleScreen extends React.Component {

  static navigationOptions = ({ navigation }) => { return { header: null } }

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return <ListPeopleComponent
      CallBackNavigateChatUser={() => {

      }}
    />;
  }
}

export default ListPeopleScreen;