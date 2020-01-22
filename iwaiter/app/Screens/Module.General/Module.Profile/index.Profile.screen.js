import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProfileScreen from './Profile.screen';
import UserBlockedScreen from './UserBlocked.screen';

const MainNavigator = createStackNavigator({
    Profile: { screen: ProfileScreen },
    UserBlocked: { screen: UserBlockedScreen },
});

const IndexProfileScreen = createAppContainer(MainNavigator);

export default IndexProfileScreen;