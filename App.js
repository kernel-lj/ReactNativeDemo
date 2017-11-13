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
  View
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import HomePageVC from './views/HomePage';
import TegongVC from './views/Tegong';
import MessageVC from './views/Message';
import MyVC from './views/My';
import DetailVC from './views/Detail';

// 通过TabNavigator做路由映射
const MainScreentNavigator=TabNavigator({
  HomePageVC:{screen:HomePageVC},
  TegongVC:{screen:TegongVC},
  MessageVC:{screen:MessageVC},
  MyVC:{screen:MyVC},
});

// 引入要用到的跳转页面
const  MyNavigatior = StackNavigator({
  Main:{screen:MainScreentNavigator},
  DetailVC:{screen:DetailVC},
});


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        {/*{<MyNavigatior/>}*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
