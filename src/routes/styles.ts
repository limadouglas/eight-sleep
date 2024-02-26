import { Colors } from "@theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  initialLayout: {
    height: 0,
    width: Dimensions.get("window").width,
  },
  tabBarIndicator: {
    backgroundColor: Colors.WHITE,
  },
  tabBar: {
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: "bold",
  },
  tabView: {
    backgroundColor: Colors.BLACK
  },
});
