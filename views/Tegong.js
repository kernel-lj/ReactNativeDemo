/* eslint-disable global-require,import/no-unresolved */
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

export default class Tegong extends Component<{}> {
    static navigationOptions = {
      headerTitle: '特工1',
      tabBarLabel: '特工',
      tabBarIcon: ({ focused }) => (
        focused ?
          <Image
            source={require('../img/tegongSelected.png')}
            style={{ width: 30, height: 30 }}
          />
          :
          <Image
            source={require('../img/tegong.png')}
            style={{ width: 30, height: 30 }}
          />
      ),
    };

    render() {
      // eslint-disable-next-line react/prop-types
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={{ height: 60, backgroundColor: 'orange', justifyContent: 'center' }}
            onPress={() => navigate('DetailVC', { title: '详情', des: '我是返回点击我' })}
          >
            <Text>点击进详情页</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
