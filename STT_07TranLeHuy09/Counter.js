import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { increase, decrease } from './components/actions'
import { store } from './components/store'
import { useState } from 'react';

const Counter = ({ count }) => (
    <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    }}>
        <Text>{count}</Text>
        <TouchableOpacity onPress={() => { store.dispatch(increase); setCount(store.getState().count) }}>
            <View style={{ backgroundColor: 'green', width: 100, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Increase</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { store.dispatch(decrease); setCount(store.getState().count) }}>
            <View style={{ backgroundColor: 'red', width: 100, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Descrease</Text>
            </View>
        </TouchableOpacity>
    </View>
)

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = (dispatch) => {
    return;
}

//export default Counter
export default connect(mapStateToProps, null)(Counter)