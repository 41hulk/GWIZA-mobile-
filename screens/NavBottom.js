import React, { Component } from 'react';
import { Text,Footer, FooterTab,Icon,Button} from 'native-base';
import {createIconSetFromFontello,MaterialIcons, FontAwesome,Feather,} from '@expo/vector-icons';
import fontelloConfig from '../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import NavigationService from '../NavigationService';

export default class NavBottom extends React.Component {
    render() {
      return (
        <Footer>
            <FooterTab active style={{backgroundColor:'#f39400'}}>
                <Button active vertical style={{backgroundColor:'#f39400'}}
                onPress={()=>NavigationService.navigate('Home')}>
                <Icon active name="apps" size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff'}}>Services</Text>
                </Button>
                <Button vertical  style={{backgroundColor:'#f39400'}}
                onPress={()=>NavigationService.navigate('Transaction')}>
                <FontAwesome name='file-text-o' size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff'}}>History</Text>
                </Button>
                <Button vertical style={{backgroundColor:'#f39400'}}>
                <MaterialIcons name="person-outline" size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff'}}>Profile</Text>
                </Button>
                <Button vertical style={{backgroundColor:'#f39400'}}
                onPress={()=>NavigationService.navigate('Settings')}>
                <Feather name="settings" size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff'}}>Settings</Text>
                </Button>
            </FooterTab>
        </Footer>
        )
    }
}