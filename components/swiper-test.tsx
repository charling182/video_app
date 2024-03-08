import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const SwiperTest: React.FC = () => {
    return (
        <Swiper
            // style={{ height: 200, width: '100%' }}
            // showsButtons={true} // 显示左右切换按钮
            autoplay={true} // 自动播放
            loop={true} // 循环播放
        // pagination={{}} // 启用分页指示器，可进一步配置样式
        >
            {/* 滑动页面内容 */}
            <View style={{ flex: 1, width: '100%', justifyContent: 'center', backgroundColor: 'transparent' }}>
                <Image source={require('../static/image/background.jpg')} style={{ width: '100%', flex: 1 }} />
            </View>
            <View style={{ flex: 1, width: '100%', justifyContent: 'center', backgroundColor: 'transparent' }}>
                <Image source={require('../static/image/new-message.png')} style={{ width: '100%', flex: 1 }} />
            </View>
            {/* 更多视图... */}
        </Swiper>
    );
};

export default SwiperTest;
