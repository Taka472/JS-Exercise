import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import EventHandle from '../EventHandle'

export default function App() {
    const [data, setData] = useState([]);

    const [id, setID] = useState('');
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
    const [role, setRole] = useState('');

    const [del, setDel] = useState('');

    useEffect (() => {
        fetch ('https://653f489e9e8bd3be29e02887.mockapi.io/user')
            .then((res) => res.json())
            .then((json) => setData(json));
    }, [])

    const add = () => {
        data.push({
            ID: id,
            username: username,
            password: password,
            role: role,
        })
    }

    const Del = () => {
        data.pop();
    }

    const post = () => {
    
     fetch('https://653f489e9e8bd3be29e02887.mockapi.io/user', {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({
            id: id,
            username: username,
            password: password,
            role: role,
        })
    })
    }   

    const Item = ({a}) => (
        <View style={{marginLeft: 10, flex: 1, marginTop: 10}}>
            <Text>ID: {a.id}</Text>
            <Text>Username: {a.username}</Text>
            <Text>Password: {a.password}</Text>
            <Text>Role: {a.role}</Text>
        </View>
    )
    
    return (
        <View>
            <FlatList 
                data={data}
                renderItem={({item}) => <Item a={item}></Item>}
                keyExtractor={(item) => item.id}
            />
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'flex-start', justifyContent: 'center', gap: 10}}>
        <Text>ID: 
            <TextInput style={{width: 300, height: 40, borderWidth: 1, padding: 10, marginLeft: 50}}
                onChangeText={setID}
            ></TextInput>
        </Text>
        <Text>Username: 
            <TextInput style={{width: 300, height: 40, borderWidth: 1, padding: 10, marginLeft: 2}}
                onChangeText={setUser}
            ></TextInput>
        </Text>
        <Text>Password:  
            <TextInput style={{width: 300, height: 40, borderWidth: 1, padding: 10, marginLeft: 6}}
                onChangeText={setPass}
            ></TextInput>
        </Text>
        <Text>Role: 
            <TextInput style={{width: 300, height: 40, borderWidth: 1, padding: 10, marginLeft: 38}}
                onChangeText={setRole}
            ></TextInput>
        </Text>
        <TouchableOpacity onPress={add} style={{marginLeft: 150}}>
            <View style={{ backgroundColor: 'green', width: 100, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Add</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Del} style={{marginLeft: 150}}>
            <View style={{ backgroundColor: 'red', width: 100, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Remove last element</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={post} style={{marginLeft: 150}}>
            <View style={{ backgroundColor: 'red', width: 100, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Post on API</Text>
            </View>
        </TouchableOpacity>
    </View>
        </View>
    )
}