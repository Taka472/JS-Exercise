import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export default function App({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const navigateToScreen2 = () => {
    navigation.navigate("2");
  }

  useEffect(() => {
    fetch("https://653f489e9e8bd3be29e02887.mockapi.io/account", {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((json) => setData(json));
  }, [])

  const logIn = () => {
    data.forEach((item) => {
      if (item.username == username && item.password == password)
        navigation.navigate("3", item.id);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>My notebook</Text>
      <View style={{width: 320, height: 120, gap: 20, marginTop: 40}}>
          <View style={styles.viewInput2}>
            <TextInput
              style={styles.input2}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            ></TextInput>
          </View>
          <View style={styles.viewInput2}>
            <TextInput
              style={styles.input2}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
            ></TextInput>
          </View>
      </View>
      <TouchableOpacity style={{width: 300, height: 50, backgroundColor: "#33DAFF"}} onPress={navigateToScreen2}>
        <View style={{justifyContent: "center", alignItems: 'center', height: 50}}>
          <Text style={{color: "white", fontSize: 20, fontWeight: 'bold'}}>Đăng ký</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{width: 300, height: 50, backgroundColor: "red"}} onPress={logIn}>
        <View style={{justifyContent: "center", alignItems: 'center', height: 50}}>
          <Text style={{color: "white", fontSize: 20, fontWeight: 'bold'}}>Đăng nhập</Text>
        </View>
      </TouchableOpacity>
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