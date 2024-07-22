// import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { colorTokens } from '@tamagui/themes';

const Layout = () => {
    return (
        <Stack screenOptions={{ 
            headerStyle: {
                backgroundColor: colorTokens.dark.yellow.yellow10
            },
         }} >

        </Stack>
    );
}

export default Layout;