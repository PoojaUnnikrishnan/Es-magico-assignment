import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movie App</Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontFamily:"Brush Script MT",
    fontWeight:"bolder",
    fontSize:"30px"
  },
});
