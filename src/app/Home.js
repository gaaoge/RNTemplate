import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class Main extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../resource/assets/logo.png')} style={styles.logo}/>
        <Text style={styles.title}>Hello React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold'
  }
});