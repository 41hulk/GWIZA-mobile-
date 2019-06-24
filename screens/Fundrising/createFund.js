import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated}  from 'react-native';
import { Container, Header, Body, Content, Picker, Form, Item, Input, Label,  Button, Text, DatePicker, Icon } from 'native-base';
const { StatusBarManager } = NativeModules;
import NavBottom from '../NavBottom';
export default class createFund extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
    this.setState({ chosenDate: newDate });
    }
    onValueChange(value: string) {
        this.setState({
        selected: value
        });
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
      <Container>
        <Content>
        <Form style={styles.form}>
                <Item stackedLabel>
                    <Label style={styles.inputLabel}>Event Name</Label>
                    <Input style={{ color: "#000" }}/>
                </Item>
                <Item stackedLabel>
                    <Label style={styles.inputLabel}>Targeted Amount</Label>
                    <Input style={{ color: "#000" }} keyboardType = 'numeric'/>
                </Item>
                <Item stackedLabel>
                    <Label style={styles.inputLabel}>Start</Label>
                    <DatePicker
                        defaultDate={new Date(2000, 3, 12)}
                        minimumDate={new Date(1920, 1, 1)}
                        maximumDate={new Date(2005, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "#000" }}
                        placeHolderTextStyle={{ color: "#000" }}
                        onDateChange={this.setDate}
                        style={{ textAlign:'left' }}
                    />
                </Item>
                <Item stackedLabel>
                    <Label style={styles.inputLabel}>End</Label>
                    <DatePicker
                        defaultDate={new Date(2000, 3, 12)}
                        minimumDate={new Date(1920, 1, 1)}
                        maximumDate={new Date(2018, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "#000" }}
                        placeHolderTextStyle={{ color: "#000" }}
                        onDateChange={this.setDate}
                        style={{ textAlign:'left' }}
                    />
                </Item>

                <Text style={styles.typeContLabel}>Contribution Type</Text>
                <Item>
                    <Picker
                    mode="dropdown"
                    placeholderStyle={{ color: "#2874F0" }}
                    note={false}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                    >

                    <Picker.Item label="Open" value="key1" />
                    <Picker.Item label="Equal share" value="key0" />
                    </Picker>
                </Item>
                <Item stackedLabel>
                    <Label style={styles.inputLabel}>Contribution Limited Amount</Label>
                    <Input style={{ color: "#000" }} keyboardType = 'numeric'/>
                </Item>

                <Item stackedLabel>
                    <Label style={styles.inputLabel}>Event Description</Label>
                    <Input style={{ color: "#000" }}/>
                </Item>
                <Button block bordered light style={styles.saveBtn} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style = {styles.LoginText} autoCapitalize="characters"> SAVE CHANGES </Text>
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
      },
      typeContLabel:{
          color:'#57606a',
          paddingHorizontal:15,
          paddingVertical:10,

      }
});