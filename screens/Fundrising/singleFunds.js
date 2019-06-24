import React, { Component } from 'react';
import {StyleSheet,Image,View, NativeModules, processColor,ListView,ImageBackground}  from 'react-native';
import { Container, CardItem,Badge,Card,Left, Content, Button, Input,Right,Separator, Body,List, ListItem, Text, Label, Item} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import fontelloConfig from '../../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import MaterialInitials from 'react-native-material-initials/native';
import NavigationService from '../../NavigationService';
import NavBottom from '../NavBottom';
export default class SingleFunds extends Component {
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
                          <Text style= {styles.IconTextBlack}>2,400,000</Text>
                          <Text style= {styles.IconTextBlack}>Target Amount</Text>
                      </Col>
                      <Col style={styles.columnTop2}>
                          <Text style= {styles.IconTextBlack}>200</Text>
                          <Text style= {styles.IconTextBlack}>Contributors</Text>
                      </Col>
                  </Row>
                  <Row style={styles.secondRow}>
                    <Col style={styles.columnTop3}>
                        <Text style= {styles.IconTextBlack}>20/02/2010</Text>
                        <Text style= {styles.IconTextBlack}>Start Date</Text>
                    </Col>
                    <Col style={styles.columnTop2}>
                        <Text style= {styles.IconTextBlack}>20/02/2010</Text>
                        <Text style= {styles.IconTextBlack}>End Date</Text>
                    </Col>
                  </Row>
                </Grid>
            </Card>
            <ListItem>
              <Left>
                <Text>Status:</Text>
              </Left>
              <Body>
                <Badge success>
                  <Text>Open</Text>
                </Badge>
              </Body>
            </ListItem>
            <ListItem>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when 
              </Text>
            </ListItem>
          </View>
          <Separator bordered>
            <Text>Contributors</Text>
          </Separator>
            <List>
                <ListItem avatar>
                    <Left>
                      <MaterialInitials
                          backgroundColor={'blue'}
                          color={'white'}
                          size={40}
                          text={'Bobson'}
                          single={true}
                      />
                    </Left>
                    <Body>
                        <Text> Bobson Rugambwa </Text>
                    </Body>
                    <Right>
                        <Text style={styles.Prices}>1000 Rwfs</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <MaterialInitials
                            style={styles.initial}
                            backgroundColor={'orange'}
                            color={'white'}
                            size={40}
                            text={'Patrick'}
                            single={true}
                        />
                    </Left>
                    <Body>
                        <Text>Byishimo Patrick</Text>
                    </Body>
                    <Right>
                        <Text style={styles.Prices}>1000 Rwfs</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <MaterialInitials
                            style={styles.initial}
                            backgroundColor={'#517fa4'}
                            color={'white'}
                            size={40}
                            text={'Vanessa'}
                            single={true}
                        />
                    </Left>
                    <Body>
                        <Text>Vanessa Rukundo</Text>
                    </Body>
                    <Right>
                        <Text style={styles.Prices}>1000 Rwfs</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <MaterialInitials
                            style={styles.initial}
                            backgroundColor={'green'}
                            color={'white'}
                            size={40}
                            text={'Elyse'}
                            single={true}
                        />
                    </Left>
                    <Body>
                        <Text>Elyse Confiance</Text>
                    </Body>
                    <Right>
                        <Text style={styles.Prices}>1000 Rwfs</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <MaterialInitials
                            style={styles.initial}
                            backgroundColor={'blue'}
                            color={'white'}
                            size={40}
                            text={'Bobson'}
                            single={true}
                        />
                    </Left>
                    <Body>
                        <Text>Bobson Rugambwa</Text>
                    </Body>
                    <Right>
                        <Text style={styles.Prices}>1000 Rwfs</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <MaterialInitials
                            style={styles.initial}
                            backgroundColor={'orange'}
                            color={'white'}
                            size={40}
                            text={'Patrick'}
                            single={true}
                        />
                    </Left>
                    <Body>
                        <Text>Byishimo Patrick</Text>
                    </Body>
                    <Right>
                        <Text style={styles.Prices}>1000 Rwfs</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                      <MaterialInitials
                          style={styles.initial}
                          backgroundColor={'#517fa4'}
                          color={'white'}
                          size={40}
                          text={'Vanessa'}
                          single={true}
                      />
                    </Left>
                    <Body>
                        <Text>Vanessa Rukundo</Text>
                    </Body>
                    <Right>
                        <Text style={styles.Prices}>1000 Rwfs</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <MaterialInitials
                            style={styles.initial}
                            backgroundColor={'green'}
                            color={'white'}
                            size={40}
                            text={'Elyse'}
                            single={true}
                        />
                    </Left>
                    <Body>
                        <Text>Elyse Confiance</Text>
                    </Body>
                    <Right>
                        <Text style={styles.Prices}>1000 Rwfs</Text>
                    </Right>
                </ListItem>
            </List>
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
    fontSize:16,
    fontWeight:'500',
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