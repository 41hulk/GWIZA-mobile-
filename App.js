import React from 'react';
import { createStackNavigator, createAppContainer ,SafeAreaView} from 'react-navigation';
import {TouchableOpacity,}  from 'react-native';
import { Container, Header, Content, Button, View, Right, Body, Text,Footer, FooterTab,Icon} from 'native-base';
import Modal from "react-native-modal";
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import {StyleSheet,Platform}  from 'react-native';
import NavigationService from './NavigationService';
import Terms from './screens/terms';
import LockScreen from './screens/lock';
import Login from './screens/login';
import Register from './screens/register';
import Home from './screens/home';
import Home2 from './screens/home-2';
import Transaction from './screens/history';
import Settings from './screens/settings';
import Savings from './screens/Savings/savings';
import Paybills from './screens/paybills';
import Members from './screens/Savings/members';
import singleSaving from './screens/Savings/singleGroup';
import NewMember from './screens/Savings/newMember';
import Save from './screens/Savings/save';
import singleInvestment from './screens/Investments/singleInvestment';
import Investments from './screens/Investments/investments';
import Paytv from './screens/Paybills/payTv';
import Paywater from './screens/Paybills/payWater';
import Payinsurance from './screens/Paybills/payInsurance';
import Payfees from'./screens/Paybills/payFees';
import Payairtime from './screens/Paybills/payAirtime';
import Payelectricity from './screens/Paybills/payElectricity';
import Receipt from './screens/Paybills/receipt';
import Funds from './screens/Fundrising/funds';
import createFund from './screens/Fundrising/createFund';
import SingleFunds from './screens/Fundrising/singleFunds';
import Contribute from './screens/Fundrising/contribute';
import Myloans from './screens/Savings/myLoans';
import LoanConfirm from './screens/Savings/loanConfirm';
import LoanRequest from './screens/Savings/loanRequest';
import LoanDetails from './screens/Savings/LoanDetails';
import LoanPay from './screens/Savings/LoanPay';
import createGroup from './screens/Savings/createGroup';
const TopLevelNavigator = createStackNavigator({
    Terms: Terms,
    Login: Login,
    LockScreen:LockScreen,
    Register: Register,
    Home2: Home2,
    Home: Home,
    Transaction: { 
      screen: Transaction ,
      navigationOptions: () => ({
        title: 'Transactions',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        },
        header: {
          left: null
        },
        headerRight: (
          <Feather name="plus" size={25} style={styles.addIcon}/>
        ),
      }),
    },
    Settings: {
      screen: Settings ,
      navigationOptions: () => ({
        title: 'Settings',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        },
        header: {
          left: null
        },
        headerRight: (
          <Feather name="plus" size={25} style={styles.addIcon}/>
        ),
      }),
    },
    Savings : {
      screen: Savings,
      navigationOptions: () => ({
        title: 'My Groups',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        },
        headerRight: (
          <Feather name="plus" size={25} style={styles.addIcon} onPress={()=>NavigationService.navigate('createGroup')}/>
        ),
      }),
    },
    Investments : {
      screen: Investments,
      navigationOptions: () => ({
        title: 'Investment Opportunities',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      }),
    },
    Paybills : {
      screen: Paybills,
      navigationOptions: () => ({
        title: 'Pay Bills',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        },
        headerRight: (
          <Feather name="settings" size={25} style={styles.addIcon}/>
        ),
      }),
    },
    Members : {
      screen: Members,
      navigationOptions: () => ({
        title: 'Members',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        },
        headerRight: (
          <Feather name="plus" size={25} style={styles.addIcon} onPress={()=>NavigationService.navigate('NewMember')}/>
        ),
      }),
    },
    NewMember : {
      screen: NewMember,
      navigationOptions: () => ({
        title: 'Add New Members',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        },
      }),
    },
    singleSaving : {
      screen: singleSaving,
      navigationOptions: () => ({
        title: 'Amasezerano',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      }),
    },
    Save : {
      screen: Save,
      navigationOptions: () => ({
        title: 'Save to Group',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      }),
    },
    Transaction : {
      screen: Transaction,
      navigationOptions: () => ({
        title: 'History',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      }),
    },
    Settings : {
      screen: Settings,
      navigationOptions: () => ({
        title: 'Settings',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      }),
    },
    singleInvestment : {
      screen: singleInvestment,
      navigationOptions: () => ({
        title: 'Ubuhinzi',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        },
        headerRight: (
          <MaterialIcons name="done" size={25} style={styles.addIcon} onPress={()=>alert('Invest')}/>
        ),
      }),
    },
    Paytv:{
      screen : Paytv,
      navigationOptions: () => ({
        title: 'Pay TV',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      }),
    },
    Payfees:{
      screen : Payfees,
      navigationOptions: () => ({
        title: 'Pay School Fees',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      }),
    },
    Paywater:{
      screen : Paywater,
      navigationOptions: () => ({
        title: 'Pay Water',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      }),
    },
    Payairtime:{
      screen : Payairtime,
      navigationOptions: () => ({
        title: 'Pay Airtime',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      }),
    },
    Payinsurance:{
      screen : Payinsurance,
      navigationOptions: () => ({
        title: 'Pay Insurance',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      }),
    },
    Payelectricity:{
      screen : Payelectricity,
      navigationOptions: () => ({
        title: 'Pay Electricity',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      }),
    },
    Receipt:{
      screen : Receipt,
      navigationOptions: () => ({
        title: 'Receipts',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        },
        headerRight: (
          <Feather name="download-cloud" size={25} style={styles.addIcon} onPress={()=>alert('Download PDF')}/>
        ),
      }),
    },
    Funds:{
      screen : Funds,
      navigationOptions: () => ({
        title: 'Fundraising',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        },
        headerRight: (
          <Feather name="plus" size={25} style={styles.addIcon} onPress={()=>NavigationService.navigate('createFund')}/>
        ),
      })
    },
    createFund:{
      screen:createFund,
      navigationOptions: () => ({
        title: 'Create Event',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      })
    },
    Contribute:{
      screen:Contribute,
      navigationOptions: () => ({
        title: 'Contribute',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      })
    },
    SingleFunds:{
      screen : SingleFunds,
      navigationOptions: () => ({
        title: 'Jimmy BirthDay',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        },
        headerRight: (
          <MaterialIcons name="done" size={25} style={styles.addIcon} onPress={()=>alert('Complete Event')}/>
        ),
      })
    },
    LoanRequest:{
      screen : LoanRequest,
      navigationOptions: () => ({
        title: 'My Loans',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      })
    },
    LoanDetails:{
      screen : LoanDetails,
      navigationOptions: () => ({
        title: 'Loans Detail',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      })
    },
    LoanPay:{
      screen : LoanPay,
      navigationOptions: () => ({
        title: 'Loans Payment',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      })
    },
    LoanConfirm:{
      screen : LoanConfirm,
      navigationOptions: () => ({
        title: 'Please Confirm',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        }
      })
    },
    Myloans:{
      screen : Myloans,
      navigationOptions: () => ({
        title: 'My Loans',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        },
        headerRight: (
          <Feather name="plus" size={25} style={styles.addIcon} onPress={()=>NavigationService.navigate('LoanRequest')}/>
        ),
      })
    },
    createGroup:{
      screen : createGroup,
      navigationOptions: () => ({
        title: 'Create Group',
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor: '#f39400',
        },
      })
    },
},
{
  initialRouteName : 'LockScreen'
});
if (Platform.OS === "android") {
  // removes extra space at top of header on android
  SafeAreaView.setStatusBarHeight(0);
}

const AppContainer = createAppContainer(TopLevelNavigator);

export default class App extends React.Component {
  render() {
    return (
      
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f39400',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon:{
    color:"#fff",
    paddingRight:20,
  }
});