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
        <Text style={styles.textView1}>LOGIN</Text>
      </View>

      <View style={styles.view2}>
        <View style={styles.view2Input}>
          <View style={styles.viewInput1}>
            <TextInput
              style={styles.input1}
              placeholder="Email"
              value={username}
              onChangeText={handleUserNameChange}
            />
          </View>

          <View style={styles.viewInput2}>
            <TextInput
              style={styles.input2}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={handlePassWordChange}
            />
            <TouchableOpacity>
              <FontAwesome name="eye" size={50} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.view3}>
        <TouchableOpacity style={styles.touch}>
          <View style={styles.viewTouch}>
            <Text style={styles.textTouch}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.text1View3}>
          When you agree to term and conditions
        </Text>
        <Text style={styles.text2View3}>For got your password?</Text>
        <Text style={styles.text1View3}>Or login with</Text>
      </View>

      <View style={styles.view4}>
        <TouchableOpacity style={styles.touchView4}>
          <View style={[styles.fontAwesome1, { backgroundColor: "blue" }]}>
            <FontAwesome name="facebook" size={50} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.touchView4, { backgroundColor: "#00BFFF" }]}
        >
          <View style={styles.fontAwesome1}>
            <Text style={{ color: "white", fontSize: 50, fontWeight: "bold" }}>
              {" "}
              Z
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.touchView4,
            { borderWidth: 1, borderColor: "#00BFFF" },
          ]}
        >
          <View style={styles.fontAwesome1}>
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png",
              }}
              style={{ width: 50, height: 50 }}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0FFFF",
  },
  view1: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  view3: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
  },
  view4: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "flex-start",
    marginBottom: 60,
  },

  view2Input:{
    flex:1,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-around"
  },

  textView1: {
    fontWeight: "bold",
    fontSize: 40,
  },
  input1: {
    backgroundColor: "#D3D3D3",
    width: 320,
    height: 50,
    marginLeft: 10,
  },
  viewInput1: {
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    width: 320,
    height: 50,
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
  touch: {
    marginTop: 25,
    width: 320,
    height: 45,
    backgroundColor: "red",
    borderRadius: 5,
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
  text1View3: {
    margin: 10,
  },
  text2View3: {
    color: "#5D25FA",
    margin: 10,
  },
  touchView4: {
    width: 120,
    borderRadius: 5,
  },
  fontAwesome1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
