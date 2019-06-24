import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated,ScrollView}  from 'react-native';
import { Container, CardItem,Card,Left, Content, Button, View, Right, Body, Text,ListItem} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import fontelloConfig from '../../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import MaterialInitials from 'react-native-material-initials/native';
import NavigationService from '../../NavigationService';
const { StatusBarManager } = NativeModules;
import NavBottom from '../NavBottom';
export default class Myaccount extends Component {
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
        <View>
          <Grid style = {styles.profileSection}>
            <Row style={styles.firstRow}>
              <Col style={styles.columnTop1}>
                <Text>Savings Balance</Text>
                <Text style ={styles.Balance}><Text style ={{fontSize:15,color:'#fff'}}>RWF</Text> 50,000</Text>
              </Col>
              <Col style={styles.columnTop2}>
                <Text>Loans Balance</Text>
                <Text style ={styles.Balance}><Text style ={{fontSize:15,color:'#fff'}}>RWF</Text> 4000</Text>
              </Col>
            </Row>
          </Grid>
        </View>
        <Content>
            <ListItem avatar style={styles.TransList}>
                <Body>
                    <Text style={styles.TransTitle}>Fine Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar style={styles.TransList}>
                <Body>
                    <Text style={styles.TransTitle}>Fine Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar style={styles.TransList}>
                <Body>
                    <Text style={styles.TransTitle}>Fine Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar style={styles.TransList}>
                <Body>
                    <Text style={styles.TransTitle}>Fine Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar style={styles.TransList}>
                <Body>
                    <Text style={styles.TransTitle}>Fine Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar style={styles.TransList}>
                <Body>
                    <Text style={styles.TransTitle}>Fine Title</Text>
                    <Text note style={styles.TransDate}>Due on 02/04/2019</Text>
                </Body>
                <Right>
                    <Text style={styles.TransAmount} note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem avatar style={styles.TransList}>
                <Body>
                    <Text style={styles.TransTitle}>Fine Title</Text>
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
  columnTop1:{
    alignItems: 'center',
    justifyContent:'center',
    borderRightWidth:1,
    borderColor:'#fff',
  },
  OptionList:{
    paddingTop:10,
    paddingBottom:10,
  },
  columnTop2:{
    alignItems: 'center',
    justifyContent:'center',
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
  firstRow:{
    paddingTop:80,
    paddingBottom:80,
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
    fontSize:25,
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
    paddingTop:100,
    paddingBottom:100,
    backgroundColor:'#ff9f00',
  },
  userName:{
    fontSize:18,
    color:'#fff',
    textAlign:'center',
    paddingTop:10,
    paddingBottom:0,
  },
});