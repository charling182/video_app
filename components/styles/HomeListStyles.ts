// styles.js 或者任何你存放样式的地方
import { StyleSheet } from 'react-native';
import type { MD3Theme } from 'react-native-paper/src/types';

// 创建一个函数来获取主题并生成样式
const createStyles = (theme: MD3Theme) => {
    return StyleSheet.create({
        listCard: {
            marginLeft: 32,
            marginTop: 32,
        },
        listHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 32,
            marginBottom: 16,
        },
        image: {
            width: 100,
            height: 150,
            borderRadius: 8,
            marginRight: 16,
        },
        listContent: {
            marginBottom: 32,
        },
        movieTitle: {
            width: 100,
            textAlign: 'center',
            overflow: 'hidden',
            marginTop: 4,
        }
    });
};

export default createStyles;