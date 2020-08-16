import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.btn} onPress={() => onPress("left")}>
      <Text>Button</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={() => onPress("right")}>
      <Text>Button</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 3,
    position: "absolute",
    flexDirection: "row",
  },
  btn: {
    flex: 1,
    height: "100%",
  },
});
