import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();


export default function Screen2({ navigation,route }) {
  const [image, setImage] = useState(route.params ? route.params.image : require("../assets/vs_blue.png"));

  const navigateToScreen1 = () => {
    navigation.navigate("1", { image });
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={image} style={{ width: 112, height: 132 ,resizeMode: "contain"}} />
        <Text style={{ fontSize: 15 }}>
          Điện Thoại Vsmart Joy 3{"\n"}
          Hàng chính hãng
        </Text>
      </View>
      <View style={styles.view2}>
        <Text style={{ fontSize: 18 }}>Chọn một màu bên dưới:</Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => setImage(require("../assets/vs_silver.png"))}
          >
            <View style={[styles.viewColor, { backgroundColor: "#C5F1FB" }]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setImage(require("../assets/vs_red.png"))}
          >
            <View style={[styles.viewColor, { backgroundColor: "#F30D0D" }]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setImage(require("../assets/vs_black.png"))}
          >
            <View style={[styles.viewColor, { backgroundColor: "black" }]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setImage(require("../assets/vs_blue.png"))}
          >
            <View style={[styles.viewColor, { backgroundColor: "#234896" }]} />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={navigateToScreen1}>
            <View style={styles.buttonView}>
              <Text style={{color: "white"}}>XONG</Text>
            </View>
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
    flex: 2,
    flexDirection: "row",
    margin: 10,
  },
  view2: {
    flex: 8,
    backgroundColor: "#C4C4C4",
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-around",
  },
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1952E2",
    borderWidth: 1,
    borderColor: "#CA1536",
    borderRadius: 10,
    width: 326,
    height: 44,
  },
  viewColor: {
    width: 85,
    height: 80,
    marginTop: 20,
  },
});
