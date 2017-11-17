/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react/native';

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
    backgroundColor: 'red',
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
  iconStyle: {
    width: Platform.OS === 'ios' ? 30 : 25,
    height: Platform.OS === 'ios' ? 30 : 25,
  },
});




export default class Message extends Component<{}> {
  static navigationOptions = {
    headerTitle: '消息1',
    tabBarLabel: '消息', // tabBarIcon:<Image source={require("../img/btn_chat_normal.png")} style={{height:30,width:30}}></Image>,

    tabBarIcon: ({focused}) => (
      focused
        ? <Image
          // eslint-disable-next-line global-require
          source={require('../img/btn_chat_selected.png')}
          style={styles.iconStyle}
        />
        :
        <Image
          // eslint-disable-next-line global-require
          source={require('../img/btn_chat_normal.png')}
          style={styles.iconStyle}
        />
    ),
  };

  cctv1 = () => {
    // 0.observable  数字的变化
    // const value = observable(0);
    // const number = observable(100);
    //
    // autorun(() => {reactNativeRouterFluxDemo
    //   console.log(value.get());
    //   console.log(number.get());
    // });
    //
    // value.set(1);
    // value.set(2);
    // number.set(101);

    // 1.computed的使用
    console.log(this.b);
  }


  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity >
          <View
            style={{
              backgroundColor: 'green', width: 100, height: 100, marginTop: 100,
            }}
          >
            <Text>acbc</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }


}

