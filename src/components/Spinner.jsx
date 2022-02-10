import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const Spinner = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <FontAwesome5 name="spinner" size={30} color="#e349dc" />
    </View>
  );
};
export default Spinner;
