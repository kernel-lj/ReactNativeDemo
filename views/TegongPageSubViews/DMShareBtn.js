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

export default class DMShareBtn extends Component<{}> {

  static defaultProps = {
    title: '',
    source: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.source}></Image>
        <Text style={styles.TextStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 68,
    height: 72,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  TextStyle: {
    marginTop: 6,
  }
});