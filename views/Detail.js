/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

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

export default class Detail extends Component<{}> {
  // 接收上一个页面传过来的title显示出来
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    // headerBackTitle:'返回',  //导航栏返回按钮文字
    // headerBackTitleStyle:{backgroundColor:'red',color:'white'}, //返回按钮样式设置
  });

  // 点击返回上一页方法
  backVC=() => {
    // 返回首页方法
    this.props.navigation.goBack();
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={
            {
              height: 40,
              backgroundColor: 'green',
              justifyContent: 'center',
            }
          }
          onPress={() => { this.backVC(); }}
        >
          <Text>{this.props.navigation.state.params.des}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

