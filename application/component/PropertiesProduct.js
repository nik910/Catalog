import React from 'react';
import {ListView, StyleSheet, View, Text} from 'react-native';

export default class PropertiesProduct extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const name = this.props.properties.a;
    const price = this.props.properties.b;

    if(this.props.properties.c === true){
      return(
        <View style = {style.productProperties}>
          <Text style = {style.inStockName}>{name}</Text>
          <Text style = {style.price}>{price}</Text>
        </View>
      );
    }

    else{
      return(
        <View style = {style.productProperties}>
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
  },

  inStockName:{
    fontSize: 15,
    color: 'white',
    width: 100,
  },

  notInStockName:{
    fontSize: 15,
    color: 'red',
    width: 100,
  },

  price:{
    fontSize: 15,
    color: 'white',
  },
})
