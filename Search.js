import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
 
export default class HomeActivity extends Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.textStyle}>
          Hidden Navigation Bar in React Native.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
});