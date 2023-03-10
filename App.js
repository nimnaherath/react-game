import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScrean from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState();

  const [fontloaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontloaded) {
    return null;
  }

  function pickrNumberHandler(enterdNumber) {
    setUserNumber(enterdNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGameIsOver(true);
  }

  let screan = <StartGameScreen onPickNumber={pickrNumberHandler} />;

  if (userNumber) {
    screan = (
      <GameScrean userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screan = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light"/>

      <LinearGradient
        colors={[Colors.primart800, Colors.accent500]}
        style={styles.rootScrean}
      >
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          resizeMode="cover"
          style={styles.rootScrean}
          imageStyle={styles.backgrounImage}
        >
          <SafeAreaView style={styles.rootScrean}>{screan}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScrean: {
    flex: 1,
  },
  backgrounImage: {
    opacity: 0.15,
  },
});
