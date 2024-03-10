// styles.js 或者任何你存放样式的地方
import { StyleSheet } from 'react-native';
import type { MD3Theme } from 'react-native-paper/src/types';

// 创建一个函数来获取主题并生成样式
const createStyles = (theme: MD3Theme) => {
    return StyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 32,
            marginBottom: 16,
            marginTop: 16,
        }
    });
};

export default createStyles;