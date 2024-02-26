import { Colors } from "@theme";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    flex: 1,
    maxHeight: 90,
    paddingHorizontal: 50,
    backgroundColor: Colors.BLACK,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 50,
    backgroundColor: Colors.BLACK,
    resizeMode: "contain",
  },
});
