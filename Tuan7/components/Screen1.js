import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://653f489e9e8bd3be29e02887.mockapi.io/screen1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
  }, [])
    
  const navigateToScreen2 = () => {
    navigation.navigate("2")
  }

  const Compo = ({a}) => (
    <View style={{marginTop: 40}}>
      <Image source={{uri: a.image}} style={{width: 300, height: 100}}></Image>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={{marginTop: 50}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Welcome to Cafe World</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <Compo a={item}></Compo>}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <TouchableOpacity onPress={navigateToScreen2}>
        <View style={{backgroundColor: "#00BDD6", width: 300, height: 50, marginBottom: 50, justifyContent: "center", alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: "bold"}}>GET STARTED</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});