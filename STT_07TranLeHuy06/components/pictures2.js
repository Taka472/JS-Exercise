import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView ,Button,FlatList,header, Alert, ScrollView,} from "react-native";
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Entypo} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
export default function App(props) {
  const { count } = props;
  // tao mảng
  const DATA = [
    {
      id: 1,
      img: "giacchuyen 1.png",
    },
    {
      id: 2,
      img: "daynguon 1.png",
    },
    {
      id: 3,
      img: "dauchuyendoipsps2 1.png",
    },
    {
      id: 4,
      img: "dauchuyendoi 1.png",
    },
    {
      id: 5,
      img: "carbusbtops2 1.png",
    },
    { id: 6, img: "daucam 1.png" },
  ];
  // tạo item
  const Item = ({ obj}) => (
    <TouchableOpacity>
    <View style={styles.items}>
    <View style={styles.item}>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={require(`../assets/${obj.img}`)}
      ></Image>
      <Text>Cáp chuyển từ Cổng{"\n"} USB sang PS2...</Text>
      <Image
        style={{ width: 106, height: 13 }}
        resizeMode="contain"
        source={require("../assets/Group 4.png")}
      ></Image>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 12, fontWeight: 700 }}>69.900 đ</Text>
        <Text
          style={{
            color: "rgba(150, 157, 170, 1)",
            fontSize: 12,
            paddingLeft: 35,
          }}
        >
          -39%
        </Text>
      </View>
    </View>
  </View>
  </TouchableOpacity>
  );
  return (
        <SafeAreaView >
          {/* tiêu đề 1 */}
         <View style={{flexDirection:'row',backgroundColor:  '#1BA9FF', padding: 10,width:415,height:45,position:'fixed'}}>
            <Text style={{width: '35.68px',
            height: '12.16px',
            alignItems:'center',
            justifyContent:'center',
            top:10,left:180,color:'white'}}>
                    <TouchableOpacity>
                    <Text style={{ width: '192px',height: '30px', backgroundColor: 'white', padding:10,top:-10 ,left:-100 ,}} >
                    <Text style={{width: '35.68px',color:'black',top:-10}}>        Dây chuyển USB</Text>
                    <Image style={styles.itemImg2} source={require('../assets/search.png')} />  
                     </Text>
                    </TouchableOpacity>
                    <View style={{borderWidth: 1,borderRadius: 45,height: 20,width: 20,top: -45,left: 143,backgroundColor:'red'}}></View>
                 </Text>
                 <Image style={styles.itemImg} source={require('../assets/arrow.png')} />
                 <Image style={styles.itemImg1} source={require('../assets/bi_cart.png')} />
                 <Image style={styles.itemImg3} source={require('../assets/3cham.png')} />
            </View> 
            {/* định dạng danh sách sản phẩm */}
            <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({ item }) => <Item obj={item}></Item>}
          keyExtractor={(item) => item.id}
        ></FlatList>
        {/* tiêu đề 2 */}
            <View style={{flexDirection:'row',backgroundColor:  '#1BA9FF', padding: 10,width:415,height:65,position:'fixed',top:800}}>
            <Image style={{width:40,height:40,top:2,left:170}} source={{uri:'https://img.icons8.com/fluency-systems-regular/48/home--v1.png'}} />
            <Image style={{width:40,height:40,top:2,left:-50}} source={{uri:'https://img.icons8.com/ios-glyphs/30/menu--v1.png'}} />
            <Image style={{width:40,height:40,top:0,left:280}} source={{uri:'https://img.icons8.com/ios/50/u-turn-to-left.png'}} />
            </View>
        </SafeAreaView>
        
  )}
  const styles = StyleSheet.create({
    container:{
      flex:1,
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
      left:250,
      alignItems:'center',
      justifyContent:'center',
   },
   itemImg2:{
    width: 24,
    height: 24,
    top:-8,
    left:-130,
    alignItems:'center',
    justifyContent:'center',
   },
   itemImg3:{
    width: '30%',
    height: '30%',
    top:10,
    left:230,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    resizeMode:'contain',
   },
   item: {
    margin: 10,
  },
  items: {
    width: 200,
    height: 250,
    flexDirection: "row",
    justifyContent: "center",
    left: 10,
  },
  img:{
    width: 155,
    height: "90%",
  },
   Image:{
    width: 120,
    height:"90%",
   },  
  })