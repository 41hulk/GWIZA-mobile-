import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated}  from 'react-native';
import { Container, Header, Body, Content,Right, Form,Separator, Item, Input, Label,ListItem, Button, Text, DatePicker, Icon } from 'native-base';
const { StatusBarManager } = NativeModules;
import NavBottom from './NavBottom';
export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
    this.setState({ chosenDate: newDate });
    }
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
            <Separator bordered>
                <Text>Today </Text>
            </Separator>
            <ListItem>
                <Body>
                    <Text>Contribution</Text>
                    <Text note>Doing what you like will  keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem>
                <Body>
                    <Text>Contribution</Text>
                    <Text note>Doing what you like will  keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem last>
            <Body>
                <Text>Contribution</Text>
                <Text note>Doing what you like will  keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>50,000 Rwf</Text>
              </Right>
            </ListItem>
            <Separator bordered>
                <Text>July 25th 2018</Text>
            </Separator>
            <ListItem>
                <Body>
                    <Text>Contribution</Text>
                    <Text note>Doing what you like will  keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem last>
            <Body>
                <Text>Contribution</Text>
                <Text note>Doing what you like will  keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>50,000 Rwf</Text>
              </Right>
            </ListItem>
            <Separator bordered>
                <Text>Dec 28th 2018</Text>
            </Separator>
            <ListItem>
                <Body>
                    <Text>Contribution</Text>
                    <Text note>Doing what you like will  keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem>
                <Body>
                    <Text>Contribution</Text>
                    <Text note>Doing what you like will  keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem>
                <Body>
                    <Text>Contribution</Text>
                    <Text note>Doing what you like will  keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>50,000 Rwf</Text>
                </Right>
            </ListItem>
            <ListItem last>
            <Body>
                <Text>Contribution</Text>
                <Text note>Doing what you like will  keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>50,000 Rwf</Text>
              </Right>
            </ListItem>
            </Content>
            <NavBottom/>
      </Container>
    );
  }
}