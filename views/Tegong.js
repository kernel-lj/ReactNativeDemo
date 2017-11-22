/* eslint-disable global-require,import/no-unresolved */
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
  DeviceEventEmitter,
  Image,
  Platform,
  FlatList,
  NetInfo,
} from 'react-native';
import TitleSegmentView from './TegongPageSubViews/TegongTitleSegment';
import {ToastShort} from '../utils/ToastUtil';
import TaoTaskListCell from './TegongPageSubViews/TaoTaskListCell';

Dimensions = require('Dimensions');
ScreenWidth = Dimensions.get('window').width;
ScreenHeight = Dimensions.get('window').height;
ScreenScale = Dimensions.get('window').scale;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: ScreenWidth,
    // height: ScreenHeight - 64 - 44,
    backgroundColor: '#FAF8EF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  iconStyle: {
    width: Platform.OS === 'ios' ? 30 : 25,
    height: Platform.OS === 'ios' ? 30 : 25,
  },
  taoTaskViewStyle: {
    backgroundColor: 'red',
    flex: 1,
  },
  onlineTeGongViewStyle: {
    backgroundColor: 'green',
    flex: 1,
  },
  baseViewStyle: {
    flexDirection: 'row',
  },
});

export default class Tegong extends Component<{}> {
  static navigationOptions = {
    header: null, // 隐藏导航栏
    headerTitle: ' ',
    tabBarLabel: '特工',

    tabBarIcon: ({focused}) => (
      focused ?
        <Image
          source={require('../img/tegongSelected.png')}
          style={styles.iconStyle}
        />
        :
        <Image
          source={require('../img/tegong.png')}
          style={styles.iconStyle}
        />
    ),
  };

  static defaultProps = {
    requestUrl: 'https://jz-c-test.doumi.com/api/v3/client/tbk/lists?page=',
    requestArgs: '&pageSize=20&channel=meizhuanggehu',
  }


  constructor(props) {
    super(props);
    this.state = {
      taoTaskViewIsShow: true,
      data: [],
      refreshing: false,
      headerTitle: '这是头部',
      bottomTitle: '这是尾部',
      page: 1,
      connectionInfo: null,
    };
  }

  componentWillMount() {
    NetInfo.addEventListener(
      'connectionChange',
      this.handleConnectionInfoChange,
    );
    NetInfo.fetch().done((connectionInfo) => {
      this.setState({connectionInfo});
    });
  }

  componentDidMount() {
    // alert('00');
    this.onRefresh();

    this.subscription = DeviceEventEmitter.addListener('clickOnlineTeGongBtn', this.clickOnlineTeGongBtn);
    this.subscription = DeviceEventEmitter.addListener('clickTaoTaskBtn', this.clickTaoTaskBtn);
  }

  componentWillUnmount() {
    this.subscription.remove();

    NetInfo.removeEventListener(
      'connectionChange',
      this.handleConnectionInfoChange,
    );
  }


  onRefresh = () => {
    this.requestData();

    // console.log(this.state.connectionInfo);
    // // 首次进来取不到当前的网络状态，为null，所以一秒后在执行一次onRefresh()方法就会取得当前有没有联网
    // if (!this.state.connectionInfo) {
    //   setTimeout(() => {
    //     this.onRefresh();
    //   }, 100);
    // } else {
    //   // console.log(this.state.connectionInfo);
    //   // 解决 1.当前处于WiFi状态，断开WiFi后，不显示请检查网络设置的问题
    //   //     2.当前处于无网状态，断开WiFi后 后,不刷新的问题
    //   if (this.state.connectionInfo.type === 'none') {
    //     ToastShort('请检查网络设置');
    //     this.setState({
    //       headerTitle: '请检查网络设置',
    //       bottomTitle: '请检查网络设置',
    //     });
    //   } else if (this.state.connectionInfo.type === 'wifi') {
    //     // alert('09090');
    //
    //     this.setState({
    //       headerTitle: '正在刷新。。。',
    //       bottomTitle: '正在刷新。。。',
    //       // refreshing: true,
    //     });
    //     console.log('111111');
    //
    //     this.requestData();
    //     console.log(this.state.connectionInfo);
    //
    //   }
    // }
    //
    // if (Platform.OS === 'ios') {
    //   if (this.state.connectionInfo === 'wifi' || this.state.connectionInfo === 'mobile') { // 有网
    //     this.setState({
    //       headerTitle: '正在刷新。。。',
    //       bottomTitle: '正在刷新。。。',
    //       refreshing: true,
    //     });
    //     this.requestData();
    //   } else if (this.state.connectionInfo === 'none') { // 无网
    //     ToastShort('请检查网络设置');
    //     this.setState({
    //       headerTitle: '请检查网络设置',
    //       bottomTitle: '请检查网络设置',
    //
    //     });
    //   }
    // } else {
    //   if (this.state.connectionInfo === 'WIFI' || this.state.connectionInfo === 'MOBILE') { // 有网
    //     this.setState({
    //       headerTitle: '正在刷新。。。',
    //       bottomTitle: '正在刷新。。。',
    //
    //       refreshing: true,
    //     });
    //     this.requestData();
    //   } else if (this.state.connectionInfo === 'NONE') { // 无网
    //     ToastShort('请检查网络设置');
    //     this.setState({
    //       headerTitle: '请检查网络设置',
    //       bottomTitle: '请检查网络设置',
    //     });
    //   }
    // }
  };

