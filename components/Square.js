import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function Square(props) {
  return (
    <TouchableOpacity
      title={props.value}
      style={styles.square}
      onPress={props.onPress}
    >
      <Text style={styles.letter}>{props.value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  letter: {
    fontSize: 100,
    textAlign: "center"
  },
  square: {
    borderWidth: 2,
    borderColor: "black",
    width: 125,
    height: 125,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Square;
