import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
const Tab = createMaterialBottomTabNavigator();

const TabNavigationContainer: React.FC = ({ children }) => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Details">
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Details" component={DetailsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigationContainer;
