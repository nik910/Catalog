import React, { Component } from 'react';
import {TouchableNativeFeedback, Text} from 'react-native';
import styles from './TouchableText.style';

export default class TouchableText extends React.Component{
  render(){
    return(
      <TouchableNativeFeedback onPress = {this.props.onPress}>
        <Text style = {this.props.style}>{this.props.text}</Text>
      </TouchableNativeFeedback>
    );
  }
}
