import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated}  from 'react-native';
import { Container, Header, Content, Form,Icon, Item, Picker,Label,Input,Button,Text, View } from 'native-base';
import NavigationService from '../../NavigationService';
import NavBottom from '../NavBottom';
export default class payInsurance extends Component {
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
            <View style={{margin:10}}>
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
                  <Picker.Item label="SORAS" value="key0" />
                  <Picker.Item label="UAP" value="key1" />
                  <Picker.Item label="RADIANT" value="key2" />
                  <Picker.Item label="PHOENIX" value="key3" />
                </Picker>
              </Item>
              <Item picker>
                  <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Insurance Service"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Life Insurance" value="key3" />
                  <Picker.Item label="Motor Insurance" value="key4" />
                  <Picker.Item label="Bonds Insurance" value="key5" />
                  <Picker.Item label="Fire Insurance" value="key6" />
                </Picker>
              </Item>

              <Item picker>
                  <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Insurance Service"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Life Insurance" value="key7" />
                  <Picker.Item label="Motor Insurance" value="key8" />
                  <Picker.Item label="Bonds Insurance" value="key9" />
                  <Picker.Item label="Fire Insurance" value="key10" />
                </Picker>
              </Item>
              <Item picker>
                  <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Insurance Type"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Third Party" value="key0" />
                  <Picker.Item label="Comprehensive" value="key1" />
                </Picker>
              </Item>
            </View>
            <Item stackedLabel>
                <Label style={styles.inputLabel}>Names</Label>
                <Input style={{ color: "#000" }} keyboardType = 'numeric'/>
            </Item>
            <Item stackedLabel>
                <Label style={styles.inputLabel}>Amount</Label>
                <Input style={{ color: "#000" }} keyboardType = 'numeric'/>
            </Item>
            <View style={{margin:10}}>
            <Item picker>
                <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Duration"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="1 Week" value="key11" />
                <Picker.Item label="Comprehensive" value="key12" />
                <Picker.Item label="1 Day" value="key13" />
                <Picker.Item label="2 Days" value="key14" />
                <Picker.Item label="3 Days" value="key14" />
                <Picker.Item label="8 Days" value="key15" />
                <Picker.Item label="15 Days" value="key16" />
                <Picker.Item label="1 Month" value="key17" />
                <Picker.Item label="2 Month" value="key18" />
                <Picker.Item label="3 Month" value="key19" />
                <Picker.Item label="4 Month" value="key20" />
                <Picker.Item label="5 Month" value="key21" />
                <Picker.Item label="6 Month" value="key22" />
                <Picker.Item label="7 Month" value="key23" />
                <Picker.Item label="12 Month" value="key24" />
              </Picker>
            </Item>
            </View>
           
            <Button block bordered light style={styles.saveBtn} onPress={()=>NavigationService.navigate('Receipt')}>
                <Text style = {styles.LoginText} autoCapitalize="characters"> Pay Insurance </Text>
            </Button>
          </Form>
        </Content>
        <NavBottom/>
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