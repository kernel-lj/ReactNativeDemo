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
  TouchableOpacity,
  Button,
  Modal,
  TouchableHighlight,
} from 'react-native';
import TitleSegmentView from './TegongPageSubViews/TegongTitleSegment';
import { ToastShort } from '../utils/ToastUtil';
import TaoTaskListCell from './TegongPageSubViews/TaoTaskListCell';

Dimensions = require('Dimensions');
ScreenWidth = Dimensions.get('window').width;
ScreenHeight = Dimensions.get('window').height;
ScreenScale = Dimensions.get('window').scale;


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: ScreenWidth,
    // height: ScreenHeight - 64 - 44,
    // backgroundColor: '#FAF8EF',
    backgroundColor: 'white',
    // flexDirection: 'row',

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
    // backgroundColor: 'red',
    flex: 1,
  },
  onlineTeGongViewStyle: {
    backgroundColor: 'green',
    flex: 1,
  },
  baseViewStyle: {
    flexDirection: 'row',
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: "black",
    fontSize: 22
  }
});

export default class Tegong extends Component<{}> {
  static navigationOptions = {
    header: null, // 隐藏导航栏
    headerTitle: ' ',
    tabBarLabel: '特工',

    tabBarIcon: ({ focused }) => (
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
      requestPullDown: true,
      windowViewIsShow: false,
      modalVisible: false,
    };
  }

  showModal = () => {
    // alert('000');
    // this.refs.modal1.open();
    // <View>
    // </View>
    this.setState(
      {
        modalVisible: true,
      }
    )
  }

  // showWindow = () =>(
  //   <Modal
  //     animationType={"slide"}
  //     transparent={false}
  //     visible={this.state.modalVisible}
  //     onRequestClose={() => {
  //       alert("Modal has been closed.")
  //     }}
  //   >
  //     <View style={{marginTop: 22}}>
  //       <View>
  //         <Text>Hello World!</Text>
  //
  //         <TouchableHighlight onPress={() => {
  //           this.setModalVisible(!this.state.modalVisible)
  //         }}>
  //           <Text>Hide Modal</Text>
  //         </TouchableHighlight>
  //
  //       </View>
  //     </View>
  //   </Modal>
  // )

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  componentWillMount() {
    NetInfo.addEventListener(
      'connectionChange',
      this.handleConnectionInfoChange,
    );
    NetInfo.getConnectionInfo().done((connectionInfo) => {
      this.setState({ connectionInfo });
    });
  }

  componentDidMount() {
    // alert('00');
    this.onRefresh();

    this.subscription = DeviceEventEmitter.addListener('clickOnlineTeGongBtn', this.clickOnlineTeGongBtn);
    this.subscription = DeviceEventEmitter.addListener('clickTaoTaskBtn', this.clickTaoTaskBtn);
    this.subscription = DeviceEventEmitter.addListener('clickTaoTaskShareBtn', this.showModal);

  }

