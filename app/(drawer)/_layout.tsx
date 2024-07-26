// app/(drawer)/_layout.tsx
import { Drawer } from 'expo-router/drawer';
import { colorTokens } from "@tamagui/themes";
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        // headerShown: true, // Disable default header for drawer
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: colorTokens.dark.yellow.yellow10,
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: { marginLeft: -20 }
        
      }}
    >
      <Drawer.Screen
        name="home"
        options={{
          title: 'Movies App',
          drawerIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="favorites"
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
