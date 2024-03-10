// styles.js 或者任何你存放样式的地方
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import type { MD3Theme } from 'react-native-paper/src/types';

// 创建一个函数来获取主题并生成样式
const createStyles = (theme: MD3Theme) => {
    return StyleSheet.create({
        home: {
            flex: 1,
            backgroundColor: theme.colors.background,
            // backgroundColor: 'blue',
            padding: 0,
            // paddingHorizontal: 16,
        },
        buttonBox: {
            marginLeft: 32,
        },
        imageBackgroundStyle: {
            opacity: 0.2,
            borderRadius: 16,
            backgroundColor: theme.colors.primary,
            marginRight: 16,
        },
        buttonContent: {
            height: 64,
            width: 160,
        }
    });
};

export default createStyles;