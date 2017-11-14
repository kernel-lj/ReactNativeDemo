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
    data: { },
    index: '',
  }


  componentDidMount() {
    // console.log('11111110000');
    // console.log(this.props.data);
  }

  pressItem = () => {
    Alert.alert(this.props.index.toString());
  };

  render() {
    return (
      <View >
        <TouchableOpacity onPress={() => this.pressItem()}>
          <View style={styles.itemStyle}>
            <Image style={styles.itemHeadStyle} source={{ uri: this.props.data.avatar_small }} />
            <Text style={styles.itemTextStyle}>{this.props.data.nickname}</Text>

            <Text style={styles.itemArrowStyle}>{this.props.data.anchor_city} </Text>
            {/* <View style={styles.linViewStyles} /> */}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomePageCell;
