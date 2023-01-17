import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Setting from '../screen/Setting';
import Notifications from '../screen/Notifications';
import {StyleSheet} from 'react-native';
import CustomTabBarButton from '../components/CustomTabBarButton';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: '#990000',
        tabBarActiveTintColor: '#1B2430',
        tabBarIcon: ({color}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'ios-home-sharp';
              break;

            case 'Setting':
              iconName = 'settings';
              break;

            case 'Profile':
              iconName = 'person';
              break;

            case 'Notifications':
              iconName = 'md-notifications-sharp';
              break;
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: props => <CustomTabBarButton route="Home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton route="Notifications" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    bottom: 25,
    right: 10,
    left: 10,
    height: 58,
    elevation: 0,
  },
});
