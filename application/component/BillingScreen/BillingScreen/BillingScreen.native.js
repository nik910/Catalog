import React, { Component, PropTypes } from 'react';
import {Text, View, Button, ListView, Image, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
import BillingScreenView from '../BillingScreenView';
import styles from './BillingScreen.style'

export default class BillingScreen extends Component{
  constructor(props){
    super(props);

    this.state = {
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    }
  }

  render(){

    let billingContents = this.makeBillingPage();
    return(
      <View style = {styles.detailsMainBody}>
        {this.renderBackButton()}
        <View style = {styles.details}>
          <ListView
            dataSource = {billingContents}
            renderRow={(rowData) => <View>{rowData}</View>}/>
        </View>
      </View>
    )
  }

  renderBackButton = () => {
    return(
      <View style = {styles.back}>
        <TouchableHighlight onPress = {() => Actions.pop()}>
          <Image
            style = {{padding: 10, width: 40, height: 50}}
            source = {require('../../../assets/images/go_back-ileadstar.com_.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }

  makeBillingPage = () => {
    let listOfItemsToBuy = this.props.listOfItemsToBuy;
    let allProducts = this.props.allProducts;
    let billingContents = [];
    billingContents.push(<BillingScreenView name = {'List Of Items'} price = {'Price'} id = {-1}/>)
    let totalPrice = 0;
    for(let x=0;x<listOfItemsToBuy.length;x++){
      billingContents.push(<BillingScreenView name = {allProducts[listOfItemsToBuy[x]].name} price = {allProducts[listOfItemsToBuy[x]].price} id = {x}/>);
      let priceOfEachItem = parseFloat(allProducts[listOfItemsToBuy[x]].price.split("$")[1]);
      console.log(allProducts[listOfItemsToBuy[x]].price.split("$")[1]);
      totalPrice+=priceOfEachItem;
    }

    totalPrice = totalPrice.toFixed(2);
    billingContents.push(<BillingScreenView name = {'Total Items'} price = {'TotalPrice'} id = {-1}/>)
    billingContents.push(<BillingScreenView name = {listOfItemsToBuy.length} price = {"$"+totalPrice} id = {100}/>)

    console.log(billingContents);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    billingContents = ds.cloneWithRows(billingContents);
    return billingContents;
  }
}
