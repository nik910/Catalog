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
      stockCheckBox: false,
    }
  }

  render(){
    return(
      <View style = {style.productProperties}>
        {this.renderCheckBox()}
        {this.renderName()}
        <Text style = {style.price}>{this.props.properties.price}</Text>
      </View>
    );
  }

  renderCheckBox = () => {

    if(this.props.properties.stocked === true){
      return(
        <CheckBox style = {style.checkbox}
          label = ""
          checked = {this.state.stockCheckBox}
          onChange = {() => this.handleCheckedItems()}
        />
      );
    }

    else{
      return(
        <CheckBox style = {style.checkbox}
          label = ""
          checked = {this.state.unStockCheckBox}
          onChange={() => this.handleUnStockedCheckBox()}
        />
      );
    }

  }

  renderName = () => {
    const name = this.props.properties.name;
    const price = this.props.properties.price;
    const category = this.props.properties.category;
    const id = this.props.properties.id;

    let details = {
      name: name,
      price: price,
      category: category,
    }

    if(this.props.properties.stocked === true){
      return(
        <Text style = {style.inStockName} onPress={() => Actions.productDetails(details)}>{name}</Text>
      );
    }

    else{
      return(
        <Text style = {style.notInStockName} onPress={() => Actions.productDetails(details)}>{name}</Text>
      );
    }
  }

  handleUnStockedCheckBox = () => {
    this.setState({
      unStockCheckBox: this.state.unStockCheckBox
    }, () => {
      alert('This item is out of stock');
    });
  }

  handleCheckedItems = () => {
    this.setState({
      stockCheckBox: !this.state.stockCheckBox,
    }, () => {
      this.props.handleCheckedItems(this.props.properties.id);
    });
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
