import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const numStars = 5; // Số lượng hình ảnh
  const starImage = require("./assets/star.png"); // Đường dẫn

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={{ margin: 5 }}>
          <Image
            source={require("./assets/usb.jpg")}
            style={{ width: 100, height: 100 }}
          ></Image>
        </View>

        <View style={styles.textView1}>
          <Text style={{ fontWeight: "bold" }}>
            USB Bluetooth Music Receiver{"\n"}HJX-001-Biến loa thường thành loa
            {"\n"}bluetooh
          </Text>
        </View>
      </View>

      <View style={styles.view2}>
        <h2>Cực kì hài lòng</h2>
      </View>
      <View style={styles.viewStar}>
        {[...Array(numStars)].map((_, index) => (
          <Image
            key={index}
            source={starImage}
            style={{ width: 40, height: 40, margin: 10 }}
          />
        ))}
      </View>

      <View style={styles.view3}>
        <TouchableOpacity>
          <View style={styles.viewTouch}>
            <FontAwesome name="camera" size={50} />
            <Text style={{ fontWeight: "bold", fontSize: 28 }}>
              Thêm hình ảnh
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.view4}>
        <View style={styles.inputview4}>
          <TextInput
            multiline={true} // Cho phép nhập nhiều dòng
            placeholder="Hãy chia sẽ những điều mà  bạn thích về sản phẩm"
            placeholderTextColor={"gray"}
            style={{ flex: 1 ,padding: 10,fontSize:20}}
          ></TextInput>
        </View>
        <View style={styles.textview4}>
          <TouchableOpacity>
            <Text style={{fontWeight:"bold"}}>https://meet.google.com/nsj-ojwi-xpp</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.view5}>
        <View style={styles.buttonview5}>
        <Button title="Gửi"></Button>
        </View>
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  view1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  view2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  view3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "blue",
    margin: 20,
    borderRadius: 5,
  },
  view4: {
    flex: 3,
    margin: 20,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
  },
  view5: {
    flex: 1,
  },
  viewStar: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  viewTouch: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inputview4: {
    flex: 9,
  },
  textview4: {
    flex: 1,
    alignItems: "flex-end",
    // textDecorationLine: "underline",
    // textDecorationColor: "blue",
    padding:5
  },
  buttonview5:{
    flex:1,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    margin:20,
    backgroundColor:'#007bff'
  }
});
