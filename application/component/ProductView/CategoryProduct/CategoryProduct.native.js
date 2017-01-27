import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './CategoryProduct.style'

export default class CategoryProduct extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Text style = {styles.category}>{this.props.prodCategory}</Text>
    );
  }
}
