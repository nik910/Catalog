import React from 'react';
import {ListView, StyleSheet, View, Text} from 'react-native';
import CheckBox from 'react-native-checkbox';

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

    const name = this.props.properties.a;
    const price = this.props.properties.b;

    if(this.props.properties.c === true){
      return(
        <View style = {style.productProperties}>
          <CheckBox style = {style.checkbox}
            label = ""
          />
          <Text style = {style.inStockName}>{name}</Text>
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
          <Text style = {style.notInStockName}>{name}</Text>
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
