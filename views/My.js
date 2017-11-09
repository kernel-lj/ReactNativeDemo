/* eslint-disable global-require,react/prop-types,import/no-extraneous-dependencies */
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
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import MyCommonCell from './MySubViews/MyCommonCell';

Dimensions = require('Dimensions');

ScreenWidth = Dimensions.get('window').width;
ScreenHeight = Dimensions.get('window').height;
ScreenScale = Dimensions.get('window').scale;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  myTopViewStyle: {
    height: 133,
    // backgroundColor:'red'
  },
  imageStyle: {
    width: ScreenWidth,
    height: 133,
  },

  subView: {
    // backgroundColor: 'blue',
    marginLeft: 12,
    top: 40,
    width: 60 + 16 + 80,
    height: Platform.OS === 'ios' ? 60 : 60 * 1.7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems:'center',
    alignItems: 'center',
  },
  headPortraitStyle: {
    width: 60,
    height: 60,
    top: Platform.OS === 'ios' ? 0 : -20,
    // backgroundColor:'red',
    // marginLeft: 0,
    // marginTop: 0,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FBE44D',
  },
  labelStyle: {
    // marginLeft: 16,
    // top: Platform.OS === 'ios' ? 0 : -20,
    top: 20,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    fontSize: 18,
    position: 'absolute',
    right: 0,
    // lineHeight: Platform.OS === 'ios' ? 60 : 43, // 居中
    // justifyContent: 'center',
  },

  setction1: {
    marginTop: 10,
    height: 44 * 4,
    width: ScreenWidth,
    // backgroundColor:'blue',
  },
  setction2: {
    marginTop: 10,
    height: 44 * 3,
    width: ScreenWidth,
    // backgroundColor:'green',
  },
  setction3: {
    marginTop: 10,
    height: 44 * 3,
    width: ScreenWidth,
    // backgroundColor:'orange',
  },

});


export default class My extends Component<{}> {
  static navigationOptions = {
    headerTitle: ' ',
    tabBarLabel: '我的',
    header: null, // 隐藏导航栏
    tabBarIcon: ({ focused }) => (
      focused ?
        <Image
          source={require('../img/btn_mine_selected.png')}
          style={{ width: 30, height: 30 }}
        />
        :
        <Image
          source={require('../img/btn_mine_normal.png')}
          style={{ width: 30, height: 30 }}
        />
    ),
  };

  static defaultProps = {
    title: '验证码登录11',
  };

  addTopView=() => (
    <ImageBackground source={require('../img/bg_personal.png')} style={styles.imageStyle}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => this.clickHeadPortraitView()}
      >
        <View style={styles.subView}>
          <Image source={require('../img/default.png')} style={styles.headPortraitStyle} />

          <Text style={styles.labelStyle}>
            登录/注册
          </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  )

  clickHeadPortraitView=() => {
    // const { navigate } = this.props.navigation;
    // eslint-disable-next-line no-unused-vars
    const { navigate } = this.props.navigation;
    navigate(
      'VerificationLoginVC',
      {
        title: this.props.title,
        name: 'liutianliang',
        keys: { A_key: this.props.navigation.state.key },
      },
    );
    // // console.log(state.key);
    //
    // const navigateAction = NavigationActions.navigate({
    //     routeName: 'VerificationLoginVC',
    //     params: {title: this.props.title},
    //     key: 'cctv1'
    // });
    // this.props.navigation.dispatch(navigateAction);
  }

  addOtherView=() => (
    <View>
      {this.addSectionOne()}
      {this.addSectionTwo()}
      {this.addSectionThree()}
    </View>
  )

  addSectionOne=() => (
    <View style={styles.setction1}>
      <MyCommonCell title="我的兼职" />
      <MyCommonCell title="我的简历" />
      <MyCommonCell title="我的收藏" />
      <MyCommonCell title="我的偏好" />
    </View>
  )

  addSectionTwo=() => (
    <View style={styles.setction2}>
      <MyCommonCell title="做任务赚积分" />
      <MyCommonCell
        title="章鱼俱乐部"
        subTitle="加入会员享积分奖励"
      />
      <MyCommonCell
        title="邀友赚钱"
        subTitle="好友做特工我也赚钱"
        subTitleTextColorIsOrange={false}
      />
    </View>

  );

   addSectionThree=() => (
     <View style={styles.setction3}>
       <MyCommonCell title="我要招人" />
       <MyCommonCell
         title="联系客服"
         subTitle="010-57977077"
       />
       <MyCommonCell title="投诉与反馈" />
     </View>
   );


   render() {
     return (
       <ScrollView
         // alwaysBounceVertical={true}
         style={{ backgroundColor: '#FAF8EF' }}
       >
         <View style={{ height: 600, flex: 1, backgroundColor: '#FAF8EF' }}>
           <View style={styles.myTopViewStyle} >
             { /* //未登录时的黄色视图包括未登录头像、登录/注册label */ }
             {this.addTopView()}

             {/* //包括：setction1、setction2、setction3 */}
             {/* //setction1:第一块，包括我的兼职、我的简历、我的收藏、我的偏好 */}
             {/* //setction2:第二块，包括做兼职赚积分、章鱼俱乐部、要有赚钱 */}
             {/* //setction3:第三块，我要找人、联系客服、投诉与反馈 */}
             {this.addOtherView()}
           </View>
         </View>
       </ScrollView>
     );
   }
}

