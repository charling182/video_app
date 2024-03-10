import React, { useState, useRef, useEffect } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Text, useTheme } from 'react-native-paper';
import createStyles from './styles/HomeSwiperStyles';
import FastImage from 'react-native-fast-image'

const { width } = Dimensions.get('window');
const lazyLoadGif = require('../static/image/lazy/load6.gif')


const SwiperTest: React.FC = () => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const carouselRef = useRef(null);
    const [carouselItems, setCarouselItems] = useState([
        {
            url: 'https://static.2ge.org/gif/2023/10/fae9b24c342cfd12413b3c06b7dfc67a.gif',
            // url: 'https://www.niandai.org/upload/vod/20231121-1/1adb9717f24dddd49264511e0713536a.jpg',
            title: "Text 1",
        },
        {
            url: 'https://www.niandai.org/upload/vod/20240226-1/bc28eec140c64a01f8e4e8cf7285ad47.jpg',
            title: "Text 2",
        },
        {
            url: "https://www.niandai.org/upload/vod/20230905-3/f9d6ebb69234ed78e6efc87c77ecd6de.jpg",
            title: "Text 3",
        },
        {
            url: "https://www.niandai.org/upload/vod/20230905-14/fc0296d6b83a09a2a8e01763496c9aff.jpg",
            title: "Text 4",
        },
        {
            url: "https://www.niandai.org/upload/vod/20230905-3/e81cf0e55a84b64b77b46a704b200daf.jpg",
            title: "Text 5",
        },
    ]);
    const [activeIndex, setActiveIndex] = useState(0);

    const _renderItem = ({ item, index }) => {
        const isActive = index === carouselRef.current._activeItem;
        // console.log('isActive------', index, isActive, activeIndex, carouselRef.current._activeItem);
        return (
            <View>
                <FastImage
                    style={styles.item}
                    source={{
                        uri: item.url,
                        priority: FastImage.priority.normal,
                    }}
                    defaultSource={lazyLoadGif}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>

        )
    }
    return (
        <View style={styles.swiper}>
            <Carousel
                loop
                loopClonesPerSide={5}
                autoplay
                enableSnap
                callbackOffsetMargin={10}
                apparitionDelay={0}
                scrollEnabled
                lockScrollWhileSnapping
                layout={"default"}
                shouldOptimizeUpdates
                enableMomentum={false}
                ref={carouselRef}
                firstItem={0}
                data={carouselItems}
                sliderWidth={width}
                itemWidth={width - 64}
                itemHeight={200}
                sliderHeight={200}
                activeSlideAlignment={'center'}
                autoplayInterval={8000}
                renderItem={_renderItem}
                onSnapToItem={index => setActiveIndex(index)} />
        </View>
    );
};

export default SwiperTest;
