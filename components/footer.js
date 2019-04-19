import React, { Component } from 'react';
import {StyleSheet}  from 'react-native';
import { Footer, FooterTab,Button,Text ,Icon} from 'native-base';
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import fontelloConfig from '../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
export default class FooterTabs extends Component {
    render() {
    return (
        <Footer>
            <FooterTab active style={{backgroundColor:'#f39400'}}>
                <Button active vertical style={{backgroundColor:'#f39400'}}
                onPress={() => this.props.navigation.navigate('Home')}>
                <Icon active name="apps" size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff'}}>Services</Text>
                </Button>
                <Button vertical  style={{backgroundColor:'#f39400'}}
                onPress={() => props.navigation.navigate("Transaction")}>
                <FontAwesome name='file-text-o' size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff'}}>History</Text>
                </Button>
                <Button vertical style={{backgroundColor:'#f39400'}}>
                <MaterialIcons name="person-outline" size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff'}}>Profile</Text>
                </Button>
                <Button vertical style={{backgroundColor:'#f39400'}}  
                onPress={() => props.navigation.navigate("Settings")}>
                <Feather name="settings" size={22} style={{color:'#fff'}}/>
                <Text style={{color:'#fff'}}>Settings</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
    }
}   