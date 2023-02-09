import { Text, View, StyleSheet } from "react-native";

function GameScrean() {
  return (
    <View style={styles.screan}>
      <Text>Opponent's Guess</Text>
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
