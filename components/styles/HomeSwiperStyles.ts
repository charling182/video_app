// styles.js 或者任何你存放样式的地方
import { StyleSheet } from 'react-native';
import type { MD3Theme } from 'react-native-paper/src/types';

// 创建一个函数来获取主题并生成样式
const createStyles = (theme: MD3Theme) => {
    return StyleSheet.create({
        item: {
            backgroundColor: 'red',
            borderRadius: 16,
            height: 200,
            padding: 50,
        },
        swiper: {
            marginBottom: 32,
        }
    });
};

export default createStyles;