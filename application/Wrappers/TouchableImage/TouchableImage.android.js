import React, { Component } from 'react';
import {TouchableNativeFeedback, Text, Image} from 'react-native';
import styles from './TouchableImage.style';

export default class TouchableImage extends React.Component{
  render(){
    return(
      <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress = {this.props.onPress}>
        <Image style = {this.props.style} source = {this.props.source}/>
      </TouchableNativeFeedback>
    );
  }
}
