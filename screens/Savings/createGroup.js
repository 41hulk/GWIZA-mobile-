import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated,Platform,Keyboard}  from 'react-native';
import { Container, Header, Body,View, Content,Picker, Form, Item, Input, Label, Button, Text, DatePicker, Icon } from 'native-base';
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import fontelloConfig from '../../assets/fonts/config.json';
import Stepper from 'react-native-js-stepper'
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
const { StatusBarManager } = NativeModules;
import NavBottom from '../NavBottom';
import Step1 from '../Savings/step1';
import Step2 from '../Savings/step1';
import Step3 from '../Savings/step1';

type Props = {}
export default class createGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: undefined
        };
      }
    onValueChange(value: string) {
        this.setState({
        selected: value
        });
    }
    setDate(newDate) {
    this.setState({ chosenDate: newDate });
    }
    state={
      isReady: false
      }
      async componentWillMount() {
      await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          'gwizaicons': require('../../assets/fonts/gwizaicons.ttf'),
      });
      this.setState({isReady:true})
      }
      componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    _keyboardDidShow () {
        this.setState({showFooter: false});
    }

    _keyboardDidHide () {
        this.setState({showFooter: true});
    }
  render() {
    if (!this.state.isReady) {
        return <Expo.AppLoading />;
    }
    return (
      <Container>
          <Stepper
              ref={(ref: any) => {
                this.stepper = ref
              }}
              validation={true}
              activeDotStyle={styles.activeDot}
              inactiveDotStyle={styles.inactiveDot}
              showTopStepper={true}
              showBottomStepper={true}
              steps={['Step 1', 'Step 2', 'Step 3']}
              backButtonTitle="BACK"
              nextButtonTitle="NEXT"
              activeStepStyle={styles.activeStep}
              inactiveStepStyle={styles.inactiveStep}
              activeStepTitleStyle={styles.activeStepTitle}
              inactiveStepTitleStyle={styles.inactiveStepTitle}
              activeStepNumberStyle={styles.activeStepNumber}
              inactiveStepNumberStyle={styles.inactiveStepNumber}>
              <Step1 />
              <Step2 />
              <Step3 />
            </Stepper>
        <NavBottom/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
      activeDot: {
        backgroundColor: 'grey'
      },
      inactiveDot: {
        backgroundColor: '#ededed'
      },
      activeStep: {
        backgroundColor: 'grey'
      },
      inactiveStep: {
        backgroundColor: '#ededed'
      },
      activeStepTitle: {
        fontWeight: 'bold'
      },
      inactiveStepTitle: {
        fontWeight: 'normal'
      },
      activeStepNumber: {
        color: 'white'
      },
      inactiveStepNumber: {
        color: 'black'
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