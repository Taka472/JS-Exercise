import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export default function App({navigation, route}) {
  const [data, setData] = useState([])

  useEffect(() => {
      fetch("https://653f489e9e8bd3be29e02887.mockapi.io/account/" + route.params + "/note")
        .then((response) => response.json())
        .then((json) => setData(json))
  }, [])

  const Item = ({item}) => (
    <TouchableOpacity>
        <View></View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text>Screen 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    gap: 50
  },

  input2: {
    marginLeft: 10,
    width: 270,
    height: 50,
  },

  viewInput2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    width: 320,
    height: 50,
  },
});
