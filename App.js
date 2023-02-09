import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.rootScrean}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScrean: {
    backgroundColor: "#ddb52f",
    flex: 1,
  },
});
