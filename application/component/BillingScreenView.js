import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class BillingScreenView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    if(id!==-1){
      return(
        <View style = {style.productDetails}>
          <Text style = {style.name}>{name}</Text>
          <Text style = {style.price}>{price}</Text>
        </View>
      );
    }

    else{
      return(
        <View style = {style.productDetails}>
          <Text style = {style.headerName}>{name}</Text>
          <Text style = {style.headerPrice}>{price}</Text>
        </View>
      );
    }
  }
}

const style = StyleSheet.create({
  productDetails:{
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },

  name:{
    fontSize: 15,
    color: 'black',
    width: 150,
  },

  price:{
    fontSize: 15,
    color: 'black',
  },

  headerName:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    width: 150,
  },

  headerPrice:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    width: 150,
  }

})
