import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated}  from 'react-native';
import { Container, Header, Body, Content, Form, Item, Input, Label, Button, Text, DatePicker, Icon } from 'native-base';
const { StatusBarManager } = NativeModules;
export default class FormExample extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
    this.setState({ chosenDate: newDate });
    }
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
      <Container style={styles.container}>
        <Header androidStatusBarColor="#690002" iosBarStyle="light-content" style={{display:'none'}}/>
        <Content style = {styles.pageContent}>
            <Body>
                <Image style={styles.logo}  source={require('../assets/images/logo-white.png')} disabled='false'/>
            </Body>
            <Form style={styles.form}>
                <Item  disabled success>
                    <Input disabled value={'+250 789 396 586'} keyboardType = 'numeric' style={{ color: "#fff" }}/>
                    <Icon name='checkmark-circle' style={{ color: "#fff" }}/>
                </Item>
                <Item stackedLabel>
                    <Label style={styles.inputLabel}>First Name</Label>
                    <Input style={{ color: "#fff" }}/>
                </Item>
                <Item stackedLabel>
                    <Label style={styles.inputLabel}>Last Name</Label>
                    <Input style={{ color: "#fff" }}/>
                </Item>
                <Item stackedLabel>
                    <Label style={styles.inputLabel}>ID number</Label>
                    <Input style={{ color: "#fff" }} keyboardType = 'numeric'/>
                </Item>
                <Item stackedLabel>
                    <Label style={styles.inputLabel}>Date of Birth</Label>
                    <DatePicker
                        defaultDate={new Date(2003, 3, 12)}
                        minimumDate={new Date(1920, 1, 1)}
                        maximumDate={new Date(2005, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "#fff" }}
                        placeHolderTextStyle={{ color: "#fff" }}
                        onDateChange={this.setDate}
                        style={{ textAlign:'left' }}
                    />
                </Item>
                <Item stackedLabel>
                    <Label style={styles.inputLabel}>Lock Screen PIN</Label>
                    <Input style={{ color: "#fff" }} keyboardType = 'numeric'/>
                </Item>
                <Button block bordered light style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style = {styles.LoginText} autoCapitalize="characters"> Register </Text>
                </Button>
            </Form>
        </Content>
      </Container>
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
        width:400,
        height:200,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:0,
        paddingBottom:20,
      },
      form:{
          padding:20,
          paddingTop:0,
          justifyContent:'center',
      },
      inputLabel:{
        color:'#fff',
        fontSize:14,
      },
      pageContent:{
        flex:1,
        position:'absolute',
        top:0,
        left:0,
      },
      logoText:{
        flex:1,
        color:'#fff',
        fontSize: 35,
        paddingTop:50,
        paddingBottom:50,
        fontWeight:'bold',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
      loginBtn:{
        position:'relative',
        margin:40,
        marginTop:50,
        marginBottom:0,
        backgroundColor:'#fff',
        color:'#183366',
      },
      LoginText:{
        color:'#183366',
      },
      passwordInput:{
        color:'#fff',
      },
      btnContainer:{
        position:'relative',
        marginTop:10,
        margin:40,
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