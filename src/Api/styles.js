import { StyleSheet, Dimensions } from "react-native";
var dimWidth = Dimensions.get("window").width * 0.9;
var dimHeight = Dimensions.get("window").height * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1c1c",
  },
  gifContainer: {
    backgroundColor: "#2f80c9",
    borderColor: "#121212",
    borderWidth: 1,
    marginBottom: 5,
  },

  gif: {
    height: dimHeight / 2,
    width: dimWidth / 2,
  },
  searchbox: {
    borderRadius: 10,

    marginTop: 20,
    marginLeft: 10,
    width: "85%",
    backgroundColor: "#FFFFFF",
  },
  searchbutton: {
    alignItems: "center",
    marginTop: 20,
    padding: 10,
  },
  category: {
    flex: 1,
    flexWrap: "wrap",
    padding: 18,
  },
  iconandtitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    padding: 10,
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#121212",
  },
  currentcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  pagenumber: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    // borderWidth: 1,
    // borderColor: "#2f80c9",
    // borderRadius: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
});

export default styles;
