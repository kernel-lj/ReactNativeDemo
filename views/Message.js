/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Message extends Component<{}> {
    static navigationOptions = {
        headerTitle: '消息1',
        tabBarLabel: '消息',
        // tabBarIcon:<Image source={require("../img/btn_chat_normal.png")} style={{height:30,width:30}}></Image>,

        tabBarIcon: ({tintColor,focused}) => (
            focused
                ?
                <Image
                    source={require("../img/btn_chat_selected.png")}
                    style={{width:30,height:30}}
                />
                :
                <Image
                    source={require("../img/btn_chat_normal.png")}
                    style={{width:30,height:30}}
                />
        ),
    };

  render() {
      const { navigate } = this.props.navigation;

      return (
      <View style={styles.container}>

      </View>
    );
  }
}

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

