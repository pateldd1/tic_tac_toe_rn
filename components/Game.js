import React from "react";
import { View, StyleSheet } from "react-native";
import Board from "./Board";

const Game = () => {
  return (
    <View style={styles.container}>
      <Board />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 100,
    height: 125 * 3,
    width: 125 * 3,
    position: "relative"
  }
});

export default Game;
