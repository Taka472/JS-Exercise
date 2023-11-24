import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { add, remove } from './action'
import { store } from './store'
import { useState } from 'react';

const EventHandle = ({}) => (
    <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 10
    }}>
        <Text>ID:
            <TextInput style={{width: 300, height: 40, borderWidth: 1, padding: 10, marginLeft: 50}}></TextInput>
        </Text>
        <Text>Username: 
            <TextInput style={{width: 300, height: 40, borderWidth: 1, padding: 10, marginLeft: 2}}></TextInput>
        </Text>
        <Text>Password:  
            <TextInput style={{width: 300, height: 40, borderWidth: 1, padding: 10, marginLeft: 6}}></TextInput>
        </Text>
        <Text>Role: 
            <TextInput style={{width: 300, height: 40, borderWidth: 1, padding: 10, marginLeft: 38}}></TextInput>
        </Text>
        <TouchableOpacity onPress={() => { store.dispatch(add) }} style={{marginLeft: 150}}>
            <View style={{ backgroundColor: 'green', width: 100, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Add</Text>
            </View>
        </TouchableOpacity>
        <Text>ID: 
            <TextInput style={{width: 300, height: 40, borderWidth: 1, padding: 10, marginLeft: 48}}></TextInput>
        </Text>
        <TouchableOpacity onPress={() => { store.dispatch(remove) }} style={{marginLeft: 150}}>
            <View style={{ backgroundColor: 'red', width: 100, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Remove</Text>
            </View>
        </TouchableOpacity>
    </View>
)

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return;
}

//export default Counter
export default connect(mapStateToProps, null)(EventHandle)