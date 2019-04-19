import React, { Component } from 'react';
import {StyleSheet,Image, NativeModules, processColor,TouchableHighlight,Animated}  from 'react-native';
import { Container,Content,Icon,Card,Right,Text, CardItem, Body, View, Left } from 'native-base';
import Barcode from 'react-native-barcode-builder';
import NavigationService from '../../NavigationService';
import NavBottom from '../NavBottom';
import { Col, Row, Grid } from "react-native-easy-grid";
export default class Receipt extends Component {
  render() {
    return (
      <Container>
        <Content>
            <View style={styles.ContainerSection}>
                <Card style={styles.topSection}>
                    <CardItem>
                        <Grid>
                            <Row>
                                <Col size={100}>
                                    <Text style={styles.receiptHeading}>Name: Ethan Rutabingwa</Text>
                                    <Text style={styles.receiptHeading}>Code : GH929303</Text>
                                    <Text style={styles.receiptHeading}>School : Green Hills Academy</Text>
                                    <Text style={styles.receiptHeading}>Date : 15th/January/2019</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </CardItem>
                    <CardItem>
                        <View>
                            <Body>
                                <Text style={styles.receiptHeadingTitle}>Receipt</Text>
                            </Body>
                        </View>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Row style={styles.tableHeadingRow}>
                                <Col size={60}><Text style={styles.tableHeading}>Service</Text></Col>
                                <Col size={40}><Text style={styles.tableHeading}>Total</Text></Col>
                            </Row>
                            <Row style={styles.tableRow}>
                                <Col size={60}><Text>School Fees</Text></Col>
                                <Col size={40}><Text>50,000 Rwfs</Text></Col>
                            </Row>
                            <Row style={styles.tableRow}>
                                <Col size={60}><Text>Caution</Text></Col>
                                <Col size={40}><Text>50,000 Rwfs</Text></Col>
                            </Row>
                            <Row style={styles.tableBottomRow}>
                                <Col size={60}><Text style={styles.tableHeading}>Total</Text></Col>
                                <Col size={40}><Text style={styles.tableHeading}>100,000 Rwfs</Text></Col>
                            </Row>
                            <Row>
                                <Col size={60}>
                                    <View>
                                        <Body>
                                            <Barcode value="Ethan391234190" height={60} format="CODE128" style={{width:null}}/>
                                            <Text style={styles.receiptDescription}>Thanks for using Our services</Text>
                                        </Body>
                                    </View>
                                </Col>
                            </Row>
                        </Grid>
                    </CardItem>
                
                </Card>
            </View>
        </Content>
        <NavBottom/>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    Content:{ 
      overflow: 'scroll',
      position:'relative',
      margin:5,
    },
    tableHeadingRow:{
        borderColor:'#000',
        borderLeftColor:'#fff',
        borderRightColor:'#fff',
        borderTopWidth:2,
        borderBottomWidth:2,
        paddingTop:10,
        paddingBottom:10,
    }, 
    receiptHeadingTitle:{
        textAlign:'center',
        justifyContent:'center',
        fontWeight:'bold',
        fontSize:18,
        paddingTop:20,
    },
    tableBottomRow:{
        borderWidth:2,
        borderBottomColor:'#fff',
        borderTopColor:'#fff',
        borderLeftColor:'#fff',
        borderRightColor:'#fff',
        paddingTop:20,
        paddingBottom:40,
    },
    receiptHeading:{
        fontSize:14,
        fontWeight:'bold',
        paddingBottom:5,
    },
    tableHeading:{
        fontSize:16,
        fontWeight:'bold',
    },
    tableRow:{
        borderStyle:'dashed',
        borderTopColor:'#fff',
        borderLeftColor:'#fff',
        borderRightColor:'#fff',
        borderBottomColor:'#000',
        borderBottomWidth:1,
        paddingTop:20,
        paddingBottom:20,

    },  
    Toptitle:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
    },
    receiptDescription:{
        fontSize:12,
        fontWeight:'300',
        textAlign:'center',
    },
    topSection:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop:30,
    
    },
    bottomSection:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    StudentName:{
        fontWeight:'bold',
        fontSize:13,
    },
    ContainerSection:{
        margin:10,
    },
    BarcodeSection:{
        margin:20,
        padding:20,
    }
});