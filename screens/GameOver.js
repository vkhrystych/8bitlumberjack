import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

export default ({ startAgain }) => (
  <View style={styles.container}>
    <Text>Game over</Text>

    <Button onPress={startAgain} title="Play again"></Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
    height: "100%",
  },
});
