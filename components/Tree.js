import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";

export default ({ treeData }) => {
  return (
    <View style={styles.treeContainer}>
      {treeData.map((tree, treeIndex) => {
        return (
          <View
            key={treeIndex}
            style={{
              ...styles.tree,
              backgroundColor: tree.side === "left" ? "brown" : "#7f0000",
            }}
          >
            <Text>{tree.side}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  treeContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  tree: {
    width: 120,
    flex: 1,
  },
});
