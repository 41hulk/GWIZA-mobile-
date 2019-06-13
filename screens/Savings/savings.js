import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableOpacity,Animated,ScrollView}  from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Right, Button,View,Item,Input, Body, Icon} from 'native-base';
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import fontelloConfig from '../../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import NavBottom from '../NavBottom';

import Modal from "react-native-modal";
export default class Savings extends Component {
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
          <Item style={styles.searchBar}>
            <Icon name="ios-search" size={10}/>
            <Input placeholder="Search" style={styles.searchText}/>
          </Item>
        <Content>
            <List>
                <ListItem onPress={() => this.props.navigation.navigate('singleSaving')}>
                    <Body>
                        <Text style={styles.groupTitle}>Abadatsimburwa</Text>
                        <Text note style={styles.GroupDesc}>is simply dummy text of the printing and typesetting industry.</Text>
                    </Body>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate('singleSaving')}>
                    <Body>
                        <Text style={styles.groupTitle}>Duterimbere</Text>
                        <Text note style={styles.GroupDesc}>is simply dummy text of the printing and typesetting industry.</Text>
                    </Body>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate('singleSaving')}>
                    <Body>
                        <Text style={styles.groupTitle}>Tuzagerayo</Text>
                        <Text note style={styles.GroupDesc}>is simply dummy text of the printing and typesetting industry.</Text>
                    </Body>
                </ListItem>
            </List>
        </Content>
        <NavBottom/>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f39400',
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchBar:{
        paddingLeft:15,
        paddingRight:15,
    },
    groupTitle:{
      fontSize:14,
      fontWeight:'bold',
    },
    GroupDesc:{
      fontSize:12,
    },
    searchText:{
      fontSize:14,
    }
});
