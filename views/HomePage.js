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
  NetInfo,
  Image,
  FlatList,
} from 'react-native';

import HomePageCell from './HomePageSubViews/HomePageCell'
import { ToastShort } from '../utils/ToastUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F0',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    // fontColor: 'black',
  },
  txt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 30,
  }
});

export default class HomePage extends Component<{}> {
  static navigationOptions = {
    headerTitle: '首页', // 导航栏文字
    headerBackTitle: null, // 导航栏返回按钮文字
    headerBackTitleStyle: { backgroundColor: 'red' },
    // header:null, //隐藏导航栏
    headerLeft: <Text>左边Header</Text>, // 导航栏左侧item
    headerRight: <Text onPress={() => { console.log(9999999); }} >右边Header</Text>, // 导航栏右侧item
    headerStyle: { backgroundColor: '#e5e5e5', height: 44 }, // 导航栏样式
    headerTintColor: 'red', // 导航栏文字颜色

    tabBarLabel: '首页',
    // tabBarIcon:<Image source={require("../img/btn_home_normal.png")}
    //                   style={{height:30,width:30,}}></Image>,
    tabBarIcon: ({ focused }) => (
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
      page: 0,
      refreshing: false,
      loading: false,
      data: [],
      headerTitle: '这是头部',
      bottomTitle: '这是尾部',
    };
  }

  static defaultProps = {
    requestUrl : 'http://capi.douyucdn.cn/api/v1/getVerticalRoom?limit=20&offset=',
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
        keys: { A_key: this.props.navigation.state.key },
      },
    );
  };

  componentDidMount() {
    this.netRequest();
  }

  requestData = () => {
    // console.log(6666666);
    // console.log(this.props.requestUrl + this.state.page);

    // const url = 'https://www.baidu.com';
    // console.log(6666666);
    // let finalData = {};
    fetch(this.props.requestUrl + this.state.page)
      .then(res => {
        // console.log(res.json());

        return res.json();
      })
      .then(res => {
        // console.log(77777);
        // console.log(typeof(res.data));
        const listData = res.data;
        // finalData.push(listData);

        this.setState({
          // data: [...this.state.data, ...res],
          data: listData.concat(this.state.data),
          page: this.state.page + 1,
          headerTitle: '刷新完成。。。',
        });
      })
      .catch(err => {
        // this.setState({ error: err, loading: false, refreshing: false});
      });
  };


  renderItem = ({ item, index }) => (
    <HomePageCell data={item} index={index} />
  );
  onRefresh=() => {
    this.netRequest();

  };

  netRequest=() => {
    NetInfo.isConnected.fetch().done((isConnected) => {
      // console.log('First, is ' + (isConnected ? 'online' : 'offline'));
      if (isConnected) { // 有网
        this.setState({
          headerTitle: '正在刷新。。。',
        });
        this.requestData();
      }else { // 无网
        ToastShort('请检查网络设置');
        this.setState({
          headerTitle: '请检查网络设置',
        });
      }
    });
  }

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
          data={this.state.data}
          ListHeaderComponent={() => <Text style={{ textAlign: 'center',
            textAlignVertical: 'center',   height: 30, backgroundColor: 'orange' }}>{this.state.headerTitle}</Text>}
          ListFooterComponent={() => <Text style={{ textAlign: 'center',
            textAlignVertical: 'center',   height: 30, backgroundColor: 'orange' }}>{this.state.bottomTitle}</Text>}
          ItemSeparatorComponent={() => <View style={{ height: 5, backgroundColor: 'red' }} />}
          // 为每个cell生成一个index
          keyExtractor={(item, index) => index}
          // renderItem={({ item, index }) => <Text style={styles.item}>{index}</Text>}
          //  renderItem={({ item }) => <HomePageCell data={item} index={item.id} />}
          renderItem={this.renderItem}
          onRefresh={this.onRefresh}
          refreshing={this.state.refreshing}

        />
      </View>
    );
  }
}
