import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default class CategoryProduct extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Text style = {style.category}>{this.props.prodCategory}</Text>
    );
  }
}

const style = StyleSheet.create({
  category:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
})
