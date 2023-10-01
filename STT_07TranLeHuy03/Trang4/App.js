import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: "50px", fontWeight: "bold"}}>CODE</Text>
      <Text style={styles.word}>VERIFICATION</Text>
      <Text style={{textAlign: "center", fontWeight: "bold", fontSize: "17px"}}>Enter online password sent on {"\n"} ++849092605798</Text>
      <View style={{flexDirection: "row"}}>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </View>
      <Button title="VERIFY CODE" color="black" width={"150px"}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    background: "linear-gradient(rgba(250, 0, 0, 0.5))",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: "yellow"
  },

  word: {
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center"
  }
});
