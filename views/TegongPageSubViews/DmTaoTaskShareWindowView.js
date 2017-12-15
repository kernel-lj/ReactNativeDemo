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
  Modal,
  DeviceEventEmitter,
  TouchableOpacity,
  Image,
  ScrollView,
  Clipboard,
  Linking,
} from 'react-native';

import SharBtn from './DMShareBtn';

export default class DmTaoTaskShareWindowView extends Component<{}> {

  static defaultProps = {
    animationType: 'none',
    transparent: true,
    clipboardString: '',
    taoCodeString: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      isShow: true,
      shareString: '',
    };
  }

  componentDidMount() {
    // this.subscription = DeviceEventEmitter.addListener('clickTaoTaskShareBtn', this.showModal(into));
    this.subscription = DeviceEventEmitter.addListener('clickTaoTaskShareBtn', (info) => {
      // console.log(info);
      this.setState(
        {
          modalVisible: true,
          shareString: info,
        }
      )
    });
  };

  showModal = () => {
    this.hideWindowView();
  };

  hideWindowView = () => {
    this.setState({
      modalVisible: true,
    });
  };

  clickWeChatBtn = () => {
    // alert('I am weChat');
    Clipboard.setString(this.state.shareString);
    Linking.canOpenURL('weixin://').then(supported => { // weixin://  alipay://
      if (supported) {
        Linking.openURL('weixin://');
      } else {
        alert('请先安装微信');
      }
    });
  };
  clickQQBtn = () => {
    // alert('I am QQ');
    Linking.canOpenURL('weixin://').then(supported => { // weixin://  alipay://
      if (supported) {
        Linking.openURL('weixin://');
      } else {
        alert('请先安装QQ');
      }
    });
  };
  clickWeChatTimelineBtn = () => {
    // alert('I am weChatTimeline');
    Linking.canOpenURL('weixin://').then(supported => { // weixin://  alipay://
      if (supported) {
        Linking.openURL('weixin://');
      } else {
        alert('请先安装微信');
      }
    });
  };

  // rgba(0,0,0,0.3)

  render() {
    return (
      <Modal
        animationType={this.props.animationType}
        transparent={this.props.transparent}
        visible={this.state.modalVisible}
        onRequestClose={() => {console.log("Modal has been closed.")}}
      >
        <View style={{marginTop: 0, backgroundColor: 'rgba(0,0,0,0.3)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/*<TouchableOpacity activeOpacity={1} onPress={() => {*/}
            {/*this.setState({*/}
              {/*modalVisible: false,*/}
            {/*});*/}
          {/*}}>*/}
            <View style={styles.windowViewStyle}>
              {/*<Text>分享商品到</Text>*/}
              <View style={styles.topView}>

                <Image style={styles.imageStyle} source={require('../../img/taokouling.png')}>
                  <ScrollView style={styles.scrollViewStyle} showsVerticalScrollIndicator={false}>
                      <Text  style={styles.textStringStyle}>
                         {/*疯狂抢购中 羊绒衫女 高领毛衣 冬季纯色长袖修身{'\n'}*/}
                        {/*【在售价】358.00元{'\n'}*/}
                        {/*【券后价】48.00元{'\n'}*/}
                        {/*【淘口令】￥WriW08HSmPw￥{'\n'}*/}
                        {/*【商品详情】http://www.ishanggongzuo.com.cn/tbk/share/3415351复制这条信息，打开【手机淘宝】即可查看*/}
                        {this.state.shareString}
                        </Text>
                  </ScrollView>
                </Image>

              </View>


              <View style={styles.bottomView}>
                <Image source={require('../../img/弹窗步骤.png')} style={styles.pasteCodeToImageStyle}></Image>
                <View style={styles.shareBtnFatherView}>
                  {/*<View style={styles.weChatStyle}>*/}
                    {/*<Image source={require('../../img/微信tbk.png')}></Image>*/}
                    {/*<Text>微信</Text>*/}
                  {/*</View>*/}
                  {/*<SharBtn source={require('../../img/微信tbk.png')} title="微信" />*/}

                  <View style={styles.shareLeftView}>
                    <TouchableOpacity onPress={this.clickWeChatBtn}>
                    <SharBtn source={require('../../img/微信tbk.png')} title="微信" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.shareMiddleView}>
                    <TouchableOpacity onPress={this.clickQQBtn}>

                    <SharBtn source={require('../../img/qqtbk.png')} title="QQ" />
                    </TouchableOpacity>

                  </View>
                  <View style={styles.shareRightView}>
                    <View style={{width: 10,height: 72}}></View>
                    <TouchableOpacity onPress={this.clickWeChatTimelineBtn}>
                    <SharBtn source={require('../../img/朋友圈tbk.png')} title="朋友圈" />
                    </TouchableOpacity>

                  </View>

                </View>
              </View>
            </View>
          {/*</TouchableOpacity>*/}

          <TouchableOpacity activeOpacity={1} onPress={() => {
            this.setState({
              modalVisible: false,
            });
          }}>
            <Image style={styles.closeImageStyle} source={require('../../img/叉号.png')} ></Image>
            </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  windowViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    width: 145 * 2,
    height: 146 * 2,
  },
  imageStyle: {
    position: 'absolute',
    top: 20,
    left: 20,
    // marginTop: 24,
    // width: 118 * 2,
    // height: 67.5 * 2,
    // backgroundColor: 'red',
  },
  topView: {
    flex: 1,
    // backgroundColor: 'red',
    height: 146,
    width: 145 * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex: 1,
    // backgroundColor: 'orange',
    height: 146,
    width: 145 * 2,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewStyle: {
    position: 'absolute',
    top: 23,
    // top: 12,
    height: 50 * 2,
    width: 113 * 2,
    marginLeft: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    // backgroundColor: 'red',

  },
  closeImageStyle: {
    marginTop: 40,
    height: 24,
    width: 24,
  },
  textStringStyle: {
    color: '#808080',
    fontFamily: 'PingFangSC-Regular',
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'left',
  },
  pasteCodeToImageStyle: {
    marginTop: 20,
  },
  shareBtnFatherView: {
    marginTop: 16,
    height: 72,
    width: 145 * 2,
    // backgroundColor: 'orange',
    flexDirection: 'row',
  },
  weChatStyle: {
    width: 68,
    height: 72,
    // backgroundColor: 'red',
  },
  shareLeftView:{
    width: 68 + 12,
    // backgroundColor: 'red',
  },
  shareMiddleView: {
    width: 145 * 2 - (68 + 12 ) * 2,
    // backgroundColor: 'blue',
    alignItems: 'center',

  },
  shareRightView : {
    // marginLeft: 12,
    flexDirection: 'row',
    width: 68 + 12,
    // backgroundColor: 'green',

  }

});
