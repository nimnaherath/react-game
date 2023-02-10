import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/Game/NumberContainer";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomNumber(min, max, exlude) {
  const random = Math.floor(Math.random() * (max - min) + min);

  if (random === exlude) {
    return generateRandomNumber(max, min, exlude);
  } else {
    return random;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScrean({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessNumber(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie !", "You know that is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    console.log(minBoundary, maxBoundary);
    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRandomNumber);
  }
  return (
    <View style={styles.screan}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessNumber.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessNumber.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>

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
