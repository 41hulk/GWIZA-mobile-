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
                    <Feather name="settings" size={22} style={{color:'#fff'}} onPress={() => this.props.navigation.navigate('Settings')}/>
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
                <UserAvatar size="80" name="Jimmy Ruta" />
                <Text style ={styles.userName}>Jimmy Ruta 
                <Image style={styles.verifiedIcon} source={require('../assets/verified.png')}/> </Text>
                <Text style ={styles.Balance}>‭+250 788 305 200‬</Text>
            </Body>
            <Grid style={styles.features}>
              <Row>
                <Left style={styles.saveBtn}>
                    <Button block light onPress={() => this.props.navigation.navigate('Savings')}>
                        <GwizaIcon name='002-save-money'  style={styles.btnIcon}/>
                        <Text style={styles.Featuretxt}> Savings</Text>
                    </Button>
                </Left>
                <Right style={styles.fundBtn}>
                    <Button block light onPress={() => this.props.navigation.navigate('Funds')}>
                        <GwizaIcon name='039-negotiation'  style={styles.btnIcon}/>
                        <Text style={styles.Featuretxt}> Fundrising</Text>
                    </Button>
                </Right>
              </Row>
            </Grid>
        </View>
        <Content>
            <ListItem avatar>
                <Left>
                    <GwizaIcon name='002-save-money' style={{fontSize:30}} onPress={() => this.props.navigation.navigate('Savings')}/>
                </Left>
                <Body>
                    <Text>Transaction Title</Text>
                    <Text note>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar>
                <Left>
                    <GwizaIcon name='039-negotiation' style={{fontSize:30}} onPress={() => this.props.navigation.navigate('funds')}/>
                </Left>
                <Body>
                    <Text>Transaction Title</Text>
                    <Text note>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar>
                <Left>
                    <GwizaIcon name='002-save-money'  style={{fontSize:30}} onPress={() => this.props.navigation.navigate('funds')}/>
                </Left>
                <Body>
                    <Text>Transaction Title</Text>
                    <Text note>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar>
                <Left>
                    <GwizaIcon name='039-negotiation' style={{fontSize:30}} onPress={() => this.props.navigation.navigate('funds')}/>
                </Left>
                <Body>
                    <Text>Transaction Title</Text>
                    <Text note>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar>
                <Left>
                    <GwizaIcon name='002-save-money' style={{fontSize:30}} onPress={() => this.props.navigation.navigate('funds')}/>
                </Left>
                <Body>
                    <Text>Transaction Title</Text>
                    <Text note>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar>
                <Left>
                    <GwizaIcon name='039-negotiation' style={{fontSize:30}} onPress={() => this.props.navigation.navigate('funds')}/>
                </Left>
                <Body>
                    <Text>Transaction Title</Text>
                    <Text note>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar>
                <Left>
                    <GwizaIcon name='002-save-money' style={{fontSize:30}} onPress={() => this.props.navigation.navigate('funds')}/>
                </Left>
                <Body>
                    <Text>Transaction Title</Text>
                    <Text note>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
      
        </Content>
        {/* <NavBottom/> */}
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
  verifiedIcon:{
    width:28,
    height:28,
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
  TransAmount:{
      color:'#000',
      fontSize:14,
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
    fontSize:20,
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
    top:-56,
    left:90,
    width:112,
    height:112,
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
    top:35,
  },
  profileSection:{
    position:'relative',
    paddingTop:45,
    paddingBottom:30,
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