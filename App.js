import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import GiphyApi from "./src/Api/giphyApi";

import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <GiphyApi />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191818",
    alignItems: "center",
    justifyContent: "center",
  },
});
