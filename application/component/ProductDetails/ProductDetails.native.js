import React, { Component, PropTypes } from 'react';
import {Text, View, Button, TouchableHighlight, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './ProductDetails.style';

export default class ProductDetails extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style = {styles.detailsMainBody}>
        {this.renderBackButton()}
        {this.renderItemDetails()}
      </View>
    )
  }

  renderBackButton = () => {
    return(
      <View style = {styles.back}>
        <TouchableHighlight onPress = {() => Actions.pop()}>
          <Image
            style = {styles.backButton}
            source = {require('../../assets/images/go_back-ileadstar.com_.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }

  renderItemDetails = () => {
    return(
      <View style = {styles.details}>
        <Text style = {styles.category}>{this.props.category}</Text>
        <Text style = {styles.name}>{this.props.name}</Text>
        <Text style = {styles.price}>{this.props.price}</Text>
      </View>
    );
  }
}
