import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 300;
  }

  if (height > 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Game is Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={[styles.image, imageStyle]}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number
          <Text style={styles.highlight}> {userNumber}</Text>.
        </Text>
      </View>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 300 ? 150: 300,
    // height: deviceWidth < 300 ? 150: 300,
    // borderRadius: deviceWidth < 300 ? 75: 150,
    // borderWidth: 3,
    borderColor: Colors.primart800,
    overflow: "hidden",
    marginVertical: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
