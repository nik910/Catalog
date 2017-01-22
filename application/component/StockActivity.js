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
        <StockListView inStock={this.state.isChecked} prod={product} searchText={this.state.text} />
        <View style = {styles.buttons}>
          <Button style = {styles.buttonAddToCart}
            title="Add to Cart"
          />
          <Button style = {styles.buttonCheckOut}
            title="Checkout"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  buttons: {
    flexGrow: 1,
    marginBottom: 10,
    // flexDirection: 'reve',
  },

  buttonAddToCart: {
    flexGrow: 1,
  },

  buttonCheckOut: {
    flexGrow: 1,
  },
})
