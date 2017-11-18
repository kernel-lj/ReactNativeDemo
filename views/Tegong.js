/* eslint-disable global-require,import/no-unresolved */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  Image,
  Platform,
} from 'react-native';
import TitleSegmentView from './TegongPageSubViews/TegongTitleSegment';

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
  taoTaskViewStyle: {
    backgroundColor: 'red',
    flex: 1,
  },
  onlineTeGongViewStyle: {
    backgroundColor: 'green',
    flex: 1,
  },
  baseViewStyle: {
    flexDirection: 'row',
  },
});

export default class Tegong extends Component<{}> {
  static navigationOptions = {
    header: null, // 隐藏导航栏
    headerTitle: ' ',
    tabBarLabel: '特工',

    tabBarIcon: ({focused}) => (
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

  constructor(props) {
    super(props);
    this.state = {
      taoTaskViewIsShow: true,
    };
  }

  componentDidMount(){

    this.subscription = DeviceEventEmitter.addListener('clickOnlineTeGongBtn', this.clickOnlineTeGongBtn);
    this.subscription = DeviceEventEmitter.addListener('clickTaoTaskBtn', this.clickTaoTaskBtn);
  };

  componentWillUnmount(){
    this.subscription.remove();
  };

  clickOnlineTeGongBtn=() => {
    this.setState({
      taoTaskViewIsShow: false,
    })
  }

  clickTaoTaskBtn=() => {
    this.setState({
      taoTaskViewIsShow: true,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TitleSegmentView/>
        <View style={styles.baseViewStyle}>

          {this.state.taoTaskViewIsShow
            ?
            <View
              style={styles.taoTaskViewStyle}
              ref={(c) => this.taoTaskView = c}
            >
              <Text>aaaaaaaa</Text>
            </View>
            :
            <View
              style={styles.onlineTeGongViewStyle}
              ref={(c) => this.onlineTeGongView = c}
            >
              <Text>bbbbbbbbbbbb</Text>
            </View>
          }
        </View>


      </View>
    );
  }
}
