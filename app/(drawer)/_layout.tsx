// import { Ionicons } from "@expo/vector-icons";
import { colorTokens } from "@tamagui/themes";
import Drawer from "expo-router/drawer";
import { Entypo, MaterialIcons } from '@expo/vector-icons';

const Layout = () => {
    return (
        <Drawer
            screenOptions={{
                headerShown: true,
                drawerHideStatusBarOnOpen: true,
                drawerActiveBackgroundColor: colorTokens.dark.yellow.yellow10,
                drawerActiveTintColor: "#fff",
                drawerLabelStyle: {marginLeft: -20 }
            }}
        >
            <Drawer.Screen
                name="home"
                options={{
                    title: 'Movies App',
                    drawerIcon: ({ color, size }) => (
                        <Entypo name="home" size={24} color="black" />
                    )
                }}
            />
            <Drawer.Screen
                name="(favorites)"
                options={{
                    title: 'Fav Movies',
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="favorite" size={24} color="black" />
                    )
                }}
            />
        </Drawer>
    );
}

export default Layout;