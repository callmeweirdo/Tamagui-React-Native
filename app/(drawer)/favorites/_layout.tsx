// app/(drawer)/favorites/_layout.tsx
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Stack } from 'expo-router';
import { useTheme } from 'tamagui';

export default function FavoritesLayout() {
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
              title: 'Movies Star',
            headerBackTitle: 'Back',
          headerShown: true,
              headerLeft: () => <DrawerToggleButton tintColor='#fff' />
          }} />
    </Stack>
  );
}