
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
  TextInput,
    TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation'

Dimensions = require('Dimensions');
ScreenWidth = Dimensions.get('window').width;
ScreenHeight = Dimensions.get('window').height;
ScreenScale = Dimensions.get('window').scale;

export default class VerificationLogin extends Component<{}> {

    //接收上一个页面传过来的title显示出来
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
        headerBackTitle:null,
        // headerLeft:<Text>自定义返回按钮</Text>, //导航栏左侧item
        
    });



    static  defaultProps = {
        title:'密码登录',
        subTitle:'无法收取验证码?',
    } 

  render() {
      // const { navigate } = this.props.navigation

      

      return (
      <View style={styles.container}>
          <View style={styles.innerViewStyle}>

              {/*添加TextInputs*/}
              {this.renderTextInputs()}

              {/*添加登录按钮*/}
              {this.renderLoginBtnView()}
              {this.rendeBottomView()}

          </View>
      </View>
    );

  }

    // 请输入11位手机号码
    renderTextInputs(){
        return(
            <View style={styles.TextInputSuperViewStyle} >
                <TextInput placeholder='11111111111' style={styles.textInputStyle}>

                </TextInput>

                <TextInput placeholder='请输6位验证码' style={styles.textInputStyle}>

                </TextInput>
            </View>
        )
    }


    renderLoginBtnView(){
        return(
            <View style={styles.LonginBtnStyle}>
                <Text>登录</Text>
            </View>
        )
    }

    rendeBottomView(){
       if (this.props.isPasswordLoginView){
            return(
                <View style={styles.BottomViewStyle}>
                    <Text>{this.props.title}</Text>
                    <Text>{this.props.subTitle}</Text>
                </View>
            )
       }else {
        return(
            <View style={styles.BottomViewStyle}>
                <TouchableOpacity onPress={this.jumpToPasswordView}>
                    <Text>{this.props.title}</Text>
                </TouchableOpacity>

                <Text>{this.props.subTitle}</Text>
            </View>
        )
       }
    }

    // 'B',{keys:{ A_key:this.props.navigation.state.key,}}

    jumpToPasswordView=()=>{



        // const { state,navigate } = this.props.navigation;
        // navigate('PassWordLoginVC', { title: '密码登录',
        //     // keys:{ MyVC:this.props.navigation.state.key,},
        //     // key:state.key,
        //
        // })
        // console.log(6666);
        // console.log(state.key);

        const navigateAction = NavigationActions.navigate({

            routeName: 'PassWordLoginVC',

            params: {title: this.props.title},
            key:'cctv2'
            // action: NavigationActions.navigate({ routeName: ''})
        })

        this.props.navigation.dispatch(navigateAction)



    }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: '#F5FCFF',
      alignItems: 'center',
      backgroundColor:'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle:{
      backgroundColor:'white',
      marginBottom:1,
      height:44,
  },
  innerViewStyle:{
    flex:1,
    marginTop:20,
    width:ScreenWidth,
    marginBottom:30,
    backgroundColor:'white',
    },
    TextInputSuperViewStyle:{
      backgroundColor:'#e8e8e8',
      marginLeft:20,
      marginRight:20,
    },
    LonginBtnStyle:{
      marginLeft:20,
      marginRight:20,
      height:44,
      backgroundColor:'#F8CC46',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:50,
      borderRadius:5,
    },
    BottomViewStyle:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginLeft:20,
      marginRight:20,
      marginTop:40,
      height:44,
    }
});


