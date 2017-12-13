
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import UserInfo from '.././UserInfo';
const DMUserInfo = new UserInfo();

import { ToastShort } from '../../utils/ToastUtil';


Dimensions = require('Dimensions');
ScreenWidth = Dimensions.get('window').width;
ScreenHeight = Dimensions.get('window').height;
ScreenScale = Dimensions.get('window').scale;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: '#F5FCFF',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    backgroundColor: 'white',
    marginBottom: 1,
    height: 44,
  },
  innerViewStyle: {
    flex: 1,
    marginTop: 20,
    width: ScreenWidth,
    marginBottom: 30,
    backgroundColor: 'white',
  },
  TextInputSuperViewStyle: {
    backgroundColor: '#e8e8e8',
    marginLeft: 20,
    marginRight: 20,
  },
  LonginBtnStyle: {
    marginLeft: 20,
    marginRight: 20,
    height: 44,
    backgroundColor: '#F8CC46',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 5,
  },
  BottomViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    height: 44,
  },
});

export default class PasswordLogin extends Component<{}> {
    // 接收上一个页面传过来的title显示出来
    static navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.title,
      headerBackTitle: null,
      headerPressColorAndroid: 'white',

      // headerLeft:<Text>自定义返回按钮</Text>, //导航栏左侧item
    });


    static defaultProps = {
      title: '注册新账号',
      subTitle: '忘记密码?',
    };

    rendeBottomView() {
      if (this.props.isPasswordLoginView){
        return (
          <View style={styles.BottomViewStyle}>
            <Text>{this.props.title}</Text>
            <Text>{this.props.subTitle}</Text>
          </View>
        );
      } else {
        return (
          <View style={styles.BottomViewStyle}>
            <TouchableOpacity onPress={this.jumpToRegisterView}>
              <Text>{this.props.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.jumpToRegisterView11}>
              <Text>{this.props.subTitle}</Text>
            </TouchableOpacity>

          </View>
        );
      }
    }

  jumpToRegisterView=() => {
    const {state,navigate} = this.props.navigation;
    navigate('RegisterView',
      {
        title: '注册',
        keys: {...this.props.navigation.state.params.keys, C_key: this.props.navigation.state.key}

      })

    console.log(77777777);
    console.log(state.params);

  }


  jumpToRegisterView11=() => {
    // const { navigate } = this.props.navigation;
    // navigate('RegisterView', { title: '注册'})
    // const { state, goBack } = this.props.navigation;
    // const params = state.params;
    //
    // // this.props.navigation.goBack(this.props.navigation.state.params.keys. A_key);
    // console.log(44444444);
    //
    // console.log(params);
    //
    // // goBack(params.keys.MyVC);
    // // goBack(params.key);
    // goBack(state.key);


    const navigateAction = NavigationActions.navigate({

      routeName: 'RegisterView',

      params: {title: this.props.title},
      key: 'cctv1',
      // action: NavigationActions.navigate({ routeName: ''})
    })

    this.props.navigation.dispatch(navigateAction)
  }

  renderTextInputs() {
    return (
      <View style={styles.TextInputSuperViewStyle} >
        <TextInput
          placeholder="请输入11位手机号码"
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
        />
        <TextInput
          placeholder="请输6位验证码"
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }

  renderLoginBtnView = () => (
    <TouchableOpacity onPress={this.requestData}>
      <View style={styles.LonginBtnStyle}>
        <Text>登录</Text>
      </View>
    </TouchableOpacity>
);

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
        DMUserInfo.isLogin = true;
        // console.log(res);
        ToastShort('登录成功');
        DeviceEventEmitter.emit('loginSuccess');

        const { goBack, state } = this.props.navigation;
        goBack(state.params.keys.B_key); // 修改B_key 可以返回到不同的页面
        console.log(state.params);
      })
      .catch(err => {
        console.log(err);
        // this.setState({ error: err, loading: false, refreshing: false});
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerViewStyle}>

          {/* 添加TextInputs */}
          {this.renderTextInputs()}

          {/* 添加登录按钮 */}
          {this.renderLoginBtnView()}
          {this.rendeBottomView()}
        </View>
      </View>
    );
  }

  //   const navigateAction = NavigationActions.navigate({
  //
  //       routeName: 'RegisterView',
  //
  //       params: {title: this.props.title},
  //       key:'cctv3'
  //       // action: NavigationActions.navigate({ routeName: ''})
  //   })
  //
  //   this.props.navigation.dispatch(navigateAction)
  // }
}

