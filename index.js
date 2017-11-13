import { AppRegistry } from 'react-native';

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
  initialRouteName: 'HomePageVC',
  tabBarPosition: 'bottom',
  lazy: true,

  tabBarOptions: {
    activeTintColor: 'black', // 选中时的文字颜色
    inactiveTintColor: 'green', // 未选中时的文字颜色
    // showIcon: false, //不显示图标
    // showLabel:false, //不显示文字

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
