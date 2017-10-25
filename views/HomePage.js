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
  TouchableOpacity,
    Image,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomePage extends Component<{}> {

    static navigationOptions = {
        headerTitle: '首页1',//导航栏文字
        headerBackTitle:'返回',  //导航栏返回按钮文字
        headerBackTitleStyle:{backgroundColor:'red'},
        // header:null, //隐藏导航栏
        headerLeft:<Text>左边Header</Text>, //导航栏左侧item
        headerRight: <Text>右边Header</Text>, //导航栏右侧item
        headerStyle:{backgroundColor:'#e5e5e5',height:64}, //导航栏样式
        headerTintColor:'red', //导航栏文字颜色

        tabBarLabel: '首页',
        // tabBarIcon:<Image source={require("../img/btn_home_normal.png")}
        //                   style={{height:30,width:30,}}></Image>,
        tabBarIcon: ({tintColor,focused}) => (
            focused
                ?
                <Image
                    source={require("../img/btn_home_selected.png")}
                    style={{width:30,height:30}}
                />
                :
                <Image
                    source={require("../img/btn_home_normal.png")}
                    style={{width:30,height:30}}
                />
        ),


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
