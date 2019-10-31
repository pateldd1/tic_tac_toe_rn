import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { clone } from "lodash";
import Square from "./Square";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  newGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true
    });
  };

  handlePress(i) {
    const squares = clone(this.state.squares);
    if (calculateWinner(squares) || calculateDraw(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onPress={() => this.handlePress(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    const draw = calculateDraw(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if (draw) {
      status = "It's a Draw!";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <View>
        <View style={styles.status}>
          <Text style={styles.statusWords}>{status}</Text>
        </View>
        <View style={styles.board}>
          <View style={styles.squareContainer}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </View>
          <View style={styles.squareContainer}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </View>
          <View style={styles.squareContainer}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </View>
        </View>
        <TouchableOpacity style={styles.newGame} onPress={this.newGame}>
          <Text style={styles.smallLetter}>Click to start new game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function calculateDraw(squares) {
  for (let index = 0; index < 9; index++) {
    const element = squares[index];
    if (!element) {
      return false;
    }
  }
  return true;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const styles = StyleSheet.create({
  board: {
    height: 125 * 3,
    width: 125 * 3
  },
  status: {
    marginBottom: 20
  },
  statusWords: {
    fontSize: 20,
    textAlign: "center"
  },
  smallLetter: {
    fontSize: 20,
    textAlign: "center"
  },
  squareContainer: {
    display: "flex",
    flexDirection: "row",
    width: 125,
    height: 125
  },
  newGame: {
    marginTop: 20
  }
});
