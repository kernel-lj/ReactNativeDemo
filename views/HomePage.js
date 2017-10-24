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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomePage extends Component<{}> {

    static navigationOptions = {
        headerTitle: '首页1',//对页面的配置
        tabBarLabel: '首页',
        headerBackTitle:'返回',
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
    backgroundColor: 'red',
  },
});
