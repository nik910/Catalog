import React from 'react';
import {ListView, StyleSheet, View, Text} from 'react-native';

export default class CategoryProduct extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    var category = this.props.prodCategory;
    console.log(category);

    return(
      <Text style = {{fontSize: 20, fontWeight: 'bold', color: 'yellow'}}>{category}</Text>
    );
  }
}
