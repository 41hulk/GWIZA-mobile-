import React, { Component } from 'react';
import { Image,StyleSheet ,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Tab, Tabs,Item,Input,Icon } from 'native-base';
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import fontelloConfig from '../../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import NavBottom from '../NavBottom';
import NavigationService from '../../NavigationService';
import InProgress from './InProgress.js';
import Completed from './completed.js';

export default class funds  extends Component {
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
            <Tabs>
            <Tab  heading="In Progress" activeTabStyle={{backgroundColor:'#690002'}} activeTextStyle={{color:'#fff'}}  tabStyle={{backgroundColor:'#f8f8f8'}} textStyle={{color:'#000'}}  tabBarUnderlineStyle={{ backgroundColor: '#690002' }}>
                <Item style={styles.searchBar}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                </Item>
                <InProgress />
            </Tab>
            <Tab heading="Completed" activeTabStyle={{backgroundColor:'#690002'}} activeTextStyle={{color:'#fff'}}  tabStyle={{backgroundColor:'#f8f8f8'}} textStyle={{color:'#000'}} tabBarUnderlineStyle={{ backgroundColor: '#690002' }}>
                <Item style={styles.searchBar}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                </Item>
                <InProgress />
            </Tab>
        </Tabs>
        </Content>
        {/* <NavBottom/> */}
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
    },
    bellowName:{
        paddingTop:10,
        fontSize:12,
    },
    EventName:{
        fontSize:14,
        fontWeight:'bold',
    },
    EventDescription:{
        fontSize:12,
        fontWeight:'400',
    },
    searchBar:{
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'#fff',
    },
    Initials:{
        fontSize:12,
        fontWeight:'bold',
    }
});