  handleConnectionInfoChange = (connectionInfo) => {
    this.setState({
      connectionInfo,
    });
  };

  requestData = () => {
    //
    // fetch(this.props.requestUrl + this.state.page)
    //   .then(res => res.json())
    //   .then(res => {
    //     // console.log(77777);
    //     // console.log(typeof(res.data));
    //     const listData = res.data;
    //     // finalData.push(listData);
    //
    //     this.setState({
    //       // data: [...this.state.data, ...res],
    //       data: listData.concat(this.state.data),
    //       page: this.state.page + 1,
    //       headerTitle: '刷新完成。。。',
    //       refreshing: false,
    //     });
    //   })
    //   .catch(err => {
    //     // this.setState({ error: err, loading: false, refreshing: false});
    //   });

    // console.log(this.props.requestUrl + this.state.page + this.props.requestArgs);
    // 'https://jz-c-test.doumi.com/api/v3/client/tbk/lists?page=1&pageSize=20&channel=meizhuanggehu',
    //https://jz-c-test.doumi.com/GET/api/v3/client/tbk/lists?page=1&pageSize=20&channel=meizhuanggehu
    fetch('https://jz-c-test.doumi.com/api/v3/client/tbk/lists?page=1&pageSize=20&channel=meizhuanggehu/',
      {
      // method: 'GET',
      headers: { 'accessToken': 'LmRlaxBOMt/BPKMG+ibiUJ0nJjjpXqI/AWkzNr8WJyUdciY43O5CavQ55pafA3K0zFfT7Zi6' },
    }
    )
      .then((response) => {
        console.log(response.headers);
        console.log('222222');
        response.json();
      })
      .then((res) => {
        console.log('111111');
        console.log(res.json());
        const listData = res.data;
        this.setState({
          // data: [...this.state.data, ...res],
          // data: listData.concat(this.state.data),
          data: this.state.data.concat(listData),
          page: this.state.page + 1,
          headerTitle: '刷新完成。。。',
          bottomTitle: '刷新完成。。。',
          refreshing: false,
        });
      })
      .catch(err => {
        // this.setState({ error: err, loading: false, refreshing: false});
      });
  };

  clickOnlineTeGongBtn = () => {
    this.setState({
      taoTaskViewIsShow: false,
    });
  };

  clickTaoTaskBtn = () => {
    this.setState({
      taoTaskViewIsShow: true,
    });
  };

  renderItem = ({item, index}) => (
    <TaoTaskListCell data={item} index={index}/>
  );

  onEndReached = () => {
    this.onRefresh();
  }


  render() {
    return (
      <View style={styles.container}>
        <TitleSegmentView/>
        <View style={styles.baseViewStyle}>

          {this.state.taoTaskViewIsShow
            ? <View
              style={styles.taoTaskViewStyle}
              // ref={(c) => this.taoTaskView = c}
            >
              <FlatList
                data={this.state.data}
                ListHeaderComponent={() => <Text style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  height: 30,
                  backgroundColor: 'orange',
                }}>
                  {this.state.headerTitle}
                </Text>
                }

                ListFooterComponent={
                  () => <Text style={{
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    height: 30,
                    backgroundColor: 'orange',
                  }}>
                    {this.state.bottomTitle}
                  </Text>}
                // ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#E5E5E5' }} />}
                // 为每个cell生成一个index
                // renderItem={({ item, index }) => <Text style={styles.item}>{index}</Text>}
                //  renderItem={({ item }) => <HomePageCell data={item} index={item.id} />}
                keyExtractor={(item, index) => index}
                renderItem={this.renderItem}
                onRefresh={this.onRefresh}
                refreshing={this.state.refreshing}

                // onEndReached={this.onEndReached}
                // onEndReachedThreshold={0.1}
              />


              {/*<Text>aaaaaaaaaaaaaaa</Text>*/}

              {/*<FlatList*/}
              {/*data={[*/}
              {/*{key: 'Devin'},*/}
              {/*{key: 'Jackson'},*/}
              {/*{key: 'James'},*/}
              {/*{key: 'Joel'},*/}
              {/*{key: 'John'},*/}
              {/*{key: 'Jillian'},*/}
              {/*{key: 'Jimmy'},*/}
              {/*{key: 'Julie'},*/}
              {/*]}*/}
              {/*renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}*/}
              {/*/>*/}

            </View>
            :
            <View
              style={styles.onlineTeGongViewStyle}
              ref={(c) => this.onlineTeGongView = c}
            >
              <Text>bbbbbbbbbbbb</Text>
            </View>
          }
        </View>


      </View>
    );
  }
}
