import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-web';

export default function App({navigation, route}) {
  const [DATA, setData] = useState([])

  const navigateToScreen4 = (id) => {
    console.log(id);
  }

  useEffect(() => {
      fetch("https://653f489e9e8bd3be29e02887.mockapi.io/account/" + route.params + "/note")
        .then((response) => response.json())
        .then((json) => setData(json))
  }, [])

  const Item = ({items}) => (
    <TouchableOpacity onPress={(navigateToScreen4(items.id))}>
        <View style={{width: 130, height: 130, borderWidth: 1, margin: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
          <Text>{items.header}</Text>
        </View>
    </TouchableOpacity>
  )  

  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to your notebook</Text>
      </View>
      <ScrollView>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({item}) => <Item items={item}></Item>}
          keyRender={(item) => item.id}
        ></FlatList>
      </ScrollView>
      <View>
        <TouchableOpacity>
          <View style={{backgroundColor: 'red', width: 50, height: 50, marginBottom: 20, borderRadius: '50%', justifyContent: 'center', alignItems: 'center', marginLeft: 300}}>
            <Text style={{fontSize: 30, color: 'white', paddingBottom: 8}}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    gap: 50
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
});
