import { AppRegistry } from 'react-native';
import App from './App';
import HomePageVC from './views/HomePage'
import TegongVC from './views/Tegong'
import MessageVC from './views/Message'
import MyVC from './views/My'
import DetailVC from './views/Detail'

import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';

// 通过TabNavigator做路由映射
const MainScreentNavigator=TabNavigator({
    HomePageVC:{screen:HomePageVC},
    TegongVC:{screen:TegongVC},
    MessageVC:{screen:MessageVC},
    MyVC:{screen:MyVC},
});

//引入要用到的跳转页面
const  MyNavigatior = StackNavigator({
    Main:{screen:MainScreentNavigator},
    DetailVC:{screen:DetailVC},
});

AppRegistry.registerComponent('StackNavigatorTabNavigatorDemo', () => MyNavigatior);
