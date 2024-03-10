import React from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { useTheme, Icon } from 'react-native-paper';
import createStyles from './styles/HomeListStyles';
import FastImage from 'react-native-fast-image';

const lazyLoadGif = require('../static/image/lazy/load6.gif')

type listItem = {
    id: number;
    title: string;
    poster_url: string;
};

type ListProps = {
    title: string;
    list: listItem[];
};

const List: React.FC<ListProps> = ({ title, list }) => {
    const theme = useTheme();
    const styles = createStyles(theme);
    return (
        <SafeAreaView style={styles.listContent}>
            <View style={styles.listHeader}>
                <Text>{title}</Text>
                <Icon
                    source="arrow-right"
                    color={theme.colors.secondary}
                    size={24}
                />
            </View>
            <View>
                <FlatList
                    data={list}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View key={item.id}>
                            <FastImage
                                style={styles.image}
                                source={{
                                    uri: item.poster_url,
                                    priority: FastImage.priority.normal,
                                }}
                                // defaultSource={lazyLoadGif}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.movieTitle}>{item.title}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );

}

const HomeList: React.FC = () => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const list = [
        {
            id: 1,
            title: '电影名称给他人还挺好人挺好',
            poster_url: 'https://www.niandai.org/upload/vod/20240306-1/b18df0d47863eec3b3f937e8dd6e166c.jpg'
        },
        {
            id: 2,
            title: '电影名称',
            poster_url: 'https://www.niandai.org/upload/vod/20240123-1/95551f80913a4654137c0cc89f260ef2.jpg',
        },
        {
            id: 3,
            title: '电影名称',
            poster_url: 'https://www.niandai.org/upload/vod/20240205-1/c4b2d318a5d9a517c2776ed5e9e623ea.jpg',
        },
        {
            id: 4,
            title: '电影名称',
            poster_url: 'https://www.niandai.org/upload/vod/20240216-1/07606269274757d4f17c7bc958abec10.jpg',
        },
    ];
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.listCard}>
            <List title='我的列表' list={list} />
            <List title='我的列表' list={list} />
            <List title='我的列表' list={list} />
            <List title='我的列表' list={list} />
        </ScrollView>
    );
};

export default HomeList;
