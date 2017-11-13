/* eslint-disable import/no-unresolved,react/prop-types */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import HomePageCell from './HomePageSubViews/HomePageCell'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    // fontColor: 'black',
  },
});

export default class HomePage extends Component<{}> {
  static navigationOptions = {
    headerTitle: '首页', // 导航栏文字
    headerBackTitle: null, // 导航栏返回按钮文字
    headerBackTitleStyle: {backgroundColor: 'red'},
    // header:null, //隐藏导航栏
    headerLeft: <Text>左边Header</Text>, // 导航栏左侧item
    headerRight: <Text onPress={() => {console.log(9999999)}} >右边Header</Text>, // 导航栏右侧item
    headerStyle: {backgroundColor: '#e5e5e5', height: 44}, // 导航栏样式
    headerTintColor: 'red', // 导航栏文字颜色

    tabBarLabel: '首页',
    // tabBarIcon:<Image source={require("../img/btn_home_normal.png")}
    //                   style={{height:30,width:30,}}></Image>,
    tabBarIcon: ({focused}) => (
      focused ?
        <Image

          /* eslint-disable global-require */
          source={require('../img/btn_home_selected.png')}
          /* eslint-enable global-require */

          // source={require('../img/btn_home_selected.png')}
          style={{width: 30, height: 30}}
        />
        :
        <Image
          /* eslint-disable global-require */
          source={require('../img/btn_home_normal.png')}
          /* eslint-enable global-require */
          // source={require('../img/btn_home_normal.png')}
          style={{width: 30, height: 30}}
        />
    ),
  };

  constructor(props) {
    super(props);

    this.state = {
      error: false,
      page: 1,
      refreshing: false,
      loading: false,
      data: {},
    };
  }

  static defaultProps = {
    requestUrl : 'http://capi.douyucdn.cn/api/v1/getVerticalRoom?limit=20&offset=0',
  }


  clickHeadPortraitView = () => {
    // const { navigate } = this.props.navigation;
    // eslint-disable-next-line no-unused-vars
    const {navigate} = this.props.navigation;
    navigate(
      'VerificationLoginVC',
      {
        title: '验证码登录222',
        name: 'liutianliang',
        keys: {A_key: this.props.navigation.state.key},
      },
    );
  };

  componentDidMount() {
    this.requestData();
  }

  requestData = () => {
    // console.log(6666666);

    // const url = 'https://www.baidu.com';
    // console.log(6666666);
    fetch(this.props.requestUrl)
      .then(res => {
        // console.log(res.json());

        return res.json();
      })
      .then(res => {
        console.log(77777);
        console.log(res.data[0]);
        var listData = res.data;
        // for (var i=0; i<res.data.length; i++){
        //   // console.log(6666666);
        //   listData.push(res.data);
        // }


        // let i = 0;
        // res.map((item) => {
        //   listData.push({
        //     key:i,
        //     value:item
        //   })
        //   i++;
        // })
         this.setState({
          // data: [...this.state.data, ...res],
           data:listData,
         });
        console.log(6666666);
        // console.log(listData[1]);
      })
      .catch(err => {
        // this.setState({ error: err, loading: false, refreshing: false});
      });
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        {/*<TouchableOpacity*/}
        {/*style={{ height: 60, backgroundColor: 'orange', justifyContent: 'center' }}*/}
        {/*// onPress={() => navigate('DetailVC', { title: '详情', des: '我是返回点击我' })}*/}
        {/*onPress={() => this.clickHeadPortraitView()}*/}
        {/*>*/}
        {/*<Text>点击进详情页</Text>*/}
        {/*</TouchableOpacity>*/}



        <FlatList
                  data = {this.state.data}
              // keyExtractor={item => item.id}

             renderItem={({ item }) => <Text style={styles.item}>{item.nickname}</Text>}
            // renderItem={({ item }) => <HomePageCell data=this.state.data />}

        />
      </View>
    );
  }
}
