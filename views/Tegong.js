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
  TouchableOpacity
} from 'react-native';

import {StackNavigator, TabBarBottom, TabNavigator} from "react-navigation"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Tegong extends Component<{}> {
    static navigationOptions = {
        headerTitle: '特工1',
        tabBarLabel: '特工',

        tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
    };

  render() {
      const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
        <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                          onPress={() => navigate('DetailVC', { title: '详情',des:'我是返回点击我' })} >
           <Text>点击进详情页</Text>
        </TouchableOpacity>
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

