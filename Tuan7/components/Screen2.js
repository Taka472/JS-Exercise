import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App({navigation}) {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://653f489e9e8bd3be29e02887.mockapi.io/screen2")
        .then((response) => response.json())
        .then((json) => setData(json))
    }, [])
      
    const navigateToScreen3 = () => {
      navigation.navigate("3")
    }

    const Status = (stat) => {
        if (stat) return (
        <View style={{flexDirection: 'row'}}>
            <Image source={require("../assets/tick.png")} style={{width: 15, height: 15}}></Image>
            <Text style={{color: "green"}}> Accepting Order</Text>
        </View>)
        else return (
        <View style={{flexDirection: 'row'}}>
            <Image source={require("../assets/lock.png")} style={{width: 15, height: 15}}></Image>
            <Text style={{color: "red"}}> Temporary Unavailable</Text>
        </View>)
    }

    const Compo = ({a}) => (
      <View style={{gap: 5, marginTop: 20}}>
        <TouchableOpacity onPress={navigateToScreen3}>
            <Image source={{uri: a.image}} style={{width: 300, height: 100}}></Image>
            <View style={{flexDirection: 'row', gap: 10}}>
                {Status(a.status)}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:"space-between"}}>
                    <Image source={require("../assets/clock.png")} style={{width: 15, height: 15}}></Image>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>{a.time}</Text>
                        <Image source={require("../assets/location.png")} style={{width: 12, height: 12}}></Image>
                    </View>
                </View>
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{a.name}</Text>
            <Text>{a.address}</Text>
        </TouchableOpacity>
      </View>
    )

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Shops near me     </Text>
                <Image source={require("../assets/search.png")} style={{width: 30, height: 30}}></Image>
            </View>
            <FlatList
            data={data}
            renderItem={({item}) => <Compo a={item}></Compo>}
            keyRender={(item) => item.id}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});