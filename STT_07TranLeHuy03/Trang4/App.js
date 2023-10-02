import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        locations={[0, 0.5, 0.8, 0.95, 1]}
        style={{ flex: 1 }}
      >
        <View style={styles.view1}>
          <Text style={styles.textView1}>CODE</Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.textView2}>VERIFFICATION</Text>
        </View>

        <View style={styles.view3}>
          <Text style={styles.textView3}>Enter ontime password sent on</Text>
          <Text style={styles.textView3}>++849092605798</Text>
        </View>

        <View style={styles.view4}>
          <View style={styles.viewOtp}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                value={digit}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={(value) => handleOtpChange(index, value)}
              />
            ))}
          </View>
          <View style={styles.viewTouch}>
            <TouchableOpacity>
              <View style={styles.viewTextTouch}>
                <Text style={styles.textTouch}>VERIFY CODE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view1: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    flex: 1,
    alignItems: "center",
  },
  view3: {
    flex: 1,
    alignItems: "center",
    marginTop: "25px",
  },
  view4: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
  },
  viewOtp: {
    flexDirection: "row",
  },
  viewTouch: {
    backgroundColor: "yellow",
    width: "320px",
    height: "50px",
    borderRadius: "5px",
    marginTop: "50px",
  },
  viewTextTouch: {
    alignItems: "center",
    marginTop: "10px",
  },
  textView1: {
    fontWeight: "bold",
    fontSize: "55px",
  },
  textView2: {
    fontWeight: "bold",
    fontSize: "25px",
  },
  textView3: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  textTouch: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  otpInput: {
    width: 45,
    height: 45,
    margin: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
  },
});
