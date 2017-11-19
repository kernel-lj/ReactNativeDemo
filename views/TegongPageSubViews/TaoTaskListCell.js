/* eslint-disable react/prop-types,global-require */
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

Dimensions = require('Dimensions');

ScreenWidth = Dimensions.get('window').width;
ScreenHeight = Dimensions.get('window').height;
ScreenScale = Dimensions.get('window').scale;
const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    height: 86,

  },
  itemHeadStyle: {
    width: 62,
    height: 62,
    marginLeft: 20,
  },
  itemTextStyle: {
    lineHeight: 20,
    color: 'black',
    marginLeft: 13,
    fontSize: 12,
    textAlign: 'left',
  },
  itemArrowStyle: {
    width: 52,
    height: 24,
    position: 'absolute',
    top: 18,
    right: 10,
    borderRadius: 3,
    borderColor: '#999999',
    borderWidth: 0.5,
    // backgroundColor: 'red',
    lineHeight: 24,
    textAlign: 'center',
  },
  userGetPriceStyle: {
    width: 12 + 35 + 12 + 5,
    height: 24,
    position: 'absolute',
    top: 18 + 28,
    right: 10,
    borderRadius: 3,
    fontSize: 14,
    color: '#FF6600',
    fontFamily: 'PingFangSC-Medium',
  },
  middleViewBaseStyle: {
    marginLeft: 0,
    marginTop: 0,
    // backgroundColor: 'red',
    width: ScreenWidth - 20 - 62 - 52 - 25 - 22,
  },

});

class TaoTaskListCell extends Component {
  static defaultProps = {
    data: { },
    index: '',
  };

  pressItem = () => {
    Alert.alert(this.props.index.toString());
  };

  render() {
    return (
      <View >
        <TouchableOpacity onPress={() => this.pressItem()}>
          <View style={styles.itemStyle}>
            <Image style={styles.itemHeadStyle} source={{ uri: this.props.data.pict_url }} />
            <View style={{ height: 62 }}>
              <View style={styles.middleViewBaseStyle}>
                <Text numberOfLines={2} style={styles.itemTextStyle}>{this.props.data.title}</Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 6, }}>
                <Text style={{ marginLeft: 10, color: '#FF6600' }}>¥{this.props.data.price}</Text>
                <Text style={{ marginLeft: 10, color: 'gray', textDecorationLine:'line-through' }}>¥{this.props.data.zk_final_price}</Text>
              </View>
            </View>


            <Text style={styles.itemArrowStyle}> 分享 </Text>
            <Text style={styles.userGetPriceStyle}> 赚{this.props.data.user_get_price}元 </Text>


            {/* <View style={styles.linViewStyles} /> */}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TaoTaskListCell;
