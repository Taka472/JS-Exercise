import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: "40px", fontWeight: "bold"}}>LOGIN</Text>
      <input width={"300px"} placeholder='email'></input>
      <input placeholder='password'></input>
      <Button title="LOGIN" color="red" width={"150px"}></Button>
      <Text>When you agree to terms and conditions</Text>
      <Text>Forgot your password</Text>
      <Text>Or login with</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    background: "linear-gradient(rgba(250, 0, 0, 0.5))",
    alignItems: 'center',
    width: "100%",
    justifyContent: 'space-evenly',
    borderColor: "yellow"
  },

  word: {
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center"
  }
});
