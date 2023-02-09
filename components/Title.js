import { Text, StyleSheet } from "react-native";
import Colors from '../constants/colors'

function Title({children}) {
  return <Text style={styles.titile}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  titile: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500 ,
    textAlign: "center",
    borderWidth: 2,
    padding: 12,
    borderColor: Colors.accent500 ,
    textAlign: "center",
  },
});
