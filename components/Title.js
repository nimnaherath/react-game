import { Text, StyleSheet } from "react-native";
import Colors from '../constants/colors'

function Title({children}) {
  return <Text style={styles.titile}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  titile: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white' ,
    textAlign: "center",
    borderWidth: 2,
    padding: 12,
    borderColor: 'white' ,
    textAlign: "center",
  },
});
