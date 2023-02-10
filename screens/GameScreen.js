import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function generateRandomNumber(min, max, exlude) {
  const random = Math.floor(Math.random() * (max - min) + min);

  if (random === exlude) {
    return generateRandomNumber(max, min, exlude);
  } else {
    return random;
  }
}

function GameScrean({ userNumber }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [surrentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screan}>
      <Title>Opponent's Guess</Title>
      {/* Guess number */}
      <View>
        <Text>Higher or Lower</Text>
        {/* +/- button */}
      </View>
      <View>{/* //log round */}</View>
    </View>
  );
}

export default GameScrean;

const styles = StyleSheet.create({
  screan: {
    flex: 1,
    padding: 12,
  },
});
