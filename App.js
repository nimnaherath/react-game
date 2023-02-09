import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScrean from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickrNumberHandler(enterdNumber) {
    setUserNumber(enterdNumber);
  }

  let screan = <StartGameScreen onPickNumber={pickrNumberHandler} />;

  if (userNumber) {
    screan = <GameScrean />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScrean}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScrean}
        imageStyle={styles.backgrounImage}
      >
        <SafeAreaView style={styles.rootScrean}>{screan}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
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
