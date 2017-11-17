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

Dimensions = require('Dimensions');

ScreenWidth = Dimensions.get('window').width;
ScreenHeight = Dimensions.get('window').height;
ScreenScale = Dimensions.get('window').scale;
const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 64 : 44,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  leftViewStyle: {
    // backgroundColor: 'red',
    width: ScreenWidth * 0.5,
    flexDirection: 'row',
  },
  rightViewStyle: {
    // backgroundColor: 'green',
    width: ScreenWidth * 0.5,

  },
  leftTextNormalTextStyle: {
    fontSize: 18,
    // color: 'black', // #404040
    marginTop: Platform.OS === 'ios' ? 35 : 15,
    fontFamily: 'PingFangSC-Semibold', // PingFangSC-Regular  PingFangSC-Semibold
    position: 'absolute',
    fontWeight: 'bold',
    right: 25,
  },
  rightTextNormalTextStyle: {
    fontSize: 18,
    // color: 'black', // #404040
    marginTop: Platform.OS === 'ios' ? 35 : 15,
    marginLeft: 25,
    fontFamily: 'PingFangSC-Regular',
  },
  underLineStyle1: {
    backgroundColor: '#FF6600',
    height: 4,
    width: 20,
    borderRadius: 2,
    marginTop: Platform.OS === 'ios' ? 59 : 39,
    position: 'absolute',
    right: 42,
  },
  underLineStyle2: {
    backgroundColor: '#FF6600',
    height: 4,
    width: 20,
    borderRadius: 2,
    marginTop: 0,
    marginLeft: 50,
  }
});

export default class TegongTitleSegment extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      // error: false,
      underLine1: false,
      underLine2: true,
    };
  }

  clickTaoTask=() => {
    this.setState ({
      // underLine2: !this.state.underLine2,
      underLine1: !this.state.underLine1,
    });

    if (!this.state.underLine2) {
      this.setState ({
        underLine2: true,
      });
    }

    this.onlineTegongLabel.setNativeProps({
      style: {
        fontWeight: 'normal',
      },
    });

    this.taotaskLabel.setNativeProps({
      style: {
        fontWeight: 'bold',
      },
    });
  }

  clickOnlineTegong=() => {
    this.setState ({
      underLine1: !this.state.underLine1,
    });
    if (this.state.underLine2) {
      this.setState ({
        underLine2: false,
      });
    }

    this.onlineTegongLabel.setNativeProps({
      style: {
        fontWeight: 'bold',
      },
    });

    this.taotaskLabel.setNativeProps({
      style: {
        fontWeight: 'normal',
      },
    });
  }


  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={()=> this.clickTaoTask()} activeOpacity={1}>
          <View style={styles.leftViewStyle}>
            <Text style={styles.leftTextNormalTextStyle} ref={(c) => this.taotaskLabel = c}>淘任务</Text>
            {this.state.underLine1 ? null : <View style={styles.underLineStyle1}></View>}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.clickOnlineTegong()} activeOpacity={1}>
          <View style={styles.rightViewStyle}>
            <Text style={styles.rightTextNormalTextStyle} ref={(c) => this.onlineTegongLabel = c}>在线特工</Text>
            {this.state.underLine2 ? null : <View style={styles.underLineStyle2}></View>}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

