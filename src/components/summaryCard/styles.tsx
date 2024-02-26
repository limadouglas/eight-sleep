import { Colors } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: Colors.GREY_TRANSPARENT_7,
    minHeight: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    width: "100%",
    color: Colors.WHITE,
  },
  itemsWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  cardItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardItemText: {
    color: Colors.WHITE,
    marginTop: 10,
  },

  dateText: {
    fontSize: 12,
    color: Colors.WHITE,
    marginBottom: 20,
  },
  separator: {
    borderRightWidth: 1,
    borderRightColor: Colors.WHITE,
  },
});
