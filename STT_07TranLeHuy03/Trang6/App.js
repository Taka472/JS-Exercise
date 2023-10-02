import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };
  const handlePhoneChange = (text) => {
    setPhone(text);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleBirthdayChange = (text) => {
    setBirthday(text);
  };

  const [checked, setChecked] = useState("Male");

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.txtView1}>REGISTER</Text>
      </View>

      <View style={styles.view2}>
        <View style={styles.viewInput1}>
          <TextInput
            style={styles.input1}
            placeholder="Name"
            value={name}
            onChangeText={handleNameChange}
          />
        </View>

        <View style={styles.viewInput1}>
          <TextInput
            style={styles.input1}
            placeholder="Phone"
            keyboardType="numeric"
            value={phone}
            onChangeText={handlePhoneChange}
          />
        </View>

        <View style={styles.viewInput1}>
          <TextInput
            style={styles.input1}
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>

        <View style={styles.viewInput2}>
          <TextInput
            style={styles.input2}
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
          />
          <TouchableOpacity>
            <FontAwesome name="eye" size={50} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.viewInput1}>
          <TextInput
            style={styles.input1}
            placeholder="Birthday"
            value={birthday}
            onChangeText={handleBirthdayChange}
          />
        </View>

        <View style={styles.viewRadioButton}>
          <RadioButton.Group
            onValueChange={(value) => setChecked(value)}
            value={checked}
          >
            <View style={styles.rdbuttonView}>
              <RadioButton value="Male"></RadioButton>
              <Text>Male</Text>
            </View>
            <View style={styles.rdbuttonView}>
              <RadioButton value="Female"></RadioButton>
              <Text>Female</Text>
            </View>
          </RadioButton.Group>
        </View>
      </View>

      <View style={styles.view3}>
      <TouchableOpacity style={styles.touch}>
          <View style={styles.viewTouch}>
            <Text style={styles.textTouch}>REGISTER</Text>
          </View>
        </TouchableOpacity>
        <Text style={{margin:10}}>
          When you agree to term and conditions
        </Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    flex: 6,
    justifyContent: "space-around",
    alignItems: "center",
  },
  view3: {
    flex: 2,
    alignItems:"center",
    marginBottom:10
  },
  txtView1: {
    fontSize: 40,
    fontWeight: "bold",
  },
  viewInput1: {
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    width: 320,
    height: 50,
  },
  input1: {
    backgroundColor: "#D3D3D3",
    width: 320,
    height: 50,
    marginLeft: 10,
  },
  viewInput2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    width: 320,
    height: 50,
  },
  input2: {
    backgroundColor: "#D3D3D3",
    width: 320,
    height: 50,
    marginLeft: 10,
  },
  viewRadioButton: {
    flexDirection: "row",
  },
  rdbuttonView: {
    flexDirection: "row",
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
  touch: {
    marginTop: 25,
    width: 320,
    height: 45,
    backgroundColor: "red",
    borderRadius: 5,
  },

});
