import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListPeopleScreen from './ListPeople.screen';

const MainNavigator = createStackNavigator({
    ListPeople: { screen: ListPeopleScreen },
});

const IndexPeopleScreen = createAppContainer(MainNavigator);

export default IndexPeopleScreen;