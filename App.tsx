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
import { queryConfig } from "@services/api/core/config";
import { Colors } from "@theme";

const App = () => {
  const queryClient = new QueryClient(queryConfig);
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <QueryClientProvider client={queryClient}>
          <StatusBar
            barStyle={"light-content"}
            backgroundColor={Colors.BLACK}
          />
          <RootStack />
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
