// app/_layout.tsx
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';
import config from '../tamagui.config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { queryClient } from '~/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TamaguiProvider config={config}>
          <QueryClientProvider client={queryClient} >
            <Theme name="yellow">
              <Slot />
            </Theme>
          </QueryClientProvider>
      </TamaguiProvider>
    </GestureHandlerRootView>
  );
}
