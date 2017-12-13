import { AppRegistry, Platform } from 'react-native';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import HomePageVC from './views/HomePage';
import TeGongVC from './views/Tegong';
import MessageVC from './views/Message';
import MyVC from './views/My';
import DetailVC from './views/Detail';
import VerificationLoginVC from './views/LoginViews/VerificationLogin';
import PassWordLoginVC from './views/LoginViews/PasswordLogin';
import RegisterView from './views/LoginViews/RegisterView';


// TabNavigator(RouteConfigs, TabNavigatorConfig)
const TabRouteConfigs = {
  HomePageVC: {
    screen: HomePageVC,
  },
  TeGongVC: { screen: TeGongVC },
  MessageVC: { screen: MessageVC },
  MyVC: { screen: MyVC },
};

const TabNavigatorConfigs = {
  initialRouteName: 'TeGongVC',
  tabBarPosition: 'bottom',
  lazy: true,
  swipeEnabled: false, // 安卓禁止滑动切换tab
  // animationEnabled: false, // 点击选项卡切换界面是否需要动画

  tabBarOptions: {
    activeTintColor: 'black', // 选中时的文字颜色
    inactiveTintColor: 'black', // 未选中时的文字颜色
    showIcon: true, // 显示图标 用在安卓上
    // showLabel:false, // 不显示文字
    indicatorStyle: { // 取掉tabbar底部有个黄线
      height: 0, // 如TabBar下面显示有一条线，可以设高度为0后隐藏
    },
    style: { // 单个tab 样式设置  适配安卓tabbar默认是蓝色1
      backgroundColor: 'white', // TabBar 背景色
      height: 44,
    },

    tabStyle: { // tab bar 样式设置   适配安卓tabbar默认是蓝色2 配合上面的1一起使用
      backgroundColor: 'white', // TabBar 背景色
      height: 44,
    },
    iconStyle: { // 单个tab内文字和图标的 样式设置
      marginTop: 12,
      marginBottom: -7,
    },
    // activeBackgroundColor:'yellow', // 每个tabbarItem背景色
    // style:{backgroundColor:'green'}, // tabbar的样式
    // labelStyle:{color:'blue',fontSize:12}, //设置tabbarItem文字样式
  },

};

// 通过TabNavigator做路由映射
const MainScreenNavigator = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

const StackNavigatorRouteConfigs = {
  Tab: { screen: MainScreenNavigator },
  DetailVC: { screen: DetailVC },
  VerificationLoginVC: { screen: VerificationLoginVC },
  PassWordLoginVC: { screen: PassWordLoginVC },
  RegisterView: { screen: RegisterView },
};

const StackNavigatorConfig = {
  transitionConfig: (() => ({
    // forHorizontal:从右向左进入、forVertical:从下向上进入、forFadeFromBottomAndroid:从底部淡出。
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  })),

};

// 引入要用到的跳转页面
const MyNavigator = StackNavigator(StackNavigatorRouteConfigs, StackNavigatorConfig);

AppRegistry.registerComponent('StackNavigatorTabNavigatorDemo', () => MyNavigator);
