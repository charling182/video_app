/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  // Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { MD3LightTheme as DefaultTheme, PaperProvider, Text } from 'react-native-paper';
import type { MD3Theme } from 'react-native-paper/src/types';
import type { ViewStyle } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/Home';
import SearchScreen from './pages/Search';

const { width } = Dimensions.get('window');

const Stack = createStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const theme: MD3Theme = {
  ...DefaultTheme,
  version: 3,
};
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: ViewStyle = {
    flex: 1,
    height: '100%',
    width: '100%',
    // padding: 8,
    backgroundColor: theme.colors.background,
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        {/* <StatusBar hidden /> */}
        {/* <StatusBar backgroundColor={theme.colors.background} /> */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
