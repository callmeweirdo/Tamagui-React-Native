import Drawer from "expo-router/drawer";
import React from 'react';

const Layout = () => {
    return (
            <Drawer>
                <Drawer.Screen name="(home)" options={{ title: 'Home Page' }} />
                <Drawer.Screen name="(favourites)" options={{  }} />
            </Drawer>
    );
}

export default Layout;