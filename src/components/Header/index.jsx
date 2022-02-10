import React from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import styles from "./styles";
const Header = () => {
  const onHeaderPress = () => {
    Alert.alert("not coded yet", "will update soon");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onHeaderPress}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
      </TouchableOpacity>
      <EvilIcons
        onPress={onHeaderPress}
        name="navicon"
        size={26}
        color="white"
      />
    </View>
  );
};
export default Header;
