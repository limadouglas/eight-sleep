import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details } from "@screens";
import TabViewStack from "./TabViewStack";
import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  Details: { id: string; intervalId: string };
};
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={TabViewStack}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "black" },
          headerBackTitleVisible: false,
          headerTintColor: "white",
        }}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
