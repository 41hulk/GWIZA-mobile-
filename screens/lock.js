import React, { Component } from 'react';
import { StackNavigator,TabNavigator,} from "react-navigation";
import {StyleSheet,Image,Alert,NativeModules, processColor,TouchableHighlight,Animated}  from 'react-native';
import {createIconSetFromFontello,MaterialIcons, FontAwesome,Feather,} from '@expo/vector-icons';
import { Container, Header, Title, Content, Footer,Item, FooterTab, Button,View, Left, Right, Body, Icon, Text } from 'native-base';
import PhoneInput from 'react-native-phone-input';
import PinView from 'react-native-pin-view';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Row } from 'react-native-easy-grid';
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
      <View style={styles.pageContent}>
        <Header androidStatusBarColor="#690002" iosBarStyle="light-content" style={{display:'none'}}/>
        <View style={styles.lockView}>
            <Body>
              <MaterialCommunityIcons name="lock" size={35} style={styles.iconLock}/>
              <Text style={styles.locklabelText}>Please Enter Your PIN</Text>
            </Body>
        </View>
        <View style={styles.Content}>
          <PinView onComplete={this.onComplete} pinLength={5} inputActiveBgColor="#fff" buttonBgColor="#0000001c"	 buttonTextColor="#fff" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f39400',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Content:{
    overflow: 'hidden',
    position:'relative',
    bottom:0,
    top:30,
  },
  upperContent:{
  },
  logo:{
    justifyContent:'center',
    alignItems:'center',
    paddingTop:0,
    paddingBottom:0,
  },
  pageContent:{
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent : 'center',
    flexDirection:'column',
    backgroundColor: '#f39400',
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
    fontWeight:'bold',
    paddingTop:20,
    paddingBottom:20,
    justifyContent: 'center',
  },
  lockView:{
    position: 'absolute',
    top:50,
    left: '30%',
    flex:1,
    flexGrow:1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconLock:{
    color:'#fff',
    backgroundColor:'#0000001c',
    padding:20,
    width:80,
    height:80,
    flex:1,
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:50,

  }
});