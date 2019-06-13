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
              text={'Amasezerano'}
              single={true}
              />
            <Text style ={styles.userName}>Amasezerano</Text>
          </Body>
          <View>
            <Grid style={styles.stats}>
              <Row style={styles.firstRow}>
                <Col style={styles.columnTop1}>
                  <Text style= {styles.IconTextWhite}>2,400,000</Text>
                  <Text style= {styles.IconTitleWhite}>Savings Balance</Text>
                </Col>
                <Col style={styles.columnTop2}>
                  <Text style= {styles.IconTextWhite}>200,000</Text>
                  <Text style= {styles.IconTitleWhite}>Loans Balance</Text>
                </Col>
              </Row>
            </Grid>
          </View>
        </View>
        <Content>
          <Grid>
            <Row>
              <Col>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Save')}>
                  <Card style={styles.gridStyle}>
                      <CardItem>
                        <Body style={styles.textIcon}>
                          <GwizaIcon name='004-investment-1' style={styles.GridIcon} onPress={()=>NavigationService.navigate('Save')}/>
                          <Text style= {styles.IconText}>Save</Text>
                        </Body>
                      </CardItem>
                    </Card>
                </TouchableHighlight>
              </Col>
              <Col>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Myloans')}>
                  <Card style={styles.gridStyle}>
                      <CardItem>
                        <Body style={styles.textIcon}>
                          <GwizaIcon name='009-agreement' style={styles.GridIcon} onPress={()=>NavigationService.navigate('Myloans')}/>
                        <Text style= {styles.IconText}>Borrows</Text>
                        </Body>
                      </CardItem>
                  </Card>
                </TouchableHighlight>
              </Col>
            </Row>
            <Row>
              <Col>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('.')}>
                  <Card style={styles.gridStyle}>
                    <CardItem>
                      <Body style={styles.textIcon}>
                        <GwizaIcon name='024-policy-1' style={styles.GridIcon}/>
                        <Text style= {styles.IconText}>My Account</Text>
                      </Body>
                    </CardItem>
                  </Card>
                </TouchableHighlight>
              </Col>
              <Col>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Members')}>
                  <Card style={styles.gridStyle} onPress={() => this.props.navigation.navigate('Members')}>
                      <CardItem>
                        <Body style={styles.textIcon}>
                          <GwizaIcon name='017-community' style={styles.GridIcon} onPress={()=>NavigationService.navigate('Members')}/>
                          <Text style= {styles.IconText}>Members</Text>
                        </Body>
                      </CardItem>
                    </Card>
                </TouchableHighlight>
              </Col>
            </Row>
          </Grid>
        </Content>
        <NavBottom/>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  columnTop1:{
    alignItems: 'center',
    justifyContent:'center',
    borderTopColor:'#ff9f00',
    borderBottomColor:'#ff9f00',
    borderColor:'#eaeaea',
    borderRightColor:'#eaeaea',
    borderWidth:0,
    paddingTop:30,
    paddingBottom:30,
  },
  columnTop2:{
    alignItems: 'center',
    justifyContent:'center',
    borderTopColor:'#ff9f00',
    borderBottomColor:'#ff9f00',
    borderColor:'#eaeaea',
    borderRightColor:'#eaeaea',
    borderWidth:0.5,
    paddingTop:30,
    paddingBottom:30,
  },
  textIcon:{
    alignItems: 'center',
    justifyContent:'center',
  },
  walletIcon:{
    fontSize:30,
    color:'#fff',
  },
  GridIcon:{
    paddingBottom:12,
    fontSize:70,
    color:'#000',
  },
  stats:{
    position:'relative',
    flex:0,
    marginTop:120,
  },
  gridStyle:{
    padding:30,
    borderWidth: 1,
    borderRadius: 2,
    borderColor:'#fff',
    borderBottomWidth: 0,
    shadowColor: '#d1e0fc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent:'center',
  },
  IconTextWhite:{
    fontSize:14,
    fontWeight:'500',
    color:'#fff',
    flex:1,
    top:10,
    position:'absolute'
  },
  IconTitleWhite:{
    top:30,
    flex:1,
    color:'#fff',
    position:'absolute'
  },
  walletIcon:{
    fontSize:30,
    color:'#fff',
  },
  GridIcon:{
    paddingBottom:12,
    fontSize:40,
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
    fontSize:14,
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    fontWeight:'500',
  },
  Balance:{
    fontSize:22,
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