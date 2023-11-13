import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStore } from 'redux';
import { increase, decrease } from './components/actions'
import { store } from './components/store'
import Counter from './Counter'
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Counter />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
});
