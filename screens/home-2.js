import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor}  from 'react-native';
import { Container, Header, Content, Button, View, Right, Body, Text,Icon,ListItem,Left} from 'native-base';
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import fontelloConfig from '../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import UserAvatar from 'react-native-user-avatar';
import { Col, Row, Grid } from "react-native-easy-grid";
const { StatusBarManager } = NativeModules;
import NavBottom from './NavBottom';
export default class Home2 extends React.Component {
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
            <Left>
                <Button transparent>
                    
                </Button>
          </Left>
          <Body style={styles.header}>
            <Image style={styles.logo}  source={require('../assets/images/logo-white.png')} disabled='false'/>
          </Body>
          <Right>
            <Button transparent>
              <Ionicons name='md-power' style={styles.logIcon}  onPress={() => this.props.navigation.navigate('LockScreen')}/>
            </Button>
          </Right>
        </Header>
        <View style = {styles.profileSection}>
            <Body style={styles.userProfile}>
                <UserAvatar size="70" name="Jimmy Ruta" />
                <Text style ={styles.userName}>Jimmy Ruta 
                <Image style={styles.verifiedIcon} source={require('../assets/verified.png')}/> </Text>
                <Text style ={styles.Balance}>‭+250 788 305 200‬</Text>
            </Body>
        </View>
        <Content>
            <ListItem avatar style={styles.TransList}>
                <Left>
                    <GwizaIcon name='002-save-money' style={{fontSize:30}} onPress={() => this.props.navigation.navigate('Savings')}/>
                </Left>
                <Body>
                    <Text style={styles.TransTitle}>Transaction Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar style={styles.TransList}>
                <Left>
                    <GwizaIcon name='039-negotiation' style={{fontSize:30}} onPress={() => this.props.navigation.navigate('funds')}/>
                </Left>
                <Body>
                    <Text style={styles.TransTitle}>Transaction Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar style={styles.TransList}>
                <Left>
                    <GwizaIcon name='002-save-money'  style={{fontSize:30}} onPress={() => this.props.navigation.navigate('funds')}/>
                </Left>
                <Body>
                    <Text style={styles.TransTitle}>Transaction Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar style={styles.TransList}>
                <Left>
                    <GwizaIcon name='039-negotiation' style={{fontSize:30}} onPress={() => this.props.navigation.navigate('funds')}/>
                </Left>
                <Body>
                    <Text style={styles.TransTitle}>Transaction Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar style={styles.TransList}>
                <Left>
                    <GwizaIcon name='002-save-money' style={{fontSize:30}} onPress={() => this.props.navigation.navigate('funds')}/>
                </Left>
                <Body>
                    <Text style={styles.TransTitle}>Transaction Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar style={styles.TransList}>
                <Left>
                    <GwizaIcon name='039-negotiation' style={{fontSize:30}} onPress={() => this.props.navigation.navigate('funds')}/>
                </Left>
                <Body>
                    <Text style={styles.TransTitle}>Transaction Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar style={styles.TransList}>
                <Left>
                    <GwizaIcon name='002-save-money' style={{fontSize:30}} onPress={() => this.props.navigation.navigate('funds')}/>
                </Left>
                <Body>
                    <Text style={styles.TransTitle}>Transaction Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
        </Content>
        <NavBottom/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  btnIcon:{
    fontSize:25,
    fontWeight:'bold',
  },
  saveBtn:{
    paddingRight:7.5,
  },
  fundBtn:{
    paddingLeft:7.5,
  },
  TransList:{
    position:'relative',
  },
  verifiedIcon:{
    width:20,
    height:20,
    paddingLeft:15,
  },  
  features:{
    position:'relative',
    marginTop:200,
    marginBottom:0,
    padding:15,
  },
  Featuretxt:{
    fontSize:16,
    fontWeight:'bold',
  },
  logIcon:{
      alignItems: 'center',
      justifyContent:'center',
  },
  walletIcon:{
    fontSize:30,
    color:'#fff',
  },
  transIcon:{
    paddingBottom:12,
    fontSize:55,
    color:'#000',
  },
  TransAmount:{
    color:'#000',
    fontSize:14,
  },
  TransTitle:{
    fontSize:14,
  },
  TransDate:{
    fontSize:12,
  },
  firstRow:{
    borderColor:'#fff',
    borderBottomColor:'#eaeaea',
    borderWidth:1,
  },
  logIcon:{
    fontSize:22,
    color:'#fff',
  },
  IconText:{
    fontSize:16,
    fontWeight:'500',
  },
  Balance:{
    fontSize:15,
    color:'#fff',
    textAlign:'center',
    paddingBottom:0,
    fontWeight:'bold'
  },
  header:{
    flex:2,
    padding:0,
  },
  logo:{
    flex:1,
    top:-50,
    left:90,
    width:100,
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
    position:'absolute',
    paddingTop:45,
    paddingBottom:45,
  },
  profileSection:{
    position:'relative',
    paddingTop:150,
    paddingBottom:100,
    backgroundColor:'#ff9f00',
  },
  userName:{
    fontSize:15,
    color:'#fff',
    textAlign:'center',
    paddingTop:10,
    paddingBottom:10,
  },
});