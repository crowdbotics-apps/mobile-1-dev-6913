import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen127380Navigator from '../features/BlankScreen127380/navigator';
import BlankScreen117379Navigator from '../features/BlankScreen117379/navigator';
import BlankScreen107378Navigator from '../features/BlankScreen107378/navigator';
import Messaging7376Navigator from '../features/Messaging7376/navigator';
import EmailAuth7375Navigator from '../features/EmailAuth7375/navigator';
import CalendarView7374Navigator from '../features/CalendarView7374/navigator';
import Messaging7373Navigator from '../features/Messaging7373/navigator';
import EmailAuth7372Navigator from '../features/EmailAuth7372/navigator';
import CalendarView7371Navigator from '../features/CalendarView7371/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen127380: { screen: BlankScreen127380Navigator },
BlankScreen117379: { screen: BlankScreen117379Navigator },
BlankScreen107378: { screen: BlankScreen107378Navigator },
Messaging7376: { screen: Messaging7376Navigator },
EmailAuth7375: { screen: EmailAuth7375Navigator },
CalendarView7374: { screen: CalendarView7374Navigator },
Messaging7373: { screen: Messaging7373Navigator },
EmailAuth7372: { screen: EmailAuth7372Navigator },
CalendarView7371: { screen: CalendarView7371Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
