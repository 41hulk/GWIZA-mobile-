import React, { Component } from 'react';
import { Image,StyleSheet,TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Text, Left, Body,Right,Button} from 'native-base';
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import NavigationService from '../../NavigationService';
import fontelloConfig from '../../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import NavBottom from '../NavBottom';
import PercentageCircle from 'react-native-percentage-circle';

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
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
  render() {
    if (!this.state.isReady) {
    return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Content style={styles.cardWrapper}>
            <TouchableOpacity onPress={()=>NavigationService.navigate('singleInvestment')}>
                <Card>
                    <CardItem>
                    <Left style={styles.leftSide}>
                        <PercentageCircle radius={33.3} percent={60} color={"#3498db"}>
                        </PercentageCircle>
                        <Body>
                            <Text style={styles.projectTitle}>Farming</Text>
                            <Text note>600Rwf/1000</Text>
                        </Body>
                    </Left>
                    </CardItem>
                </Card>
            </TouchableOpacity>
            <Card>
                <CardItem >
                    <Left style={styles.leftSide}>
                        <PercentageCircle radius={33.3} percent={20} color={"#44ab4d"}>
                        </PercentageCircle>
                        <Body>
                            <Text style={styles.projectTitle}>Drones</Text>
                            <Text note>600Rwf/1000</Text>
                        </Body>
                    </Left>  
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Left style={styles.leftSide}>
                        <PercentageCircle radius={33.3} percent={45} color={"#890000"}>
                        </PercentageCircle>
                        <Body>
                            <Text style={styles.projectTitle}>Ecommerce </Text>
                            <Text note>600Rwf/1000</Text>
                        </Body>
                    </Left> 
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Left style={styles.leftSide}>
                        <PercentageCircle radius={33.3} percent={80} color={"#f4bd00"}>
                        </PercentageCircle> 
                        <Body>
                            <Text style={styles.projectTitle}>Coconut Oil</Text>
                            <Text>600Rwf/1000</Text>
                        </Body>
                    </Left> 
                </CardItem>
            </Card>
        </Content>
        <NavBottom/>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    projectTitle:{
        fontWeight:'600',
        paddingBottom:7,
    },
    leftSide:{
        width:20,
        flex:1,
    },
    cardWrapper:{
        padding:5,
        margin:5,
    }
});