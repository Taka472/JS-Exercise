import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (text) => {
    setUsername(text);
  };

  const handlePassWordChange = (text) => {
    setPassword(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          source={require("./assets/eyeball.jpg")}
          style={{ width: 100, height: 100 }}
        ></Image>
      </View>

      <View style={styles.view2}>
        <View style={styles.view2Input}>
          <View style={styles.viewInput1}>
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2012/04/01/18/22/user-23874_640.png",
              }}
              style={{ marginLeft: 5, width: 30, height: 47 }}
            ></Image>
            <TextInput
              style={styles.input1}
              placeholder="Please input user name"
              value={username}
              onChangeText={handleUserNameChange}
            />
          </View>

          <View style={styles.viewInput2}>
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2013/07/12/15/53/locked-150501_640.png",
              }}
              style={{ marginLeft: 5, width: 30, height: 45 }}
            ></Image>
            <TextInput
              style={styles.input2}
              placeholder="Please input password"
              value={password}
              secureTextEntry={true}
              onChangeText={handlePassWordChange}
            />
          </View>
        </View>
      </View>

      <View style={styles.view3}>
        <TouchableOpacity style={styles.touch}>
          <View style={styles.viewTouch}>
            <Text style={styles.textTouch}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.view4}>
        <Text>Register</Text>
        <Text>Forgot Password</Text>
      </View>

      <View style={styles.view5}>
        <Text style={styles.line} />
        <Text>Other Login Methods</Text>
        <Text style={styles.line} />
      </View>

      <View style={styles.view6}>
        <View style={styles.iconView6}>
          <TouchableOpacity
            style={[styles.iconView6, { backgroundColor: "#00FFFF" }]}
          >
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517430_640.png",
              }}
              style={{ width: 69, height: 69, marginBottom: 5 }}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={[styles.iconView6, { backgroundColor: "#FFA500" }]}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <FontAwesome name="wifi" size={50} color="white"></FontAwesome>
          </TouchableOpacity>
        </View>

        <View style={[styles.iconView6, { backgroundColor: "blue" }]}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <FontAwesome
              name="facebook-f"
              size={50}
              color="white"
            ></FontAwesome>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  view2: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 50,
  },
  view3: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 70,
  },
  view4: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "flex-start",
    marginBottom: 10,
  },
  view5: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  view6: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 50,
  },
  textView1: {
    fontWeight: "bold",
    fontSize: 40,
  },
  view2Input:{
    flex:1,
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center"
  },
  input1: {
    width: 320,
    height: 50,
    marginLeft: 10,
  },
  viewInput1: {
    flexDirection: "row",
    alignItems: "center",
    width: 320,
    height: 50,
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 30,
  },
  input2: {
    marginLeft: 10,
    width: 270,
    height: 50,
  },
  viewInput2: {
    flexDirection: "row",
    alignItems: "center",
    width: 320,
    height: 50,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  touch: {
    marginTop: 80,
    width: 320,
    height: 45,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  viewTouch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTouch: {
    fontWeight: "bold",
    color: "white",
  },
  line: {
    width: 90, // Độ dày của đường thẳng
    height: 2, // Chiều cao của đường thẳng
    backgroundColor: "blue", // Màu sắc của đường thẳng
  },
  iconView6: {
    borderRadius: 5,
    width: 70,
    height: 70,
  },
  touchableOpacity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
