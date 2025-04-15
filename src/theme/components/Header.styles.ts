import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    zIndex: 1,
  },
  menuButton: {
    minWidth: 40,
    padding: 10,
  },
  iconPlaceholder: {
    minWidth: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
