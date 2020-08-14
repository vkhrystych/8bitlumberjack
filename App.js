import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Tree from "./components/Tree";

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

  const onAppKeyDown = (e) => {
    if (!gameOver) {
      const currentChunk = treeData[treeData.length - 1];

      const checkIsRightChop = (side) => {
        if (currentChunk.side === side) {
          const treeDataCopy = [...treeData];
          treeDataCopy.pop();
          setTreeData(treeDataCopy);

          setScore(score + 1);
        } else {
          setGameOver(true);
        }
      };

      if (e.key === "ArrowLeft") checkIsRightChop("left");
      if (e.key === "ArrowRight") checkIsRightChop("right");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Score: {score}</Text>
        </View>

        {gameOver ? <Text>Game over</Text> : <Tree treeData={treeData} />}
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