  componentWillUnmount() {
    this.subscription.remove();

    NetInfo.removeEventListener(
      'connectionChange',
      this.handleConnectionInfoChange,
    );
  }
  onRefresh = () => {
    // console.log(this.state.connectionInfo);
    // 首次进来取不到当前的网络状态，为null，所以一秒后在执行一次onRefresh()方法就会取得当前有没有联网
    if (!this.state.connectionInfo) {
      setTimeout(() => {
        this.onRefresh();
      }, 100);
    } else {
      // console.log(this.state.connectionInfo);
      // 解决 1.当前处于WiFi状态，断开WiFi后，不显示请检查网络设置的问题
      //     2.当前处于无网状态，断开WiFi后 后,不刷新的问题
      if (this.state.connectionInfo.type === 'none') {
        ToastShort('请检查网络设置');
        this.setState({
          headerTitle: '请检查网络设置',
          bottomTitle: '请检查网络设置',
        });
      } else if (this.state.connectionInfo.type === 'wifi') {
        // alert('09090');

        this.setState({
          headerTitle: '正在刷新。。。',
          bottomTitle: '正在刷新。。。',
          // refreshing: true,
        });
        this.requestData();
      }
    }

    if (Platform.OS === 'ios') {
      if (this.state.connectionInfo === 'wifi' || this.state.connectionInfo === 'mobile') { // 有网
        this.setState({
          headerTitle: '正在刷新。。。',
          bottomTitle: '正在刷新。。。',
          refreshing: true,
        });
        this.requestData();
      } else if (this.state.connectionInfo === 'none') { // 无网
        ToastShort('请检查网络设置');
        this.setState({
          headerTitle: '请检查网络设置',
          bottomTitle: '请检查网络设置',

        });
      }
    } else {
      if (this.state.connectionInfo === 'WIFI' || this.state.connectionInfo === 'MOBILE') { // 有网
        this.setState({
          headerTitle: '正在刷新。。。',
          bottomTitle: '正在刷新。。。',

          refreshing: true,
        });
        this.requestData();
      } else if (this.state.connectionInfo === 'NONE') { // 无网
        ToastShort('请检查网络设置');
        this.setState({
          headerTitle: '请检查网络设置',
          bottomTitle: '请检查网络设置',
        });
      }
    }
  };

  handleConnectionInfoChange = (connectionInfo) => {
    this.setState({
      connectionInfo,
    });
  };

  requestData = () => {
    let url;
    if (this.state.requestPullDown) {
      url = this.props.requestUrl + '1' + this.props.requestArgs;
    } else if (!this.state.requestPullDown) {
      url = this.props.requestUrl + this.state.page + this.props.requestArgs;
    }
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'accessToken': 'LmRlaxBOMt/BPKMG+ibiUJ0nJjjpXqI/AWkzNr8WJyUdciY43O5CavQ55pafA3K0zFfT7Zi6',
      },
    })
      .then(res => res.json())
      .then((res) => {
        // console.log('111111');
        // console.log(res.data);
        const listData = res.data;
        // console.log(listData);
        this.setState({
          // data: [...this.state.data, ...res],
          data: listData.concat(this.state.data),
          // data: this.state.data.concat(listData),
          // data: listData,
          page: this.state.page + 1,
          headerTitle: '刷新完成。。。',
          bottomTitle: '刷新完成。。。',
          refreshing: false,
        });
      })
      .catch(err => {
        // console.log('999999999');
        console.log(err);
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

  clickTaoTaskShareBtn = () => {
    this.setState({
      windowViewIsShow: true,
    });
  }

  renderItem = ({item, index}) => (
    <TaoTaskListCell data={item} index={index}/>
  );

  onEndReached = () => {
    this.onRefresh();
  };

  renderFlatView = () => (
    <View>
      <TitleSegmentView />
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
              onEndReached={this.onEndReached}
              onEndReachedThreshold={0.1}
              ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'rgba(0, 0, 0, 0.00001)' }} />}

            />
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

  clickWindowView = () => {
    this.setState({
      windowViewIsShow: false,
    });
  }

  renderWindowView = () => (
    <Modal
      animationType={"none"}
      transparent={true}
      visible={this.state.modalVisible}
      // onRequestClose={() => {
      //   alert("Modal has been closed.")
      // }}
    >
      <View style={{ marginTop:0, backgroundColor: 'rgba(0,0,0,0.2)', flex: 1, height: 1000 }}>
        <View>
          <Text style={{backgroundColor: 'red', height: 200, marginTop: 30}}>淘任务分享!</Text>

          <TouchableHighlight onPress={() => {
            this.setModalVisible(!this.state.modalVisible)
          }}>
            <Text style={{ marginTop: 210,height: 100 ,backgroundColor:'green'}}>Hide Modal</Text>
          </TouchableHighlight>

        </View>
      </View>
    </Modal>
  );


  render() {
    return (
      <View style={styles.container}>

        {/* {this.state.windowViewIsShow ? this.showWindowView() : this.renderFlatView()} */}
        {this.renderFlatView()}

        {this.renderWindowView()}
      </View>
    );
  }
}
