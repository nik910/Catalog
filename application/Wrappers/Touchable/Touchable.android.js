import React, { Component } from 'react';
import {TouchableNativeFeedback, Text} from 'react-native';
import styles from './Touchable.style';

export default class Touchable extends React.Component{
  render(){
    return(
      <TouchableNativeFeedback onPress = {this.props.onPress}>
        <Text style = {styles.buyButton}>{this.props.text}</Text>
      </TouchableNativeFeedback>
    );
  }
}
