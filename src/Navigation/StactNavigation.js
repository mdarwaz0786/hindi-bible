import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home/HomeScreen.js';
import ContactUsScreen from '../Screens/ContactUs/ContactUsScreen.js';
import LatestNewsScreen from '../Screens/LatestNews/LatestNewsScreen.js';
import IntroVideoScreen from '../Screens/IntroVideo/IntroVideoScreen.js';
import RegisterScreen from '../Screens/Register/RegisterScreen.js';
import LoginScreen from '../Screens/Login/LoginScreen.js';
import LoginSuccessScreen from '../Screens/LoginSuccess/LoginSuccess.js';
import MainScreen from '../Screens/Main/MainScreen.js';
import BibleStudyScreen from '../Screens/BibleStudy/BibleStudyScreen.js';
import BibleBooksScreen from '../Screens/BibleBooks/BibleBooksScreen.js';
import OldTestamentScreen from '../Screens/OldTestament/OldTestamentScreen.js';
import GenesisScreen from '../Screens/Genesis/GenesisScreen.js';
import SingleGenesisScreen from '../Screens/Genesis/SingleGenesisScreen.js';
import NewTestamentScreen from '../Screens/NewTestament/NewTestamentScreen.js';
import MattScreen from '../Screens/Matt/MattScreen.js';
import SingleMattScreen from '../Screens/Matt/SingleMattScreen.js';
import MemberLoginScreen from '../Screens/MemberLogin/MemberLoginScreen.js';
import YourContributionScreen from '../Screens/YourContribution/YourContributionScreen.js';
import PayDirectScreen from '../Screens/YourContribution/PayDirectScreen.js';
import MemberLoginHomeScreen from '../Screens/MemberLogin/MemberLoginHomeScreen.js';
import EditProfileScreen from '../Screens/MemberLogin/EditProfileScreen.js';
import LoginMemberScreen from '../Screens/MemberLogin/LoginMemberScreen.js';
import PayThruAppScreen from '../Screens/YourContribution/PayThruAppScreen.js';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ContactUs" component={ContactUsScreen} />
    <Stack.Screen name="LatestNews" component={LatestNewsScreen} />
    <Stack.Screen name="IntroVideo" component={IntroVideoScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="LoginSuccess" component={LoginSuccessScreen} />
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="BibleStudy" component={BibleStudyScreen} />
    <Stack.Screen name="BibleBooks" component={BibleBooksScreen} />
    <Stack.Screen name="OldTestament" component={OldTestamentScreen} />
    <Stack.Screen name="Genesis" component={GenesisScreen} />
    <Stack.Screen name="SingleGenesis" component={SingleGenesisScreen} />
    <Stack.Screen name="NewTestament" component={NewTestamentScreen} />
    <Stack.Screen name="Matt" component={MattScreen} />
    <Stack.Screen name="SingleMatt" component={SingleMattScreen} />
    <Stack.Screen name="MemberLoginHome" component={MemberLoginHomeScreen} />
    <Stack.Screen name="MemberLogin" component={MemberLoginScreen} />
    <Stack.Screen name="LoginMember" component={LoginMemberScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    <Stack.Screen name="YourContribution" component={YourContributionScreen} />
    <Stack.Screen name="PayDirect" component={PayDirectScreen} />
    <Stack.Screen name="PayThruApp" component={PayThruAppScreen} />
  </Stack.Navigator>
);

export default StackNavigation;
