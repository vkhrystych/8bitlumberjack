import React, { useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default ({ treeData }) => {
  if (!treeData.length) return null;

  const lastChunkSide = treeData[treeData.length - 1].side;

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

      <TouchableOpacity
        style={{
          ...styles.lumberjack,
          left: lastChunkSide === "left" ? 50 : 310,
        }}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  treeContainer: {
    zIndex: 0,
    height: "100%",
    display: "flex",
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  tree: {
    width: 120,
    flex: 1,
    marginBottom: 1,
  },
  lumberjack: {
    position: "absolute",
    bottom: 0,
    width: 50,
    height: 200,
    backgroundColor: "red",
  },
});
