import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor}  from 'react-native';
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
                <Button vertical style={{backgroundColor:'#f39400'}} 
                onPress={()=>NavigationService.navigate('Home2')}>
                <MaterialIcons name="apps" size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff',fontSize:9.1}}>Home</Text>
                </Button>
                <Button active vertical style={{backgroundColor:'#f39400'}}
                onPress={()=>NavigationService.navigate('Savings')}>
                <GwizaIcon name='002-save-money' active size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff',fontSize:9.1}}>Save</Text>
                </Button>
                <Button vertical  style={{backgroundColor:'#f39400'}}
                onPress={()=>NavigationService.navigate('Funds')}>
                <GwizaIcon name='039-negotiation' size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff',fontSize:9.1}}>Fundraise</Text>
                </Button>
                <Button vertical style={{backgroundColor:'#f39400'}}
                onPress={()=>NavigationService.navigate('Paybills')}>
                <GwizaIcon name='022-pay-1' style={styles.GridIcon} size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff',fontSize:9.1}}>Pay</Text>
                </Button>
                <Button vertical style={{backgroundColor:'#f39400'}} 
                onPress={()=>NavigationService.navigate('Settings')}>
                <MaterialIcons name="settings" size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff',fontSize:9.1}}>Settings</Text>
                </Button>
            </FooterTab>
        </Footer>
        )
    }
}
const styles = StyleSheet.create({
    btnIcon:{
      fontSize:25,
      fontWeight:'bold',
    },
    saveBtn:{
      paddingRight:7.5,
    },
    fundBtn:{
      paddingLeft:7.5,
    },
});