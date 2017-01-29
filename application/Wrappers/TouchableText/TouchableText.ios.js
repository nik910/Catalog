import React, { Component } from 'react';
import {TouchableHighlight, Text} from 'react-native';
import styles from './TouchableText.style';

export default class TouchableText extends React.Component{
  render(){
    return(
      <TouchableHighlight underlayColor={'transparent'} onPress={this.props.onPress}>
        <Text style = {this.props.style}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
