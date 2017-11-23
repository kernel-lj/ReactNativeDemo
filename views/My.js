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
  iconStyle: {
    width: Platform.OS === 'ios' ? 30 : 25,
    height: Platform.OS === 'ios' ? 30 : 25,
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
          style={styles.iconStyle}
        />
        :
        <Image
          source={require('../img/btn_mine_normal.png')}
          style={styles.iconStyle}
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

  componentDidMount() {
    this.requestData();
  }

  requestData = () => {
    // alert('000--');
    url = 'https://jz-c.doumi.com/api/v2/client/login?platform=android&platform=android'
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'accessToken': 'LmRlaxBOMt/BPKMG+ibiUJ0nJjjpXqI/AWkzNr8WJyUdciY43O5CavQ55pafA3K0zFfT7Zi6',
      },
      body: JSON.stringify({
        mobile: '17416666666',
        password: 'LmRlaxAS7mdmFIkS',
        idfa: 'LmRlaxDhXIRGahQ1J0xCFuj5v2LPAfxihr1kctGtZSGY6V5SL+Fcw5Y=',
      }),
    })
      .then(res => res.json())
      .then((res) => {
        console.log('111111');
        console.log(res);
      })
      .catch(err => {
        // console.log('999999999');
        console.log(err);
        // this.setState({ error: err, loading: false, refreshing: false});
      });
  };

  getUserInfo = () => {
    url = 'https://jz-c.doumi.com/api/v2/client/ucenter/index?platform=android&token=';
    fetch(url, {
      // method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'accessToken': 'LmRlaxBOMt/BPKMG+ibiUJ0nJjjpXqI/AWkzNr8WJyUdciY43O5CavQ55pafA3K0zFfT7Zi6',
        'info': 'LmRlaxBiKkOTUHwiho38vnI/IUk21s6mZyTZlwK9LG4y76Tp95JtNqIQvbIC/Qw7Fxum6feSbTaiEL2yI6zN+2eP8XwDkS1F5dDdYjao6R4iT5Ec8xbKczKwmYfDTZy+k9/xbDN2+mNyYO1yNvh5i3cb1ei3UyoF59H6lw==',
        'cookie': '_gl_tracker=%257B%2522sid%2522%253A%252275975559457%2522%257D; dm_uuid=7ad865d4-cf69-11e7-b792-1418774d6214; ganji_jz_ac_citydomain=eyJpdiI6InAwYVJ2TmJLODR1SFg5WTNrbmlzc0E9PSIsInZhbHVlIjoibm1tOFN4YVo4SUlPVzhDN0Y1akY3QT09IiwibWFjIjoiN2VmZGViOGE2YmVkNjUzOWVlMjIyZmFjNWY1ODU2YzIxYmY2YTZiNjVjMDc3NWYxZmVmYTMyMjgxY2ZhZmQ0MCJ9; dm_userinfo=9108848; ganji_jz_wc_jzuid=eyJpdiI6Im82NGo0VkhMdHBqaW1EQmF6M0lLenc9PSIsInZhbHVlIjoiaEFOaFM1ZUxCQ1grWnIzYWdVWHR1Zz09IiwibWFjIjoiYjlkYzJkMmEwYWQyZmJlY2MwYzA5ODE5OWJjNWY0YTkxYmE4NWRjZTQ2NmNkZDkwMTI4YmVjYjJjOGJmOGYwMiJ9; i_citydomain=bj; doumi_melon=eyJpdiI6Ijh3eG5YOHcrd3VpVU9OTXFWM2w0a1E9PSIsInZhbHVlIjoiSk9cLzNlTEYzekpzZG1xdGVwZXlENEV2YlB6TTdRRjNTaVBLXC9UanRkck9MbE5xQ1FyZm8wdkhcL29UUTc4SVlPM3JWeDlTcm1WNnRhQ3c0b29jd0JodlE9PSIsIm1hYyI6IjIzZDQ4NmU4NTI3MzZhOTVhNjgxNDg2OGFjNGI2YmUwMjkzMGRmMjcwZjJjNGFlMzViOTMxZDUyNGRjNmQwYzQifQ%3D%3D',

      },
    })
      .then(res => res.json())
      .then((res) => {
        console.log('111111');
        console.log(res);
      })
      .catch(err => {
        // console.log('999999999');
        console.log(err);
        // this.setState({ error: err, loading: false, refreshing: false});
      });
  };


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

