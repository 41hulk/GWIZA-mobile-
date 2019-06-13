import React, { Component } from 'react';
import {StyleSheet,Image,View, NativeModules, processColor,ListView,ImageBackground}  from 'react-native';
import { Container, CardItem,Badge,Card,Left, Content, Button, Input,Right,Separator, Body,List,FooterTab, ListItem, Text,Footer, Label, Item} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import fontelloConfig from '../../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import MaterialInitials from 'react-native-material-initials/native';
import NavigationService from '../../NavigationService';
import NavBottom from '../NavBottom';
import Timeline from 'react-native-timeline-listview'

export default class LoanDetails extends Component {
  constructor(){
    super()
    this.data = [
      {time: '09:00', title: 'loan Payment Detail 1', description: 'Amount Paid 40,000 Rwfs'},
      {time: '10:45', title: 'loan Payment Detail 2', description: 'Amount Paid 50,000 Rwfs'},
      {time: '12:00', title: 'loan Payment Detail 3', description: 'Amount Paid 35,000 Rwfs'},
      {time: '14:00', title: 'loan Payment Detail 4', description: 'Amount Paid 25,000 Rwfs'},
      {time: '16:30', title: 'loan Payment Detail 5', description: 'Amount Paid 40,000 Rwfs'}
    ]
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
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Content>
          <View style = {styles.cardSection}>
            <Card style = {styles.cardSection2}>
                <Grid style={styles.stats}>
                  <Row style={styles.firstRow}>
                      <Col style={styles.columnTop3}>
                          <Text style= {styles.IconTextBlack}>240,000 Rwf</Text>
                          <Text>Loan Amount</Text>
                      </Col>
                      <Col style={styles.columnTop2}>
                          <Text style= {styles.IconTextBlack}>140,000 Rwf</Text>
                          <Text>Paid Amount</Text>
                      </Col>
                      <Col style={styles.columnTop3}>
                          <Text style= {styles.IconTextBlack}>100,000 Rwf</Text>
                          <Text>Loan Balance</Text>
                      </Col>
                  </Row>
                </Grid>
            </Card>
            <Separator bordered>
              <Text>Loan Details</Text>
            </Separator>
            <List>
              <ListItem>
                <Body>
                  <Text>Loan Collector</Text>
                </Body>
                <Right>
                  <Text>Bobson</Text>
                </Right>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Interest Rate</Text>
                </Body>
                <Right>
                  <Text>5%</Text>
                </Right>
              </ListItem>
            </List>
          </View>
          <Separator bordered>
            <Text>Loan Transactions</Text>
          </Separator>
          <View style={styles}>
            <Timeline
              style={styles.list}
              data={this.data}
            />
          </View>
            
        </Content>
        <NavBottom/>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  cardSection2:{
    backgroundColor:'#ffff',
    color:'#fff',
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  columnTop1:{
    alignItems: 'center',
    justifyContent:'center',
    borderTopColor:'#fff',
    borderBottomColor:'#fff',
    borderColor:'#fff',
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
    borderColor:'#fff',
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
    fontSize:1,
    color:'#000',
  },
  IconTextwhite:{
    fontSize:16,
    fontWeight:'500',
    color:'#fff',
  },
  logoText:{
    flex:1,
    alignItems:'center',
  },
  PageContent:{
    backgroundColor:'#fff',
  },
  backgroundImage:{
    position:'relative',
    flex:1,
    width:null,
    height:200,
  },
  rowEmail:{
    marginBottom:20,
  },
  Overlay:{
    position:'relative',
    flex:1,
    backgroundColor:'#333',
    opacity:.8,
    width:null,
    height:200,
  },
  initial:{
    alignSelf:'center',
    alignItems:'center',
    marginTop:5,
    borderWidth:2,
    borderColor:'#fff',
  },
  profileSection:{
    position:'relative',
    backgroundColor:'#f39400',
  },
  userName:{
    fontSize:20,
    color:'#fff',
    textAlign:'center',
  },
  saveBtn:{
    marginBottom:20,
    marginTop:20,
    margin:20,
  },
  Prices:{
    fontSize:14,
    fontWeight:'bold',
  },   
  gridStyle:{
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
  },
  targetSection:{
    padding:0,
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
  },
  targetPriceText:{
    fontWeight:'bold',
    fontSize:40,
    textAlign:'center',
    color:'#fff',
    justifyContent:'center',
    alignItems:'center',
  },
  targetPrice:{
    borderColor:'#fff',
    paddingTop:50,
    paddingBottom:50,
    borderWidth:1,
    backgroundColor:'#690002',
    margin:0,
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
    position:'relative',
    width:'100%',
    height:null,
  },
  walletIcon:{
    fontSize:30,
    color:'#fff',
  },
  saveBtn:{
    position:'relative',
    margin:40,
    marginTop:50,
    marginBottom:0,
    backgroundColor:'#f39400',
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
  userName:{
    fontSize:18,
    color:'#fff',
    textAlign:'center',
    paddingTop:10,
    paddingBottom:10,
  },
});