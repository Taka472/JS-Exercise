import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  CheckBox,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isUpcase, setIsUpcase] = useState(false);
  const [isNumber, setIsNumber] = useState(true);
  const [isSpecialSymbol, setIsSpecialSymbol] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#C4C4C4", "#3B3B98"]}
        start={[0.0, 0.0]}
        end={[1.0, 1.0]}
        style={{ flex: 1 }}
      >
        <View style={styles.viewGlobal}>
          <View style={styles.view1}>
            <Text style={styles.txtView1}>PASSWORD{"\n"}GENERATOR</Text>
          </View>

          <View style={styles.view2}>
            <TextInput style={styles.inputView2} />
          </View>

          <View style={styles.view3}>
            <View style={styles.lineView3}>
              <View style={styles.viewLeft}>
                <Text style={styles.txtLine1View3}>Password length</Text>
              </View>
              <View style={styles.viewRight}>
                <TextInput style={styles.inputLine1View3}></TextInput>
              </View>
            </View>

            <View style={styles.lineView3}>
              <View style={styles.viewLeft}>
                <Text style={styles.txtLine1View3}>
                  Include lower case letters
                </Text>
              </View>
              <View style={styles.viewRight}>
                <CheckBox
                  value={isLowerCase}
                  onValueChange={setIsLowerCase}
                  style={styles.checkBox}
                />
              </View>
            </View>
            <View style={styles.lineView3}>
              <View style={styles.viewLeft}>
                <Text style={styles.txtLine1View3}>Include upcase letters</Text>{" "}
              </View>
              <View style={styles.viewRight}>
                <CheckBox
                  value={isUpcase}
                  onValueChange={setIsUpcase}
                  style={styles.checkBox}
                />{" "}
              </View>
            </View>
            <View style={styles.lineView3}>
              <View style={styles.viewLeft}>
                <Text style={styles.txtLine1View3}>Include number</Text>
              </View>
              <View style={styles.viewRight}>
                <CheckBox
                  value={isNumber}
                  onValueChange={setIsNumber}
                  style={styles.checkBox}
                />
              </View>
            </View>
            <View style={styles.lineView3}>
              <View style={styles.viewLeft}>
                <Text style={styles.txtLine1View3}>Include special symbol</Text>
              </View>
              <View style={styles.viewRight}>
                <CheckBox
                  value={isSpecialSymbol}
                  onValueChange={setIsSpecialSymbol}
                  style={styles.checkBox}
                />
              </View>
            </View>
          </View>

          <View style={styles.view4}>
              <Button title="GENERATE PASSWORD " color={'#3B3B98'}  />
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
  },
  viewGlobal: {
    flex: 1,
    margin: 20,
    backgroundColor: "#23235B",
    borderRadius: 10,
  },

  view1: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  txtView1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },

  view2: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  inputView2: {
    width: "100%",
    height: "100%",
    backgroundColor: "#151537",
  },

  view3: {
    flex: 0.6,
    justifyContent: "space-around",
    margin: 20,

  },
  lineView3: {
    flex: 0.1,
    flexDirection: "row",

  },
  txtLine1View3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    justifyContent: "flex-start",
  },
  inputLine1View3: {
    marginLeft: 10,
    backgroundColor: "white",
    width: 118,
    textAlign: "right",
    height: "100%",
  },
  checkBox: {
    marginLeft: 20,
    height: "100%",
    width: 30,
  },
  viewRight: {
    flex: 0.1,
    alignItems: "flex-end",
  },
  viewLeft: {
    flex: 0.9,
    alignItems: "flex-start",
  },

  view4:{
    flex:0.1,
    justifyContent:"center",  
    margin:25,
  }
});
