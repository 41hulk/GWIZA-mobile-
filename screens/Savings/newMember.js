// React and external dependencies
import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Container, Header, Content, List,Item,Icon,Input, ListItem, Separator,Left,Body,Right } from "native-base";
import UserAvatar from 'react-native-user-avatar';
import NavBottom from '../NavBottom';
/****************************************************************************
* Friend screen component
 ***************************************************************************/
const CONTACT_PAGE_SIZE = 5000;

/**
 * Lists phone contacts
 */
export default class FriendScreen extends Component {
    _rawContacts = {};
    state = {
      contacts: [],
      hasPreviousPage: false,
      hasNextPage: false,
      permission: null,
      refreshing: false,
    };

  async componentDidMount() {
    await this.checkPermissionAsync();
    await this.loadAsync();
  }

  checkPermissionAsync = async () => {
    const { status } = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    this.setState({ permission: status === 'granted' });
  };

  loadAsync = async (restart = false) => {
    console.log('--------------------------------------------');
    if (!this.state.permission || this.state.refreshing) {
      return;
    }
    this.setState({ refreshing: true });

    const pageOffset = restart ? 0 : this.state.contacts.length || 0;

    const pageSize = restart ? Math.max(pageOffset, CONTACT_PAGE_SIZE) : CONTACT_PAGE_SIZE;

    const payload = await Expo.Contacts.getContactsAsync({
      fields: [
        Expo.Contacts.PHONE_NUMBERS
      ],
      pageSize,
      pageOffset,
    });

    const { data: contacts, hasPreviousPage, hasNextPage } = payload;

    for (const contact of contacts) {
      this._rawContacts[contact.id] = contact;
    }

    this.setState({
      contacts: Object.values(this._rawContacts),
      hasPreviousPage,
      hasNextPage,
      refreshing: false,
    });
  };

  _showAlert = () => {
    alert('Alert Title')
  }

  hasSeparator(item){

    let firstLetter = item.firstName.substring(0,1);

    if (firstLetter != this.firstLetter) {
      this.firstLetter = firstLetter;

      return (
        <View>
          <Separator bordered>
            <Text style= {{ fontSize: 20, marginLeft: 10 }}>{firstLetter}</Text>
          </Separator>
          <ListItem>
            <Left>
              <UserAvatar size="32" name={item.firstName} />
            </Left>
            <Body> 
              <Text>{item.firstName} {item.lastName}</Text>
              <Text note></Text>
            </Body>
          </ListItem>
        </View>
      )
    }

    return (
      <ListItem>
        <Left>
          <UserAvatar size="32" name={item.firstName} />
        </Left>
        <Body> 
          <Text>{item.firstName} {item.lastName}</Text>
          <Text note></Text>
        </Body>
      </ListItem>
    )
  }

  _keyExtractor = (item, index) => item.id;


  render() {

    const { contacts, permission } = this.state;

    if (this.state.loading) {
        return (
          <Expo.AppLoading />
        );
    }

    return (
      <Container>
        <Content>
        <FlatList
           keyExtractor={this._keyExtractor}
           renderItem={({ item }) =>
            <ListItem>
                <Left>
                  <UserAvatar size="32" name={item.firstName} />
                  <Body> 
                    <Text>{item.firstName} {item.lastName}</Text>
                    <Text note></Text>
                  </Body>
                </Left>
              </ListItem>
           }
           onEndReachedThreshold={-1.5}
           data={contacts.filter(x => x.firstName != null).sort((a,b) => {return a.firstName.localeCompare(b.firstName) })}
           onPressItem={this.onPressItem}
           onEndReached={this.loadAsync}
        />
        </Content>
        <NavBottom/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
