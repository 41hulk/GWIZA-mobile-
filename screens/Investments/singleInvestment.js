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
                <Text style ={styles.userName}>Eric Ku</Text>
            </Body>
            </View>
            <View style = {styles.cardSection}>
                <Card>
                    <Grid style={styles.stats}>
                        <Row style={styles.firstRow}>
                            <Col style={styles.columnTop1}>
                                <Text style= {styles.IconTextBlack}>2,400,000</Text>
                                <Text style= {styles.IconTextBlack}>Balance</Text>
                            </Col>
                            <Col style={styles.columnTop2}>
                                <Text style= {styles.IconTextBlack}>20</Text>
                                <Text style= {styles.IconTextBlack}>Loans</Text>
                            </Col>
                            <Col style={styles.columnTop2}>
                                <Text style= {styles.IconTextBlack}>200</Text>
                                <Text style= {styles.IconTextBlack}>Members</Text>
                            </Col>
                        </Row>
                    </Grid>
                </Card>
                
            </View>
            <Content>
                <Card>
                    <CardItem>
                        <Text>The Agriculture Project's objectives are to increase rural incomes and stimulate the rural economy through rural entrepreneurship. To achieve these objectives, the project focuses on improving factor productivity and competitiveness of agricultural products</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Text>The Agriculture Project's objectives are to increase rural incomes and stimulate the rural economy through rural entrepreneurship. To achieve these objectives, the project focuses on improving factor productivity and competitiveness of agricultural products</Text>
                    </CardItem>
                </Card>
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
    borderTopColor:'#fff',
    borderBottomColor:'#fff',
    borderColor:'#eaeaea',
    borderRightColor:'#eaeaea',
    borderWidth:0.5,
    paddingTop:20,
    paddingBottom:20,
  },
  columnTop2:{
    alignItems: 'center',
    justifyContent:'center',
    borderTopColor:'#fff',
    borderBottomColor:'#fff',
    borderColor:'#eaeaea',
    borderRightColor:'#eaeaea',
    borderWidth:0.5,
    paddingTop:20,
    paddingBottom:20,
  },
  columnTop3:{
    alignItems: 'center',
    justifyContent:'center',
    borderTopColor:'#fff',
    borderBottomColor:'#fff',
    borderColor:'#eaeaea',
    borderRightColor:'#eaeaea',
    borderWidth:0.5,
    paddingTop:20,
    paddingBottom:20,
  },
  stats:{
    width:null,
    flex:1,
  },
  IconTextBlack:{
    fontSize:16,
    fontWeight:'500',
    color:'#000',
  },
  cardSection:{
    position:'absolute',
    top:120,
    flex:1,
    width:'100%',
    height:null,
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