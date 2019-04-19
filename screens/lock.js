import React, { Component } from 'react';
import { StackNavigator,TabNavigator,} from "react-navigation";
import {StyleSheet,Image,Alert,NativeModules, processColor,TouchableHighlight,Animated}  from 'react-native';
import { Container, Header, Title, Content, Footer,Item, FooterTab, Button,View, Left, Right, Body, Icon, Text } from 'native-base';
import PhoneInput from 'react-native-phone-input';
import PinView from 'react-native-pin-view';
export default class LockScreen extends React.Component {
  static navigationOptions = {
    header: null
  }  
  state={
    isReady: false
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({isReady:true})
  }
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.state = {
        pin: "07852"
    }
  }
  onComplete(val, clear) {
    clear();
    if(val!==this.state.pin){
      clear();
      Alert.alert('Oops','Your PIN is Incorrect !!!',)
    }
    else{
      this.props.navigation.navigate('Home2')
    }
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <View style={styles.container}>
        <Header androidStatusBarColor="#690002" iosBarStyle="light-content" style={{display:'none'}}/>
            <View style = {styles.pageContent}>
              <Body>
                <Image style={styles.logo}  source={require('../assets/images/logo-white.png')} disabled='false'/>
                <Text style={styles.locklabelText}>Please Enter Your PIN</Text>
              </Body>
              <View style={styles.Content}>
                <PinView onComplete={this.onComplete} pinLength={5} inputActiveBgColor="#fff" />
              </View>
          </View>
      </View>
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
  Content:{ 
    overflow: 'hidden',
    position:'relative',
  },
  logo:{
    justifyContent:'center',
    alignItems:'center',
    paddingTop:0,
    paddingBottom:0,
  },
  signupSection:{
    color:'#fff',
    textAlign:'center',
  },
  signupText:{
    color:'#fff',
    fontWeight:'bold',
  },
  pageContent:{
    flex:1,
    position:'absolute',
    top:0,
    left:0,
  },
  copyrightText:{
    flex:1,
    color:'#fff',
    bottom:0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    lineHeight:100,
  },
  LoginInput:{
    position:'relative',
    margin:40,
    marginTop:20,
    marginBottom:20,
  },
  LoginText:{
    color:'#183366',
  },
  passwordText:{
    margin:20,
  },
  username:{
    margin:0,
  },
  usernameText:{
    color:'#fff',
    borderColor:'transparent',
    borderRightColor:'#fff',
    borderWidth:1,
  },
  usernameInput:{
    color:'#fff',
  },
  passwordInput:{
    color:'#fff',
  },
  btnContainer:{
    position:'relative',
    marginTop:10,
    margin:40,
  },
  forgetPasswordText:{
    color:'#fff',
    textAlign:'center',
    lineHeight:30,
    paddingTop:40,
    paddingBottom:40,
  },
  SignupText:{
    color:'#fff',
    textAlign:'right',
    marginTop:-25,
  },
  textCenter:{
    textAlign:'center',
  },
  pullLeft:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  pullRight:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  locklabelText:{
    color:'#000',
    paddingBottom:20,
    fontWeight:'bold',
  }
});