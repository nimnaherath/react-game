import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScrean() {
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
