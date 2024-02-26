import React from "react";
import { StatusBar } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { RootStack } from "@routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFlipper } from "@react-navigation/devtools";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  // Create a react-query client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle={"light-content"} backgroundColor={"black"} />
          <RootStack />
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
