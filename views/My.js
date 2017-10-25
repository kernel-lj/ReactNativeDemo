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
    Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class My extends Component<{}> {

    static navigationOptions = {
        headerTitle: '我的1',
        tabBarLabel: '我的',
        // tabBarIcon:<Image source={require("../img/btn_mine_normal.png")} style={{height:30,width:30}}></Image>,
        tabBarIcon: ({tintColor,focused}) => (
            focused
                ?
                <Image
                    source={require("../img/btn_mine_selected.png")}
                    style={{width:30,height:30}}
                />
                :
                <Image
                    source={require("../img/btn_mine_normal.png")}
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
});

