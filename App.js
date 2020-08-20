import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Tree from "./components/Tree";
import GameOver from "./screens/GameOver";
import ChopBtns from "./components/ChopBtns";

import { generateBoolean } from "./utils";

export default function App() {
  const [score, setScore] = useState(0);
  const [treeData, setTreeData] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    initializeTreeDate();
  }, []);

  const initializeTreeDate = () => {
    const newTreeData = [];

    for (let i = 0; i <= 4; i++) {
      newTreeData.push({
        side: generateBoolean() ? "left" : "right",
      });
    }

    setTreeData(newTreeData);
  };

  const onAppKeyDown = async (side) => {
    if (!gameOver) {
      const soundObject = new Audio.Sound();

      try {
        await soundObject.loadAsync(require("./assets/dog.wav"));
        await soundObject.playAsync();
        // Your sound is playing!

        // Don't forget to unload the sound from memory
        // when you are done using the Sound object
        // await soundObject.unloadAsync();
      } catch (error) {
        // An error occurred!
      }

      const currentChunk = treeData[treeData.length - 1];

      const checkIsRightChop = (side) => {
        if (currentChunk.side === side) {
          const treeDataCopy = [...treeData];
          treeDataCopy.pop();

          treeDataCopy.unshift({
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

  const startAgain = () => {
    setScore(0);
    setGameOver(false);
    initializeTreeDate();
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Score: {score}</Text>
        </View>

        {gameOver ? (
          <GameOver startAgain={startAgain} />
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
