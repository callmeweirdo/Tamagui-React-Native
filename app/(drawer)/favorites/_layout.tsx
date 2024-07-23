// app/(drawer)/favorites/_layout.tsx
import { Stack } from 'expo-router';

export default function FavoritesLayout() {
  return (
      <Stack screenOptions={{
        //   headerShown: false
      }}>
          <Stack.Screen name="index" options={{ 
        //   headerShown: false
       }} />
    </Stack>
  );
}