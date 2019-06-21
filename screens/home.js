import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated,ScrollView}  from 'react-native';
import { Container, Header, Content, Button, View, Right, Body, Text,Footer, FooterTab,Icon} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import fontelloConfig from '../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import UserAvatar from 'react-native-user-avatar';
const { StatusBarManager } = NativeModules;
import NavBottom from './NavBottom';
export default class Home extends React.Component {
  state={
    isReady: false
  }
  static navigationOptions = {
    header: null
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'gwizaicons': require('../assets/fonts/gwizaicons.ttf'),
    });
    this.setState({isReady:true})
  }
  state = {
    isModalVisible: false
  };
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
    
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Header androidStatusBarColor="#690002" iosBarStyle="light-content" style={{backgroundColor:'#f39400'}}>
          <Body style={styles.header}>
            <Image style={styles.logo}  source={require('../assets/images/logo-white.png')} disabled='false'/>
          </Body>
          <Right>
            <Button transparent>
              <Ionicons name='md-power' style={styles.logIcon}/>
            </Button>
          </Right>
        </Header>
        <View style = {styles.profileSection}>
              <Body style={styles.userProfile}>
                <UserAvatar size="80" name="Jimmy Ruta" />
                <Text style ={styles.userName}>Jimmy Ruta</Text>
                <Text style ={styles.Balance}>‭+250 788 305 200‬</Text>
              </Body>
        </View>
        <Grid>
          <Row style={styles.firstRow}>
            <Col style={styles.column1}>
              <GwizaIcon name='002-save-money' style={styles.GridIcon} onPress={() => this.props.navigation.navigate('Savings')}/>
              <Text style= {styles.IconText}>Savings</Text>
            </Col>
            <Col style={styles.column2}>
            <GwizaIcon name='022-pay-1' style={styles.GridIcon} onPress={() => this.props.navigation.navigate('Paybills')}/>
              <Text style= {styles.IconText}>Pay</Text>
            </Col>
          </Row>
          <Row style={styles.Row}>
            <Col style={styles.column3}>
            <GwizaIcon name='013-investment-3' style={styles.GridIcon} onPress={() => this.props.navigation.navigate('Investments')}/>
              <Text style= {styles.IconText}>Investment</Text>
            </Col>
            <Col style={styles.column4}>
              <GwizaIcon name='039-negotiation' style={styles.GridIcon} onPress={() => this.props.navigation.navigate('funds')}/>
              <Text style= {styles.IconText}>Fundraising</Text>
            </Col>
          </Row>
        </Grid>
        <NavBottom/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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
    paddingTop:150,
    paddingBottom:150,
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