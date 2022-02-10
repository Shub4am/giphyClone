import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    paddingTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
});

export default styles;
