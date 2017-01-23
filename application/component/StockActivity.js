import React, { Component } from 'react';
import StockSearch from './StockSearch'
import StockListView from './StockListView'
import product from '../data/products';
import {StyleSheet, View, Button} from 'react-native';

export default class StockActivity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isChecked: false,
      products: product,
      // listOfItemsInCart: [];
    }
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

  render() {
    return (
      <View style = {styles.mainContainer}>
        <StockSearch onCheckboxChange={this.handleCheckBox} handleSearchText={this.handleSearchText} />
        <StockListView inStock={this.state.isChecked} prod={product} searchText={this.state.text} listOfItemsInCart={this.state.listOfItemsInCart} />
        <View style = {styles.buttons}>
          <View style = {styles.buttonAddToCart}>
            <Button
              color = "#ed6565"
              title="Add to Cart"
            />
          </View>
          <View style = {styles.buttonCheckOut}>
            <Button
              color = "#ed6565"
              title="Checkout"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: '#184ca0',
  },

  buttons: {
    height: 40,
    flexDirection: 'row',
  },

  buttonAddToCart: {
    flexGrow: 1,
  },

  buttonCheckOut: {
    flexGrow: 1,
  },
})
