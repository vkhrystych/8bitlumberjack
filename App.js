import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Tree from "./components/Tree";
import ChopBtns from "./components/ChopBtns";

import { generateBoolean } from "./utils";

export default function App() {
  const [treeData, setTreeData] = useState([
    { side: "left" },
    { side: "right" },
    { side: "left" },
    { side: "right" },
    { side: "right" },
  ]);

  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const onAppKeyDown = (side) => {
    if (!gameOver) {
      const currentChunk = treeData[treeData.length - 1];

      const checkIsRightChop = (side) => {
        if (currentChunk.side === side) {
          const treeDataCopy = [...treeData];
          treeDataCopy.pop();

          treeDataCopy.push({
            side: generateBoolean() ? "left" : "right",
          });

          setTreeData(treeDataCopy);

          setScore(score + 1);
        } else {
          setGameOver(true);
        }
      };

      checkIsRightChop(side);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Score: {score}</Text>
        </View>

        {gameOver ? (
          <Text>Game over</Text>
        ) : (
          <>
            <ChopBtns onPress={onAppKeyDown} />

            <Tree treeData={treeData} />
          </>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#75e8ff",
  },
  scoreContainer: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  scoreText: {
    fontSize: 22,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
