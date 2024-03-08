import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home1" component={HomeScreen} />
                <Drawer.Screen name="Details2" component={DetailsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


export default MyDrawer;