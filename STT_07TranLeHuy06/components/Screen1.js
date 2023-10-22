import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView ,Button,FlatList,header, Alert, ScrollView,} from "react-native";
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function App() {
  const [images, setImages] = useState([]);
  
  return (
   <SafeAreaView style={styles.container}>
      {/* tiêu đề 1 */}
        <View style={{flexDirection:'row',backgroundColor:  '#1BA9FF', padding: 10,width:415,height:45,position:'fixed'}}>
            <Text style={{width: '35.68px',
            height: '12.16px',
            alignItems:'center',
            justifyContent:'center',
            top:10,left:180,color:'white'}}>
                    CHAT
                 </Text>
                 <Image style={styles.itemImg} source={require('../assets/arrow.png')} />
                 <Image style={styles.itemImg1} source={require('../assets/bi_cart.png')} />
            </View> 
            {/* danh sách sản phẩm       */}
            <ScrollView>
            <Image style={styles.itemImg2} source={require('../assets/1.png')} />
            <View style={styles.View1}> 
                <Image style={styles.itemImg3} source={require('../assets/ca_nau_lau.png')}></Image>
                <Text style={{ top:-90,left:100,}} >Ca nấu lẩu,nấu mì mini</Text>
                <Text style={{ top:-90,left:100,color:'red'}}>Shop Devang</Text> 
                <TouchableOpacity style={styles.btnLogin} onPress={()=>Alert.alert()}>
              <Text style={{ color: "white", backgroundColor:'red',fontSize: 20, fontWeight: "bold" }}>
                      CHAT
               </Text>
               </TouchableOpacity>
              </View>
              <View style={styles.View2}>
              <Image style={styles.itemImg3} source={require('../assets/ga_bo_toi.png')}></Image>
                <Text style={{ top:-90,left:100,}} >1KG khô gà bơ tỏi </Text>
                <Text style={{ top:-90,left:100,color:'white'}}> Shop </Text> 
                <Text style={{ top:-108,left:135,color:'red'}}>  LTD FOOD</Text>
                <TouchableOpacity style={styles.btnLogin1} onPress={()=>Alert.alert()}>
              <Text style={{ color: "white", backgroundColor:'red',fontSize: 20, fontWeight: "bold" }}>
                      CHAT  
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.View3}> 
                <Image style={styles.itemImg3} source={require('../assets/xa_can_cau.png')}></Image>
                <Text style={{ top:-90,left:100,}} >Cần cẩu đa năng</Text>
                <Text style={{ top:-90,left:100,color:'white'}}>Shop</Text> 
                <Text style={{ top:-108,left:135,color:'black'}}> Thế giới đồ chơi</Text>
                <TouchableOpacity style={styles.btnLogin1} onPress={()=>Alert.alert()}>    
              <Text style={{ color: "white", backgroundColor:'red',fontSize: 20, fontWeight: "bold" }}>
                      CHAT
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.View4}>
              <Image style={styles.itemImg3} source={require('../assets/do_choi_dang_mo_hinh.png')}></Image>
                <Text style={{ top:-90,left:100,}} >đồ chơi dạng mô hình</Text>
                <Text style={{ top:-90,left:100,color:'white'}}>Shop</Text> 
                <Text style={{ top:-108,left:135,color:'black'}}> Thế giới đồ chơi</Text>
                <TouchableOpacity style={styles.btnLogin1} onPress={()=>Alert.alert()}>    
              <Text style={{ color: "white", backgroundColor:'red',fontSize: 20, fontWeight: "bold" }}>
                      CHAT
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.View5}>
              <Image style={styles.itemImg3} source={require('../assets/lanh_dao_gian_don.png')}></Image>
                <Text style={{ top:-90,left:100,}} >Lãnh đạo đơn giản</Text>
                <Text style={{ top:-90,left:100,color:'white'}}>Shop</Text> 
                <Text style={{ top:-108,left:135,color:'black'}}> Minh Long Book</Text>
                <TouchableOpacity style={styles.btnLogin1} onPress={()=>Alert.alert()}>    
              <Text style={{ color: "white", backgroundColor:'red',fontSize: 20, fontWeight: "bold" }}>
                      CHAT
                </Text>
                </TouchableOpacity>
                <View style={styles.View6}>
                <Image style={styles.itemImg3} source={require('../assets/hieu_long_con_tre.png')}></Image>
                <Text style={{ top:-90,left:100,}} >Hiểu Lòng Con trẻ</Text>
                <Text style={{ top:-90,left:100,color:'white'}}>Shop</Text> 
                <Text style={{ top:-108,left:135,color:'black'}}> Minh Long Book</Text>
                <TouchableOpacity style={styles.btnLogin1} onPress={()=>Alert.alert()}>    
              <Text style={{ color: "white", backgroundColor:'red',fontSize: 20, fontWeight: "bold" }}>
                      CHAT
                </Text>
                </TouchableOpacity>
                </View>
              </View>
              <View style={styles.View7}>
                <Image style={styles.itemImg3} source={require('../assets/trump 1.png')}></Image>
                <Text style={{ top:-90,left:100,}} >Donald Trump</Text>
                <Text style={{ top:-90,left:100,color:'white'}}>Shop</Text> 
                <Text style={{ top:-108,left:135,color:'black'}}> Minh Long Book</Text>
                <TouchableOpacity style={styles.btnLogin1} onPress={()=>Alert.alert()}>    
              <Text style={{ color: "white", backgroundColor:'red',fontSize: 20, fontWeight: "bold" }}>
                      CHAT
                </Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
            {/* tiêu đề 3 */}
            <View style={{flexDirection:'row',backgroundColor:  '#1BA9FF', padding: 10,width:415,height:65,position:'fixed',top:800}}>
            <Image style={{width:40,height:40,top:2,left:170}} source={{uri:'https://img.icons8.com/fluency-systems-regular/48/home--v1.png'}} />
            <Image style={{width:40,height:40,top:2,left:-50}} source={{uri:'https://img.icons8.com/ios-glyphs/30/menu--v1.png'}} />
            <Image style={{width:40,height:40,top:0,left:280}} source={{uri:'https://img.icons8.com/ios/50/u-turn-to-left.png'}} />
          </View>

          <View>

          </View>
    </SafeAreaView>
  )}
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#C4C4C4',
        
    },
    itemImg:{  
        width: 24,
        height: 24,
        top:6,
        left:-40,
        alignItems:'center',
        justifyContent:'center',
    },
    itemImg1:{ 
        width: 24,
        height: 24,
        top:6,
        left:300,
        alignItems:'flex-end',
        justifyContent:'flex-end',
     },
     itemImg2:{
        width: '294px',
        height: '28.54px',
        top:50,
        left:60,
     },
     itemImg3:{
        width: 'null',
        height: '88px',
        top:-10,
        left:-160,
        resizeMode:'contain',
     },
     View1:{
      width: '414px',
      height: '90px',
      backgroundColor: 'white', 
      padding: 10,
      top:70,
      left:0,
     },
     btnLogin: {
      marginTop: 60,
      width: 70,
      height: 45,
      backgroundColor: "red",
      borderRadius: 2,
      alignItems: "center",
      justifyContent: "center",
      top:-170,
      left:300,
    },
    View2:{
      width: '414px',
      height: '90px',
      backgroundColor: 'gray', 
      padding: 10,
      top:90,
      left:0,
     },
     btnLogin1: {
      marginTop: 60,
      width:70,
      height: 45,
      backgroundColor: "red",
      borderRadius: 2,
      alignItems: "center",
      justifyContent: "center",
      top:-190,
      left:300,
    },
    View3:{
      width: '414px',
      height: '90px',
      backgroundColor: 'gray', 
      padding: 10,
      top:110,
      left:0,
    },
    View4:{
      width: '414px',
      height: '90px',
      backgroundColor: 'gray', 
      padding: 10,
      top:130,
    },
    View5:{
      width: '414px',
      height: '90px',
      backgroundColor: 'gray', 
      padding: 10,
      top:150,
    },
    View6:{
      width: '414px',
      height: '90px',
      backgroundColor: 'gray', 
      padding: 10,
      top:-150,
      left:-10,
    },
    View7:{
      width: '414px',
      height: '90px',
      backgroundColor: 'gray', 
      padding: 10,
      top:290,
      left:-10,
    },
   
  })