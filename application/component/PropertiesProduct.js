import React from 'react';
import {ListView, StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import CheckBox from 'react-native-checkbox';
import {Actions} from 'react-native-router-flux';
import ProductDetails from './ProductDetails';

export default class PropertiesProduct extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      unStockCheckBox: false,
      StockCheckBox: true,
    }
  }

  handleUnStockedCheckBox = () => {
    this.setState({
      unStockCheckBox: this.state.unStockCheckBox
    }, () => {
      alert('This item is out of stock');
    });
  }

  render(){

    const name = this.props.properties.name;
    const price = this.props.properties.price;
    const category = this.props.properties.category;

    // console.log(name);

    let details = {
      name: name,
      price: price,
      category: category,
    }



    if(this.props.properties.stocked === true){
      return(
        <View style = {style.productProperties}>
          <CheckBox style = {style.checkbox}
            label = ""
          />
          <Text style = {style.inStockName} onPress={() => Actions.productDetails(details)}>{name}</Text>
          <Text style = {style.price}>{price}</Text>
        </View>
      );
    }

    else{
      return(
        <View style = {style.productProperties}>
          <CheckBox style = {style.checkbox}
            label = ""
            checked = {this.state.unStockCheckBox}
            onChange={() => this.handleUnStockedCheckBox()}
          />
          <Text style = {style.notInStockName} onPress={() => Actions.productDetails(details)}>{name}</Text>
          <Text style = {style.price}>{price}</Text>
        </View>
      );
    }
  }
}

const style = StyleSheet.create({
  productProperties:{
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },

  inStockName:{
    fontSize: 15,
    color: 'black',
    width: 100,
  },

  notInStockName:{
    fontSize: 15,
    color: 'red',
    width: 100,
  },

  price:{
    fontSize: 15,
    color: 'black',
  },

  checkbox:{
    height: 20,
  },
})
