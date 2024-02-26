import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,

    backgroundColor: "#3b3b3b",
    minHeight: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    width: "100%",
    color: "white",
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
    color: "white",
    marginTop: 10,
  },

  dateText: {
    fontSize: 12,
    color: "white",
    marginBottom: 20,
  },
  separator: {
    borderRightWidth: 1,
    borderRightColor: "white",
  },
});
