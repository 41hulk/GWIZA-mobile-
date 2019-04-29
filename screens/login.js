import React, { Component } from 'react';
import { StackNavigator,TabNavigator } from "react-navigation";
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated}  from 'react-native';
import { Container, Header, Title, Content, Footer,Item, FooterTab, Button,View, Left, Right, Body, Icon, Text } from 'native-base';
import PhoneInput from 'react-native-phone-input';
export default class Login extends React.Component {
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
              </Body>
              <View style={styles.Content}>
                <View style={styles.LoginInput}>
                  <Item  style={styles.username}>
                    <PhoneInput ref='phone' countriesList={require('../data/countries.json')}  initialCountry='rw' style={{color:'#fff'}}/>
                  </Item>
                </View>
                <Button block bordered light style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Register')}> 
                  <Text style = {styles.LoginText} autoCapitalize="characters"> CONTINUE </Text>
                </Button>
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
    paddingTop:30,
    paddingBottom:30,
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
    top:120,
    left:0,
    right:0,
  },
  logoText:{
    flex:1,
    color:'#fff',
    fontSize: 35,
    paddingTop:120,
    paddingBottom:90,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  loginBtn:{
    position:'relative',
    margin:40,
    marginTop:0,
    marginBottom:0,
    backgroundColor:'#fff',
    color:'#183366',
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
  }
});