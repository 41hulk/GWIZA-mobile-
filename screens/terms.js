import React from 'react';
import { StackNavigator,TabNavigator } from "react-navigation";
import {StyleSheet,Image,View, processColor,ScrollView}  from 'react-native';
import {Body,Text,Item,Button,Content,Header} from 'native-base';
import PhoneInput from 'react-native-phone-input';

export default class Terms extends React.Component {
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
        <View style = {styles.pageContent} scrollEnabled={true}>
              <Body>
                <Image style={styles.logo}  source={require('../assets/images/logo-white.png')} disabled='false'/>
              </Body>
              <View style={styles.Content}>
                <Text style={styles.terms}>
                    This user agreement is a contract between you and Gwiza, Inc. governing your use of your Gwiza account and the Gwiza services. It applies to Rwanda. Gwiza accounts only. 
                    If you are an individual, you must be a resident of Rwanda or one of its territories and at least 18 years old, 
                    or the age of majority in your state of residence to open a Rwanda. 
                </Text>
                <Text style={styles.terms}>
                    governing your use of your Gwiza account and the Gwiza services. It applies to Rwanda. Gwiza accounts only. 
                    If you are an individual, you must be a resident of Rwanda or one of its territories and at least 18 years old, 
                    or the age of majority in your state of residence to open a Rwanda. 
                </Text>
                <Text style={styles.terms1}>
                    Gwiza account and use the Gwiza services. If you are a business, the business must be organized in, operating in, or a resident of,
                    Rwanda or one of its territories to open a Rwanda. Gwiza account and use the Gwiza services.
                </Text>
                <Button block bordered light style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style = {styles.LoginText} autoCapitalize="characters"> AGREE TERMS & CONDITIONS  </Text>
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
        overflow: 'scroll',
        position:'relative',
      },
      terms:{
        textAlign:'justify',
        fontSize:14,
        color:'#fff',
        lineHeight:20,
        paddingHorizontal:30,
        paddingBottom:10,
      },
      terms1:{
        textAlign:'justify',
        fontSize:14,
        color:'#fff',
        lineHeight:20,
        paddingHorizontal:30,
        paddingBottom:50,
      },
      logo:{
        width:400,
        height:200,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:40,
        paddingBottom:40,
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
        top:20,
        left:0,
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