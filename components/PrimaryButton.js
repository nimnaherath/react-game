import { Text, View, Pressable, StyleSheet } from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

function PrimaryButton({ children }) {
  function dumyHandler() {
    console.log("test");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(pressed) => pressed? [styles.buttInnerContainer, styles.pressed] : styles.buttInnerContainer}
        onPress={dumyHandler}
        android_ripple={{ color: "#" }}
      >
        <Text style={styles.buttonTest}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonTest: {
    color: "white",
    textAlign: "center",
  },
  pressed:{
    opacity: 0.75,
  },
});
