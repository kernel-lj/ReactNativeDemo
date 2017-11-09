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
  itemSubTextOrangeStyle: {
    fontSize: 10,
    position: 'absolute',
    right: 64,
    // lineHeight: 44,
    color: '#EE6F2D',
    // color: 'orange',
  },
  itemSubTextGrayStyle: {
    fontSize: 10,
    position: 'absolute',
    right: 64,
    // lineHeight: 44,
    color: '#9F9F9F',
  },
  itemArrowStyle: {
    width: 44,
    height: 44,
    backgroundColor: 'gray',
    position: 'absolute',
    right: 10,
  },

});

class MyCommonCell extends Component {
    static defaultProps = {
      title: '',
      subTitle: '',
      subTitleTextColorIsOrange: true,
    }


    renderSubTitles() {
      if (this.props.subTitleTextColorIsOrange) {
        return (
          <Text style={styles.itemSubTextOrangeStyle}>{this.props.subTitle}</Text>
        );
      } else {
        return (
          <Text style={styles.itemSubTextGrayStyle}>{this.props.subTitle}</Text>
        );
      }
    }

    render() {
      return (
        <View style={styles.itemStyle}>
          <Image style={styles.itemHeadStyle} source={require('../../img/headImage.png')} />
          <Text style={styles.itemTextStyle}>{this.props.title}</Text>
          {this.renderSubTitles()}

          <View style={styles.itemArrowStyle} />
          {/* <View style={styles.linViewStyles} /> */}
        </View>
      );
    }
}

export default MyCommonCell;
