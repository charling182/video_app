import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useTheme, Icon } from 'react-native-paper';
import createStyles from './styles/HomeHeaderStyles';

const HomeHeader: React.FC = () => {
    const theme = useTheme();
    const styles = createStyles(theme);
    return (
        <View style={styles.header}>
            <Icon
                source="menu"
                color={theme.colors.secondary}
                size={24}
            />
            <Text>charling1</Text>
            <Icon
                source="magnify"
                color={theme.colors.secondary}
                size={24}
            />
        </View>
    );
};

export default HomeHeader;
