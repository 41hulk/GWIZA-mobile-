import React, { Component } from 'react';
import { Image,StyleSheet ,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Item, Thumbnail, Text, Button, Icon, Left, Body, Right, View } from 'native-base';
import {createIconSetFromFontello, OcticonIcon,MaterialIcons, FontAwesome,Foundation,Entypo,EvilIcon,Feather,IoniconFontAwesome, SimpleLineIcons,Ionicons
} from '@expo/vector-icons';
import MaterialInitials from 'react-native-material-initials/native';
import fontelloConfig from '../../assets/fonts/config.json';
const GwizaIcon = createIconSetFromFontello(fontelloConfig, 'gwizaicons');
import NavBottom from '../NavBottom';
import NavigationService from '../../NavigationService';

export default class InProgress  extends Component {
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
            <TouchableOpacity onPress={()=>NavigationService.navigate('SingleFunds')}>  
              <Card style={styles.gridStyle}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text style={styles.EventName}>Jimmy's Birthday</Text>
                      <View style={styles.bellowName}>
                        <Text style={styles.EventDescription} note>Purpose: <Text style={styles.Initials}>$20</Text> | <Text note style={styles.Initials}>$300</Text></Text>
                      </View>
                    </Body>
                  </Left>
                  <Right>
                    <Text note>March 17</Text>
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>NavigationService.navigate('SingleFunds')}>  
              <Card style={styles.gridStyle}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text style={styles.EventName}>Trip to Japan</Text>
                      <View style={styles.bellowName}>
                        <Text style={styles.EventDescription} note>Purpose: <Text style={styles.Initials}>$1200</Text> | <Text note style={styles.Initials}>$3000</Text></Text>
                      </View>
                    </Body>
                  </Left>
                  <Right>
                    <Text note>March 17</Text>
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>NavigationService.navigate('SingleFunds')}>  
              <Card style={styles.gridStyle}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text style={styles.EventName}>Visit Museium</Text>
                      <View style={styles.bellowName}>
                        <Text style={styles.EventDescription} note>Purpose: <Text style={styles.Initials}>$120</Text> | <Text note style={styles.Initials}>$500</Text></Text>
                      </View>
                    </Body>
                  </Left>
                  <Right>
                    <Text note>March 17</Text>
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>NavigationService.navigate('SingleFunds')}>  
              <Card style={styles.gridStyle}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text style={styles.EventName}>Gisenyi Trip</Text>
                      <View style={styles.bellowName}>
                        <Text style={styles.EventDescription} note>Purpose: <Text style={styles.Initials}>$150</Text> | <Text note style={styles.Initials}>$450</Text></Text>
                      </View>
                    </Body>
                  </Left>
                  <Right>
                    <Text note>March 17</Text>
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>NavigationService.navigate('SingleFunds')}>  
              <Card style={styles.gridStyle}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text style={styles.EventName}>Gisenyi Trip</Text>
                      <View style={styles.bellowName}>
                        <Text style={styles.EventDescription} note>Purpose: <Text style={styles.Initials}>$150</Text> | <Text note style={styles.Initials}>$450</Text></Text>
                      </View>
                    </Body>
                  </Left>
                  <Right>
                    <Text note>March 17</Text>
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>NavigationService.navigate('SingleFunds')}>  
              <Card style={styles.gridStyle}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text style={styles.EventName}>Gisenyi Trip</Text>
                      <View style={styles.bellowName}>
                        <Text style={styles.EventDescription} note>Purpose: <Text style={styles.Initials}>$150</Text> | <Text note style={styles.Initials}>$450</Text></Text>
                      </View>
                    </Body>
                  </Left>
                  <Right>
                    <Text note>March 17</Text>
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </View>
        </Content>
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
    InitialsProfile:{

    },
    EventName:{
        fontSize:14,
        fontWeight:'bold',
    },
    EventDescription:{
        fontSize:12,
        fontWeight:'400',
    },
    Initials:{
        fontSize:12,
        fontWeight:'bold',
    }
});