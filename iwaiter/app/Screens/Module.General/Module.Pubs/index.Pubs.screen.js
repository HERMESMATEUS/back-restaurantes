import EstablishScreen from './Establish.screen';
import ListEstablishScreen from './ListEstablish.screen';
import FilterSongScreen from './FilterSong.screen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
    ListEstablish: { screen: ListEstablishScreen },
    Establish: { screen: EstablishScreen },
    FilterSong: { screen: FilterSongScreen },
});

const IndexPubsScreen = createAppContainer(MainNavigator);

export default IndexPubsScreen;