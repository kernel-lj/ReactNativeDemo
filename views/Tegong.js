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
  Platform,
} from 'react-native';
import TitleSegmentView from './TegongPageSubViews/TegongTitleSegment'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8EF',
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

export default class Tegong extends Component<{}> {
    static navigationOptions = {
      header: null, // 隐藏导航栏
      headerTitle: ' ',
      tabBarLabel: '特工',

      tabBarIcon: ({ focused }) => (
        focused ?
          <Image
            source={require('../img/tegongSelected.png')}
            style={styles.iconStyle}
          />
          :
          <Image
            source={require('../img/tegong.png')}
            style={styles.iconStyle}
          />
      ),
    };

    render() {
      return (
        <View style={styles.container}>
          <TitleSegmentView />

          {/*<Text style={styles.welcome}>*/}
            {/*Welcome to React Native!*/}
          {/*</Text>*/}
        </View>
      );
    }
}
