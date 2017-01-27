import React from 'react';
import {ListView, View, Text, TouchableHighlight} from 'react-native';
import CheckBox from 'react-native-checkbox';
import {Actions} from 'react-native-router-flux';
import ProductDetails from '../../ProductDetails';
import styles from './PropertiesProduct.style';

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
      <View style = {styles.productProperties}>
        {this.renderCheckBox()}
        {this.renderName()}
        <Text style = {styles.price}>{this.props.properties.price}</Text>
      </View>
    );
  }

  renderCheckBox = () => {

    if(this.props.properties.stocked === true){
      return(
        <CheckBox style = {styles.checkbox}
          label = ""
          checked = {this.state.stockCheckBox}
          underlayColor = "transparent"
          onChange = {() => this.handleCheckedItems()}
        />
      );
    }

    else{
      return(
        <CheckBox style = {styles.checkbox}
          label = ""
          checked = {this.state.unStockCheckBox}
          underlayColor = "transparent"
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
        <Text style = {styles.inStockName} onPress={() => Actions.productDetails(details)}>{name}</Text>
      );
    }

    else{
      return(
        <Text style = {styles.notInStockName} onPress={() => Actions.productDetails(details)}>{name}</Text>
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
