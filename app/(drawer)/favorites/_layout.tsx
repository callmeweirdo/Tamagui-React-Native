// app/(drawer)/home/_layout.tsx
import { DrawerToggleButton } from '@react-navigation/drawer';
import { colorTokens } from '@tamagui/themes';
import { Stack } from 'expo-router';
import { useTheme } from 'tamagui';

export const unstable_settings = {
    initialRouteName: 'index'
}

export default function HomeLayout() {
    const theme = useTheme();

  return (
      <Stack screenOptions={{
          headerShown: true,
          headerStyle: {
              backgroundColor: theme.yellow10.get(),
              headerTintColor: `yellow`
          }
      }}>
          <Stack.Screen name='index' options={{ 
              title: 'Favorite Movies',
              //   headerBackTitle: 'Back',
              headerLeft: () => <DrawerToggleButton tintColor='#fff' />
          }} />

          <Stack.Screen
              name='movie/[id]'
              options={{ 
                  title: 'Movie',
                  headerBackTitle: 'Back',
               }}
          />

          <Stack.Screen
              name='tv/[id]'
              options={{ 
                  title: 'TV',
                  headerBackTitle: 'Back',
               }}
          />
    </Stack>
  );
}