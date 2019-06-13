import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated,ScrollView}  from 'react-native';
import { Container, Header, Content,List, ListItem,Root,Separator, Left, Button, View,Item,Icon,Input,ActionSheet, Body, Text} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import fontelloConfig from '../../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import MaterialInitials from 'react-native-material-initials/native';
import NavBottom from '../NavBottom';
const { StatusBarManager } = NativeModules;
var BUTTONS = ["Make Goup Admin", "Penality", "Remove from group", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class Members extends Component {
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
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Root>
        <Container>
          <Item style={styles.searchBar}>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
          </Item>
          <Content scrollEnabled={true}>
            <List>
              <ListItem onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                )}>
                <Body>
                  <Text>Bobson Rugamba</Text>
                  <Text note>+25078892732</Text>
                </Body>
              </ListItem>
            </List>
            <List>
              <ListItem onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                )}>
                <Body>
                  <Text>Elyse Confiance</Text>
                  <Text note>+25078892732</Text>
                </Body>
              </ListItem>
            </List>
            <List>
              <ListItem onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                )}>
                <Body>
                  <Text>Jimmy Rutabingwa</Text>
                  <Text note>+25078892732</Text>
                </Body>
              </ListItem>
            </List>
          </Content>
          <NavBottom/>
        </Container>
      </Root>
      
    );
  }
}
const styles = StyleSheet.create({
  searchBar:{
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:'#fff',
  },
});