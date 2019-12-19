import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListContactScreen from './ListContact.screen';
import ChatScreen from './Chat.screen';

const MainNavigator = createStackNavigator({
  ListContact: { screen: ListContactScreen },
  Chat: { screen: ChatScreen },
});

const IndexChatScreen = createAppContainer(MainNavigator);

export default IndexChatScreen;