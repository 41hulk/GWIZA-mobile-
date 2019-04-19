import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated}  from 'react-native';
import { Container, Header, Content, Form,Icon, Item, Picker,Label,Input,Button,Text } from 'native-base';
export default class payTv extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item picker >
                <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Service Provider"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="DSTV" value="key0" />
                <Picker.Item label="Startimes" value="key1" />
                <Picker.Item label="Canal +" value="key2" />
                <Picker.Item label="Gotv" value="key3" />
              </Picker>
            </Item>
            <Item stackedLabel>
                <Label style={styles.inputLabel}>Card Number</Label>
                <Input style={{ color: "#000" }} keyboardType = 'numeric'/>
            </Item>
            <Item stackedLabel>
                <Label style={styles.inputLabel}>Amount</Label>
                <Input style={{ color: "#000" }} keyboardType = 'numeric'/>
            </Item>
            <Item picker>
                <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Package 1" value="key0" />
                <Picker.Item label="Package 2" value="key1" />
                <Picker.Item label="Package 3" value="key2" />
                <Picker.Item label="package 4" value="key3" />
                <Picker.Item label="package 5" value="key4" />
              </Picker>
            </Item>
            <Button block bordered light style={styles.saveBtn} onPress={() => this.props.navigation.navigate('Home')}>
                <Text style = {styles.LoginText} autoCapitalize="characters"> Pay Bill </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
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
    saveBtn:{
      position:'relative',
      margin:40,
      marginTop:50,
      marginBottom:0,
      backgroundColor:'#f39400',
      color:'#fff',
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
      color:'#fff',
    },
    passwordText:{
      margin:20,
    },
    username:{
      margin:0,
    },
    usernameText:{
      color:'#000',
      borderColor:'transparent',
      borderRightColor:'#000',
      borderWidth:1,
    },
    usernameInput:{
      color:'#000',
    },
    passwordInput:{
      color:'#000',
    },
    btnContainer:{
      position:'relative',
      marginTop:10,
      margin:40,
    },
    form:{
     paddingTop:20,
    },
    forgetPasswordText:{
      color:'#000',
      textAlign:'center',
      lineHeight:30,
      paddingTop:40,
      paddingBottom:40,
    },
    SignupText:{
      color:'#000',
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