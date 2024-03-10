import React, { useState } from 'react';
import { View, SafeAreaView, ImageBackground, FlatList } from 'react-native';
import { useTheme, Button, Text } from 'react-native-paper';
import createStyles from './home-styles';
import HomeSwiper from '../components/HomeSwiper';
import HomeHeader from '../components/HomeHeader';
import HomeList from '../components/HomeList';
import { home } from '../types/app';

const Home = () => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const [styleTypes, setStyleTypes] = useState<home.styleType[]>([
        {
            id: 1,
            title: '战争',
            type: 'war'
        },
        {
            id: 2,
            title: '喜剧',
            type: 'comedy'
        },
        {
            id: 3,
            title: '奇幻',
            type: 'comedy'
        },
    ]);
    return (
        <SafeAreaView style={styles.home}>
            <HomeHeader />

            <HomeSwiper />
            <View>
                <FlatList
                    style={styles.buttonBox}
                    data={styleTypes}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            <ImageBackground
                                key={item.id}
                                imageStyle={styles.imageBackgroundStyle}
                                source={require('../static/image/lazy/load5.gif')}>
                                <Button
                                    rippleColor={'transparent'}
                                    contentStyle={styles.buttonContent}
                                    mode='text' onPress={() => console.log('Pressed')}>
                                    {item.title}
                                </Button>
                            </ImageBackground>
                        </View>
                    )}
                />
            </View>
            <HomeList />
        </SafeAreaView>
    );
};

export default Home;
