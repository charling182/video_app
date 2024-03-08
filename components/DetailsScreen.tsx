import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen: React.FC = ({ navigation }) => {
    return (
        <View>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default DetailsScreen;
