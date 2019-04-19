import React, { Component } from 'react';
import { Image,StyleSheet ,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Item, Thumbnail, Text, Button, Icon, Left, Body, Right, View } from 'native-base';
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import fontelloConfig from '../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import NavBottom from './NavBottom';
import NavigationService from '../NavigationService';

export default class Paybills  extends Component {
  state={
      isReady: false
  }
  async componentWillMount() {
      await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
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
          <View style={styles.cardWrapper}>
            <TouchableOpacity onPress={()=>NavigationService.navigate('Paytv')}>  
              <Card style={styles.gridStyle}>
                <CardItem>
                  <Left>
                    <GwizaIcon name='035-landing-page' style={styles.GridIcon}/>
                    <Body>
                      <Text>TV Services</Text>
                      <Text note>This include all providers</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>NavigationService.navigate('Payelectricity')}> 
            <Card style={styles.gridStyle}>
              <CardItem>
                <Left>
                <GwizaIcon name='024-light-bulb' style={styles.GridIcon}/>
                  <Body>
                    <Text>Electricty</Text>
                    <Text note>This include all providers</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>NavigationService.navigate('Paywater')}> 
              <Card style={styles.gridStyle}>
                <CardItem>
                  <Left>
                    <GwizaIcon name='026-water' style={styles.GridIcon}/>
                    <Body>
                      <Text>Water</Text>
                      <Text note>This include all providers</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>NavigationService.navigate('Payairtime')}> 
              <Card style={styles.gridStyle}>
                <CardItem>
                  <Left>
                    <GwizaIcon name='041-hacking' style={styles.GridIcon}/>
                    <Body>
                      <Text>Airtime</Text>
                      <Text note>This include all providers</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>NavigationService.navigate('Payfees')}> 
              <Card style={styles.gridStyle}>
                <CardItem>
                  <Left>
                    <GwizaIcon name='016-consulting' style={styles.GridIcon}/>
                    <Body>
                      <Text>School Fees</Text>
                      <Text note>This include all providers</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>NavigationService.navigate('Payinsurance')}> 
              <Card style={styles.gridStyle}>
                <CardItem>
                  <Left>
                    <GwizaIcon name='025-hand-shake' style={styles.GridIcon}/>
                    <Body>
                      <Text>Insurance</Text>
                      <Text note>This include all providers</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </View>
        </Content>
        <NavBottom/>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    GridIcon:{
      paddingBottom:12,
      fontSize:40,
      color:'#000',
    },
    cardWrapper:{
        padding:5,
        margin:5,
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
    }
});