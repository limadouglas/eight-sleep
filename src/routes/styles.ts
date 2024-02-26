import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  initialLayout: {
    height: 0,
    width: Dimensions.get("window").width,
  },
  tabBarIndicator: {
    backgroundColor: "white",
  },
  tabBar: {
    backgroundColor: "black",
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  tabView: {
    backgroundColor: "black",
  },
});
