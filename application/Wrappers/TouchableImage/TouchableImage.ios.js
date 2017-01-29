import React, { Component } from 'react';
import {TouchableHighlight, Text, Image} from 'react-native';
import styles from './TouchableImage.style';

export default class TouchableImage extends React.Component{
  render(){
    return(
      <TouchableHighlight underlayColor = {'transparent'} onPress = {this.props.onPress}>
        <Image style = {this.props.style} source = {this.props.source}/>
      </TouchableHighlight>
    );
  }
}
