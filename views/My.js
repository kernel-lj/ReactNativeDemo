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
    ImageBackground
} from 'react-native';

import MyCommonCell from './MySubViews/MyCommonCell'
import VerificationLogin from './LoginViews/VerificationLogin'
Dimensions = require('Dimensions');
ScreenWidth = Dimensions.get('window').width;
ScreenHeight = Dimensions.get('window').height;
ScreenScale = Dimensions.get('window').scale;

export default class My extends Component<{}> {

    static navigationOptions = {
        headerTitle: ' ',
        tabBarLabel: '我的',
        header:null, //隐藏导航栏
        tabBarIcon: ({tintColor,focused}) => (
            focused
                ?
                <Image
                    source={require("../img/btn_mine_selected.png")}
                    style={{width:30,height:30}}
                />
                :
                <Image
                    source={require("../img/btn_mine_normal.png")}
                    style={{width:30,height:30}}
                />
        ),
    };

    static  defaultProps = {
        title:'验证码登录',
    }


  render() {

      return (
          <ScrollView
              alwaysBounceVertical={true}
          >
              <View style={{height:600,flex:1}}>
                  <View style={styles.myTopViewStyle} >
                      {/*//未登录时的黄色视图包括未登录头像、登录/注册label*/}
                      {this.addTopView()}

                      {/*//包括：setction1、setction2、setction3*/}
                      {/*//setction1:第一块，包括我的兼职、我的简历、我的收藏、我的偏好*/}
                      {/*//setction2:第二块，包括做兼职赚积分、章鱼俱乐部、要有赚钱*/}
                      {/*//setction3:第三块，我要找人、联系客服、投诉与反馈*/}
                      {this.addOtherView()}
                  </View>
              </View>
          </ScrollView>
    );
  }

  //////////////////////////////////////////////////////////////////
    addTopView(){

        return(
            <ImageBackground source={require("../img/bg_personal.png")} style={styles.imageStyle}  >
                <TouchableOpacity activeOpacity={1} onPress={this.clickHeadPortraitView} >
                    <View style={styles.subView}>
                        <Image source={require("../img/default.png")} style={styles.headPortraitStyle}>
                        </Image>

                        <Text style={styles.labelStyle} >
                            登录/注册
                        </Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        );
    }

    clickHeadPortraitView=()=>{
        const {state, navigate } = this.props.navigation;
         navigate(
             'VerificationLoginVC',
             {
                 title: this.props.title,
                 name:'liutianliang',
                 key:state.key,
             },
             )


        console.log(555555);
        console.log(state.key);

    }

    addOtherView(){
        return(
            <View >
                {this.addSection1()}
                {this.addSection2()}
                {this.addSection3()}
            </View>
        );
    }

    addSection1(){
        return(
            <View style={styles.setction1}>
                <MyCommonCell title='我的兼职'/>
                <MyCommonCell title='我的简历'/>
                <MyCommonCell title='我的收藏'/>
                <MyCommonCell title='我的偏好'/>
            </View>
        );
    }

    addSection2(){
        return (
            <View style={styles.setction2}>
                <MyCommonCell title='做任务赚积分'/>
                <MyCommonCell title='章鱼俱乐部' subTitle='加入会员享积分奖励'
                              subTitleTextColorIsOrange={true}/>
                <MyCommonCell title='邀友赚钱' subTitle='好友做特工我也赚钱'
                              subTitleTextColorIsOrange={false}/>
            </View>

        );
    }

    addSection3(){
        return (
            <View style={styles.setction3}>
                <MyCommonCell title='我要招人' />
                <MyCommonCell title='联系客服' subTitle='010-57977077'
                              subTitleTextColorIsOrange={true}/>
                <MyCommonCell title='投诉与反馈' />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'black'
    },

    myTopViewStyle:{
        height:133,
        // backgroundColor:'red'
    },
    imageStyle: {
        width: ScreenWidth,
        height: 133,

    },

    subView:{
        // backgroundColor:'blue',
        marginLeft:12,
        top: 40,
        width: 60 + 16 + 80,
        height:60,
        flexDirection:'row',
        justifyContent:'flex-start',
        // alignItems:'center',
    },
    headPortraitStyle:{
        width:60,
        height:60,
        // backgroundColor:'red',
        left:0,
        top: 0,
        borderRadius:30,
        borderWidth:2,
        borderColor:'#FBE44D',
    },
    labelStyle:{
        marginLeft:16,
        height:50,
        backgroundColor:'rgba(255, 255, 255, 0.0)',
        fontSize:18,
        // align:'center',
        lineHeight:60, //居中
    },

    setction1:{
        marginTop:10,
        height: 44 * 4,
        width:ScreenWidth,
        // backgroundColor:'blue',
    },
    setction2:{
        marginTop:10,
        height: 44 * 3,
        width:ScreenWidth,
        // backgroundColor:'green',
    },
    setction3:{
        marginTop:10,
        height: 44 * 3,
        width:ScreenWidth,
        // backgroundColor:'orange',
    },






});


