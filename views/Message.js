/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { observable, autorun } from 'mobx';

import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



export default class Message extends Component<{}> {
  static navigationOptions = {
    headerTitle: '消息1',
    tabBarLabel: '消息', // tabBarIcon:<Image source={require("../img/btn_chat_normal.png")} style={{height:30,width:30}}></Image>,

    tabBarIcon: ({ focused }) => (
      focused
        ? <Image
          // eslint-disable-next-line global-require
          source={require('../img/btn_chat_selected.png')}
          style={{ width: 30, height: 30 }}
        />
        :
        <Image
          // eslint-disable-next-line global-require
          source={require('../img/btn_chat_normal.png')}
          style={{ width: 30, height: 30 }}
        />
    ),
  };

  render() {
    return (
      <View style={styles.container} />
      // </View>
    );
  }
}

