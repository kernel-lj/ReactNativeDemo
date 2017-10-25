import { AppRegistry } from 'react-native';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import App from './App';
import HomePageVC from './views/HomePage'
import TegongVC from './views/Tegong'
import MessageVC from './views/Message'
import MyVC from './views/My'
import DetailVC from './views/Detail'

import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,

} from 'react-navigation';



// TabNavigator(RouteConfigs, TabNavigatorConfig)
const TabRouteConfigs = {
    HomePageVC:{
        screen:HomePageVC,
        // navigationOptions: ({navigation}) => ({
        //     tabBarLabel: '首页',
        //     tabBarIcon: ({focused, tintColor}) => (
        //         <TabBarItem
        //             tintColor={tintColor}
        //             focused={focused}
        //             normalImage={require('./img/btn_home_normal.png')}
        //             selectedImage={require('./img/btn_chat_selected.png')}
        //         />
        //     ),
        // }),
    },
    TeGongVC:{screen:TegongVC},
    MessageVC:{screen:MessageVC},
    MyVC:{screen:MyVC},
};

const TabNavigatorConfigs = {
    initialRouteName: 'HomePageVC',
    // tabBarComponent: TabBarTop,
    tabBarPosition: 'bottom',
    lazy: true,

    tabBarOptions: {
        activeTintColor: 'black', //选中时的文字颜色
       inactiveTintColor: 'green', //未选中时的文字颜色
        // showIcon: false, //不显示图标
        // showLabel:false, //不显示文字

        // activeBackgroundColor:'yellow', //每个tabbarItem背景色
        // style:{backgroundColor:'green'}, //tabbar的样式
        // labelStyle:{color:'blue',fontSize:12}, //设置tabbarItem文字样式
    },

};

// 通过TabNavigator做路由映射
const MainScreentNavigator=TabNavigator(TabRouteConfigs,TabNavigatorConfigs);


const StackNavigatorRouteConfigs = {
    Tab:{screen:MainScreentNavigator},
    DetailVC:{screen:DetailVC},
}

const StackNavigatorConfig = {
    mode: 'modal',
}
//引入要用到的跳转页面
const  MyNavigatior = StackNavigator(StackNavigatorRouteConfigs,StackNavigatorConfig);

AppRegistry.registerComponent('StackNavigatorTabNavigatorDemo', () => MyNavigatior);
