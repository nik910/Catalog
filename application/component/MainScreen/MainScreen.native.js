import React, { Component } from 'react';
import StockSearch from '../StockSearch'
import StockListView from '../ProductView/StockListView'
import product from '../../data/products';
import {View, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './MainScreen.style'

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isChecked: false,
      products: product,
      listOfItemsToBuy: [],
    }
  }

  render() {
    return (
      <View style = {styles.mainContainer}>
        <StockSearch onCheckboxChange={this.handleCheckBox} handleSearchText={this.handleSearchText} />
        <StockListView inStock={this.state.isChecked} prod={product} searchText={this.state.text} listOfItemsToBuy={this.handleCheckedItems} />
        {this.renderButton()}
      </View>
    );
  }

  handleCheckBox = (isChecked) => {
    this.setState({
      isChecked: isChecked,
    })
  }

  handleSearchText = (text) => {
    this.setState({
      text: text,
    })
  }

  handleCheckedItems = (checkedItems) => {
    this.setState({
      listOfItemsToBuy: checkedItems,
    });
  }

  renderButton = () => {

    let BillingPageDetails = {
      listOfItemsToBuy: this.state.listOfItemsToBuy,
      allProducts: this.state.products,
    }

    if(this.state.listOfItemsToBuy.length===0){
      return(
        <View style = {styles.buttons}>
          <Button
            color="#ed6565"
            title="Buy Items"
            onPress={() => alert('No Item Selected')}
          />
        </View>
      );
    }

    else{
      return(
        <View style = {styles.buttons}>
          <Button
            color="#ed6565"
            title="Buy Items"
            onPress={() => Actions.billingScreen(BillingPageDetails)}
          />
        </View>
      );
    }
  }
}