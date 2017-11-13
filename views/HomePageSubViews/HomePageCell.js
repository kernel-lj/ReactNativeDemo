/* eslint-disable react/prop-types,global-require */
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 1,
    // justifyContent: 'center',
    alignItems: 'center',

  },
  itemHeadStyle: {
    width: 44,
    height: 44,
  },
  itemTextStyle: {
    // lineHeight: 44,
    color: 'black',
    marginLeft: 13,
    fontSize: 13,
    // textAlign: 'center',
  },
  itemArrowStyle: {
    width: 44,
    height: 44,
    backgroundColor: 'gray',
    position: 'absolute',
    right: 10,
    lineHeight: 44,
  },

});

class HomePageCell extends Component {
  static defaultProps = {
    data: { nickname: '' },

    // anchor_city: '2224',
  }


  componentDidMount() {
    console.log('11111110000');
    console.log(this.props.data);
  }

  render() {
    return (
      <View style={styles.itemStyle}>
        <Image style={styles.itemHeadStyle} source={require('../../img/headImage.png')} />
        <Text style={styles.itemTextStyle}>{this.props.data.nickname}</Text>

        <Text style={styles.itemArrowStyle}>{this.props.data.anchor_city} </Text>
        {/* <View style={styles.linViewStyles} /> */}
      </View>
    );
  }
}

export default HomePageCell;
