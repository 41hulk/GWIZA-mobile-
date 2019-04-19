import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated}  from 'react-native';
import { Container, Header, Content, Form,Icon, Item, Picker,Label,Input,Button,Text,View } from 'native-base';
import NavigationService from '../../NavigationService';
import RNPickerSelect from 'react-native-picker-select';
import NavBottom from '../NavBottom';
export default class payFees extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };

    this.inputRefs = {};

    this.state = {
        favColor: undefined,
        items: [
            {
                label: 'La Colombiere',
                value: 'colombiere',
            },
            {
                label: 'Riviera High School',
                value: 'riviera',
            },
            {
                label: 'Lycee de Kigali',
                value: 'Lycee',
            },
            {
                label: 'Green Hills Academy',
                value: 'greenhills',
            },
        ],
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
                <RNPickerSelect
                    placeholder={{
                        label: 'Select School',
                        value: null,
                        color: '#000',
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            favColor: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.name.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favColor}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />
            </View>
            <Item stackedLabel>
                <Label style={styles.inputLabel}>Student Code</Label>
                <Input style={{ color: "#000" }} />
            </Item>
            <Item stackedLabel>
                <Label style={styles.inputLabel}>Student Name</Label>
                <Input style={{ color: "#000" }} />
            </Item>
            <Item stackedLabel>
                <Label style={styles.inputLabel}>Amount</Label>
                <Input style={{ color: "#000" }} keyboardType = 'numeric'/>
            </Item>
            <Button block bordered light style={styles.saveBtn} onPress={()=>NavigationService.navigate('Receipt')}>
                <Text style = {styles.LoginText} autoCapitalize="characters"> Pay Bill </Text>
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

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    inputAndroid: {
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});