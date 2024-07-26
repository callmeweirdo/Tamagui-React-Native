// app/(drawer)/home/_layout.tsx
import { DrawerToggleButton } from '@react-navigation/drawer';
import { colorTokens } from '@tamagui/themes';
import { Stack } from 'expo-router';
import { useTheme } from 'tamagui';


export default function HomeLayout() {
    const theme = useTheme();

  return (
      <Stack screenOptions={{
          headerShown: false,
          headerStyle: {
              backgroundColor: theme.yellow10.get(),
              headerTintColor: `yellow`
          }
      }}>
          <Stack.Screen name='index' options={{ 
              title: 'Movies Star',
              //   headerBackVisible: true
                  headerBackTitle: 'Back',
          }} />

          <Stack.Screen
              name='movie/[id]'
              options={{ 
                  title: 'Movie',
                  headerBackTitle: 'Back',
            //   headerBackTitleVisible: true
               }}
          />
    </Stack>
  );
}