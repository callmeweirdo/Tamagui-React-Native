import { Ionicons } from "@expo/vector-icons";
import { colorTokens } from "@tamagui/themes";
import Drawer from "expo-router/drawer";

const Layout = () => {
    return (
        <Drawer screenOptions={{ 
            headerShown: true,
            drawerHideStatusBarOnOpen: true,
            drawerActiveBackgroundColor: colorTokens.dark.yellow.yellow10
            
             }} >
            <Drawer.Screen
                name="(home)"
                options={{
                title: 'Movies App',
                headerShown: false,
                drawerIcon: ({color, size}) => <Ionicons name="ios-home" size={size} color={color} />
                }}
            />
                <Drawer.Screen name="(favourites)" options={{  }} />
            </Drawer>
    );
}

export default Layout;