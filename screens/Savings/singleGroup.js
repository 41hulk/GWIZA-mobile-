import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated,ScrollView}  from 'react-native';
import { Container, CardItem,Card,Left, Content, Button, View, Right, Body, Text} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import fontelloConfig from '../../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import MaterialInitials from 'react-native-material-initials/native';
import NavigationService from '../../NavigationService';
const { StatusBarManager } = NativeModules;
import NavBottom from '../NavBottom';
export default class Home extends Component {
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
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <View style = {styles.profileSection}>
          <Body style={styles.userProfile}>
            <MaterialInitials
              style={styles.initial}
              backgroundColor={'ed'}
              color={'white'}
              size={80}
              text={'Duterimbere'}
              single={true}
              />
            <Text style ={styles.userName}>Duterimbere</Text>
          </Body>
          <Grid style={styles.stats}>
              <Row style={styles.firstRow}>
                <Col style={styles.columnTop1}>
                  <Text style= {styles.IconTextWhite}>2,400,000</Text>
                  <Text style= {styles.IconTextWhite}>Savings Balance</Text>
                </Col>
                <Col style={styles.columnTop2}>
                  <Text style= {styles.IconTextWhite}>200,000</Text>
                  <Text style= {styles.IconTextWhite}>Loans Balance</Text>
                </Col>
              </Row>
            </Grid>
        </View>
        <Content>
          <Grid>
            <Row style={styles.firstRow}>
              <Col style={styles.column1}>
                <GwizaIcon name='004-investment-1' style={styles.GridIcon} onPress={()=>NavigationService.navigate('Save')}/>
                <Text style= {styles.IconText}>Save</Text>
              </Col>
              <Col style={styles.column2}>
              <GwizaIcon name='009-agreement' style={styles.GridIcon} onPress={()=>NavigationService.navigate('Myloans')}/>
                <Text style= {styles.IconText}>Borrows</Text>
              </Col>
            </Row>
            <Row style={styles.Row}>
              <Col style={styles.column3}>
              <GwizaIcon name='024-policy-1' style={styles.GridIcon}/>
                <Text style= {styles.IconText}>My Account</Text>
              </Col>
              <Col style={styles.column4}>
                <GwizaIcon name='017-community' style={styles.GridIcon} onPress={()=>NavigationService.navigate('Members')}/>
                <Text style= {styles.IconText}>Members</Text>
              </Col>
            </Row>
          </Grid>
        </Content>
        {/* <NavBottom/> */}
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  columnTop1:{
    alignItems: 'center',
    justifyContent:'center',
    borderTopColor:'#ff9f00',
    borderBottomColor:'#fff',
    borderColor:'#eaeaea',
    borderRightColor:'#eaeaea',
    borderWidth:0.5,
    paddingTop:30,
    paddingBottom:30,
  },
  columnTop2:{
    alignItems: 'center',
    justifyContent:'center',
    borderTopColor:'#ff9f00',
    borderBottomColor:'#fff',
    borderColor:'#eaeaea',
    borderRightColor:'#eaeaea',
    borderWidth:0.5,
    paddingTop:30,
    paddingBottom:30,
  },
  columnTop3:{
    alignItems: 'center',
    justifyContent:'center',
    borderTopColor:'#ff9f00',
    borderBottomColor:'#fff',
    borderColor:'#eaeaea',
    borderRightColor:'#eaeaea',
    borderWidth:0.5,
    paddingTop:30,
    paddingBottom:30,
  },
  stats:{
    width:null,
    position:'relative',
    flex:1,
    marginTop:120,
  },
  IconTextWhite:{
    fontSize:16,
    fontWeight:'500',
    color:'#fff',
  },
  column1:{
    alignItems: 'center',
    justifyContent:'center',
    borderTopColor:'#fff',
    borderBottomColor:'#fff',
    borderColor:'#eaeaea',
    borderLeftColor:'#eaeaea',
    borderWidth:1,
    paddingTop:35,
    paddingBottom:35,
  },
  column2:{
    alignItems: 'center',
    justifyContent:'center',
    paddingTop:35,
    paddingBottom:35,
  },
  column3:{
    alignItems: 'center',
    justifyContent:'center',
    borderTopColor:'#fff',
    borderBottomColor:'#fff',
    borderColor:'#eaeaea',
    borderLeftColor:'#eaeaea',
    borderWidth:1,
    paddingTop:35,
    paddingBottom:35,
  },
  column4:{
    alignItems: 'center',
    justifyContent:'center',
    paddingTop:35,
    paddingBottom:35,
  },
  walletIcon:{
    fontSize:30,
    color:'#fff',
  },
  GridIcon:{
    paddingBottom:12,
    fontSize:55,
    color:'#000',
  },
  firstRow:{
    borderColor:'#fff',
    borderBottomColor:'#eaeaea',
    borderWidth:1,
  },
  logIcon:{
    fontSize:20,
    color:'#fff',
  },
  IconText:{
    fontSize:16,
    fontWeight:'500',
  },
  Balance:{
    fontSize:20,
    color:'#fff',
    textAlign:'center',
    paddingBottom:150,
    fontWeight:'bold'
  },
  header:{
    flex:2,
    padding:0,
  },
  logo:{
    flex:2,
    top:-53,
    left:90,
    width:200,
    height:100,
    position:'absolute',
  },
  PageContent:{
    backgroundColor:'#fff',
  },
  initial:{
    alignSelf:'center',
    alignItems:'center',
    marginTop:0,
    borderWidth:2,
    borderColor:'#fff',
  },
  userProfile:{
    borderRadius:90/2,
    position:'absolute',
    top:60,
  },
  profileSection:{
    position:'relative',
    paddingTop:120,
    paddingBottom:62,
    backgroundColor:'#ff9f00',
  },
  userName:{
    fontSize:18,
    color:'#fff',
    textAlign:'center',
    paddingTop:10,
    paddingBottom:10,
  },
});