import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function Screen1({navigation,route}) {
  const price = 1.79;
  const numstars = 5;
  const starImage = require("../assets/star.png");
  
  const selectedImage = route.params ? route.params.image : require("../assets/vs_blue.png");

  const navigateToScreen2 = () => {
    navigation.navigate("2", { image: selectedImage });
  };
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          source={selectedImage}
          style={{ width: 450, height: 300 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.view2}>
        <Text style={{fontSize:17}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
       

        <View style={{ flexDirection: "row", alignItems: "center"}}>
          <View style={{ flexDirection: "row", marginRight: 5 }}>
            {[...Array(numstars)].map((_, index) => (
              <Image
                key={index}
                source={starImage}
                style={{ width: 24, height: 25 }}
              />
            ))}
          </View>
          <View style={{ marginLeft: 30 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: "18px" }}>(Xem 828 đánh giá)</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {price.toFixed(3)}.000 đ
            </Text>
          </View>
          <View style={{ marginLeft: 50 }}>
            <Text
              style={{
                fontSize: 17,
                textDecorationLine: "line-through",
                color: "darkgray",
                textDecorationColor: "black",
              }}
            >
              {price.toFixed(3)}.000 đ
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{color:'red', fontSize:12, fontWeight:'bold'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text> 
          <FontAwesome name="question-circle-o" size={20} style={{marginLeft:10}} />
        </View>

      </View>
      <View style={styles.view3}>
        <TouchableOpacity onPress={navigateToScreen2}>
          <View style={styles.view3SelectColor}>
            <View>
              <Text style={{fontSize:15}}>4 MÀU-CHỌN MÀU </Text>
            </View>
            <View style={{alignItems:'flex-end'}}>
              <FontAwesome name="angle-right" size={20} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex:1}}></View>
      <View style={styles.view4}>
      <TouchableOpacity>
          <View style={styles.buttonView4}>
            <Text style={{fontSize:20, color:"white"}}>CHỌN MUA</Text>
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
    backgroundColor: "#fff",
  },
  view1: {
    flex: 5,
    alignItems: "center",
  },
  view2: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 25,
    marginRight: 25,
  },
  view3: {
    flex:1,
    alignItems:'center',
    marginLeft: 25,
    marginRight: 25,
  },
  view3SelectColor:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#C4C4C4',
    borderRadius:15,
    width:340,
    height:34,
    marginTop: "15px"
  },
  view4:{
    flex:1,
    alignItems:'center',
    marginLeft: 25,
    marginRight: 25,
  },
  buttonView4:{
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:"red",
    borderRadius:5,
    width:340,
    height:44
  }
});
