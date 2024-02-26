import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details } from "@screens";
import TabViewStack from "./TabViewStack";
import { NavigationProp } from "@react-navigation/native";
import { Colors } from "@theme";

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
          headerStyle: { backgroundColor: Colors.BLACK },
          headerBackTitleVisible: false,
          headerTintColor: Colors.WHITE,
        }}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
